<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';

  export let decks;
  export let selectDeck, close, save;

  const confirmDelete = [];

  function addDeck() {
    decks.push({
      name: `Deck #${decks.length + 1}`,
      characters: {},
      actions: {},
    });
    decks = decks;
    save();
  }

  function deleteDeck(index) {
    if (confirmDelete[index] === true) {
      deleteDeckConfirm(index);
      return;
    }

    confirmDelete[index] = true;
    setTimeout(() => {
      confirmDelete[index] = false;
    }, 5000);
  }

  function deleteDeckConfirm(index) {
    decks.splice(index, 1);
    decks = decks;
    selectDeck(0);
    save();
  }

  function changeDeck(index) {
    selectDeck(index);
    close();
  }
</script>

<div>
  <div class="pb-4">
    <Button on:click={addDeck}>{$t('tcg.addDeck')}</Button>
  </div>
  <div>
    <ul class="p-2 divide-y divide-gray-700 text-white">
      {#each decks as deck, i}
        <li class="flex flex-wrap-reverse flex-row-reverse py-1 first:pt-0 last:pb-0">
          <div class="flex py-2 gap-1 whitespace-nowrap text-right">
            {#if decks.length > 1}
              <Button size="sm" color="red" on:click={() => deleteDeck(i)}>
                {$t(confirmDelete[i] ? 'common.deleteConfirm' : 'common.delete')}
              </Button>
            {/if}
            <Button size="sm" on:click={() => changeDeck(i)}>{$t('common.open')}</Button>
          </div>

          <div class="flex flex-wrap justify-self-start grow items-center gap-2 py-2">
            <div class="flex w-36 min-w-fit items-center gap-2">
              {#each Object.keys(deck.characters) as char}
                <img src="/images/tcg/avatar/{char}.png" alt={char} class="w-10" />
              {/each}
            </div>
            <div class="flex items-center justify-self-start grow">
              <p class="pt-1 pl-2 overflow-hidden text-ellipsis break-all">{deck.name}</p>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
