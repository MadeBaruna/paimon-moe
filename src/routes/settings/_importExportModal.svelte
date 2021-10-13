<script>
  import { mdiLoading } from '@mdi/js';

  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import { getLocalSaveJson, updateSave } from '../../stores/saveManager';
  import { pushToast } from '../../stores/toast';

  let input;
  let files = null;
  let loading = false;

  async function exportData() {
    downloadData(await getLocalSaveJson(), 'paimon-moe-local-data');
  }

  function downloadData(data, name) {
    const fileLink = document.createElement('a');

    const filename = `${name}.json`;
    const dataStr = encodeURIComponent(data);

    fileLink.setAttribute('href', `data:text/json;charset=utf-8,${dataStr}`);
    fileLink.setAttribute('download', filename);
    document.body.appendChild(fileLink);
    fileLink.click();
  }

  async function importData() {
    loading = true;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const data = JSON.parse(reader.result);
        for (const key in data) {
          await updateSave(key, data[key], true);
        }
      } catch (err) {
        pushToast($t('settings.importFailed'), 'error');
      }
    };

    reader.readAsText(files[0]);
    loading = false;
    pushToast($t('settings.importSuccess'));
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
</script>

<div class="bg-background rounded-xl p-4 mb-4">
  <p class="text-white font-bold">{$t('settings.export')}</p>
  <p class="text-gray-400 mb-2">{$t('settings.exportInfo')}</p>
  <Button on:click={exportData}>{$t('settings.download')}</Button>
</div>
<div class="bg-background rounded-xl p-4">
  <p class="text-white font-bold">{$t('settings.import')}</p>
  <p class="text-red-400 mb-2">{$t('settings.importWarning')}</p>
  {#if !loading}
    <div class="flex">
      <Button className="mr-2 overflow-hidden whitespace-no-wrap" on:click={() => input.click()}>
        {files !== null && files[0] ? files[0].name : $t('settings.selectFile')}
      </Button>
      {#if files !== null && files[0]}
        <Button on:click={importData}>{$t('settings.importContinue')}</Button>
      {/if}
    </div>
  {/if}
  {#if loading}<Icon path={mdiLoading} color="white" spin />{/if}
  <input bind:this={input} bind:files type="file" class="hidden" />
</div>
