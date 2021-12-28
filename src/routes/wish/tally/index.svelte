<script>
  import { mdiLoading, mdiStar } from '@mdi/js';
  import { onMount, tick } from 'svelte';
  import Chart from 'chart.js';

  import { number, t } from 'svelte-i18n';
  import Ad from '../../../components/Ad.svelte';
  import Button from '../../../components/Button.svelte';
  import Icon from '../../../components/Icon.svelte';
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

  let selectedType = types[0];
  let type = selectedType.value;
  let banner = banners.characters[banners.characters.length - 1];
  let selectedBanner = { label: `${banner.name} ${banner.image}`, value: banners.characters.length - 1 };
  let selectedIndex = 0;
  let featured = {
    type,
    items: banner.featured,
  };
  let id = typeNumber[type] + selectedBanner.value + 1;

  let loading = true;
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

  let chart;
  let chart2;

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
  }

  function onChangeBanner() {
    banner = banners[type][selectedBanner.value];
    id = typeNumber[type] + selectedBanner.value + 1;
    featured = {
      type,
      items: banner.featured,
    };

    getData();
  }

  async function getData() {
    loading = true;

    const url = new URL(`${__paimon.env.API_HOST}/wish`);
    const query = new URLSearchParams({ banner: id });
    url.search = query.toString();

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      const values = [0, 0];

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
          } else {
            rareList = [...rareList, feat];
          }
        } else if (feat.type === 'weapon') {
          const weapon = weaponList[feat.name];
          feat.fullname = weapon.name;
          if (weapon.rarity === 5) {
            legendaryList = [...legendaryList, feat];
            values[1] += feat.count;
          } else {
            rareList = [...rareList, feat];
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
    } catch (err) {
      console.error(err);
      error = err;
    }
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
        <div class="flex mb-4">
          <img
            src="/images/banners/{banner.name} {banner.image}.png"
            alt={banner.name}
            class="rounded-xl w-full h-auto lg:h-64 lg:w-auto mr-4"
          />
          {#if dual !== undefined}
            <img
              src="/images/banners/{banner2.name} {banner2.image}.png"
              alt={banner2.name}
              class="rounded-xl w-full h-auto lg:h-64 lg:w-auto"
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
                <p class="font-semibold whitespace-no-wrap">
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
                <p class="font-semibold whitespace-no-wrap">
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
        <div class="bg-background rounded-xl p-4 relative mb-4" style="height: 200px; width: 100%;">
          <canvas bind:this={chart} />
        </div>
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
                      alt={item.name}
                      class="h-8 w-8"
                      style="min-width: 2rem;"
                    />
                  </td>
                  <td class="text-white px-4 py-1 border-t border-gray-700">
                    {item.fullname}
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
                      alt={item.name}
                      class="h-8 w-8"
                      style="min-width: 2rem;"
                    />
                  </td>
                  <td class="text-white px-4 py-1 border-t border-gray-700">
                    {item.fullname}
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

<style>
  @screen md {
    .select-name {
      width: 100%;
      max-width: 496px;
    }
  }
</style>
