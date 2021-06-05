<script context="module">
  import data from '../../data/weapons/en.json';
  export async function preload() {
    return { data };
  }

</script>

<script>
  import { t } from 'svelte-i18n';
  import TableHeader from '../../components/Table/TableHeader.svelte';

  export let data;
  let weapons = [];

  const rarity = {
    2: 'text-green-400',
    3: 'text-primary',
    4: 'text-rare-from',
    5: 'text-legendary-from',
  };

  function process() {
    const _weapons = [];
    for (const [id, weapon] of Object.entries(data)) {
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

    weapons = _weapons;
  }

  process();

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
          <TableHeader>{$t('weapon.name')}</TableHeader>
          <TableHeader>{$t('weapon.type')}</TableHeader>
          <TableHeader>{$t('weapon.rarity')}</TableHeader>
          <TableHeader>{$t('weapon.atk')}</TableHeader>
          <TableHeader>{$t('weapon.secondary')}</TableHeader>
        </thead>
        <tbody class="text-white">
          {#each weapons as weapon}
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
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
