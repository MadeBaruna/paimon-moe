<script>
  import { t } from 'svelte-i18n';
  import Button from '../../../components/Button.svelte';
  import { banners } from '../../../data/banners';
  import Item from './_item.svelte';
  import ItemNew from './_itemNew.svelte';

  let showOld = banners.characters.slice(7, banners.characters.length - 3).map((e) => false);

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
      <ItemNew
        type="character"
        banner={banners.characters[16]}
        id={300017}
        featured={banners.characters[16].featured}
      />
      <ItemNew type="weapon" banner={banners.weapons[15]} id={400016} featured={banners.weapons[15].featured} />
      <ItemNew
        type="character"
        banner={banners.characters[15]}
        id={300016}
        featured={banners.characters[15].featured}
      />
      <ItemNew type="weapon" banner={banners.weapons[14]} id={400015} featured={banners.weapons[14].featured} />
      {#each showOld as show, i}
        {#if show}
          <svelte:component
            this={i < showOld.length - 3 ? ItemNew : Item}
            type="character"
            banner={banners.characters[banners.characters.length - 3 - i]}
            id={300015 - i}
            featured={banners.characters[banners.characters.length - 3 - i].featured}
          />
          <svelte:component
            this={i < showOld.length - 3 ? ItemNew : Item}
            type="weapon"
            banner={banners.weapons[banners.weapons.length - 3 - i]}
            id={400014 - i}
            featured={banners.weapons[banners.weapons.length - 3 - i].featured}
          />
        {:else}
          <Button on:click={() => showOldTally(i)}>
            {$t('wish.tally.show')}
            {banners.characters[banners.characters.length - 3 - i].name} &
            {banners.weapons[banners.weapons.length - 3 - i].name}
          </Button>
          <div class="mb-2" />
        {/if}
      {/each}
    </div>
  </div>
</div>
