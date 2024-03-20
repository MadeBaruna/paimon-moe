<script>
  import { mdiClose } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';

  import Icon from './Icon.svelte';
  import Input from './Input.svelte';

  const dispatch = createEventDispatcher();

  export let className = '';
  export let placeholder = '';
  export let value = '';

  let showInputButtonCancel = false;

  function cleanFilter() {
    value = '';
    const element = document.querySelector('.input-search-component input');
    setTimeout(() => { element.focus(); }, 100);

    dispatch('input');
  }

  function validateInputButtonCancel(event) {
    if (event.type === 'focus') { showInputButtonCancel = true }
    else if (nameFilter === '') setTimeout(() => { showInputButtonCancel = false }, 100);
    
    dispatch(event.type);
  }
</script>

<div class="flex-1 relative">
  <Input
    className="input-search-component {className}"
    type="search"
    {placeholder}
    on:input={() => { dispatch('input'); }}
    on:focus={validateInputButtonCancel}
    on:blur={validateInputButtonCancel}
    bind:value={value}
  />
  {#if showInputButtonCancel}
    <span 
      on:click={cleanFilter}
      aria-hidden="true"
      class="w-12 h-12 flex justify-center items-center absolute right-[0.6rem] top-[0.3rem] cursor-pointer"
    >
      <Icon size="0.85" path={mdiClose} color="white"/>
    </span>
  {/if}
</div>
