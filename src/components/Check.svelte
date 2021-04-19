<script>
  export let checked = false;
  export let disabled = false;
  export let className = '';
  export let inverted = false;
</script>

<label
  class="checkbox-wrapper flex flex-1 pl-4 items-center rounded-2xl h-14 cursor-pointer {inverted
    ? 'bg-item'
    : 'bg-background'} {className}"
  style="--bg: {inverted ? '#202442' : '#2D325A'};"
>
  <span class="flex-1 text-white"><slot /></span>
  <input {disabled} class="w-0 h-0 opacity-0" on:change bind:checked type="checkbox" />
  <svg
    class="checkbox border-4 {inverted ? 'border-background' : 'border-item'} w-10 h-10 rounded-xl mr-2"
    viewBox="0 0 100 100"
  >
    <polyline points="20,50 42,70 80,30" />
  </svg>
</label>

<style>
  .checkbox {
    fill: none;

    @apply text-primary;
    @apply stroke-current;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    stroke-linecap: round;
    stroke-width: 0.85rem;

    transition: background 0.1s, stroke-dashoffset 0.15s ease-in;
  }

  .checkbox-wrapper:hover .checkbox {
    @apply bg-background-secondary;
  }

  input:checked + .checkbox {
    background-color: var(--bg) !important;
    stroke-dashoffset: 0;
  }
</style>
