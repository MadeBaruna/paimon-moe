<script context="module">
  import setsDataJson from '../../data/furnishing/sets/en.json';
  import furnishingDataJson from '../../data/furnishing/en.json';
</script>

<script>
  import { locale, t } from 'svelte-i18n';
  import debounce from 'lodash.debounce';
  import { mdiCheckCircleOutline, mdiClose } from '@mdi/js';

  import Button from '../../components/Button.svelte';
  import CharacterSelect from '../../components/CharacterSelect.svelte';
  import { getContext, onMount } from 'svelte';
  import Icon from '../../components/Icon.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';
  import CalculateModal from './_calculateModal.svelte';

  const { open: openModal } = getContext('simple-modal');

  let data = furnishingDataJson;
  let setsData = setsDataJson;

  let loading = true;
  let furnishing = {};
  let sets = [];
  let saved = {};
  let _saved = {};
  let used = {};
  let placed = {};
  let character = {};
  let charFilter = null;

  function parseSets() {
    const _sets = [];
    furnishing = data;
    used = {};
    saved = { ..._saved };
    for (const set of setsData) {
      for (const [item, amount] of Object.entries(set.items)) {
        if (placed[set.id] === true) {
          if (used[item] === undefined) {
            used[item] = 0;
          }

          used[item] += amount;
          saved[item] -= amount;
        }
      }
    }

    for (const set of setsData.sort((a, b) => b.gift - a.gift)) {
      set.enough = {};
      set.needed = {};
      set.canBePlaced = true;

      for (const [item, amount] of Object.entries(set.items)) {
        let enough = true;
        if (placed[set.id] !== true) {
          enough = saved[item] >= amount;
        }

        set.needed[item] = amount - (saved[item] || 0);
        set.enough[item] = enough;
        if (!enough) set.canBePlaced = false;
      }

      _sets.push(set);
    }

    sets = _sets;
    console.log(sets);
    loading = false;
  }

  function place(id) {
    placed[id] = !placed[id];
    saveData();
    parseSets();
  }

  function checkCharacter(setId, id) {
    if (character[setId] === undefined) {
      character[setId] = {};
    }

    character[setId][id] = !character[setId][id];
    saveData();
  }

  async function readLocalData() {
    const prefix = getAccountPrefix();
    const savedIventory = await readSave(`${prefix}furnishing-inventory`);
    const savedSet = await readSave(`${prefix}furnishing-set-placed`);
    const savedSetCharacters = await readSave(`${prefix}furnishing-set-character`);
    if (savedIventory !== null) {
      _saved = { ...savedIventory };
      saved = { ...savedIventory };
    }
    if (savedSet !== null) {
      placed = savedSet;
    }
    if (savedSetCharacters !== null) {
      character = savedSetCharacters;
    }
  }

  function calculate(index) {
    openModal(
      CalculateModal,
      {
        set: sets[index],
        furnishing: data,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '400px' },
      },
    );
  }

  async function changeLocale(locale) {
    data = (await import(`../../data/furnishing/${locale}.json`)).default;
    setsData = (await import(`../../data/furnishing/sets/${locale}.json`)).default;
    parseSets();
  }

  const saveData = debounce(async () => {
    const prefix = getAccountPrefix();
    await updateSave(`${prefix}furnishing-set-placed`, placed);
    await updateSave(`${prefix}furnishing-set-character`, character);
  }, 1000);

  function onCharFilterChanged() {
    if (!loading) {
      parseSets();
    }
  }

  onMount(async () => {
    await readLocalData();

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });

  // $: charFilter, onCharFilterChanged();
</script>

<svelte:head>
  <title>Furnishing Sets - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Furnishing list with the load and energy values" />
  <meta property="og:description" content="Genshin Impact Furnishing list with the load and energy values" />
