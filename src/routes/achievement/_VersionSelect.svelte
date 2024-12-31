<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { mdiChevronDown, mdiCheck } from '@mdi/js';
  import Icon from '../../components/Icon.svelte';

  const dispatch = createEventDispatcher();

  export let className = '';
  export let placeholder = 'Version';
  export let disabled = false;
  export let value = [];

  let selected = new Set();

  const versions = [
    '1.0',
    '1.1',
    '1.2',
    '1.3',
    '1.4',
    '1.5',
    '1.6',
    '2.0',
    '2.1',
    '2.2',
    '2.3',
    '2.4',
    '2.5',
    '2.6',
    '2.7',
    '2.8',
    '3.0',
    '3.1',
    '3.2',
    '3.3',
    '3.4',
    '3.5',
    '3.6',
    '3.7',
    '3.8',
    '4.0',
    '4.1',
    '4.2',
    '4.3',
    '4.4',
    '4.5',
    '4.6',
    '4.7',
    '4.8',
    '5.0',
    '5.1',
    '5.2',
    '5.3',
  ].reduce((acc, version) => {
    const parent = version.split('.')[0];
    if (!acc[parent]) acc[parent] = [];
    acc[parent].push(version);
    return acc;
  }, {});
  const options = Object.entries(versions);

  let active = 0;
  let label = '';
  let focused = false;
  let container;

  function toggleOptions() {
    focused = !focused;
  }

  function select(version) {
    if (selected.has(version)) {
      selected.delete(version);
    } else {
      selected.add(version);
    }
    selected = selected;
    value = [...selected];
    dispatch('change');
    return;
  }

  function selectParent(index) {
    active = index;
  }

  function onWindowClick(event) {
    if (!container) return;
    const eventTarget = event.path && event.path.length > 0 ? event.path[0] : event.target;
    if (container.contains(eventTarget)) return;
    focused = false;
  }

  $: if (selected.size === 1) {
    label = selected.values().next().value;
  } else {
    label = `${selected.size} selected`;
  }
  $: nothingSelected = selected.size === 0;

  $: classes = focused ? 'border-primary' : 'border-transparent';
  $: iconClasses = focused ? 'transform rotate-180' : '';
</script>

<svelte:window on:click={onWindowClick} />

<div class={`select-none relative ${className}`} bind:this={container}>
  <button
    class="flex w-full relative items-center px-4 bg-background rounded-2xl h-14 focus:outline-none focus:border-primary border-2 border-transparent ease-in duration-100 {disabled
      ? 'cursor-not-allowed'
      : 'cursor-pointer'} {classes}"
    {disabled}
    on:click={toggleOptions}
  >
    <span class={nothingSelected ? 'text-gray-500' : 'text-white'}>{nothingSelected ? placeholder : label}</span>
    <Icon path={mdiChevronDown} color="white" className={`absolute right-0 mr-4 duration-100 ease-in ${iconClasses}`} />
  </button>
  {#if focused}
    <div
      transition:fade={{ duration: 100 }}
      class="bg-item rounded-2xl absolute mt-2 py-2 px-2 w-full z-50 flex gap-2 flex-col text-white shadow-xl border border-background"
    >
      <div class="flex gap-1">
        {#each options as [parent], index}
          <button
            on:click={() => selectParent(index)}
            class="px-2 py-1 rounded-lg flex-1 hover:ring-2 ring-primary duration-100 {index === active
              ? 'bg-primary text-black'
              : 'bg-black/50'}">v{parent}</button
          >
        {/each}
      </div>
      <div class="h-[1px] bg-black/30" />
      <div class="grid grid-cols-5 gap-1">
        {#each options[active][1] as ver}
          <button
            on:click={() => select(ver)}
            class="px-2 py-1 rounded-lg flex-1 hover:ring-2 ring-primary duration-100 {selected.has(ver)
              ? 'bg-primary text-black'
              : 'bg-black/50'}">{ver}</button
          >
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .hovered {
    @apply text-white !important;
    @apply bg-primary;
  }
</style>
