<script context="module">
  import data from '../../data/weapons/en.json';
  export async function preload() {
    return { data };
  }

</script>

<script>
  import { onMount } from 'svelte';
  import { locale, t } from 'svelte-i18n';
  import TableHeader from '../../components/Table/TableHeader.svelte';

  export let data;
  let weaponList = [];
  let sortBy = 'name';
  let sortOrder = true;

  const rarity = {
    2: 'text-green-400',
    3: 'text-primary',
    4: 'text-rare-from',
    5: 'text-legendary-from',
  };

  function sort(by) {
    if (sortBy === by) {
      sortOrder = !sortOrder;
    } else {
      sortBy = by;
    }
  }

  function process() {
    const _weapons = [];
    for (const [id, weapon] of Object.entries(data)) {
      if (['amber_bead', 'ebony_bow', 'quartz', 'the_flagstaff', 'freedom-sworn'].includes(id)) continue;

      _weapons.push({
        id,
        name: weapon.name,
        type: weapon.type,
        rarity: weapon.rarity,
        atk: weapon.atk[weapon.atk.length - 1].toFixed(0),
        secondary: weapon.secondary.name
          ? `${$t(`weapon.${weapon.secondary.name}`)} ${(
              weapon.secondary.stats[weapon.secondary.stats.length - 1] * (weapon.secondary.name === 'em' ? 1 : 100)
            ).toFixed(0)}${weapon.secondary.name === 'em' ? '' : '%'}`
          : '-',
      });
    }

    weaponList = _weapons;
  }

  process();

  $: weapons = weaponList.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        if (sortOrder) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      case 'type':
        if (sortOrder) {
          return a.type.localeCompare(b.type);
        } else {
          return b.type.localeCompare(a.type);
        }
      case 'rarity':
        if (sortOrder) {
          return a.rarity - b.rarity;
        } else {
          return b.rarity - a.rarity;
        }
      case 'atk':
        if (sortOrder) {
          return a.atk - b.atk;
        } else {
          return b.atk - a.atk;
        }
      case 'secondary':
        if (sortOrder) {
          return a.secondary.localeCompare(b.secondary);
        } else {
          return b.secondary.localeCompare(a.secondary);
        }
    }
  });

  async function changeLocale(locale) {
    const _data = await import(`../../data/weapons/${locale}.json`);
    data = _data.default;
    process();
  }

  onMount(async () => {
    locale.subscribe((val) => {
      changeLocale(val);
    });
  });

</script>

<svelte:head>
  <title>Weapon List - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Weapon list and stats" />
  <meta property="og:description" content="Genshin Impact Weapon list and stats" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('weapon.title')}</h1>
  <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
    ※ {$t('weapon.subtitle')}
  </p>
  <div class="block overflow-x-auto whitespace-no-wrap pb-8">
    <div class="px-4 md:px-8 table max-w-full">
      <table class="w-full block p-4 bg-item rounded-xl">
        <thead>
          <TableHeader />
          <TableHeader on:click={() => sort('name')} sort={sortBy === 'name'} order={sortOrder}>
            {$t('weapon.name')}
          </TableHeader>
          <TableHeader on:click={() => sort('type')} sort={sortBy === 'type'} order={sortOrder}>
            {$t('weapon.type')}
          </TableHeader>
          <TableHeader on:click={() => sort('rarity')} sort={sortBy === 'rarity'} order={sortOrder}>
            {$t('weapon.rarity')}
          </TableHeader>
          <TableHeader on:click={() => sort('atk')} sort={sortBy === 'atk'} order={sortOrder}>
            {$t('weapon.atk')}
          </TableHeader>
          <TableHeader on:click={() => sort('secondary')} sort={sortBy === 'secondary'} order={sortOrder}>
            {$t('weapon.secondary')}
          </TableHeader>
        </thead>
        <tbody class="text-white">
          {#each weapons as weapon (weapon.id)}
            <a href="/weapons/{weapon.id}" style="display: contents;">
              <tr class="cursor-pointer hover:bg-background">
                <td class="border-gray-700 border-t py-1 text-center h-12">
                  <img src="/images/weapons/{weapon.id}.png" alt={weapon.type} class="h-full w-auto inline" />
                </td>
                <td class="border-gray-700 border-t py-1 pl-4 pr-2">
                  {weapon.name}
                </td>
                <td class="border-gray-700 border-t py-1 text-center h-8">
                  <img src="/images/weapons/{weapon.type}.png" alt={weapon.type} class="h-full w-auto inline" />
                </td>
                <td class="border-gray-700 border-t py-1 text-center text-2xl {rarity[weapon.rarity]}"> ★ </td>
                <td class="border-gray-700 border-t py-1 px-1 text-center">
                  {weapon.atk}
                </td>
                <td class="border-gray-700 border-t py-1 pl-4">
                  {weapon.secondary}
                </td>
              </tr>
            </a>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
