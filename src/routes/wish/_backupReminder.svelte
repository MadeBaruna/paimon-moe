<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';

  export let close;
</script>

<p class="text-white font-bold text-lg mb-2">{$t('wish.backupReminder.title')}</p>
<p class="text-gray-200 mb-4">{$t('wish.backupReminder.desc')}</p>
<div class="flex justify-end">
  <Button on:click={close}>{$t('wish.import.close')}</Button>
</div>
