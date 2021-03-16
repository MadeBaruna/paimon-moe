<script>
  import { t } from 'svelte-i18n';

  import { getContext } from 'svelte';
  import { mdiArrowDown, mdiArrowUp, mdiHelpCircle } from '@mdi/js';

  import WeaponCalculator from './_weapon.svelte';
  import CharacterCalculator from './_character.svelte';
  import LevelUpTable from './_characterTable.svelte';
  import ResinCalculator from './_resin.svelte';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import HowToModal from '../../components/CalculatorHowToModal.svelte';

  const { open: openModal } = getContext('simple-modal');

  let weaponCalc;
  let characterCalc;

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

  export function scroll(type) {
    const elementPosition =
      type === 'character' ? characterCalc.getBoundingClientRect().top : weaponCalc.getBoundingClientRect().top;
    const headerOffset = 80;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
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
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mb-2"
    bind:this={weaponCalc}
  >
    <Button on:click={() => scroll('character')}>
      <Icon size={0.8} path={mdiArrowDown} />
      {$t('calculator.goto')}
      {$t('calculator.titleCharacter')}
    </Button>
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleWeapon')}
    </h1>
  </div>
  <WeaponCalculator />
  <div
    class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mt-8 mb-2"
    bind:this={characterCalc}
  >
    <Button on:click={() => scroll('weapon')}>
      <Icon size={0.8} path={mdiArrowUp} />
      {$t('calculator.goto')}
      {$t('calculator.titleWeapon')}
    </Button>
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleCharacter')}
    </h1>
  </div>
  <CharacterCalculator />
  <div class="flex flex-col items-center md:flex-row-reverse md:justify-end md:items-start lg:items-center mt-8 mb-2">
    <h1
      class="font-display font-black text-center mt-2 md:mt-0 md:mr-2 xl:mr-8 text-3xl lg:text-left lg:text-5xl text-white"
    >
      {$t('calculator.titleResin')}
    </h1>
  </div>
  <ResinCalculator />
  <div class="mt-8" />
  <LevelUpTable />
</div>
