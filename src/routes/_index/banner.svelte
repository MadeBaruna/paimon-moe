<script>
  import { mdiChevronRight, mdiEarth, mdiLoading, mdiStar } from '@mdi/js';
  import { onMount, createEventDispatcher, tick } from 'svelte';

  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const dispatch = createEventDispatcher();

  export let featured;
  export let bannerId;

  let loading = true;
  let featuredPull = 0;
  let percentage = '...';
  let average = '...';

  async function getData() {
    const url = new URL(`${__paimon.env.API_HOST}/wish`);
    const query = new URLSearchParams({ banner: bannerId });
    url.search = query.toString();

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      const item = data.list.find((e) => e.name === featured);
      featuredPull = item.count;
      percentage = numberFormat.format((item.count / data.total.legendary) * 100);
      average = numberFormat.format(data.pityAverage.legendary);

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
    <img src="/images/home/venti.png" alt="venti" style="min-height: 150px;" />
    <div
      class="flex text-white items-center absolute bottom-0 pb-1"
      style="background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 27%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0) 100%);"
    >
      <h3 class="text-4xl ml-4 font-black leading-10" style="margin-top: 8px;">
        {#if loading}
          <Icon path={mdiLoading} spin />
        {:else}
          {featuredPull}
        {/if}
      </h3>
      <div class="flex flex-col ml-2 pr-2">
        <p class="font-semibold">{$t('home.banner.featured')}</p>
        <p class="text-gray-200 leading-3">{$t('home.banner.summoned')}</p>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap items-start pl-2 mt-1">
    <p class="text-white mr-4">
      <span class="font-semibold">{percentage}%</span>
      {$t('home.banner.percentage')}<Icon className="mb-1" path={mdiStar} size={0.8} />
    </p>
    <p class="text-white">{$t('home.banner.avg')} <span class="font-semibold">{average}</span></p>
  </div>
  <p class="text-gray-400 pl-2">※ {$t('home.banner.subtitle')}</p>
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
