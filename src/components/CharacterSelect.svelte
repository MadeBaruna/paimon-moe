<script>
  import { createEventDispatcher } from 'svelte';
  import VirtualList from './VirtualList.svelte';
  import { fade } from 'svelte/transition';
  import { mdiChevronDown, mdiCloseCircle } from '@mdi/js';

  import Icon from './Icon.svelte';
  import { characters as characterList } from '../data/characters';

  const dispatch = createEventDispatcher();

  export let placeholder = 'Select character...';

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
    console.log('select', val);
    selected = val;
    focused = false;
    hoveredIndex = -1;

    dispatch('change');
  }

  function selectIndex(val) {
    selected = filteredCharacter[val][1];
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
    filteredCharacter = characters;
    maxItemRow = 6;
  }

  function onKeyDown(event) {
    if (!focused) return;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        hoveredIndex = hoveredIndex === filteredCharacter.length - 1 ? 0 : hoveredIndex + 1;
        break;
      case 'ArrowUp':
        event.preventDefault();
        hoveredIndex = hoveredIndex === 0 ? filteredCharacter.length - 1 : hoveredIndex - 1;
        break;
      case 'Enter':
        event.preventDefault();
        if (hoveredIndex >= 0 && hoveredIndex < filteredCharacter.length) selectIndex(hoveredIndex);
        break;
      case 'Escape':
        event.preventDefault();
        focused = false;
        hoveredIndex = -1;
        break;
    }
  }

  $: characters = Object.entries(characterList).sort((a, b) => a[1].name.localeCompare(b[1].name));

  $: filteredCharacter = characters.filter((e) => e[1].name.toLowerCase().includes(search.toLowerCase()));
  $: maxItemRow = Math.min(6, filteredCharacter.length);

  $: nothingSelected = selected === null;
  $: if (!nothingSelected) {
    label = selected.name;
  }
  $: focused, clearSearch();

  $: classes = focused ? 'border-primary' : 'border-transparent';
  $: iconClasses = focused ? 'transform rotate-180' : '';
</script>

<style>
  .hovered {
    @apply text-white !important;
    @apply bg-primary;
  }

  .options {
    max-height: calc(50vh);
    overflow-y: auto;
  }
</style>

<svelte:window on:click={onWindowClick} on:keydown={onKeyDown} />

<div class="select-none relative" bind:this={container}>
  <div
    class={`flex w-full relative items-center px-4 bg-background rounded-2xl h-14 focus-within:outline-none 
      focus-within:border-primary border-2 border-transparent ease-in duration-100 ${classes}`}
    on:click={toggleOptions}>
    {#if !nothingSelected}
      <img class="w-6 h-6 mr-2" src={`/images/characters/${selected.id}.png`} alt={selected.name} />
    {/if}
    <input
      bind:this={input}
      class={`bg-transparent focus:outline-none h-full ${nothingSelected ? 'text-gray-500' : 'text-white'}`}
      {placeholder}
      value={nothingSelected || focused ? search : label}
      on:input={onInput} />
    {#if selected}
      <div class="absolute right-0 mr-4 cursor-pointer" on:click|stopPropagation={() => select(null)}>
        <Icon
          path={mdiCloseCircle}
          color="white"
          className={`${iconClasses}`} />
      </div>
    {:else}
      <Icon
        path={mdiChevronDown}
        color="white"
        className={`absolute right-0 mr-4 duration-100 ease-in ${iconClasses}`} />
    {/if}
  </div>
  {#if focused}
    <div
      transition:fade={{ duration: 100 }}
      class="options bg-item rounded-2xl absolute mt-2 pl-2 w-full min-h-full z-50 flex flex-col text-white shadow-xl border border-background">
      {#if filteredCharacter.length}
        <VirtualList
          itemHeight={48}
          height={`${maxItemRow * 48 + 16}px`}
          items={filteredCharacter}
          let:item={[id, character]}
          let:index>
          <span
            on:click={() => select(character)}
            on:mouseenter={() => onHover(index)}
            class={`p-3 rounded-xl cursor-pointer flex mr-2
            ${index === 0 ? 'mt-2' : ''}
            ${index === characters.length ? 'mb-2' : ''}
            ${!nothingSelected && selected.id === id ? 'text-primary font-semibold' : ''}
            ${hoveredIndex === index ? 'hovered' : ''}`}>
            <img class="w-6 h-6 mr-2" src={`/images/characters/${id}.png`} alt={character.name} />
            <span class="flex-1">{character.name}</span>
          </span>
        </VirtualList>
      {:else}<span class="p-3 rounded-xl cursor-pointer flex mr-2 my-2"> Character not found </span>{/if}
    </div>
  {/if}
</div>
