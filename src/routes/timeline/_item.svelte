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

  $: prevDiff = prev !== null ? event.start.diff(prev.end, 'hour') : Number.MAX_VALUE;
  $: nextDiff = next !== null ? next.start.diff(event.end, 'hour') : Number.MAX_VALUE;
  $: prevNearby = prev !== null && prevDiff < 48;
  $: nextNearby = next !== null && nextDiff < 48;
  $: started = now.isAfter(event.start);
  $: ended = now.isAfter(event.end);
  $: diffStart = event.start.diff(now);
  $: diffEnd = event.end.diff(now);
  $: attachedNext = next !== null && next.start.diff(event.end, 'hour') < 3;
  $: attachedPrev = prev !== null && event.start.diff(prev.end, 'hour') < 3;
  $: prevEnded = prev !== null && now.isAfter(prev.end);
  $: shouldShowHourStart = diffStart <= 86400000 || event.duration > 6.5 || !prevNearby;
  $: shouldShowHourEnd = diffEnd <= 86400000 || event.duration > 6.5 || !prevNearby;
</script>

<div
  on:click={openDetail}
  class="flex items-center z-10 text-white cursor-pointer absolute {prevDiff < 1 ? '' : 'rounded-l-xl'} {nextDiff < 1
    ? 'border-r-4 border-white'
    : 'rounded-r-xl'}"
  style="width: {dayWidth * event.duration}px; left: {dayWidth * event.offset}px; background-color: {event.color};
   top: {marginTop + i * (eventHeight + eventMargin)}px; height: {eventHeight}px; padding-right: 10px; 
        {prevNearby && !started && (attachedPrev || prevEnded) && prevNearby
    ? 'padding-left: 35px;'
    : 'padding-left: 10px;'}
    --image: url(/images/events/{event.image}); --pos: {event.pos}; --color: {event.color}; 
    --zoom: {event.zoom ? event.zoom : '200%'};"
>
  <div class="event-item {nextDiff < 1 ? '' : 'rounded-xl'}" />
  <span
    class="event-name text sticky left-0 font-display text-base md:text-lg text-black font-bold whitespace-nowrap overflow-hidden"
  >
    {event.name}
  </span>
  <!-- Ending timer-->
  {#if started && !ended && !event.startOnly && !attachedNext}
    <div
      class="absolute pl-3"
      style="top: 6px; right: {nextNearby ? '-55px' : shouldShowHourEnd ? '-120px' : '-40px'}; width: {shouldShowHourEnd
        ? '120px'
        : '40px'};"
    >
      <span class="text-sm rounded-xl text-black font-semibold bg-white bg-opacity-75 px-1">
        {diffEnd > 86400000
          ? `${Math.trunc(dayjs.duration(diffEnd).asDays())}d ${
              shouldShowHourEnd ? dayjs.duration(diffEnd).format('H[h]') : ''
            }`
          : dayjs.duration(diffEnd).format('HH:mm:ss')}
      </span>
    </div>
    <!-- Starting timer-->
  {:else if (prevNearby && !attachedPrev ? prevEnded : true) && !started && !ended}
    <div
      class="absolute pr-3 text-right"
      style="top: 6px; left: {prevNearby
        ? shouldShowHourStart
          ? '-80px'
          : '-18px'
        : '-120px'}; width: {shouldShowHourStart ? '120px' : '40px'};"
    >
      <span class="text-sm rounded-xl text-black font-semibold bg-white bg-opacity-75 px-1">
        {diffStart > 86400000
          ? `${Math.trunc(dayjs.duration(diffStart).asDays())}d ${
              shouldShowHourStart ? dayjs.duration(diffStart).format('H[h]') : ''
            }`
          : dayjs.duration(diffStart).format('HH:mm:ss')}
      </span>
    </div>
  {/if}
</div>

<style lang="postcss">
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
