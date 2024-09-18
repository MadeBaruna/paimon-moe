<script context="module">
  import recipeData from "../../data/recipe/en.json";
</script>
<script>
  import { locale, t } from "svelte-i18n";
  import { onMount, tick } from "svelte";
  import debounce from "lodash.debounce";
  import { mdiArrowDown, mdiArrowUp, mdiArrowRight, mdiFilter, mdiCheck, mdiClose } from "@mdi/js";

  import Check from "../../components/Check.svelte";
  import Checkbox from "../../components/Checkbox.svelte";
  import { getAccountPrefix } from "../../stores/account";
  import { readSave, updateSave, fromRemote } from "../../stores/saveManager";
  import Button from "../../components/Button.svelte";
  import Icon from "../../components/Icon.svelte";
  import Select from "../../components/Select.svelte";
  import { pushToast } from "../../stores/toast";
  import Ad from "../../components/Ad.svelte";

  let recipeContainer;

  let list = [];
  let fast = false;
  let checkList = {};
  let totalRecipe = 0;
  let missingMastery = 0;
  let obtainedRecipeCount = 0;

  let active = "0";
  let activeIndex = 0;
  let categories = [];

  let originalList = [];
  let sortedRecipes = Object.entries(recipeData);

  let showFilter = false;
  let nameFilter = "";
  let sort = false;

  const typeIcon = {
    "Revive": "revive",
    "Healing": "healing",
    "Adventurer": "adventurer",
    "ATK-Boosting": "atk_boosting",
    "DEF-Boosting": "def_boosting"
  };

  const rarityClass = {
    1: "bg-white",
    2: "bg-green-400",
    3: "bg-primary",
    4: "bg-rare-from",
    5: "bg-legendary-from"
  };

  const versions = [
    "1.0",
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "1.6",
    "2.0",
    "2.1",
    "2.2",
    "2.3",
    "2.4",
    "2.5",
    "2.6",
    "2.7",
    "2.8",
    "3.0",
    "3.1",
    "3.2",
    "3.3",
    "3.4"
  ].map(e => ({
    label: e,
    value: e
  }));
  let versionFilter = [];

  const types = [
    { label: $t("recipe.revive"), value: "Revive", image: "/images/recipe/type/revive.png" },
    { label: $t("recipe.healing"), value: "Healing", image: "/images/recipe/type/healing.png" },
    { label: $t("recipe.adventurer"), value: "Adventurer", image: "/images/recipe/type/adventurer.png" },
    { label: $t("recipe.atk-boost"), value: "ATK-Boosting", image: "/images/recipe/type/atk_boosting.png" },
    { label: $t("recipe.def-boost"), value: "DEF-Boosting", image: "/images/recipe/type/def_boosting.png" }
  ];
  let typeFilter = [];

  function parseCategories() {
    totalRecipe = 0;
    obtainedRecipeCount = 0;
    missingMastery = 0;

    categories = Object.entries(recipeData)
      .map(([id, data]) => ({
        id,
        name: data.name,
        ...data.recipes.reduce(
          (prev, recipe) => {
            if (checkList[id] === undefined) checkList[id] = {};
            if (checkList[id][recipe.id] === undefined && recipe.default) checkList[id][recipe.id] = 0;

            const obtained = checkList[id][recipe.id] !== undefined;
            const mastered = checkList[id][recipe.id] === recipe.proficiency;

            prev.total += recipe.default ? 0 : 1;
            totalRecipe += recipe.default ? 0 : 1;

            prev.obtained += obtained && !recipe.default ? 1 : 0;
            obtainedRecipeCount += obtained && !recipe.default ? 1 : 0;

            prev.missingMastery += obtained && !mastered ? 1 : 0;
            missingMastery += obtained && !mastered ? 1 : 0;

            return prev;
          },
          { obtained: 0, total: 0, missingMastery: 0 }
        )
      }));
  }

  function orderRecipe() {
    if (!sort) {
      if (originalList.length === 0) return;
      list = originalList;
      return;
    }

    originalList = list.slice();
    list = list.sort(sortRecipe);
  }

  const saveData = debounce(async () => {
    const data = checkList;
    const prefix = getAccountPrefix();
    await updateSave(`${prefix}recipe`, data);
  }, 2000);

  const search = debounce(async () => {
    if (nameFilter === "") {
      await changeCategory(active, activeIndex, true);
      return;
    }

    const query = nameFilter.toLowerCase();

    for (const recipe of recipeData[active].recipes) {
      if (!recipe.name.toLowerCase().includes(query)) continue;
      await changeCategory(active, activeIndex, false);
      return;
    }

    let index = 0;
    for (const [id, item] of sortedRecipes) {
      for (const recipe of item.recipes) {
        if (!recipe.name.toLowerCase().includes(query)) continue;
        await changeCategory(id, index, false);
        return;
      }

      index++;
    }

    await changeCategory(active, activeIndex, true);
    pushToast($t("recipe.searchError", { values: { query } }), "error");
  }, 500);

  const updateSelectFilter = debounce(() => changeCategory(active, activeIndex, true), 500);

  async function changeCategory(id, index, firstLoad) {
    active = id;
    activeIndex = index;

    const filterVersion = versionFilter.length > 0;
    const filteredVersion = versionFilter.map(e => e.value);

    let filterType = [];
    for (const e of typeFilter) filterType.push(e.value);

    const filterName = nameFilter !== "";
    const query = nameFilter.toLowerCase();

    if (checkList[active] === undefined) checkList[active] = {};

    list = recipeData[active].recipes.filter(e => {
      if (filterVersion && !filteredVersion.includes(e.ver)) return false;
      if (filterType.length > 0 && !filterType.includes(e.type)) return false;
      return !(filterName && !e.name.toLowerCase().includes(query));
    }).map(e => {
      e.mastered = checkList[active][e.id] === e.proficiency;
      e.obtained = checkList[active][e.id] !== undefined;
      e.userProf = checkList[active][e.id];
      e.topLimit = e.userProf === e.proficiency - 1;
      e.botLimit = e.userProf === 0;
      e.rarityClass = rarityClass[e.rarity];
      return e;
    });

    if (sort) {
      originalList = list.slice();
      list = list.sort(sortRecipe);
    }

    if (firstLoad) return;
    await tick();
    recipeContainer.scrollIntoView({ behavior: "smooth" });
  }

  function sortRecipe(a, b) {
    return a.mastered && b.mastered ? 0 : b.mastered ? -1 : a.mastered ? 1 : a.obtained && b.obtained ? 0 : b.obtained ? -1 : a.obtained ? 1 : 0;
  }

  function toggleOn(index) {
    set(index, fast ? list[index].proficiency : 0);
  }

  function toggleOff(index) {
    set(index, fast ? -1 : list[index].proficiency - 1);
  }

  function increment(index) {
    set(index, fast ? list[index].proficiency : list[index].userProf + 1);
  }

  function decrement(index) {
    set(index, fast ? -1 : list[index].userProf - 1);
  }

  function set(index, val) {
    let wasObtained = list[index].obtained;
    let wasMastered = list[index].mastered;
    let min = list[index].default ? 0 : undefined;

    val = val < 0 || val === undefined ? min : val;
    checkList[active][list[index].id] = val;
    list[index].userProf = val;
    list[index].botLimit = val === 0;
    list[index].topLimit = val === list[index].proficiency - 1;

    let isObtained = val !== undefined;
    let isMastered = val === list[index].proficiency;

    let cObtained = isObtained !== wasObtained;
    let cMastered = isMastered !== wasMastered;
    let oVal = isObtained ? 1 : -1;
    let mVal = isMastered ? -1 : 1;

    list[index].obtained = isObtained;
    list[index].mastered = isMastered;

    categories[activeIndex].obtained += cObtained ? oVal : 0;
    obtainedRecipeCount += cObtained ? oVal : 0;

    categories[activeIndex].missingMastery += cObtained ? cMastered ? 0 : oVal : (cMastered ? mVal : 0);
    missingMastery += cObtained ? cMastered ? 0 : oVal : (cMastered ? mVal : 0);

    saveData();
  }

  async function changeLocale(locale) {
    const data = await import(`../../data/recipe/${locale}.json`);
    recipeData = data.default;
    sortedRecipes = Object.entries(recipeData);
    await changeCategory(active, activeIndex, true);
  }

  async function readLocalData() {
    const prefix = getAccountPrefix();
    const recipeData = await readSave(`${prefix}recipe`);
    if (recipeData !== null) checkList = recipeData;
  }

  async function process() {
    await readLocalData();
    parseCategories();
    await changeCategory("0", 0, true);
  }

  onMount(async () => {
    await process();
    locale.subscribe(changeLocale);
  });

  $: if ($fromRemote) {
    console.log("update from google drive");
    process();
  }
