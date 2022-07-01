<script>
  import { t } from 'svelte-i18n';
  import localforage from 'localforage';

  import { mdiCheckCircleOutline, mdiDiscord, mdiGithub, mdiGoogleDrive, mdiLoading, mdiSwapVertical } from '@mdi/js';
  import { getContext, onMount } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Select from '../../components/Select.svelte';
  import Input from '../../components/Input.svelte';
  import DeleteAccountModal from './_deleteAccount.svelte';
  import ResetAccountModal from './_resetAccount.svelte';
  import DonateModal from '../../components/DonateModal.svelte';
  import ExportImportModal from './_importExportModal.svelte';
  import SetMainaccountModal from './_setMainAccount.svelte';

  import {
    driveSignedIn,
    driveError,
    driveLoading,
    synced,
    localModified,
    lastSyncTime,
    driveEmail,
  } from '../../stores/dataSync';
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
    { label: 'China', value: 'China' },
  ];

  let mounted = false;
  let selectedServer = null;
  let arInput = '';
  let wlInput = '';
  let accountList = [];

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
    accounts.subscribe((val) => {
      console.log('accounts update');
      getAccountList(val);
    });

    mounted = true;

    const urlParams = new URLSearchParams(window.location.search);
    const download = urlParams.get('download');
    if (download === 'json') {
      openModal(
        ExportImportModal,
        {
          immediate: true,
        },
        {
          closeButton: false,
          styleWindow: { background: '#25294A', width: '500px' },
        },
      );
    }
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

  async function addAccount() {
    const accountList = $accounts;
    const accountNumber =
      accountList.length === 1 ? 2 : Number(accountList[accountList.length - 1].value.substring(7)) + 1;

    const newAccount = { label: `Account ${accountNumber}`, value: `account${accountNumber}` };
    const updatedAccountList = [...accountList, newAccount];
    accounts.set(updatedAccountList);

    await updateSave(
      'accounts',
      updatedAccountList
        .slice(1)
        .map((e) => e.value)
        .join(','),
    );

    pushToast($t('settings.accountAdded', { values: { accountNumber } }));
  }

  async function selectAccount() {
    if (!mounted) return;

    console.log('changed account to', currentAccount.label);

    selectedAccount.set(currentAccount);
    const prefix = getAccountPrefix();

    const serverSave = await readSave(`${prefix}server`);
    if (serverSave === null) {
      selectedServer = { label: 'Asia/TW/HK/MO', value: 'Asia' };
    } else {
      const serverSave = await readSave(`${prefix}server`);
      selectedServer = servers.find((e) => e.value === serverSave);
    }

    const arSave = await readSave(`${prefix}ar`);
    if (arSave === null) {
      arInput = '45';
    } else {
      arInput = arSave;
    }

    const wlSave = await readSave(`${prefix}wl`);
    if (wlSave === null) {
      wlInput = '6';
    } else {
      wlInput = wlSave;
    }
  }

  async function deleteAccount() {
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
      'wish-uid',
      'characters',
      'achievement',
      'collectables-updated',
      'furnishing',
      'furnishing-inventory',
      'furnishing-set-placed',
      'furnishing-set-character',
      'fishing',
      'spincrystals',
    ];

    for (let k of keyWillBeDeleted) {
      await localforage.removeItem(`${prefix}${k}`);
    }

    if (updatedList.length > 1) {
      await updateSave(
        'accounts',
        updatedList
          .slice(1)
          .map((e) => e.value)
          .join(','),
      );
    } else {
      await updateSave('accounts', undefined);
    }

    pushToast($t('settings.dataDeleted'));
    closeModal();
  }

  async function resetAccount() {
    const prefix = getAccountPrefix();

    const keyWillBeDeleted = [
      'todos',
      'wish-counter-character-event',
      'wish-counter-weapon-event',
      'wish-counter-standard',
      'wish-counter-beginners',
      'wish-uid',
      'characters',
      'achievement',
      'collectables-updated',
      'furnishing',
      'furnishing-inventory',
      'furnishing-set-placed',
      'furnishing-set-character',
      'fishing',
      'spincrystals',
    ];

    for (let k of keyWillBeDeleted) {
      await localforage.removeItem(`${prefix}${k}`);
    }

    await updateSave(`${prefix}todos`, undefined, true);
    await updateSave(`${prefix}todos`, []);

    pushToast($t('settings.dataReset'));
    closeModal();
  }

  async function getAccountList(accounts) {
    accountList = [];
    for (const acc of accounts) {
      const prefix = acc.value === 'main' ? '' : `${acc.value}-`;
      const uid = await readSave(`${prefix}wish-uid`);
      accountList.push({ ...acc, label: `${acc.label} ${uid !== null ? `UID:${uid}` : ''}` });
      console.log(prefix, uid);
    }
  }

  async function setMainAccount() {
    const prefix = getAccountPrefix();
    const keyWillBeMoved = [
      'server',
      'ar',
      'wl',
      'todos',
      'wish-counter-character-event',
      'wish-counter-weapon-event',
      'wish-counter-standard',
      'wish-counter-beginners',
      'wish-uid',
      'characters',
      'achievement',
      'collectables-updated',
      'furnishing',
      'furnishing-inventory',
      'furnishing-set-placed',
      'furnishing-set-character',
      'fishing',
      'spincrystals',
    ];

    const temp = {};
    for (let k of keyWillBeMoved) {
      temp[k] = await localforage.getItem(k);
    }

    for (let k of keyWillBeMoved) {
      const data = await localforage.getItem(`${prefix}${k}`);
      await localforage.setItem(k, data);
      await localforage.setItem(`${prefix}${k}`, temp[k]);
    }

    pushToast($t('settings.mainAccountChanged'));
    setTimeout(() => {
      window.location.reload();
    }, 5000);
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

  function openDonationModal() {
    openModal(
      DonateModal,
      {},
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  function openImportExportModal() {
    openModal(
      ExportImportModal,
      {},
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  function openChangeMainaccountModal() {
    openModal(
      SetMainaccountModal,
      {
        account: currentAccount,
        setMainAccount,
        cancel: closeModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  $: currentAccount, selectAccount();
  $: selectedServer, updateServer();
  $: arInput, updateAR();
  $: wlInput, updateWL();

  $: isSynced = $synced && !$localModified;
</script>

<svelte:head>
  <title>Settings - Paimon.moe</title>
</svelte:head>

<div class="lg:ml-64 pt-20 px-4 md:px-8 lg:pt-8 max-w-screen-xl">
  <div class="bg-item rounded-xl mb-4 p-4">
    <p class="text-white inline-block mr-4">{$t('settings.version')} <b>2.7</b></p>
    <a href="/changelog">
      <Button>
        {$t('settings.changelog')}
      </Button>
    </a>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 flex flex-col">
    <p class="text-white">{$t('settings.multiple')}</p>
    <div class="flex flex-col md:flex-row mt-2">
      <Select
        className="w-64 mr-2"
        bind:selected={currentAccount}
        options={accountList}
        placeholder={$t('settings.selectAccount')}
      />
      <div class="flex flex-1 mt-2 md:mt-0 flex-wrap gap-2">
        <Button on:click={openResetAccount} color="red">{$t('settings.reset')}</Button>
        {#if currentAccount.value !== 'main'}
          <Button on:click={openDeleteAccount} color="red">{$t('settings.delete')}</Button>
        {/if}
        <Button on:click={addAccount}>{$t('settings.add')}</Button>
        {#if currentAccount.value !== 'main'}
          <Button on:click={openChangeMainaccountModal}>{$t('settings.setMainAccount')}</Button>
        {/if}
      </div>
    </div>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 flex flex-col md:flex-row">
    <div class="flex flex-col md:flex-row md:items-center mr-2">
      <p class="text-white mr-2">{$t('settings.server')}</p>
      <Select className="w-64" bind:selected={selectedServer} options={servers} placeholder={$t('settings.server')} />
    </div>
    <div class="flex mt-2 md:mt-0">
      <div class="flex flex-col md:flex-row md:items-center mr-2">
        <p class="text-white mr-2">{$t('settings.ar')}</p>
        <Input bind:value={arInput} placeholder="AR" type="number" min="1" className="w-24" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center mr-2">
        <p class="text-white mr-2">{$t('settings.wl')}</p>
        <Input bind:value={wlInput} placeholder="WL" type="number" min="1" className="w-24" />
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
        {$t('settings.email')}
        <span class="hover:text-white bg-background text-background rounded-md px-2">{$driveEmail}</span>
      </p>
      <p class="text-white mt-4">
        {$t('settings.syncStatus')}
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
    <p class="text-white mb-2">{$t('settings.exportDescription')}</p>
    <div class="flex">
      <Button className="mr-4" on:click={openImportExportModal}>
        <Icon path={mdiSwapVertical} className="mr-2" />
        {$t('settings.exportButton')}
      </Button>
    </div>
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
    <br />
    <Button on:click={openDonationModal}>
      <img class="inline w-8 h-8" src="/images/mora.png" alt="donate" />
      {$t('sidebar.donate')}
    </Button>
  </div>
  <div class="bg-item rounded-xl mb-4 p-4 text-white">
    <p class="font-semibold">{$t('settings.credits.title')}</p>
    <table>
      <tr>
        <td class="pr-1 align-top border-b border-gray-700">{$t('settings.credits.items.0.name')}</td>
        <td class="pr-1 align-top border-b border-gray-700">
          <a class="text-blue-400 hover:underline" href="https://genshin-impact.fandom.com/" target="_blank">
            {$t('settings.credits.items.0.value')}
          </a>
        </td>
      </tr>
      <tr>
        <td class="pr-1 align-top border-b border-gray-700">{$t('settings.credits.items.1.name')}</td>
        <td class="pr-1 align-top border-b border-gray-700">
          <a class="text-blue-400 hover:underline" href="https://github.com/Dimbreath/GenshinData" target="_blank">
            {$t('settings.credits.items.1.value')}
          </a>
        </td>
      </tr>
      <tr>
        <td class="pr-1 align-top">{$t('settings.credits.items.2.name')}</td>
        <td class="pr-1 align-top">
          <a class="text-blue-400 hover:underline" href="https://discord.gg/ydwdYmr" target="_blank">
            {$t('settings.credits.items.2.value')}
          </a>
        </td>
      </tr>
    </table>
  </div>
</div>
