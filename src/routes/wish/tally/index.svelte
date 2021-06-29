<script>
  import { t } from 'svelte-i18n';
  import Button from '../../../components/Button.svelte';
  import { banners } from '../../../data/banners';
  import Item from './_item.svelte';
  import ItemNew from './_itemNew.svelte';

  let showOld = [false, false, false, false];

  function showOldTally(index) {
    showOld[index] = true;
  }
</script>

<svelte:head>
  <title>Wish Tally - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Wish Tally average pity percentage from paimon.moe users" />
  <meta property="og:description" content="Genshin Impact Wish Tally average pity percentage from paimon.moe users" />
</svelte:head>
<div>
  <div class="lg:ml-64 pt-20 lg:pt-8">
    <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('wish.tally.title')}</h1>
    <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
      ※ {$t('wish.tally.subtitle')}
    </p>

    <div class="px-4 md:px-8">
      <ItemNew type="character" banner={banners.characters[14]} id={300015} featured={['kaedehara_kazuha']} />
      <ItemNew type="weapon" banner={banners.weapons[13]} id={400014} featured={['freedom-sworn', 'skyward_atlas']} />
      <ItemNew type="character" banner={banners.characters[13]} id={300014} featured={['klee']} />
      <ItemNew
        type="weapon"
        banner={banners.weapons[12]}
        id={400013}
        featured={['lost_prayer_to_the_sacred_winds', 'skyward_pride']}
      />
      <ItemNew type="character" banner={banners.standard[0]} id={200001} />
      {#if showOld[0]}
        <ItemNew type="character" banner={banners.characters[12]} id={300013} featured={['eula']} />
        <ItemNew
          type="weapon"
          banner={banners.weapons[11]}
          id={400012}
          featured={['song_of_broken_pines', 'aquila_favonia']}
        />
      {:else}
        <Button on:click={() => showOldTally(0)}>
          {$t('wish.tally.show')}
          {banners.characters[12].name} & {banners.weapons[11].name}
        </Button>
        <div class="mb-2" />
      {/if}
      {#if showOld[1]}
        <ItemNew type="character" banner={banners.characters[11]} id={300012} featured={['zhongli', 'yanfei']} />
        <ItemNew
          type="weapon"
          banner={banners.weapons[10]}
          id={400011}
          featured={['summit_shaper', 'memory_of_dust']}
        />
      {:else}
        <Button on:click={() => showOldTally(1)}>
          {$t('wish.tally.show')}
          {banners.characters[11].name} & {banners.weapons[10].name}
        </Button>
        <div class="mb-2" />
      {/if}
      {#if showOld[2]}
        <Item type="character" banner={banners.characters[10]} id={300011} featured={['tartaglia', 'rosaria']} />
        <Item
          type="weapon"
          banner={banners.weapons[9]}
          id={400010}
          featured={['skyward_harp', 'lost_prayer_to_the_sacred_winds']}
        />
      {:else}
        <Button on:click={() => showOldTally(2)}>
          {$t('wish.tally.show')}
          {banners.characters[10].name} & {banners.weapons[9].name}
        </Button>
        <div class="mb-2" />
      {/if}
      {#if showOld[3]}
        <Item type="character" banner={banners.characters[9]} id={300010} featured={['venti']} />
        <Item
          type="weapon"
          banner={banners.weapons[8]}
          id={400009}
          featured={['skyward_harp', 'lost_prayer_to_the_sacred_winds']}
        />
      {:else}
        <Button on:click={() => showOldTally(3)}>
          {$t('wish.tally.show')}
          {banners.characters[9].name} & {banners.weapons[8].name}
        </Button>
        <div class="mb-2" />
      {/if}
      {#if showOld[4]}
        <Item type="character" banner={banners.characters[8]} id={300009} featured={['hu_tao']} />
        <Item type="weapon" banner={banners.weapons[7]} id={400008} featured={['wolfs_gravestone', 'staff_of_homa']} />
      {:else}
        <Button on:click={() => showOldTally(4)}>
          {$t('wish.tally.show')}
          {banners.characters[8].name} & {banners.weapons[7].name}
        </Button>
        <div class="mb-2" />
      {/if}
    </div>
  </div>
</div>
