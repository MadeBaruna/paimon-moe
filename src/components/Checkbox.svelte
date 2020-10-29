<script>
  export let checked = false;
  export let disabled;
</script>

<label class="flex items-center">
  <input {disabled} class="mr-2 w-4 h-4" on:change bind:checked type="checkbox" />
  <slot />
</label>
