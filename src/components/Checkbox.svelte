<script>
  export let checked = false;
  export let disabled;
</script>

<label class="flex items-center">
  <input {disabled} class="mr-2 w-4 h-4" style="min-width: 1rem;" on:change bind:checked type="checkbox" />
  <slot />
</label>