</script>

<svelte:head>
  <title>Recipes - Paimon.moe</title>
  <meta name="description" content="Track your Genshin Impact recipe easily" />
  <meta property="og:description" content="Track your Genshin Impact recipe easily" />
</svelte:head>

<div class="flex">
  <div class="lg:ml-64 pt-20 px-4 lg:px-8 lg:pt-8 max-w-screen-xl w-full">
    <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-2 md:mb-0">
      <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('recipe.title')}</h1>
      <div class="flex space-x-2">
        <p class="text-gray-400 text-xl rounded-xl bg-black bg-opacity-50 px-2 py-1 flex items-center">
          {obtainedRecipeCount} {$t('recipe.of')} {totalRecipe} {$t('recipe.collected')}
          <img src="/images/recipe/recipe.png" class="w-7 h-7 ml-1" alt="recipe" />
        </p>
        <div class="text-gray-400 text-xl rounded-xl bg-black bg-opacity-50 px-2 py-1">
          {#if missingMastery === 0}
            <p>{$t('recipe.masteredAll')}</p>
          {:else}
            <p>{missingMastery} {$t('recipe.masteredLeft')}</p>
          {/if}
        </div>
      </div>
      <div class="flex space-x-2 items-center">
        <Button
          size="sm"
          on:click={() => {
            showFilter = !showFilter;
          }}
        >
          <Icon path={mdiFilter} color="white" />
        </Button>
        <div class="pl-4 text-white">
          <Checkbox checked={sort} on:change={() => orderRecipe(sort = !sort)}>{$t('recipe.sort')}</Checkbox>
        </div>
      </div>
    </div>
    {#if showFilter}
      <div class="mb-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div
          class="flex flex-1 relative items-center bg-background rounded-2xl h-14 focus-within:border-primary border-2 border-transparent ease-in duration-100"
          style="min-height: 3.5rem;"
        >
          <input
            placeholder={$t('recipe.search')}
            bind:value={nameFilter}
            on:input={search}
            class="pl-4 w-full min-h-full pr-4 text-white placeholder-gray-500 leading-none bg-transparent border-none focus:outline-none"
          />
        </div>
        <Select
          multiselect
          options={versions}
          bind:selected={versionFilter}
          placeholder={$t('recipe.version')}
          className="w-full md:w-40"
          on:change={updateSelectFilter}
        />
        <Select
          multiselect
          image={true}
          options={types}
          bind:selected={typeFilter}
          placeholder={$t('recipe.type')}
          className="w-full md:w-56"
          on:change={updateSelectFilter}
        />
      </div>
    {/if}
    <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
      <div class="flex flex-col space-y-2 lg:h-screen lg:overflow-auto lg:sticky lg:pr-1 pb-4 category">
        {#each categories as category, index (category.id)}
          <div
            class="rounded-xl p-2 cursor-pointer flex flex-col {category.id === active ? 'bg-primary' : 'bg-item'}"
            on:click={() => changeCategory(category.id, index)}
          >
            <p class="font-semibold {category.id === active ? 'text-black' : 'text-white'}">{category.name}</p>
            <div class="flex">
              <p class="flex-1 {category.id === active ? 'text-gray-900' : 'text-gray-400'}">
                {category.obtained}/{category.total}
              </p>
              <p class={category.id === active ? 'text-gray-900' : 'text-gray-400'}>
                {category.missingMastery}
              </p>
              <img src="/images/wish.png" class="w-6 h-6 ml-1" alt="wish" />
            </div>
          </div>
        {/each}
        <div>
          <div class="mt-5 text-white flex justify-center">
            {$t('recipe.fastEdit')}
            <Icon className="mx-2" size={1} path={mdiArrowRight} />
            <Checkbox checked={fast} on:change={() => fast = !fast}></Checkbox>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-2 flex-1 lg:pt-2" bind:this={recipeContainer}>
        {#each list as el, index}
          <div class="bg-item rounded-xl px-1 py-1 text-white">
            <div class="flex items-center">
              <div class="bg-opacity-50 rounded-xl overflow-hidden {el.rarityClass}">
                <img width="56" height="56" src="/images/recipe/food/{el.id}.png" alt={el.id} loading="lazy" />
              </div>
              <div class="flex-1 pr-1 pl-2">
                <p class="font-semibold">
                  <img class="w-6 inline-block" src="/images/recipe/type/{typeIcon[el.type]}.png" alt={el.type} loading="lazy" />
                  {el.name}
                  <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                    {el.ver}
                  </span>
                  {#if el.default}
                    <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                      {$t("recipe.default")}
                    </span>
                  {/if}
                </p>
                <p class="text-gray-400">{el.location}</p>
              </div>
              <div class="flex items-center">
                {#if el.userProf === undefined}
                  <p class="mr-1">{$t("recipe.missing")}</p>
                  <Check checked={el.obtained} on:change={() => toggleOn(index)} inverted />
                {:else if el.mastered}
                  <Check checked={el.obtained} on:change={() => toggleOff(index)} inverted />
                {:else}
                  <p class="mr-1">{$t("recipe.proficiency")}: {el.userProf}/{el.proficiency}</p>
                  <div class="ml-3 mr-1">
                    <Button color={el.topLimit ? 'green' : 'blue'} on:click={() => increment(index)} size="sm">
                      <Icon size={1} path={el.topLimit ? mdiCheck : mdiArrowUp} />
                    </Button>
                    <Button disabled="{el.default && el.botLimit}" color={!el.default && el.botLimit ? 'red' : 'blue'} checked={el.obtained} on:click={() => decrement(index)} size="sm">
                      <Icon size={1} path={el.botLimit ? mdiClose : mdiArrowDown} />
                    </Button>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="fixed top-0 right-0 m-8">
    <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
  </div>
</div>
<Ad type="desktop" variant="lb" id="2" />
<Ad type="mobile" variant="lb" id="1" />

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
            min-width: 20rem;
            width: 20rem;
            top: 0;
            padding-top: 8px;
        }
    }
</style>
