<script>
  import { createEventDispatcher, tick } from 'svelte';
  import { mdiChevronRight } from '@mdi/js';
  import { t } from 'svelte-i18n';

  import { characters } from '../../data/characters';

  import Icon from '../../components/Icon.svelte';

  const dispatch = createEventDispatcher();

  export let builds;
  const promoted = Object.keys(builds);
  let current = 0;

  async function change(index) {
    current = index;
    await tick();
    dispatch('done');
  }

  function getArtifactImage(artifact) {
    switch (artifact) {
      case '+18%_atk_set':
        return 'gladiators_finale';
      case '+20%_energy_recharge':
        return 'emblem_of_severed_fate';
      case '+25%_physical_dmg':
        return 'pale_flame';
      default:
        return artifact;
    }
  }

  $: id = promoted[current];
  $: buildData = Object.entries(builds[id].roles).sort((a, b) => b[1].recommended - a[1].recommended)[0];
  $: buildName = buildData[0];
  $: build = buildData[1];
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  <div class="flex items-center flex-wrap -m-1">
    {#each promoted as item, i}
      <button class="pill m-1 {current === i ? 'active' : ''}" on:click={() => change(i)}>
        {$t(characters[item].name)}
      </button>
    {/each}
  </div>
  <div class="mt-2">
    <div class="flex items-center">
      <img src="/images/characters/{id}.png" alt={characters[id].name} class="w-12 h-12 mr-2 rounded-full" />
      <p class="font-semibold text-white text-lg">{buildName} Build</p>
    </div>
    <div class="mt-2">
      <p class="text-white mb-1">Weapons</p>
      <div class="-m-1 flex flex-wrap">
        {#each build.weapons as weapon}
          <img
            src="/images/weapons/{weapon.id}.png"
            title={weapon.id}
            alt={weapon.id}
            class="bg-background-secondary rounded-md p-1 m-1 w-12 h-12"
            width="48"
            height="48"
          />
        {/each}
      </div>
    </div>
    <div class="mt-2">
      <p class="text-white mb-1">Artifacts</p>
      <div class="-m-1 flex flex-wrap">
        {#each build.artifacts as artifacts}
          <div class="rounded-md p-1 bg-background-secondary m-1 flex">
            {#each artifacts as artifact}
              <img
                src="/images/artifacts/{getArtifactImage(artifact)}_flower.png"
                alt={artifact}
                title={artifact}
                class="w-12 h-12"
                width="48"
                height="48"
              />
            {/each}
          </div>
        {/each}
      </div>
    </div>
    <div class="mt-2">
      <p class="text-white mb-1">Stats</p>
      <div class="flex flex-wrap -m-1">
        <div class="rounded-md p-1 bg-background-secondary m-1 flex items-center">
          <img
            src="/images/artifacts/adventurer_sands.png"
            alt="SANDS"
            title="SANDS"
            class="w-8 h-8 mr-1"
            width="32"
            height="32"
          />
          <p class="text-white text-sm">{build.mainStats.sands.join(' / ')}</p>
        </div>
        <div class="rounded-md p-1 bg-background-secondary m-1 flex items-center">
          <img
            src="/images/artifacts/adventurer_goblet.png"
            alt="GOBLET"
            title="GOBLET"
            class="w-8 h-8 mr-1"
            width="32"
            height="32"
          />
          <p class="text-white text-sm">{build.mainStats.goblet.join(' / ')}</p>
        </div>
        <div class="rounded-md p-1 bg-background-secondary m-1 flex items-center">
          <img
            src="/images/artifacts/adventurer_circlet.png"
            alt="CIRCLET"
            title="CIRCLET"
            class="w-8 h-8 mr-1"
            width="32"
            height="32"
          />
          <p class="text-white text-sm">{build.mainStats.circlet.join(' / ')}</p>
        </div>
      </div>
    </div>
  </div>
  <a
    href="/characters/{id}"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 
bg-background-secondary rounded-xl py-2 px-4 hover:bg-background transition-colors duration-100"
  >
    {characters[id].name} Build
    <Icon path={mdiChevronRight} />
  </a>
</div>

<style lang="postcss">
  .pill {
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
    @apply outline-none;
    @apply transition;
    @apply duration-100;

    &:hover {
      @apply border-primary;
    }

    &.active {
      @apply bg-primary;
      @apply border-primary;
      @apply text-background;
    }
  }
</style>
