<script>
  export let className;
  export let disabled = false;
</script>

<button
  {disabled}
  class={`text-white border-2 border-white border-opacity-25 rounded-xl px-4 py-2 transition duration-100
     hover:border-primary focus:outline-none focus:border-primary disabled:opacity-50 disabled:border-gray-600 ${className}`}
  on:click><slot /></button>
