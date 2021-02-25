<script>
  import { mdiHelpCircle } from '@mdi/js';
  import { getContext } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import HowToModal from '../../components/WishCounterHowToModal.svelte';

  import Counter from './_counter.svelte';

  const { open: openModal } = getContext('simple-modal');

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
</script>

<svelte:head>
  <title>Wish Counter - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon"
  />
  <meta
    property="og:description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon"
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:px-8">
  <div class="flex flex-col md:flex-row mb-4 items-center">
    <h1 class="font-display font-black text-5xl text-white text-center md:text-left md:mr-4">Wish Counter</h1>
    <Button on:click={openHowTo}>
      <Icon size={0.8} path={mdiHelpCircle} />
      How To Use
    </Button>
  </div>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
    <Counter id="character-event" name="Character Event" />
    <Counter id="weapon-event" name="Weapon Event" legendaryPity={80} />
    <Counter id="standard" name="Standard" />
  </div>
</div>