</svelte:head>
<div class="lg:ml-64 pt-20 px-4 lg:px-8 lg:pt-8 max-w-screen-xl">
  <div class="flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
    <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('furnishing.sets.title')}</h1>
    <div>
      <a href="/furnishing/inventory">
        <Button>{$t('furnishing.inventoryButton')}</Button>
      </a>
      <a href="/furnishing/list">
        <Button>{$t('furnishing.listButton')}</Button>
      </a>
    </div>
  </div>
  {#if loading}
    <p class="text-white">Loading...</p>
  {:else}
    <p class="text-gray-400 font-medium pb-2">
      ※ {$t('furnishing.sets.subtitle')}
    </p>
    <div class="w-full md:w-64">
      <CharacterSelect bind:selected={charFilter} placeholder={$t('furnishing.selectCharacter')} />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 flex-1 mt-2"
      style="height: fit-content;"
    >
      {#each sets as set, i (set.id)}
        {#if charFilter === null || (charFilter !== null && set.characters && set.characters.includes(charFilter.id))}
          <div class="text-white p-2 rounded-xl flex flex-col bg-item">
            <div class="w-full flex items-center justify-center relative">
              <img
                src="/images/furnishing/sets/{set.id}.png"
                alt=""
                class="w-full image relative object-contain rounded-xl"
                width="640"
                height="320"
                loading="lazy"
              />
              {#if placed[set.id]}
                <div class="text-green-300 absolute bottom-0 right-0 p-2">
                  <Icon path={mdiCheckCircleOutline} size={1.5} />
                </div>
              {/if}
            </div>
            <div class="mt-1 flex flex-col h-full">
              <p class="text-white mb-1">{set.name}</p>
              {#if set.gift}
                <div class="flex -m-1 py-1">
                  {#each set.characters as char}
                    <div class="relative cursor-pointer" on:click={() => checkCharacter(set.id, char)}>
                      <img
                        src="/images/characters/{char}.png"
                        class="w-10 h-10 rounded-full m-1"
                        alt={char}
                        width="40"
                        height="40"
                        loading="lazy"
                      />
                      {#if character[set.id]?.[char]}
                        <div class="text-green-300 absolute bottom-0 right-0">
                          <Icon path={mdiCheckCircleOutline} size={1} />
                        </div>
                      {/if}
                    </div>
                  {/each}
                </div>
              {/if}
              <div class="flex -m-1 flex-wrap pt-1">
                {#each Object.entries(set.items) as [item, amount]}
                  <button
                    class="rounded-xl {set.enough[item] === true
                      ? 'bg-background'
                      : 'bg-red-900'} text-white px-2 furnishing-item focus:outline-none filter"
                    style="margin: 2px;"
                  >
                    <div class="flex items-center">
                      <img
                        src="/images/furnishing/{item}.png"
                        class="w-8 h-8"
                        alt={item}
                        loading="lazy"
                        width="32"
                        height="32"
                      />
                      <Icon path={mdiClose} size={0.5} />
                      <span class="inline-block w-2">{amount}</span>
                    </div>
                    <div class="popup text-left">
                      <p class="text-left mb-1">{furnishing[item].name}</p>
                      <table>
                        <tr>
                          <td>{$t('furnishing.sets.inInventory')}</td>
                          <td class="pl-2 text-center">{_saved[item] || 0}</td>
                        </tr>
                        <tr>
                          <td>{$t('furnishing.sets.used')}</td>
                          <td class="pl-2 text-center">{used[item] || 0}</td>
                        </tr>
                        <tr>
                          <td>{$t('furnishing.sets.available')}</td>
                          <td class="pl-2 text-center">{saved[item] || 0}</td>
                        </tr>
                      </table>
                    </div>
                  </button>
                {/each}
              </div>
              <div class="flex-1" />
              <Button className="mt-2" on:click={() => calculate(i)}>
                {$t('furnishing.sets.calculate')}
              </Button>
              <Button className="mt-2" disabled={!set.canBePlaced} on:click={() => place(set.id)}>
                {placed[set.id] ? $t('furnishing.sets.setUnplaced') : $t('furnishing.sets.setPlaced')}
              </Button>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .popup {
    @apply text-sm pt-1 hidden p-2 rounded-xl;
  }

  .furnishing-item:focus {
    @apply w-full;

    .popup {
      @apply block;
    }
  }
</style>
