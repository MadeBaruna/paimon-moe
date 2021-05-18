<script context="module">
  export async function preload(page) {
    const { id } = page.params;
    return { id };
  }

</script>

<script>
  import { mdiLoading } from '@mdi/js';

  import { onMount } from 'svelte';

  import { t } from 'svelte-i18n';
  import Icon from '../../../components/Icon.svelte';
  import { banners } from '../../../data/banners';
  import { characters } from '../../../data/characters';
  import { weaponList } from '../../../data/weaponList';

  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  import relativeTime from 'dayjs/plugin/relativeTime';
  dayjs.extend(duration);
  dayjs.extend(relativeTime);

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  const numberFormatFixed = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  export let id;
  let banner = {};
  let loading = true;
  let data;
  let legendaryList = [];
  let totalGuarantee = 0;
  let totalFeatured = 0;

  let legendaryPity = [];
  let rarePity = [];
  let rarePercentage = {
    min: 0,
    max: 0,
  };

  if (id.startsWith('2')) {
    banner = banners.standard[0];
  } else if (id.startsWith('3')) {
    const index = Number(id.substring(4)) - 1;
    banner = banners.characters[index];
  } else if (id.startsWith('4')) {
    const index = Number(id.substring(4)) - 1;
    banner = banners.weapons[index];
  }

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

      let totalRare = data.total.rare;
      if (id > 300011 && id < 400000) {
        totalRare = data.list.reduce((prev, current) => {
          if (banner.featuredRare.includes(current.name)) {
            prev += current.count;
          }
          return prev;
        }, 0);
      }

      legendaryList = data.list
        .sort((a, b) => {
          return b.count - a.count;
        })
        .map((e) => {
          if (e.type === 'character') {
            const rarity = characters[e.name].rarity;
            e.percentage = rarity === 5 ? e.count / data.total.legendary : e.count / totalRare;
          } else if (e.type === 'weapon') {
            const rarity = weaponList[e.name].rarity;
            e.percentage = rarity === 5 ? e.count / data.total.legendary : e.count / totalRare;
          }

          if (id !== '200001' && banner.featured.includes(e.name)) {
            totalGuarantee = e.guaranteed;
            totalFeatured = e.count;
          }
          return e;
        });

      legendaryPity = data.pityCount.legendary.slice(1, 91).map((e, i) => {
        const percentage = e / data.countEachPity[i];
        return {
          total: e,
          percentage,
        };
      });

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
    } catch (err) {
      console.error(err);
    }

    loading = false;
  }

  function mapVal(value, x1, y1, x2, y2) {
    return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
  }

  onMount(() => {
    getData();
  });

</script>

<svelte:head>
  <title>Wish Tally - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Wish Tally average pity percentage from paimon.moe users" />
  <meta property="og:description" content="Genshin Impact Wish Tally average pity percentage from paimon.moe users" />
