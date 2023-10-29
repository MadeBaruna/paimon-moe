<script>
  import { locale, t } from 'svelte-i18n';

  import { getContext, onMount, tick } from 'svelte';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  import timezone from 'dayjs/plugin/timezone';
  dayjs.extend(duration);
  dayjs.extend(timezone);

  import { getTimeDifference, getTimeDifferenceAsia, getTimeOffset, server } from '../../stores/server';
  import { eventsData } from '../../data/timelines/timeline';

  import Checkbox from '../../components/Checkbox.svelte';
  import EventItem from './_item.svelte';
  import DetailModal from './_detail.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave } from '../../stores/saveManager';
  import Ad from '../../components/Ad.svelte';
  import { languages } from '../../data/languages';

  const { open: openModal } = getContext('simple-modal');

  let loading = true;

  let timelineContainer;

  let showAsLocalTime = true;
  let timeDifference = 0;
  let timeDifferenceEvent = 0;
  let timeDifferenceAsia = 0;

  let dayWidth = 40;
  const eventHeight = 36;
  const eventMargin = 20;
  const padding = 10;
  const marginTop = 80;

  let lastEventTime = dayjs().year(2000);
  let firstDay = dayjs();
  let dates = [];
  let months = {};
  let monthList = [];
  let events = [];
  let today = dayjs();

  let browserTimeZone = '';

  let firstLoad = true;

  function openDetail(event) {
    openModal(
      DetailModal,
      {
        event,
        timeDifference,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  function convertToDate(e, i) {
    let start;
    if (e.timezoneDependent) {
      start = dayjs(e.start, 'YYYY-MM-DD HH:mm:ss').subtract(timeDifferenceAsia, 'minute');
    } else {
      start = dayjs(e.start, 'YYYY-MM-DD HH:mm:ss').subtract(timeDifferenceEvent, 'minute');
    }
    const end = dayjs(e.end, 'YYYY-MM-DD HH:mm:ss').subtract(timeDifferenceEvent, 'minute');
    const duration = end.diff(start, 'day', true);

    if (lastEventTime < end) lastEventTime = end;

    return {
      ...e,
      index: i,
      start,
      end,
      duration,
    };
  }

  $: currentLocale =
    $locale !== null ? languages.find((e) => e.id === $locale.substring(0, 2)) || { id: 'en', label: 'English' } : '';
  $: locales = languages.filter((e) => e.id !== currentLocale.id);

  function processEvent() {
    const eventdata = languages.find(language => language.id == currentLocale.id).eventdata;
    events = eventdata.map((e, i) => {
      if (Array.isArray(e)) {
        return e.map((item) => convertToDate(item, i));
      }

      return convertToDate(e, i);
    });

    events
      .slice()
      .sort((a, b) => {
        if (Array.isArray(a) && Array.isArray(b)) {
          return a[0].start - b[0].start;
        } else if (!Array.isArray(a) && Array.isArray(b)) {
          return a.start - b[0].start;
        } else if (Array.isArray(a) && !Array.isArray(b)) {
          return a[0].start - b.start;
        } else {
          return a.start - b.start;
        }
      })
      .forEach((e, i) => {
        if (i === 0) {
          if (Array.isArray(e)) {
            firstDay = e[0].start.set('hour', 0).set('minute', 0).set('second', 0).subtract(padding, 'day');
          } else {
            firstDay = e.start.set('hour', 0).set('minute', 0).set('second', 0).subtract(padding, 'day');
          }
        }

        if (Array.isArray(e)) {
          for (let j = 0; j < e.length; j++) {
            const current = e[j];

            const offset = Math.abs(firstDay.diff(events[current.index][j].start, 'day', true));
            events[current.index][j].offset = offset;
          }
        } else {
          const offset = Math.abs(firstDay.diff(e.start, 'day', true));
          events[e.index].offset = offset;
        }
      });

    const dayTotal = Math.abs(Math.ceil(firstDay.diff(lastEventTime, 'day', true))) + 2 * padding;

    months = [];
    dayjs.locale(currentLocale.id);
    for (let i = 0; i < dayTotal; i++) {
      const month = firstDay.add(i, 'day').format('MMMM');
      if (months[month] === undefined) {
        months[month] = {
          total: 0,
          offset: 0,
        };
      }

      months[month].total++;
    }

    monthList = Object.entries(months);
    for (let i = 0; i < monthList.length; i++) {
      monthList[i][1].offset = i - 1 >= 0 ? monthList[i - 1][1].total + monthList[i - 1][1].offset : 0;
    }

    dates = [...new Array(dayTotal)].map((_, i) => {
      const cur = firstDay.add(i, 'day');
      return [cur.date(), cur.format('dd')];
    });
  }

  async function toggleLocalTime() {
    const diff = getTimeDifference();
    console.log('toggle local time', showAsLocalTime);

    if (showAsLocalTime) {
      timeDifferenceEvent = diff;
      timeDifference = 0;
      timeDifferenceAsia = getTimeDifferenceAsia();
    } else {
      timeDifferenceEvent = 0;
      timeDifference = diff;
      timeDifferenceAsia = (8 - getTimeOffset()) * 60;
    }

    today = dayjs().add(timeDifference, 'minute');
    await tick();
    processEvent();
    loading = false;
    await tick();

    if (timelineContainer === undefined) return;

    if (timelineContainer.offsetWidth < 500) {
      dayWidth = 30;
      await tick();
    }

    timelineContainer.scrollTo({
      left: todayOffset * dayWidth - timelineContainer.offsetWidth / 2 + dayWidth,
      top: 0,
      behavior: 'smooth',
    });

    firstLoad = false;
  }

  onMount(async () => {
    const prefix = getAccountPrefix();
    const serverSave = await readSave(`${prefix}server`);
    if (serverSave !== null) {
      console.log(serverSave);
      server.set(serverSave);
    }

    browserTimeZone = dayjs.tz.guess();
    toggleLocalTime();

    const interval = setInterval(() => {
      today = dayjs().add(timeDifference, 'minute');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  function onCheckLocalTime() {
    if (!firstLoad) {
      toggleLocalTime();
    }
  }

  function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }

    const delta = Math.abs(event.deltaY);
    const dir = event.deltaY > 0 ? 1 : -1;
    event.currentTarget.scrollLeft += Math.max(delta, 100) * dir + event.deltaX;
    event.preventDefault();
  }

  $: todayOffset = Math.abs(firstDay.diff(today, 'day', true));
  $: showAsLocalTime, onCheckLocalTime();
</script>

<svelte:head>
  <title>Timeline - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact event timeline calendar, view when an event and abyss order will start and end with neat timeline"
  />
  <meta
    property="og:description"
    content="Genshin Impact event timeline calendar, view when an event and abyss order will start and end with neat timeline"
  />
</svelte:head>

<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="flex">
    <div>
      <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('timeline.title')}</h1>
      <div class="px-4 md:px-8 text-white select-none">
        <Checkbox bind:checked={showAsLocalTime}>
          {$t('timeline.localTime')} ({browserTimeZone} - {$server} Server)
        </Checkbox>
      </div>
    </div>
    <Ad class="flex flex-1 justify-center" type="desktop" variant="lb" id="1" />
  </div>
  <Ad type="mobile" variant="lb" id="1" />
  {#if !loading}
    <div class="w-full overflow-x-auto px-4 md:px-8" bind:this={timelineContainer} on:wheel={transformScroll}>
      <div
        style={`padding-top: 50px; width: min-content; padding-right: ${2 * padding * dayWidth}px; height: ${
          marginTop + events.length * (eventHeight + eventMargin)
        }px`}
        class="timeline flex flex-col relative content"
      >
        <!-- DATE BAR -->
        {#each dates as date, i}
          <div
            class="bg-gray-700"
            style={`width: 1px; height: calc(100% - ${eventHeight}px); position: absolute; 
          left: ${i * dayWidth}px; top: ${eventHeight}px;`}
          >
            <span class="absolute top-0 text-gray-200 text-center pb-1" style="width: 20px; left: -10px;">
              {date[0]}
            </span>
            <span class="absolute top-0 text-gray-600 text-center pb-1" style="width: 20px; left: -10px; top: -24px;">
              {date[1]}
            </span>
          </div>
        {/each}
        <!-- MONTH TITLE -->
        {#each monthList as [month, item]}
          <div
            class="absolute pr-4"
            style={`top: 12px; width: ${item.total * dayWidth}px; left: ${item.offset * dayWidth}px;`}
          >
            <span class="text-legendary-from font-bold sticky left-0 month">{month}</span>
          </div>
        {/each}
        <!-- EVENT STRIP -->
        {#each events as event, i}
          {#if Array.isArray(event)}
            {#each event as item, j}
              <EventItem
                prev={j > 0 ? event[j - 1] : null}
                next={j < event.length - 1 ? event[j + 1] : null}
                now={today}
                event={item}
                openDetail={() => openDetail(item)}
                {dayWidth}
                {marginTop}
                {eventHeight}
                {eventMargin}
                {i}
              />
            {/each}
          {:else}
            <EventItem
              now={today}
              openDetail={() => openDetail(event)}
              {event}
              {dayWidth}
              {marginTop}
              {eventHeight}
              {eventMargin}
              {i}
            />
          {/if}
        {/each}
        <!-- NOW BAR -->
        <div
          class="bg-gray-200 z-20 relative opacity-75"
          style={`left: ${
            todayOffset * dayWidth
          }px; width: 2px; height: calc(100% - 10px); position: absolute; top: 10px;`}
        >
          <div class="absolute rounded-xl top-0 text-center bg-white text-black" style="width: 80px; left: -40px;">
            {today.format('HH:mm:ss')}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
    margin: 0 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    @apply rounded-xl;
  }

  .month::before {
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    display: inline-block;
    padding: 0 50px;
    position: absolute;
    left: calc(50% - 50px);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgb(37, 41, 74, 100) 10%,
      rgb(37, 41, 74, 100) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>
