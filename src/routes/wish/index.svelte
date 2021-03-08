<script>
  import { mdiDatabaseImport, mdiHelpCircle } from '@mdi/js';
  import { getContext } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import HowToModal from '../../components/WishCounterHowToModal.svelte';
  import ImportModal from '../../components/WishImportModal.svelte';
  
  import Summary from './_summary.svelte';
  import Counter from './_counter.svelte';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let counter1;
  let counter2;
  let counter3;
  let counter4;
  let summary;

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

  function openImport() {
    openModal(
      ImportModal,
      {
        closeModal: closeImportModal,
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
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also auto import the logs from your PC."
  />
  <meta
    property="og:description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also auto import the logs from your PC."
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:px-8">
  <div class="flex flex-col md:flex-row mb-4 items-center">
    <h1 class="font-display font-black text-5xl text-white text-center md:text-left md:mr-4">Wish Counter</h1>
    <Button on:click={openHowTo} className="hidden md:block">
      <Icon size={0.8} path={mdiHelpCircle} />
      How To Use
    </Button>
    <Button className="ml-2 hidden md:block" on:click={openImport}>
      <Icon size={0.8} path={mdiDatabaseImport} />
      Auto Import
    </Button>
    <div class="md:hidden flex flex-wrap justify-center">
      <Button className="m-1" on:click={openHowTo}>
        <Icon size={0.8} path={mdiHelpCircle} />
        How To Use
      </Button>
      <Button className="m-1" on:click={openImport}>
        <Icon size={0.8} path={mdiDatabaseImport} />
        Auto Import
      </Button>
    </div>
  </div>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
    <Counter bind:this={counter1} id="character-event" name="Character Event" />
    <Counter bind:this={counter2} id="weapon-event" name="Weapon Event" legendaryPity={80} />
    <Counter bind:this={counter3} id="standard" name="Standard" />
    <Counter bind:this={counter4} id="beginners" name="Beginners' Wish" />
    <Summary bind:this={summary} />
  </div>
</div>
