<script>
  import { t } from 'svelte-i18n';
  import Ad from '../../../components/Ad.svelte';
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
      <Ad class="my-4" type="desktop" variant="lb" id="1" />
      <ItemNew
        type="character"
        banner={banners.characters[21]}
        id={300022}
        featured={banners.characters[21].featured}
      />
      <div class="mt-2 mb-2">
        <Ad class="flex justify-center" type="mobile" variant="mpu" id="2" />
        <Ad type="desktop" variant="lb" id="3" />
        <Ad type="desktop" variant="lb" id="2" />
        <Ad type="mobile" variant="lb" id="1" />
      </div>
      <ItemNew type="weapon" banner={banners.weapons[20]} id={400021} featured={banners.weapons[20].featured} />
      <ItemNew
        type="character"
        banner={banners.characters[20]}
        id={300021}
        featured={banners.characters[20].featured}
      />
      <ItemNew type="weapon" banner={banners.weapons[19]} id={400020} featured={banners.weapons[19].featured} />
      <ItemNew type="character" banner={banners.standard[0]} id={200001} />
      {#each showOld as show, i}
        {#if show}
          <svelte:component
            this={i < showOld.length - 3 ? ItemNew : Item}
            type="character"
            banner={banners.characters[banners.characters.length - 3 - i]}
            id={300020 - i}
            featured={banners.characters[banners.characters.length - 3 - i].featured}
          />
          <svelte:component
            this={i < showOld.length - 3 ? ItemNew : Item}
            type="weapon"
            banner={banners.weapons[banners.weapons.length - 3 - i]}
            id={400019 - i}
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
