<script>
  import { onMount, getContext } from 'svelte';
  import { slide } from 'svelte/transition';
  import { mdiPencil, mdiStar, mdiChevronDown } from '@mdi/js';
  import debounce from 'lodash/debounce';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import AddModal from '../../components/WishCounterAddModal.svelte';

  import { readSave, updateSave, fromRemote } from '../../stores/saveManager';
  import { characters } from '../../data/characters';
  import dayjs from 'dayjs';
  import { weaponList } from '../../data/weaponList';

  export let id = '';
  export let name = '';
  export let legendaryPity = 90;

  let isEdit = false;
  let isDetailOpen = false;

  let total = 0;
  let legendary = 0;
  let rare = 0;
  let pulls = [];

  let totalEdit = 0;
  let legendaryEdit = 0;
  let rareEdit = 0;

  let showRarity = [true, true, false];

  $: path = `wish-counter-${id}`;
  $: if ($fromRemote) {
    readLocalData();
  }
  $: sortedPull = pulls
    .filter((e) => {
      if (e.type === 'character') {
        return showRarity[5 - characters[e.id].rarity];
      } else if (e.type === 'weapon') {
        return showRarity[5 - weaponList[e.id].rarity];
      }
    })
    .sort((a, b) => b.time - a.time);

  onMount(() => {
    readLocalData();
  });

  function toggleDetail() {
    isDetailOpen = !isDetailOpen;
  }

  function toggleShowRarity(index) {
    showRarity[index] = !showRarity[index];
  }

  function openAddModal(pity) {
    openModal(
      AddModal,
      {
        pity,
        skip: closeModal,
        addPullDetail,
      },
      {
        closeButton: false,
        closeOnOuterClick: false,
        styleWindow: { background: '#25294A', width: '400px' },
      },
    );
  }

  function openEditModal(index, type, name, time, pity) {
    openModal(
      AddModal,
      {
        isEdit: true,
        editType: type,
        editName: name,
        editTime: time,
        pity,
        skip: closeModal,
        editPullDetail: (pull) => editPullDetail(index, pull),
        deletePullDetail: () => deletePullDetail(index),
      },
      {
        closeButton: false,
        closeOnOuterClick: false,
        styleWindow: { background: '#25294A', width: '400px' },
      },
    );
  }

  function addPullDetail(newPull) {
    pulls = [...pulls, newPull];
    closeModal();
    saveData();
  }

  function editPullDetail(index, updatePull) {
    const updated = sortedPull;
    updated[index] = updatePull;
    pulls = updated;

    closeModal();
    saveData();
  }

  function deletePullDetail(index) {
    sortedPull.splice(index, 1);
    pulls = sortedPull;

    closeModal();
    saveData();
  }

  function toggleEdit() {
    isEdit = !isEdit;
    if (isEdit) {
      totalEdit = total;
      legendaryEdit = legendary;
      rareEdit = rare;
    }
  }

  function saveEdit() {
    total = totalEdit;
    legendary = legendaryEdit;
    rare = rareEdit;
    saveData();

    isEdit = false;
  }

  export function readLocalData() {
    console.log('wish read local');
    const data = readSave(path);
    if (data !== null) {
      const counterData = JSON.parse(data);
      total = counterData.total;
      legendary = counterData.legendary;
      rare = counterData.rare;
      pulls = counterData.pulls || [];
    }
  }

  const saveData = debounce(() => {
    const data = JSON.stringify({
      total,
      legendary,
      rare,
      pulls,
    });

    updateSave(path, data);
  }, 2000);

  function add(val) {
    if (total + val < 0) return;

    total += val;

    legendary += val;
    let filler = val;
    if (legendary >= legendaryPity) {
      openAddModal(Math.min(rare, legendaryPity));
      legendary = 0;
      rare = 0;
      filler--;
    } else if (legendary < 0) {
      legendary = 89;
    } else {
      rare += val;
      if (rare >= 10) {
        openAddModal(Math.min(rare, 10));
        rare = 0;
        filler--;
      } else if (rare < 0) {
        rare = 9;
      }
    }

    if (filler > 0) {
      pulls = [
        ...pulls,
        ...[...new Array(filler)].map((e) => ({
          type: 'unknown_3_star',
          id: 'unknown_3_star',
          time: dayjs().unix(),
          pity: 1,
        })),
      ];
    }

    if (val < 0) {
      const cloned = [...pulls];
      cloned.pop();
      pulls = cloned;
    }

    saveData();
  }

  function getLegendary() {
    openAddModal(legendary + 1);

    total += 1;
    legendary = 0;
    rare = 0;
    saveData();
  }

  function getRare() {
    openAddModal(rare + 1);

    total += 1;
    legendary += 1;
    rare = 0;
    saveData();
  }
</script>

