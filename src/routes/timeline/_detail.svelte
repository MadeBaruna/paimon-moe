<script>
  import { t } from 'svelte-i18n';
  
  import dayjs from 'dayjs';
  import { onMount } from 'svelte';

  export let event;

  let now = dayjs();

  onMount(() => {
    const interval = setInterval(() => {
      now = dayjs();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  $: started = now.isAfter(event.start);
  $: ended = now.isAfter(event.end);
  $: diffStart = event.start.diff(now);
  $: diffEnd = event.end.diff(now);
</script>

<div>
  <img src="/images/events/{event.image}" class="w-full rounded-lg" alt={event.name} />
  <h1 class="mt-4 text-white font-display font-semibold text-xl">{event.name}</h1>
  <p class="text-gray-400 font-body flex flex-col md:flex-row">
    <span class="flex">
      <span>{event.start.format('ddd, D MMM YYYY HH:mm')}</span>
      {#if !event.startOnly}<span class="mx-2">-</span>{/if}
    </span>
    {#if !event.startOnly}
      <span>{event.end.format('ddd, D MMM YYYY HH:mm')}</span>
    {/if}
  </p>
  {#if event.description}
    <p class="my-2">
      <a class="text-primary hover:underline" target="__blank" href={event.description}>{event.description}</a>
    </p>
  {/if}
  <p class="text-gray-400 px-4 py-1 bg-black bg-opacity-50 rounded-xl mt-2 inline-block">
    {#if !started}
      {$t('timeline.starting')} {`${diffStart > 86400000 ? `${Math.trunc(dayjs.duration(diffStart).asDays())}d` : ''} ${dayjs.duration(diffStart).format('HH:mm:ss')}`}
    {:else if started && !ended && !event.startOnly}
      {$t('timeline.ending')} {`${diffEnd > 86400000 ? `${Math.trunc(dayjs.duration(diffEnd).asDays())}d` : ''} ${dayjs.duration(diffEnd).format('HH:mm:ss')}`}
    {:else if event.startOnly}
      {$t('timeline.live')}
    {:else}
      {$t('timeline.finished')}
    {/if}
  </p>
</div>
