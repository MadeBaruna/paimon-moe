<script>
  import { mdiChevronRight, mdiEarth, mdiLoading } from '@mdi/js';
  import { onMount, createEventDispatcher, tick } from 'svelte';

  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const dispatch = createEventDispatcher();

  const featured = {
    wriothesley: {
      name: 'Wriothesley',
      rarity: 'legendary',
      count: 0,
      average: '...',
      percentage: '...',
    },
    furina: {
      name: 'Furina',
      rarity: 'legendary',
      count: 0,
      average: '...',
      percentage: '...',
    },
  };
  const bannerId = 300079;
  const image = 'wriothesley furina.png';
  const width = 800;
  const height = 423;

  let loading = true;
  let user = '';

  async function getData() {
    const url = new URL(`${import.meta.env.VITE_API_HOST}/wish`);
    const query = new URLSearchParams({ banner: bannerId });
    url.search = query.toString();

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      user = data.total.users;
      for (const e of data.list) {
        if (featured[e.name]) {
          featured[e.name].count = e.count;
          featured[e.name].percentage = numberFormat.format((e.count / data.total[featured[e.name].rarity]) * 100);
          featured[e.name].average = numberFormat.format(data.pityAverage[featured[e.name].rarity]);
        }
      }

      console.log(featured);

      loading = false;
    } catch (err) {
      console.error(err);
    }
  }

  onMount(async () => {
    getData();
    await tick();
    dispatch('done');
  });
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  <div class="relative">
    <img src="/images/home/{image}" alt="banner" style="min-height: 150px;" {width} {height} />
    <div class="flex flex-wrap text-white justify-between items-center absolute bottom-0 w-full">
      {#each Object.entries(featured) as [_, item], i}
        <div
          class="flex flex-col pt-2 max-w-[60%]"
          style="background: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 17%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0) 100%);"
        >
          <h3 class="text-3xl font-black leading-6 text-right {i === 0 ? 'ml-4' : 'pr-4'}">
            {#if loading}
              <Icon path={mdiLoading} spin size={0.8} />
            {:else}
              {(item.count / 1000).toFixed(1)}K
            {/if}
          </h3>
          <p
            class="font-sm leading-2 whitespace-nowrap overflow-hidden text-ellipsis {i === 0
              ? 'ml-4 text-left'
              : 'pr-4 text-right'}"
            style="direction: rtl;"
          >
            {$t(item.name)}
          </p>
        </div>
      {/each}
    </div>
  </div>
  <div class="h-1" />
  {#each Object.entries(featured) as [_, item], i}
    <div class="flex flex-wrap items-start pl-2">
      <p class="text-white mr-4 leading-4">
        <span class="font-semibold">{item.percentage}%</span>
        {$t('home.banner.percentage', { values: { rarity: item.rarity === 'legendary' ? '5★' : '4★' } })}
      </p>
      <p class="text-white leading-4">{$t('home.banner.avg')} <span class="font-semibold">{item.average}</span></p>
    </div>
  {/each}
  <p class="text-gray-400 pl-2 mt-1">※ {$t('home.banner.subtitle', { values: { user } })}</p>
  <a
    href="/wish/tally"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
    <Icon path={mdiEarth} className="mr-2" />
    {$t('home.banner.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
