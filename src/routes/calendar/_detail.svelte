<script>
  import { t } from 'svelte-i18n';

  import dayjs from 'dayjs';
  import { onMount } from 'svelte';

  import { bannersDual } from '../../data/bannersDual';

  export let type;
  export let event;
  export let timeDifference;

  let start = dayjs(event.start);
  let end = dayjs(event.end);

  let now = dayjs().add(timeDifference, 'minute');

  let image = type === 'banners' ? `${event.name} ${event.image}.png` : event.image;
  let banner2 = null;

  onMount(() => {
    console.log(bannersDual[`${event.name} ${event.image}`]);
    if (type === 'banners') {
      if (bannersDual[`${event.name} ${event.image}`] !== undefined) {
        banner2 = bannersDual[`${event.name} ${event.image}`][1];
      }
    }

    const interval = setInterval(() => {
      now = dayjs().add(timeDifference, 'minute');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  $: started = now.isAfter(event.start);
  $: ended = now.isAfter(event.end);
  $: diffStart = start.diff(now);
  $: diffEnd = end.diff(now);
</script>

<div>
  {#if event.image}
    <img src="/images/{type}/{image}" class="w-full rounded-lg mb-4" alt={event.name} />
  {/if}
  {#if banner2}
    <img src="/images/banners/{banner2.name} {banner2.image}.png" class="w-full rounded-lg mb-4" alt={banner2.name} />
  {/if}
  <h1 class="text-white font-display font-semibold text-xl">{event.name}</h1>
  {#if banner2}
    <h1 class="text-white font-display font-semibold text-xl mb-2">{banner2.name}</h1>
  {/if}
  <p class="text-gray-400 font-body flex flex-col md:flex-row">
    <span class="flex">
      <span>{start.format('ddd, D MMM YYYY HH:mm')}</span>
      {#if !event.startOnly}<span class="mx-2">-</span>{/if}
    </span>
    {#if !event.startOnly}
      <span>{end.format('ddd, D MMM YYYY HH:mm')}</span>
    {/if}
  </p>
  {#if event.url}
    <p class="my-2 overflow-auto mt-4">
      <a class="text-primary hover:underline" target="_blank" href={event.url}>{event.url}</a>
    </p>
  {/if}
  {#if event.description}
    <p class="my-2 overflow-auto mt-4 text-gray-200">
      {event.description}
    </p>
  {/if}
  <p class="text-gray-400 px-4 py-1 bg-black bg-opacity-50 rounded-xl mt-2 inline-block">
    {#if !started}
      {$t('timeline.starting')}
      {`${diffStart > 86400000 ? `${Math.trunc(dayjs.duration(diffStart).asDays())}d` : ''} ${dayjs
        .duration(diffStart)
        .format('HH:mm:ss')}`}
    {:else if started && !ended && !event.startOnly}
      {$t('timeline.ending')}
      {`${diffEnd > 86400000 ? `${Math.trunc(dayjs.duration(diffEnd).asDays())}d` : ''} ${dayjs
        .duration(diffEnd)
        .format('HH:mm:ss')}`}
    {:else if event.startOnly}
      {$t('timeline.live')}
    {:else}
      {$t('timeline.finished')}
    {/if}
  </p>
</div>
