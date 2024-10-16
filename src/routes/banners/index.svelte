<script>
  // @ts-check
  import { onMount, tick } from 'svelte';
  import { t } from 'svelte-i18n';

  import { banners } from '../../data/banners';
  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';

  import Icon from '../../components/Icon.svelte';
  import { mdiSwapVertical } from '@mdi/js';
  import Ad from '../../components/Ad.svelte';

  import dayjs from 'dayjs';

  const sources = {
    characters: characters,
    weapons: weaponList,
  };

  let container;

  /**
   * @typedef {Object} Item
   * @property {number} index
   * @property {number} patches
   * @property {boolean} first
   * @property {boolean} last
   * @property {number} duration
   * @property {string} date
   * @property {string} name
   */

  /**
   * @typedef {Object.<string, Item>} VersionItem
   */

  /**
   * @typedef {Object.<string, VersionItem>} List
   */

  /** @type {string[]} */
  let versions = [];

  /**
   * @typedef {[string, Item][][]} ListItem
   */

  /**
   * An object representing a list of characters and weapons.
   * Each category (characters and weapons) is further divided by rarity (5-star and 4-star).
   *
   * @type {{
   *   characters: {
   *     5: ListItem,
   *     4: ListItem
   *   },
   *   weapons: {
   *     5: ListItem,
   *     4: ListItem
   *   }
   * }}
   */
  let lists = {
    characters: {
      5: [],
      4: [],
    },
    weapons: {
      5: [],
      4: [],
    },
  };
  let sort = false;
  let showStandard = false;

  /**
   * @type {'characters'|'weapons'}
   */
  let selectedType = 'characters';

  const width = 40;

  const featured = {
    characters: {
      5: ['eula', 'mona', 'albedo', 'klee', 'diluc', 'jean'],
      4: [
        'mika',
        'rosaria',
        'sucrose',
        'diona',
        'noelle',
        'bennett',
        'fischl',
        'amber',
        'razor',
        'kaeya',
        'barbara',
        'lisa',
      ],
    },
    weapons: {
      5: [
        'skyward_blade',
        'aquila_favonia',
        'beacon_of_the_reed_sea',
        'song_of_broken_pines',
        'wolfs_gravestone',
        'skyward_pride',
        'skyward_spine',
        'lost_prayer_to_the_sacred_winds',
        'skyward_atlas',
        'hunters_path',
        'skyward_harp',
      ],
      4: [
        'the_alley_flash',
        'lions_roar',
        'sacrificial_sword',
        'the_flute',
        'favonius_sword',
        'rainslasher',
        'sacrificial_greatsword',
        'the_bell',
        'favonius_greatsword',
        'favonius_lance',
        'dragons_bane',
        'wine_and_song',
        'eye_of_perception',
        'sacrificial_fragments',
        'the_widsith',
        'favonius_codex',
        'mitternachts_waltz',
        'alley_hunter',
        'rust',
        'sacrificial_bow',
        'the_stringless',
        'favonius_warbow',
      ],
    },
  };

  const standardItems = {
    amber: true,
    lisa: true,
    kaeya: true,
    jean: true,
    qiqi: true,
    keqing: true,
    mona: true,
    diluc: true,
    tighnari: true,
    dehya: true,
    skyward_harp: true,
    amos_bow: true,
    skyward_atlas: true,
    lost_prayer_to_the_sacred_winds: true,
    skyward_pride: true,
    wolfs_gravestone: true,
    skyward_spine: true,
    'primordial_jade_winged-spear': true,
    skyward_blade: true,
    aquila_favonia: true,
  };

  banners.characters.push(
    ...banners.chronicled.map((b) => ({
      ...b,
      featured: b.featured.filter((c) => featured.characters[5].includes(c)),
      featuredRare: b.featuredRare.filter((c) => featured.characters[4].includes(c)),
    })),
  );
  banners.characters.sort((a, b) => a.version.localeCompare(b.version, undefined, { numeric: true }));
  banners.weapons.push(
    ...banners.chronicled.map((b) => ({
      ...b,
      featured: b.featured.filter((c) => featured.weapons[5].includes(c)),
      featuredRare: b.featuredRare.filter((c) => featured.weapons[4].includes(c)),
    })),
  );
  banners.weapons.sort((a, b) => a.version.localeCompare(b.version, undefined, { numeric: true }));

  /**
   * @param {'characters'|'weapons'} type
   * @param {4|5} rarity
   */
  async function process(type, rarity) {
    /** @type {List} */
    const list = {};

    const part = rarity === 5 ? 'featured' : 'featuredRare';

    const bannerList = banners[type];
    versions = [];
    for (const banner of bannerList) {
      if (versions[versions.length - 1] === undefined || versions[versions.length - 1] !== banner.version) {
        versions.push(banner.version);
      }

      for (const char of banner[part]) {
        if (list[char] === undefined) {
          list[char] = {};
        }

        if (list[char][banner.version] === undefined) {
          const last = Object.values(list[char]).pop();
          let diff = 0;
          if (last) {
            if (char === 'albedo') console.log(last.date, banner.start);
            diff = dayjs(banner.start).diff(dayjs(last.date), 'days');
          }

          list[char][banner.version] = {
            index: versions.length - 1,
            first: last === undefined,
            last: false,
            patches: last ? versions.length - last.index - 2 : 0,
            duration: diff,
            date: banner.end,
            name: char,
          };
        }
      }
    }

    for (const char of Object.keys(list)) {
      const last = Object.values(list[char]).pop();
      const diff = dayjs().diff(dayjs(last.date), 'days');
      list[char].current = {
        index: versions.length,
        first: false,
        last: true,
        patches: versions.length - last.index - 1,
        duration: diff,
        date: dayjs().format('YYYY-MM-DD'),
        name: char,
      };
    }

    versions = versions;
    lists[type][rarity] = Object.entries(list)
      .map(([_, e]) => Object.entries(e))
      .sort((a, b) => {
        const _a = a[a.length - 1];
        const _b = b[b.length - 1];
        return _b[1].patches - _a[1].patches;
      });
  }

  function getColor(index) {
    if (index === '') return 'none';
    const max = 12;
    const hue = ((max - index) / max) * 100;
    return `hsl(${hue}, 60%, 70%)`;
  }

  /**
   * @param {'characters'|'weapons'} type
   * @param {4|5} rarity
   */
  function changeSort(type, rarity) {
    if (sort) {
      lists[type][rarity].sort((a, b) => {
        const _a = a[0];
        const _b = b[0];
        return _a[1].index - _b[1].index;
      });
    } else {
      lists[type][rarity].sort((a, b) => {
        const _a = a[a.length - 1];
        const _b = b[b.length - 1];
        return _b[1].patches - _a[1].patches;
      });
    }
    lists[type][rarity] = lists[type][rarity];
  }

  function sortOrder() {
    sort = !sort;
    changeSort(selectedType, 5);
    changeSort(selectedType, 4);
  }

  async function changeSelected(type) {
    selectedType = type;
    await tick();
    container.scrollTo({
      left: container.scrollWidth,
      top: 0,
      behavior: 'smooth',
    });
  }

  onMount(async () => {
    process('characters', 5);
    process('characters', 4);
    process('weapons', 5);
    process('weapons', 4);

    await tick();
    container.scrollTo({
      left: container.scrollWidth,
      top: 0,
      behavior: 'smooth',
    });
  });

  $: fullWidth = versions.length * width + 100;
