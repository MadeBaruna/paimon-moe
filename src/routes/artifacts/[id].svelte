<script context="module">
  import data from '../../data/artifacts/en.json';
  export async function preload(page) {
    const { id } = page.params;
    const artifact = data[id];

    return { id, artifact };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { mdiChevronRight, mdiCircle, mdiStar } from '@mdi/js';
  import { locale, t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
  import { domains } from '../../data/domain.js';
  import Button from '../../components/Button.svelte';

  const rarityList = {
    1: 'text-white',
    2: 'text-green-400',
    3: 'text-primary',
    4: 'text-rare-from',
    5: 'text-legendary-from',
  };

  export let id;
  export let artifact;
  let images = [];

  async function changeLocale(locale) {
    const _data = await import(`../../data/artifacts/${locale}.json`);
    artifact = _data.default[id];
  }

  onMount(async () => {
    locale.subscribe((val) => {
      changeLocale(val);
    });

    const maxPiece = artifact.setPiece[artifact.setPiece.length - 1];
    if (maxPiece === 1) {
      images = [`${id}_circlet.png`];
    } else {
      images = ['flower', 'plume', 'sands', 'goblet', 'circlet'].map((e) => `${id}_${e}.png`);
    }
  });

  $: rarity = artifact.rarity[artifact.rarity.length - 1];
</script>

<svelte:head>
  <title>{artifact.name} - Paimon.moe</title>
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl md:pl-4">
  <div class="flex flex-col items-start">
    <div class="px-4">
      <h1 class="font-display font-black text-4xl md:text-5xl text-white">{artifact.name}</h1>
      <div class="{rarityList[rarity]} text-2xl flex items-center z-0 -mt-2 md:-mt-4">
        {#each [...new Array(rarity)] as _}
          <Icon path={mdiStar} />
        {/each}
        <Icon path={mdiCircle} size={0.4} className="mx-2 mt-1" color="white" />
        <p class="text-base text-white font-semibold mt-1">{$t(`artifact.artifact`)}</p>
      </div>
    </div>
    <div class="px-4 pt-4 flex flex-wrap space-x-2">
      {#each images as image}
        <img src="/images/artifacts/{image}" alt={id} class="w-24 h-24" />
      {/each}
    </div>
    <div class="px-4 pt-4 flex flex-col space-y-2 max-w-xl w-full">
      {#each artifact.bonuses as bonus, i}
        <div class="bg-background rounded-xl p-4 text-white">
          <p class="font-bold mb-1 text-primary">{$t('artifact.setPiece', { values: { piece: (i + 1) * 2 } })}</p>
          <p>{bonus}</p>
        </div>
      {/each}
      {#if artifact.domain}
        <a
          href="/domains/{artifact.domain}"
          class="flex justify-end items-center self-end lg:self-start text-white mt-4 
    bg-item rounded-xl py-2 px-4 hover:bg-background transition-colors duration-100"
        >
          {$t('artifact.domain')}: {domains[artifact.domain].name}
          <Icon path={mdiChevronRight} />
        </a>
      {/if}
    </div>
  </div>
</div>
