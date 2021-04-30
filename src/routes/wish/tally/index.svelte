<script>
  import { t } from 'svelte-i18n';
  import Button from '../../../components/Button.svelte';
  import { banners } from '../../../data/banners';
  import Item from './_item.svelte';
  import ItemNew from './_itemNew.svelte';

  let showOld = [false, false];

  function showOldTally(index) {
    showOld[index] = true;
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
<div>
  <div class="lg:ml-64 pt-20 lg:pt-8">
    <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('wish.tally.title')}</h1>
    <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
      ※ {$t('wish.tally.subtitle')}
    </p>

    <div class="px-4 md:px-8">
      <ItemNew type="character" banner={banners.characters[11]} id={300012} featured={['zhongli', 'yanfei']} />
      <ItemNew type="weapon" banner={banners.weapons[10]} id={400011} featured={['summit_shaper', 'memory_of_dust']} />
      <Item type="character" banner={banners.characters[10]} id={300011} featured={['tartaglia', 'rosaria']} />
      <Item
        type="weapon"
        banner={banners.weapons[9]}
        id={400010}
        featured={['skyward_harp', 'lost_prayer_to_the_sacred_winds']}
      />
      <Item type="character" banner={banners.standard[0]} id={200002} />
      {#if showOld[0]}
        <Item type="character" banner={banners.characters[9]} id={300010} featured={['venti']} />
        <Item
          type="weapon"
          banner={banners.weapons[8]}
          id={400009}
          featured={['skyward_harp', 'lost_prayer_to_the_sacred_winds']}
        />
      {:else}
        <Button on:click={() => showOldTally(0)}>
          {$t('wish.tally.show')}
          {banners.characters[9].name} & {banners.weapons[8].name}
        </Button>
        <div class="mb-2" />
      {/if}
      {#if showOld[1]}
        <Item type="character" banner={banners.characters[8]} id={300009} featured={['hu_tao']} />
        <Item
          type="weapon"
          banner={banners.weapons[7]}
          id={400008}
          featured={['wolfs_gravestone', 'staff_of_homa']}
        />
      {:else}
        <Button on:click={() => showOldTally(1)}>
          {$t('wish.tally.show')}
          {banners.characters[8].name} & {banners.weapons[7].name}
        </Button>
        <div class="mb-2" />
      {/if}
    </div>
  </div>
</div>
