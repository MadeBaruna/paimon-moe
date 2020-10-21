<script>
  import { createEventDispatcher } from 'svelte';

  export let image;
  export let label;
  export let href;
  export let active;

  const dispatch = createEventDispatcher();

  function clicked() {
    dispatch('clicked');
  }
</script>

<style>
  .active {
    @apply bg-primary;
    @apply bg-opacity-75;

    span {
      @apply text-white;
    }

    img {
      @apply opacity-100;
    }
  }
</style>

<a on:click={clicked} class={`w-full rounded-xl ease-in duration-150 ${active ? 'active' : ''}`} {href}>
  <div class="group w-full py-3 flex items-center px-6 cursor-pointer transition-colors">
    <img class="w-8 h-8 mr-3 opacity-75 group-hover:opacity-100 ease-in duration-150" src={image} alt={label} />
    <span
      class="font-body font-semibold text-lg leading-none text-gray-500 group-hover:text-white ease-in duration-150">{label}</span>
  </div>
</a>
