<script>
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';

  import Select from '../components/Select.svelte';
  import CharacterSelect from '../components/CharacterSelect.svelte';
  import WeaponSelect from '../components/WeaponSelect.svelte';
  import Input from '../components/Input.svelte';
  import Button from './Button.svelte';
  import { weaponList } from '../data/weaponList';
  import { characters } from '../data/characters';

  export let addPullDetail = () => {};
  export let editPullDetail = () => {};
  export let deletePullDetail = () => {};
  export let pity;
  export let skip;

  export let isEdit = false;
  export let editType = '';
  export let editName = '';
  export let editTime = '';

  let selectOptions = [
    { label: 'Character', value: 'character' },
    { label: 'Weapon', value: 'weapon' },
  ];
  let type;
  let name;
  let time = dayjs().format('YYYY-MM-DDTHH:mm:ss');

  onMount(() => {
    if (!isEdit) return;
    if (editType === 'unknown_3_star') return;

    type = selectOptions.find((e) => e.value === editType);

    if (editType === 'character') {
      name = characters[editName];
    } else {
      name = weaponList[editName];
    }

    time = dayjs(editTime).format('YYYY-MM-DDTHH:mm:ss');
  });

  function add() {
    const pull = {
      type: type.value,
      id: name.id,
      time: dayjs(time).format('YYYY-MM-DD HH:mm:ss'),
      pity,
      manualInput: true,
    };

    addPullDetail(pull);
  }

  function edit() {
    const pull = {
      type: type.value,
      id: name.id,
      time: dayjs(time).format('YYYY-MM-DD HH:mm:ss'),
      pity,
      manualInput: true,
    };

    editPullDetail(pull);
  }

  function deleteDetail() {
    deletePullDetail();
  }

  $: disabled = !name || !time;
</script>

<div class="text-white">
  <p class="font-display font-bold mb-4">Add Pull Detail</p>
  <Select options={selectOptions} bind:selected={type} placeholder="Select Type..." />
  <div class="h-4" />
  {#if type && type.value === 'weapon'}
    <WeaponSelect bind:selected={name} />
  {:else}
    <CharacterSelect bind:selected={name} />
  {/if}
  <div class="h-4" />
  <Input type="datetime-local" step="1" max="9999-12-31T23:59:59" bind:value={time} />
  <div class="h-4" />
  <div class="flex items-center">
    <p class="ml-4 mr-4">At Pity:</p>
    <Input type="number" min="1" bind:value={pity} />
  </div>
  {#if isEdit}
    <div class="flex mt-32">
      <div class="flex-1 flex mr-2 items-end">
        <Button className="flex-1" on:click={skip}>Cancel</Button>
      </div>
      <div class="flex-1 flex flex-col ml-2">
        <Button className="flex-1" color="red" on:click={deleteDetail}>Delete</Button>
        <Button className="flex-1 mt-2" {disabled} on:click={edit}>Save</Button>
      </div>
    </div>
  {:else}
    <div class="flex mt-32">
      <Button className="flex-1 mr-2" color="red" on:click={skip}>Skip</Button>
      <Button className="flex-1 ml-2" {disabled} on:click={add}>Add</Button>
    </div>
  {/if}
</div>
