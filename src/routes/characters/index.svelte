<script>
  import { t } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { mdiStar, mdiViewGrid, mdiViewList } from '@mdi/js';

  import Icon from '../../components/Icon.svelte';
  import TableHeader from '../../components/Table/TableHeader.svelte';

  import { characters } from '../../data/characters';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';

  let sortBy = '';
  let sortOrder = false;
  let type = 'grid';
  let showConstellation = false;
  let constellation = {};

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

  async function processWishes() {
    const chars = {
      amber: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      kaeya: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      lisa: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      traveler_geo: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      traveler_anemo: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      barbara: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      xiangling: {
        default: 1,
        wish: 0,
        manual: 0,
      },
    };

    const bannerCategories = ['beginners', 'standard', 'character-event', 'weapon-event'];
    const prefix = getAccountPrefix();
    for (const id of bannerCategories) {
      const data = await readSave(`${prefix}wish-counter-${id}`);
      if (data !== null) {
        showConstellation = true;
        const counterData = data;
        const pullData = counterData.pulls || [];
        for (const pull of pullData) {
          if (pull.type === 'character') {
            if (chars[pull.id] === undefined) {
              chars[pull.id] = {
                default: 0,
                wish: 0,
                manual: 0,
              };
            }
            chars[pull.id].wish++;
          }
        }
      }
    }

    if (showConstellation) {
      constellation = chars;
      await updateSave(`${prefix}characters`, chars);
    }
  }

  async function getConstellation() {
    const prefix = getAccountPrefix();
    const data = await readSave(`${prefix}characters`);
    if (data !== null) {
      constellation = data;
      showConstellation = true;
    } else {
      await processWishes();
    }
  }

  onMount(async () => {
    await getConstellation();
  });
</script>

<svelte:head>
  <title>Characters - Paimon.moe</title>
  <meta
    name="description"
    content="Your best Genshin Impact companion! Help you plan what to farm with ascension calculator and database. Also track your progress with todo and wish counter."
  />
  <meta
    property="og:description"
    content="Your best Genshin Impact companion! Help you plan what to farm with ascension calculator and database. Also track your progress with todo and wish counter."
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="flex items-center px-4 md:px-8">
    <h1 class="font-display font-black text-4xl md:text-5xl text-white mr-4">{$t('characters.title')}</h1>
    <div class="flex text-white" style="height: fit-content;">
      <button
        class="{type === 'grid' ? 'bg-background' : 'bg-item'} p-2 rounded-l-xl cursor-pointer hover:bg-opacity-75"
        on:click={() => {
          type = 'grid';
        }}
      >
        <Icon path={mdiViewGrid} />
      </button>
      <button
        class="{type === 'table'
          ? 'bg-background'
          : 'bg-item'} bg-background p-2 rounded-r-xl cursor-pointer hover:bg-opacity-75"
        on:click={() => {
          type = 'table';
        }}
      >
        <Icon path={mdiViewList} />
      </button>
    </div>
  </div>

  {#if type === 'grid'}
    <div class="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
      {#each chars as [id, char] (id)}
        <a
          href="/characters/{id}"
          class="m-2 cell relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl rounded-xl {!showConstellation ||
          constellation[id]
            ? ''
            : 'opacity-50'}"
        >
          <div
            class="w-full rounded-t-xl bg-opacity-50 overflow-hidden {char.rarity === 5
              ? 'bg-legendary-from'
              : 'bg-rare-from'}"
          >
            <img class="w-full h-full" src={`/images/characters/${id}.png`} alt={char.name} />
          </div>
          <div
            class="absolute top-0 right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md"
            style="padding: 4px; margin: -10px;"
          >
            {#if constellation[id]}
              <span class="mx-1 text-white text-xs font-semibold">
                C{Math.max(0, (constellation[id].default + constellation[id].wish + constellation[id].manual) - 1)}
              </span>
            {/if}
            <img class="w-4 h-4" src={`/images/elements/${char.element.id}.png`} alt={char.element.name} />
          </div>
          <div class="w-full bg-item rounded-b-xl overflow-hidden">
            <p class="text-white text-sm p-1 text-center whitespace-no-wrap">{char.name}</p>
          </div>
        </a>
      {/each}
    </div>
  {:else}
    <p class="text-gray-400 px-4 md:px-8 font-medium pb-2 mt-4">
      ※ {$t('characters.subtitle')}
    </p>
    <div class="block overflow-x-auto whitespace-no-wrap pb-8">
      <div class="px-4 md:px-8 table">
        <table class="w-full block p-4 bg-item rounded-xl">
          <thead>
            <th style="min-width: 4rem;" />
            <TableHeader on:click={() => sort('name')} sort={sortBy === 'name'} order={sortOrder}
              >{$t('characters.name')}</TableHeader
            >
            <TableHeader on:click={() => sort('element')} sort={sortBy === 'element'} order={sortOrder} align="center">
              {$t('characters.element')}
            </TableHeader>
            <TableHeader on:click={() => sort('rarity')} sort={sortBy === 'rarity'} order={sortOrder} align="center">
              {$t('characters.rarity')}
            </TableHeader>
            <TableHeader on:click={() => sort('weapon')} sort={sortBy === 'weapon'} order={sortOrder} align="center">
              {$t('characters.weapon')}
            </TableHeader>
            <TableHeader on:click={() => sort('hp')} sort={sortBy === 'hp'} order={sortOrder} align="center">
              {$t('characters.hp')}
            </TableHeader>
            <TableHeader on:click={() => sort('atk')} sort={sortBy === 'atk'} order={sortOrder} align="center">
              {$t('characters.atk')}
            </TableHeader>
            <TableHeader on:click={() => sort('def')} sort={sortBy === 'def'} order={sortOrder} align="center">
              {$t('characters.def')}
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
  {/if}
</div>

<style>
  .cell {
    width: calc(33.33333% - 1rem);

    @screen md {
      @apply w-24;
    }
  }

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
