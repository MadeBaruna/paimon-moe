<script>
  export let className = '';
  export let placeholder = '';
  export let step = undefined;
  export let min = Math.min();
  export let max = Math.max();

  export let value = '';

  const handleInput = (event) => {
    value = event.target.value;
  };
</script>

<div
  class={`container overflow-hidden flex flex-1 relative items-center bg-background rounded-2xl focus-within:border-primary border-2 border-transparent ease-in duration-100 ${className}`}
>
  <textarea
    {placeholder}
    {value}
    {min}
    {max}
    {step}
    on:change
    on:input={handleInput}
    class={`w-full min-h-full pr-4 text-white placeholder-gray-500 leading-none bg-transparent border-none focus:outline-none`}
  />
</div>

<style lang="postcss">
  .container {
    height: fit-content;
  }

  textarea {
    min-height: 100px;
    @apply p-4;
  }
</style>
