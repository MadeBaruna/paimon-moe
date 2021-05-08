<script>
  import { t, locale } from 'svelte-i18n';
  import { mdiChevronDown, mdiLoading, mdiStar } from '@mdi/js';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/id';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ru';
  dayjs.extend(duration);
  dayjs.extend(relativeTime);

  import Icon from '../../../components/Icon.svelte';
  import { characters } from '../../../data/characters';
  import { weaponList } from '../../../data/weaponList';

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  const numberFormatSecondary = Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  // prettier-ignore
  const legendaryMapping = {
    character: [
       0,  1,  1,  1,  1,  2,  2,  2,  2,  2, // 1
       3,  3,  3,  3,  3,  4,  4,  4,  4,  4, // 2
       5,  5,  5,  5,  5,  6,  6,  6,  6,  6, // 3
       7,  7,  7,  7,  7,  7,  7,  7,  7,  7, // 4
       8,  8,  8,  8,  8,  8,  8,  8,  8,  8, // 5
       9,  9,  9,  9,  9,  9,  9,  9,  9,  9, // 6
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, // 7
      11, 11, 11, 12, 13, 14, 15, 16, 17, 18, // 8
      19, 20, 20, 20, 20, 21, 21, 21, 21, 22, // 9
    ],
    weapon: [
       0,  1,  1,  1,  1,  2,  2,  2,  2,  2, // 1
       3,  3,  3,  3,  3,  4,  4,  4,  4,  4, // 2
       5,  5,  5,  5,  5,  6,  6,  6,  6,  6, // 3
       7,  7,  7,  7,  7,  8,  8,  8,  8,  8, // 4
       9,  9,  9,  9,  9,  9,  9,  9,  9,  9, // 5
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, // 6
      11, 11, 11, 12, 13, 14, 15, 16, 17, 18, // 7
      19, 20, 20, 20, 20, 21, 21, 21, 21, 22, // 8
    ],
  };

  // prettier-ignore
  const legendaryLabels = {
    character: [
      1, [2, 5], [6, 10], [11, 15], [16, 20], [21, 25],
      [26, 30], [31, 40], [41, 50], [51, 60], [61, 70],
      [71, 73], 74, 75, 76, 77, 78, 79, 80, 81, 
      [82, 85], [86, 89], 90,
    ],
    weapon: [
      1, [2, 5], [6, 10], [11, 15], [16, 20], [21, 25],
      [26, 30], [31, 35], [36, 40], [41, 50], [51, 60],
      [61, 63], 64, 65, 66, 67, 68, 69, 70, 71,
      [72, 75], [76, 79], 80,
    ],
  };

  export let type;
  export let id;

  const legendaryMap = legendaryMapping[type];
  const legendaryStep = legendaryLabels[type];

  let openLegendaryList = false;
  let loading = true;
  let error = false;
  let data = {};

  export let banner;
  export let featured = [];
  let featuredValues = featured.map(() => ({
    total: 0,
    percentage: 0,
  }));

  let legendary = {
    total: 0,
    percentage: 0,
  };

  let rare = {
    total: 0,
    percentage: 0,
  };

  let rarePercentage = {
    min: 0,
    max: 0,
  };

  let legendaryPercentage = {
    min: 0,
    max: 0,
  };

  const rareInclude = {
    300011: ['rosaria'],
    300012: ['yanfei', 'noelle', 'diona'],
  };
  let promotedRarePercentage = 0;

  let legendaryList = [];
  let legendaryPity = [];
  let rarePity = [];

  let updateTime = '';
  locale.subscribe((val) => {
    dayjs.locale(val.substring(0, 2));
    updateTime = dayjs(data.time).fromNow();
  });

  async function getData() {
    const url = new URL(`${__paimon.env.API_HOST}/wish`);
    const query = new URLSearchParams({ banner: id });
    url.search = query.toString();

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      data = await res.json();

      for (let i = 0; i < featured.length; i++) {
        const feat = featured[i];
        const item = data.list.find((e) => e.name === feat);
        if (item) {
          featuredValues[i] = {
            total: item.count,
            guaranteed: item.guaranteed,
            percentage:
              (item.count /
                (type === 'character' && id !== 200002 && i === 1 ? data.total.rare : data.total.legendary)) *
              100,
          };
        }
      }

      // only for standard banner
      if (id === 200002) {
        const values = [0, 0];

        for (let i = 0; i < data.list.length; i++) {
          const feat = data.list[i];
          const index = feat.type === 'character' ? 0 : 1;
          values[index] += feat.count;
        }

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

      // only for zhongli banner upward
      if (id > 300011 && id < 400000) {
        const totalRare = data.list.reduce(
          (prev, current) => {
            if (rareInclude[id].includes(current.name)) {
              prev.total += current.count;
            }
            if (featured[1] === current.name) {
              prev.featured = current.count;
            }
            return prev;
          },
          {
            total: 0,
            featured: 0,
          },
        );
        promotedRarePercentage = (totalRare.featured / totalRare.total) * 100;
      }

      legendary = {
        total: data.total.legendary,
        percentage: (data.total.legendary / data.total.all) * 100,
      };

      rare = {
        total: data.total.rare,
        percentage: (data.total.rare / data.total.all) * 100,
      };

      rarePity = data.pityCount.rare.map((e) => ({
        total: e,
        percentage: e / data.total.rare,
      }));

      rarePity.forEach((e) => {
        if (rarePercentage.min > e.percentage) {
          rarePercentage.min = e.percentage;
        }
        if (rarePercentage.max < e.percentage) {
          rarePercentage.max = e.percentage;
        }
      });

      const mapped = new Array(legendaryMap[legendaryMap.length - 1] + 1).fill(0);
      const legendaryPityData = data.pityCount.legendary.slice(1, 91);
      for (let i = 0; i < legendaryPityData.length; i++) {
        const label = legendaryMap[i];
        const pity = legendaryPityData[i];
        mapped[label] += pity;
      }

      const percentageEachPity = new Array(90).fill(0);
      for (let i = 0; i < 90; i++) {
        percentageEachPity[i] = legendaryPityData[i] / data.countEachPity[i];
      }
      console.log(percentageEachPity);

      const mappedPercentage = new Array(legendaryMap[legendaryMap.length - 1] + 1).fill(0);
      for (let i = 0; i < 90; i++) {
        const label = legendaryMap[i];
        const percentage = percentageEachPity[i];
        if (mappedPercentage[label] < percentage) {
          mappedPercentage[label] = percentage;
        }
      }

      legendaryPity = mapped.map((e, i) => ({
        total: e,
        percentage: mappedPercentage[i],
      }));

      legendaryList = data.list.sort((a, b) => {
        if (featured.includes(a.name) && featured.includes(b.name)) {
          return 0;
        } else if (featured.includes(a.name)) {
          return -1;
        } else if (featured.includes(b.name)) {
          return 1;
        } else {
          return b.count - a.count;
        }
      });

      legendaryPity.forEach((e) => {
        if (legendaryPercentage.min > e.percentage) {
          legendaryPercentage.min = e.percentage;
        }
        if (legendaryPercentage.max < e.percentage) {
          legendaryPercentage.max = e.percentage;
        }
      });

      updateTime = dayjs(data.time).fromNow();
      loading = false;
    } catch (err) {
      console.error(err);
      loading = false;
      error = true;
    }
  }

  function mapVal(value, x1, y1, x2, y2) {
    return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
  }

  function toggleLegendaryList() {
    openLegendaryList = !openLegendaryList;
  }

  onMount(() => {
    getData();
  });
