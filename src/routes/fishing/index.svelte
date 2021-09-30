<script context="module">
  import data from '../../data/fishing/en.json';
  import locations from '../../data/fishing/location.json';

  let spots = {
    mondstadt: [],
    liyue: [],
    inazuma: [],
  };
  for (const [id, location] of Object.entries(locations)) {
    spots[location.location].push({ ...location, id });
  }

  export async function preload() {
    return { data, spots };
  }
</script>

<script>
  import { locale, t } from 'svelte-i18n';
  import { onMount } from 'svelte';

  export let data;
  export let spots;

  let fishList = data;

  async function changeLocale(locale) {
    const _data = await import(`../../data/fishing/${locale}.json`);
    fishList = _data.default;
  }

  onMount(async () => {
    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
</script>

<svelte:head>
  <title>Fishing - Paimon.moe</title>
  <meta name="description" content="Genshin Impact fish list and fishing spot location with time marker" />
  <meta property="og:description" content="Genshin Impact fish list and fishing spot location with time marker" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('fishing.title')}</h1>
  {#each Object.entries(spots) as [id, location]}
    <h3 class="font-display px-4 md:px-8 font-black text-2xl text-white mt-4 mb-2">{$t(`fishing.${id}`)}</h3>
    <div class="px-8 w-full">
      {#each location as spot}
        <div class="flex w-full bg-item rounded-xl p-4 mb-2">
          <div class="mr-4">
            <img
              class="w-48 h-48 rounded-md"
              style="min-width: 192px;"
              src="/images/fishing/locations/{spot.id}.png"
              alt={spot.name}
              title={spot.name}
            />
          </div>
          <div class="flex flex-wrap" style="margin: -4px; height: fit-content;">
            {#each spot.fish as fish}
              <div
                class="w-24 flex flex-col justify-between rounded-md bg-background-secondary relative"
                style="margin: 4px 12px 4px 4px;"
              >
                <div class="w-24 h-24 flex items-center justify-center">
                  <img
                    class="w-24 h-auto"
                    style="min-width: 96px;"
                    src="/images/fishing/fish/{fish}.png"
                    alt={fishList[fish].name}
                    title={fishList[fish].name}
                  />
                </div>
                <span class="text-sm text-white leading-none mt-1 text-center">{fishList[fish].name}</span>
                <div
                  class="absolute rounded-full flex bg-background-secondary"
                  style="top: -8px; left: -8px; background: rgba(0, 0, 0, 0.50);"
                >
                  <div class="w-6 h-6 flex justify-center items-center rounded-full">
                    <img class="w-5" src="/images/fishing/bait/{fishList[fish].bait}.png" alt={fishList[fish].bait} />
                  </div>
                  {#if fishList[fish].time}
                    <div class="w-6 h-6 flex justify-center items-center rounded-full ml-1">
                      <img class="w-5" src="/images/{fishList[fish].time}.png" alt={fishList[fish].time} />
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>