</script>

<svelte:head>
  <title>Character Release Timeline - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Character Release Timeline" />
  <meta property="og:description" content="See when the character is released and their last re-run" />
</svelte:head>

<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="mb-4 px-8">
    <h1 class="font-display font-black text-2xl xl:text-5xl mb-3 xl:mb-0 text-white">{$t('calendar.bannerTitle')}</h1>
    <p class="text-gray-400 font-medium pb-4 leading-none" style="margin-top: -1rem;">
      {$t('calendar.bannerSubtitle')}
    </p>

    <div class="grid grid-cols-2 md:flex gap-2 text-white">
      <button
        on:click={() => changeSelected('characters')}
        class="pill {selectedType === 'characters' ? 'active' : ''}"
      >
        {$t('characters.title')}
      </button>
      <button on:click={() => changeSelected('weapons')} class="pill {selectedType === 'weapons' ? 'active' : ''}">
        {$t('sidebar.weapons')}
      </button>
      <label class="flex items-center justify-center pill col-span-2">
        <input class="mr-2 w-4 h-4" type="checkbox" bind:checked={showStandard} />
        {$t('calendar.showStandard')}
      </label>
      <button class="pill col-span-2" on:click={sortOrder}
        >{$t(sort ? 'calendar.sortByTime' : 'calendar.sortByRerun')} <Icon path={mdiSwapVertical} /></button
      >
    </div>
  </div>
  <div class="min-w-full overflow-x-auto whitespace-nowrap px-8 relative" bind:this={container}>
    <div class="flex h-full absolute">
      {#each versions as ver}
        <div
          class="h-full text-white text-center flex flex-col items-center group relative"
          style="min-width: {width}px;"
        >
          <p>{ver}</p>
          <div class="h-full bg-gray-700 w-[1px] group-hover:bg-primary"></div>
          <div class="h-full absolute w-full bg-transparent z-50 event pointer-events-auto"></div>
        </div>
      {/each}
    </div>
    {#each [5, 4] as rarity}
      <div class="w-full pt-8">
        {#each lists[selectedType][rarity] as items}
          {#if !standardItems[items[0][1].name] || showStandard}
            <div class="relative h-8 mb-2" style="width: {fullWidth}px;">
              {#each items as [ver, item], index}
                <div
                  class="ml-1 absolute flex items-center gap-2 min-w-max"
                  style="left: {item.index * width + (item.last ? 50 : 0)}px;"
                >
                  <div class="flex items-center gap-2 bg-black/70 rounded-full z-10 {item.last ? 'w-36' : ''}">
                    <img src="/images/{selectedType}/{item.name}.png" alt={item.name} class="w-8 h-8 rounded-full" />
                    {#if items[index + 1]?.[1].patches > 2 || item.last || item.first}
                      <div class="flex flex-col pr-4">
                        {#if !item.first}
                          <p class="text-white text-sm leading-none">{item.patches} Version</p>
                          <p class="text-white text-sm leading-none">{item.duration} Days</p>
                        {:else}
                          <p class="text-white text-sm leading-none">{ver}</p>
                        {/if}
                      </div>
                    {/if}
                  </div>
                  <div>
                    {#if item.last}
                      <p class="text-white text-sm pr-8">
                        {$t(sources[selectedType][item.name].name)}
                      </p>
                    {/if}
                  </div>
                  {#if !item.first}
                    <div
                      class="h-full opacity-50 absolute z-0 rounded-full"
                      style="left: {(item.patches + 1) * -width - (item.last ? 50 : 0)}px; width: {(item.patches + 1) *
                        width +
                        (item.last ? 70 : 20)}px; background: {getColor(item.patches)};"
                    ></div>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>

<Ad type="desktop" variant="lb" id="2" />
<Ad type="mobile" variant="lb" id="1" />

<style lang="postcss">
  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
    margin: 0 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    @apply rounded-xl;
  }

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

    &:disabled {
      @apply cursor-not-allowed;
    }
  }
</style>
