<script>
  import Icon from './Icon.svelte';

  export let icon;
  export let placeholder;

  export let value = '';
</script>

<div
  class="flex flex-1 relative items-center bg-item rounded-2xl h-14 focus-within:border-primary border-2 border-transparent ease-in duration-100">
  {#if icon}
    <Icon path={icon} color="white" className="absolute ml-4 w-6 h-6" />
  {/if}
  <input
    {placeholder}
    bind:value
    class="w-full pl-12 pr-4 text-white placeholder-gray-500 leading-none bg-transparent border-none focus:outline-none" />
</div>
