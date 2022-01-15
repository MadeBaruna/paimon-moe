<script>
  import { t } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { mdiSortAscending, mdiSortDescending, mdiStar, mdiViewGrid, mdiViewList } from '@mdi/js';

  import Icon from '../../components/Icon.svelte';
  import TableHeader from '../../components/Table/TableHeader.svelte';

  import { characters } from '../../data/characters';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';
  import Select from '../../components/Select.svelte';
  import Button from '../../components/Button.svelte';
  import Ad from '../../components/Ad.svelte';

  const sortOptions = [
    { label: $t('characters.name'), value: 'name' },
    { label: $t('characters.element'), value: 'element' },
    { label: $t('characters.rarity'), value: 'rarity' },
    { label: $t('characters.weapon'), value: 'weapon' },
    { label: $t('characters.constellations'), value: 'constellation' },
  ];

  let sortBySelect = null;
  let sortBy = '';
  let sortOrder = false;
  let type = 'grid';
  let showConstellation = false;
  let constellation = {};
  let elementFilter = {
    pyro: true,
    hydro: true,
    anemo: true,
    electro: true,
    cryo: true,
    dendro: true,
    geo: true,
  };
  let weaponFilter = {
    sword: true,
    claymore: true,
    polearm: true,
    catalyst: true,
    bow: true,
  };

  $: chars = Object.entries(characters)
    .filter((e) => elementFilter[e[1].element.id] && weaponFilter[e[1].weapon.id])
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          if (sortOrder) {
            return a[1].name.localeCompare(b[1].name);
          } else {
            return b[1].name.localeCompare(a[1].name);
          }
        case 'element':
          if (sortOrder) {
            return a[1].element.name.localeCompare(b[1].element.name);
          } else {
            return b[1].element.name.localeCompare(a[1].element.name);
          }
        case 'rarity':
          if (sortOrder) {
            return a[1].rarity - b[1].rarity;
          } else {
            return b[1].rarity - a[1].rarity;
          }
        case 'weapon':
          if (sortOrder) {
            return a[1].weapon.name.localeCompare(b[1].weapon.name);
          } else {
            return b[1].weapon.name.localeCompare(a[1].weapon.name);
          }
        case 'hp':
          if (sortOrder) {
            return a[1].stats.hp - b[1].stats.hp;
          } else {
            return b[1].stats.hp - a[1].stats.hp;
          }
        case 'atk':
          if (sortOrder) {
            return a[1].stats.atk - b[1].stats.atk;
          } else {
            return b[1].stats.atk - a[1].stats.atk;
          }
        case 'def':
          if (sortOrder) {
            return a[1].stats.def - b[1].stats.def;
          } else {
            return b[1].stats.def - a[1].stats.def;
          }
        case 'constellation':
          const ca = constellation[a[0]]
            ? constellation[a[0]].default + constellation[a[0]].wish + constellation[a[0]].manual - 1
            : -999999;
          const cb = constellation[b[0]]
            ? constellation[b[0]].default + constellation[b[0]].wish + constellation[b[0]].manual - 1
            : -999999;
          if (sortOrder) {
            return ca - cb;
          } else {
            return cb - ca;
          }
      }
    });

  function sort(by) {
    if (sortBy === by) {
      sortOrder = !sortOrder;
    } else {
      sortBy = by;
    }
  }

  function orderSelectChanged() {
    sort(sortBySelect.value);
  }

  function orderGridChange() {
    sortOrder = !sortOrder;
  }

  function toggleElement(element) {
    elementFilter[element] = !elementFilter[element];
  }

  function toggleWeapon(weapon) {
    weaponFilter[weapon] = !weaponFilter[weapon];
  }

  async function processWishes() {
    const chars = {
      amber: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      kaeya: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      lisa: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      traveler_geo: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      traveler_anemo: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      barbara: {
        default: 1,
        wish: 0,
        manual: 0,
      },
      xiangling: {
        default: 1,
        wish: 0,
        manual: 0,
      },
    };

    const bannerCategories = ['beginners', 'standard', 'character-event', 'weapon-event'];
    const prefix = getAccountPrefix();
    for (const id of bannerCategories) {
      const data = await readSave(`${prefix}wish-counter-${id}`);
      if (data !== null) {
        showConstellation = true;
        const counterData = data;
        const pullData = counterData.pulls || [];
        for (const pull of pullData) {
          if (pull.type === 'character') {
            if (chars[pull.id] === undefined) {
              chars[pull.id] = {
                default: 0,
                wish: 0,
                manual: 0,
              };
            }
            chars[pull.id].wish++;
          }
        }
      }
    }

    if (showConstellation) {
      constellation = chars;
      await updateSave(`${prefix}characters`, chars);
    }
  }

  async function getConstellation() {
    const prefix = getAccountPrefix();
    const data = await readSave(`${prefix}characters`);
    if (data !== null) {
      constellation = data;
      showConstellation = true;
    } else {
      await processWishes();
    }
  }

  function changeViewType(val) {
    type = val;
    try {
      window.reloadAdSlots();
    } catch (error) {}
  }

  onMount(async () => {
    await getConstellation();
  });
