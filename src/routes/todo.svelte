<script>
  import { t } from 'svelte-i18n';

  import { getContext, onMount, tick } from 'svelte';
  import { slide } from 'svelte/transition';
  import { mdiChevronDown, mdiChevronLeft, mdiChevronRight, mdiClose, mdiInformation, mdiLoading } from '@mdi/js';
  import { todos, loading } from '../stores/todo';
  import { ar, wl } from '../stores/server';
  import { itemList } from '../data/itemList';
  import Masonry from '../components/Masonry.svelte';
  import Icon from '../components/Icon.svelte';
  import Button from '../components/Button.svelte';
  import TodoDeleteModal from '../components/TodoDeleteModal.svelte';
  import { getCurrentDay } from '../stores/server';
  import { itemGroup } from '../data/itemGroup';
  import { dropRates } from '../data/dropRates';

  const { open: openModal, close: closeModal } = getContext('simple-modal');
  
  const AMOUNT_GOLD_CHANGE = [1000, 10000, 50000]; 
  const AMOUNT_ITEM_CHANGE = [1, 5, 10];

  let refreshLayout;
  let columnCount = 1;
  let numberFormat = Intl.NumberFormat();
  let adding = false;
  let isSunday = false;
  let today = getCurrentDay();
  let summary = {};
  let todayOnlyItems = {};
  let resin = 0;
  let resinDetail = {};
  let showResinDetail = false;
  let bookDomainLevel = 0;
  let weaponDomainLevel = 0;

  let id = Math.random();

  async function toggleResinDetail() {
    showResinDetail = !showResinDetail;
  }

  function calculateDomainLevel() {
    const val = $ar;

    if (val >= 45) {
      bookDomainLevel = 3;
    } else if (val >= 36) {
      bookDomainLevel = 2;
    } else if (val >= 28) {
      bookDomainLevel = 1;
    } else {
      bookDomainLevel = 0;
    }

    if (val >= 40) {
      weaponDomainLevel = 3;
    } else if (val >= 30) {
      weaponDomainLevel = 2;
    } else if (val >= 21) {
      weaponDomainLevel = 1;
    } else {
      weaponDomainLevel = 0;
    }
  }

  async function reorder(index, pos) {
    if ((index === 0 && pos === -1) || (index === $todos.length - 1 && pos === 1)) return;

    todos.update((val) => {
      val.splice(index + pos, 0, val.splice(index, 1)[0]);
      return val;
    });

    await tick();
    refreshLayout();
  }

  async function deleteTodo(index) {
    todos.update((val) => {
      val.splice(index, 1);
      return val;
    });

    await tick();
    refreshLayout();
    closeModal();
  }

  async function askDeleteTodo(index) {
    if (index < 0 && index > $todos.length) return;

    openModal(
      TodoDeleteModal,
      {
        todo: $todos[index],
        deleteTodo: () => deleteTodo(index),
        cancel: closeModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '400px' },
      },
    );
  }

  function decrease(key, val) {
    todos.update((n) => {
      let i = 0;
      let leftover = val;
      for (const current of n) {
        const remaining = current.resources[key];
        if (remaining !== undefined && remaining > 0) {
          const reducedBy = Math.min(val, leftover, remaining);

          n[i].resources[key] -= reducedBy;
          leftover -= reducedBy;

          if (leftover === 0) break;
        }
        i++;
      }

      return n;
    });
  }

  function increase(key, val) {
    todos.update((n) => {
      let target = n.find(c=>c.resources.hasOwnProperty(key));
      if(target)
        target.resources[key] += val;

      return n;
    });
  }

  async function updateSummary() {
    const todayOnly = {};
    summary = $todos.reduce((prev, current) => {
      for (const [id, amount] of Object.entries(current.resources)) {
        if (!isSunday && itemList[id].day && itemList[id].day.includes(today)) {
          if (todayOnly[id] === undefined) {
            todayOnly[id] = 0;
          }
          todayOnly[id] += amount;
        }

        if (prev[id] === undefined) {
          prev[id] = 0;
        }

        prev[id] += amount;
      }

      return prev;
    }, {});
    todayOnlyItems = todayOnly;

    id = Math.random();
    await tick();
    refreshLayout();

    calculateResin();
  }

  async function calculateResin() {
    calculateDomainLevel();
    const books = {};
    const weapons = {};
    const ascension = {};
    resin = 0;
    resinDetail = {};

    for (const [id, amount] of Object.entries(summary)) {
      if (itemGroup[id] && itemGroup[id].type === 'book') {
        if (books[id] === undefined) {
          books[id] = [0, 0, 0];
        }
        books[id][itemList[id].rarity - 2] = amount;
      } else if (itemGroup[id] && itemGroup[id].type === 'weapon') {
        if (weapons[id] === undefined) {
          weapons[id] = [0, 0, 0, 0];
        }
        weapons[id][itemList[id].rarity - 1] = amount;
      } else if (itemGroup[id] && itemGroup[id].type === 'ascension_gem') {
        if (ascension[id] === undefined) {
          ascension[id] = [0, 0, 0, 0, 0];
        }
        ascension[id][itemList[id].rarity - 1] = amount;
      } else if (itemList[id].parent) {
        const parent = itemList[id].parent;
        if (itemGroup[parent].type === 'book') {
          if (books[parent] === undefined) {
            books[parent] = [0, 0, 0];
          }
          books[parent][itemList[id].rarity - 2] = amount;
        } else if (itemGroup[parent].type === 'weapon') {
          if (weapons[parent] === undefined) {
            weapons[parent] = [0, 0, 0, 0];
          }
          weapons[parent][itemList[id].rarity - 1] = amount;
        } else if (itemGroup[parent].type === 'ascension_gem') {
          if (ascension[parent] === undefined) {
            ascension[parent] = [0, 0, 0, 0, 0];
          }
          ascension[parent][itemList[id].rarity - 1] = amount;
        }
      }
    }

    let total = 0;
    for (const [id, count] of Object.entries(books)) {
      let currentTotal = 0;
      while (count.find((e) => e > 0)) {
        for (let i = 0; i < 3; i++) {
          count[i] -= dropRates.book[bookDomainLevel][i];
          if (count[i] <= -3 && i < 2) {
            count[i] += 3;
            count[i + 1] -= 1;
          }
        }

        currentTotal += 20;
        total += 20;
      }

      resinDetail[id] = currentTotal;
    }
    resin += total;

    total = 0;
    for (const [id, count] of Object.entries(weapons)) {
      let currentTotal = 0;
      while (count.find((e) => e > 0)) {
        for (let i = 0; i < 4; i++) {
          count[i] -= dropRates.weapon[weaponDomainLevel][i];
          if (count[i] <= -3 && i < 3) {
            count[i] += 3;
            count[i + 1] -= 1;
          }
        }

        currentTotal += 20;
        total += 20;
      }
      resinDetail[id] = currentTotal;
    }
    resin += total;

    const worldLevel = $wl;
    total = 0;
    for (const [id, count] of Object.entries(ascension)) {
      let currentTotal = 0;
      while (count.find((e) => e > 0)) {
        for (let i = 0; i < 5; i++) {
          count[i] -= dropRates.boss[worldLevel][i];
          if (count[i] <= -3 && i < 3) {
            count[i] += 3;
            count[i + 1] -= 1;
          }
        }

        currentTotal += 40;
        total += 40;
      }
      resinDetail[id] = currentTotal;
    }
    resin += total;

    await tick();
    refreshLayout();
  }

  function updateId() {
    id = Math.random();
  }

  onMount(async () => {
    await tick();
    id = Math.random();
  });

  $: $todos, updateSummary();
  $: columnCount, updateId();
