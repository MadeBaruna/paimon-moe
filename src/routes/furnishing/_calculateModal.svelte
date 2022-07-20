<script>
  import { mdiClose } from '@mdi/js';

  import { onMount } from 'svelte';
  import { locale, t } from 'svelte-i18n';
  import Checkbox from '../../components/Checkbox.svelte';
  import Icon from '../../components/Icon.svelte';

  export let set;
  export let furnishing;
  let materials;
  let result = [];
  let coins = 0;
  let exludeAll = true;

  console.log(set);

  function calculate() {
    if (materials === undefined) return;

    const items = Object.entries(set.items);
    const needed = set.needed;

    result = [];
    coins = 0;

    const final = {};
    for (const [item, amount] of items) {
      const needs = exludeAll ? needed[item] : amount;
      if (needs <= 0) continue;

      const furn = furnishing[item];
      if (furn.recipe !== undefined) {
        for (const f of furn.recipe) {
          if (final[f.id] === undefined) {
            final[f.id] = 0;
          }

          final[f.id] += f.amount * needs;
        }
      } else if (furn.cost !== undefined) {
        coins += furn.cost;
      }
    }

    result = Object.entries(final);
  }

  async function start() {
    materials = (await import(`../../data/furnishing/materials/${$locale}.json`)).default;
    calculate();
  }

  onMount(() => {
    start();
  });

  $: exludeAll, calculate();
</script>

<div>
  <p class="text-white font-bold mb-4 text-lg">{set.name}</p>
  <table class="mb-2 w-full">
    {#each result as [item, amount], i}
      <tr>
        <td class="text-right border-gray-700 py-1 {i === 0 ? '' : 'border-t'}">
          <span class="text-white mr-2 whitespace-nowrap">
            {amount}
            <Icon size={0.5} path={mdiClose} />
          </span>
        </td>
        <td class="border-gray-700 py-1 {i === 0 ? '' : 'border-t'}">
          <span class="text-white">
            <span class="w-6 inline-block">
              <img class="h-6 inline-block mr-1" src="/images/items/{item}.png" alt={materials[item]} />
            </span>
            {materials[item]}
          </span>
        </td>
      </tr>
    {/each}
    {#if coins > 0}
      <tr>
        <td class="text-right border-t border-gray-700 py-1">
          <span class="text-white mr-2 whitespace-nowrap">
            {coins}
            <Icon size={0.5} path={mdiClose} />
          </span>
        </td>
        <td class="border-t border-gray-700 py-1">
          <span class="text-white">
            <span class="w-6 inline-block">
              <img
                class="h-6 inline-block mr-1"
                src="/images/items/realm_currency.png"
                alt={materials['realm_currency']}
              />
            </span>
            {materials['realm_currency']}
          </span>
        </td>
      </tr>
    {/if}
  </table>
  <Checkbox bind:checked={exludeAll}>
    <p class="text-white">{$t('furnishing.sets.exludeOwned')}</p>
  </Checkbox>
</div>
