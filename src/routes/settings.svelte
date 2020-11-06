<script>
  import { mdiCheckCircleOutline, mdiGoogleDrive, mdiLoading } from '@mdi/js';

  import Button from '../components/Button.svelte';
  import Icon from '../components/Icon.svelte';
  import { driveSignedIn, driveLoading, synced, localModified, lastSyncTime } from '../stores/dataSync';

  function signIn() {
    gapi.auth2.getAuthInstance().signIn();
  }

  function signOut() {
    gapi.auth2.getAuthInstance().signOut();
  }

  $: isSynced = $synced && !$localModified;
</script>

<div class="lg:ml-64 pt-20 px-8 lg:pt-8">
  <p class="text-white mb-2">
    Paimon.moe use Application Data Directory on your Google Drive to save and sync your wish counter and todo list.
  </p>
  <p class="text-white mb-4">Paimon.moe can only read and write file that this site create.</p>
  {#if $driveLoading}
    <Icon path={mdiLoading} color="white" spin />
  {:else if !$driveSignedIn}
    <Button on:click={signIn}>
      <Icon path={mdiGoogleDrive} className="mr-2" />
      Sign in to Google Drive
    </Button>
  {:else}
    <Button on:click={signOut}>
      <Icon path={mdiGoogleDrive} className="mr-2" />
      Sign out Google Drive
    </Button>
    <p class="text-white mt-4">
      Sync Status:
      <span class={`font-bold ${isSynced ? 'text-green-400' : 'text-yellow-400'}`}>
        {isSynced ? 'Synced' : $localModified && $synced ? 'Waiting...' : 'Syncing...'}
        {#if isSynced}
          <Icon path={mdiCheckCircleOutline} className="text-green-400" />
        {:else if $localModified && !$synced}
          <Icon path={mdiLoading} className="text-yellow-400" spin />
        {/if}
      </span>
    </p>
    {#if $lastSyncTime !== null}
      <p class="text-gray-400">Last Sync: {$lastSyncTime.format('dddd, MMMM D, YYYY h:mm:ss A')}</p>
    {/if}
  {/if}
</div>
