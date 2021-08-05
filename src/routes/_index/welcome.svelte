<script>
  import { createEventDispatcher, onMount, tick } from 'svelte';
  import { t } from 'svelte-i18n';

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  const dispatch = createEventDispatcher();

  let count = '...';

  async function getData() {
    const url = new URL(`${__paimon.env.API_HOST}/visitor`);

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      count = `${numberFormat.format(data.count / 1000)}k`;
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

<div class="bg-item rounded-xl p-4">
  <p class="text-white font-bold font-display text-xl">{$t('home.welcome')}</p>
  <p class="text-white mt-2">{$t('home.message')}</p>
  <p class="text-gray-400 mt-2">{$t('home.visitor', { values: { count } })}</p>
</div>
