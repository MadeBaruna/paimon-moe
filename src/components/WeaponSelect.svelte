<script>
  import { t } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  import VirtualList from './VirtualList.svelte';
  import { fade } from 'svelte/transition';
  import { mdiChevronDown, mdiCloseCircle } from '@mdi/js';

  import Icon from './Icon.svelte';
  import { weaponList } from '../data/weaponList';

  const dispatch = createEventDispatcher();

  export let placeholder = 'Select weapon...';

  export let selected = null;
  export let hoveredIndex = -1;

  let label = '';
  let focused = false;
  let container;
  let input;
  let search = '';

  function toggleOptions() {
    focused = !focused;

    if (focused) {
      input.focus();
    }
  }

  function select(val) {
    selected = val;
    focused = false;
    hoveredIndex = -1;

    dispatch('change');
  }

  function selectIndex(val) {
    selected = filteredWeapons[val][1];
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

  function onInput(event) {
    search = event.target.value;
  }

  function clearSearch() {
    search = '';
    filteredWeapons = weapons;
    maxItemRow = 6;
  }

  function onKeyDown(event) {
    if (!focused) return;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        hoveredIndex = hoveredIndex === filteredWeapons.length - 1 ? 0 : hoveredIndex + 1;
        break;
      case 'ArrowUp':
        event.preventDefault();
        hoveredIndex = hoveredIndex === 0 ? filteredWeapons.length - 1 : hoveredIndex - 1;
        break;
      case 'Enter':
        event.preventDefault();
        if (hoveredIndex >= 0 && hoveredIndex < filteredWeapons.length) selectIndex(hoveredIndex);
        break;
      case 'Escape':
        event.preventDefault();
        focused = false;
        hoveredIndex = -1;
        break;
    }
  }

  $: weapons = Object.entries(weaponList)
    .filter((e) => e[1].rarity >= 3)
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  $: filteredWeapons = weapons.filter((e) => e[1].name.toLowerCase().includes(search.toLowerCase()));
  $: maxItemRow = Math.min(6, filteredWeapons.length);

  $: nothingSelected = selected === null;
  $: if (!nothingSelected) {
    label = selected.name;
  }
  $: focused, clearSearch();

  $: classes = focused ? 'border-primary' : 'border-transparent';
  $: iconClasses = focused ? 'transform rotate-180' : '';
</script>

<svelte:window on:click={onWindowClick} on:keydown={onKeyDown} />

<div class="select-none relative" bind:this={container}>
  <div
    class={`flex w-full relative items-center px-4 bg-background rounded-2xl h-14 focus-within:outline-none 
      focus-within:border-primary border-2 border-transparent ease-in duration-100 ${classes}`}
    on:click={toggleOptions}
  >
    {#if !nothingSelected}
      <img class="w-6 h-6 mr-2" src={`/images/weapons/${selected.id}.png`} alt={selected.name} />
    {/if}
    <input
      bind:this={input}
      class={`bg-transparent focus:outline-none h-full max-w-full ${nothingSelected ? 'text-gray-500' : 'text-white'}`}
      {placeholder}
      value={nothingSelected || focused ? search : label}
      on:input={onInput}
    />
    {#if selected}
      <div class="absolute right-0 mr-4 cursor-pointer" on:click|stopPropagation={() => select(null)}>
        <Icon path={mdiCloseCircle} color="white" className={`${iconClasses}`} />
      </div>
    {:else}
      <Icon
        path={mdiChevronDown}
        color="white"
        className={`absolute right-0 mr-4 duration-100 ease-in ${iconClasses}`}
      />
    {/if}
  </div>
  {#if focused}
    <div
      transition:fade={{ duration: 100 }}
      class="options bg-item rounded-2xl absolute mt-2 pl-2 w-full min-h-full z-50 flex flex-col text-white shadow-xl border border-background"
    >
      {#if filteredWeapons.length}
        <VirtualList
          itemHeight={48}
          height={`${maxItemRow * 48 + 16}px`}
          items={filteredWeapons}
          let:item={[id, weapon]}
          let:index
        >
          <span
            on:click={() => select(weapon)}
            on:mouseenter={() => onHover(index)}
            class={`p-3 rounded-xl cursor-pointer flex mr-2
            ${index === 0 ? 'mt-2' : ''}
            ${index === weapons.length ? 'mb-2' : ''}
            ${!nothingSelected && selected.id === id ? 'text-primary font-semibold' : ''}
            ${hoveredIndex === index ? 'hovered' : ''}`}
          >
            <img class="w-6 h-6 mr-2" src={`/images/weapons/${id}.png`} alt={weapon.name} />
            <span class="flex-1">{$t(weapon.name)}</span>
          </span>
        </VirtualList>
      {:else}<span class="p-3 rounded-xl cursor-pointer flex mr-2 my-2"> Weapon not found </span>{/if}
    </div>
  {/if}
</div>

<style lang="postcss">
  .hovered {
    @apply text-white !important;
    @apply bg-primary;
  }

  .options {
    max-height: calc(50vh);
    overflow-y: auto;
  }
</style>
