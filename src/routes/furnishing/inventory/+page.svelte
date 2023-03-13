<script context="module">
  import dataJson from '../../data/furnishing/en.json';
  import categoriesJson from '../../data/furnishing/category/en.json';
</script>

<script>
  import { locale, t } from 'svelte-i18n';
  import { onMount, tick } from 'svelte';
  import { mdiMinus, mdiPlus } from '@mdi/js';
  import debounce from 'lodash.debounce';
  import Icon from '../../components/Icon.svelte';
  import { readSave, updateSave } from '../../stores/saveManager';
  import { getAccountPrefix } from '../../stores/account';
  import Button from '../../components/Button.svelte';

  let data = dataJson;
  let categories = categoriesJson;

  let loading = true;
  let active = {
    name: 'all',
    type: 'all',
  };
  let inventoryContainer;
  let categoryList = [];
  let categoryData = {
    'all-all': {
      items: [],
      count: {},
    },
  };
  let saved = {};

  async function parseFurnishing() {
    categoryList = categories;

    categoryData = {
      'all-all': {
        items: [],
        count: {},
      },
    };

    for (const category of categories) {
      const categoryId = `${category.category}-${category.type}`;
      categoryData[categoryId] = {
        items: [],
        count: {},
      };
    }

    for (const item of Object.values(data)) {
      if (item.category.category === 'Companion') continue;

      if (item.category.type !== '') {
        const categoryId = `${item.category.category}-${item.category.type}`;
        categoryData[categoryId].items.push(item);
        categoryData['all-all'].items.push(item);
        if (saved[item.id] && saved[item.id] > 0) {
          categoryData[categoryId].count[item.id] = true;
          categoryData['all-all'].count[item.id] = true;
        }
      } else {
        const categoryIdEx = `${item.category.category}-exterior`;
        const categoryIdIn = `${item.category.category}-interior`;

        categoryData[categoryIdEx]?.items.push(item);
        categoryData[categoryIdIn]?.items.push(item);
        categoryData['all-all'].items.push(item);
        if (saved[item.id] && saved[item.id] > 0) {
          if (categoryData[categoryIdEx]) categoryData[categoryIdEx].count[item.id] = true;
          if (categoryData[categoryIdIn]) categoryData[categoryIdIn].count[item.id] = true;
          categoryData['all-all'].count[item.id] = true;
        }
      }
    }

    loading = false;
  }

  async function changeCategory(category) {
    active = category;
    await tick();
    inventoryContainer.scrollIntoView({
      behavior: 'smooth',
    });
  }

  async function readLocalData() {
    const prefix = getAccountPrefix();
    const savedIventory = await readSave(`${prefix}furnishing-inventory`);
    if (savedIventory !== null) {
      saved = savedIventory;
    }
  }

  const saveData = debounce(async () => {
    const prefix = getAccountPrefix();
    await updateSave(`${prefix}furnishing-inventory`, saved);
  }, 1000);

  function changeItemValue(id, val) {
    saved[id] = Math.max(0, val);
    if (saved[id] === 0) {
      delete categoryData[`${active.name}-${active.type}`].count[id];
      categoryData = categoryData;
    } else {
      categoryData[`${active.name}-${active.type}`].count[id] = true;
    }
    saveData();
  }

  async function changeLocale(locale) {
    categories = (await import(`../../data/furnishing/category/${locale}.json`)).default;
    data = (await import(`../../data/furnishing/${locale}.json`)).default;
    parseFurnishing();
  }

  onMount(async () => {
    await readLocalData();

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
</script>

<svelte:head>
  <title>Furnishing Inventory - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Furnishing list with the load and energy values" />
  <meta property="og:description" content="Genshin Impact Furnishing list with the load and energy values" />
</svelte:head>
<div class="lg:ml-64 pt-20 px-4 lg:px-8 lg:pt-8 max-w-screen-xl">
  <div class="flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
    <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('furnishing.inventory.title')}</h1>
    <a href="/furnishing">
      <Button>{$t('furnishing.inventory.openSets')}</Button>
    </a>
  </div>
  {#if loading}
    <p class="text-white">Loading...</p>
  {:else}
    <p class="text-gray-400 font-medium pb-2">
      ※ {$t('furnishing.inventory.subtitle')}
    </p>

    <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 mt-4 md:mt-0">
      <div class="flex flex-col space-y-2 lg:h-screen lg:overflow-auto lg:sticky lg:pr-1 pb-4 category">
        <div
          on:click={() => changeCategory({ name: 'all', type: 'all' })}
          class="rounded-xl p-2 cursor-pointer flex text-white {active.name === 'all' ? 'bg-primary' : 'bg-item'}"
        >
          <p class="flex-1">{$t('furnishing.inventory.all')}</p>
          <!-- <p class={Object.keys(categoryData['all-all'].count).length === 0 ? 'text-gray-600' : 'text-white'}>
            {Object.keys(categoryData['all-all'].count).length}
          </p> -->
        </div>
        {#each categoryList as category (`${category.category}-${category.type}`)}
          {#if categoryData[`${category.category}-${category.type}`].items.length > 0}
            <div
              on:click={() => changeCategory({ name: category.category, type: category.type })}
              class="rounded-xl p-2 cursor-pointer flex text-white {category.category === active.name &&
              category.type === active.type
                ? 'bg-primary'
                : 'bg-item'}"
            >
              <p class="flex-1">{category.name}</p>
              <p
                class={Object.keys(categoryData[`${category.category}-${category.type}`].count).length === 0
                  ? 'text-gray-600'
                  : 'text-white'}
              >
                {Object.keys(categoryData[`${category.category}-${category.type}`].count).length}
              </p>
            </div>
          {/if}
        {/each}
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 flex-1 pt-20 lg:pt-2"
        style="height: max-content;"
        bind:this={inventoryContainer}
      >
        {#each categoryData[`${active.name}-${active.type}`].items as item (item.id)}
          <div class="text-white p-2 rounded-xl flex bg-item">
            <div class="h-16 w-16 flex items-center justify-center">
              <img
                src="/images/furnishing/{item.id}.png"
                alt=""
                class="h-16 w-16 image relative"
                style="min-width: 4rem;"
                loading="lazy"
              />
            </div>
            <div class="ml-2 flex flex-col">
              <p class="text-sm flex-1">
                {item.name}
              </p>
              <div class="flex items-center bg-black bg-opacity-25 rounded-md" style="width: max-content;">
                <button class="hover:text-primary" on:click={() => changeItemValue(item.id, (saved[item.id] || 0) + 1)}>
                  <Icon path={mdiPlus} />
                </button>
                <input
                  type="number"
                  value={saved[item.id] || 0}
                  on:change={(e) => changeItemValue(item.id, e.target.value)}
                  class="bg-transparent w-12 text-center {(saved[item.id] || 0) > 0 ? 'text-white' : 'text-gray-600'}"
                />
                <button class="hover:text-primary" on:click={() => changeItemValue(item.id, (saved[item.id] || 0) - 1)}>
                  <Icon path={mdiMinus} />
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .category {
    width: 100%;
  }

  @screen lg {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      @apply bg-transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.35);
      @apply rounded-xl;
    }

    .category {
      min-width: 15rem;
      width: 15rem;
      top: 0px;
      padding-top: 8px;
    }
  }

  .image[alt]:after {
    @apply block absolute top-0 left-0 w-full h-full bg-item;
    content: '';
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>
