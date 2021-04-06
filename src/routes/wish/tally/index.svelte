<script>
  import { t } from 'svelte-i18n';
import Button from '../../../components/Button.svelte';
  import { banners } from '../../../data/banners';
  import Item from './_item.svelte';

  let showOld = false;

  function showOldTally() {
    showOld = true;
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
      <Item type="character" banner={banners.characters[10]} id={300011} featured={['tartaglia', 'rosaria']} />
      <Item
        type="weapon"
        banner={banners.weapons[9]}
        id={400010}
        featured={['skyward_harp', 'lost_prayer_to_the_sacred_winds']}
      />
      <Item type="character" banner={banners.characters[9]} id={300010} featured={['venti']} />
      <Item type="weapon" banner={banners.weapons[8]} id={400009} featured={['elegy_for_the_end', 'skyward_blade']} />
      <Item type="character" banner={banners.standard[0]} id={200001} />
      {#if showOld}
        <Item type="character" banner={banners.characters[8]} id={300009} featured={['hu_tao']} />
        <Item type="weapon" banner={banners.weapons[7]} id={400008} featured={['wolfs_gravestone', 'staff_of_homa']} />
      {:else}
        <Button on:click={showOldTally}>{$t('wish.tally.show')} {banners.characters[8].name} & {banners.weapons[7].name}</Button>
      {/if}
    </div>
  </div>
</div>
