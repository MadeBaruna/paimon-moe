<script>
  import { mdiCheckCircleOutline, mdiChevronDown, mdiDiscord, mdiGoogleDrive, mdiLoading } from '@mdi/js';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import Button from '../components/Button.svelte';
  import Icon from '../components/Icon.svelte';
  import Select from '../components/Select.svelte';
  import Input from '../components/Input.svelte';

  import { driveSignedIn, driveError, driveLoading, synced, localModified, lastSyncTime } from '../stores/dataSync';
  import { server, ar, wl } from '../stores/server';

  const servers = [
    { label: 'Asia/TW/HK/MO', value: 'Asia' },
    { label: 'America', value: 'America' },
    { label: 'Europe', value: 'Europe' },
  ];

  let selectedServer = null;
  let arInput = '';
  let wlInput = '';

  let changelogOpen = false;

  function toggleChangelog() {
    changelogOpen = !changelogOpen;
  }

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
    ar.subscribe((val) => {
      console.log('ar update');
      arInput = val;
    });
    wl.subscribe((val) => {
      console.log('wl update');
      wlInput = val;
    });
  });

  function updateServer() {
    if (selectedServer === null) return;
    server.set(selectedServer.value);
  }

  function updateAR() {
    if (arInput) {
      ar.set(Number(arInput));
    }
  }

  function updateWL() {
    if (wlInput) {
      wl.set(Number(wlInput));
    }
  }

  $: selectedServer, updateServer();
  $: arInput, updateAR();
  $: wlInput, updateWL();

  $: isSynced = $synced && !$localModified;
</script>

<svelte:head>
  <title>Settings - Paimon.moe</title>
</svelte:head>

<div class="lg:ml-64 pt-20 px-4 md:px-8 lg:pt-8">
  <div class="bg-item rounded-xl mb-4 p-4">
    <p class="text-white">Data Version: <b>1.2 (Ganyu Patch)</b></p>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 flex flex-col md:flex-row">
    <div class="flex flex-col md:flex-row md:items-center mr-2">
      <p class="text-white mr-2">Select your server:</p>
      <Select className="w-64" bind:selected={selectedServer} options={servers} placeholder="Select your server" />
    </div>
    <div class="flex mt-2 md:mt-0">
      <div class="flex flex-col md:flex-row md:items-center w-32 mr-2">
        <p class="text-white mr-2">AR:</p>
        <Input bind:value={arInput} placeholder="AR" type="number" min="1" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center w-32 mr-2">
        <p class="text-white mr-2">WL:</p>
        <Input bind:value={wlInput} placeholder="WL" type="number" min="1" />
      </div>
    </div>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4">
    <p class="text-white mb-2">
      Paimon.moe use Application Data Directory on your Google Drive to save and sync your wish counter and todo list.
    </p>
    <p class="text-white mb-4">Paimon.moe can only read and write file that this site create.</p>
    {#if $driveLoading}
      <Icon path={mdiLoading} color="white" spin />
    {:else if $driveError}
      <Button color="red">
        <Icon path={mdiGoogleDrive} className="mr-2" />
        Google Drive API cannot be loaded
      </Button>
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
  <div class="bg-item rounded-xl mb-4 p-4 text-white">
    If you found any bug, wrong data, or you have any feedback, please PM me on discord
    <span class="bg-background rounded-xl pr-2"><Icon path={mdiDiscord} /> Baruna#4422</span>
    Thanks😁!
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 text-white">
    <p class="cursor-pointer" on:click={toggleChangelog}>
      Changelog <Icon
        className={`duration-100 ease-in ${changelogOpen ? 'transform rotate-180' : ''}`}
        path={mdiChevronDown}
      />
    </p>
    {#if changelogOpen}
      <div transition:slide class="mt-4">
        <pre class="bg-background rounded-xl py-2 px-4 whitespace-pre-wrap">2021/02/02 
- Add resin approximation on todo list
- Change todo today farmable item view
- Add WL and AR setting for resin approximation</pre>
        <pre class="bg-background rounded-xl py-2 px-4 whitespace-pre-wrap mt-2">2021/02/01 
- Add detail to wish counter
- Bug fixes</pre>
        <pre class="bg-background rounded-xl py-2 px-4 whitespace-pre-wrap mt-2">2021/01/12 
- Add Ganyu</pre>
      </div>
    {/if}
  </div>
</div>
