<script context="module">
  import data from '../../data/achievement/en.json';
  export async function preload() {
    return { data };
  }
</script>

<script>
  import { locale, t } from 'svelte-i18n';
  import { onMount, tick } from 'svelte';
  import debounce from 'lodash/debounce';

  import Check from '../../components/Check.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';

  export let data;

  let achievementContainer;

  let achievement = data;
  let checkList = {};
  let list = [];
  let active = '0';
  let activeIndex = 0;
  let totalAchievement = 0;
  let finishedAchievement = 0;
  let totalPrimogem = 0;
  let obtainedPrimogem = 0;
  let categories = [];

  function parseCategories() {
    categories = Object.entries(achievement).map(([id, data]) => ({
      id,
      name: data.name,
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
        { total: 0, primogem: 0 },
      ),
    }));
  }

  const saveData = debounce(() => {
    const data = JSON.stringify(checkList);

    const prefix = getAccountPrefix();
    updateSave(`${prefix}achievement`, data);
  }, 2000);

  async function changeCategory(id, index, firstLoad) {
    active = id;
    activeIndex = index;

    if (checkList[active] === undefined) {
      checkList[active] = {};
    }

    list = achievement[active].achievements.map((e) => {
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

    if (firstLoad) return;
    await tick();
    achievementContainer.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function toggle({ index, subindex, primogem }) {
    let val;
    if (subindex !== undefined) {
      val = !list[index][subindex].checked;
      list[index][subindex].checked = val;
      checkList[active][list[index][subindex].id] = val;
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

  async function changeLocale(locale) {
    const data = await import(`../../data/achievement/${locale}.json`);
    achievement = data.default;
    Object.entries(achievement).forEach(([id, data], i) => {
      categories[i].name = data.name;
    });
    changeCategory(active, activeIndex, true);
  }

  function readLocalData() {
    const prefix = getAccountPrefix();
    const achievementData = readSave(`${prefix}achievement`);
    if (achievementData !== null) {
      checkList = JSON.parse(achievementData);
    }
  }

  onMount(() => {
    readLocalData();
    parseCategories();
    changeCategory('0', 0, true);

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
</script>

<svelte:head>
  <title>Achievements - Paimon.moe</title>
  <meta name="description" content="Track your Genshin Impact achievement easily" />
  <meta property="og:description" content="Track your Genshin Impact achievement easily" />
</svelte:head>

<div class="lg:ml-64 pt-20 px-4 lg:px-8 lg:pt-8 max-w-screen-xl">
  <div class="flex flex-col md:flex-row items-center gap-2 mb-2 md:mb-0">
    <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('achievement.title')}</h1>
    <div class="flex gap-2">
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
  </div>
  <div class="flex flex-col lg:flex-row gap-3">
    <div class="flex flex-col gap-2 lg:h-screen lg:overflow-auto lg:sticky lg:pr-1 pb-4 category">
      {#each categories as category, index}
        <div
          class="rounded-xl p-2 cursor-pointer flex flex-col {category.id === active ? 'bg-primary' : 'bg-item'}"
          on:click={() => changeCategory(category.id, index)}
        >
          <p class="font-semibold {category.id === active ? 'text-black' : 'text-white'}">{category.name}</p>
          <div class="flex">
            <p class="flex-1 {category.id === active ? 'text-gray-900' : 'text-gray-400'}">
              {category.finished}
              {$t('achievement.of')}
              {category.total}
            </p>
            <p class={category.id === active ? 'text-gray-900' : 'text-gray-400'}>
              {category.primogem}
            </p>
            <img src="/images/primogem.png" class="w-6 h-6 ml-1" alt="primogem" />
          </div>
        </div>
      {/each}
    </div>
    <div class="flex flex-col gap-2 flex-1 pt-20 lg:pt-2" bind:this={achievementContainer}>
      {#each list as el, index}
        {#if Array.isArray(el)}
          <div class="bg-item rounded-xl px-2 py-1 text-white flex flex-col">
            {#each el as it, i}
              <div
                class="flex items-center {i !== 0 ? 'border-t border-gray-700 pt-1' : ''} 
                {i > 0 &&
                el[i - 1].checked !== true
                  ? 'opacity-25'
                  : ''}"
              >
                <div class="flex-1 pr-1">
                  <p class="font-semibold">{it.name}</p>
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
                  />
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <div class="bg-item rounded-xl px-2 py-1 text-white flex items-center">
            <div class="flex-1 pr-1">
              <p class="font-semibold">{el.name}</p>
              <p class="text-gray-400">{el.desc}</p>
            </div>
            <div class="flex items-center">
              <p class="mr-1">{el.reward}</p>
              <img src="/images/primogem.png" class="w-8 h-8" alt="primogem" />
            </div>
            <div>
              <Check checked={list[index].checked} on:change={() => toggle({ index, primogem: el.reward })} inverted />
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
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