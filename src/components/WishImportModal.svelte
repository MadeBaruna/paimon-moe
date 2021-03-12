<script>
  import { mdiClose, mdiDownload, mdiHelpCircle, mdiInformation, mdiLoading } from '@mdi/js';
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';

  import { pushToast } from '../stores/toast';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';
  import Checkbox from './Checkbox.svelte';
  import { weaponList } from '../data/weaponList';
  import { characters } from '../data/characters';
  import { readSave, updateSave } from '../stores/saveManager';

  export let processFirstTimePopup;
  export let closeModal;

  const fetchController = new AbortController();
  const fetchSignal = fetchController.signal;

  let numberFormat = Intl.NumberFormat();

  let showFaq = false;
  let selectedType = 'pc';

  let generatedTextInput = '';
  let genshinLink = '';

  let types = {
    100: {
      name: "Beginners' Wish",
      id: 'beginners',
    },
    200: {
      name: 'Standard',
      id: 'standard',
    },
    301: {
      name: 'Character Event',
      id: 'character-event',
    },
    302: {
      name: 'Weapon Event',
      id: 'weapon-event',
    },
  };

  let newOnly = true;

  let wishes = {};

  let url;

  let processingLog = false;
  let fetchingWishes = false;
  let finishedProcessingLog = false;
  let calculatingPity = false;

  let cancelled = false;

  let region = '';
  let currentBanner = '';
  let currentPage = 1;

  function cancel() {
    fetchController.abort();
    cancelled = true;

    setTimeout(() => {
      closeModal();
    }, 2000);
  }

  function getDeviceType() {
    switch (selectedType) {
      case 'pc':
        return 'pc';
      case 'android':
      case 'ios':
        return 'mobile';
    }
  }

  async function startImport() {
    if (selectedType === 'pclocal') {
      importFromGeneratedText();
    } else {
      processLogs();
    }
  }

  async function processLogs() {
    processingLog = true;

    try {
      if (selectedType === 'android') {
        const urlString = genshinLink.match(/https:\/\/.*\//g);
        url = new URL(urlString);
      } else {
        url = new URL(genshinLink);
      }
    } catch (err) {
      pushToast('Invalid link, please check it again', 'error');
    }

    try {
      for (const [wishNumber, type] of Object.entries(types)) {
        await getLog(wishNumber, type);
        if (cancelled) return;
        await sleep(2000);
      }
      finishedProcessingLog = true;
    } catch (err) {
      console.log(err);

      wishes = {};
      processingLog = false;
      fetchingWishes = false;
      finishedProcessingLog = false;
      calculatingPity = false;

      region = '';
      currentBanner = '';
      currentPage = 1;
    }
  }

  async function getLog(wishNumber, type) {
    fetchingWishes = true;

    console.log(wishNumber, type);
    url.searchParams.set('auth_appid', 'webview_gacha');
    url.searchParams.set('init_type', '301');
    url.searchParams.set('gacha_id', 'd610857102f9256ba143ccf2e03b964c76a6ed');
    url.searchParams.set('lang', 'en');
    url.searchParams.set('device_type', getDeviceType());
    if (region !== '') url.searchParams.set('region', region);
    url.searchParams.set('gacha_type', wishNumber);
    url.searchParams.set('size', 20);
    url.searchParams.append('lang', 'en-us');
    url.hash = '';
    url.host = 'hk4e-api-os.mihoyo.com';
    url.pathname = 'event/gacha_info/api/getGachaLog';

    currentBanner = type.name;

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    const newestPullTime = getNewestPullTime(type);
    let page = 1;
    let result = [];
    let lastTime = 0;
    do {
      if (cancelled) return;

      url.searchParams.set('page', page);

      currentPage = page;

      try {
        const res = await fetchRetry(
          __paimon.env.CORS_HOST,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: url.toString(),
            }),
            signal: fetchSignal,
          },
          2,
        );

        if (cancelled) return;

        if (!res.ok) {
          processingLog = false;
          pushToast('Error code returned from MiHoYo API, please try again later!', 'error');
          throw 'error code';
        }

        const dat = await res.json();

        if (dat.retcode !== 0) {
          processingLog = false;

          if (dat.message === 'authkey timeout') {
            pushToast('Link expired, please try again!', 'error');
            throw 'error code';
          }

          pushToast('Error code returned from MiHoYo API, please try again later!', 'error');
          throw 'error code';
        }

        region = dat.data.region;
        result = dat.data.list;
      } catch (err) {
        processingLog = false;
        pushToast('Connection timeout, please wait a moment and try again later', 'error');
        throw 'network error';
      }

      try {
        for (let row of result) {
          const code = row.gacha_type;
          const time = dayjs(row.time);
          const name = row.name;
          const type = row.item_type.replace(/ /g, '');

          if (time.unix() <= newestPullTime) {
            return;
          }

          lastTime = time;

          let id;
          if (type === 'Weapon') {
            id = weapons.find((e) => e.name === name).id;
          } else if (type === 'Character') {
            id = chars.find((e) => e.name === name).id;
          }

          if (wishes[code] === undefined) {
            wishes[code] = [];
          }

          wishes[code] = [
            ...wishes[code],
            {
              type: type.toLowerCase(),
              id,
              time: time.unix(),
              pity: 0,
            },
          ];
        }

        page = page + 1;
        await sleep(1000);
        console.log(wishes);
      } catch (err) {
        processingLog = false;
        pushToast('Invalid data returned from API, try again later!', 'error');
        throw 'invalid data';
      }
    } while (result.length > 0 && lastTime > newestPullTime);
  }

  function getNewestPullTime(type) {
    if (!newOnly) {
      // return very long time so it equally all wishes
      return new dayjs().year(2000).unix();
    }

    const path = `wish-counter-${type.id}`;
    const localData = readSave(path);

    let localWishes = [];
    if (localData !== null) {
      const counterData = JSON.parse(localData);
      localWishes = counterData.pulls || [];

      if (localWishes.length > 0) {
        const lastPull = localWishes[localWishes.length - 1];
        return lastPull.time;
      }
    }

    return new dayjs().year(2000).unix();
  }

  async function fetchRetry(url, options, n) {
    let error;
    for (let i = 0; i < n; i++) {
      if (cancelled) return;

      try {
        return await fetch(url, options);
      } catch (err) {
        error = err;
      }
    }
    throw error;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function toggleFaqs(show) {
    showFaq = show;
  }

  function changeSelectedType(type) {
    selectedType = type;
  }

  function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      selectedType = 'android';
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      selectedType = 'ios';
    }
  }

  function importFromGeneratedText() {
    if (!generatedTextInput.startsWith('paimonmoeimporterv1###')) {
      pushToast('Invalid data, please use the latest importer app', 'error');
      return;
    }

    processingLog = true;

    const rows = generatedTextInput.substring(22).split(';');

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    try {
      for (let row of rows) {
        if (row === '') continue;

        const cell = row.split(',');
        const code = Number(cell[0]);
        const time = dayjs(cell[1]);
        const name = cell[2];
        const type = cell[3].replace(/ /g, '');

        let id;
        if (type === 'Weapon') {
          id = weapons.find((e) => e.name === name).id;
        } else if (type === 'Character') {
          id = chars.find((e) => e.name === name).id;
        }

        if (wishes[code] === undefined) {
          wishes[code] = [];
        }

        wishes[code] = [
          ...wishes[code],
          {
            type: type.toLowerCase(),
            id,
            time: time.unix(),
            pity: 0,
          },
        ];
      }
    } catch (err) {
      processingLog = false;
      pushToast('Invalid data, please use the latest importer app', 'error');
      return;
    }

    finishedProcessingLog = true;
    console.log(wishes);
  }

  function saveData() {
    calculatingPity = true;
    for (let [code, type] of Object.entries(types)) {
      processWishes(code, type);
    }
    calculatingPity = false;

    pushToast('Import success 😀!');
    closeModal();
  }

  function processWishes(code, type) {
    processFirstTimePopup(false, false);

    if (wishes[code] === undefined) return;
    console.log('processing', type.name);

    const path = `wish-counter-${type.id}`;
    const localData = readSave(path);

    let localWishes = [];
    if (localData !== null) {
      const counterData = JSON.parse(localData);
      localWishes = counterData.pulls || [];
    }

    const importedWishes = wishes[code].slice().reverse();
    const oldestWish = importedWishes[0];

    localWishes = localWishes.slice().filter((e) => e.time < oldestWish.time);

    const combined = [...localWishes, ...importedWishes];

    let rare = 0;
    let legendary = 0;
    for (let i = 0; i < combined.length; i++) {
      rare++;
      legendary++;

      let rarity;
      if (combined[i].type === 'character') {
        rarity = characters[combined[i].id].rarity;
      } else if (combined[i].type === 'weapon') {
        rarity = weaponList[combined[i].id].rarity;
      }

      if (rarity === 5) {
        if (combined[i].pity === 0) {
          combined[i].pity = legendary;
        }
        legendary = 0;
        rare = 0;
      } else if (rarity === 4) {
        if (combined[i].pity === 0) {
          combined[i].pity = rare;
        }
        rare = 0;
      } else {
        if (combined[i].pity === 0) {
          combined[i].pity = 1;
        }
      }
    }

    const data = JSON.stringify({
      total: combined.length,
      legendary,
      rare,
      pulls: combined,
    });

    updateSave(path, data);
  }

  onMount(() => {
    detectPlatform();
  });
