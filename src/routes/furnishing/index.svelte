<script context="module">
  import setsDataJson from '../../data/furnishing/sets/en.json';
  import furnishingDataJson from '../../data/furnishing/en.json';
</script>

<script>
  import { getContext, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { locale, t } from 'svelte-i18n';
  import debounce from 'lodash.debounce';
  import { mdiCheck, mdiCheckCircleOutline, mdiClose, mdiContentSave } from '@mdi/js';

  import Button from '../../components/Button.svelte';
  import CharacterSelect from '../../components/CharacterSelect.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';
  import CalculateModal from './_calculateModal.svelte';
  import { pushToast } from '../../stores/toast';

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

  let openItemSaved = false;
  let openItemDetail = {
    set: '',
    item: '',
    amount: 0,
  };

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

  function openItem(set, item) {
    openItemDetail = {
      set,
      item,
      amount: _saved[item] || 0,
    };
  }

  function saveInventory() {
    _saved[openItemDetail.item] = openItemDetail.amount;

    const prefix = getAccountPrefix();
    updateSave(`${prefix}furnishing-inventory`, _saved);
    openItemSaved = true;
    parseSets();
    setTimeout(() => {
      openItemSaved = false;
    }, 2000);
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

  onMount(async () => {
    await readLocalData();

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
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
                      : 'bg-red-900'} text-white px-2 furnishing-item focus:outline-none hover:bg-opacity-50"
                    style="margin: 2px;"
                  >
                    <div class="flex items-center" on:click={() => openItem(set.id, item)}>
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
                  </button>
                {/each}
              </div>
              {#if openItemDetail.set === set.id}
                <div transition:fade={{ duration: 100 }} class="mt-2 py-2 rounded-md">
                  <div class="flex gap-2 items-center">
                    <img
                      src="/images/furnishing/{openItemDetail.item}.png"
                      class="w-16 h-16"
                      alt={openItemDetail.item}
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                    <p class="text-left mb-1 font-bold">{furnishing[openItemDetail.item].name}</p>
                  </div>
                  <table>
                    <tr>
                      <td>{$t('furnishing.sets.used')}</td>
                      <td class="pl-2 text-center">{used[openItemDetail.item] || 0}</td>
                    </tr>
                    <tr>
                      <td>{$t('furnishing.sets.available')}</td>
                      <td class="pl-2 text-center">{saved[openItemDetail.item] || 0}</td>
                    </tr>
                    <tr>
                      <td>{$t('furnishing.sets.inInventory')} :</td>
                      <td class="pl-2 text-center" />
                    </tr>
                  </table>
                  <div class="flex gap-2">
                    <Input type="number" min={0} bind:value={openItemDetail.amount} />
                    <Button size="sm" className="w-16" on:click={saveInventory}>
                      <Icon path={openItemSaved ? mdiCheck : mdiContentSave} />
                    </Button>
                  </div>
                </div>
              {/if}
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
