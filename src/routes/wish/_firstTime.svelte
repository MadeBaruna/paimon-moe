<script>
  import { t } from 'svelte-i18n'

  import { fade } from 'svelte/transition';
  import { mdiArrowUp, mdiClose } from '@mdi/js';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  export let processFirstTimePopup;

  function enableManual() {
    processFirstTimePopup(false, true);
  }

  function closePopup() {
    processFirstTimePopup(false, false);
  }
</script>

<div transition:fade={{ duration: 100 }} class="bg-item p-4 rounded-xl mb-4 text-white flex items-start max-w-screen-xl">
  <div class="flex-1">
    <p>
      {$t('wish.welcome')}
    </p>
    <p class="mb-2">
      {$t('wish.welcomeStart1')} <span class="bg-background px-2 rounded-xl">{$t('wish.autoImport')}</span> {$t('wish.welcomeStart2')} <Icon
        path={mdiArrowUp}
      />
    </p>
    <p class="text-gray-400">
      {$t('wish.manual')} <Button
        on:click={enableManual}
        className="text-gray-400"
        size="sm">{$t('wish.manualButton')}</Button
      >
    </p>
  </div>
  <div>
    <div on:click={closePopup} class="hover:opacity-50 cursor-pointer pl-2 pb-2">
      <Icon path={mdiClose} color="white" />
    </div>
  </div>
</div>
