<script context="module">
  import data from '../../data/fishing/en.json';
  import locations from '../../data/fishing/location.json';

  let spots = {
    mondstadt: [],
    liyue: [],
    inazuma: [],
    enkanomiya: [],
    chasm: [],
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
  import { getContext, onMount } from 'svelte';
  import { mdiCheck, mdiPencil } from '@mdi/js';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  dayjs.extend(duration);

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import { readSave, updateSave } from '../../stores/saveManager';
  import { getAccountPrefix } from '../../stores/account';
  import EditModal from './_editModal.svelte';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  export let data;
  export let spots;

  let fishList = data;
  let timer = {};
  let now = dayjs();

  async function setAsEmpty(id) {
    timer[id] = {
      time: dayjs(),
      text: '3d',
    };

    await save();
  }

  async function setEditing(id) {
    openModal(
      EditModal,
      {
        time: timer[id].time.format('YYYY-MM-DDTHH:mm'),
        close: closeModal,
        edit: (time) => edit(id, time),
        clear: () => clear(id),
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  async function clear(id) {
    delete timer[id];
    closeModal();
    await save();
  }

  async function edit(id, time) {
    timer[id] = {
      time,
      text: '...',
    };
    closeModal();
    await save();
  }

  async function changeLocale(locale) {
    const _data = await import(`../../data/fishing/${locale}.json`);
    fishList = _data.default;
  }

  function getDuration(time) {
    const diff = time.add(3, 'days').diff(now);
    const duration = dayjs.duration(diff);
    let format = 'D[d] HH:mm:ss';
    if (duration.days() === 0) {
      format = 'HH:mm:ss';
    }

    return duration.format(format);
  }

  async function load() {
    const prefix = getAccountPrefix();
    const data = await readSave(`${prefix}fishing`);
    const timerData = {};
    if (data !== null) {
      for (const [id, item] of Object.entries(data)) {
        timerData[id] = {
          ...item,
          text: '...',
          time: dayjs(item.time),
        };
      }
    }

    timer = timerData;
  }

  async function save() {
    const prefix = getAccountPrefix();
    const formattedTimer = {};
    for (const [id, item] of Object.entries(timer)) {
      formattedTimer[id] = {
        ...item,
        time: item.time.toISOString(),
      };
    }

    await updateSave(`${prefix}fishing`, formattedTimer);
  }

  onMount(async () => {
    await load();

    locale.subscribe((val) => {
      changeLocale(val);
    });

    const interval = setInterval(() => {
      now = dayjs();
      for (const [id, item] of Object.entries(timer)) {
        if (item.time.add(3, 'days').isBefore(now)) {
          delete timer[id];
          save();
        } else {
          item.text = getDuration(item.time);
        }
      }

      timer = timer;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<svelte:head>
  <title>Fishing - Paimon.moe</title>
  <meta name="description" content="Genshin Impact fish list and fishing spot location with time marker" />
  <meta property="og:description" content="Genshin Impact fish list and fishing spot location with time marker" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('fishing.title')}</h1>
  <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
    ※ {$t('fishing.subtitle')}
  </p>
  {#each Object.entries(spots) as [id, location]}
    <h3 class="font-display px-4 md:px-8 font-black text-2xl text-white mt-4 mb-2">{$t(`fishing.${id}`)}</h3>
    <div class="px-4 md:px-8 w-full">
      {#each location as spot}
        <div class="flex flex-col items-center md:items-start md:flex-row w-full bg-item rounded-xl p-4 mb-2">
          <div class="mr-4 flex flex-col">
            <img
              class="w-48 h-48 rounded-md"
              style="min-width: 192px;"
              src="/images/fishing/locations/{spot.id}.png"
              alt={spot.name}
              title={spot.name}
            />
            {#if timer[spot.id]}
              <div class="flex mt-2 items-center">
                <p class="text-white text-center mr-1 flex-1">
                  {timer[spot.id].text}
                </p>
                <Button on:click={() => setEditing(spot.id)} size="sm">
                  <Icon path={mdiPencil} color="white" />
                </Button>
              </div>
            {:else}
              <Button on:click={() => setAsEmpty(spot.id)} size="sm" className="mt-2 flex-1">
                {$t('fishing.setEmpty')}
                <Icon path={mdiCheck} color="white" />
              </Button>
            {/if}
          </div>
          <div
            class="flex flex-wrap pt-6 md:pt-0 justify-center md:justify-start"
            style="margin: -4px; height: fit-content;"
          >
            {#each spot.fish as fish}
              <div
                class="w-20 md:w-24 flex flex-col justify-between rounded-md bg-background-secondary relative"
                style="margin: 4px 12px 12px 4px;"
              >
                <div class="w-20 md:w-24 h-20 md:h-24 flex items-center justify-center">
                  <img
                    class="w-20 md:w-24 h-auto"
                    src="/images/fishing/fish/{fish}.png"
                    alt={fishList[fish].name}
                    title={fishList[fish].name}
                  />
                </div>
                <span class="text-xs md:text-sm text-white leading-none mt-1 text-center">{fishList[fish].name}</span>
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
