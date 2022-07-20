<script>
  import { mdiLoading, mdiStar } from '@mdi/js';
  import { onMount, tick } from 'svelte';
  import Chart from 'chart.js';
  import dayjs from 'dayjs';

  import { t } from 'svelte-i18n';
  import Ad from '../../../components/Ad.svelte';
  import Icon from '../../../components/Icon.svelte';
  import Button from '../../../components/Button.svelte';
  import Select from '../../../components/Select.svelte';
  import { banners } from '../../../data/banners';
  import { bannersDual } from '../../../data/bannersDual';
  import { characters } from '../../../data/characters';
  import { weaponList } from '../../../data/weaponList';

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  const numberFormatSecondary = Intl.NumberFormat('en', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const types = [
    { label: 'Character Event', value: 'characters' },
    { label: 'Weapon Event', value: 'weapons' },
    { label: 'Standard', value: 'standard' },
  ];

  const typeNumber = {
    characters: 300000,
    weapons: 400000,
    standard: 200000,
  };

  const spliceCount = {
    characters: 8,
    weapons: 7,
    standard: 0,
  };

  let bannerIndex = banners.characters.length - 1;
  let selectedType = types[0];

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const idNumber = urlParams.get('id');
    if (idNumber) {
      switch (idNumber.toString()[0]) {
        case '2':
          selectedType = types[2];
          break;
        case '3':
          selectedType = types[0];
          break;
        case '4':
          selectedType = types[1];
          break;
      }

      bannerIndex = (Number(idNumber) % typeNumber[selectedType.value]) - 1;
    }
  }

  let type = selectedType.value;
  let banner = banners[type][bannerIndex];
  let selectedBanner = { label: `${banner.name} ${banner.image}`, value: bannerIndex };
  let selectedIndex = banners[type].length - 1 - bannerIndex;
  let featured = {
    type,
    items: banner.featured,
  };
  let id = typeNumber[type] + selectedBanner.value + 1;

  let loading = true;
  let loadingCons = true;
  let hidePullByDay = false;
  let featuredValues = [];
  let legendary = {
    total: 0,
    percentage: 0,
  };
  let rare = {
    total: 0,
    percentage: 0,
  };
  let median = 0;
  let totalUser = 0;
  let totalWish = 0;
  let worth = 0;
  let legendaryList = [];
  let rareList = [];
  let itemRarity = {};
  let consData;

  let chart;
  let chart2;
  let chart3;
  let constChart;
  let chartPullByDay;

  let error;

  function onChangeType() {
    type = selectedType.value;
    banner = banners[type][banners[type].length - 1];
    selectedBanner = { label: `${banner.name} ${banner.image}`, value: banners[type].length - 1 };
    selectedIndex = 0;
    id = typeNumber[type] + selectedBanner.value + 1;
    featured = {
      type,
      items: banner.featured,
    };

    getData();

    const url = new URL(window.location.href);
    url.searchParams.set('id', id);
    window.history.pushState(null, null, url);
  }

  function onChangeBanner() {
    banner = banners[type][selectedBanner.value];
    id = typeNumber[type] + selectedBanner.value + 1;
    featured = {
      type,
      items: banner.featured,
    };

    getData();

    const url = new URL(window.location.href);
    url.searchParams.set('id', id);
    window.history.pushState(null, null, url);
  }

  async function getData() {
    error = undefined;
    loading = true;
    loadingCons = true;

    const url = new URL(`${import.meta.env.VITE_API_HOST}/wish`);
    const query = new URLSearchParams({ banner: id });
    url.search = query.toString();

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 400) {
        error = 'Not available yet';
        loading = false;
        return;
      }

      const data = await res.json();

      const values = [0, 0];
      const cutoff = (0.2 / 100) * data.total.rare;

      legendaryList = [];
      rareList = [];
      for (let i = 0; i < data.list.length; i++) {
        const feat = data.list[i];
        if (feat.type === 'character') {
          const character = characters[feat.name];
          feat.fullname = character.name;
          if (character.rarity === 5) {
            legendaryList = [...legendaryList, feat];
            values[0] += feat.count;
            itemRarity[feat.name] = 5;
          } else {
            itemRarity[feat.name] = 4;
            if (feat.count >= cutoff) rareList = [...rareList, feat];
          }
        } else if (feat.type === 'weapon') {
          const weapon = weaponList[feat.name];
          feat.fullname = weapon.name;
          if (weapon.rarity === 5) {
            legendaryList = [...legendaryList, feat];
            values[1] += feat.count;
            itemRarity[feat.name] = 5;
          } else {
            itemRarity[feat.name] = 4;
            if (feat.count >= cutoff) rareList = [...rareList, feat];
          }
        }
      }

      legendaryList.sort((a, b) => b.count - a.count);
      rareList.sort((a, b) => b.count - a.count);
      legendaryList = legendaryList;
      rareList = rareList;

      if (type !== 'standard') {
        let totalCount = 0;
        let totalGuaranteed = 0;
        for (let i = 0; i < featured.items.length; i++) {
          const feat = featured.items[i];
          const item = data.list.find((e) => e.name === feat);

          totalCount += item.count;
          totalGuaranteed += item.guaranteed;

          featuredValues[i] = {
            total: item.count,
            percentage: (item.count / data.total.legendary) * 100,
          };
        }

        for (let i = 0; i < featured.items.length; i++) {
          featuredValues[i].guaranteed =
            ((totalCount - totalGuaranteed) / (data.total.legendary - totalGuaranteed)) * 100;
        }
      } else {
        featuredValues = [
          {
            total: values[0],
            percentage: (values[0] / data.total.legendary) * 100,
          },
          {
            total: values[1],
            percentage: (values[1] / data.total.legendary) * 100,
          },
        ];
      }

      legendary = {
        total: data.total.legendary,
        percentage: (data.total.legendary / data.total.all) * 100,
      };

      rare = {
        total: data.total.rare,
        percentage: (data.total.rare / data.total.all) * 100,
      };

      median = data.median.legendary;
      totalUser = data.total.users;
      totalWish = data.total.all;
      worth = data.total.all * 160;

      const legendaryPityChance = data.pityCount.legendary
        .slice(1, type === 'weapons' ? 81 : 91)
        .map((e, i) => Math.min((e / data.countEachPity[i]) * 100, 100).toFixed(2));
      const legendaryTotalPull = data.pityCount.legendary.slice(1, type === 'weapons' ? 81 : 91);
      const rareTotalPull = data.pityCount.rare;

      loading = false;
      await tick();
      if (Object.keys(data).length > 0) {
        consData = data.constellation;
        showDataCons();
      }

      Chart.defaults.global.defaultFontColor = '#ffffff';
      Chart.defaults.global.defaultFontFamily = 'Poppins';
      new Chart(chart, {
        type: 'bar',
        data: {
          labels: [...new Array(type === 'weapons' ? 80 : 90)].map((_, i) => i + 1),
          datasets: [
            {
              label: 'Total Pull 5★',
              data: legendaryTotalPull,
              borderColor: '#ffb13f',
              backgroundColor: '#ffb13f',
              fill: false,
              yAxisID: 'left-y-axis',
              order: 1,
            },
            {
              label: 'Chance%',
              data: legendaryPityChance,
              borderColor: '#4E7CFF',
              backgroundColor: '#4E7CFF',
              borderWidth: 3,
              pointRadius: 2,
              fill: false,
              type: 'line',
              yAxisID: 'right-y-axis',
              order: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
              title: (tooltipItem) => {
                return 'Pity ' + tooltipItem[0].label;
              },
            },
          },
          stacked: false,
          scales: {
            yAxes: [
              {
                id: 'left-y-axis',
                type: 'linear',
                display: true,
                position: 'left',
              },
              {
                id: 'right-y-axis',
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                  drawOnChartArea: false,
                },
              },
            ],
          },
        },
      });

      new Chart(chartPullByDay, {
        type: 'line',
        data: {
          labels: data.pullByDay.map((e) => dayjs(e.day).format('MM/DD')),
          datasets: [
            {
              label: 'Pull By Day %',
              data: data.pullByDay.map((e) => e.percentage * 100),
              borderColor: '#4E7CFF',
              backgroundColor: '#4E7CFF',
              borderWidth: 3,
              pointRadius: 2,
              fill: false,
              type: 'line',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
              title: (tooltipItem) => {
                return dayjs(data.pullByDay[tooltipItem[0].index].day).format('dddd, MMM DD YYYY');
              },
              label: (tooltipItem) => {
                return `Pull by day: ${numberFormatSecondary.format(
                  data.pullByDay[tooltipItem.index].percentage * totalWish,
                )} (${numberFormat.format(tooltipItem.value)}%)`;
              },
            },
          },
        },
      });

      new Chart(chart2, {
        type: 'bar',
        data: {
          labels: [...new Array(10)].map((_, i) => i + 1),
          datasets: [
            {
              label: 'Total Pull 4★',
              data: rareTotalPull,
              borderColor: '#D28FD6',
              backgroundColor: '#D28FD6',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
              title: (tooltipItem) => {
                return 'Pity ' + tooltipItem[0].label;
              },
            },
          },
        },
      });

      if (data.pullByDay.length === 0) hidePullByDay = true;
    } catch (err) {
      console.error(err);
      error = err;
    }
  }

  async function showDataCons(rarity) {
    const dataLabel = ['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', '>C6'];
    const bgColor = ['#DDDDDD', '#F24A72', '#FDAF75', '#EAEA7F', '#6CC4A1', '#4D96FF', '#FF6FB5', '#AB46D2'];
    const datasets = [];
    for (let i = 0; i < 8; i++) {
      datasets.push({
        label: dataLabel[i],
        data: [],
        backgroundColor: bgColor[i],
        borderWidth: 0,
      });
    }

    let sorted = Object.entries(consData)
      .map((e) => [...e, e[1].reduce((prev, cur) => prev + cur, 0)])
      .sort((a, b) => b[2] - a[2]);

    if (rarity !== undefined) {
      sorted = sorted.filter((e) => itemRarity[e[0]] === rarity);
    }

    const labels = [];
    const maxValue = sorted[0][2];
    const cutoff4 = (0.2 / 100) * rare.total;
    const cutoff5 = (0.2 / 100) * legendary.total;
    for (const [name, count, total] of sorted) {
      if (itemRarity[name] === 5 && total < cutoff5) continue;
      if (itemRarity[name] === 4 && total < cutoff4) continue;
      labels.push(name);

      for (let i = 0; i < 8; i++) {
        const e = count[i] || 0;
        datasets[i].data.push((e / maxValue) * 100);
      }
    }

    loadingCons = false;
    await tick();

    if (constChart) constChart.destroy();
    constChart = new Chart(chart3, {
      type: 'bar',
      data: {
        labels,
        datasets,
      },
      options: {
        tooltips: {
          mode: 'index',
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
              },
              stacked: true,
            },
          ],
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (tooltipItem) => {
              return `${dataLabel[tooltipItem.datasetIndex]}: ${numberFormat.format(tooltipItem.value)}% (${
                sorted[tooltipItem.index][1][tooltipItem.datasetIndex] || 0
              })`;
            },
          },
        },
      },
    });
  }

  onMount(() => {
    getData();
  });

  $: dual = bannersDual[`${banner.name} ${banner.image}`];
  $: banner2 = dual !== undefined ? dual[1] : null;
  $: bannerOptions = banners[type]
    .map((e, i) => {
      const name = `${e.name} ${e.image}`;
      const image = type !== 'standard' ? `/images/${type}/${e.featured[0]}.png` : undefined;

      if (bannersDual[name])
        return { label: `${name} & ${bannersDual[name][1].name} ${bannersDual[name][1].image}`, value: i, image };
      else return { label: name, value: i, image };
    })
    .slice(spliceCount[type])
    .reverse();
