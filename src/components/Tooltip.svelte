<script>
  export let title = '';
  let isHovered = false;
  let x;
  let y;

  function mouseOver(event) {
    isHovered = true;
    x = event.pageX + 5;
    y = event.pageY + 5;
  }
  function mouseMove(event) {
    x = event.pageX + 5;
    y = event.pageY + 5;
  }
  function mouseLeave() {
    isHovered = false;
  }
</script>

<i on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
  <slot />
</i>

{#if isHovered}
  <div style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
  .tooltip {
    @apply text-background rounded-xl bg-gray-400 border border-gray-800 p-2 absolute text-sm;
  }
</style>
