<script>
  import { t } from 'svelte-i18n';

  import { getContext } from 'svelte';
  import { mdiArrowDown, mdiArrowUp, mdiHelpCircle } from '@mdi/js';

  import WeaponCalculator from './_weapon.svelte';
  import CharacterCalculator from './_character.svelte';
  import LevelUpTable from './_characterTable.svelte';
  import ResinCalculator from './_resin.svelte';
  import FriendshipCalculator from './_friendship.svelte';
  import FatesCalculator from './_fates.svelte';
  import ResinTable from './_resinTable.svelte';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import HowToModal from '../../components/CalculatorHowToModal.svelte';

  const { open: openModal } = getContext('simple-modal');

  function openHowTo() {
    openModal(
      HowToModal,
      {},
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '1280px' },
      },
    );
  }

  export function findPos(id) {
    let node = document.getElementById(id);
    let curtop = 0;
    let curtopscroll = 0;
    let headerOffset = 40;
    if (node.offsetParent) {
      do {
        curtop += node.offsetTop;
        curtopscroll += node.offsetParent ? node.offsetParent.scrollTop : 0;
      } while ((node = node.offsetParent));

      window.scrollTo({
        top: curtop - curtopscroll - headerOffset,
        behavior: 'smooth',
      });
    }
  }
</script>

<svelte:head>
  <title>Calculator - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Calculator to calculate how many mora and items needed for your character or weapon ascension and the character talent material, also quickly add the items to todo list! Hero's Wit calculator."
  />
  <meta
    property="og:description"
    content="Genshin Impact Calculator to calculate how many mora and items needed for your character or weapon ascension and the character talent material, also quickly add the items to todo list! Hero's Wit calculator."
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:px-8">
  <div class="flex justify-center md:justify-start mb-4">
    <Button on:click={openHowTo}>
      <Icon size={0.8} path={mdiHelpCircle} />
      {$t('calculator.howToUse')}
    </Button>
  </div>
  <div
    id="weapon"
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mb-2"
  >
    <Button on:click={() => findPos('character')}>
      <Icon size={0.8} path={mdiArrowDown} />
      {$t('calculator.goto', { values: { where: $t('calculator.titleCharacter') } })}
    </Button>

    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleWeapon')}
    </h1>
  </div>
  <WeaponCalculator />
  <div
    id="character"
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mt-8 mb-2"
  >
    <Button on:click={() => findPos('weapon')}>
      <Icon size={0.8} path={mdiArrowUp} />
      {$t('calculator.goto', { values: { where: $t('calculator.titleWeapon') } })}
    </Button>
    <Button className="md:mt-0 md:mr-4 mt-4" on:click={() => findPos('resin')}>
      <Icon size={0.8} path={mdiArrowDown} />
      {$t('calculator.goto', { values: { where: $t('calculator.titleResin') } })}
    </Button>
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleCharacter')}
    </h1>
  </div>
  <CharacterCalculator />
  <div
    id="resin"
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mt-8 mb-2"
  >
    <Button on:click={() => findPos('character')}>
      <Icon size={0.8} path={mdiArrowUp} />
      {$t('calculator.goto', { values: { where: $t('calculator.titleCharacter') } })}
    </Button>
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleResin')}
    </h1>
  </div>
  <ResinCalculator />
  <div
    id="friendship"
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mt-8 mb-2"
  >
    <Button on:click={() => findPos('character')}>
      <Icon size={0.8} path={mdiArrowUp} />
      {$t('calculator.goto', { values: { where: $t('calculator.titleCharacter') } })}
    </Button>
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleFriendship')}
    </h1>
  </div>
  <FriendshipCalculator />
  <div
    id="friendship"
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mt-8 mb-2"
  >
    <Button on:click={() => findPos('character')}>
      <Icon size={0.8} path={mdiArrowUp} />
      {$t('calculator.goto', { values: { where: $t('calculator.titleCharacter') } })}
    </Button>
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleFate')}
    </h1>
  </div>
  <FatesCalculator />
  <div class="mt-8 space-y-4 grid md:grid-cols-2 md:gap-4 md:space-y-0">
    <LevelUpTable />
    <ResinTable />
  </div>
</div>
