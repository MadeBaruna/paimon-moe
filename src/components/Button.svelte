<script>
  export let className;
</script>

<button
  class={`text-white border-2 border-white border-opacity-25 rounded-xl px-4 py-2 transition duration-100
     hover:border-primary focus:outline-none focus:border-primary ${className}`}
  on:click><slot /></button>
