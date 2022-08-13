<script>
  import { t } from 'svelte-i18n';

  export let char;
  export let time;
</script>

<div>
  <div class="mb-4 gap-4">
    {#each char as c}
      <div class="h-96 inline-block">
        <img
          src="/images/{c.id === 'paimon_hello' ? '' : 'characters/full/'}{c.id}.png"
          class="h-full w-auto"
          alt={c.name}
        />
      </div>
    {/each}
  </div>
  {#each char as c}
    <h1 class="text-white font-display font-semibold text-xl">{$t(c.name)} {$t('calendar.birthday')}</h1>
  {/each}
  <p class="text-gray-400 font-body flex flex-col md:flex-row">
    <span class="flex">
      <span>{time.format('D MMMM')}</span>
    </span>
  </p>
</div>
