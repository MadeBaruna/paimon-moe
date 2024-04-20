<script>
  export let title = '';
  export let enabled = true;
  export let style = '';

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

<i on:mouseover={mouseOver} on:focus={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
  <slot />
</i>

{#if isHovered && enabled}
  <div style="{style} top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style lang="postcss">
  .tooltip {
    @apply p-2 absolute rounded-xl bg-gray-400 border border-gray-800;
    @apply text-sm text-background z-10;
  }

  i {
    font-style: normal;
  }
</style>
