<script context="module">
  import artifactsJson from '../../data/artifacts/en.json';
  import { domains } from '../../data/domain.js';
  export async function load({ params }) {
    const { id } = params;
    const domain = domains[id];

    return { props: { id, domain } };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { mdiChevronRight, mdiCircle, mdiClose, mdiStar } from '@mdi/js';
  import { locale, t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
  import Button from '../../components/Button.svelte';

  export let id;
  export let domain;
  let artifacts = artifactsJson;

  let currentArtifacts = [];

  function process() {
    const _artifacts = [];
    for (const item of domain.artifacts) {
      const artifact = artifacts[item];
      _artifacts.push({
        id: artifact.id,
        name: artifact.name,
        rarity: artifact.rarity[artifact.rarity.length - 1],
      });
    }
    _artifacts.sort((a, b) => b.rarity - a.rarity);
    currentArtifacts = _artifacts;
  }

  async function changeLocale(locale) {
    const _data = await import(`../../data/artifacts/${locale}.json`);
    artifacts = _data.default;
    process();
  }

  onMount(async () => {
    locale.subscribe((val) => {
      changeLocale(val);
    });

    process();
  });
</script>

<svelte:head>
  <title>{domain.name} - Paimon.moe</title>
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl md:pl-4">
  <div class="flex flex-col items-start">
    <div class="px-4">
      <h1 class="font-display font-black text-4xl md:text-5xl text-white">{domain.name}</h1>
    </div>
    <div class="px-4 mt-4 grid md:grid-cols-2 gap-2 max-w-2xl w-full">
      {#each currentArtifacts as artifact (artifact.id)}
        <a
          class="bg-background hover:bg-item rounded-xl p-2 text-white flex items-center"
          href="/artifacts/{artifact.id}"
        >
          <img src="/images/artifacts/{artifact.id}_flower.png" alt={id} class="w-12 h-12 mr-2" />
          <p>{artifact.name}</p>
        </a>
      {/each}
    </div>
    <div class="px-4 mt-4 flex flex-col space-y-2 max-w-2xl w-full">
      {#each domain.domains as dungeon}
        <div class="bg-background rounded-xl p-4 text-white flex flex-col">
          <p class="font-bold">{dungeon.name}</p>
          <div class="flex space-x-4">
            <p class="text-primary">AR {dungeon.ar}</p>
            <p class="text-primary">LEVEL {dungeon.level}</p>
          </div>
          <div class="flex flex-wrap mt-4 -mx-2 -mb-2">
            {#each dungeon.monsters as monster}
              <div class="flex rounded-xl bg-item overflow-hidden items-center m-2">
                <img src="/images/monsters/{monster.id}.png" alt={monster.id} class="w-12 h-12 mr-2" />
                <div class="pr-2">
                  <p class="text-sm">{monster.name}</p>
                  <p class="text-sm"><Icon className="-mt-1" path={mdiClose} size={0.7} />{monster.count}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
