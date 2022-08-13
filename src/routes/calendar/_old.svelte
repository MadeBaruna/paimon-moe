<script context="module">
  import { banners } from '../../data/banners';
  import { characters } from '../../data/characters';
  import { birthdays } from '../../data/birthdays';
</script>

<script>
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import localeData from 'dayjs/plugin/localeData';
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  dayjs.extend(localeData);

  let firstDay = 0;
  let selectedMonth = 0;
  let selectedYear = 2022;

  let monthName = '';
  let weekNames = [];

  let startingDate;
  let month = [];
  let weeks = [];

  const birthdayDates = {};

  const bannerCombined = [...banners.characters];
  const bannerDates = {};

  function processGrid() {
    const now = dayjs().year(selectedYear).month(selectedMonth).hour(0).minute(0).second(0);
    monthName = now.format('MMMM');

    const first = now.date(1);
    const prev = now.date(1).subtract(1, 'day');
    const prevDate = prev.date();
    firstDay = first.day();

    month = [];
    weeks = [];

    startingDate = prevDate - firstDay;
    let date = prev.date(startingDate);

    // const leftover = [[], [], [], [], [], [], []];

    for (let i = 0; i < 6; i++) {
      const week = [];

      let day = [
        [0, -1],
        [0, -1],
        [0, -1],
        [0, -1],
        [0, -1],
        [0, -1],
        [0, -1],
      ];
      let stack = [[], [], [], [], [], []];
      let fill = [0, 0, 0, 0, 0];

      for (let j = 0; j < 7; j++) {
        date = date.add(1, 'day');
        const current = date.month() === selectedMonth;
        const dateNumber = date.date();

        const banner = bannerDates?.[date.year()]?.[date.month()]?.[dateNumber];
        if (banner) {
          const cur = day[j][1] >= day[j][0] ? day[j][1] - 1 : day[j][0];
          const end = Math.ceil(dayjs(bannerCombined[banner].end).diff(date, 'day', true));

          const used = j - fill[cur];
          console.log('BANNER', dateNumber, j, cur, used, JSON.stringify(day));
          if (used > 0) {
            stack[cur].push({ l: used });
            fill[cur] += used;
          }

          const length = Math.min(7 - j, end);
          const left = end - length;
          // console.log('END BANNER', end, length, left);
          if (left > 0) {
            const nextWeek = date.add(1, 'week').day(0);
            // leftover[j + 1].push(bannerCombined[banner])
            bannerDates[selectedYear][nextWeek.month()][nextWeek.date()] = banner;
          }

          stack[cur].push({ l: length, t: 'w', d: bannerCombined[banner] });
          fill[cur] += length;

          for (let k = j; k < j + length; k++) {
            day[k][0] += 1;
            if (day[k][1] === -1) day[k][1] = cur;
          }
        }

        const birthday = birthdayDates?.[date.month() + 1]?.[dateNumber];
        if (birthday) {
          const cur = day[j][1] >= day[j][0] ? day[j][1] - 1 : day[j][0];
          // console.log('CUR BIRTH', cur);

          const used = j - fill[cur];
          console.log('CHAR', dateNumber, j, cur, used, JSON.stringify(day));
          if (used > 0) {
            stack[cur].push({ l: used });
            fill[cur] += used;
          }
          stack[cur].push({ l: 1, t: 'b', d: birthday });
          fill[cur] += 1;

          day[j][0] += 1;
          if (day[j][1] === -1) day[j][1] = cur;
        }

        week.push({
          d: dateNumber,
          c: current,
        });
      }

      // console.log(day, stack);

      weeks.push(stack);
      month.push(week);
    }

    // console.log(weeks);

    month = month;
    weeks = weeks;
  }

  function processWeek() {
    const first = now.date(1);
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

    processGrid();
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
    console.log(birthdayDates);
  }

  function processBanner() {
    for (let i = 0; i < bannerCombined.length; i++) {
      const banner = bannerCombined[i];

      const start = dayjs(banner.start);
      const end = dayjs(banner.end);

      const startYear = start.year();
      const startMonth = start.month();
      const startDate = start.date();
      const endYear = end.month();
      const endMonth = end.month();
      const endDate = end.date();

      // console.log(banner.name, startYear, startMonth, startDate);
      if (bannerDates[startYear] === undefined) bannerDates[startYear] = {};
      if (bannerDates[startYear][startMonth] === undefined) bannerDates[startYear][startMonth] = {};
      if (bannerDates[startYear][startMonth][startDate] === undefined)
        bannerDates[startYear][startMonth][startDate] = {};
      // if (bannerDates[endMonth] === undefined) bannerDates[endMonth] = [];
      // if (bannerDates[endMonth][endDate] === undefined) bannerDates[endMonth][endDate] = [];

      bannerDates[startYear][startMonth][startDate] = i;
      // bannerDates[startMonth][endDate] = i;
    }
    console.log(bannerDates);
  }

  onMount(() => {
    processBirthday();
    processBanner();

    weekNames = dayjs.weekdaysShort();

    const now = dayjs();
    selectedMonth = now.month();
    selectedYear = now.year();

    processGrid();
  });
</script>

<div class="lg:ml-64 pt-20 lg:pt-8 lg:px-8 max-w-screen-xl">
  <div>
    <button on:click={() => changeMonth(-1)}>PREV</button>
    <span style="display: inline-block; width: 150px; text-align: center; margin-bottom: 10px;">
      {monthName}
      {selectedYear}
    </span>
    <button on:click={() => changeMonth(1)}>NEXT</button>
  </div>
  <table class="border-separate border-spacing-x-1 table-fixed w-full">
    <tbody>
      <tr>
        {#each weekNames as day}
          <td class="text-white font-bold bg-background rounded-xl py-2 text-center">
            {day}
          </td>
        {/each}
      </tr>
    </tbody>
  </table>
  {#each month as week, i}
    <div class="w-full mt-1 relative h-28">
      <table class="table-fixed w-full border-separate border-spacing-x-1 absolute z-0">
        <tr>
          {#each week as day}
            <td class="bg-background rounded-xl h-28" />
          {/each}
        </tr>
      </table>
      <table class="table-fixed w-full border-separate border-spacing-x-1 absolute z-10">
        <tr>
          {#each week as day}
            <td class="leading-tight pl-1 {day.c ? 'text-white' : 'text-gray-700'}">{day.d}</td>
          {/each}
        </tr>
        {#each weeks[i] as stack}
          <tr>
            {#each stack as w}
              {#if w.t === 'b'}
                <td colspan={w.l}>
                  <p class="rounded-md px-2 bg-purple-400">
                    {#each w.d as char}
                      <img src="/images/characters/{char}.png" alt={char} class="w-6 h-6 mr-1 align-bottom inline" />
                    {/each}
                    <span class="leading-none text-sm">Birthday</span>
                  </p>
                </td>
              {:else if w.t === 'w'}
                <td colspan={w.l}>
                  <p class="rounded-md px-2" style="background-color: {w.d.color}">
                    <span class="leading-none text-sm">{w.d.name}</span>
                  </p>
                </td>
              {:else}
                <td colspan={w.l} />
              {/if}
            {/each}
          </tr>
        {/each}
      </table>
    </div>
  {/each}
</div>
