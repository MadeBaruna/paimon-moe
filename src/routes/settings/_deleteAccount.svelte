<script>
  import Button from '../../components/Button.svelte';

  export let account;
  export let deleteAccount;
  export let cancel;
</script>

<div>
  <p class="text-white font-bold mb-4 text-lg">Delete {account.label}?</p>
  <p class="text-white mb-4">All todo and wish history data will be deleted</p>
  <div class="flex justify-end gap-2">
    <Button on:click={cancel}>Cancel</Button>
    <Button on:click={deleteAccount} color="red">Delete</Button>
  </div>
</div>
