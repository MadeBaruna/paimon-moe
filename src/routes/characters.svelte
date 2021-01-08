<script>
  import { mdiStar } from '@mdi/js';

  import Icon from '../components/Icon.svelte';
  import TableHeader from '../components/Table/TableHeader.svelte';

  import { characters } from '../data/characters';

  let sortBy = '';
  let sortOrder = false;

  $: chars = Object.entries(characters).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        if (sortOrder) {
          return a[1].name.localeCompare(b[1].name);
        } else {
          return b[1].name.localeCompare(a[1].name);
        }
      case 'element':
        if (sortOrder) {
          return a[1].element.name.localeCompare(b[1].element.name);
        } else {
          return b[1].element.name.localeCompare(a[1].element.name);
        }
      case 'rarity':
        if (sortOrder) {
          return a[1].rarity - b[1].rarity;
        } else {
          return b[1].rarity - a[1].rarity;
        }
      case 'weapon':
        if (sortOrder) {
          return a[1].weapon.name.localeCompare(b[1].weapon.name);
        } else {
          return b[1].weapon.name.localeCompare(a[1].weapon.name);
        }
      case 'hp':
        if (sortOrder) {
          return a[1].stats.hp - b[1].stats.hp;
        } else {
          return b[1].stats.hp - a[1].stats.hp;
        }
      case 'atk':
        if (sortOrder) {
          return a[1].stats.atk - b[1].stats.atk;
        } else {
          return b[1].stats.atk - a[1].stats.atk;
        }
      case 'def':
        if (sortOrder) {
          return a[1].stats.def - b[1].stats.def;
        } else {
          return b[1].stats.def - a[1].stats.def;
        }
    }
  });

  function sort(by) {
    if (sortBy === by) {
      sortOrder = !sortOrder;
    } else {
      sortBy = by;
    }
  }
</script>

<style>
  tr.rare:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(173, 118, 176, 0.85) 10%,
      rgba(102, 86, 128, 0.85) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  tr.legendary:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(185, 129, 46, 0.85) 10%,
      rgba(132, 99, 50, 0.85) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  td {
    @apply text-white;
    @apply px-2;
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }
</style>

<svelte:head>
  <title>Characters - Paimon.moe</title>
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">Characters</h1>
  <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
    ※ Stat numbers are at level 80 Ascension 6. You can also click the header to sort!
  </p>

  <div class="block overflow-x-auto whitespace-no-wrap pb-8">
    <div class="px-4 md:px-8 table">
      <table class="w-full block p-4 bg-item rounded-xl">
        <thead>
          <th style="min-width: 4rem;" />
          <TableHeader on:click={() => sort('name')} sort={sortBy === 'name'} order={sortOrder}>Name</TableHeader>
          <TableHeader on:click={() => sort('element')} sort={sortBy === 'element'} order={sortOrder} align="center">
            Element
          </TableHeader>
          <TableHeader on:click={() => sort('rarity')} sort={sortBy === 'rarity'} order={sortOrder} align="center">
            Rarity
          </TableHeader>
          <TableHeader on:click={() => sort('weapon')} sort={sortBy === 'weapon'} order={sortOrder} align="center">
            Weapon
          </TableHeader>
          <TableHeader on:click={() => sort('hp')} sort={sortBy === 'hp'} order={sortOrder} align="center">
            HP
          </TableHeader>
          <TableHeader on:click={() => sort('atk')} sort={sortBy === 'atk'} order={sortOrder} align="center">
            ATK
          </TableHeader>
          <TableHeader on:click={() => sort('def')} sort={sortBy === 'def'} order={sortOrder} align="center">
            DEF
          </TableHeader>
        </thead>
        <tbody>
          {#each chars as [id, char] (id)}
            <tr class={`rounded cursor-pointer ${char.rarity === 4 ? 'rare' : 'legendary'}`}>
              <td class="rarity w-16 sticky" style="padding: 0; left: 0px;">
                <img class="w-12 h-12 rounded-full" src={`/images/characters/${id}.png`} alt={char.name} />
              </td>
              <td>{char.name}</td>
              <td class="text-center">
                <img class="w-8 h-8 inline" src={`/images/elements/${char.element.id}.png`} alt={char.element.name} />
              </td>
              <td class="text-center">
                <Icon color={char.rarity === 5 ? '#B9812E' : '#AD76B0'} path={mdiStar} />
              </td>
              <td class="text-center">
                <img class="w-8 h-8 inline" src={`/images/weapons/${char.weapon.id}.png`} alt={char.weapon.name} />
              </td>
              <td class="text-center">{char.stats.hp}</td>
              <td class="text-center">{char.stats.atk}</td>
              <td class="text-center">{char.stats.def}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
