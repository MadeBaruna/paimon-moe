<script context="module">
  import data from '../../data/radiantSpincrystal/en.json';
  export async function preload() {
    return { data };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { locale, t } from 'svelte-i18n';
  import debounce from 'lodash/debounce';
  import { mdiMapMarker, mdiMusic, mdiOpenInNew } from '@mdi/js';
  import Icon from '../../components/Icon.svelte';
  import Check from '../../components/Check.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';
  import Ad from '../../components/Ad.svelte';

  export let data;

  let spincrystals = data;
  let checkList = {};
  let total = data.length;
  let current = 0;

  async function changeLocale(locale) {
    const data = await import(`../../data/radiantSpincrystal/${locale}.json`);
    spincrystals = data.default;
  }

  async function readLocalData() {
    const prefix = getAccountPrefix();
    const spincrystalsData = await readSave(`${prefix}spincrystals`);
    if (spincrystalsData !== null) {
      checkList = spincrystalsData;
      current = Object.values(checkList).filter((e) => e).length;
    }
  }

  function toggle(number) {
    checkList[number] = !checkList[number];
    current = Object.values(checkList).filter((e) => e).length;
    saveData();
  }

  const saveData = debounce(async () => {
    const data = checkList;

    const prefix = getAccountPrefix();
    await updateSave(`${prefix}spincrystals`, data);
  }, 2000);

  onMount(async () => {
    await readLocalData();

    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
</script>

<svelte:head>
  <title>Radiant Spincrystal - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Radiant Spincrystal Tracker" />
  <meta property="og:description" content="Genshin Impact Radiant Spincrystal Tracker" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 px-4 lg:px-8 max-w-screen-xl">
  <div class="flex justify-center md:justify-start items-center flex-col md:flex-row gap-2">
    <div class="flex items-center">
      <img
        src="/images/radiant_spincrystal.png"
        alt={$t('radiantSpincrystal.title')}
        width="256"
        height="256"
        class="w-16 h-16 mr-2"
      />
      <h1 class="font-display font-black text-3xl md:text-4xl text-white">{$t('radiantSpincrystal.title')}</h1>
    </div>
    <p class="text-gray-400 text-xl rounded-xl bg-black bg-opacity-50 px-2 py-1">
      {current}
      {$t('achievement.of')}
      {total}
    </p>
  </div>
  <div class="pt-4 space-y-1 max-w-lg">
    {#each spincrystals as crystal}
      <div class="bg-item rounded-xl p-2 flex items-center text-white">
        <p class="font-black text-2xl w-16 text-center">{crystal.number === 0 ? '#' : crystal.number}</p>
        <div class="flex flex-col flex-1 pr-2 justify-center text-gray-400 text-xs md:text-base">
          <div class="flex items-center mb-1">
            <div class="w-6 h-6">
              <Icon size={0.9} path={mdiMusic} />
            </div>
            <p class="pl-1 text-white text">{crystal.song}</p>
          </div>
          {#if crystal.number === 0}
            <div class="flex items-center group">
              <div class="w-6 h-6">
                <Icon size={0.9} path={mdiMapMarker} />
              </div>
              <p class="px-1 text-white leading text">
                {crystal.source}
              </p>
            </div>
          {:else}
            <a
              href="https://genshin-impact.fandom.com/wiki/Radiant_Spincrystal_{crystal.number}"
              target="_blank"
              class="flex items-center group"
            >
              <div class="w-6 h-6 group-hover:text-primary">
                <Icon size={0.9} path={mdiMapMarker} />
              </div>
              <p class="px-1 text-white group-hover:text-primary leading text">
                {crystal.source}
                <span class="text-gray-400 group-hover:text-primary"><Icon path={mdiOpenInNew} size={0.7} /></span>
              </p>
            </a>
          {/if}
        </div>
        <div>
          <Check
            inverted
            disabled={crystal.number === 0}
            checked={crystal.number === 0 || checkList[crystal.number]}
            on:change={() => toggle(crystal.number)}
          />
        </div>
      </div>
    {/each}
  </div>
  <div class="fixed top-0 right-0 m-8">
    <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
  </div>
</div>
<Ad type="desktop" variant="lb" id="2" />
<Ad type="mobile" variant="lb" id="1" />

<style>
  .text {
    line-height: initial;
  }
</style>
