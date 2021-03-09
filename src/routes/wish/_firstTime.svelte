<script>
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

<div transition:fade={{ duration: 100 }} class="bg-item p-4 rounded-xl mb-4 text-white flex items-start">
  <div class="flex-1">
    <p>
      Welcome to Paimon.moe Wish Counter! The recommended usage is to import your wish history with the Auto Importer.
    </p>
    <p class="mb-2">
      To start, press the <span class="bg-background px-2 rounded-xl">Auto Import</span> button up there <Icon
        path={mdiArrowUp}
      />
    </p>
    <p class="text-gray-400">
      If you want to manually input the data, you can enable it here: <Button
        on:click={enableManual}
        className="text-gray-400"
        size="sm">Use Manual Input</Button
      >
    </p>
  </div>
  <div>
    <div on:click={closePopup} class="hover:opacity-50 cursor-pointer pl-2 pb-2">
      <Icon path={mdiClose} color="white" />
    </div>
  </div>
</div>
