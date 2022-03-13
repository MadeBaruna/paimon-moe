<script>
  import { mdiLoading } from '@mdi/js';

  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';

  export let wishTotal = {
    'character-event': 0,
    'weapon-event': 0,
    standard: 0,
  };

  let current = 'character-event';
  let wishCount = 0;
  let total = 0;
  let data = [];
  let percentage = 0;
  let median = '...';
  let loading = true;

  export async function getData() {
    loading = true;
    median = '...';
    wishCount = wishTotal[current];

    try {
      const url = new URL(`${__paimon.env.API_HOST}/wish/summary`);
      const query = new URLSearchParams({ banner: current });
      url.search = query.toString();

      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      data = await res.json();

      total = 0;
      const sorted = [];
      for (const item of data) {
        total += item[1];
        sorted.push(...new Array(item[1]).fill(item[0]));
      }
      median = sorted[Math.round(sorted.length / 2)];

      getPercentile(wishCount);
    } catch (err) {
      console.error(err);
    }
  }

  function getPercentile(value) {
    let totalLower = 0;
    for (const item of data) {
      const qty = item[0];
      const amount = item[1];
      totalLower += amount;

      if (qty >= value) break;
    }

    percentage = (totalLower / total) * 100;
    console.log(totalLower, percentage, value);

    loading = false;
  }

  function change(type) {
    current = type;
    getData();
  }
</script>

<div class="flex flex-col items-center bg-item rounded-xl p-4 w-full mt-4">
  <div class="flex -m-1 pb-5">
    <button class="pill m-1 {current === 'character-event' ? 'active' : ''}" on:click={() => change('character-event')}>
      {$t('wish.detail.character')}
    </button>
    <button class="pill m-1 {current === 'weapon-event' ? 'active' : ''}" on:click={() => change('weapon-event')}>
      {$t('wish.detail.weapon')}
    </button>
    <button class="pill m-1 {current === 'standard' ? 'active' : ''}" on:click={() => change('standard')}>
      {$t('wish.types.standard')}
    </button>
  </div>
  <div class="flex flex-row items-end">
    <div class="flex flex-col text-white font-black text-4xl pr-4">
      <span class="text-sm text-left text-gray-400" style="line-height: 0.7;">TOP</span>
      <span class="text-right leading-none">{loading ? '...' : percentage.toFixed(0)}%</span>
    </div>
    <div class="flex flex-col text-white" style="margin-bottom: 2px;">
      <p>{$t('wish.rank.level')}</p>
      <p class="text-sm text-gray-400 leading-none">{$t('wish.rank.based')}</p>
    </div>
  </div>
  <p class="text-sm text-gray-400 mt-2 text-center">
    {$t('wish.rank.current', { values: { median, banner: $t(`wish.types.${current}`) } })}
  </p>
</div>

<style>
  .pill {
    @apply text-sm;
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
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
    }
  }
</style>
