<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { mdiChevronDown, mdiCheck } from '@mdi/js';
  import Icon from './Icon.svelte';

  const dispatch = createEventDispatcher();

  export let icon = null;
  export let options;
  export let placeholder = 'Select...';
  export let multiselect = false;
  export let image = false;

  export let selected = null;
  export let selectedMulti = new Set();
  export let selectedIndex = -1;
  export let hoveredIndex = -1;

  let label = '';
  let labelMulti = '';
  let focused = false;
  let container;

  function toggleOptions() {
    focused = !focused;
  }

  function select(index) {
    if (multiselect) {
      if (selectedMulti.has(index)) {
        selectedMulti.delete(index);
        selectedMulti = selectedMulti;
      } else {
        selectedMulti.add(index);
        selectedMulti = selectedMulti;
      }

      selected = [...selectedMulti].map((e) => options[e]);
      return;
    }

    selectedIndex = index;
    selected = options[index];
    focused = false;
    hoveredIndex = -1;

    dispatch('change');
  }

  function onWindowClick(event) {
    if (!container) return;
    const eventTarget = event.path && event.path.length > 0 ? event.path[0] : event.target;
    if (container.contains(eventTarget)) return;
    focused = false;
    hoveredIndex = -1;
  }

  function onHover(index) {
    hoveredIndex = index;
  }

  function onKeyDown(event) {
    if (!focused) return;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        hoveredIndex = hoveredIndex === options.length - 1 ? 0 : hoveredIndex + 1;
        break;
      case 'ArrowUp':
        event.preventDefault();
        hoveredIndex = hoveredIndex === 0 ? options.length - 1 : hoveredIndex - 1;
        break;
      case 'Enter':
        event.preventDefault();
        if (hoveredIndex >= 0 && hoveredIndex < options.length) select(hoveredIndex);
        break;
      case 'Escape':
        event.preventDefault();
        focused = false;
        hoveredIndex = -1;
        break;
    }
  }

  $: if (multiselect) {
    if (selectedMulti.size === 1) {
      labelMulti = options[selectedMulti.values().next().value].label;
    } else {
      labelMulti = `${selectedMulti.size} selected`;
    }
  }

  $: nothingSelected = multiselect ? selectedMulti.size === 0 : selected === null;
  $: if (!nothingSelected) {
    label = multiselect ? labelMulti : selected.label;
  }

  $: classes = focused ? 'border-primary' : 'border-transparent';
  $: iconClasses = focused ? 'transform rotate-180' : '';
</script>

<style>
  .hovered {
    @apply text-white !important;
    @apply bg-primary;
  }
</style>

<svelte:window on:click={onWindowClick} on:keydown={onKeyDown} />

<div class="select-none relative" bind:this={container}>
  <button
    class={`flex w-full relative items-center px-4 bg-background rounded-2xl h-14 focus:outline-none focus:border-primary border-2 border-transparent ease-in duration-100 ${classes}`}
    on:click={toggleOptions}>
    {#if icon}
      <Icon path={icon} color="white" className="mr-3" />
    {/if}
    <span class={nothingSelected ? 'text-gray-500' : 'text-white'}>{nothingSelected ? placeholder : label}</span>
    <Icon path={mdiChevronDown} color="white" className={`absolute right-0 mr-4 duration-100 ease-in ${iconClasses}`} />
  </button>
  {#if focused}
    <div
      transition:fade={{ duration: 100 }}
      class="bg-item rounded-2xl absolute mt-2 p-2 w-full z-50 flex flex-col text-white shadow-xl border border-background">
      {#each options as option, index}
        <span
          on:click={() => !option.disabled && select(index)}
          on:mouseenter={() => !option.disabled && onHover(index)}
          class={`p-3 rounded-xl cursor-pointer flex
            ${selectedIndex === index || selectedMulti.has(index) ? 'text-primary font-semibold' : ''}
            ${hoveredIndex === index ? 'hovered' : ''}`}>
          {#if image}<img class="w-6 h-6 mr-2" src={option.image} alt={option.label} />{/if}
          <span class="flex-1">{option.label}</span>
          {#if multiselect && selectedMulti.has(index)}
            <Icon path={mdiCheck} color="white" />
          {/if}
        </span>
      {/each}
    </div>
  {/if}
</div>
