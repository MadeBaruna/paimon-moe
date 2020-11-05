<script>
  import { mdiCloudAlert, mdiContentSave, mdiDownload, mdiFile, mdiGoogleDrive, mdiUpload } from '@mdi/js';
  import Button from './Button.svelte';

  import Icon from './Icon.svelte';

  export let remoteTime;
  export let localTime;
  export let downloadBackup = () => {};

  const remoteFormatted = remoteTime.format('dddd, MMMM D, YYYY h:mm A');
  const localFormatted = localTime.format('dddd, MMMM D, YYYY h:mm A');
  const remoteNewer = remoteTime.isAfter(localTime);
</script>

<div class="flex">
  <Icon path={mdiCloudAlert} color="white" size={2} />
  <p class="flex-1 text-white text-lg md:text-xl font-bold ml-4">
    Your local data is conflicting with the ones stored in the Google Drive!
  </p>
</div>
<div class="mt-4 p-4 bg-item rounded-xl text-white">
  <p class="font-bold">
    <Icon path={mdiGoogleDrive} className="mr-2" />
    Google Drive Data -
    {remoteNewer ? 'NEWER' : 'OLDER'}
  </p>
  <p class="text-gray-400 mt-1">Last modified: {remoteFormatted}</p>
  <Button className="mt-2 w-full">
    <Icon path={mdiDownload} className="mr-1" />Replace Local Data
  </Button>
</div>
<p class="mt-2 text-white text-center">OR</p>
<div class="mt-2 p-4 bg-item rounded-xl text-white">
  <p class="font-bold">
    <Icon path={mdiFile} className="mr-2" />
    Local Data -
    {remoteNewer ? 'OLDER' : 'NEWER'}
  </p>
  <p class="text-gray-400 mt-1">Last modified: {localFormatted}</p>
  <Button className="mt-2 w-full">
    <Icon path={mdiUpload} className="mr-1" />Replace Google Drive Data
  </Button>
</div>
<div class="flex mt-6 justify-end">
  <Button className="w-full md:w-auto" on:click={downloadBackup}>
    <Icon path={mdiContentSave} className="mr-1" />Download Both Data
  </Button>
</div>
