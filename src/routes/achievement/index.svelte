<script context="module">
  import achievementData from '../../data/achievement/en.json';
</script>

<script>
  import { locale, t } from 'svelte-i18n';
  import { onMount, tick } from 'svelte';
  import debounce from 'lodash.debounce';
  import { mdiFilter, mdiOpenInNew } from '@mdi/js';

  import Check from '../../components/Check.svelte';
  import Checkbox from '../../components/Checkbox.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave, fromRemote } from '../../stores/saveManager';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Select from '../../components/Select.svelte';
  import VersionSelect from './_VersionSelect.svelte';
  import { pushToast } from '../../stores/toast';
  import Ad from '../../components/Ad.svelte';

  let achievementContainer;

  let data = achievementData;

  let achievement = data;
  let checkList = {};
  let achievementChecklist = {};
  let list = [];
  let active = '0';
  let activeIndex = 0;
  let totalAchievement = 0;
  let finishedAchievement = 0;
  let totalPrimogem = 0;
  let obtainedPrimogem = 0;
  let categories = [];

  let originalList = [];
  let sort = false;

  let showFilter = false;
  let nameFilter = '';
  let sortedAchievements = Object.entries(data).sort((a, b) => a[1].order - b[1].order);

  let versionFilter = [];

  const types = [
    { label: $t('achievement.commissions'), value: 'commissions' },
    { label: $t('fishing.mondstadt'), value: 'mondstadt' },
    { label: $t('fishing.liyue'), value: 'liyue' },
    { label: $t('fishing.inazuma'), value: 'inazuma' },
    { label: $t('fishing.sumeru'), value: 'sumeru' },
  ];
  let typeFilter = [];

  function parseCategories() {
    totalAchievement = 0;
    finishedAchievement = 0;
    totalPrimogem = 0;
    obtainedPrimogem = 0;

    categories = Object.entries(achievement)
      .map(([id, data]) => ({
        id,
        name: data.name,
        order: data.order,
        finished: checkList[id] !== undefined ? Object.values(checkList[id]).filter((e) => e === true).length : 0,
        ...data.achievements.reduce(
          (prev, cur) => {
            if (Array.isArray(cur)) {
              prev.total += cur.length;
              totalAchievement += cur.length;

              for (const f of cur) {
                totalPrimogem += f.reward;

                const finished = checkList[id] !== undefined && checkList[id][f.id];
                prev.primogem += finished ? f.reward : 0;
                obtainedPrimogem += finished ? f.reward : 0;
                finishedAchievement += finished ? 1 : 0;
              }
            } else {
              prev.total += 1;
              totalAchievement += 1;
              totalPrimogem += cur.reward;

              const finished = checkList[id] !== undefined && checkList[id][cur.id];
              prev.primogem += finished ? cur.reward : 0;
              obtainedPrimogem += finished ? cur.reward : 0;
              finishedAchievement += finished ? 1 : 0;
            }

            return prev;
          },
          { total: 0, primogem: 0, show: true },
        ),
      }))
      .sort((a, b) => a.order - b.order);
  }

  function orderAchievement() {
    if (!sort) {
      if (originalList.length === 0) return;
      list = originalList;
      return;
    }

    originalList = list.slice();
    list = list.sort((a, b) => {
      let first = a;
      let second = b;
      if (Array.isArray(a)) first = a[a.length - 1];
      if (Array.isArray(b)) second = b[b.length - 1];
      return first.checked === second.checked ? 0 : first.checked ? 1 : -1;
    });
  }

  function changeSort(val) {
    sort = val;
    orderAchievement();
  }

  const saveData = debounce(async () => {
    const data = checkList;
    const dataChecklist = achievementChecklist;

    const prefix = getAccountPrefix();
    await updateSave(`${prefix}achievement`, data);
    await updateSave(`${prefix}achievement-checklist`, dataChecklist);
  }, 2000);

  const search = debounce(async () => {
    // let index = 0;
    // for (const [id, item] of sortedAchievements) {
    //   for (const achievement of item.achievements) {
    //     if (Array.isArray(achievement)) {
    //       if (filterName && !achievement[0].name.toLowerCase().includes(query)) continue;
    //       changeCategory(id, index, false);
    //       return;
    //     } else {
    //       if (filterName && !achievement.name.toLowerCase().includes(query)) continue;
    //       changeCategory(id, index, false);
    //       return;
    //     }
    //   }

    //   index++;
    // }

    const result = await filterAll();
    if (!result) {
      pushToast($t('achievement.searchError', { values: { query: nameFilter } }), 'error');
    }
  }, 500);

  const updateSelectFilter = debounce(() => {
    filterAll();
  }, 500);

  async function filterAll() {
    let firstFoundCategory = undefined;
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      let found = await changeCategory(category.id, i, false, true);
      if (firstFoundCategory === undefined && found) firstFoundCategory = { id: category.id, index: i };
    }

    if (firstFoundCategory) {
      changeCategory(firstFoundCategory.id, firstFoundCategory.index, true);
    } else {
      list = [];
    }

    return firstFoundCategory !== undefined;
  }

  async function changeCategory(id, index, firstLoad, searchOnly = false) {
    active = id;
    activeIndex = index;

    const filterVersion = versionFilter.length > 0;
    const filteredVersion = versionFilter;

    let filterComission = [];
    for (const e of typeFilter) {
      if (e.value === 'commissions') {
        filterComission = ['mondstadt', 'liyue', 'inazuma', 'sumeru', 'natlan'];
        break;
      }

      filterComission.push(e.value);
    }

    const filterName = nameFilter !== '';
    const query = nameFilter.toLowerCase();

    console.log('filter', active, filterVersion, filterComission, filterName);

    const filtered = achievement[active].achievements.filter((e) => {
      if (Array.isArray(e)) {
        if (filterVersion && !filteredVersion.includes(e[0].ver)) return false;
        if (filterComission.length > 0 && !filterComission.includes(e[0].commissions)) return false;
        if (filterName && !e[0].name.toLowerCase().includes(query)) return false;
        return true;
      } else {
        if (filterVersion && !filteredVersion.includes(e.ver)) return false;
        if (filterComission.length > 0 && !filterComission.includes(e.commissions)) return false;
        if (filterName && !e.name.toLowerCase().includes(query)) return false;
        return true;
      }
    });

    if (!searchOnly) {
      if (checkList[active] === undefined) {
        checkList[active] = {};
      }

      list = filtered.map((e) => {
        if (Array.isArray(e)) {
          for (let i = 0; i < e.length; i++) {
            e[i].checked = checkList[active][e[i].id] === true;
          }
          return e;
        } else {
          e.checked = checkList[active][e.id] === true;
          return e;
        }
      });

      if (sort) {
        originalList = list.slice();
        list = list.sort((a, b) => {
          let first = a;
          let second = b;
          if (Array.isArray(a)) first = a[a.length - 1];
          if (Array.isArray(b)) second = b[b.length - 1];
          return first.checked === second.checked ? 0 : first.checked ? 1 : -1;
        });
      }

      if (firstLoad) return;
      await tick();
      achievementContainer.scrollIntoView({
        behavior: 'smooth',
      });
    }

    categories[activeIndex].show = filtered.length > 0;
    return filtered.length > 0;
  }

  function toggle({ index, subindex, primogem }) {
    let val;
    if (subindex !== undefined) {
      val = !list[index][subindex].checked;
      list[index][subindex].checked = val;
      checkList[active][list[index][subindex].id] = val;

      // If unchecked, recursively uncheck subsequent achievements
      if (subindex < list[index].length - 1 && !list[index][subindex].checked && list[index][subindex + 1].checked) {
        toggle({ index, subindex: subindex + 1, primogem: list[index][subindex + 1].reward });
      }
    } else {
      val = !list[index].checked;
      list[index].checked = val;
      checkList[active][list[index].id] = val;
    }

    categories[activeIndex].finished += val ? 1 : -1;
    categories[activeIndex].primogem += val ? primogem : -primogem;
    obtainedPrimogem += val ? primogem : -primogem;
    finishedAchievement += val ? 1 : -1;

    saveData();
  }

  function toggleChecklist(achievementId, subindex) {
    if (achievementChecklist[achievementId] === undefined) {
      achievementChecklist[achievementId] = {};
    }

    achievementChecklist[achievementId][subindex] = !achievementChecklist[achievementId][subindex];

    saveData();
  }

  async function changeLocale(locale) {
    const data = await import(`../../data/achievement/${locale}.json`);
    achievement = data.default;
    sortedAchievements = Object.entries(achievement).sort((a, b) => a[1].order - b[1].order);
    sortedAchievements.forEach(([id, data], i) => {
      categories[i].name = data.name;
    });
    changeCategory(active, activeIndex, true);
  }

  async function readLocalData() {
    const prefix = getAccountPrefix();
    const achievementData = await readSave(`${prefix}achievement`);
    if (achievementData !== null) {
      checkList = achievementData;
      migrateNewVersion();
    }

    const achievementChecklistData = await readSave(`${prefix}achievement-checklist`);
    if (achievementChecklistData !== null) {
      achievementChecklist = achievementChecklistData;
    }
  }

  function migrateNewVersion() {
    console.log('MIGRATING ACHIEVEMENT VERSION ID');
    // version 1.5
    // prettier-ignore
    const movedIds = [
      84026, 84100, 84101, 84104, 84028, 
      84107, 84102, 84108, 84105, 84103, 
      84106, 84109, 84110, 84111, 84112, 
      84113, 84114, 84115
    ];
    const removedIds = [
      81416, 81418, 81426, 81429, 81451,
      81453, 81541, 81569
    ];

    if (checkList['17'] === undefined) {
      checkList['17'] = {};
    }

    if (checkList['0']) {
      for (const item of movedIds) {
        if (checkList['0'][item] === true) {
          checkList['17'][item] = true;
          delete checkList['0'][item];
        }
      }

      for (const item of removedIds) {
        if (checkList['0'][item] === true) {
          delete checkList['0'][item];
        }
      }

      // wrong id Light Up the Dark
      if (checkList['0'][81219] === true) {
        checkList['0'][81222] = true;
        delete checkList['0'][81219];
      }
    }
  }

  async function process() {
    await readLocalData();
    parseCategories();
    changeCategory('0', 0, true);
  }

  onMount(async () => {
    process();

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });

  $: if ($fromRemote) {
    console.log('update from google drive');
    process();
  }
