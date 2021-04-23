<script>
  import { t } from 'svelte-i18n';

  import { mdiClose } from '@mdi/js';

  import { itemGroup } from '../data/itemGroup';
  import { itemList } from '../data/itemList';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import Input from './Input.svelte';

  export let item;
  export let addTodo;
  export let cancel;

  let withRarity = !!itemGroup[item];
  let selectedItem = withRarity ? itemGroup[item].items[0] : itemList[item];
  let selected = 0;
  let amount = 1;

  function select(index, item) {
    selected = index;
    selectedItem = item;
  }

  function addAmount(val) {
    amount += val;
  }
</script>

<div>
  {#if withRarity}
    <p class="text-white font-bold mb-4 text-lg">{$t('items.add.rarity')}</p>
    <div class="flex items-center mb-4 text-white">
      {#each itemGroup[item].items as item, index}
        <div
          on:click={() => select(index, item)}
          class={`h-20 w-20 p-2 mr-2 flex items-center justify-center cursor-pointer rounded-xl transition duration-300
        ${selected === index ? 'bg-background border-primary border-2' : ''}`}>
          <img
            class="w-full max-h-full object-contain"
            src={`/images/items/${item.id}.png`}
            alt={item.name}
            title={item.name} />
        </div>
      {/each}
    </div>
  {:else}
    <div class="flex items-center mb-4 text-white">
      <div class={`h-20 w-20 p-2 flex items-center justify-center`}>
        <img
          class="w-full max-h-full object-contain"
          src={`/images/items/${item}.png`}
          alt={itemList[item].name}
          title={itemList[item].name} />
      </div>
    </div>
  {/if}
  <p class="text-white font-bold mb-4 text-lg">{$t('items.add.amount')}</p>
  <div class="inline-flex mb-4">
    <Input className="mr-2" type="number" min={1} bind:value={amount} placeholder={$t('items.add.inputAmount')} />
    <Button className="mr-2 w-16" on:click={() => addAmount(1)}>+1</Button>
    <Button className="w-16" on:click={() => addAmount(10)}>+10</Button>
  </div>
  <div class="text-white font-bold mb-4 text-lg rounded-xl bg-background px-4 py-2 inline-flex items-center">
    <div class="h-8 w-8 mr-2 flex items-center justify-center flex-shrink-0">
      <img
        class="w-full max-h-full object-contain"
        src={`/images/items/${selectedItem.id}.png`}
        alt={selectedItem.name}
        title={selectedItem.name} />
    </div>
    <span>{selectedItem.name}</span>
    <div class="mx-2 w-4 flex-shrink-0">
      <Icon size={0.5} path={mdiClose} />
    </div>
    <span>{amount}</span>
  </div>
  <div class="flex justify-end space-x-2">
    <Button on:click={cancel}>{$t('items.add.cancel')}</Button>
    <Button on:click={() => addTodo(selectedItem, amount)} color="green">{$t('items.add.add')}</Button>
  </div>
</div>
