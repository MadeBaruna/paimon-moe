<script>
  import { t } from 'svelte-i18n';

  import Button from '../components/Button.svelte';

  export let close;

  function reload() {
    window.location.reload();
  }
</script>

<div>
  <p class="text-white font-bold mb-1 text-lg">{$t('update.newUpdate')}</p>
  <p class="text-gray-400 mb-4">{$t('update.updateRefresh')}</p>
  <div class="rounded-xl bg-background p-4 mb-4">
    <p class="text-gray-200">{$t('update.whatsNew')}</p>
    <ul class="list-disc text-white list-inside">
      <li>Bug Fixes</li>
    </ul>
  </div>
  <div class="flex justify-end space-x-2">
    <Button on:click={close}>{$t('update.later')}</Button>
    <Button on:click={reload} color="green">{$t('update.refresh')}</Button>
  </div>
</div>