</script>

<svelte:head>
  <title>Characters - Paimon.moe</title>
  <meta
    name="description"
    content="Your best Genshin Impact companion! Help you plan what to farm with ascension calculator and database. Also track your progress with todo and wish counter."
  />
  <meta
    property="og:description"
    content="Your best Genshin Impact companion! Help you plan what to farm with ascension calculator and database. Also track your progress with todo and wish counter."
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="flex items-center px-4 md:px-8">
    <h1 class="font-display font-black text-4xl md:text-5xl text-white mr-4">{$t('characters.title')}</h1>
    <div class="flex text-white" style="height: fit-content;">
      <button
        class="{type === 'grid' ? 'bg-background' : 'bg-item'} p-2 rounded-l-xl cursor-pointer hover:bg-opacity-75"
        on:click={() => changeViewType('grid')}
      >
        <Icon path={mdiViewGrid} />
      </button>
      <button
        class="{type === 'table'
          ? 'bg-background'
          : 'bg-item'} bg-background p-2 rounded-r-xl cursor-pointer hover:bg-opacity-75"
        on:click={() => changeViewType('table')}
      >
        <Icon path={mdiViewList} />
      </button>
    </div>
  </div>

  {#if type === 'grid'}
    <div class="flex">
      <div>
        <div class="flex flex-col lg:flex-row flex-wrap px-4 md:pl-8 md:pr-4 mb-4">
          <div class="flex mr-2 mb-2 lg:mb-0">
            <Select
              bind:selected={sortBySelect}
              on:change={orderSelectChanged}
              options={sortOptions}
              className="w-full md:w-48 mr-2"
              placeholder={$t('characters.sortBy')}
            />
            <Button on:click={orderGridChange}>
              <Icon path={sortOrder ? mdiSortAscending : mdiSortDescending} />
            </Button>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="flex items-center justify-center md:justify-start md:mr-4">
              <button
                on:click={() => toggleElement('pyro')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {elementFilter.pyro
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/elements/pyro.png" alt="pyro" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleElement('hydro')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {elementFilter.hydro
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/elements/hydro.png" alt="hydro" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleElement('anemo')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {elementFilter.anemo
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/elements/anemo.png" alt="anemo" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleElement('electro')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {elementFilter.electro
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/elements/electro.png" alt="electro" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleElement('cryo')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {elementFilter.cryo
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/elements/cryo.png" alt="cryo" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleElement('geo')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {elementFilter.geo
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/elements/geo.png" alt="geo" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
            </div>
            <div class="flex items-center justify-center md:justify-start">
              <button
                on:click={() => toggleWeapon('sword')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {weaponFilter.sword
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/weapons/sword.png" alt="sword" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleWeapon('claymore')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {weaponFilter.claymore
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/weapons/claymore.png" alt="claymore" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleWeapon('polearm')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {weaponFilter.polearm
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/weapons/polearm.png" alt="polearm" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleWeapon('catalyst')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {weaponFilter.catalyst
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/weapons/catalyst.png" alt="catalyst" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
              <button
                on:click={() => toggleWeapon('bow')}
                class="rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2 focus:outline-none {weaponFilter.bow
                  ? ''
                  : 'opacity-25'}"
              >
                <img src="/images/weapons/bow.png" alt="bow" class="w-8 h-8" style="min-width: 2rem;" />
              </button>
            </div>
          </div>
        </div>
        <div class="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
          {#each chars as [id, char] (id)}
            <a
              href="/characters/{id}"
              class="m-2 cell relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl rounded-xl {!showConstellation ||
              constellation[id]
                ? ''
                : 'opacity-50'}"
            >
              <div
                class="w-full rounded-t-xl bg-opacity-50 overflow-hidden {char.rarity === 5
                  ? 'bg-legendary-from'
                  : 'bg-rare-from'}"
              >
                <img class="w-full h-full" src={`/images/characters/${id}.png`} alt={char.name} />
              </div>
              <div
                class="absolute top-0 right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md"
                style="padding: 4px; margin: -10px;"
              >
                {#if constellation[id]}
                  <span class="mx-1 text-white text-xs font-semibold">
                    C{Math.max(0, constellation[id].default + constellation[id].wish + constellation[id].manual - 1)}
                  </span>
                {/if}
                <img class="w-4 h-4" src={`/images/elements/${char.element.id}.png`} alt={char.element.name} />
              </div>
              <div class="relative overflow-hidden bg-item rounded-b-xl" style="height: 29px">
                <div class="w-full  overflow-hidden absolute bottom-0">
                  <p class="text-white p-1 text-center text-sm">
                    {$t(char.name)}
                  </p>
                </div>
              </div>
            </a>
          {/each}
        </div>
        {#if showConstellation}
          <div
            class="mt-12 mb-4 ml-4 mr-4 md:ml-8 md:mr-0 max-w-screen-xl md:flex items-center bg-background rounded-xl p-4"
          >
            <img class="h-16 float-left md:float-none mr-2 md:mr-0" src="/images/paimon_faq.png" alt="Paimon" />
            <p class="md:ml-4 text-gray-200 ">{$t('characters.faq')}</p>
          </div>
        {/if}
      </div>
      <div class="hidden xl:block">
        <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
      </div>
    </div>
  {:else}
    <p class="text-gray-400 px-4 md:px-8 font-medium pb-2 mt-4">
      ※ {$t('characters.subtitle')}
    </p>
    <div class="block overflow-x-auto whitespace-no-wrap pb-8">
      <div class="px-4 md:px-8 table">
        <table class="w-full block p-4 bg-item rounded-xl">
          <thead>
            <th style="min-width: 4rem;" />
            <TableHeader on:click={() => sort('name')} sort={sortBy === 'name'} order={sortOrder}
              >{$t('characters.name')}</TableHeader
            >
            <TableHeader on:click={() => sort('element')} sort={sortBy === 'element'} order={sortOrder} align="center">
              {$t('characters.element')}
            </TableHeader>
            <TableHeader
              on:click={() => sort('constellation')}
              sort={sortBy === 'constellation'}
              order={sortOrder}
              align="center"
            >
              {$t('characters.const')}
            </TableHeader>
            <TableHeader on:click={() => sort('rarity')} sort={sortBy === 'rarity'} order={sortOrder} align="center">
              {$t('characters.rarity')}
            </TableHeader>
            <TableHeader on:click={() => sort('weapon')} sort={sortBy === 'weapon'} order={sortOrder} align="center">
              {$t('characters.weapon')}
            </TableHeader>
            <TableHeader on:click={() => sort('hp')} sort={sortBy === 'hp'} order={sortOrder} align="center">
              {$t('characters.hp')}
            </TableHeader>
            <TableHeader on:click={() => sort('atk')} sort={sortBy === 'atk'} order={sortOrder} align="center">
              {$t('characters.atk')}
            </TableHeader>
            <TableHeader on:click={() => sort('def')} sort={sortBy === 'def'} order={sortOrder} align="center">
              {$t('characters.def')}
            </TableHeader>
          </thead>
          <tbody>
            {#each chars as [id, char] (id)}
              <tr class={`rounded cursor-pointer ${char.rarity === 4 ? 'rare' : 'legendary'}`}>
                <td class="rarity w-16 sticky" style="padding: 0; left: 0px;">
                  <img class="w-12 h-12 rounded-full" src={`/images/characters/${id}.png`} alt={char.name} />
                </td>
                <td><a href="/characters/{id}">{$t(char.name)}</a></td>
                <td class="text-center">
                  <img class="w-8 h-8 inline" src={`/images/elements/${char.element.id}.png`} alt={char.element.name} />
                </td>
                <td class="text-center">
                  {constellation[id]
                    ? `C${Math.max(
                        0,
                        constellation[id].default + constellation[id].wish + constellation[id].manual - 1,
                      )}`
                    : '-'}
                </td>
                <td class="text-center">
                  <Icon color={char.rarity === 5 ? '#B9812E' : '#AD76B0'} path={mdiStar} />
                </td>
                <td class="text-center">
                  <img class="w-8 h-8 inline" src={`/images/weapons/${char.weapon.id}.png`} alt={char.weapon.name} />
                </td>
                <td class="text-center">{char.stats.hp}</td>
                <td class="text-center">{char.stats.atk}</td>
                <td class="text-center">{char.stats.def}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/if}
</div>

<style>
  .cell {
    width: calc(33.33333% - 1rem);

    @screen md {
      @apply w-24;
    }
  }

  tr.rare:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(173, 118, 176, 0.85) 10%,
      rgba(102, 86, 128, 0.85) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  tr.legendary:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(185, 129, 46, 0.85) 10%,
      rgba(132, 99, 50, 0.85) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  td {
    @apply text-white;
    @apply px-2;
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }
</style>
