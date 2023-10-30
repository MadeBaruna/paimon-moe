<script>
  import { locale, t } from 'svelte-i18n';
  import { createEventDispatcher, onMount, tick } from 'svelte';
  import { mdiChevronRight } from '@mdi/js';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  dayjs.extend(duration);

  import Icon from '../../components/Icon.svelte';
  import { eventsData } from '../../data/timelines/timeline';
  import { getTimeDifference, getTimeDifferenceAsia, server } from '../../stores/server';
  import { getAccountPrefix } from '../../stores/account';
  import { getLocalSaveJson, readSave } from '../../stores/saveManager';
  import { languages } from '../../data/languages';
  const dispatch = createEventDispatcher();

  let now;
  let upcoming = [];
  let current = [];

  let timeDifferenceEvent;
  let timeDifferenceAsia;

  function checkEvent(event) {
    if (!event.showOnHome) return;

    let start;
    if (event.timezoneDependent) {
      start = dayjs(event.start, 'YYYY-MM-DD HH:mm:ss').subtract(timeDifferenceAsia, 'minute');
    } else {
      start = dayjs(event.start, 'YYYY-MM-DD HH:mm:ss').subtract(timeDifferenceEvent, 'minute');
    }

    const end = dayjs(event.end).subtract(timeDifferenceEvent, 'minute');

    if (start.isBefore(now) && end.isAfter(now)) {
      const diff = end.diff(now);
      const timeLeft = dayjs.duration(diff);
      event.time = diff > 86400000 ? timeLeft.format('D[d] H[h]') : timeLeft.format('H[h]');
      current = [...current, event];
    } else if (start.isAfter(now)) {
      const diff = start.diff(now);
      event.time =
        diff > 86400000
          ? `${Math.trunc(dayjs.duration(diff).asDays())}d ${dayjs.duration(diff).format('H[h]')}`
          : dayjs.duration(diff).format('H[h]');
      upcoming = [...upcoming, event];
    }
  }

  $: currentLocale =
    $locale !== null ? languages.find((e) => e.id === $locale.substring(0, 2)) || { id: 'en', label: 'English' } : '';
  $: locales = languages.filter((e) => e.id !== currentLocale.id);

  function parseEvents() {
    if (Array.isArray(eventsData)) {
      for (const ev of eventsData) {
        checkEvent(ev);
      }
    } else {
      checkEvent(event);
    }

    current.sort((a, b) => (dayjs(a.end).isAfter(dayjs(b.end)) ? 1 : -1));
    upcoming.sort((a, b) => (dayjs(a.start).isAfter(dayjs(b.start)) ? 1 : -1));
  }

  onMount(async () => {
    const prefix = getAccountPrefix();
    const serverSave = await readSave(`${prefix}server`);
    if (serverSave !== null) {
      server.set(serverSave);
    }

    timeDifferenceEvent = getTimeDifference();
    timeDifferenceAsia = getTimeDifferenceAsia();
    now = dayjs();

    parseEvents();
    await tick();
    dispatch('done');
  });
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  {#if upcoming.length > 0}
    <p class="text-white mb-1">{$t('home.event.upcoming')}</p>
    <div class="flex flex-col">
      {#each upcoming as item}
        <div class="pl-2 pr-1 py-1 rounded-xl mb-1 flex" style="background: {item.color};">
          <span class="whitespace-nowrap overflow-x-hidden flex-1 mr-1 text-sm" style="text-overflow: ellipsis;">
            {item.name}
          </span>
          <span class="bg-black bg-opacity-50 rounded-xl px-2 text-white text-sm">{item.time}</span>
        </div>
      {/each}
    </div>
  {/if}
  {#if current.length > 0}
    <p class="text-white mb-1">{$t('home.event.current')}</p>
    <div class="flex flex-col">
      {#each current as item}
        <div class="pl-2 pr-1 py-1 rounded-xl mb-1 flex" style="background: {item.color};">
          <span class="whitespace-nowrap overflow-x-hidden flex-1 mr-1 text-sm" style="text-overflow: ellipsis;">
            {item.name}
          </span>
          <span class="bg-black bg-opacity-50 rounded-xl px-2 text-white text-sm">{item.time}</span>
        </div>
      {/each}
    </div>
  {/if}
  <a
    href="/timeline"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4
    bg-background-secondary rounded-xl py-2 px-4 hover:bg-background transition-colors duration-100"
  >
    <img src="/images/timeline.png" alt="wish" class="mr-2 h-6 w-6" />
    {$t('home.event.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