</script>

<svelte:head>
  <title>Wish Tally - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Wish Tally average pity percentage from paimon.moe users" />
  <meta property="og:description" content="Genshin Impact Wish Tally average pity percentage from paimon.moe users" />
</svelte:head>
<div>
  <div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl">
    <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('wish.tally.title')}</h1>
    <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
      ※ {$t('wish.tally.subtitle')}
    </p>
    <div class="flex flex-col md:flex-row px-4 md:px-8">
      <Select options={types} bind:selected={selectedType} className="w-full md:w-64" on:change={onChangeType} />
      <div class="w-4 h-4" />
      <div class="select-name">
        <Select
          options={bannerOptions}
          bind:selected={selectedBanner}
          on:change={onChangeBanner}
          bind:selectedIndex
          className="w-full"
          maxItemRow={6}
          image={type !== 'standard'}
        />
      </div>
    </div>
    <div class="flex flex-col px-4 md:px-8 mt-4">
      {#if loading}
        <Icon path={mdiLoading} spin color="white" size={3} />
      {:else if !loading && error !== undefined}
        <p class="text-white">Data is not available</p>
      {:else}
        <div class="flex flex-col space-y-4 xl:flex-row xl:space-y-0 mb-4">
          <img
            src="/images/banners/{banner.name} {banner.image}.png"
            alt={banner.name}
            class="rounded-xl w-full h-auto xl:h-64 lg:w-auto mr-4"
          />
          {#if dual !== undefined}
            <img
              src="/images/banners/{banner2.name} {banner2.image}.png"
              alt={banner2.name}
              class="rounded-xl w-full h-auto xl:h-64 lg:w-auto"
            />
          {/if}
        </div>
        <div class="flex flex-col xl:flex-row space-y-4 xl:space-x-4 xl:space-y-0 mb-4">
          <table>
            {#if featured.type === 'standard'}
              <tr>
                <td
                  class="bg-background rounded-l-xl py-4 pl-4 pr-2 font-black text-white text-5xl leading-10 text-right"
                >
                  {numberFormatSecondary.format(featuredValues[0].total)}
                </td>
                <td class="bg-background rounded-r-xl py-4 pr-4">
                  <p class="text-white font-semibold">
                    {$t('wish.tally.character')}
                    <span class="text-gray-400">{$t('wish.tally.summoned')}</span>
                  </p>
                  <p class="text-gray-400">
                    {numberFormat.format(featuredValues[0].percentage)}% {$t('wish.tally.fromFiveStar')}
                  </p>
                </td>
              </tr>
              <tr class="h-3" />
              <tr>
                <td
                  class="bg-background rounded-l-xl py-4 pl-4 pr-2 font-black text-white text-5xl leading-10 text-right"
                >
                  {numberFormatSecondary.format(featuredValues[1].total)}
                </td>
                <td class="bg-background rounded-r-xl py-4 pr-4">
                  <p class="text-white font-semibold">
                    {$t('wish.tally.weapon')}
                    <span class="text-gray-400">{$t('wish.tally.summoned')}</span>
                  </p>
                  <p class="text-gray-400">
                    {numberFormat.format(featuredValues[1].percentage)}% {$t('wish.tally.fromFiveStar')}
                  </p>
                </td>
              </tr>
            {:else}
              {#each featured.items as feat, i}
                {#if i === 1}
                  <tr class="h-3" />
                {/if}
                <tr>
                  <td class="bg-background rounded-l-xl py-4 pl-4 pr-2 text-center">
                    <img src="/images/{featured.type}/{feat}.png" alt={feat} class="w-12 h-12 hidden xl:block" />
                  </td>
                  <td class="bg-background py-4 pl-2 pr-2 font-black text-white text-5xl leading-10 text-right">
                    {numberFormatSecondary.format(featuredValues[i].total)}
                  </td>
                  <td class="bg-background rounded-r-xl py-4 pr-4">
                    <p class="text-white font-semibold">
                      {featured.type === 'characters' ? characters[feat].name : weaponList[feat].name}
                      <span class="text-gray-400">{$t('wish.tally.summoned')}</span>
                    </p>
                    <p class="text-gray-400">
                      {numberFormat.format(featuredValues[i].guaranteed)}%
                      {$t('wish.tally.wonFiftyFifty')}
                    </p>
                  </td>
                </tr>
              {/each}
            {/if}
          </table>
          <table>
            <tr>
              <td
                class="bg-background rounded-l-xl py-4 pl-4 pr-2 font-black text-5xl leading-10 text-right text-legendary-from"
              >
                {numberFormat.format(legendary.percentage)}%
              </td>
              <td class="bg-background rounded-r-xl py-4 pr-4 text-legendary-from">
                <p class="font-semibold whitespace-nowrap">
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                </p>
                <p>Total {numberFormat.format(legendary.total)}</p>
              </td>
            </tr>
            <tr class="h-3" />
            <tr>
              <td
                class="bg-background rounded-l-xl py-4 pl-4 pr-2 font-black text-5xl leading-10 text-right text-rare-from"
              >
                {numberFormat.format(rare.percentage)}%
              </td>
              <td class="bg-background rounded-r-xl py-4 pr-4 text-rare-from">
                <p class="font-semibold whitespace-nowrap">
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                  <Icon path={mdiStar} size={0.8} />
                </p>
                <p>Total {numberFormat.format(rare.total)}</p>
              </td>
            </tr>
          </table>
          <div class="bg-background rounded-xl p-4">
            <table class="h-full">
              <tr>
                <td class="pr-2 text-left text-white">
                  {$t('wish.tally.median')}
                </td>
                <td class="text-white font-bold">
                  {numberFormat.format(median)}
                </td>
              </tr>
              <tr>
                <td class="pr-2 text-left text-white">
                  {$t('wish.tally.user')}
                </td>
                <td class="text-white font-bold">
                  {numberFormat.format(totalUser)}
                </td>
              </tr>
              <tr>
                <td class="pr-2 text-left text-white">
                  {$t('wish.tally.wishTotal')}
                </td>
                <td class="text-white font-bold">
                  {numberFormat.format(totalWish)}
                </td>
              </tr>
              <tr>
                <td class="pr-2 text-left text-white">
                  {$t('wish.tally.worth')} <img class="w-4 h-4 inline mx-1" src="/images/primogem.png" alt="primogem" />
                </td>
                <td class="text-white font-bold">
                  {numberFormat.format(worth)}
                </td>
              </tr>
            </table>
          </div>
        </div>
        {#if !hidePullByDay}
          <div class="bg-background rounded-xl p-4 relative mb-4" style="height: 200px; width: 100%;">
            <canvas bind:this={chartPullByDay} />
          </div>
        {/if}
        <div class="bg-background rounded-xl p-4 relative mb-4" style="height: 200px; width: 100%;">
          <canvas bind:this={chart} />
        </div>
        {#if !loadingCons}
          <div class="bg-background rounded-xl p-4 relative mb-4" style="width: 100%;">
            <div style="height: 400px; width: 100%;">
              <canvas bind:this={chart3} />
            </div>
            <div>
              <Button size="sm" on:click={() => showDataCons(5)}>5★</Button>
              <Button size="sm" on:click={() => showDataCons(4)}>4★</Button>
              <Button size="sm" on:click={() => showDataCons()}>Show All</Button>
            </div>
          </div>
        {/if}
        <div class="flex flex-col xl:flex-row xl:space-x-4">
          <div class="bg-background rounded-xl p-4 relative mb-4 flex-1" style="height: fit-content;">
            <p class="font-bold text-legendary-from text-center mb-2">5★ List</p>
            <table class="w-full">
              <tr>
                <td class="text-white font-semibold py-1" />
                <td class="text-white font-semibold py-1 px-4">Name</td>
                <td class="text-white font-semibold py-1 pr-4 text-center">Total</td>
                <td class="text-white font-semibold py-1 text-center">%</td>
              </tr>
              {#each legendaryList as item}
                <tr>
                  <td class="py-1 border-t border-gray-700">
                    <img
                      src="/images/{item.type}s/{item.name}.png"
                      alt={item.fullname}
                      class="h-8 w-8"
                      style="min-width: 2rem;"
                    />
                  </td>
                  <td class="text-white px-4 py-1 border-t border-gray-700">
                    {$t(item.fullname)}
                  </td>
                  <td
                    class="text-gray-200 text-right pr-4 py-1 font-bold border-t border-gray-700"
                    style="font-family: monospace;"
                  >
                    {numberFormatSecondary.format(item.count)}
                  </td>
                  <td
                    class="text-gray-200 text-right py-1 font-bold border-t border-gray-700"
                    style="font-family: monospace;"
                  >
                    {numberFormat.format((item.count / legendary.total) * 100)}
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="p-0">
                    <span
                      class="absolute bg-legendary-from block"
                      style="height: 1px; width: {(item.count / legendary.total) * 100}%;"
                    />
                  </td>
                </tr>
              {/each}
            </table>
          </div>
          <div class="bg-background rounded-xl p-4 relative mb-4 flex-1">
            <p class="font-bold text-rare-from text-center mb-2">4★ List</p>
            <table class="w-full">
              <tr>
                <td class="text-white font-semibold py-1" />
                <td class="text-white font-semibold py-1 px-4">Name</td>
                <td class="text-white font-semibold py-1 pr-4 text-center">Total</td>
                <td class="text-white font-semibold py-1 text-center">%</td>
              </tr>
              {#each rareList as item}
                <tr>
                  <td class="py-1 border-t border-gray-700">
                    <img
                      src="/images/{item.type}s/{item.name}.png"
                      alt={item.fullname}
                      class="h-8 w-8"
                      style="min-width: 2rem;"
                    />
                  </td>
                  <td class="text-white px-4 py-1 border-t border-gray-700">
                    {$t(item.fullname)}
                  </td>
                  <td
                    class="text-gray-200 text-right pr-4 py-1 font-bold border-t border-gray-700"
                    style="font-family: monospace;"
                  >
                    {numberFormatSecondary.format(item.count)}
                  </td>
                  <td
                    class="text-gray-200 text-right py-1 font-bold border-t border-gray-700"
                    style="font-family: monospace;"
                  >
                    {numberFormat.format((item.count / rare.total) * 100)}
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <span
                      class="absolute bg-rare-from block"
                      style="height: 1px; margin-top: 1px; width: {(item.count / rare.total) * 100}%;"
                    />
                  </td>
                </tr>
              {/each}
            </table>
          </div>
          <div class="bg-background rounded-xl p-4 relative mb-4 flex-1" style="height: 200px;">
            <canvas bind:this={chart2} />
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="fixed top-0 right-0 m-8">
    <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
  </div>
  <Ad type="desktop" variant="lb" id="2" />
  <Ad type="mobile" variant="lb" id="2" />
</div>

<style lang="postcss">
  @screen md {
    .select-name {
      width: 100%;
      max-width: 496px;
    }
  }
</style>
