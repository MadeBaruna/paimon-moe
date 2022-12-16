<script context="module">
  import dataJson from '../../data/tcg/en.json';
  import tagsJson from '../../data/tcg/tags/en.json';
</script>

<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { goto } from '$app/navigation';

  import { mdiDockWindow, mdiImageSizeSelectLarge, mdiImageSizeSelectSmall } from '@mdi/js';
  import { locale, t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
  import Card from './_card.svelte';
  import Deck from './_deck.svelte';
  import { pushToast } from '../../stores/toast';
  import debounce from 'lodash.debounce';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';

  let data = dataJson;
  let tags = tagsJson;

  export let sharedDeck = null;
  export let sharedId = null;

  let cards = {};
  let characters = [];
  let _actions = [];
  let actions = [];

  /**
   * @typedef Card
   * @type {Object}
   * @property {string} id
   * @property {string} type
   * @property {string} name
   * @property {string} element
   * @property {string} [requirement]
   */

  /**
   * @typedef Deck
   * @type {Object}
   * @property {Object.<string, number>} characters
   * @property {Object.<string, number>} actions
   */

  /** @type Deck[] */
  let decks = [
    {
      name: 'Deck #1',
      characters: {},
      actions: {},
    },
  ];
  let activeDeck = 0;

  let compare;
  let display = 'character';
  let size = 'base';
  let showDetail = true;
  let showDeck = false;
  let smallScreen = false;

  let filter = {
    ally: true,
    artifact: true,
    food: true,
    item: true,
    none: true,
    place: true,
    resonance: true,
    talent: true,
    weapon: true,
  };

  function process() {
    cards = {};
    characters = [];
    _actions = [];
    actions = [];

    for (const card of data) {
      cards[card.id] = card;
      if (card.type === 'character') {
        characters.push(card);
      } else {
        _actions.push(card);
      }
    }

    characters.sort((a, b) => a.name.localeCompare(b.name));
    _actions.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
    actions = _actions;
  }

  function setCompare(card) {
    compare = card;
  }

  function removeCompare() {
    compare = undefined;
  }

  function changeDisplay(type) {
    display = type;
  }

  function changeSize(type) {
    size = type;
  }

  function toggleDetail() {
    showDetail = !showDetail;
  }

  function toggleFilter(type) {
    const filterCount = Object.keys(filter).length;
    const trueCount = Object.values(filter).reduce((prev, cur) => prev + (cur ? 1 : 0), 0);

    if (trueCount === filterCount) {
      Object.keys(filter).forEach((e) => {
        filter[e] = false;
      });
    } else if (trueCount === 1 && filter[type]) {
      Object.keys(filter).forEach((e) => {
        if (e === type) {
          filter[type] = false;
          return;
        }
        filter[e] = true;
      });
    }

    filter[type] = !filter[type];

    actions = _actions.filter((card) => filter[card.type]);
  }

  function toggleShowDeck() {
    showDeck = !showDeck;
    if (showDeck) {
      window.scrollTo(0, 0);
    }
  }

  function selectDeck(index) {
    sharedDeck = null;
    activeDeck = index;
    saveData();
  }

  function loadDeck(characters, actions) {
    deck.characters = characters;
    deck.actions = actions;
    saveData();
  }

  function saveSharedDeck() {
    decks.push(sharedDeck);
    decks = decks;
    activeDeck = decks.length - 1;

    sharedDeck = null;
    sharedId = null;

    saveData();
    goto('/tcg/@');
  }

  /**
   * @param {string} type
   * @param {Card} card
   */
  function addToDeck(type, card) {
    if (type === 'characters' && characterCount === 3) {
      pushToast($t('tcg.alreadyMaxCharacters'));
      return;
    } else if (type === 'actions' && actionCount === 30) {
      pushToast($t('tcg.alreadyMaxActions'));
      return;
    }

    if (card.type === 'resonance') {
      const elementCount = {};
      for (const id of Object.keys(deck.characters)) {
        const charCard = cards[id];
        if (elementCount[charCard.element] === undefined) elementCount[charCard.element] = 0;
        elementCount[charCard.element]++;
      }

      if ((elementCount[card.requirement] || 0) < 2) {
        pushToast($t('tcg.requirementResonance', { values: { element: tags[card.requirement] } }));
        return;
      }
    }

    if (card.type === 'talent') {
      if (deck.characters[card.requirement] === undefined) {
        pushToast($t('tcg.requirementTalent', { values: { character: cards[card.requirement].name } }));
        return;
      }
    }

    pushToast($t('tcg.addedToDeck'));

    if (deck[type][card.id] === undefined) {
      deck[type][card.id] = 0;
    }
    deck[type][card.id] += 1;

    saveData();
  }

  /**
   * @param {string} type
   * @param {Card} card
   */
  function removeFromDeck(type, card) {
    let deleted = false;

    if (type === 'characters') {
      const elementCount = {};
      for (const id of Object.keys(deck.characters)) {
        if (id === card.id) continue;

        const charCard = cards[id];
        if (elementCount[charCard.element] === undefined) elementCount[charCard.element] = 0;
        elementCount[charCard.element]++;
      }

      for (const id of Object.keys(deck.actions)) {
        const c = cards[id];
        if (c.requirement === card.id || (c.requirement === card.element && elementCount[card.element] < 2)) {
          pushToast($t('tcg.requirementInDeck', { values: { character: card.name, card: c.name } }));
          return;
        }
      }
    }

    deck[type][card.id]--;
    if (deck[type][card.id] === 0) {
      deleted = true;
      delete deck[type][card.id];
    }
    deck[type] = deck[type];

    if (deleted) {
      pushToast($t('tcg.deletedFromDeck'));
    } else {
      pushToast($t('tcg.removedFromDeck'));
    }

    saveData();
  }

  function swapCharacterCardPos(from, to) {
    const keys = Object.keys(deck.characters);
    [keys[from], keys[to]] = [keys[to], keys[from]];
    deck.characters = keys.reduce((prev, cur) => {
      prev[cur] = 1;
      return prev;
    }, {});
    saveData();
  }

  async function readLocalData() {
    const prefix = getAccountPrefix();
    const tcgData = await readSave(`${prefix}tcg-decks`);
    const tcgSelectedDeck = await readSave(`${prefix}tcg-activedeck`);
    if (tcgData !== null) {
      decks = tcgData;
      activeDeck = tcgSelectedDeck;
    }
  }

  const saveData = debounce(async () => {
    const prefix = getAccountPrefix();
    await updateSave(`${prefix}tcg-decks`, decks);
    await updateSave(`${prefix}tcg-activedeck`, activeDeck);
  }, 2000);

  async function changeLocale(locale) {
    const dataJson = await import(`../../data/tcg/${locale}.json`);
    const tagsDataJson = await import(`../../data/tcg/tags/${locale}.json`);
    data = dataJson.default;
    tags = tagsDataJson.default;
    process();
  }

  process();

  onMount(async () => {
    await readLocalData();
    smallScreen = window.innerHeight < 900;
    showDetail = window.innerWidth > 600;
    if (smallScreen) {
      size = 'small';
    }

    if (sharedDeck !== null) {
      showDeck = true;
    }

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });

  /** @type Deck */
  $: deck = sharedDeck === null ? decks[activeDeck] : sharedDeck;
  $: characterCount = Object.keys(deck.characters).length;
  $: actionCount = Object.values(deck.actions).reduce((prev, cur) => prev + cur, 0);
</script>

<svelte:head>
  <title>Genius Invokation TCG - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Genius Invokation TCG Deck Builder" />
  <meta
    property="og:description"
    content="Genshin Impact Genius Invokation TCG Deck Builder, see card information, build and share your deck!"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 px-4 lg:px-8 max-w-full">
  {#if showDeck}
    <Deck
      {cards}
      {decks}
      {deck}
      {size}
      {characterCount}
      {actionCount}
      {compare}
      {setCompare}
      {showDetail}
      {addToDeck}
      {removeFromDeck}
      {selectDeck}
      {loadDeck}
      {sharedDeck}
      {sharedId}
      {swapCharacterCardPos}
      on:toggleDeck={toggleShowDeck}
      on:save={() => saveData()}
      on:saveShared={saveSharedDeck}
    />
  {/if}
  <div class="flex gap-2 justify-center md:justify-start">
    <div class="flex">
      <button on:click={() => changeDisplay('character')} class="pill {display === 'character' ? 'active' : ''}">
        Character Card
      </button>
      <button on:click={() => changeDisplay('action')} class="pill {display === 'action' ? 'active' : ''}">
        Action Card
      </button>
    </div>
    <div class="flex">
      <button on:click={() => changeSize('base')} class="pill {size === 'base' ? 'active' : ''}">
        <Icon path={mdiImageSizeSelectLarge} />
      </button>
      <button on:click={() => changeSize('small')} class="pill {size === 'small' ? 'active' : ''}">
        <Icon path={mdiImageSizeSelectSmall} />
      </button>
    </div>
    <button on:click={() => toggleDetail()} class="hidden md:block pill solo {showDetail ? 'active' : ''}">
      <Icon path={mdiDockWindow} />
    </button>
  </div>
  {#if display === 'action'}
    <div class="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
      {#each Object.entries(filter) as [key, val]}
        <button on:click={() => toggleFilter(key)} class="pill solo {val ? 'active' : ''}">
          {tags[key]}
        </button>
      {/each}
    </div>
  {/if}
  {#if display === 'character'}
    <div class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-3 pt-8">
      {#each characters as card}
        <Card
          {card}
          {compare}
          {size}
          {showDetail}
          {smallScreen}
          count={deck.characters[card.id]}
          on:compare={() => setCompare(card)}
          on:addToDeck={() => addToDeck('characters', card)}
          on:removeFromDeck={() => removeFromDeck('characters', card)}
        />
      {/each}
    </div>
  {:else}
    <div class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-3 pt-8">
      {#each actions as card}
        <Card
          {card}
          {compare}
          {size}
          {showDetail}
          {smallScreen}
          count={deck.actions[card.id]}
          on:compare={() => setCompare(card)}
          on:addToDeck={() => addToDeck('actions', card)}
          on:removeFromDeck={() => removeFromDeck('actions', card)}
        />
      {/each}
    </div>
  {/if}
  <div class="fixed bottom-2 md:bottom-auto md:top-0 right-0 z-50 flex justify-end">
    {#if !showDeck}
      <button
        class="bg-black bg-opacity-80 rounded-lg pl-2 pr-4 py-1 mr-2 mt-2 w-fit hover:ring-2 ring-primary duration-100"
        transition:fly={{ duration: 100, y: -100 }}
        on:click={toggleShowDeck}
      >
        <div class="flex gap-2">
          <div class="flex items-center">
            <img src="/images/tcg/icons/card_character.png" alt="character card" class="w-8" />
            <p class="text-white text-xl">{characterCount}</p>
          </div>
          <div class="flex items-center">
            <img src="/images/tcg/icons/card.png" alt="character card" class="w-8" />
            <p class="text-white text-xl">{actionCount}</p>
          </div>
        </div>
        <p class="pl-2 text-white text-xs text-center">{$t('tcg.showDeck')}</p>
      </button>
    {/if}
  </div>
  {#if compare !== undefined}
    <button
      class="fixed bottom-2 right-2 bg-black bg-opacity-80 text-white rounded-lg px-3 py-2 mt-2 mr-2 hover:ring-2 ring-primary duration-100"
      on:click={removeCompare}
      transition:fly={{ duration: 100, y: 100 }}
    >
      <p>Remove Compare</p>
    </button>
  {/if}
</div>

<style lang="postcss">
  .pill {
    @apply border-2 border-white border-opacity-25;
    @apply text-white text-sm 2xl:text-base;
    @apply px-2 2xl:px-4 py-1 whitespace-nowrap;
    @apply outline-none;
    @apply transition duration-100;
    @apply first:rounded-l-xl first:border-r-0;
    @apply last:rounded-r-xl last:border-l-0;

    &.solo {
      @apply rounded-xl border-2;
    }

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
