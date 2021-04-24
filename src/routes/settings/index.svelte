<script>
  import { t } from 'svelte-i18n';

  import { mdiCheckCircleOutline, mdiChevronDown, mdiDiscord, mdiGithub, mdiGoogleDrive, mdiLoading } from '@mdi/js';
  import { getContext, onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Select from '../../components/Select.svelte';
  import Input from '../../components/Input.svelte';
  import DeleteAccountModal from './_deleteAccount.svelte';
  import ResetAccountModal from './_resetAccount.svelte';

  import { driveSignedIn, driveError, driveLoading, synced, localModified, lastSyncTime } from '../../stores/dataSync';
  import { server, ar, wl } from '../../stores/server';
  import { accounts, getAccountPrefix, selectedAccount } from '../../stores/account';
  import { pushToast } from '../../stores/toast';
  import { readSave, updateSave } from '../../stores/saveManager';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let currentAccount = $selectedAccount;

  const servers = [
    { label: 'Asia/TW/HK/MO', value: 'Asia' },
    { label: 'America', value: 'America' },
    { label: 'Europe', value: 'Europe' },
  ];

  let mounted = false;
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

  function addAccount() {
    const accountList = $accounts;
    const accountNumber =
      accountList.length === 1 ? 2 : Number(accountList[accountList.length - 1].value.substring(7)) + 1;

    const newAccount = { label: `Account ${accountNumber}`, value: `account${accountNumber}` };
    const updatedAccountList = [...accountList, newAccount];
    accounts.set(updatedAccountList);

    updateSave(
      'accounts',
      updatedAccountList
        .slice(1)
        .map((e) => e.value)
        .join(','),
    );

    pushToast(`Account ${accountNumber} added, select it on the account list!`);
  }

  function selectAccount() {
    if (!mounted) return;

    console.log('changed account to', currentAccount.label);

    selectedAccount.set(currentAccount);
    const prefix = getAccountPrefix();

    const serverSave = readSave(`${prefix}server`);
    if (serverSave === null) {
      selectedServer = { label: 'Asia/TW/HK/MO', value: 'Asia' };
    } else {
      const serverSave = readSave(`${prefix}server`);
      selectedServer = servers.find((e) => e.value === serverSave);
    }

    const arSave = readSave(`${prefix}ar`);
    if (arSave === null) {
      arInput = '45';
    } else {
      arInput = arSave;
    }

    const wlSave = readSave(`${prefix}wl`);
    if (wlSave === null) {
      wlInput = '6';
    } else {
      wlInput = wlSave;
    }
  }

  function deleteAccount() {
    const prefix = getAccountPrefix();

    const updatedList = $accounts.filter((e) => e.value !== currentAccount.value);

    currentAccount = { label: 'Main', value: 'main' };
    selectedAccount.set(currentAccount);

    accounts.set(updatedList);

    const keyWillBeDeleted = [
      'server',
      'ar',
      'wl',
      'todos',
      'wish-counter-character-event',
      'wish-counter-weapon-event',
      'wish-counter-standard',
      'wish-counter-beginners',
      'characters',
      'achievement',
      'collectables-updated',
    ];

    for (let k of keyWillBeDeleted) {
      localStorage.removeItem(`${prefix}${k}`);
    }

    if (updatedList.length > 1) {
      updateSave(
        'accounts',
        updatedList
          .slice(1)
          .map((e) => e.value)
          .join(','),
      );
    } else {
      updateSave('accounts', undefined);
    }

    pushToast('Data deleted');
    closeModal();
  }

  function resetAccount() {
    const prefix = getAccountPrefix();

    const keyWillBeDeleted = [
      'todos',
      'wish-counter-character-event',
      'wish-counter-weapon-event',
      'wish-counter-standard',
      'wish-counter-beginners',
      'characters',
      'achievement',
      'collectables-updated',
    ];

    for (let k of keyWillBeDeleted) {
      localStorage.removeItem(`${prefix}${k}`);
    }

    updateSave(`${prefix}todos`, undefined, true);
    updateSave(`${prefix}todos`, JSON.stringify([]));

    pushToast('Data deleted');
    closeModal();
  }

  function openDeleteAccount() {
    openModal(
      DeleteAccountModal,
      {
        cancel: closeModal,
        account: currentAccount,
        deleteAccount: deleteAccount,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '300px' },
      },
    );
  }

  function openResetAccount() {
    openModal(
      ResetAccountModal,
      {
        cancel: closeModal,
        account: currentAccount,
        resetAccount: resetAccount,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '300px' },
      },
    );
  }

  onMount(() => {
    mounted = true;
  });

  $: currentAccount, selectAccount();
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
    <p class="text-white">{$t('settings.version')} <b>1.4</b></p>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 flex flex-col">
    <p class="text-white">{$t('settings.multiple')}</p>
    <div class="flex flex-col md:flex-row mt-2">
      <Select
        className="w-64 mr-2"
        bind:selected={currentAccount}
        options={$accounts}
        placeholder={$t('settings.selectAccount')}
      />
      <div class="flex flex-1 mt-2 md:mt-0">
        <Button on:click={openResetAccount} className="mr-2 w-24" color="red">{$t('settings.reset')}</Button>
        {#if currentAccount.value !== 'main'}
          <Button on:click={openDeleteAccount} className="mr-2 w-24" color="red">{$t('settings.delete')}</Button>
        {/if}
        <Button className="w-24" on:click={addAccount}>{$t('settings.add')}</Button>
      </div>
    </div>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 flex flex-col md:flex-row">
    <div class="flex flex-col md:flex-row md:items-center mr-2">
      <p class="text-white mr-2">{$t('settings.server')}</p>
      <Select className="w-64" bind:selected={selectedServer} options={servers} placeholder={$t('settings.server')} />
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
    <p class="text-white mb-2">{$t('settings.drive.0')}</p>
    <p class="text-white mb-4">{$t('settings.drive.1')}</p>
    {#if $driveLoading}
      <Icon path={mdiLoading} color="white" spin />
    {:else if $driveError}
      <Button color="red">
        <Icon path={mdiGoogleDrive} className="mr-2" />
        {$t('settings.driveError')}
      </Button>
    {:else if !$driveSignedIn}
      <Button on:click={signIn}>
        <Icon path={mdiGoogleDrive} className="mr-2" />
        {$t('settings.driveSignIn')}
      </Button>
    {:else}
      <Button on:click={signOut}>
        <Icon path={mdiGoogleDrive} className="mr-2" />
        {$t('settings.driveSignOut')}
      </Button>
      <p class="text-white mt-4">
        Sync Status:
        <span class={`font-bold ${isSynced ? 'text-green-400' : 'text-yellow-400'}`}>
          {isSynced
            ? $t('settings.synced')
            : $localModified && $synced
            ? $t('settings.waiting')
            : $t('settings.syncing')}
          {#if isSynced}
            <Icon path={mdiCheckCircleOutline} className="text-green-400" />
          {:else if $localModified && !$synced}
            <Icon path={mdiLoading} className="text-yellow-400" spin />
          {/if}
        </span>
      </p>
      {#if $lastSyncTime !== null}
        <p class="text-gray-400">{$t('settings.lastSync')} {$lastSyncTime.format('dddd, MMMM D, YYYY h:mm:ss A')}</p>
      {/if}
    {/if}
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 text-white">
    {$t('settings.feedback')}
    <a
      href="https://discord.gg/tPURAYgHV9"
      target="_blank"
      class="whitespace-no-wrap bg-background rounded-xl pr-2 text-blue-400 hover:underline"
      ><Icon path={mdiDiscord} /> Discord</a
    >
    {$t('settings.or')}
    <a
      href="https://github.com/MadeBaruna/paimon-moe/issues"
      target="_blank"
      class="whitespace-no-wrap bg-background rounded-xl pr-2 text-blue-400 hover:underline"
      ><Icon path={mdiGithub} /> Github Issues</a
    >
    {$t('settings.thanks')}
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 text-white">
    <p class="font-semibold">Credits</p>
    <table>
      <tr>
        <td class="pr-1 align-top border-b border-gray-700">Data and images</td>
        <td class="pr-1 align-top border-b border-gray-700">
          <a class="text-blue-400 hover:underline" href="https://genshin-impact.fandom.com/" target="_blank">
            Genshin Impact Wiki
          </a>
        </td>
      </tr>
      <tr>
        <td class="pr-1 align-top border-b border-gray-700">Stats data</td>
        <td class="pr-1 align-top border-b border-gray-700">
          <a class="text-blue-400 hover:underline" href="https://github.com/Dimbreath/GenshinData" target="_blank">
            Dimbreath Genshin Data
          </a>
        </td>
      </tr>
      <tr>
        <td class="pr-1 align-top">Drop rates for resin calculation</td>
        <td class="pr-1 align-top">
          <a class="text-blue-400 hover:underline" href="https://discord.gg/ydwdYmr" target="_blank">
            Data Gathering Discord
          </a>
        </td>
      </tr>
    </table>
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
        <pre
          class="bg-background rounded-xl py-2 px-4 whitespace-pre-wrap">Future changelog will be posted on Discord https://discord.gg/4jjZnXvs
or Check Github commit history https://github.com/MadeBaruna/paimon-moe/commits/main

2021/04/06
- Add Rosaria
- Add rate up icon on detail banner
- Update banner list
- Update wish tally
- Update timeline

2021/03/31
- Updated wording and layout on mobile
- Add privacy policy

2021/03/29
- Add pity wish tally submission
- Fix edit/delete manual wish input

2021/03/20 
- Add Windblume Ode
- Fix some weapons data

2021/03/17 
- Fix wish import
- Add new 1.4 weapons

2021/03/13 
- Add timeline page

2021/03/09 
- Add Auto Import Wish
- Fix The Widsith data

2021/03/02 
- Add Hu Tao

2021/02/26 
- Add Staff of Homa, Lithic Spear, and Lithic Blade
- Change weapon banner 5star pity
        
2021/02/03 
- Add Xiao
- Add Primordial Jade Cutter
- Bug fixes

2021/02/02 
- Add resin approximation on todo list
- Change todo today farmable item view
- Add WL and AR setting for resin approximation

2021/02/01 
- Add detail to wish counter
- Bug fixes</pre>
      </div>
    {/if}
  </div>
</div>
