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

  let isEdit = false;
  let isDetailOpen = false;

  let total = 0;
  let legendary = 0;
  let rare = 0;
  let pulls = [];

  let totalEdit = 0;
  let legendaryEdit = 0;
  let rareEdit = 0;

  $: path = `wish-counter-${id}`;
  $: if ($fromRemote) {
    readLocalData();
  }
  $: sortedPull = pulls.sort((a, b) => b.time - a.time);

  onMount(() => {
    readLocalData();
  });

  function toggleDetail() {
    isDetailOpen = !isDetailOpen;
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

  function readLocalData() {
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

    rare += val;
    if (rare >= 10) {
      openAddModal(rare);
      rare = 0;
    } else if (rare < 0) {
      rare = 9;
    }

    legendary += val;
    if (legendary >= 90) {
      openAddModal(legendary);
      legendary = 0;
      rare = 0;
    } else if (legendary < 0) {
      legendary = 89;
    }

    saveData();
  }

  function getLegendary() {
    openAddModal(legendary);

    total += 1;
    legendary = 0;
    rare = 0;
    saveData();
  }

  function getRare() {
    openAddModal(rare);

    total += 1;
    legendary += 1;
    rare = 0;
    saveData();
  }
</script>

<div class="bg-item rounded-xl p-4 inline-flex flex-col w-full">
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
        <br /><span class="text-gray-600">Guaranteed at 90</span>
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
  {#if isDetailOpen}
    <div transition:slide class="mt-4 text-white">
      <table class="w-full">
        <tr>
          <th class="border-b border-gray-700 text-left pl-2">Name</th>
          <th class="border-b border-gray-700 text-left pl-2">Time</th>
          <th class="border-b border-gray-700 text-center">Pity</th>
        </tr>
        {#each sortedPull as pull, index}
          <tr on:click={() => openEditModal(index, pull.type, pull.id, pull.time, pull.pity)}>
            {#if pull.type === 'character'}
              <td
                class={`border-b border-gray-700 py-1 pl-2 font-semibold ${
                  characters[pull.id].rarity === 5 ? 'text-legendary-from' : 'text-rare-from'
                }`}>{characters[pull.id].name}</td
              >
            {:else}
              <td
                class={`border-b border-gray-700 py-1 pl-2 font-semibold ${
                  weaponList[pull.id].rarity === 5 ? 'text-legendary-from' : 'text-rare-from'
                }`}>{weaponList[pull.id].name}</td
              >
            {/if}
            <td class="border-b border-gray-700 py-1 px-2">{dayjs.unix(pull.time).format('YYYY-MM-DD HH:mm')}</td>
            <td class="text-center border-b border-gray-700 py-1">{pull.pity}</td>
          </tr>
        {/each}
      </table>
      <div class="mt-4 flex justify-end">
        <div class="bg-background rounded-xl px-4 mr-2 flex items-center">
          <span>Click the list to edit or delete</span>
        </div>
        <Button size="sm" className="w-16" on:click={() => openAddModal(0)}>Add</Button>
      </div>
    </div>
  {/if}
  <div class="flex justify-center items-end h-8 mt-2" on:click={toggleDetail}>
    <Icon
      path={mdiChevronDown}
      color="white"
      className={`duration-100 ease-in ${isDetailOpen ? 'transform rotate-180' : ''}`}
    />
  </div>
</div>