</svelte:head>
<div>
  <div class="lg:ml-64 pt-20 lg:pt-8">
    <h1 class="font-display px-4 md:px-8 font-black text-4xl text-white">{$t('wish.tally.title')} {banner.name}</h1>
    <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
      ※ {$t('wish.tally.subtitle')}
    </p>
  </div>
  <div class="lg:ml-64 px-8">
    <div class="flex flex-col lg:flex-row items-end">
      <img src="/images/banners/{banner.name} {banner.image}.png" alt={banner.name} class="rounded-xl w-full h-auto lg:h-64 lg:w-auto" />
      {#if loading}
        <Icon className="m-4" path={mdiLoading} color="white" size={2} spin />
      {:else}
        <div class="border border-gray-700 rounded-xl ml-4" style="width: fit-content; height: fit-content;">
          <table class="text-white">
            <tr>
              <td class="px-2 border-r border-gray-700">Last Update</td>
              <td class="px-2 border-gray-700">{dayjs(data.time).fromNow()}</td>
            </tr>
            <tr>
              <td class="px-2 border-t border-r border-gray-700">Wish Total</td>
              <td class="px-2 border-t border-gray-700">{numberFormat.format(data.total.all)}</td>
            </tr>
            <tr>
              <td class="px-2 border-t border-r border-gray-700">Total User</td>
              <td class="px-2 border-t border-gray-700">{numberFormat.format(data.total.users)}</td>
            </tr>
            <tr>
              <td class="px-2 border-t border-r border-gray-700">5★ Median</td>
              <td class="px-2 border-t border-gray-700">{numberFormat.format(data.median.legendary)}</td>
            </tr>
            <tr>
              <td class="px-2 border-t border-r border-gray-700">Total 5★</td>
              <td class="px-2 border-t border-gray-700">
                {numberFormat.format(data.total.legendary)}
                ({numberFormat.format((data.total.legendary / data.total.all) * 100)}%)
              </td>
            </tr>
            <tr>
              <td class="px-2 border-t border-r border-gray-700">Total 4★</td>
              <td class="px-2 border-t border-gray-700">
                {numberFormat.format(data.total.rare)}
                ({numberFormat.format((data.total.rare / data.total.all) * 100)}%)
              </td>
            </tr>
            {#if id > 300000 && id < 400000}
              <tr>
                <td class="px-2 border-t border-r border-gray-700">Won 50:50</td>
                <td class="px-2 border-t border-gray-700">
                  {numberFormat.format(
                    ((totalFeatured - totalGuarantee) / (data.total.legendary - totalGuarantee)) * 100,
                  )}%
                </td>
              </tr>
            {/if}
          </table>
        </div>
      {/if}
    </div>
    {#if !loading}
      <div class="flex flex-col lg:flex-row space-y-4 lg:space-x-4">
        <div
          class="border border-gray-700 rounded-xl mt-4 overflow-hidden"
          style="width: fit-content; height: fit-content;"
        >
          <table class="text-white">
            <tr>
              <td class="text-center px-2 border-gray-700 text-sm">5★ Total<br />Chance%</td>
              {#each [...new Array(10)] as _, i}
                <td class="text-center px-2 border-l border-gray-700">{i + 1}</td>
              {/each}
            </tr>
            {#each [...new Array(9)] as _, i}
              <tr>
                <td class="text-center px-2 border-t border-gray-700">{i * 10 + 1} - {(i + 1) * 10}</td>
                {#each [...new Array(10)] as _, j}
                  <td
                    class="text-center px-2 border-t border-l border-gray-700"
                    style="font-family: monospace; background: rgba(25, 142, 81, {legendaryPity[i * 10 + j]
                      .percentage});"
                    title="Pity {i * 10 + j + 1}"
                  >
                    {legendaryPity[i * 10 + j].total}
                    <br />
                    {numberFormatFixed.format((legendaryPity[i * 10 + j].percentage || 0) * 100)}
                  </td>
                {/each}
              </tr>
            {/each}
          </table>
        </div>
        <div
          class="border border-gray-700 rounded-xl mt-4 overflow-hidden"
          style="width: fit-content; height: fit-content;"
        >
          <table class="text-white">
            <tr>
              <td class="text-center px-2 border-gray-700">4★</td>
              <td class="text-center px-2 border-l border-gray-700">Total</td>
              <td class="text-center px-2 border-l border-gray-700">%</td>
            </tr>
            {#each rarePity as pity, i}
              <tr>
                <td class="text-center px-2 border-t border-gray-700">{i + 1}</td>
                <td class="text-center px-2 border-l border-t border-gray-700" style="font-family: monospace;">
                  {numberFormat.format(pity.total)}
                </td>
                <td
                  class="text-center px-2 border-l border-t border-gray-700"
                  style="font-family: monospace; background: rgba(25, 142, 81, {mapVal(
                    pity.percentage,
                    rarePercentage.min,
                    rarePercentage.max,
                    0,
                    1,
                  )});"
                >
                  {numberFormat.format(pity.percentage * 100)}
                </td>
              </tr>
            {/each}
          </table>
        </div>
        <div class="border border-gray-700 rounded-xl mt-4" style="width: fit-content; height: fit-content;">
          <table class="text-white">
            <tr>
              <td class="text-center px-2 border-r border-gray-700">Name</td>
              <td class="text-center px-2 border-r border-gray-700">Total</td>
              <td class="text-center px-2">%</td>
            </tr>
            {#each legendaryList as item}
              <tr>
                <td class="px-2 border-t border-r border-gray-700">
                  {item.type === 'character' ? characters[item.name].name : weaponList[item.name].name}
                </td>
                <td class="px-2 border-t border-r border-gray-700 text-right" style="font-family: monospace;">
                  {item.count}
                </td>
                <td class="px-2 border-t border-gray-700 text-right" style="font-family: monospace;">
                  {numberFormatFixed.format(item.percentage * 100)}
                </td>
              </tr>
            {/each}
          </table>
        </div>
      </div>
    {/if}
  </div>
</div>
