<script>
  import Button from '../../components/Button.svelte';

  export let account;
  export let resetAccount;
  export let cancel;
</script>

<div>
  <p class="text-white font-bold mb-4 text-lg">Reset {account.label}?</p>
  <p class="text-white mb-4">All todo and wish history data will be deleted</p>
  <div class="flex justify-end gap-2">
    <Button on:click={cancel}>Cancel</Button>
    <Button on:click={resetAccount} color="red">Reset</Button>
  </div>
</div>
