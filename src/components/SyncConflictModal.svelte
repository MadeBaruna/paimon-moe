<script>
  import { mdiCloudAlert, mdiContentSave, mdiDownload, mdiFile, mdiGoogleDrive, mdiLoading, mdiUpload } from '@mdi/js';
  import { t } from 'svelte-i18n';
  
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  export let remoteTime;
  export let localTime;
  export let downloadBackup = () => {};
  export let useRemote = () => {};
  export let useLocal = () => {};

  let loading = false;

  function useLocalData() {
    loading = true;
    useLocal();
  }

  function useRemoteData() {
    loading = true;
    useRemote();
  }

  const remoteFormatted = remoteTime.format('dddd, MMMM D, YYYY h:mm A');
  const localFormatted = localTime.format('dddd, MMMM D, YYYY h:mm A');
  const remoteNewer = remoteTime.isAfter(localTime);
</script>

<div class="flex">
  <Icon path={mdiCloudAlert} color="white" size={2} />
  <p class="flex-1 text-white text-lg md:text-xl font-bold ml-4">
    {$t('sync.message')}
  </p>
</div>
<div class="mt-4 p-4 bg-item rounded-xl text-white">
  <p class="font-bold">
    <Icon path={mdiGoogleDrive} className="mr-2" />
    {$t('sync.googleDriveData')} -
    <span class={remoteNewer ? 'text-green-400' : 'text-red-400'}>{remoteNewer ? $t('sync.newer') : $t('sync.older')}</span>
  </p>
  <p class="text-gray-400 mt-1">{$t('sync.lastModified')}: {remoteFormatted}</p>
  <Button disabled={loading} className="mt-2 w-full" on:click={useRemoteData}>
    <Icon path={loading ? mdiLoading : mdiDownload} spin={loading} className="mr-1" />{$t('sync.useGoogleDriveData')}
  </Button>
</div>
<p class="mt-2 text-white text-center">{$t('sync.or')}</p>
<div class="mt-2 p-4 bg-item rounded-xl text-white">
  <p class="font-bold">
    <Icon path={mdiFile} className="mr-2" />
    {$t('sync.localData')} -
    <span class={remoteNewer ? 'text-red-400' : 'text-green-400'}>{remoteNewer ? $t('sync.older') : $t('sync.newer')}
  </p>
  <p class="text-gray-400 mt-1">{$t('sync.lastModified')}: {localFormatted}</p>
  <Button disabled={loading} className="mt-2 w-full" on:click={useLocalData}>
    <Icon path={loading ? mdiLoading : mdiUpload} spin={loading} className="mr-1" />{$t('sync.useLocalData')}
  </Button>
</div>
<div class="flex mt-6 justify-end">
  <Button className="w-full md:w-auto" on:click={downloadBackup}>
    <Icon path={mdiContentSave} className="mr-1" />{$t('sync.download')}
  </Button>
</div>