<div class="bg-item rounded-xl p-4 inline-flex flex-col w-full" style="height: min-content;">
  <div class="flex justify-between mb-2">
    <h2 class="font-display font-bold text-2xl text-white">{name}</h2>
    <Button size="sm" on:click={toggleEdit}>
      <Icon path={mdiPencil} color="white" />
    </Button>
  </div>
  <div class="flex flex-col w-full">
    <div
      class={`${
        isEdit ? 'bg-item flex-col py-2' : 'bg-background flex-row items-center justify-center mb-2 p-4'
      } rounded-xl flex`}
    >
      <span class="text-gray-200 whitespace-no-wrap flex-1">Lifetime Pulls</span>
      {#if isEdit}
        <Input type="number" min={1} bind:value={totalEdit} />
      {:else}<span class="font-black text-3xl text-white ml-4">{total}</span>{/if}
    </div>
    <div
      class={`${
        isEdit ? 'bg-item flex-col py-2' : 'bg-background flex-row items-center justify-center mb-2 p-4'
      } rounded-xl flex`}
    >
      <span class="text-gray-200 whitespace-no-wrap flex-1">
        5
        <Icon path={mdiStar} size={0.75} className="mb-1" />
        Pity
        <br /><span class="text-gray-600">Guaranteed at {legendaryPity}</span>
      </span>
      {#if isEdit}
        <Input type="number" min={1} bind:value={legendaryEdit} />
      {:else}<span class="font-black text-3xl text-legendary-from ml-4">{legendary}</span>{/if}
    </div>
    <div
      class={`${
        isEdit ? 'bg-item flex-col py-2' : 'bg-background flex-row items-center justify-center mb-2 p-4'
      } rounded-xl flex`}
    >
      <span class="text-gray-200 whitespace-no-wrap flex-1">
        4
        <Icon path={mdiStar} size={0.75} className="mb-1" />
        Pity
        <br /><span class="text-gray-600">Guaranteed at 10</span>
      </span>
      {#if isEdit}
        <Input type="number" min={1} bind:value={rareEdit} />
      {:else}<span class="font-black text-3xl text-rare-from ml-4">{rare}</span>{/if}
    </div>
    {#if isEdit}
      <Button on:click={saveEdit} className="mt-4">Save</Button>
    {:else}
      <div class="flex gap-2 mt-2">
        <Button on:click={getLegendary} className="flex-1">
          Get 5
          <Icon path={mdiStar} size={0.75} className="mb-1" />
        </Button>
        <Button on:click={getRare} className="flex-1">
          Get 4
          <Icon path={mdiStar} size={0.75} className="mb-1" />
        </Button>
      </div>
      <div class="flex gap-2 mt-2">
        <Button on:click={() => add(1)} className="flex-1">+1</Button>
        <Button on:click={() => add(10)} className="flex-1">+10</Button>
        <Button on:click={() => add(-1)} className="flex-1">-1</Button>
      </div>
    {/if}
  </div>
  <div class="flex justify-center items-end h-8 mt-2 cursor-pointer" on:click={toggleDetail}>
    <Icon
      path={mdiChevronDown}
      color="white"
      className={`duration-100 ease-in ${isDetailOpen ? 'transform rotate-180' : ''}`}
    />
  </div>
  {#if isDetailOpen}
    <div transition:slide class="mt-4 text-white">
      <div class="mb-2 flex justify-end">
        <div class="bg-background rounded-xl w-full px-4 mr-2 flex items-center">
          <span>Click the list to edit or delete</span>
        </div>
        <Button size="sm" className="w-16" on:click={() => openAddModal(0)}>Add</Button>
      </div>
      <div class="flex">
        <button on:click={() => toggleShowRarity(0)} class={`pill legendary ${showRarity[0] ? 'active' : ''}`}>
          5 <Icon path={mdiStar} size={0.75} className="mb-1" />
        </button>
        <button on:click={() => toggleShowRarity(1)} class={`pill rare ${showRarity[1] ? 'active' : ''}`}>
          4 <Icon path={mdiStar} size={0.75} className="mb-1" />
        </button>
        <button on:click={() => toggleShowRarity(2)} class={`pill normal ${showRarity[2] ? 'active' : ''}`}>
          3 <Icon path={mdiStar} size={0.75} className="mb-1" />
        </button>
      </div>
      <table class="w-full">
        <tr>
          <th class="border-b border-gray-700 text-gray-400 font-display text-left pl-2">Name</th>
          <th class="border-b border-gray-700 text-gray-400 font-display text-left pl-2">Time</th>
          <th class="border-b border-gray-700 text-gray-400 font-display text-right">Pity</th>
        </tr>
        {#each sortedPull as pull, index}
          <tr on:click={() => openEditModal(index, pull.type, pull.id, pull.time, pull.pity)}>
            {#if pull.type === 'character'}
              <td
                class={`border-b border-gray-700 py-1 pl-2 font-semibold ${
                  characters[pull.id].rarity === 5
                    ? 'text-legendary-from'
                    : characters[pull.id].rarity === 4
                    ? 'text-rare-from'
                    : 'text-primary'
                }`}>{characters[pull.id].name}</td
              >
            {:else if pull.type === 'weapon'}
              <td
                class={`border-b border-gray-700 py-1 pl-2 font-semibold ${
                  weaponList[pull.id].rarity === 5
                    ? 'text-legendary-from'
                    : weaponList[pull.id].rarity === 4
                    ? 'text-rare-from'
                    : 'text-primary'
                }`}>{weaponList[pull.id].name}</td
              >
            {/if}
            <td class="border-b border-gray-700 text-sm py-1 px-2 whitespace-no-wrap" style="font-family: monospace;"
              >{dayjs.unix(pull.time).format('YYYY-MM-DD HH:mm:ss')}</td
            >
            <td class="text-right border-b border-gray-700 py-1">{pull.pity}</td>
          </tr>
        {/each}
      </table>
    </div>
  {/if}
</div>

<style>
  .pill {
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
    @apply mr-2;
    @apply mb-2;
    @apply outline-none;
    @apply transition;
    @apply duration-100;

    &:hover {
      @apply border-primary;
    }

    &.active {
      @apply bg-primary;
      @apply border-primary;
      @apply text-background;

      &.legendary {
        @apply bg-legendary-from;
        @apply border-legendary-from;
      }

      &.rare {
        @apply bg-rare-from;
        @apply border-rare-from;
      }
    }
  }
</style>
