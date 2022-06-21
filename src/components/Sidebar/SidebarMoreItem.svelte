<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';

  export let image;
  export let label;
  export let active;
  export let segment;
  export let mobile;
  export let items = [];

  let expandMenu = false;

  const dispatch = createEventDispatcher();

  function expand() {
    expandMenu = !expandMenu;
  }

  function clicked() {
    dispatch('clicked');
  }
</script>

<div class="w-full rounded-xl ease-in duration-150 {mobile ? '' : 'parent'} {active ? 'active' : ''}">
  <div class="flex absolute transform translate-x-full child top-0 bottom-0">
    <div class="w-10 h-full" />
    <div class="bg-background shadow-lg flex flex-col justify-center p-2 -mt-2 rounded-r-xl">
      {#each items as item}
        <a
          on:click={clicked}
          class="w-full rounded-xl ease-in duration-150 {segment === item.href.substring(1) ? 'active-child' : ''}"
          href={item.href}
        >
          <div
            class="w-full py-3 flex items-center px-4 cursor-pointer transition-colors text-gray-500 hover:text-white ease-in duration-150"
          >
            <div class="h-8 mr-3 flex justify-center items-center leading-none">
              <span>●</span>
            </div>
            <span class="font-body font-semibold flex-1 text-lg leading-none">
              {item.label}
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>
  <div class="group w-full py-3 flex items-center px-4 cursor-pointer transition-colors" on:click={expand}>
    <div class="h-8 w-8 flex justify-center mr-3 opacity-75 group-hover:opacity-100 ease-in duration-150">
      <img class="h-full" src={image} alt={label} />
    </div>
    <span
      class="parent-span font-body font-semibold flex-1 text-lg leading-none text-gray-500 group-hover:text-white ease-in duration-150"
    >
      {label}
    </span>
  </div>
</div>
{#if expandMenu}
  <div class="py-2 flex flex-col w-full" transition:fly={{ y: -100, duration: 100 }}>
    {#each items as item}
      <a
        on:click={clicked}
        class="w-full rounded-xl ease-in duration-150 {segment === item.href.substring(1) ? 'active-child' : ''}"
        href={item.href}
      >
        <div
          class="w-full py-3 flex items-center px-4 cursor-pointer transition-colors text-gray-500 hover:text-white ease-in duration-150"
        >
          <div class="h-8 w-8 mr-3 flex justify-center items-center leading-none">
            <span>●</span>
          </div>
          <span class="font-body font-semibold flex-1 text-lg leading-none">
            {item.label}
          </span>
        </div>
      </a>
    {/each}
  </div>
{/if}

<style>
  .active {
    @apply bg-primary;
    @apply bg-opacity-75;

    span.parent-span {
      @apply text-white;
    }

    img {
      @apply opacity-100;
    }
  }

  .active-child {
    @apply bg-primary;
    @apply bg-opacity-75;

    span {
      @apply text-white;
    }
  }

  .child {
    display: none;
    right: 2.5rem;
  }

  .parent:hover {
    .child {
      display: flex;
    }
  }
</style>