</script>

<svelte:head>
  <title>Todo List - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Todo List to plan and track items and mora you need, you can also see resin approximation needed to farm the items!"
  />
  <meta
    property="og:description"
    content="Genshin Impact Todo List to plan and track items and mora you need, you can also see resin approximation needed to farm the items!"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 px-2 md:px-8 lg:pt-8">
  <Masonry stretchFirst={true} bind:refreshLayout bind:columnCount items={id}>
    <h1 class="font-display font-black text-3xl lg:text-left lg:text-5xl text-white">{$t('todo.title')}</h1>
    <div class="bg-item rounded-xl p-4 text-white">
      {#if $loading}
        <Icon path={mdiLoading} color="white" spin />
      {:else if $todos.length > 0}
        <div class="flex items-center mb-4">
          <p class="font-bold text-xl mr-2 flex-1">{$t('todo.summary')}</p>
        </div>
      {:else}
        <p class="font-bold text-xl">{$t('todo.empty.0')}<br />{$t('todo.empty.1')}</p>
      {/if}
      {#if Object.entries(todayOnlyItems).length > 0}
        <div class="rounded-xl bg-background px-4 py-2 mb-2">
          <p class="font-semibold mb-2 text-center">{$t('todo.farmableToday')}</p>
          <table class="w-full">
            {#each Object.entries(todayOnlyItems) as [id, amount]}
              <tr class="today-only">
                <td class="text-right border-b border-gray-700 py-1">
                  <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} mr-2 whitespace-no-wrap`}>
                    {numberFormat.format(amount)}
                    <Icon size={0.5} path={mdiClose} /></span
                  >
                </td>
                <td class="border-b border-gray-700 py-1">
                  <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} block`}>
                    <span class="w-6 inline-block">
                      <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={itemList[id].name} />
                    </span>
                    {itemList[id].name}
                  </span>
                </td>
              </tr>
            {/each}
          </table>
        </div>
      {/if}
      {#if resin > 0}
        <div class="rounded-xl bg-background px-4 py-2 mb-2">
          <div class="flex items-center justify-center cursor-pointer" on:click={toggleResinDetail}>
            <img src="/images/resin.png" alt="resin" class="w-6 h-6 mr-2" />
            <span class="mr-2"><span class="font-black">{resin}</span> {$t('todo.resin')}</span>
            <Icon
              path={mdiChevronDown}
              className={`duration-100 ease-in ${showResinDetail ? 'transform rotate-180' : ''}`}
            />
          </div>
          {#if showResinDetail}
            <div transition:slide class="mt-2">
              <table class="w-full">
                {#each Object.entries(resinDetail) as [id, amount]}
                  <tr>
                    <td class="text-right border-b border-gray-700 py-1">
                      <div class="flex justify-end items-center">
                        <span class="text-white mr-2 whitespace-no-wrap">
                          {numberFormat.format(amount)}
                        </span>
                        <img src="/images/resin.png" alt="resin" class="w-6 h-6 mr-2" />
                      </div>
                    </td>
                    <td class="border-b border-gray-700 py-1">
                      <span class="text-white block">
                        <span class="w-6 inline-block">
                          <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={itemList[id].name} />
                        </span>
                        {itemGroup[id].name}
                      </span>
                    </td>
                  </tr>
                {/each}
              </table>

              <span class="mt-4 block text-center">
                {$t('todo.based', { values: { ar: $ar, wl: $wl } })}
              </span>
              <span class="text-gray-400 text-xs text-center block">{$t('todo.change')}</span>
              <span class="mt-2 text-sm block text-center">
                {$t('todo.approximation')}
                <a class="text-primary font-semibold" target="_blank" href="https://discord.gg/ydwdYmr"
                  >Genshin Impact Data Gathering Discord</a
                >
              </span>
            </div>
          {/if}
        </div>
      {/if}
      <table class="w-full">
        {#each Object.entries(summary) as [id, amount]}
          <tr>
            <td class="text-right border-b border-gray-700 py-1">
              <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} mr-2 whitespace-no-wrap`}>
                {numberFormat.format(amount)}
                <Icon size={0.5} path={mdiClose} /></span
              >
            </td>
            <td class="border-b border-gray-700 py-1">
              <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} block mb-1`}>
                <span class="w-6 inline-block">
                  <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={itemList[id].name} />
                </span>
                {itemList[id].name}
              </span>
              {#each id == 'mora'? AMOUNT_GOLD_CHANGE: AMOUNT_ITEM_CHANGE as changeAmount}
                <Button size="sm" disabled={amount === 0 && !adding} className="{id == 'mora'? '': 'w-10'} mr-1" on:click={() => decrease(id, changeAmount)}>
                  {`-${changeAmount}`}
                </Button>
              {/each}
              <span class="block mb-1"></span>
              {#each id == 'mora'? AMOUNT_GOLD_CHANGE: AMOUNT_ITEM_CHANGE as changeAmount}
                <Button size="sm" className="{id == 'mora'? '': 'w-10'} mr-1" on:click={() => increase(id, changeAmount)}>
                  {`+${changeAmount}`}
                </Button>
              {/each}
            </td>
          </tr>
        {/each}
      </table>
    </div>
    {#each $todos as todo, i}
      <div class="bg-item rounded-xl p-4 text-white">
        <div class="flex items-center mb-2">
          {#if todo.type === 'weapon'}
            <img
              class="h-8 inline-block mr-2"
              src={`/images/weapons/${todo.weapon ? todo.weapon.id : 'any_weapon_1'}.png`}
              alt={todo.weapon ? todo.weapon.name : `Weapon Level ${todo.level.from}-${todo.level.to}`}
            />
            <div class="flex-1">
              <p class="font-bold">{todo.weapon ? todo.weapon.name : 'Weapon'}</p>
              <p class="text-gray-500">Level {`${todo.level.from}-${todo.level.to}`}</p>
            </div>
          {:else if todo.type === 'character'}
            <img
              class="h-8 inline-block mr-2"
              src={`/images/characters/${todo.character ? todo.character.id : 'characters'}.png`}
              alt={todo.character ? todo.character.name : `Character Level ${todo.level.from}-${todo.level.to}`}
            />
            <div class="flex-1">
              <p class="font-bold">{todo.character ? todo.character.name : 'Character'}</p>
              <p class="text-gray-500">Level {`${todo.level.from}-${todo.level.to}`}</p>
            </div>
          {:else if todo.type === 'item'}
            <img class="h-8 inline-block mr-2" src={`/images/items.png`} alt="Item" />
            <div class="flex-1">
              <p class="font-bold">Items</p>
              <p class="text-gray-500">Added from items page</p>
            </div>
          {/if}
          <Button disabled={i === 0} on:click={() => reorder(i, -1)} rounded={false} size="sm" className="rounded-l-xl">
            <Icon path={mdiChevronLeft} color="white" />
          </Button>
          <Button
            disabled={i === $todos.length - 1}
            on:click={() => reorder(i, 1)}
            rounded={false}
            size="sm"
            className="rounded-r-xl"
          >
            <Icon path={mdiChevronRight} color="white" />
          </Button>
        </div>
        <table class="w-full">
          {#each Object.entries(todo.resources) as [id, amount]}
            <tr>
              <td class="text-right border-b border-gray-700 py-1">
                <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} mr-2 whitespace-no-wrap`}>
                  {numberFormat.format(amount)}
                  <Icon size={0.5} path={mdiClose} /></span
                >
              </td>
              <td class="border-b border-gray-700 py-1">
                <span class={amount === 0 ? 'line-through text-gray-600' : 'text-white'}>
                  <span class="w-6 inline-block">
                    <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={itemList[id].name} />
                  </span>
                  {itemList[id].name}
                </span>
              </td>
            </tr>
          {/each}
        </table>
        <div class="flex mt-2 items-end">
          <p class="flex-1 text-gray-400"># {i + 1}</p>
          <Button on:click={() => askDeleteTodo(i)} size="sm" className="px-2">
            <Icon path={mdiClose} color="white" size={0.8} />
            Delete
          </Button>
        </div>
      </div>
      {#if (i + 1) % (columnCount - 1) === 0}
        <div />
      {/if}
    {/each}
  </Masonry>
</div>

<style>
  tr.today-only:last-child {
    td {
      @apply border-b-0;
    }
  }
</style>
