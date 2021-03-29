<script context="module">
  export async function preload(page) {
    const { id } = page.params;
    return { id };
  }
</script>

<script>
  import { t } from 'svelte-i18n';
  import { getContext, onMount, tick } from 'svelte';
  import { mdiArrowLeft, mdiStar } from '@mdi/js';
  import dayjs from 'dayjs';
  import Chart from 'chart.js';

  import { banners } from '../../data/banners';

  import Icon from '../../components/Icon.svelte';
  import TableHeader from '../../components/Table/TableHeader.svelte';
  import WishDetailModal from './_detail.svelte';

  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';
  import { getAccountPrefix } from '../../stores/account';
  import { fromRemote, readSave } from '../../stores/saveManager';
  import { getTimeOffset } from '../../stores/server';
  import { pushToast } from '../../stores/toast';

  Chart.defaults.global.defaultFontColor = '#cbd5e0';
  Chart.defaults.global.defaultFontFamily = 'Poppins';

  let numberFormat = Intl.NumberFormat();

  const { open: openModal } = getContext('simple-modal');

  export let id;

  const bannerTypes = {
    'character-event': 'characters',
    'weapon-event': 'weapons',
    standard: 'standard',
    beginners: 'beginners',
  };

  const bannerType = bannerTypes[id];
  let bannerChart;
  let pieChart;

  let loading = true;
  let pullData = [];
  let pulls = [];
  let sorted = [];
  let total = 0;
  let legendary = 0;
  let rare = 0;

  let allLegendary = [];
  let allRare = [];

  let sortBy = 'time';
  let sortOrder;

  let currentBannerIndex = -1;
  let selectedBanners;

  selectedBanners = banners[bannerType].map((e) => {
    // banner data based on Asia time
    const diff = e.timezoneDependent === true ? 8 - getTimeOffset() : 0;

    const start = dayjs(e.start, 'YYYY-MM-DD HH:mm:ss').subtract(diff, 'hour');
    const end = dayjs(e.end, 'YYYY-MM-DD HH:mm:ss');
    const image = `/images/banners/${e.name} ${e.image}.png`;

    return {
      ...e,
      start: start.unix(),
      end: end.unix(),
      image,
      total: 0,
      legendary: [],
      rare: {
        character: [],
        weapon: [],
      },
    };
  });

  function openDetail(banner) {
    openModal(
      WishDetailModal,
      {
        banner,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  function readLocalData() {
    console.log('wish read local');
    const prefix = getAccountPrefix();
    const data = readSave(`${prefix}${path}`);
    if (data !== null) {
      const counterData = JSON.parse(data);
      total = counterData.total;
      legendary = counterData.legendary;
      rare = counterData.rare;
      pullData = counterData.pulls || [];
    }

    processPullData();
  }

  function getNextBanner(time) {
    for (let i = currentBannerIndex + 1; i < selectedBanners.length; i++) {
      console.log('change banner', i, dayjs.unix(time).format(), dayjs.unix(selectedBanners[i].start).format());
      if (time >= selectedBanners[i].start && time < selectedBanners[i].end) {
        currentBannerIndex = i;
        return selectedBanners[i];
      }
    }
  }

  async function processPullData() {
    const currentPulls = [];
    console.log(selectedBanners);

    let currentBanner = null;
    let grouped = false;
    let striped = false;
    let startBanner = false;
    for (let i = 0; i < pullData.length; i++) {
      const pull = pullData[i];
      const next = pullData[i + 1] || { time: dayjs().year(2000).unix() };

      if (currentBanner === null || currentBanner.end < pull.time) {
        currentBanner = getNextBanner(pull.time);

        if (currentBanner === undefined) {
          pushToast($t('wish.errorBanner'), 'error');
          Sentry.captureException(new Error('failed to get current banner'), {
            contexts: {
              pull,
              path,
            },
          });
          return;
        }

        startBanner = true;

        if (i > 0) {
          currentPulls[i - 1].end = true;
        }
      }

      const item =
        pull.type === 'character'
          ? characters[pull.id]
          : pull.type === 'weapon'
          ? weaponList[pull.id]
          : { name: 'Unknown', rarity: 3 };

      selectedBanners[currentBannerIndex].total++;

      const newPull = {
        ...pull,
        formattedTime: formatTime(pull.time),
        name: item.name,
        rarity: item.rarity,
        banner: currentBanner,
        start: startBanner,
        at: selectedBanners[currentBannerIndex].total,
      };

      if (item.rarity === 5) {
        selectedBanners[currentBannerIndex].legendary.push(newPull);
        allLegendary.push(newPull);
      } else if (item.rarity === 4) {
        allRare.push(newPull);
        if (pull.type === 'character') {
          selectedBanners[currentBannerIndex].rare.character.push(newPull);
        } else if (pull.type === 'weapon') {
          selectedBanners[currentBannerIndex].rare.weapon.push(newPull);
        }
      }

      if (!grouped && pull.time === next.time) {
        striped = !striped;
        newPull.group = 'start';
        grouped = true;
      } else if (grouped && pull.time !== next.time) {
        newPull.group = 'end';
        grouped = false;
      } else if (grouped) {
        newPull.group = 'group';
      } else {
        striped = !striped;
      }

      if (i === pullData.length - 1) {
        newPull.end = true;
      }

      newPull.striped = striped;
      startBanner = false;

      currentPulls.push(newPull);
    }

    console.log(currentPulls.slice());
    pulls = currentPulls;
    sorted = pulls.reverse();

    let labels = [];
    let totalEachBanner = [];
    let totalLegendaryEachBanner = [];
    let totalRareEachBanner = [];
    let backgrounds = [];
    let borders = [];
    for (let e of selectedBanners) {
      const curLegendary = e.legendary.length;
      const curRare = e.rare.character.length + e.rare.weapon.length;
      const curLeft = e.total - curLegendary - curRare;

      labels.push(e.shortName);
      totalEachBanner.push(curLeft);
      totalLegendaryEachBanner.push(curLegendary);
      totalRareEachBanner.push(curRare);
      borders.push(e.color);

      const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.color || '#ffffff');
      backgrounds.push(`rgba(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)}, 0.7)`);
    }

    console.log(totalEachBanner, totalLegendaryEachBanner, totalRareEachBanner);

    loading = false;

    await tick();

    new Chart(pieChart, {
      type: 'pie',
      data: {
        labels: ['Total Pulls', 'Total 5*', 'Total 4*'],
        datasets: [
          {
            label: 'total',
            data: [currentPulls.length, allLegendary.length, allRare.length],
            backgroundColor: ['rgba(107, 161, 192, 0.7)', 'rgba(255, 177, 63, 0.7)', 'rgba(210, 143, 214, 0.7)'],
            borderColor: ['#6BA1C0', '#FFB13F', '#D28FD6'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'dataset',
        },
      },
    });

    new Chart(bannerChart, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: '5* pulls',
            data: totalLegendaryEachBanner,
            backgroundColor: 'rgba(255, 177, 63, 0.7)',
            borderColor: '#FFB13F',
            borderWidth: 1,
          },
          {
            label: '4* pulls',
            data: totalRareEachBanner,
            backgroundColor: 'rgba(210, 143, 214, 0.7)',
            borderColor: '#D28FD6',
            borderWidth: 1,
          },
          {
            label: 'Total pulls',
            data: totalEachBanner,
            backgroundColor: backgrounds,
            borderColor: borders,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            title: (tooltipItem) => {
              return selectedBanners[tooltipItem[0].index].name;
            },
            label: (tooltipItem, data) => {
              const label = data.datasets[tooltipItem.datasetIndex].label;
              const value =
                tooltipItem.datasetIndex === 2
                  ? data.datasets[0].data[tooltipItem.index] +
                    data.datasets[1].data[tooltipItem.index] +
                    data.datasets[2].data[tooltipItem.index]
                  : tooltipItem.value;
              return `${label}: ${value}`;
            },
          },
        },
        scales: {
          yAxes: [{ stacked: true, gridLines: { color: '#2d3748' } }],
          xAxes: [{ stacked: true }],
        },
      },
    });
  }

  function sortPulls() {
    if (sortBy === 'time') {
      if (sortOrder) {
        sorted = pulls.slice().reverse();
      } else {
        sorted = pulls;
      }
    } else if (sortBy === 'type') {
      if (sortOrder) {
        sorted = pulls.slice().sort((a, b) => a.type.localeCompare(b.type));
      } else {
        sorted = pulls.slice().sort((a, b) => b.type.localeCompare(a.type));
      }
    } else if (sortBy === 'rare') {
      if (sortOrder) {
        sorted = pulls.slice().sort((a, b) => a.rarity - b.rarity);
      } else {
        sorted = pulls.slice().sort((a, b) => b.rarity - a.rarity);
      }
    } else if (sortBy === 'pity') {
      if (sortOrder) {
        sorted = pulls.slice().sort((a, b) => a.pity - b.pity);
      } else {
        sorted = pulls.slice().sort((a, b) => b.pity - a.pity);
      }
    } else if (sortBy === 'name') {
      if (sortOrder) {
        sorted = pulls.slice().sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sorted = pulls.slice().sort((a, b) => b.name.localeCompare(a.name));
      }
    }
  }

  onMount(() => {
    readLocalData();
  });

  function sort(by) {
    if (sortBy === by) {
      sortOrder = !sortOrder;
    } else {
      sortBy = by;
      sortOrder = false;
    }

    sortPulls();
  }

  function formatTime(time) {
    return dayjs.unix(time).format('ddd YYYY-MM-DD HH:mm:ss');
  }

  function calculateLegendaryColor(percentage) {
    const hue = percentage * 120;
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  function calculateRareColor(percentage) {
    const opacity = percentage + 0.3;
    return `opacity: ${opacity};`;
  }

  $: path = `wish-counter-${id}`;
  $: if ($fromRemote) {
    readLocalData();
  }
</script>

<div class="pt-20 lg:ml-64 lg:pt-8">
  <div class="flex items-center text-gray-400 px-4 md:px-8">
    <a href="/wish" class="pr-2">
      <Icon path={mdiArrowLeft} size={1.2} />
    </a>
    <h2 class="font-display font-bold text-2xl text-gray-400 flex-1">
      Wish Counter
      <span class="text-white">{$t(`wish.types.${id}`)}</span>
    </h2>
  </div>
  {#if loading}
    <div class="text-white pl-4 md:pl-8 mt-4">{$t('wish.detail.loading')}</div>
  {:else}
    <div class="flex mt-4 wrapper">
      <div class="block overflow-x-auto xl:overflow-x-visible whitespace-no-wrap px">
        <div class="pr-4 pl-4 md:pl-8 xl:pr-2 table">
          <table
            class="{sortBy === 'time'
              ? 'list-table'
              : ''} w-full block pl-4 pr-4 py-2 md:pl-8 md:py-4 bg-item rounded-xl"
          >
            <tr>
              <TableHeader
                className="sticky top-0 bg-item z-30"
                styleList="top: -1px; background-clip: padding-box;"
                on:click={() => sort('time')}
                sort={sortBy === 'time'}
                order={sortOrder}
                align="left"
              >
                {$t('wish.detail.time')}
                <div class="absolute h-full w-8 bg-item" style="left: -2rem; top: -1px;" />
              </TableHeader>
              <TableHeader
                className="sticky top-0 bg-item z-30"
                styleList="top: -1px; background-clip: padding-box;"
                on:click={() => sort('pity')}
                sort={sortBy === 'pity'}
                order={sortOrder}
                align="center"
                padding="px-2"
              >
                {$t('wish.detail.pity')}
              </TableHeader>
              <TableHeader
                className="sticky top-0 bg-item z-30"
                styleList="top: -1px; background-clip: padding-box;"
                on:click={() => sort('name')}
                sort={sortBy === 'name'}
                order={sortOrder}
                align="left"
              >
                {$t('wish.detail.name')}
              </TableHeader>
              <TableHeader
                className="sticky top-0 bg-item z-30"
                styleList="top: -1px; background-clip: padding-box;"
                on:click={() => sort('rare')}
                sort={sortBy === 'rare'}
                order={sortOrder}
                align="center"
                padding="px-2"
              >
                <Icon path={mdiStar} className="pb-1" />
              </TableHeader>
              <TableHeader
                className="sticky top-0 bg-item z-30"
                styleList="top: -1px; background-clip: padding-box;"
                on:click={() => sort('type')}
                sort={sortBy === 'type'}
                order={sortOrder}
                align="left"
              >
                {$t('wish.detail.type')}
              </TableHeader>
              <TableHeader
                className="sticky top-0 bg-item"
                styleList="top: -1px; background-clip: padding-box;"
                align="center"
              >
                {$t('wish.detail.roll')}
              </TableHeader>
              <TableHeader
                className="sticky top-0 bg-item z-30 {sortBy === 'time' ? 'xl:hidden' : ''}"
                styleList="top: -1px; background-clip: padding-box;"
                align="left"
              >
                {$t('wish.detail.banner')}
              </TableHeader>
            </tr>
            {#each sorted as pull}
              <tr class="rarity-{pull.rarity}{pull.striped && sortBy === 'time' ? ' striped' : ''}">
                <td
                  class="border-t border-gray-700 px-4 text-gray-200 whitespace-no-wrap relative"
                  style="font-family: monospace;"
                >
                  {pull.formattedTime}
                  {#if sortBy === 'time' && (sortOrder ? pull.group === 'start' : pull.group === 'end')}
                    <div class="group-bar"><span>x10</span></div>
                  {/if}
                </td>
                <td class="border-t border-gray-700 px-2 text-gray-200 text-center">
                  <span
                    style={pull.rarity === 5
                      ? calculateLegendaryColor((90 - pull.pity) / 90)
                      : calculateRareColor((10 - pull.pity) / 10)}
                  >
                    {pull.pity}
                  </span>
                </td>
                <td class="border-t border-gray-700 pl-4 text-gray-200">
                  <img
                    class="w-8 h-8 inline mr-2"
                    src={pull.type === 'character'
                      ? `/images/characters/${pull.id}.png`
                      : pull.type === 'weapon'
                      ? `/images/weapons/${pull.id}.png`
                      : '/images/wish.png'}
                    alt={pull.name}
                  />
                  <span class="h-8 leading-8 pr-4">{pull.name}</span>
                </td>
                <td class="border-t border-gray-700 px-2 text-gray-200 text-center">{pull.rarity}</td>
                <td class="border-t border-gray-700 px-4 text-gray-200">
                  {$t(`wish.detail.${pull.type}`)}
                </td>
                <td class="border-t border-gray-700 px-2 text-gray-200 text-center">
                  {pull.at}
                </td>
                {#if sortBy === 'time' && ((pull.end && !sortOrder) || (pull.start && sortOrder))}
                  <td class="relative hidden xl:table-cell">
                    <div
                      class="border-t border-gray-700 absolute left-0 top-0 z-10 border-start"
                      style="width: 266px;"
                    />
                  </td>
                  <td class="sticky w-0 hidden xl:table-cell pl-2" style="top: 8px;">
                    <div
                      class="w-64 absolute top-0 pt-2 bg-item cursor-pointer"
                      on:click={() => openDetail(pull.banner)}
                    >
                      <img class="w-full rounded-lg" src={pull.banner.image} alt={pull.banner.name} />
                      <p class="bg-gray-900 rounded-lg mt-2 text-center text-gray-200">
                        {pull.banner.total} Pulls
                        <img class="h-4 inline ml-2" src="/images/primogem.png" alt="primogem" />
                        {numberFormat.format(pull.banner.total * 160)}
                      </p>
                    </div>
                  </td>
                {/if}
                <td
                  class="border-t border-gray-700 px-4 text-gray-200 top-0 text-center {sortBy === 'time'
                    ? 'xl:hidden'
                    : ''}"
                >
                  <img
                    on:click={() => openDetail(pull.banner)}
                    class="h-8 inline cursor-pointer"
                    src={pull.banner.image}
                    alt={pull.banner.name}
                  />
                </td>
              </tr>
            {/each}
          </table>
        </div>
      </div>
      <div class="chart-area flex flex-wrap">
        <div class="flex">
          <div
            class="bg-background px-4 py-2 rounded-xl flex flex-col items-center justify-center mr-4"
            style="height: 200px;"
          >
            <p class="text-gray-400 font-body">Total</p>
            <p class="text-gray-400 font-body text-xl font-bold">{total}</p>
            <p class="text-gray-400 font-body mt-2 flex items-center">5<Icon size={0.7} path={mdiStar} /> Pity</p>
            <p class="text-legendary-from font-body text-xl font-bold">{legendary}</p>
            <p class="text-gray-400 font-body mt-2 flex items-center">4<Icon size={0.7} path={mdiStar} /> Pity</p>
            <p class="text-rare-from font-body text-xl font-bold">{rare}</p>
          </div>
          <div class="bg-background rounded-xl inline-block mb-4 p-2 pie-chart mr-4">
            <canvas width="200" height="200" bind:this={pieChart} />
          </div>
        </div>
        {#if id === 'character-event' || id === 'weapon-event'}
          <div class="bg-background rounded-xl inline-block mb-4 p-2 banner-chart">
            <canvas width="500" height="200" bind:this={bannerChart} />
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    @apply flex-col-reverse;

    .chart-area {
      @apply px-4;

      @screen md {
        @apply px-8;
      }
    }

    @media (min-width: 1920px) {
      @apply flex-row;

      .chart-area {
        @apply px-2;
        @apply flex-col;
      }
    }
  }

  .banner-chart {
    max-width: 500px;
    height: 200px;
    width: 100%;
  }

  .pie-chart {
    max-width: 200px;
    height: 200px;
    width: 100%;
  }

  tr.striped {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0) 100%);
  }

  tr.rarity-5 {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(185, 129, 46, 0.55) 20%, rgba(0, 0, 0, 0) 100%);
  }

  tr.rarity-4 {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(173, 118, 176, 0.55) 20%, rgba(0, 0, 0, 0) 100%);
  }

  .group-bar {
    width: 1px;
    height: 325px;
    left: 0;
    top: 17px;
    @apply bg-white;
    @apply absolute;
    @apply select-none;

    &::before,
    &::after {
      content: '';
      width: 8px;
      height: 1px;
      left: 0;
      top: 0;
      @apply bg-white;
      @apply absolute;
    }

    &::after {
      top: initial;
      bottom: 0;
    }

    span {
      top: 155px;
      left: -20px;
      @apply absolute;
      @apply transform;
      @apply -rotate-90;
    }
  }

  table.list-table {
    @screen xl {
      padding-right: 17rem;
    }
  }

  /* firefox bug */
  @supports (-moz-appearance: none) {
    .border-start {
      top: -1px;
    }
  }
</style>
