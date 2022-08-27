<script context="module">
  import { banners } from '../../data/banners';
  import { characters } from '../../data/characters';
  import { birthdays } from '../../data/birthdays';
  import { events } from '../../data/events';
</script>

<script>
  import { getContext, onMount } from 'svelte';
  import dayjs from 'dayjs';
  import { t } from 'svelte-i18n';
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

  import duration from 'dayjs/plugin/duration';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import localeData from 'dayjs/plugin/localeData';
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  dayjs.extend(localeData);

  import { getTimeDifference, getTimeDifferenceAsia, getTimeOffset, server } from '../../stores/server';

  import Icon from '../../components/Icon.svelte';
  import Tooltip from '../../components/Tooltip.svelte';
  import DetailModal from './_detail.svelte';
  import BirthdayModal from './_birthday.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave } from '../../stores/saveManager';
  import { bannersDual } from '../../data/bannersDual';

  const { open: openModal } = getContext('simple-modal');

  let browserTimeZone = '';

  let timeDifference = 0;
  let timeDifferenceEvent = 0;
  let timeDifferenceAsia = 0;

  const today = dayjs();
  let selectedMonth = 0;
  let selectedYear = 2022;

  let hightligtedDate = dayjs().year(2000);

  let month = [];
  let monthName = '';
  let weekNames = [];

  const birthdayDates = {};

  const lastLegendary = {};
  const lastRare = {};
  const lastBannerDate = {};
  const lastBannerStart = {};

  const bannerDates = {
    characters: {},
    weapons: {},
  };

  const eventDates = {};

  let hovered = '';

  let sortedLegendary = [];
  let sortedRare = [];

  let ignoredLegendary = [
    'traveler_anemo',
    'traveler_geo',
    'traveler_electro',
    'traveler_dendro',
    'aloy',
    'diluc',
    'keqing',
    'qiqi',
    'jean',
    'mona',
    'tighnari',
  ];

  let ignoredRare = ['amber', 'kaeya', 'lisa'];

  function process() {
    const now = dayjs().year(selectedYear).month(selectedMonth);
    monthName = now.format('MMMM');

    const first = now.date(1);
    const prev = now.date(1).subtract(1, 'day');
    const prevDate = prev.date();
    const firstDay = first.day();

    month = [];

    let startDate = prevDate - firstDay;
    let date = prev.date(startDate);

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        date = date.add(1, 'day');
        const _today = date.isSame(today, 'day');
        const dateNumber = date.date();
        const monthNumber = date.month();
        const current = monthNumber === selectedMonth;
        const birthday = birthdayDates?.[date.month() + 1]?.[dateNumber];
        const bannerChar = bannerDates.characters?.[date.year()]?.[date.month()]?.[dateNumber];
        const bannerWeap = bannerDates.weapons?.[date.year()]?.[date.month()]?.[dateNumber];
        const event = eventDates?.[date.year()]?.[date.month()]?.[dateNumber];

        const highlited = date.isSame(hightligtedDate, 'day');

        week.push({
          c: _today ? 'text-primary' : current ? 'text-white' : 'text-gray-700',
          t: _today,
          h: highlited,
          d: dateNumber,
          m: monthNumber,
          b: birthday,
          wc: bannerChar,
          wp: bannerWeap,
          e: event,
        });
      }

      month.push(week);
    }

    month = month;
  }

  function changeMonth(val) {
    selectedMonth = selectedMonth + val;
    if (selectedMonth > 11) {
      selectedMonth = 0;
      selectedYear = selectedYear + 1;
    } else if (selectedMonth < 0) {
      selectedMonth = 11;
      selectedYear = selectedYear - 1;
    }

    hightligtedDate = dayjs().year(2000);
    process();
  }

  function processChar() {
    for (const [char, data] of Object.entries(characters)) {
      if (data.rarity === 5) lastLegendary[char] = 0;
      else lastRare[char] = 0;
    }

    for (const banner of banners.characters) {
      for (const char of Object.keys(lastLegendary)) {
        lastLegendary[char]++;
      }
      for (const char of Object.keys(lastRare)) {
        lastRare[char]++;
      }

      for (const char of banner.featured) {
        lastLegendary[char] = 0;
        lastBannerDate[char] = dayjs.duration(dayjs(banner.end).diff(dayjs()));
        lastBannerStart[char] = banner;
      }
      for (const char of banner.featuredRare) {
        lastRare[char] = 0;
        lastBannerDate[char] = dayjs.duration(dayjs(banner.end).diff(dayjs()));
        lastBannerStart[char] = banner;
      }

      const dualBanner = bannersDual[`${banner.name} ${banner.image}`]?.[1];
      if (dualBanner) {
        for (const char of dualBanner.featured) {
          lastLegendary[char] = 0;
          lastBannerDate[char] = dayjs.duration(dayjs(banner.end).diff(dayjs()));
          lastBannerStart[char] = banner;
        }
        for (const char of dualBanner.featuredRare) {
          lastRare[char] = 0;
          lastBannerDate[char] = dayjs.duration(dayjs(banner.end).diff(dayjs()));
          lastBannerStart[char] = banner;
        }
      }
    }

    for (const c of ignoredLegendary) {
      delete lastLegendary[c];
    }
    for (const c of ignoredRare) {
      delete lastRare[c];
    }

    sortedLegendary = Object.entries(lastLegendary).sort((a, b) => b[1] - a[1]);
    sortedRare = Object.entries(lastRare).sort((a, b) => b[1] - a[1]);

    console.log(sortedLegendary);
  }

  function processBirthday() {
    for (const [char, date] of Object.entries(birthdays)) {
      const [month, day] = date;
      if (birthdayDates[month] === undefined) {
        birthdayDates[month] = {};
      }

      if (birthdayDates[month][day] === undefined) {
        birthdayDates[month][day] = [];
      }

      birthdayDates[month][day].push(char);
    }
  }

  function processBanner(type) {
    for (let i = 0; i < banners[type].length; i++) {
      const banner = banners[type][i];

      const start = dayjs(banner.start).subtract(
        banner.timezoneDependent ? timeDifferenceAsia : timeDifferenceEvent,
        'minute',
      );

      const year = start.year();
      const month = start.month();
      const date = start.date();

      if (bannerDates[type][year] === undefined) bannerDates[type][year] = {};
      if (bannerDates[type][year][month] === undefined) bannerDates[type][year][month] = {};

      bannerDates[type][year][month][date] = banner;
    }
  }

  function processEvent() {
    for (let i = 0; i < events.length; i++) {
      const event = events[i];

      const start = dayjs(event.start).subtract(
        event.timezoneDependent ? timeDifferenceAsia : timeDifferenceEvent,
        'minute',
      );
      const end = dayjs(event.end).subtract(timeDifferenceEvent, 'minute');

      const year = start.year();
      const month = start.month();
      const date = start.date();
      const yearEnd = end.year();
      const monthEnd = end.month();
      const dateEnd = end.date();

      if (eventDates[year] === undefined) eventDates[year] = {};
      if (eventDates[year][month] === undefined) eventDates[year][month] = {};
      if (eventDates[year][month][date] === undefined) eventDates[year][month][date] = [];
      if (eventDates[yearEnd] === undefined) eventDates[yearEnd] = {};
      if (eventDates[yearEnd][monthEnd] === undefined) eventDates[yearEnd][monthEnd] = {};
      if (eventDates[yearEnd][monthEnd][dateEnd] === undefined) eventDates[yearEnd][monthEnd][dateEnd] = [];

      eventDates[year][month][date].push({ e: event, s: true });
      eventDates[yearEnd][monthEnd][dateEnd].push({ e: event, s: false });
    }
  }

  function hoverEvent(name) {
    hovered = name;
  }

  function goToBannerTime(banner) {
    const date = dayjs(banner.start).subtract(
      banner.timezoneDependent ? timeDifferenceAsia : timeDifferenceEvent,
      'minute',
    );
    selectedYear = date.year();
    selectedMonth = date.month();
    hightligtedDate = date;
    process();

    window.scrollTo(0, 0);
  }

  function openDetail(type, event) {
    openModal(
      DetailModal,
      {
        type,
        event,
        timeDifference,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  function openBirthday(char, date, month) {
    openModal(
      BirthdayModal,
      {
        char: char.map((e) => (e === 'paimon' ? { id: 'paimon_hello', name: 'Paimon' } : characters[e])),
        time: dayjs().month(month).date(date),
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  onMount(async () => {
    const prefix = getAccountPrefix();
    const serverSave = await readSave(`${prefix}server`);
    if (serverSave !== null) {
      console.log(serverSave);
      server.set(serverSave);
    }

    const diff = getTimeDifference();
    timeDifferenceEvent = diff;
    timeDifference = 0;
    timeDifferenceAsia = getTimeDifferenceAsia();

    browserTimeZone = dayjs.tz.guess();

    weekNames = dayjs.weekdaysShort();

    const now = dayjs();
    selectedMonth = now.month();
    selectedYear = now.year();

    processBirthday();
    processBanner('characters');
    processBanner('weapons');
    processEvent();
    processChar();
    process();
  });
</script>

<svelte:head>
  <title>Calendar - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Calendar to show genshin impact events, banner, and birthday dates!"
  />
  <meta
    property="og:description"
    content="Genshin Impact Calendar to show genshin impact events, banner, and birthday dates!"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl">
  <div class="px-4 2xl:px-8 mb-4 flex flex-col">
    <div class="mb-1 flex gap-1">
      <button
        class="ring-primary hover:ring-2 bg-background rounded-xl px-3 text-white"
        on:click={() => changeMonth(-1)}
      >
        <Icon path={mdiChevronLeft} />
      </button>
      <button
        class="ring-primary hover:ring-2 bg-background rounded-xl px-3 text-white"
        on:click={() => changeMonth(1)}
      >
        <Icon path={mdiChevronRight} />
      </button>
      <div class="bg-background rounded-xl h-10 font-bold flex w-full">
        <p class=" font-normal text-sm text-gray-600 rounded-xl leading-10 px-8">
          {browserTimeZone}
        </p>
        <p class="leading-10 px-2 text-white flex-1 text-center text-xl">
          {monthName}
          {selectedYear}
        </p>
        <p class="font-normal text-sm text-gray-600 rounded-xl leading-10 px-8">
          {$server} Server
        </p>
      </div>
      <button
        class="ring-primary hover:ring-2 bg-background rounded-xl px-3 text-white"
        on:click={() => changeMonth(-1)}
      >
        <Icon path={mdiChevronLeft} />
      </button>
      <button
        class="ring-primary hover:ring-2 bg-background rounded-xl px-3 text-white"
        on:click={() => changeMonth(1)}
      >
        <Icon path={mdiChevronRight} />
      </button>
    </div>
    <div class="grid grid-cols-7 gap-x-1">
      {#each weekNames as day}
        <div class="text-white font-bold bg-background rounded-xl text-center h-10 leading-10">
          {day}
        </div>
      {/each}
    </div>
    {#each month as week}
      <div class="grid grid-cols-7 gap-x-1 pt-1">
        {#each week as day}
          <div
            class="scrollbar overflow-y-auto bg-background rounded-xl h-28 relative flex flex-col {day.t
              ? 'ring-2 ring-primary'
              : ''} {day.h ? 'ring-2 ring-green-400' : ''}"
          >
            <p class="select-none pl-2 {day.c}">{day.d}</p>
            <div class="flex flex-wrap gap-1 px-2 pb-1">
              {#if day.wc}
                <div
                  on:click={() => openDetail('banners', day.wc)}
                  style="--tw-ring-color: {day.wc.color}; background-color: {day.wc.color};"
                  class="cursor-pointer rounded-md inline-flex items-center text-sm px-2 space-x-1 ring-offset-1 ring-offset-background hover:ring-2"
                >
                  <!-- {day.w.name} -->
                  {#each day.wc.featured as char}
                    <img class="w-6 h-6 inline" src="/images/characters/{char}.png" alt={char} />
                  {/each}
                  {#each day.wc.featuredRare as char}
                    <img class="w-6 h-6 inline" src="/images/characters/{char}.png" alt={char} />
                  {/each}
                  <!-- <img class="w-6 h-6 inline" src="/images/intertwined_fate.png" alt="fate" /> -->
                </div>
              {/if}
              {#if day.wp}
                <div
                  on:click={() => openDetail('banners', day.wp)}
                  class="cursor-pointer bg-orange-200 rounded-md inline-flex items-center text-sm px-2 ring-orange-200 ring-offset-1 ring-offset-background hover:ring-2"
                >
                  <!-- {day.w.name} -->
                  {#each day.wp.featured as weapon}
                    <img class="w-6 h-6 inline" src="/images/weapons/{weapon}.png" alt={weapon} />
                  {/each}
                  <!-- <img class="w-6 h-6 inline" src="/images/intertwined_fate.png" alt="fate" /> -->
                </div>
              {/if}
              {#if day.b}
                <div
                  on:click={() => openBirthday(day.b, day.d, day.m)}
                  class="cursor-pointer bg-purple-400 rounded-md inline-flex items-center px-2 ring-purple-400 ring-offset-1 ring-offset-background hover:ring-2"
                >
                  {#each day.b as char}
                    <img class="w-6 h-6 inline mr-2" src="/images/characters/{char}.png" alt={char} />
                  {/each}
                  <span class="text-sm">🎁</span>
                </div>
              {/if}
              {#if day.e}
                {#each day.e as event}
                  <div
                    on:mouseenter={() => hoverEvent(event.e.name)}
                    on:mouseleave={() => hoverEvent('')}
                    on:click={() => openDetail('events', event.e)}
                    style="--tw-ring-color: {event.e.color}; --color: {event.e.color};"
                    class="cursor-pointer rounded-md ring-offset-1 ring-offset-background h-6 w-full inline-flex items-center text-xs px-2 space-x-1 event-strip {event.s
                      ? ''
                      : 'end'} {hovered === event.e.name ? 'ring-2' : ''}"
                  >
                    <p class="max-h-full w-full overflow-hidden text-ellipsis whitespace-nowrap">{event.e.name}</p>
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>

  <h1 class="font-display px-4 md:px-8 font-black text-3xl text-white mt-8">{$t('calendar.lastAppearance')}</h1>
  <p class="text-gray-400 px-4 md:px-8 font-medium pb-4 -mt-2">
    ※ {$t('calendar.lastAppearanceDesc')}
  </p>
  <div class="flex gap-4 px-8">
    <div class="p-4 bg-background rounded-xl">
      <table class="text-white">
        <tr>
          <td class="text-white font-semibold py-1" />
          <td class="text-white font-semibold py-1 px-4">{$t('wish.detail.name')}</td>
          <td class="text-white font-semibold py-1 px-4 text-center">
            <Tooltip title={$t('calendar.bannerHover')}>{$t('wish.detail.banner')}</Tooltip>
          </td>
          <td class="text-white font-semibold py-1">{$t('wish.detail.time')}</td>
        </tr>
        {#each sortedLegendary as [char, val]}
          <tr on:click={() => goToBannerTime(lastBannerStart[char])}>
            <td class="cursor-pointer text-white py-1 border-t border-gray-700">
              <img class="w-8 h-8" src="/images/characters/{char}.png" alt={char} />
            </td>
            <td class="cursor-pointer text-white px-4 py-1 border-t border-gray-700">{characters[char].name}</td>
            <td class="cursor-pointer text-white px-4 py-1 border-t border-gray-700 text-center">{val}</td>
            <td class="cursor-pointer text-white py-1 border-t border-gray-700">
              {lastBannerDate[char].humanize(true)}
            </td>
          </tr>
        {/each}
      </table>
    </div>
    <div class="p-4 bg-background rounded-xl">
      <table class="text-white">
        <tr>
          <td class="text-white font-semibold py-1" />
          <td class="text-white font-semibold py-1 px-4">Name</td>
          <td class="text-white font-semibold py-1 px-4 text-center">
            <Tooltip title={$t('calendar.bannerHover')}>Banner</Tooltip>
          </td>
          <td class="text-white font-semibold py-1">Time</td>
        </tr>
        {#each sortedRare as [char, val]}
          <tr on:click={() => goToBannerTime(lastBannerStart[char])}>
            <td class="cursor-pointer text-white py-1 border-t border-gray-700">
              <img class="w-8 h-8" src="/images/characters/{char}.png" alt={char} />
            </td>
            <td class="cursor-pointer text-white px-4 py-1 border-t border-gray-700">{characters[char].name}</td>
            <td class="cursor-pointer text-white px-4 py-1 border-t border-gray-700 text-center">{val}</td>
            <td class="cursor-pointer text-white py-1 border-t border-gray-700">
              {lastBannerDate[char].humanize(true)}
            </td>
          </tr>
        {/each}
      </table>
    </div>
  </div>
</div>

<style lang="postcss">
  .event-strip {
    background: var(--color);
    background: linear-gradient(90deg, var(--color) 0%, var(--color) 80%, rgba(0, 0, 0, 0) 100%);

    &.end {
      background: linear-gradient(-90deg, var(--color) 0%, var(--color) 80%, rgba(0, 0, 0, 0) 100%);
      direction: rtl;
    }
  }

  .scrollbar {
    scrollbar-color: transparent rgba(0, 0, 0, 0.35);
  }
  .scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    @apply rounded-xl;
  }
  .scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
</style>
