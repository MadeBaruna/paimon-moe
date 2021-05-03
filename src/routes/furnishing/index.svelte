<script context="module">
  import data from '../../data/furnishing/en.json';
  export async function preload() {
    return { data };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { locale, t } from 'svelte-i18n';
  import debounce from 'lodash/debounce';
  import { mdiInformationOutline, mdiMinus, mdiPlus } from '@mdi/js';

  import TableHeader from '../../components/Table/TableHeader.svelte';
  import Icon from '../../components/Icon.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';

  export let data;

  let type = 'interior';
  let items = [];
  let max = 0;

  const maxLoad = {
    exterior: 4500,
    interior: 2000,
  };
  let currentUsage = {
    interior: {},
    exterior: {},
  };
  $: currentLoad = Object.entries(currentUsage[type]).reduce((prev, [id, val]) => {
    prev += data[id].load * val;
    return prev;
  }, 0);

  let sortBy = 'ratio';
  let sortOrder = false;

  async function parseFurnishing() {
    items = Object.values(data)
      .filter((e) => e.type === type || e.type === '')
      .sort((a, b) => {
        switch (sortBy) {
          case 'ratio':
            if (sortOrder) return a.ratio - b.ratio;
            else return b.ratio - a.ratio;
          case 'energy':
            if (sortOrder) return a.energy - b.energy;
            else return b.energy - a.energy;
          case 'load':
            if (sortOrder) return a.load - b.load;
            else return b.load - a.load;
          case 'using':
            if (sortOrder) return (currentUsage[type][a.id] || 0) - (currentUsage[type][b.id] || 0);
            else return (currentUsage[type][b.id] || 0) - (currentUsage[type][a.id] || 0);
          case 'name':
            if (sortOrder) return a.name.localeCompare(b.name);
            else return b.name.localeCompare(a.name);
        }
      });
  }

  function sort(by) {
    if (sortBy === by) {
      sortOrder = !sortOrder;
    } else {
      sortBy = by;
    }
    parseFurnishing();
  }

  function changeType(_type) {
    type = _type;
    sortBy = 'ratio';
    sortOrder = false;
    parseFurnishing();
    max = items[0].ratio;
  }

  function changeUsage(id, val) {
    if (currentUsage[type][id] === undefined) currentUsage[type][id] = 0;
    currentUsage[type][id] = Math.max(0, currentUsage[type][id] + val);
    if (currentUsage[type][id] === 0) delete currentUsage[type][id];
    saveData();
  }

  async function changeLocale(locale) {
    data = (await import(`../../data/furnishing/${locale}.json`)).default;
    parseFurnishing();
  }

  function calculateColor(percentage) {
    const hue = (percentage / max) * 120;
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  function calculateColorLoad(percentage) {
    const hue = Math.max((1 - percentage) * 120, 0);
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  const saveData = debounce(() => {
    const data = JSON.stringify(currentUsage);

    const prefix = getAccountPrefix();
    updateSave(`${prefix}furnishing`, data);
  }, 2000);

  function readLocalData() {
    const prefix = getAccountPrefix();
    const furnishingData = readSave(`${prefix}furnishing`);
    if (furnishingData !== null) {
      currentUsage = JSON.parse(furnishingData);
    }
  }

  onMount(() => {
    parseFurnishing();
    max = items[0].ratio;
    readLocalData();

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
</script>

<svelte:head>
  <title>Furnishing - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Furnishing list with the load and energy values" />
  <meta property="og:description" content="Genshin Impact Furnishing list with the load and energy values" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:px-8 lg:pt-8 max-w-screen-xl">
  <div class="px-4 flex md:space-x-2 items-start md:items-center flex-col md:flex-row">
    <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('furnishing.title')}</h1>
    <div
      class="rounded-2xl border-2 border-white border-opacity-25 text-white px-4 py-2 group relative"
      style={calculateColorLoad(currentLoad / maxLoad[type])}
    >
      <Icon path={mdiInformationOutline} />
      {$t('furnishing.load')}
      {currentLoad} / {maxLoad[type]}
      <div
        class="hidden group-hover:block absolute left-0 transform translate-y-full 
        bg-white rounded-xl z-50 text-gray-900 px-4 py-2 w-screen max-w-xs md:max-w-sm"
        style="bottom: -10px;"
      >
        <p>{$t('furnishing.info.0')}</p>
        <p>{$t('furnishing.info.1')}</p>
      </div>
    </div>
  </div>
  <div class="px-4 flex space-x-2 mt-2 mb-4">
    <button on:click={() => changeType('interior')} class="pill {type === 'interior' ? 'active' : ''}"
      >{$t('furnishing.interior')}</button
    >
    <button on:click={() => changeType('exterior')} class="pill {type === 'exterior' ? 'active' : ''}"
      >{$t('furnishing.exterior')}</button
    >
  </div>
  <div class="flex mt-4 wrapper">
    <div class="block overflow-x-auto xl:overflow-x-visible whitespace-no-wrap">
      <div class="px-4 table">
        <table class="w-full block pl-4 pr-4 py-2 md:pl-8 md:py-4 bg-item rounded-xl">
          <tr>
            <th />
            <TableHeader
              className="sticky top-0 bg-item z-30"
              on:click={() => sort('name')}
              sort={sortBy === 'name'}
              order={sortOrder}
              align="left"
            >
              {$t('furnishing.name')}
            </TableHeader>
            <TableHeader
              className="sticky top-0 bg-item z-30"
              on:click={() => sort('energy')}
              sort={sortBy === 'energy'}
              order={sortOrder}
              align="center"
            >
              {$t('furnishing.energy')}
            </TableHeader>
            <TableHeader
              className="sticky top-0 bg-item z-30"
              on:click={() => sort('load')}
              sort={sortBy === 'load'}
              order={sortOrder}
              align="center"
            >
              {$t('furnishing.load')}
            </TableHeader>
            <TableHeader
              className="sticky top-0 bg-item z-30"
              on:click={() => sort('ratio')}
              sort={sortBy === 'ratio'}
              order={sortOrder}
              align="center"
            >
              {$t('furnishing.ratio')}
            </TableHeader>
            <TableHeader
              className="sticky top-0 bg-item z-30"
              on:click={() => sort('using')}
              sort={sortBy === 'using'}
              order={sortOrder}
              align="center"
            >
              {$t('furnishing.using')}
            </TableHeader>
          </tr>
          {#each items as item (item.id)}
            <tr>
              <td class="pr-4 h-12">
                <img
                  src="/images/furnishing/{item.id}.png"
                  alt=""
                  class="h-12 w-12 image relative"
                  style="min-width: 3rem;"
                />
              </td>
              <td class="px-4 text-gray-200">{item.name}</td>
              <td class="px-4 text-gray-200 text-center">{item.energy}</td>
              <td class="px-4 text-gray-200 text-center">{item.load}</td>
              <td class="px-4 text-gray-200 text-center" style={calculateColor(item.ratio)}>{item.ratio.toFixed(2)}</td>
              <td class="px-4">
                <div
                  class="flex justify-between items-center border-2 border-white border-opacity-25 rounded-xl text-gray-200"
                >
                  <button class="hover:text-primary" on:click={() => changeUsage(item.id, 1)}>
                    <Icon path={mdiPlus} />
                  </button>
                  <p class="h-full text-gray-200 px-2">{currentUsage[type][item.id] || 0}</p>
                  <button class="hover:text-primary" on:click={() => changeUsage(item.id, -1)}>
                    <Icon path={mdiMinus} />
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </table>
      </div>
    </div>
  </div>
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
    }
  }

  .image[alt]:after {
    @apply block absolute top-0 left-0 w-full h-full bg-item;
    content: '';
  }
</style>
