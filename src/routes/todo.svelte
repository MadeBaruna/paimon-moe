<script>
  import { getContext, tick } from 'svelte';
  import { mdiChevronLeft, mdiChevronRight, mdiClose, mdiLoading, mdiPlus } from '@mdi/js';
  import { todos, loading } from '../stores/todo';
  import { itemList } from '../data/itemList';
  import Masonry from 'svelte-masonry/Masonry.svelte';
  import Icon from '../components/Icon.svelte';
  import Button from '../components/Button.svelte';
  import TodoDeleteModal from '../components/TodoDeleteModal.svelte';
  import { getCurrentDay } from '../stores/server';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let refreshLayout;
  let numberFormat = Intl.NumberFormat();
  let adding = false;
  let todayOnly = false;
  let today = getCurrentDay();

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

  function toggleTodayOnly() {
    today = getCurrentDay();
    todayOnly = !todayOnly;
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

  $: summary = $todos.reduce((prev, current) => {
    for (const [id, amount] of Object.entries(current.resources)) {
      if (todayOnly && itemList[id].day && !itemList[id].day.includes(today)) continue;

      if (prev[id] === undefined) {
        prev[id] = 0;
      }

      prev[id] += amount;
    }

    return prev;
  }, {});
</script>

<svelte:head>
  <title>Todo List - Paimon.moe</title>
</svelte:head>
<div class="lg:ml-64 pt-20 px-4 md:px-8 lg:pt-8">
  <Masonry stretchFirst={true} bind:refreshLayout>
    <h1 class="font-display font-black text-3xl lg:text-left lg:text-5xl text-white">Todo List</h1>
    <div class="bg-item rounded-xl p-4 text-white">
      {#if $loading}
        <Icon path={mdiLoading} color="white" spin />
      {:else if $todos.length > 0}
        <div class="flex items-center mb-4">
          <p class="font-bold text-xl mr-2 flex-1">Summary</p>
          <Button size="md" on:click={toggleTodayOnly}>Show {todayOnly ? 'All Day' : 'Today Only'}</Button>
        </div>
      {:else}
        <p class="font-bold text-xl">Nothing to do yet 😀<br />Add some here or from the Calculator!</p>
      {/if}
      <table class="w-full">
        {#each Object.entries(summary) as [id, amount], i}
          <tr>
            <td class="text-right border-b border-gray-700 py-1">
              <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} mr-2 whitespace-no-wrap`}>
                {numberFormat.format(amount)}
                <Icon size={0.5} path={mdiClose} /></span>
            </td>
            <td class="border-b border-gray-700 py-1">
              <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} block mb-1`}>
                <span class="w-6 inline-block">
                  <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={itemList[id].name} />
                </span>
                {itemList[id].name}
              </span>
              {#if id === 'mora'}
                <Button size="sm" disabled={amount === 0 && !adding} on:click={() => decrease(id, 1000)}>
                  {adding ? '+' : '-'}1000
                </Button>
                <Button size="sm" disabled={amount === 0 && !adding} on:click={() => decrease(id, 10000)}>
                  {adding ? '+' : '-'}10000
                </Button>
                <Button size="sm" disabled={amount === 0 && !adding} on:click={() => decrease(id, 50000)}>
                  {adding ? '+' : '-'}50000
                </Button>
              {:else}
                <Button size="sm" disabled={amount === 0 && !adding} className="w-10" on:click={() => decrease(id, 1)}>
                  {adding ? '+' : '-'}1
                </Button>
                <Button size="sm" disabled={amount === 0 && !adding} className="w-10" on:click={() => decrease(id, 5)}>
                  {adding ? '+' : '-'}5
                </Button>
                <Button size="sm" disabled={amount === 0 && !adding} className="w-10" on:click={() => decrease(id, 10)}>
                  {adding ? '+' : '-'}10
                </Button>
              {/if}
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
              alt={todo.weapon ? todo.weapon.name : `Weapon Level ${todo.level.from}-${todo.level.to}`} />
            <div class="flex-1">
              <p class="font-bold">{todo.weapon ? todo.weapon.name : 'Weapon'}</p>
              <p class="text-gray-500">Level {`${todo.level.from}-${todo.level.to}`}</p>
            </div>
          {:else if todo.type === 'character'}
            <img
              class="h-8 inline-block mr-2"
              src={`/images/characters/${todo.character ? todo.character.id : 'characters'}.png`}
              alt={todo.character ? todo.character.name : `Character Level ${todo.level.from}-${todo.level.to}`} />
            <div class="flex-1">
              <p class="font-bold">{todo.character ? todo.character.name : 'Character'}</p>
              <p class="text-gray-500">Level {`${todo.level.from}-${todo.level.to}`}</p>
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
            className="rounded-r-xl">
            <Icon path={mdiChevronRight} color="white" />
          </Button>
        </div>
        <table class="w-full">
          {#each Object.entries(todo.resources) as [id, amount]}
            <tr>
              <td class="text-right border-b border-gray-700 py-1">
                <span class={`${amount === 0 ? 'line-through text-gray-600' : 'text-white'} mr-2 whitespace-no-wrap`}>
                  {numberFormat.format(amount)}
                  <Icon size={0.5} path={mdiClose} /></span>
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
    {/each}
  </Masonry>
</div>
