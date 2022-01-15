<script>
  import Icon from './Icon.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let className = '';
  export let icon = null;
  export let placeholder = '';
  export let step = undefined;
  export let type = 'text';
  export let pattern = undefined;
  export let min = Math.min();
  export let max = Math.max();

  export let value = '';

  const handleInput = (event) => {
    if (type === 'number') {
      value = Number(event.target.value);
    } else {
      value = event.target.value;
    }

    dispatch('input');
  };
</script>

<div
  class="flex flex-1 relative items-center bg-background rounded-2xl h-14
   focus-within:border-primary border-2 border-transparent ease-in duration-100 {className}"
  style="min-height: 3.5rem;"
>
  {#if icon}
    <Icon path={icon} color="white" className="absolute ml-4 w-6 h-6" />
  {/if}
  <input
    {placeholder}
    {type}
    {value}
    {min}
    {max}
    {step}
    {pattern}
    on:change
    on:input={handleInput}
    class={`w-full ${
      icon ? 'pl-12' : 'pl-4'
    } min-h-full pr-4 text-white placeholder-gray-500 leading-none bg-transparent border-none focus:outline-none`}
  />
</div>
