<script>
  import { mdiArrowRight } from '@mdi/js';

  import { t } from 'svelte-i18n';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  export let account;
  export let setMainAccount;
  export let cancel;
</script>

<div>
  <p class="text-white font-bold mb-4 text-lg">{$t('settings.modal.setMain')}</p>
  <p class="text-white mb-4">{$t('settings.modal.setMainNotice')}</p>
  <p class="text-white mb-4">Account {account.value.substring(7)} <Icon path={mdiArrowRight} size={0.7} /> Main</p>
  <p class="text-white mb-4">Main <Icon path={mdiArrowRight} size={0.7} /> Account {account.value.substring(7)}</p>
  <div class="flex justify-end space-x-2">
    <Button on:click={cancel}>{$t('settings.modal.cancel')}</Button>
    <Button on:click={setMainAccount} color="green">{$t('settings.modal.continue')}</Button>
  </div>
</div>
