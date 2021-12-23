<script context="module">
  export async function preload(page) {
    const { id } = page.params;
    return { id };
  }
</script>

<script>
  import { t } from 'svelte-i18n';
  import { getContext, onMount, tick } from 'svelte';
  import { mdiArrowLeft, mdiArrowUpCircle, mdiStar } from '@mdi/js';
  import dayjs from 'dayjs';
  import Chart from 'chart.js';

  import { banners } from '../../data/banners';
  import { bannersDual } from '../../data/bannersDual';

  import Icon from '../../components/Icon.svelte';
  import TableHeader from '../../components/Table/TableHeader.svelte';
  import WishDetailModal from './_detail.svelte';

  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';
  import { getAccountPrefix } from '../../stores/account';
  import { fromRemote, readSave } from '../../stores/saveManager';
  import { getTimeOffset, server } from '../../stores/server';
  import { pushToast } from '../../stores/toast';
  import Ad from '../../components/Ad.svelte';

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

  let errorProcessingPull = null;

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
  let nextRateUp = false;

  let allLegendary = [];
  let allRare = [];

  let sortBy = 'time';
  let sortOrder;

  let currentBannerIndex = -1;
  let selectedBanners;

  let isSafari = false;

  let showRarity = [true, true, true];

  selectedBanners = banners[bannerType].map((e) => {
    // banner data based on Asia time
    const diff = e.timezoneDependent === true ? 8 - getTimeOffset() : 0;

    const id = `${e.name} ${e.image}`;
    const dual = bannersDual[id] !== undefined;
    const start = dayjs(e.start, 'YYYY-MM-DD HH:mm:ss').subtract(diff, 'hour');
    const end = dayjs(e.end, 'YYYY-MM-DD HH:mm:ss');
    const image = `/images/banners/${id}.png`;

    return {
      ...e,
      id,
      dual,
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

  function openDetail(banner, isDual) {
    let secondBanner;
    if (isDual) {
      const dual = bannersDual[banner.id][1];
      secondBanner = {
        ...dual,
        image: `/images/banners/${dual.name} ${dual.image}.png`,
      };
    }

    openModal(
      WishDetailModal,
      {
        banner,
        dual: secondBanner,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  async function readLocalData() {
    console.log('wish read local');
    const prefix = getAccountPrefix();
    const data = await readSave(`${prefix}${path}`);
    if (data !== null) {
      const counterData = data;
      total = counterData.total;
      legendary = counterData.legendary;
      rare = counterData.rare;
      pullData = counterData.pulls || [];
    }

    processPullData();
  }

  function getNextBanner(time) {
    console.log(time);
    for (let i = currentBannerIndex + 1; i < selectedBanners.length; i++) {
      console.log('change banner', i, time, dayjs.unix(selectedBanners[i].start).format());
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
    let rateUp = false;
    let lastBanner;
    let lastBannerIndex;

    for (let i = 0; i < pullData.length; i++) {
      const pull = pullData[i];
      const next = pullData[i + 1] || { time: dayjs().year(2000).unix() };
      const currentPullTime = dayjs(pull.time).unix();

      if (currentBanner === null || currentBanner.end < currentPullTime) {
        lastBannerIndex = currentBannerIndex;

        currentBanner = getNextBanner(currentPullTime);

        if (currentBanner === undefined) {
          console.log('error banner here', JSON.stringify(pull));
          // errorProcessingPull = pull;
          // pushToast($t('wish.errorBanner'), 'error');
          // return;
          currentBannerIndex = lastBannerIndex;
          currentBanner = lastBanner;
        } else {
          startBanner = true;
        }

        lastBanner = currentBanner;

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
        if (currentBanner.featured) {
          newPull.guaranteed = rateUp;
          rateUp = !currentBanner.featured.includes(newPull.id);
        }

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

    nextRateUp = rateUp;
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

    sortPulls();

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

    if (id === 'character-event' || id === 'weapon-event') {
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
  }

  function sortPulls() {
    const filtered = pulls.slice().filter((e) => {
      if (e.type === 'character' && showRarity[5 - characters[e.id].rarity]) {
        return true;
      } else if (e.type === 'weapon' && showRarity[5 - weaponList[e.id].rarity]) {
        return true;
      } else if (e.type === 'unknown_3_star' && showRarity[2]) {
        return true;
      }
      return false;
    });
    if (sortBy === 'time') {
      if (sortOrder) {
        sorted = filtered.reverse();
      } else {
        sorted = filtered;
      }
    } else if (sortBy === 'type') {
      if (sortOrder) {
        sorted = filtered.sort((a, b) => a.type.localeCompare(b.type));
      } else {
        sorted = filtered.sort((a, b) => b.type.localeCompare(a.type));
      }
    } else if (sortBy === 'rare') {
      if (sortOrder) {
        sorted = filtered.sort((a, b) => a.rarity - b.rarity);
      } else {
        sorted = filtered.sort((a, b) => b.rarity - a.rarity);
      }
    } else if (sortBy === 'pity') {
      if (sortOrder) {
        sorted = filtered.sort((a, b) => a.pity - b.pity);
      } else {
        sorted = filtered.sort((a, b) => b.pity - a.pity);
      }
    } else if (sortBy === 'name') {
      if (sortOrder) {
        sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sorted = filtered.sort((a, b) => b.name.localeCompare(a.name));
      }
    }
  }

  onMount(async () => {
    const prefix = getAccountPrefix();
    const serverSave = await readSave(`${prefix}server`);
    if (serverSave !== null) {
      server.set(serverSave);
    }

    await readLocalData();

    isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') == -1 &&
      navigator.userAgent.indexOf('FxiOS') == -1;
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

  function getSecondBannerImage(id) {
    const b = bannersDual[id][1];
    return `/images/banners/${b.name} ${b.image}.png`;
  }

  function formatTime(time) {
    return dayjs(time).format('ddd YYYY-MM-DD HH:mm:ss');
  }

  function calculateLegendaryColor(percentage) {
    const hue = percentage * 120;
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  function calculateRareColor(percentage) {
    const opacity = percentage + 0.3;
    return `opacity: ${opacity};`;
  }

  function toggleShowRarity(index) {
    showRarity[index] = !showRarity[index];
    sortPulls();
  }

  $: showGroupPullBar = sortBy === 'time' && !showRarity.includes(false);
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
    <div class="text-gray-400 pl-4 md:pl-8 mt-2">
      {#if errorProcessingPull !== null}
        Show this on Discord if still stuck:<br />
        Error when getting banner for<br />
        id: {errorProcessingPull.id}<br />
        time: {errorProcessingPull.time}<br />
        server: {$server}
      {/if}
    </div>
  {:else}
    <div class="flex mt-4 wrapper">
      <div class="block overflow-x-auto xl:overflow-x-visible whitespace-no-wrap px">
        <div class="flex pl-4 md:pl-8 mb-2">
          <button on:click={() => toggleShowRarity(0)} class={`pill legendary ${showRarity[0] ? 'active' : ''}`}>
            5 <Icon path={mdiStar} size={0.75} className="mb-1" />
          </button>
          <button on:click={() => toggleShowRarity(1)} class={`pill rare ${showRarity[1] ? 'active' : ''}`}>
            4 <Icon path={mdiStar} size={0.75} className="mb-1" />
          </button>
          <button on:click={() => toggleShowRarity(2)} class={`pill normal ${showRarity[2] ? 'active' : ''}`}>
            3 <Icon path={mdiStar} size={0.75} className="mb-1" />
          </button>
        </div>
        <div class="pr-4 pl-4 md:pl-8 xl:pr-2 table">
          <table class="w-full block pl-4 pr-4 py-2 md:pl-8 md:py-4 bg-item rounded-xl">
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
              <tr
                class="{isSafari ? 'safari-only' : ''} rarity-{pull.rarity}{pull.striped && sortBy === 'time'
                  ? ' striped'
                  : ''}"
              >
                <td
                  class="border-t border-gray-700 px-4 text-gray-200 whitespace-no-wrap relative"
                  style="font-family: monospace;"
                >
                  {pull.formattedTime}
                  {#if showGroupPullBar && (sortOrder ? pull.group === 'start' : pull.group === 'end')}
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
                <td class="border-t border-gray-700 px-4 text-gray-200 top-0 text-center">
                  <img
                    on:click={() => openDetail(pull.banner, pull.banner.dual)}
                    class="h-8 inline cursor-pointer"
                    src={pull.banner.dual && pull.code === '400'
                      ? getSecondBannerImage(pull.banner.id)
                      : pull.banner.image}
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
            <p class="text-legendary-from font-body text-xl font-bold flex items-center">
              {legendary}
              {#if nextRateUp}
                <span class="rate-tooltip" style="margin-bottom: 2px; margin-left: 2px;">
                  <Icon size={0.8} path={mdiArrowUpCircle} />
                  <span class="tooltip-content">{$t('wish.detail.guaranteed')}</span>
                </span>
              {/if}
            </p>
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
  <Ad type="desktop" variant="lb" id="2" />
  <Ad type="mobile" variant="lb" id="1" />
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

  .rate-tooltip {
    @apply relative;

    .tooltip-content {
      bottom: 30px;
      left: 0px;
      width: 250px;
      @apply absolute;
      @apply hidden;
      @apply bg-gray-400;
      @apply text-background;
      @apply rounded-xl;
      @apply p-2;
      @apply text-sm;

      @screen md {
        top: 0px;
        bottom: auto;
        left: 25px;
        width: 320px;
      }
    }

    &:hover .tooltip-content {
      @apply block;
    }
  }

  .pill {
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
    @apply mr-2;
    @apply mb-2;
    @apply outline-none;
    @apply transition;
    @apply duration-100;

    &:hover {
      @apply border-primary;
    }

    &.active {
      @apply bg-primary;
      @apply border-primary;
      @apply text-background;

      &.legendary {
        @apply bg-legendary-from;
        @apply border-legendary-from;
      }

      &.rare {
        @apply bg-rare-from;
        @apply border-rare-from;
      }
    }
  }

  /* firefox bug */
  @supports (-moz-appearance: none) {
    .border-start {
      top: -1px;
    }
  }

  /* safari row background */
  .safari-only {
    background-attachment: fixed !important;
    background-position-x: 300px !important;
  }
</style>
