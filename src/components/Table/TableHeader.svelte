<script>
  import { fade } from 'svelte/transition';
  import { mdiChevronDown } from '@mdi/js';

  import Icon from '../Icon.svelte';

  export let sort = false;
  export let order = false;
  export let align = 'left';
</script>

<th class={`text-gray-400 select-none font-display text-lg cursor-pointer px-4 text-${align}`} on:click>
  <span class="relative"><slot />
    {#if sort}
      <div transition:fade={{ duration: 100 }} class="absolute" style="right: -21px; top: 3px;">
        <Icon className={`mb-1 duration-100 ${order ? 'transform -rotate-180' : ''}`} path={mdiChevronDown} />
      </div>
    {/if}
  </span>
</th>
