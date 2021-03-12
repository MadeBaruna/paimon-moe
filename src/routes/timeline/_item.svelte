<script>
  import dayjs from 'dayjs';

  export let prev = null;
  export let next = null;
  export let event;
  export let openDetail;
  export let dayWidth;
  export let marginTop;
  export let eventHeight;
  export let eventMargin;
  export let now;
  export let i;

  $: prevNearby = prev !== null && event.start.diff(prev.end, 'hour') < 12;
  $: nextNearby = next !== null && next.start.diff(event.end, 'hour') < 12;
  $: started = now.isAfter(event.start);
  $: ended = now.isAfter(event.end);
  $: diffStart = event.start.diff(now);
  $: diffEnd = event.end.diff(now);
</script>

<div
  on:click={openDetail}
  class="flex items-center z-10 text-white cursor-pointer absolute {prevNearby ? '' : 'rounded-l-xl'} {nextNearby
    ? 'border-r-4 border-white'
    : 'rounded-r-xl'}"
  style="width: {dayWidth * event.duration}px; left: {dayWidth *
    event.offset}px; background-color: {event.color};
   top: {marginTop +
    i * (eventHeight + eventMargin)}px; height: {eventHeight}px; padding-right: 10px; 
        {prevNearby &&
  diffStart > 86400000
    ? 'padding-left: 50px;'
    : 'padding-left: 10px;'}
    --image: url(/images/events/{event.image}); --pos: {event.pos}; --color: {event.color}; 
    --zoom: {event.zoom ? event.zoom : '200%'};"
>
  <div class="event-item {nextNearby ? '' : 'rounded-xl'}" />
  <span class="event-name text sticky left-0 font-display text-base md:text-lg text-black font-bold whitespace-no-wrap">
    {event.name}
  </span>
  {#if started && !ended && !event.startOnly}
    <div class="absolute pl-3" style="top: 6px; right: -200px; width: 200px;">
      <span class="text-sm rounded-xl text-black font-semibold bg-white bg-opacity-75 px-1">
        {dayjs.duration(diffEnd).format(diffEnd > 86400000 ? 'D[d] HH:mm:ss' : 'HH:mm:ss')}
      </span>
    </div>
  {:else if !started && !ended}
    <div class="absolute pr-3 text-right" style="top: 6px; left: {prevNearby ? '-150px' : '-200px'}; width: 200px;">
      <span class="text-sm rounded-xl text-black font-semibold bg-white bg-opacity-75 px-1">
        {dayjs.duration(diffStart).format(diffStart > 86400000 ? 'D[d] HH:mm:ss' : 'HH:mm:ss')}
      </span>
    </div>
  {/if}
</div>

<style>
  div.event-item {
    position: absolute;
    opacity: 1;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 200px;
    height: 100%;
    background-image: var(--image);
    background-position: var(--pos);
    background-repeat: no-repeat;
    background-size: var(--zoom);
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  span.event-name {
    text-shadow: var(--color) -1px -1px 4px, var(--color) 1px -1px 4px, var(--color) -1px 1px 4px,
      var(--color) 1px 1px 4px, var(--color) 0 0 10px;
  }
</style>
