<script>
  import { getContext, onMount, tick } from 'svelte';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  dayjs.extend(duration);

  import { eventsData } from '../../data/timeline';

  import EventItem from './_item.svelte';
  import DetailModal from './_detail.svelte';

  const { open: openModal } = getContext('simple-modal');

  function openDetail(event) {
    openModal(
      DetailModal,
      {
        event,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  let timelineContainer;

  let dayWidth = 50;
  const eventHeight = 36;
  const eventMargin = 20;
  const padding = 10;
  const marginTop = 80;

  let lastEventTime = dayjs().year(2000);
  let firstDay;
  let dates = [];
  let months = {};

  function convertToDate(e, i) {
    const start = dayjs(e.start, 'YYYY-MM-DD HH:mm:ss');
    const end = dayjs(e.end, 'YYYY-MM-DD HH:mm:ss');
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

  let events = eventsData.map((e, i) => {
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

  let today = dayjs();
  $: todayOffset = Math.abs(firstDay.diff(today, 'day', true));

  const dayTotal = Math.abs(Math.ceil(firstDay.diff(lastEventTime, 'day', true))) + 2 * padding;

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

  const monthList = Object.entries(months);
  for (let i = 0; i < monthList.length; i++) {
    monthList[i][1].offset = i - 1 >= 0 ? monthList[i - 1][1].total + monthList[i - 1][1].offset : 0;
  }

  dates = [...new Array(dayTotal)].map((_, i) => firstDay.add(i, 'day').date());

  onMount(() => {
    console.log(firstDay);
    console.log(events);
    if (timelineContainer.offsetWidth < 500) {
      dayWidth = 40;
      tick();
    }

    timelineContainer.scrollTo({
      left: todayOffset * dayWidth - timelineContainer.offsetWidth / 2 + dayWidth,
      top: 0,
      behavior: 'smooth',
    });

    const interval = setInterval(() => {
      today = dayjs();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }

    event.currentTarget.scrollLeft += event.deltaY;
  }
</script>

<svelte:head>
  <title>Timeline - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact event timeline calendar, view when an event and abyys order will start and end with neat timeline"
  />
  <meta
    property="og:description"
    content="Genshin Impact event timeline calendar, view when an event and abyys order will start and end with neat timeline"
  />
</svelte:head>

<div class="lg:ml-64 pt-20 lg:pt-8">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">Timeline</h1>
  <div class="w-full overflow-x-auto px-4 md:px-8" bind:this={timelineContainer} on:mousewheel={transformScroll}>
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
          <span
            class="absolute top-0 text-gray-200 text-center pb-1 bg-background-secondary"
            style="width: 20px; left: -10px;"
          >
            {date}
          </span>
        </div>
      {/each}
      <!-- MONTH TITLE -->
      {#each monthList as [month, item]}
        <div
          class="absolute bg-background-secondary pr-4"
          style={`top: 12px; width: ${item.total * dayWidth}px; left: ${item.offset * dayWidth}px;`}
        >
          <span class="text-legendary-from font-bold sticky left-0">{month}</span>
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
</div>

<style>
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
</style>