</script>

{#if processingLog}
  <h1 class="font-display text-white text-xl mb-2">Import Wish History</h1>
  <div class="bg-background rounded-xl px-4 py-2 text-white mt-2">
    {#if finishedProcessingLog}
      <table class="min-w-full md:min-w-0">
        {#each Object.entries(types) as [code, type]}
          <tr>
            <td class="border-b border-gray-700 py-1">
              <span class="text-white mr-2 whitespace-no-wrap">{type.name} Banner</span>
            </td>
            <td class="border-b border-gray-700 py-1">
              {#if wishes[code] !== undefined}
                <span class="text-white mr-2 whitespace-no-wrap">
                  <Icon size={0.5} path={mdiClose} />
                  {numberFormat.format(wishes[code].length)}
                </span>
              {:else}
                <span class="text-white">No New Wishes</span>
              {/if}
            </td>
          </tr>
        {/each}
      </table>
      <p class="mt-4">Imported wishes will be appended or replaced accordingly to existing data</p>
      <p>If you don't have any data saved before, first wish will be counted as pity 1</p>
      <p class="font-semibold">Save the data?</p>
    {:else if calculatingPity}
      <Icon path={mdiLoading} spin color="white" />
      Re-calculating pity...
    {:else if fetchingWishes}
      <div class="flex">
        <Icon path={mdiLoading} spin color="white" />
        <div class="ml-2">
          <p>{`Processing ${currentBanner} Banner`}</p>
          <p>{`Page ${currentPage}`}</p>
        </div>
      </div>
      <table class="min-w-full md:min-w-0 mt-2">
        {#each Object.entries(types) as [code, type]}
          {#if wishes[code] !== undefined}
            <tr>
              <td class="border-b border-gray-700 py-1">
                <span class="text-white mr-2 whitespace-no-wrap">{type.name} Banner</span>
              </td>
              <td class="border-b border-gray-700 py-1">
                <span class="text-white mr-2 whitespace-no-wrap">
                  <Icon size={0.5} path={mdiClose} />
                  {numberFormat.format(wishes[code].length)}
                </span>
              </td>
            </tr>
          {/if}
        {/each}
      </table>
    {:else}
      <Icon path={mdiLoading} spin color="white" />
      Parsing...
    {/if}
  </div>
  <div class="flex justify-end mt-4">
    {#if finishedProcessingLog && !calculatingPity}
      <Button on:click={saveData} color="green" className="mr-4">Save</Button>
    {/if}
    <Button on:click={cancel} disabled={calculatingPity || cancelled}>{cancelled ? 'Cancelling...' : 'Cancel'}</Button>
  </div>
{:else}
  <div>
    {#if showFaq}
      <h1 class="font-display text-white text-xl mb-2">Import Wish History FAQS</h1>

      <div class="font-body">
        <p class="text-white font-semibold">How does it work?</p>
        <p class="text-gray-400">
          Genshin Impact wish history is basically a web page, so you can access it by opening the web page url. A
          temporary key will be generated after you open the wish history page or the feedback page, and the importer
          will automatically use the MiHoYo API to fetch your wish history.
        </p>
        <p class="text-white font-semibold mt-4">Is it safe? Will I get banned?</p>
        <p class="text-gray-400">
          Paimon.moe use the same request that Genshin Impact use to get the wish history, and Paimon.moe has no way
          whatsoever to modify any game files or memory, and it should be safe. But use it at your own risk (well I use
          it on my main account). You still can input your data manually 😀.
        </p>
        <p class="text-white font-semibold mt-4">Can you hack my account then?</p>
        <p class="text-gray-400">
          Paimon.moe never save anything related to your account (even your uid or nickname), so the answer is no. This
          project is open source on
          <a class="text-primary hover:underline" target="__blank" href="https://github.com/MadeBaruna/paimon-moe"
            >Github</a
          >, I'm not planning to damage my reputation by hacking other people account.
        </p>
        <p class="text-white font-semibold mt-4">
          Hey I checked the request and stuff, but why it request to your domain instead of MiHoYo API?
        </p>
        <p class="text-gray-400">
          Paimon.moe cannot request directly to MiHoYo API because of
          <a
            class="text-primary hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
            target="__blank"
          >
            CORS</a
          >, so the request redirected to a simple cors proxy to make it work. You can see the code
          <a
            class="text-primary hover:underline"
            href="https://gist.github.com/MadeBaruna/64785ae992c924e0cbfe575e404b7155"
            target="__blank">here</a
          >
        </p>
        <p class="text-white font-semibold mt-4">Do you store my temporary key or wish history?</p>
        <p class="text-gray-400">
          Paimon.moe never store your key, and use HTTPS to pass your url to a cors proxy to make the CORS works. All
          your wish history is saved on your device only (or your google drive if you turn on sync on setting).
          Paimon.moe does not save anything to the server (yes anything).
          <!-- If you don't want any passing around your url, you can use the small importer app to process the wish
          history on your local PC (PC Local option) -->
        </p>
        <p class="text-white font-semibold mt-4">I tried the step, but I got some API error?</p>
        <p class="text-gray-400">
          Make sure you copy all the text (just hold and press select all), maybe you left over some text that are
          needed for the importer to work
        </p>
      </div>
    {:else}
      <div class="flex flex-col md:flex-row items-start md:items-center">
        <h1 class="font-display text-white text-xl mb-2 mr-2">Import Wish History</h1>
        <Button size="sm" on:click={() => toggleFaqs(true)}>
          <Icon path={mdiHelpCircle} color="white" />
          FAQS - READ FIRST
        </Button>
      </div>
      <div class="flex mt-4 flex-wrap">
        <button on:click={() => changeSelectedType('pc')} class={`pill ${selectedType === 'pc' ? 'active' : ''}`}>
          PC
        </button>
        <!-- <button
          on:click={() => changeSelectedType('pclocal')}
          class={`pill ${selectedType === 'pclocal' ? 'active' : ''}`}
        >
          PC Local
        </button> -->
        <button
          on:click={() => changeSelectedType('android')}
          class={`pill ${selectedType === 'android' ? 'active' : ''}`}
        >
          Android
        </button>
        <button on:click={() => changeSelectedType('ios')} class={`pill ${selectedType === 'ios' ? 'active' : ''}`}>
          iOS
        </button>
      </div>
      {#if selectedType === 'pc'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <ol class="list-decimal ml-4">
            <li class="my-2">Open Paimon menu [ESC]</li>
            <li class="my-2">Click Feedback</li>
            <li class="my-2">Wait for it to load and a browser page should open</li>
            <li class="my-2">Copy & paste the link to the textbox below</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder="Paste link here... https://webstatic..." />
      {:else if selectedType === 'pclocal'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <ol class="list-decimal ml-4">
            <li class="mt-2 mb-0">
              Downlod the importer app <Button size="sm" on:click={() => toggleFaqs(true)}>
                <Icon path={mdiDownload} color="white" />
                Download
              </Button>
            </li>
            <li class="my-2">Open the wish history on your Genshin impact in this PC</li>
            <li class="my-2">Press IMPORT</li>
            <li class="my-2">Copy & paste the generated text to the textbox below</li>
          </ol>
        </div>
        <Textarea bind:value={generatedTextInput} placeholder="Paste the generated text here..." />
      {:else if selectedType === 'android'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <ol class="list-decimal ml-4">
            <li class="my-2">Open Paimon menu</li>
            <li class="my-2">Press Feedback</li>
            <li class="my-2">Wait for it to load and a feedback page should open</li>
            <li class="my-2">Turn off your wifi and data connection</li>
            <li class="my-2">Press refresh on top right corner</li>
            <li class="my-2">The page should error and show you a text with black font</li>
            <li class="my-2">
              Hold the text and press select all, then copy that text (don't copy only some portion of the text)
            </li>
            <li class="my-2">Turn on your wifi or data connection</li>
            <li class="my-2">Paste the text to the textbox below</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder="Paste text here... Webpage not available..." />
      {:else if selectedType === 'ios'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <ol class="list-decimal ml-4">
            <li class="my-2">Open Paimon menu</li>
            <li class="my-2">Press Feedback</li>
            <li class="my-2">Wait for it to load and a feedback page should open</li>
            <li class="my-2">Press In-game issue</li>
            <li class="my-2">Press Co-Op Mode</li>
            <li class="my-2">There is a link on the bottom of the reply, press that</li>
            <li class="my-2">A browser should open up, copy the link and paste it below</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder="Paste link here... https://genshin.mihoyo..." />
      {/if}
    {/if}

    <div class="flex flex-col md:flex-row mt-4 md:justify-end items-center">
      {#if !showFaq}
        <div class="flex-1 flex mb-4 md:mb-0 md:ml-4">
          <Checkbox disabled={false} bind:checked={newOnly}>
            <span class="text-white select-none"> Import new wish only </span>
          </Checkbox>
          <span class="tooltip ml-2">
            <Icon path={mdiInformation} color="white" />
            <span class="tooltip-content"> Uncheck only if you need to re-import all your wish history</span>
          </span>
        </div>
      {/if}
      <div>
        {#if !showFaq}
          <Button on:click={startImport} color="green" className="mr-4">Import</Button>
        {/if}
        <Button on:click={showFaq ? () => toggleFaqs(false) : () => closeModal()}>Close</Button>
      </div>
    </div>
  </div>
{/if}

<style>
  .pill {
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
    @apply mr-2;
    @apply mb-2;
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
  }

  .tooltip {
    @apply relative;

    .tooltip-content {
      top: -100px;
      right: -14px;
      width: 250px;
      @apply absolute;
      @apply hidden;
      @apply bg-gray-400;
      @apply text-background;
      @apply rounded-xl;
      @apply p-2;

      @screen md {
        top: -70px;
        right: -120px;
        width: 320px;
      }
    }

    &:hover .tooltip-content {
      @apply block;
    }
  }
</style>
