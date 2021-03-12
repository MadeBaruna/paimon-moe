<script>
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
  <p class="text-gray-400 px-4 py-1 bg-black bg-opacity-50 rounded-xl mt-2 inline-block">
    {#if !started}
      Starting in {dayjs.duration(diffStart).format(diffStart > 86400000 ? 'D[d] HH:mm:ss' : 'HH:mm:ss')}
    {:else if started && !ended && !event.startOnly}
      Ending in {dayjs.duration(diffEnd).format(diffEnd > 86400000 ? 'D[d] HH:mm:ss' : 'HH:mm:ss')}
    {:else if event.startOnly}
      Live Now!
    {:else}
      Finished
    {/if}
  </p>
</div>
