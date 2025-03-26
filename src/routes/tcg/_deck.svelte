<script>
  import { mdiContentSave, mdiPencil, mdiShareVariant } from '@mdi/js';
  import { createEventDispatcher, getContext } from 'svelte';
  import { t } from 'svelte-i18n';
  import { slide } from 'svelte/transition';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import { pushToast } from '../../stores/toast';
  import Card from './_card.svelte';
  import DeckModal from './_deckModal.svelte';
  import ShareModal from './_shareModal.svelte';

  const dispatch = createEventDispatcher();
  const { open, close } = getContext('simple-modal');

  export let cards, decks, deck, size, characterCount, actionCount, compare, showDetail, tags;
  export let sharedDeck, sharedId;
  export let setCompare, addToDeck, removeFromDeck, selectDeck, loadDeck, swapCharacterCardPos;

  let editName = false;
  let name = '';

  function showDeckSelectionModal() {
    open(
      DeckModal,
      {
        decks,
        close,
        selectDeck: changeDeck,
        save: () => dispatch('save'),
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '600px' },
      },
    );
  }

  function share() {
    if (characterCount !== 3 || actionCount !== 30) {
      pushToast($t('tcg.shareNotComplete'));
      return;
    }

    open(
      ShareModal,
      {
        deck,
        setShareId,
        id: sharedId,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  function changeDeck(index) {
    selectDeck(index);
    setShareId(null);
  }

  function setShareId(id) {
    console.log('set', id);
    sharedId = id;
  }

  function saveSharedDeck() {
    dispatch('saveShared');
  }

  function toggleEditName() {
    name = deck.name;
    editName = true;
  }

  function saveName() {
    deck.name = name;
    editName = false;
    dispatch('save');
  }

  function swapOrder(event) {
    swapCharacterCardPos(event.detail.from, event.detail.to);
  }

  function loadDefaultDeck() {
    loadDeck(
      { diluc: 1, kaeya: 1, sucrose: 1 },
      {
        magic_guide: 1,
        raven_bow: 1,
        white_iron_greatsword: 1,
        white_tassel: 1,
        travelers_handy_sword: 1,
        broken_rimes_echo: 1,
        'wine-stained_tricorne': 1,
        witchs_scorching_hat: 1,
        thunder_summoners_crown: 1,
        viridescent_venerers_diadem: 1,
        mask_of_solitude_basalt: 1,
        laurel_coronet: 1,
        changing_shifts: 1,
        strategize: 1,
        'i_havent_lost_yet!': 1,
        'leave_it_to_me!': 1,
        when_the_crane_returned: 1,
        starsigns: 1,
        calxs_arts: 1,
        master_of_weaponry: 1,
        blessing_of_the_divine_relics_installation: 1,
        quick_knit: 1,
        send_off: 1,
        guardians_oath: 1,
        sweet_madame: 1,
        minty_meat_rolls: 1,
        dawn_winery: 1,
        favonius_cathedral: 1,
        paimon: 1,
        'the_bestest_travel_companion!': 1,
      },
    );
  }
</script>

<div class="relative bg-black bg-opacity-50 px-4 pt-4 pb-2 rounded-xl mb-4" transition:slide={{ duration: 200 }}>
  <div class="absolute top-4 right-4 flex flex-row-reverse md:flex-col gap-4 xl:gap-0">
    <button
      class="rounded-lg pl-2 pr-4 py-1 w-fit ring-2 ring-gray-700 hover:ring-primary duration-100"
      on:click={() => dispatch('toggleDeck')}
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
      <p class="pl-2 text-white text-xs text-center">{$t('tcg.hideDeck')}</p>
    </button>
    <button
      class="rounded-lg md:mt-4 px-2 py-1 ring-2 ring-gray-700 hover:ring-primary duration-100 text-white"
      on:click={showDeckSelectionModal}
    >
      {$t('tcg.selectDeck')}
    </button>
  </div>
  <div class="pt-24 md:pt-0 pb-4 flex items-center w-full md:pr-40">
    {#if editName}
      <div class="flex w-full max-w-screen-sm">
        <div class="w-full max-w-full">
          <Input className="w-full" bind:value={name} />
        </div>
        <button class="my-auto text-white w-min h-min ml-4 rounded-xl hover:ring-2 ring-primary p-1 duration-100" on:click={saveName}>
          <Icon path={mdiContentSave} />
        </button>
      </div>
    {:else}
      <div class="flex xl:pr-96 w-full items-center pr-24 pb-2">
        <h1 class="text-white font-bold text-lg xl:text-3xl max-w-full break-words">
          {deck.name}
        </h1>
        {#if sharedDeck === null}
          <button
            class="text-white my-auto ml-4 rounded-xl hover:ring-2 ring-primary p-1 duration-100"
            on:click={toggleEditName}
          >
            <Icon path={mdiPencil} />
          </button>
          <button class="text-white my-auto ml-4 rounded-xl hover:ring-2 ring-primary p-1 duration-100" on:click={share}>
            <Icon path={mdiShareVariant} />
          </button>
        {:else}
          <button class="text-white my-auto ml-4 rounded-xl hover:ring-2 ring-primary p-1 duration-100" on:click={share}>
            <Icon path={mdiShareVariant} />
          </button>
          <Button className="ml-4" on:click={saveSharedDeck}>{$t('tcg.saveDeck')}</Button>
        {/if}
      </div>
    {/if}
  </div>
  {#if characterCount === 0 && actionCount === 0}
    <div>
      <p class="text-white text-lg pb-2">{$t('tcg.noCardOnDeck')}</p>
      <Button on:click={loadDefaultDeck}>{$t('tcg.loadDefaultDeck')}</Button>
    </div>
  {/if}
  <div class="flex flex-wrap gap-x-4 gap-y-3 pb-4">
    {#each Object.keys(deck.characters) as id, index}
      <Card
        card={cards[id]}
        {size}
        {compare}
        {showDetail}
        {index}
        {tags}
        draggable
        count={1}
        on:compare={() => setCompare(cards[id])}
        on:addToDeck={() => addToDeck('characters', cards[id])}
        on:removeFromDeck={() => removeFromDeck('characters', cards[id])}
        on:swapOrder={swapOrder}
      />
    {/each}
  </div>
  <div class="flex flex-wrap gap-x-4 gap-y-3">
    {#each Object.entries(deck.actions) as [id, count]}
      <Card
        card={cards[id]}
        {size}
        {compare}
        {count}
        {showDetail}
        {tags}
        on:compare={() => setCompare(cards[id])}
        on:addToDeck={() => addToDeck('actions', cards[id])}
        on:removeFromDeck={() => removeFromDeck('actions', cards[id])}
      />
    {/each}
  </div>
</div>
