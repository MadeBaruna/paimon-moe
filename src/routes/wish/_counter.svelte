<script>
  import { mdiStar } from '@mdi/js';
  import { onMount } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  export let id = '';
  export let name = '';
  let total = 0;
  let legendary = 0;
  let rare = 0;

  $: path = `wish-counter-${id}`;

  onMount(() => {
    readLocalData();
  });

  function readLocalData() {
    const data = localStorage.getItem(path);
    if (data !== null) {
      const counterData = JSON.parse(data);
      total = counterData.total;
      legendary = counterData.legendary;
      rare = counterData.rare;
    }
  }

  function saveData() {
    const data = JSON.stringify({
      total,
      legendary,
      rare,
    });
    localStorage.setItem(path, data);
  }

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
  <h2 class="font-display font-bold text-2xl text-white mb-2">{name}</h2>
  <div class="flex flex-col w-full">
    <div class="bg-background rounded-xl p-4 flex flex-row items-center justify-center mb-2">
      <span class="text-gray-200 whitespace-no-wrap flex-1">Lifetime Pulls</span>
      <span class="font-black text-3xl text-white ml-4">{total}</span>
    </div>
    <div class="bg-background rounded-xl p-4 flex flex-row items-center justify-center mb-2">
      <span class="text-gray-200 whitespace-no-wrap flex-1">
        5
        <Icon path={mdiStar} size={0.75} className="mb-1" />
        Pity
        <br /><span class="text-gray-600">Guaranteed at 90</span>
      </span>
      <span class="font-black text-3xl text-legendary-from ml-4">{legendary}</span>
    </div>
    <div class="bg-background rounded-xl p-4 flex flex-row items-center justify-center">
      <span class="text-gray-200 whitespace-no-wrap flex-1">
        4
        <Icon path={mdiStar} size={0.75} className="mb-1" />
        Pity
        <br /><span class="text-gray-600">Guaranteed at 10</span>
      </span>
      <span class="font-black text-3xl text-rare-from ml-4">{rare}</span>
    </div>
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
  </div>
</div>
