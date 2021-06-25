<script context="module">
  import data from '../../data/weapons/en.json';
  import { weaponList } from '../../data/weaponList.js';
  export async function preload(page) {
    const { id } = page.params;
    const weapon = data[id];
    const materials = weaponList[id].ascension[0].items;

    return { id, weapon, materials };
  }

</script>

<script>
  import { mdiCircle, mdiStar } from '@mdi/js';
  import { locale, t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
  import { onMount } from 'svelte';

  const rarity = {
    1: 'text-white',
    2: 'text-green-400',
    3: 'text-primary',
    4: 'text-rare-from',
    5: 'text-legendary-from',
  };

  /* prettier-ignore */
  const showedIndex = [1, 6, 11, 16, 20, 21, 26, 31, 36, 41, 42, 47, 52, 53, 58, 63, 64, 69, 74, 75, 80, 85, 86, 91, 96];
  const level = [1, 5, 10, 15, 20, 20, 25, 30, 35, 40, 40, 45, 50, 50, 55, 60, 60, 65, 70, 70, 75, 80, 80, 85, 90];
  const ascen = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6];
  const ascenSpan = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

  export let id;
  export let weapon;
  // export let materials;

  async function changeLocale(locale) {
    const _data = await import(`../../data/weapons/${locale}.json`);
    weapon = _data.default[id];
  }

  onMount(async () => {
    locale.subscribe((val) => {
      changeLocale(val);
    });
  });

  $: multiplier = weapon.secondary.name === 'em' ? 1 : 100;
  $: suffix = weapon.secondary.name === 'em' ? '' : '%';

</script>

<svelte:head>
  <title>{weapon.name} - Paimon.moe</title>
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl md:pl-4">
  <div class="flex flex-col-reverse xl:flex-row items-start">
    <div class="px-4">
      <h1 class="font-display font-black text-4xl md:text-5xl text-white">{weapon.name}</h1>
      <div class="{rarity[weapon.rarity]} text-2xl flex items-center z-0 -mt-2 md:-mt-4">
        {#each [...new Array(weapon.rarity)] as _}
          <Icon path={mdiStar} />
        {/each}
        <Icon path={mdiCircle} size={0.4} className="mx-2 mt-1" color="white" />
        <p class="text-base text-white font-semibold mt-1">{$t(`weapon.${weapon.type}`)}</p>
      </div>
      <p class="text-gray-200">{weapon.description}</p>
      {#if weapon.skill.name}
        <div class="p-4 rounded-xl bg-item flex flex-col mt-4">
          <p class="font-black font-display text-xl text-white">{weapon.skill.name}</p>
          <p class="skill-description text-white">{@html weapon.skill.description}</p>
        </div>
      {/if}
      <div class="mt-4 block overflow-x-auto whitespace-no-wrap md:w-auto">
        <div style="width: min-content;">
          <div class="table max-w-full rounded-xl border border-gray-200 border-opacity-25">
            <table class="text-gray-200 w-full">
              <tr>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('weapon.asc')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('weapon.lvl')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('weapon.baseAtk')}
                </td>
                {#if weapon.secondary.name}
                  <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                    {$t(`weapon.${weapon.secondary.name}`)}
                  </td>
                {/if}
              </tr>
              {#each showedIndex as index, i}
                <tr>
                  {#if [0, 5, 10, 13, 16, 19, 22].includes(i)}
                    <td rowspan={ascenSpan[i]} class="text-center border-t border-gray-700 px-2">{ascen[i]}</td>
                  {/if}
                  <td class="text-center border-t border-gray-700 px-2">{level[i]}</td>
                  <td class="text-center border-t border-gray-700 px-2">{Math.round(weapon.atk[index])}</td>
                  {#if weapon.secondary.stats}
                    <td class="text-center border-t border-gray-700 px-2">
                      {Math.round(weapon.secondary.stats[index] * multiplier)}{suffix}
                    </td>
                  {/if}
                </tr>
              {/each}
            </table>
          </div>
        </div>
      </div>
    </div>
    <img class="w-64 h-64 ml-4 max-w-full" src="/images/weapons/{id}.png" alt={weapon.name} />
  </div>
</div>

<style>
  td:not(:last-child) {
    @apply border-r;
  }

</style>
