<script>
  import { t } from 'svelte-i18n';

  import { mdiLoading } from '@mdi/js';
  import Icon from '../../components/Icon.svelte';
  import Button from '../../components/Button.svelte';
  import Checkbox from '../../components/Checkbox.svelte';

  import { exportToExcel } from '../../functions/export';
  import { pushToast } from '../../stores/toast';
  import ExcelImportModal from './_excelImport.svelte';
  import { getContext } from 'svelte';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  export let setManualInput;
  export let settings;
  export let closeImportModal;

  let loadingExport = false;

  let enableManual = settings.manualInput;

  function toggleManual() {
    setManualInput(enableManual);
  }

  async function exportFile() {
    loadingExport = true;
    await exportToExcel();
    loadingExport = false;
    pushToast($t('wish.help.exportFinish'));
  }

  function openImporter() {
    openModal(
      ExcelImportModal,
      {
        closeModal: closeImportModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  $: enableManual, toggleManual();
</script>

<div>
  <h1 class="font-display text-white text-xl mb-2">{$t('wish.help.exportTitle')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <p class="mb-2">{$t('wish.help.exportMessage')}</p>
    <Button className="mr-2" disabled={loadingExport} on:click={exportFile}>
      {#if loadingExport}
        <Icon path={mdiLoading} spin size={0.8} className="mr-2" />
      {/if}
      {$t(loadingExport ? 'wish.help.exporting' : 'wish.help.export')}
    </Button>
    <Button disabled={loadingExport} on:click={openImporter}>{$t('wish.help.import')}</Button>
  </div>
  <h1 class="font-display text-white text-xl mt-8 mb-2">{$t('wish.help.manualTitle')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <div class="py-2 pl-4">
      <Checkbox disabled={false} bind:checked={enableManual}
        ><span class="select-none cursor-pointer">{$t('wish.help.enableManual')}</span></Checkbox
      >
    </div>
    <p class="text-red-300">{$t('wish.help.notice')}</p>
    <p>{$t('wish.help.consider')}</p>
  </div>
</div>