</script>

<svelte:head>
  <title>Achievements - Paimon.moe</title>
  <meta name="description" content="Track your Genshin Impact achievement easily" />
  <meta property="og:description" content="Track your Genshin Impact achievement easily" />
</svelte:head>

<div class="flex">
  <div class="lg:ml-64 pt-20 px-4 lg:px-8 lg:pt-8 max-w-screen-xl w-full">
    <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-2 md:mb-0">
      <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('achievement.title')}</h1>
      <div class="flex space-x-2">
        <p class="text-gray-400 text-xl rounded-xl bg-black bg-opacity-50 px-2 py-1">
          {finishedAchievement}
          {$t('achievement.of')}
          {totalAchievement}
        </p>
        <div class="text-gray-400 text-xl rounded-xl bg-black bg-opacity-50 px-2 py-1 flex items-center">
          <p>{obtainedPrimogem} {$t('achievement.of')} {totalPrimogem}</p>
          <img src="/images/primogem.png" class="w-4 h-4 ml-1" alt="primogem" />
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
          <Checkbox checked={sort} on:change={() => changeSort(!sort)}>{$t('achievement.sort')}</Checkbox>
        </div>
      </div>
    </div>
    {#if showFilter}
      <div class="mb-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div
          class="flex flex-1 relative items-center bg-background rounded-2xl h-14
       focus-within:border-primary border-2 border-transparent ease-in duration-100"
          style="min-height: 3.5rem;"
        >
          <input
            placeholder={$t('achievement.search')}
            on:input={search}
            bind:value={nameFilter}
            class="pl-4 w-full min-h-full pr-4 text-white placeholder-gray-500 leading-none bg-transparent border-none focus:outline-none"
          />
        </div>
        <VersionSelect
          bind:value={versionFilter}
          placeholder={$t('achievement.version')}
          className="w-full md:w-56"
          on:change={updateSelectFilter}
        />
        <Select
          multiselect
          options={types}
          bind:selected={typeFilter}
          placeholder={$t('achievement.type')}
          className="w-full md:w-56"
          on:change={updateSelectFilter}
        />
      </div>
    {/if}
    <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
      <div class="flex flex-col space-y-2 lg:h-screen lg:overflow-auto lg:sticky lg:pr-1 pb-4 category">
        {#each categories as category, index (category.id)}
          {#if category.show}
            <div
              class="rounded-xl p-2 cursor-pointer flex flex-col {category.id === active ? 'bg-primary' : 'bg-item'}"
              on:click={() => changeCategory(category.id, index)}
            >
              <p class="font-semibold {category.id === active ? 'text-black' : 'text-white'}">{category.name}</p>
              <div class="flex">
                <p class="flex-1 {category.id === active ? 'text-gray-900' : 'text-gray-400'}">
                  {category.finished}/{category.total}
                  ({((category.finished / category.total) * 100).toFixed(0)}%)
                </p>
                <p class={category.id === active ? 'text-gray-900' : 'text-gray-400'}>
                  {category.primogem}
                </p>
                <img src="/images/primogem.png" class="w-6 h-6 ml-1" alt="primogem" />
              </div>
            </div>
          {/if}
        {/each}
      </div>
      <div class="flex flex-col space-y-2 flex-1 pt-20 lg:pt-2" bind:this={achievementContainer}>
        {#each list as el, index}
          {#if Array.isArray(el)}
            <div class="bg-item rounded-xl px-2 py-1 text-white flex flex-col">
              {#each el as it, i}
                <div
                  class="flex items-center {i !== 0 ? 'border-t border-gray-700 pt-1' : ''} 
                {i > 0 && el[i - 1].checked !== true ? 'opacity-25' : ''}"
                >
                  <div class="flex-1 pr-1">
                    <p class="font-semibold">
                      {it.name}
                      <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                        {it.ver}
                      </span>
                      {#if it.commissions !== undefined}
                        <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                          {$t('achievement.commissions')}
                        </span>
                        <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                          {$t(`fishing.${it.commissions}`)}
                        </span>
                      {/if}
                    </p>
                    <p class="text-gray-400">{it.desc}</p>
                  </div>
                  <div class="flex items-center">
                    <p class="mr-1">{it.reward}</p>
                    <img src="/images/primogem.png" class="w-8 h-8" alt="primogem" />
                  </div>
                  <div>
                    <Check
                      checked={list[index][i].checked}
                      on:change={() => toggle({ index, subindex: i, primogem: it.reward })}
                      inverted
                      disabled={i > 0 && !el[i - 1].checked}
                    />
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <div class="bg-item rounded-xl px-2 py-1 text-white">
              <div class="flex items-center">
                <div class="flex-1 pr-1">
                  <p class="font-semibold">
                    {el.name}
                    <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                      {el.ver}
                    </span>
                    {#if el.commissions !== undefined}
                      <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                        {$t('achievement.commissions')}
                      </span>
                      <span class="ml-1 rounded-xl bg-background px-2 text-gray-400 text-sm font-normal select-none">
                        {$t(`fishing.${el.commissions}`)}
                      </span>
                    {/if}
                  </p>
                  <p class="text-gray-400">{el.desc}</p>
                </div>
                <div class="flex items-center">
                  <p class="mr-1">{el.reward}</p>
                  <img src="/images/primogem.png" class="w-8 h-8" alt="primogem" />
                </div>
                <div>
                  <Check
                    checked={list[index].checked}
                    on:change={() => toggle({ index, primogem: el.reward })}
                    inverted
                  />
                </div>
              </div>
              {#if el.quest !== undefined}
                <div class="bg-background p-4 mt-2 mb-1 rounded-xl md:w-fit">
                  <p class="text-gray-400">
                    <b>{$t('achievement.quest')}:</b>
                    {#each el.quest.id as q, qi}
                      <a
                        class="hover:text-primary text-blue-300 mr-2 last:mr-0"
                        href="https://genshin-impact.fandom.com/wiki/{q.replace(/\?/g, '%3F')}"
                        target="__blank">{el.quest.name[qi]} <Icon path={mdiOpenInNew} size={0.7} /></a
                      >
                    {/each}
                  </p>
                  {#if el.checklist !== undefined}
                    <p class="text-gray-400 font-bold">{$t('achievement.checklist')}:</p>
                    {#each el.checklist as ch, chIndex}
                      <div class="text-gray-400 flex border-b border-gray-700 last:border-none">
                        <Checkbox
                          checked={achievementChecklist[el.id] ? achievementChecklist[el.id][chIndex] : false}
                          on:change={() => toggleChecklist(el.id, chIndex)}><span>{ch}</span></Checkbox
                        >
                      </div>
                    {/each}
                  {/if}
                </div>
              {/if}
            </div>
          {/if}
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
      top: 0px;
      padding-top: 8px;
    }
  }
</style>