</script>

<div class="flex flex-col bg-item rounded-xl px-4 pt-4 pb-2 mb-4 space-y-4">
  <div class="flex flex-col xl:flex-row">
    <img src="/images/banners/{banner.name} {banner.image}.png" alt={banner.name} class="rounded-xl xl:h-64 xl:mr-4" />
    <div class="h-4 xl:h-0" />
    {#if loading}
      <Icon className="m-4" path={mdiLoading} color="white" size={2} spin />
    {:else if !error}
      <div class="flex flex-col pity-summary" style="min-height: 16rem;">
        <div
          class="flex flex-row items-center bg-background rounded-xl py-2 relative px-4 mb-2 flex-1 cursor-pointer"
          on:click={toggleLegendaryList}
        >
          {#if id === 200002}
            <table class="flex-1">
              <tr>
                <td
                  class="font-black text-white text-5xl leading-10 pr-2 text-center"
                  style="padding-top: 4px; width: 1%;"
                >
                  {featuredValues[0].total}
                </td>
                <td>
                  <p class="text-white font-semibold">
                    {$t('wish.tally.character')}
                    <span class="text-gray-400">{$t('wish.tally.summoned')}</span>
                  </p>
                  <p class="text-gray-400">
                    {numberFormat.format(featuredValues[0].percentage)}% {$t('wish.tally.fromFiveStar')}
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  class="font-black text-white text-5xl leading-10 pr-2 text-center"
                  style="padding-top: 4px; width: 1%;"
                >
                  {featuredValues[1].total}
                </td>
                <td>
                  <p class="text-white font-semibold">
                    {$t('wish.tally.weapon')}
                    <span class="text-gray-400">{$t('wish.tally.summoned')}</span>
                  </p>
                  <p class="text-gray-400">
                    {numberFormat.format(featuredValues[1].percentage)}% {$t('wish.tally.fromFiveStar')}
                  </p>
                </td>
              </tr>
            </table>
          {:else}
            <table class="flex-1">
              {#each featured as feat, i}
                <tr>
                  <td
                    class="font-black text-white text-5xl leading-10 pr-2 text-center"
                    style="padding-top: 4px; width: 1%;"
                  >
                    {featuredValues[i].total}
                  </td>
                  <td>
                    <p class="text-white font-semibold">
                      {type === 'character' ? characters[feat].name : weaponList[feat].name}
                      <span class="text-gray-400">{$t('wish.tally.summoned')}</span>
                    </p>
                    <p class="text-gray-400">
                      {#if id >= 300011 && id < 400000 && i === 0}
                        {numberFormat.format(
                          ((featuredValues[i].total - featuredValues[i].guaranteed) /
                            (data.total.legendary - featuredValues[i].guaranteed)) *
                            100,
                        )}%
                        {$t('wish.tally.wonFiftyFifty')}
                      {:else if id > 300011 && id < 400000 && i === 1}
                        {numberFormat.format(promotedRarePercentage)}%
                        {$t('wish.tally.fromFourStarFeatured')}
                      {:else}
                        {numberFormat.format(featuredValues[i].percentage)}% {$t(
                          type === 'character' && i === 1 ? 'wish.tally.fromFourStar' : 'wish.tally.fromFiveStar',
                        )}
                      {/if}
                    </p>
                  </td>
                </tr>
              {/each}
            </table>
          {/if}
          <div class="text-gray-400 chevron-detail">
            <Icon path={mdiChevronDown} />
          </div>
        </div>
        <div
          class="flex items-center justify-center bg-background rounded-xl px-4 py-2 relative mb-2 flex-1 text-legendary-from"
        >
          <p class="font-black mr-2 text-5xl leading-10" style="margin-top: 4px;">
            {numberFormat.format(legendary.percentage)}%
          </p>
          <div class="flex flex-col flex-1">
            <p class="font-semibold whitespace-no-wrap">
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
            </p>
            <p>Total {numberFormat.format(legendary.total)}</p>
          </div>
        </div>
        <div class="flex items-center justify-center bg-background rounded-xl px-4 py-2 relative flex-1 text-rare-from">
          <p class="font-black mr-2 text-5xl leading-10" style="margin-top: 4px;">
            {numberFormatSecondary.format(rare.percentage)}%
          </p>
          <div class="flex flex-col flex-1">
            <p class="font-semibold whitespace-no-wrap">
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
              <Icon path={mdiStar} size={0.8} />
            </p>
            <p>Total {numberFormat.format(rare.total)}</p>
          </div>
        </div>
      </div>
      {#if openLegendaryList}
        <div transition:fade class="bg-background rounded-xl mt-2 xl:mt-0 py-2 px-4 xl:ml-2">
          <table class="text-white w-full">
            <tr>
              <td class="border-b border-gray-700 px-2">{$t('wish.tally.name')}</td>
              <td class="border-b border-gray-700 px-2 text-center">{$t('wish.tally.total')}</td>
            </tr>
            {#each legendaryList as item}
              <tr>
                <td class="border-b border-gray-700 px-2">
                  {item.type === 'character' ? characters[item.name].name : weaponList[item.name].name}
                </td>
                <td class="border-b border-gray-700 px-2 text-center">{item.count}</td>
              </tr>
            {/each}
          </table>
          <p class="text-gray-400 mt-2 text-sm text-center">
            {$t('wish.tally.update')}
            {updateTime}
          </p>
        </div>
      {/if}
    {/if}
  </div>
  {#if !loading && !error}
    <div class="border border-background rounded-xl xl:hidden overflow-hidden">
      <table class="text-white w-full table-fixed">
        <tr>
          <th class="font-display text-gray-200 font-semibold px-2 pt-2">5★ {$t('wish.tally.pity')}</th>
          <th class="font-display text-gray-200 font-semibold border-l border-r border-background px-2 pt-2"
            >{$t('wish.tally.total')}</th
          >
          <th class="font-display text-gray-200 font-semibold px-2 pt-2">Chance%</th>
        </tr>
        {#each legendaryStep as label, i}
          <tr>
            <td class="text-center px-2 border-t border-background">
              {#if Array.isArray(label)}
                {label[0]} - {label[1]}
              {:else}
                {label}
              {/if}
            </td>
            <td class="text-center px-2 border-t border-l border-r border-background">
              {numberFormat.format(legendaryPity[i].total)}
            </td>
            <td
              class="text-center py-1 border-t border-background"
              style="background: rgba(25, 142, 81, {mapVal(
                legendaryPity[i].percentage,
                legendaryPercentage.min,
                legendaryPercentage.max,
                0,
                1,
              )}); width: 60px;"
            >
              {numberFormat.format(legendaryPity[i].percentage * 100)}
            </td>
          </tr>
        {/each}
      </table>
    </div>
    <div class="border border-background rounded-xl xl:hidden overflow-hidden">
      <table class="text-white w-full table-fixed">
        <tr>
          <th class="font-display text-gray-200 font-semibold px-2 pt-2">4★ {$t('wish.tally.pity')}</th>
          <th class="font-display text-gray-200 font-semibold border-l border-r border-background px-2 pt-2"
            >{$t('wish.tally.total')}</th
          >
          <th class="font-display text-gray-200 font-semibold px-2 pt-2">%</th>
        </tr>
        {#each rarePity as pity, i}
          <tr>
            <td class="text-center px-2 border-t border-background">
              {i + 1}
            </td>
            <td class="text-center px-2 border-t border-l border-r border-background">
              {numberFormat.format(pity.total)}
            </td>
            <td
              class="text-center py-1 border-t border-background"
              style="background: rgba(25, 142, 81, {mapVal(
                pity.percentage,
                rarePercentage.min,
                rarePercentage.max,
                0,
                1,
              )}); width: 60px;"
            >
              {numberFormat.format(pity.percentage * 100)}
            </td>
          </tr>
        {/each}
      </table>
    </div>
    <div class="border border-background rounded-xl hidden xl:block overflow-hidden">
      <table class="text-white w-full table-fixed text-sm">
        <tr>
          <td
            class="font-display text-gray-200 font-semibold px-2 py-1 whitespace-no-wrap text-right border-b border-background"
          >
            5★<br />{$t('wish.tally.pity')}
          </td>
          {#each legendaryStep as label}
            <td class="text-center py-1 border-l border-b border-background">
              {#if Array.isArray(label)}
                <div>
                  <span class="block">{label[0]}</span>
                  <span class="block" style="height: 4px; overflow: hidden; line-height: 4px;">|</span>
                  <span class="block">{label[1]}</span>
                </div>
              {:else}
                {label}
              {/if}
            </td>
          {/each}
        </tr>
        <tr>
          <td class="font-display text-gray-200 font-semibold px-2 py-1 text-right border-b border-background">
            Total
          </td>
          {#each legendaryPity as pity}
            <td class="text-center py-1 border-l border-b border-background">{numberFormat.format(pity.total)}</td>
          {/each}
        </tr>
        <tr>
          <td class="font-display text-gray-200 font-semibold px-2 py-1 text-right border-background" title="Chance %"
            >Chc%</td
          >
          {#each legendaryPity as pity}
            <td
              class="text-center py-1 border-l border-background"
              style="background: rgba(25, 142, 81, {mapVal(
                pity.percentage,
                legendaryPercentage.min,
                legendaryPercentage.max,
                0,
                1,
              )}); width: 60px;"
            >
              {numberFormat.format(pity.percentage * 100)}
            </td>
          {/each}
        </tr>
      </table>
    </div>
    <div class="flex flex-wrap">
      <div
        class="border border-background rounded-xl hidden xl:block overflow-hidden mr-4 mb-2"
        style="width: fit-content;"
      >
        <table class="text-white text-sm">
          <tr>
            <td
              class="font-display text-gray-200 font-semibold px-2 py-1 whitespace-no-wrap text-right border-b border-background"
            >
              4★ {$t('wish.tally.pity')}
            </td>
            {#each rarePity as _, i}
              <td class="text-center px-2 py-1 border-l border-b border-background">{i + 1}</td>
            {/each}
          </tr>
          <tr>
            <td class="font-display text-gray-200 font-semibold px-2 py-1 text-right border-b border-background"
              >Total</td
            >
            {#each rarePity as pity}
              <td class="text-center px-2 py-1 border-l border-b border-background"
                >{numberFormat.format(pity.total)}</td
              >
            {/each}
          </tr>
          <tr>
            <td class="font-display text-gray-200 font-semibold px-2 py-1 text-right border-background">%</td>
            {#each rarePity as pity}
              <td
                class="text-center px-2 py-1 border-l border-background"
                style="background: rgba(25, 142, 81, {mapVal(
                  pity.percentage,
                  rarePercentage.min,
                  rarePercentage.max,
                  0,
                  1,
                )}); width: 60px;"
              >
                {numberFormat.format(pity.percentage * 100)}
              </td>
            {/each}
          </tr>
        </table>
      </div>
      <div class="flex flex-wrap text-white -mt-2 mb-2">
        <div class="space-y-2 flex flex-col flex-wrap mr-2 mt-2">
          <div class="bg-background rounded-xl px-4 py-2 flex-1 flex items-center whitespace-no-wrap">
            {$t('wish.tally.wishTotal')} <span class="font-semibold ml-2">{numberFormat.format(data.total.all)}</span>
          </div>
          <div class="bg-background rounded-xl px-4 py-2 flex-1 flex items-center whitespace-no-wrap">
            {$t('wish.tally.worth')} <img class="w-4 h-4 inline mx-1" src="/images/primogem.png" alt="primogem" />
            <span class="font-semibold">{numberFormat.format(data.total.all * 160)}</span>
          </div>
        </div>
        <div class="space-y-2 flex flex-col flex-wrap mr-2 mt-2">
          <div class="bg-background rounded-xl px-4 py-2 flex-1 flex items-center whitespace-no-wrap">
            {$t('wish.tally.median')}
            <span class="font-semibold ml-2">{numberFormat.format(data.median.legendary)}</span>
          </div>
          <div class="bg-background rounded-xl px-4 py-2 flex-1 flex items-center whitespace-no-wrap">
            {$t('wish.tally.user')} <span class="font-semibold ml-2">{numberFormat.format(data.total.users)}</span>
          </div>
        </div>
        <div class="space-y-2 flex flex-col flex-wrap mt-2">
          <a
            href="/wish/tally/{id}"
            class="bg-background rounded-xl px-4 py-2 flex-1 flex items-center whitespace-no-wrap hover:opacity-75"
          >
            {$t('wish.tally.detail')}
          </a>
        </div>
      </div>
    </div>
  {/if}
  {#if error}
    <div class="text-white mt-4">{$t('wish.tally.error')}</div>
  {/if}
</div>

<style>
  @screen xl {
    .pity-summary {
      min-width: 320px;
    }

    .chevron-detail {
      @apply transform;
      @apply -rotate-90;
    }
  }
</style>
