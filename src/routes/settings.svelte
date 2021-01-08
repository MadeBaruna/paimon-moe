<script>
  import { mdiCheckCircleOutline, mdiGoogleDrive, mdiLoading } from '@mdi/js';
  import { onMount } from 'svelte';

  import Button from '../components/Button.svelte';
  import Icon from '../components/Icon.svelte';
  import Select from '../components/Select.svelte';

  import { driveSignedIn, driveLoading, synced, localModified, lastSyncTime } from '../stores/dataSync';
  import { server } from '../stores/server';

  const servers = [
    { label: 'Asia/TW/HK/MO', value: 'Asia' },
    { label: 'America', value: 'America' },
    { label: 'Europe', value: 'Europe' },
  ];

  let selectedServer = null;

  function signIn() {
    gapi.auth2.getAuthInstance().signIn();
  }

  function signOut() {
    gapi.auth2.getAuthInstance().signOut();
  }

  onMount(() => {
    server.subscribe((val) => {
      console.log('setting update');
      selectedServer = servers.find((e) => e.value === val);
    });
  });

  function updateServer() {
    if (selectedServer === null) return;
    server.set(selectedServer.value);
  }

  $: selectedServer, updateServer();

  $: isSynced = $synced && !$localModified;
</script>

<svelte:head>
  <title>Settings - Paimon.moe</title>
</svelte:head>

<div class="lg:ml-64 pt-20 px-4 md:px-8 lg:pt-8">
  <div class="bg-item rounded-xl mb-4 p-4">
    <p class="text-white">Data Version: <b>1.2</b></p>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4">
    <div class="flex flex-col md:flex-row md:items-center">
      <p class="text-white mr-4">Select your server:</p>
      <Select className="w-64" bind:selected={selectedServer} options={servers} placeholder="Select your server" />
    </div>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4">
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
</div>
