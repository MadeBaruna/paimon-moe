<script>
  import { t } from 'svelte-i18n';

  import { mdiCog, mdiDatabaseImport, mdiHelpCircle } from '@mdi/js';
  import { getContext, onMount } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import { fromRemote, readSave, updateSave } from '../../stores/saveManager';

  import Summary from './_summary.svelte';
  import Counter from './_counter.svelte';
  import Rank from './_rank.svelte';
  import FirstTimePopup from './_firstTime.svelte';
  import MonthlyGraph from './_monthlyGraph.svelte';
  import HowToModal from './_helpModal.svelte';
  import SettingModal from './_settingModal.svelte';
  import Ad from '../../components/Ad.svelte';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let monthlyData = {};

  let counter1;
  let counter2;
  let counter3;
  let counter4;
  let rank;

  let wishTotal = {
    'character-event': 0,
    'weapon-event': 0,
    standard: 0,
  };
  let wishPercentage;

  const path = 'wish-counter-setting';

  let settings = {
    firstTime: false,
    manualInput: false,
  };

  $: if ($fromRemote) {
    console.log('update from google drive');
    readLocalData();
  }

  onMount(async () => {
    await readLocalData();
  });

  async function readLocalData() {
    console.log('wish read setting');
    const data = await readSave(path);
    if (data !== null) {
      settings = data;
    } else {
      settings = {
        firstTime: true,
        manualInput: false,
      };
    }
  }

  async function setManualInput(val) {
    if (settings.manualInput === val) return;

    settings = {
      ...settings,
      manualInput: val,
    };

    await updateSave(path, settings);
  }

  async function processFirstTimePopup(val, manualVal) {
    settings = {
      ...settings,
      firstTime: val,
      manualInput: manualVal,
    };

    await updateSave(path, settings);
  }

  function openHowTo() {
    openModal(
      HowToModal,
      {},
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function openSetting() {
    openModal(
      SettingModal,
      {
        setManualInput,
        settings,
        closeImportModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function setRankWishTotal(type, event) {
    wishTotal[type] = event.detail;

    if (type === 'character-event') {
      rank.getData();
    }
  }

  function setRankWishPercentage(event) {
    wishPercentage = event.detail;
    rank.getDataLuckAll(event.detail);
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
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also automatically import the logs and backup it from PC, Android, iOS, PlayStation then save it more than 6 months."
  />
  <meta
    property="og:description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also automatically import the logs and backup it from PC, Android, iOS, PlayStation then save it more than 6 months."
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:pl-8 md:pr-8 xl:pr-0">
  <div class="flex flex-col top-header mb-4 justify-between items-center md:items-start max-w-screen-xl">
    <div class="flex flex-wrap">
      <h1 class="font-display font-black text-5xl text-white text-center md:text-left md:mr-4">{$t('wish.title')}</h1>
      <div class="flex items-center">
        <a href="/wish/import">
          <Button className="mr-2 hidden md:block">
            <Icon size={0.8} path={mdiDatabaseImport} />
            {$t('wish.autoImport')}
          </Button>
        </a>
        {#if settings.manualInput}
          <Button on:click={openHowTo} className="mr-2 hidden md:block">
            <Icon size={0.8} path={mdiHelpCircle} />
            {$t('wish.helps')}
          </Button>
        {/if}
        <Button on:click={openSetting} className="hidden md:block">
          <Icon size={0.8} path={mdiCog} />
          {$t('wish.settings')}
        </Button>
      </div>
    </div>
    <div class="top-placement">
      <Ad type="desktop" variant="lb" id="1" />
    </div>
    <div class="md:hidden flex flex-wrap justify-center">
      <a href="/wish/import">
        <Button className="m-1">
          <Icon size={0.8} path={mdiDatabaseImport} />
          {$t('wish.autoImport')}
        </Button>
      </a>
      {#if settings.manualInput}
        <Button className="m-1" on:click={openHowTo}>
          <Icon size={0.8} path={mdiHelpCircle} />
          {$t('wish.helps')}
        </Button>
      {/if}
      <Button className="m-1" on:click={openSetting}>
        <Icon size={0.8} path={mdiCog} />
        {$t('wish.settings')}
      </Button>
    </div>
  </div>
  {#if settings.firstTime}
    <FirstTimePopup {processFirstTimePopup} />
  {/if}
  <div class="flex flex-col xl:flex-row">
    <div class="mb-4 flex justify-center">
      <Ad type="mobile" variant="mpu" id="2" />
    </div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl w-full">
      <Counter
        on:counterread={(val) => setRankWishTotal('character-event', val)}
        bind:this={counter1}
        manualInput={settings.manualInput}
        id="character-event"
        name={$t('wish.types.character-event')}
      />
      <Counter
        on:counterread={(val) => setRankWishTotal('weapon-event', val)}
        bind:this={counter2}
        manualInput={settings.manualInput}
        id="weapon-event"
        name={$t('wish.types.weapon-event')}
        legendaryPity={80}
      />
      <Counter
        on:counterread={(val) => setRankWishTotal('standard', val)}
        bind:this={counter3}
        manualInput={settings.manualInput}
        id="standard"
        name={$t('wish.types.standard')}
      />
      <div class="flex flex-col w-full">
        <Counter
          bind:this={counter4}
          manualInput={settings.manualInput}
          id="beginners"
          name={$t('wish.types.beginners')}
        />
        {#if Object.keys(monthlyData).length > 0}
          <MonthlyGraph bind:data={monthlyData} />
        {:else}
          <div class="-mb-4" />
        {/if}
        <Rank bind:this={rank} {wishTotal} {wishPercentage} />
        <div class="mt-4 flex justify-center">
          <Ad type="mobile" variant="mpu" id="1" />
        </div>
      </div>
      <Summary bind:monthlyData on:summaryread={(val) => setRankWishPercentage(val)} />
    </div>
    <div class="hidden md:flex flex-1">
      <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
    </div>
  </div>
  <Ad type="desktop" variant="lb" id="2" />
  <Ad type="mobile" variant="lb" id="1" />
  <div class="mt-12 mr-4 mb-4 max-w-screen-xl flex flex-col md:flex-row items-center bg-background rounded-xl p-4">
    <img class="h-16 mr-2 mb-2 md:mb-0 md:mr-0" src="/images/paimon_faq.png" alt="Paimon" />
    <div class="ml-4 md:ml-8 text-gray-200">
      <ol class="list-disc">
        <li class="mb-2">{$t('wish.note.0')}</li>
        <li class="mb-2">{$t('wish.note.1')}</li>
        <li>{$t('wish.note.2')}</li>
      </ol>
    </div>
  </div>
</div>

<style>
  @media (min-width: 1920px) {
    .top-header {
      @apply flex-row;
    }

    .top-placement {
      @apply self-end;
    }
  }
</style>
