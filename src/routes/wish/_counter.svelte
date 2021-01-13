<script>
  import { onMount } from 'svelte';
  import { mdiPencil, mdiStar } from '@mdi/js';
  import debounce from 'lodash/debounce';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import { readSave, updateSave, fromRemote } from '../../stores/saveManager';

  export let id = '';
  export let name = '';

  let isEdit = false;

  let total = 0;
  let legendary = 0;
  let rare = 0;

  let totalEdit = 0;
  let legendaryEdit = 0;
  let rareEdit = 0;

  $: path = `wish-counter-${id}`;
  $: if ($fromRemote) {
    readLocalData();
  }

  onMount(() => {
    readLocalData();
  });

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
    }
  }

  const saveData = debounce(() => {
    const data = JSON.stringify({
      total,
      legendary,
      rare,
    });

    updateSave(path, data);
  }, 2000);

  function add(val) {
    if (total + val < 0) return;

    total += val;

    rare += val;
    if (rare >= 10) {
      rare = 0;
    } else if (rare < 0) {
      rare = 9;
    }

    legendary += val;
    if (legendary >= 90) {
      legendary = 0;
      rare = 0;
    } else if (legendary < 0) {
      legendary = 89;
    }

    saveData();
  }

  function getLegendary() {
    total += 1;
    legendary = 0;
    rare = 0;
    saveData();
  }

  function getRare() {
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
      class={`${isEdit ? 'bg-item flex-col py-2' : 'bg-background flex-row items-center justify-center mb-2 p-4'} rounded-xl flex`}>
      <span class="text-gray-200 whitespace-no-wrap flex-1">Lifetime Pulls</span>
      {#if isEdit}
        <Input type="number" min={1} bind:value={totalEdit} />
      {:else}<span class="font-black text-3xl text-white ml-4">{total}</span>{/if}
    </div>
    <div
      class={`${isEdit ? 'bg-item flex-col py-2' : 'bg-background flex-row items-center justify-center mb-2 p-4'} rounded-xl flex`}>
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
      class={`${isEdit ? 'bg-item flex-col py-2' : 'bg-background flex-row items-center justify-center mb-2 p-4'} rounded-xl flex`}>
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
</div>
