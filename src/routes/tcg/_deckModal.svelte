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
  <table class="border-separate border-spacing-0">
    {#each decks as deck, i}
      <tr class="group">
        <td class="group-last:border-b-0 border-b border-gray-700 w-full px-2 text-white align-middle">
          <div class="flex items-center gap-2">
            {#each Object.keys(deck.characters) as char}
              <img src="/images/tcg/avatar/{char}.png" alt={char} class="w-10" />
            {/each}
            <p class="pt-1 pl-2">{deck.name}</p>
          </div>
        </td>
        <td class="group-last:border-b-0 border-b border-gray-700 py-2 pr-2 whitespace-nowrap text-right">
          {#if decks.length > 1}
            <Button size="sm" color="red" on:click={() => deleteDeck(i)}>
              {$t(confirmDelete[i] ? 'common.deleteConfirm' : 'common.delete')}
            </Button>
          {/if}
          <Button size="sm" on:click={() => changeDeck(i)}>{$t('common.open')}</Button>
        </td>
      </tr>
    {/each}
  </table>
</div>
