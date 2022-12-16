<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Card from './_card.svelte';
  import Detail from './_detail.svelte';

  export let card;
  export let showCompare;
  export let compare;
  export let count;
  export let addToDeck;
  export let removeFromDeck;
  export let close;

  function add() {
    addToDeck();
    close();
  }

  function remove() {
    removeFromDeck();
    close();
  }
</script>

<div class="flex flex-col-reverse items-center md:items-start md:flex-row">
  <div class="p-2 md:p-4 flex flex-col-reverse md:flex-col gap-4 md:gap-2">
    <Card {card} {count} size="large" />
    {#if (card.type === 'character' && count === undefined) || card.type !== 'character'}
      <Button on:click={add}>{$t('tcg.addToDeck')}</Button>
    {/if}
    {#if count > 0}
      <Button on:click={remove}>
        {$t('tcg.removeFromDeck', { values: { type: count === 1 ? $t('tcg.delete') : $t('tcg.remove') } })}
      </Button>
    {/if}
  </div>
  <Detail {card} withBackground={false} />
  {#if showCompare}
    <div class="w-2" />
    <Detail card={compare} withBackground={false} />
  {/if}
</div>
