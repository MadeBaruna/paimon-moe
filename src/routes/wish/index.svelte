<script>
  import { t } from 'svelte-i18n'

  import { mdiDatabaseImport, mdiHelpCircle } from '@mdi/js';
  import { getContext, onMount } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import HowToModal from '../../components/WishCounterHowToModal.svelte';
  import ImportModal from '../../components/WishImportModal.svelte';
  import { fromRemote, readSave, updateSave } from '../../stores/saveManager';

  import Summary from './_summary.svelte';
  import Counter from './_counter.svelte';
  import FirstTimePopup from './_firstTime.svelte';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let counter1;
  let counter2;
  let counter3;
  let counter4;
  let summary;

  const path = 'wish-counter-setting';

  let settings = {
    firstTime: false,
    manualInput: false,
  };

  $: if ($fromRemote) {
    readLocalData();
  }

  onMount(() => {
    readLocalData();
  });

  function readLocalData() {
    console.log('wish read setting');
    const data = readSave(path);
    if (data !== null) {
      settings = JSON.parse(data);
    } else {
      settings = {
        firstTime: true,
        manualInput: false,
      };
    }
  }

  function setManualInput(val) {
    if (settings.manualInput === val) return;

    settings = {
      ...settings,
      manualInput: val,
    };

    updateSave(path, JSON.stringify(settings));
  }

  function processFirstTimePopup(val, manualVal) {
    settings = {
      ...settings,
      firstTime: val,
      manualInput: manualVal,
    };

    updateSave(path, JSON.stringify(settings));
  }

  function openHowTo() {
    openModal(
      HowToModal,
      {
        setManualInput,
        settings,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function openImport() {
    openModal(
      ImportModal,
      {
        closeModal: closeImportModal,
        processFirstTimePopup,
      },
      {
        closeButton: false,
        closeOnOuterClick: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function closeImportModal() {
    closeModal();
    counter1.readLocalData();
    counter2.readLocalData();
    counter3.readLocalData();
    counter4.readLocalData();
  }
</script>

<svelte:head>
  <title>Wish Counter - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also auto import the logs from your PC or Android."
  />
  <meta
    property="og:description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also auto import the logs from your PC or Android."
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:px-8">
  <div class="flex flex-col md:flex-row mb-4 items-center">
    <h1 class="font-display font-black text-5xl text-white text-center md:text-left md:mr-4">Wish Counter</h1>
    <Button className="mr-2 hidden md:block" on:click={openImport}>
      <Icon size={0.8} path={mdiDatabaseImport} />
      {$t('wish.autoImport')}
    </Button>
    <Button on:click={openHowTo} className="hidden md:block">
      <Icon size={0.8} path={mdiHelpCircle} />
      {$t('wish.helpAndSetting')}
    </Button>
    <div class="md:hidden flex flex-wrap justify-center">
      <Button className="m-1" on:click={openImport}>
        <Icon size={0.8} path={mdiDatabaseImport} />
        {$t('wish.autoImport')}
      </Button>
      <Button className="m-1" on:click={openHowTo}>
        <Icon size={0.8} path={mdiHelpCircle} />
        {$t('wish.helpAndSetting')}
      </Button>
    </div>
  </div>
  {#if settings.firstTime}
    <FirstTimePopup {processFirstTimePopup} />
  {/if}
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
    <Counter bind:this={counter1} manualInput={settings.manualInput} id="character-event" name="Character Event" />
    <Counter
      bind:this={counter2}
      manualInput={settings.manualInput}
      id="weapon-event"
      name="Weapon Event"
      legendaryPity={80}
    />
    <Counter bind:this={counter3} manualInput={settings.manualInput} id="standard" name="Standard" />
    <Counter bind:this={counter4} manualInput={settings.manualInput} id="beginners" name="Beginners' Wish" />
    <Summary bind:this={summary} />
  </div>
</div>
