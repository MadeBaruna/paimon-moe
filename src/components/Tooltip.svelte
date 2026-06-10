<script>
  export let title = '';
  let isHovered = false;
  
  let mouseX = 0;
  let mouseY = 0;
  
  let tooltipWidth = 0;
  let tooltipHeight = 0;
  let innerWidth = 0;
  let innerHeight = 0;

  $: x = (tooltipWidth && mouseX + 15 + tooltipWidth > innerWidth) 
    ? mouseX - tooltipWidth - 15 
    : mouseX + 15;

  $: y = (tooltipHeight && mouseY + 15 + tooltipHeight > innerHeight) 
    ? mouseY - tooltipHeight - 15 
    : mouseY + 15;

  function handleMouse(event) {
    if (event.clientX !== undefined) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<i 
  on:mouseover={(e) => { isHovered = true; handleMouse(e); }} 
  on:mousemove={handleMouse}
  on:mouseleave={() => isHovered = false}
  on:focus={() => isHovered = true} 
  on:blur={() => isHovered = false}
  tabindex="0"
>
  <slot />
</i>

{#if isHovered && title}
  <div 
    bind:clientWidth={tooltipWidth}
    bind:clientHeight={tooltipHeight}
    style="top: {y}px; left: {x}px;" 
    class="tooltip"
  >
    {title}
  </div>
{/if}

<style lang="postcss">
  .tooltip {
    @apply p-2 fixed rounded-xl bg-gray-400 border border-gray-800;
    @apply text-sm text-background z-50;
  }

  i {
    font-style: normal;
  }
</style>
