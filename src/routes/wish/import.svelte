<script>
  import { getContext, onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import { t } from 'svelte-i18n';
  import { mdiCheckBold, mdiCircleMedium, mdiClose, mdiContentSave, mdiDatabaseImport, mdiLoading } from '@mdi/js';
  import dayjs from 'dayjs';
  import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
  dayjs.extend(isSameOrBefore);

  import Button from '../../components/Button.svelte';
  import Input from '../../components/Input.svelte';
  import Select from '../../components/Select.svelte';
  import Icon from '../../components/Icon.svelte';
  import { server } from '../../stores/server';
  import ImportFaqModal from './_importFaq.svelte';
  import Textarea from '../../components/Textarea.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { getLocalSaveJson, readSave, updateSave } from '../../stores/saveManager';
  import { weaponList } from '../../data/weaponList';
  import { characters } from '../../data/characters';
  import { pushToast } from '../../stores/toast';
  import { submitWishTally } from '../../functions/wishTally';
  import Ad from '../../components/Ad.svelte';

  const numberFormat = Intl.NumberFormat();
  let fetchController;
  let fetchSignal;

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  const servers = [
    { label: 'Asia/TW/HK/MO', value: 'Asia' },
    { label: 'America', value: 'America' },
    { label: 'Europe', value: 'Europe' },
    { label: 'China', value: 'China' },
  ];

  const steps = {
    pc: 7,
    pclog: 7,
    android: 9,
    ios: 11,
    ps: 5,
    pclocal: 5,
  };

  const videoTutorial = {
    android: 'https://youtu.be/pe_aROJ8Av8',
    pc: 'https://www.youtube.com/watch?v=FCwZkHeIezw',
    pclog: 'https://www.youtube.com/watch?v=cl5HDd0bqKw',
  };

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

  let news = '';

  const prefix = getAccountPrefix();
  let selectedServer = null;
  let selectedType = 'pc';
  let genshinLink = '';
  let generatedTextInput = '';

  let currentUID = '';
  let forceUpdate = false;

  let url;
  let region = '';
  let currentBanner = '';
  let currentPage = 1;
  let cancelled = false;

  let processingLog = false;
  let finishedProcessingLog = false;
  let calculatingPity = false;
  let noNewData = false;

  let error = '';

  let wishes = {};

  async function startImport() {
    cancelled = false;
    error = '';
    fetchController = new AbortController();
    fetchSignal = fetchController.signal;

    if (selectedType === 'pclocal') {
      await importFromGeneratedText();
    } else {
      await processLogs();
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
      error = $t('wish.import.invalidLink');
    }

    try {
      await checkUID();
      for (const [wishNumber, type] of Object.entries(types)) {
        await getLog(wishNumber, type);
        await sleep(2000);
        if (cancelled) return;
      }

      if (Object.keys(wishes).length === 0) {
        noNewData = true;
      }

      finishedProcessingLog = true;
    } catch (err) {
      console.log(err);

      wishes = {};
      processingLog = false;
      finishedProcessingLog = false;
      calculatingPity = false;
      noNewData = false;

      region = '';
      currentBanner = '';
      currentPage = 1;
    }
  }

  async function getLog(wishNumber, type) {
    processingLog = true;

    console.log(wishNumber, type);
    url.searchParams.set('auth_appid', 'webview_gacha');
    url.searchParams.set('sign_type', '2');
    url.searchParams.set('init_type', '301');
    url.searchParams.set('gacha_id', 'b8fd0d8a6c940c7a16a486367de5f6d2232f53');
    url.searchParams.set('lang', 'en');
    url.searchParams.set('device_type', getDeviceType());
    url.searchParams.set('plat_type', getDeviceType());
    if (region !== '') url.searchParams.set('region', region);
    url.searchParams.set('gacha_type', wishNumber);
    url.searchParams.set('size', 20);
    url.searchParams.append('lang', 'en-us');
    url.hash = '';
    url.host = 'hk4e-api-os.mihoyo.com';
    url.pathname = 'event/gacha_info/api/getGachaLog';

    if ($server === 'China') {
      url.host = 'hk4e-api.mihoyo.com';
    }

    currentBanner = type.name;

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    const newestPullTime = await getNewestPullTime(type);
    // console.log(newestPullTime);
    let page = 1;
    let result = [];
    let lastTime = 0;
    let lastId = 0;
    do {
      if (cancelled) return;

      url.searchParams.set('page', page);
      url.searchParams.set('end_id', lastId);

      currentPage = page;

      try {
        const res = await fetchRetry(
          `${__paimon.env.API_HOST}/corsproxy`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: url.toString(),
            }),
            signal: fetchSignal,
          },
          3,
        );

        if (cancelled) return;

        if (!res.ok) {
          processingLog = false;
          error = `${$t('wish.import.errorApi')} (${res.status})`;
          throw 'error code';
        }

        const dat = await res.json();

        if (dat.retcode !== 0) {
          processingLog = false;

          if (dat.message === 'authkey timeout') {
            error = $t('wish.import.errorExpired');
            throw 'error code';
          }

          error = `${$t('wish.import.errorApi')} (${res.status})`;
          throw 'error code';
        }

        region = dat.data.region;
        result = dat.data.list;
      } catch (err) {
        console.error(err);
        processingLog = false;
        if (err !== 'error code') {
          error = $t('wish.import.timeout');
        }
        throw 'network error';
      }

      try {
        for (let row of result) {
          let code = row.gacha_type;
          const time = row.time;
          const name = row.name;
          const type = row.item_type.replace(/ /g, '');

          // character event 2
          if (code === '400') {
            code = '301';
          }

          if (currentUID !== '' && currentUID !== row.uid) {
            throw 'account error';
          }

          currentUID = row.uid.toString();

          if (dayjs(time).isSameOrBefore(newestPullTime)) {
            return;
          }

          lastTime = dayjs(time);

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
              code: row.gacha_type,
              id,
              time,
              pity: 0,
            },
          ];
        }

        page = page + 1;
        lastId = result.length > 0 ? result[result.length - 1].id : 0;
        await sleep(1000);
      } catch (err) {
        processingLog = false;
        if (err === 'account error') {
          error = $t('wish.import.differentAccount');
        } else {
          error = $t('wish.import.invalidData');
        }
        console.error(err);
        throw 'invalid data';
      }
    } while (result.length > 0 && lastTime.isAfter(newestPullTime));
  }

  async function saveData() {
    calculatingPity = true;

    // backup first
    // const oldData = await getLocalSaveJson();
    // await updateSave(`${prefix}backup`, oldData);

    for (let [code, type] of Object.entries(types)) {
      await processWishes(code, type);
    }
    calculatingPity = false;

    await updateSave(`${prefix}collectables-updated`, true);

    if (currentUID !== '') {
      await updateSave(`${prefix}wish-uid`, currentUID);
    }

    try {
      submitWishTally();
    } catch (err) {
      console.error(err);
    }

    await updateSave(`${prefix}wish-counter-setting`, {
      firstTime: false,
      manualInput: false,
    });

    pushToast($t('wish.import.success'));
    goto('/wish');
  }

  async function processWishes(code, type) {
    if (wishes[code] === undefined) return;
    console.log('processing', type.name);

    const path = `wish-counter-${type.id}`;
    const localData = await readSave(`${prefix}${path}`);

    let localWishes = [];
    if (localData !== null) {
      const counterData = localData;
      localWishes = counterData.pulls || [];
    }

    const importedWishes = wishes[code].slice().reverse();
    const oldestWish = importedWishes[0];

    localWishes = localWishes.slice().filter((e) => dayjs(e.time).isBefore(dayjs(oldestWish.time)));

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
        combined[i].pity = legendary;
        legendary = 0;
        // rare = 0;
      } else if (rarity === 4) {
        combined[i].pity = rare;
        rare = 0;
      } else {
        combined[i].pity = 1;
      }
    }

    const data = {
      total: combined.length,
      legendary,
      rare,
      pulls: combined,
    };

    await updateSave(`${prefix}${path}`, data);
  }

  async function importFromGeneratedText() {
    if (!generatedTextInput.startsWith('paimonmoe,importer,version,1,0')) {
      pushToast('Invalid data, please use the latest importer app', 'error');
      return;
    }

    processingLog = true;

    const rows = generatedTextInput.substring(30).split('\n');

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    try {
      for (let row of rows) {
        if (row === '') continue;

        const cell = row.split(',');
        const originalCode = cell[0];
        let code = Number(cell[0]);
        const time = cell[1];
        const name = cell[2];
        const type = cell[3].replace(/ /g, '');

        // character event 2
        if (code === 400) {
          code = 301;
        }

        const newestPullTime = await getNewestPullTime(types[code]);
        if (dayjs(time).isSameOrBefore(newestPullTime)) {
          continue;
        }

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
            time,
            pity: 0,
            code: originalCode,
          },
        ];
      }

      if (Object.keys(wishes).length === 0) {
        noNewData = true;
      }
    } catch (err) {
      processingLog = false;
      pushToast('Invalid data, please use the latest importer app', 'error');
      return;
    }

    finishedProcessingLog = true;
    console.log(wishes);
  }

  async function getNewestPullTime(type) {
    if (forceUpdate) {
      // return very long time so it equally all wishes
      return dayjs().year(2000);
    }

    const path = `wish-counter-${type.id}`;
    const localData = await readSave(`${prefix}${path}`);

    let localWishes = [];
    if (localData !== null) {
      const counterData = localData;
      localWishes = counterData.pulls || [];

      if (localWishes.length > 0) {
        const lastPull = localWishes[localWishes.length - 1];
        return dayjs(lastPull.time);
      }
    }

    return dayjs().year(2000);
  }

  function cancelSave() {
    wishes = {};
    processingLog = false;
    finishedProcessingLog = false;
    calculatingPity = false;
    noNewData = false;

    region = '';
    currentBanner = '';
    currentPage = 1;
  }

  function getDeviceType() {
    switch (selectedType) {
      case 'pc':
        return 'pc';
      case 'android':
      case 'ios':
        return 'mobile';
      case 'ps':
        return 'ps';
    }
  }

  async function checkUID() {
    const path = `wish-uid`;
    const localData = await readSave(`${prefix}${path}`);

    if (localData !== null) {
      currentUID = localData.toString();
    }
  }

  async function fetchRetry(url, options, n) {
    let error;
    let result;
    for (let i = 0; i < n; i++) {
      if (cancelled) return;

      try {
        const res = await fetch(url, options);
        result = res;
        if (res.status !== 200) {
          await sleep(1000);
          continue;
        }
        return res;
      } catch (err) {
        error = err;
      }
    }

    if (error) throw error;
    else return result;
  }

  function updateServer() {
    if (selectedServer === null) return;
    server.set(selectedServer.value);
  }

  function changeSelectedType(type) {
    selectedType = type;
  }

  function openFaq() {
    openModal(
      ImportFaqModal,
      {
        close: closeModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
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

  function cancel() {
    fetchController.abort();
    cancelled = true;
    wishes = {};
    processingLog = false;
    finishedProcessingLog = false;
    calculatingPity = false;

    region = '';
    currentBanner = '';
    currentPage = 1;

    setTimeout(() => {
      closeModal();
    }, 2000);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getNews() {
    try {
      const res = await fetch(`${__paimon.env.API_HOST}/news/wish`);
      if (res.status === 200) {
        const json = await res.json();
        news = json.message;
      }
    } catch (err) {
      console.error(err);
    }
  }

  $: selectedServer, updateServer();

  onMount(() => {
    detectPlatform();
    selectedServer = servers.find((e) => e.value === $server);

    getNews();
  });
</script>

<svelte:head>
  <title>Wish Counter - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also automatically import the logs and backup it from PC, Android, iOS, PlayStation then save it more than 6 months."
  />
  <meta
    property="og:description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also automatically import the logs and backup it from PC, Android, iOS, PlayStation then save it more than 6 months."
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:px-8 max-w-screen-lg">
  <h1 class="font-display font-black text-5xl text-white mb-4 leading-tight">
    {$t('wish.import.title')}
  </h1>
  <div class="mt-4 mb-4 md:flex items-center bg-background rounded-xl p-4 relative">
    <img class="h-16 hidden md:block mr-0" src="/images/paimon_faq.png" alt="Paimon" />
    <div class="md:ml-4 ">
      <p class="text-white font-bold">{$t('wish.import.header.0')}</p>
      <p class="text-gray-200 text-sm">{$t('wish.import.header.1')}</p>
      <div class="flex items-center mt-2 md:mt-0 bg-background-secondary md:bg-transparent p-2 md:p-0 rounded-xl ">
        <img class="h-16 md:hidden mr-2" src="/images/paimon_faq.png" alt="Paimon" />
        <p class="text-yellow-300 text-sm">{$t('wish.import.header.2')}</p>
      </div>
    </div>
  </div>
  <div class="flex space-x-3 mb-2">
    <div class="flex flex-col items-center step">
      <div class="step-number border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
        <span class="text-white font-bold">1</span>
      </div>
      <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
    </div>
    <div class="content pb-4 pt-1">
      <p class="text-white mr-2">{$t('settings.server')}</p>
      <Select
        disabled={processingLog}
        className="w-64"
        bind:selected={selectedServer}
        options={servers}
        placeholder={$t('settings.server')}
      />
    </div>
  </div>
  <div class="flex space-x-3 mb-2">
    <div class="flex flex-col items-center step">
      <div class="step-number border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
        <span class="text-white font-bold">2</span>
      </div>
      <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
    </div>
    <div class="content flex-col items-center pb-4 pt-1">
      <p class="text-white mr-2">{$t('wish.import.readFaq')}</p>
      <Button size="sm" className="px-2" on:click={openFaq}>{$t('wish.import.openFaq')}</Button>
    </div>
  </div>
  <div class="flex space-x-3 mb-2">
    <div class="flex flex-col items-center step">
      <div class="step-number border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
        <span class="text-white font-bold">3</span>
      </div>
      <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
    </div>
    <div class="content flex flex-col pb-4 pt-1">
      <p class="text-white">{$t('wish.import.choosePlatform')}</p>
      <div class="flex mt-4 flex-wrap">
        <button
          disabled={processingLog}
          on:click={() => changeSelectedType('pc')}
          class="pill {['pc', 'pclog', 'pclocal'].includes(selectedType) ? 'active' : ''}"
        >
          PC
        </button>
        <button
          disabled={processingLog}
          on:click={() => changeSelectedType('android')}
          class="pill {selectedType === 'android' ? 'active' : ''}"
        >
          Android
        </button>
        <button
          disabled={processingLog}
          on:click={() => changeSelectedType('ios')}
          class="pill {selectedType === 'ios' ? 'active' : ''}"
        >
          iOS
        </button>
        <button
          disabled={processingLog}
          on:click={() => changeSelectedType('ps')}
          class="pill {selectedType === 'ps' ? 'active' : ''}"
        >
          PS
        </button>
      </div>
    </div>
  </div>
  {#if ['pc', 'pclog', 'pclocal'].includes(selectedType)}
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="step-number border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">4</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex flex-col pb-4 pt-1">
        <p class="text-white">{$t('wish.import.chooseMethod')}</p>
        <div class="flex mt-4 flex-wrap">
          <button
            disabled={processingLog}
            on:click={() => changeSelectedType('pc')}
            class="pill {selectedType === 'pc' ? 'active' : ''}"
          >
            Script
          </button>
          <button
            disabled={processingLog}
            on:click={() => changeSelectedType('pclog')}
            class="pill {selectedType === 'pclog' ? 'active' : ''}"
          >
            Manual Log
          </button>
          <button
            disabled={processingLog}
            on:click={() => changeSelectedType('pclocal')}
            class="pill {selectedType === 'pclocal' ? 'active' : ''}"
          >
            Local Import
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if videoTutorial[selectedType] !== undefined}
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center text-primary">
          <Icon path={mdiCircleMedium} />
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center">
        <a href={videoTutorial[selectedType]} target="_blank" class="text-primary hover:underline">
          {$t('wish.import.guide.video')}
        </a>
      </div>
    </div>
  {/if}
  {#if selectedType === 'pc'}
    {#each Array(3) as _, i}
      <div class="flex space-x-3 mb-2">
        <div class="flex flex-col items-center step">
          <div class="w-8 rounded-full flex justify-center items-center">
            <span class="text-white font-bold">{5 + i}</span>
          </div>
          <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
        </div>
        <div class="content flex-col items-center">
          <p class="text-white">{$t(`wish.import.guide.pc2.${i}`)}</p>
        </div>
      </div>
    {/each}

    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">8</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-2">
        <p class="text-white">{$t('wish.import.guide.pc2.3')}</p>
        <pre class="bg-black text-white bg-opacity-50 whitespace-pre-wrap break-all p-2 rounded-xl text-xs select-all">
          {$server === 'China' ? $t('wish.import.guide.pc2.5') : $t('wish.import.guide.pc2.4')}
        </pre>
        <p class="text-white">
          {$t('wish.import.guide.pc2.6')}
          <a class="text-blue-400 hover:underline" href={$t('wish.import.guide.pc2.8')} target="_blank">
            {$t('wish.import.guide.pc2.7')}
          </a>
        </p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">9</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center">
        <p class="text-white">{$t('wish.import.guide.pc2.9')}</p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">10</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-8">
        <p class="text-white">{$t('wish.import.guide.pc2.10')}</p>
      </div>
    </div>
  {:else if selectedType === 'pclog'}
    {#each Array(2) as _, i}
      <div class="flex space-x-3 mb-2">
        <div class="flex flex-col items-center step">
          <div class="w-8 rounded-full flex justify-center items-center">
            <span class="text-white font-bold">{5 + i}</span>
          </div>
          <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
        </div>
        <div class="content flex-col items-center">
          <p class="text-white">{$t(`wish.import.guide.pclog.${i}`)}</p>
        </div>
      </div>
    {/each}

    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">7</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-2">
        <p class="text-white">{$t('wish.import.guide.pclog.2')}</p>
        <pre class="bg-black text-white bg-opacity-50 whitespace-pre-wrap break-all p-2 rounded-xl text-xs select-all">
          {$server === 'China' ? $t('wish.import.logLocation.china') : $t('wish.import.logLocation.global')}
        </pre>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">8</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center">
        <p class="text-white">
          {$t('wish.import.guide.pclog.3')}
          <code
            class="bg-black text-white bg-opacity-50 whitespace-pre-wrap break-all p-2 rounded-xl text-xs select-all"
            >OnGetWebViewPageFinish:https://webstatic</code
          >
        </p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">9</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center">
        <p class="text-white">{$t('wish.import.guide.pclog.4')}</p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">10</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-8">
        <p class="text-white">{$t('wish.import.guide.pclog.5')}</p>
      </div>
    </div>
  {:else if selectedType === 'pclocal'}
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <Icon path={mdiCircleMedium} color="white" />
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-2">
        <p class="text-white">
          {$t('wish.import.guide.pclocal.0')} <span class="text-red-300">{$t('wish.import.guide.pclocal.10')}</span>
        </p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">5</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center">
        <p class="text-white">{$t('wish.import.guide.pclocal.1')}</p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">6</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-2">
        <p class="text-white">{$t('wish.import.guide.pclocal.2')}</p>
        <pre
          class="bg-black text-white bg-opacity-50 whitespace-pre-wrap break-all p-2 rounded-xl text-xs select-all">{$t(
            'wish.import.guide.pclocal.3',
          )}</pre>
        <p class="text-white">
          {$t('wish.import.guide.pclocal.4')}
          <a class="text-blue-400 hover:underline" href={$t('wish.import.guide.pclocal.6')} target="_blank">
            {$t('wish.import.guide.pclocal.5')}
          </a>
        </p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">7</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center">
        <p class="text-white">{$t('wish.import.guide.pclocal.7')}</p>
      </div>
    </div>
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">8</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-8">
        <p class="text-white">{$t('wish.import.guide.pclocal.8')}</p>
      </div>
    </div>
  {:else if selectedType === 'ios'}
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center">
          <span class="text-white font-bold">4</span>
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-2">
        <p class="text-white">
          {$t('wish.import.guide.ios2.0')}
          <a class="text-blue-400 hover:underline" href={$t('wish.import.guide.ios2.2')} target="_blank">
            {$t('wish.import.guide.ios2.1')}
          </a>
        </p>
      </div>
    </div>
    {#each Array(10) as _, i}
      <div class="flex space-x-3 mb-2">
        <div class="flex flex-col items-center step">
          <div class="w-8 rounded-full flex justify-center items-center">
            <span class="text-white font-bold">{5 + i}</span>
          </div>
          <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
        </div>
        <div class="content flex-col items-center">
          <p class="text-white">{$t(`wish.import.guide.ios2.${i + 3}`)}</p>
        </div>
      </div>
    {/each}
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="w-8 rounded-full flex justify-center items-center text-primary">
          <Icon path={mdiCircleMedium} />
        </div>
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      </div>
      <div class="content flex-col items-center pb-8">
        <p class="text-white">
          {$t('wish.import.guide.ios2.14')}
          <a href={$t('wish.import.guide.ios2.15')} target="_blank" class="text-primary hover:underline">
            {$t('wish.import.guide.ios2.1')}
          </a>
        </p>
      </div>
    </div>
  {:else}
    {#each Array(steps[selectedType]) as _, i}
      <div class="flex space-x-3 mb-2">
        <div class="flex flex-col items-center step">
          <div class="w-8 rounded-full flex justify-center items-center">
            <span class="text-white font-bold">{4 + i}</span>
          </div>
          <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
        </div>
        <div class="content flex-col items-center {steps[selectedType] - 1 === i ? 'pb-8' : ''}">
          <p class="text-white">{$t(`wish.import.guide.${selectedType}.${i}`)}</p>
        </div>
      </div>
    {/each}
  {/if}
  <div class="flex space-x-3 mb-2">
    <div class="flex flex-col items-center step">
      <div class="step-number border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
        <span class="text-white font-bold">{steps[selectedType] + 4}</span>
      </div>
      {#if processingLog}
        <div class="step-bar w-1 bg-white opacity-50 mt-2 h-full" />
      {/if}
    </div>
    <div class="content flex-col items-center pb-4 pt-1 w-full lg:w-1/2 -mt-4">
      {#if selectedType === 'pc'}
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.pc2.11')} />
      {:else if selectedType === 'pclog'}
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.pclog.6')} />
      {:else if selectedType === 'pclocal'}
        <Textarea bind:value={generatedTextInput} placeholder={$t('wish.import.guide.pclocal.9')} />
      {:else if selectedType === 'ios'}
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.ios2.13')} />
      {:else}
        <Input bind:value={genshinLink} placeholder={$t(`wish.import.guide.${selectedType}.${steps[selectedType]}`)} />
      {/if}
      <div class="h-4" />
      {#if !processingLog}
        <div class="flex">
          <Button on:click={startImport} color="green" className="mr-4">
            <Icon path={mdiDatabaseImport} />
            {$t('wish.import.import')}
          </Button>
          <a href="/wish">
            <Button>{$t('wish.import.cancel')}</Button>
          </a>
        </div>
      {/if}
      {#if error !== ''}
        <div class="bg-red-400 rounded-xl p-4 w-full mt-4">
          {error}
        </div>
      {/if}
      {#if news !== ''}
        <div class="bg-orange-400 rounded-xl p-4 w-full mt-4">
          {news}
        </div>
      {/if}
    </div>
  </div>
  {#if processingLog}
    <div class="flex space-x-3 mb-2">
      <div class="flex flex-col items-center step">
        <div class="step-number w-8 h-8 rounded-full flex justify-center items-center">
          <Icon path={finishedProcessingLog ? mdiCheckBold : mdiLoading} spin={!finishedProcessingLog} color="white" />
        </div>
      </div>
      <div class="content flex-col items-center pb-4 pt-1">
        {#if !finishedProcessingLog}
          <div class="text-white mb-2">
            <p>{$t('wish.import.processing')} {currentBanner} {$t('wish.import.banner')}</p>
            <p>{$t('wish.import.page')} {currentPage}</p>
          </div>
        {/if}
        {#if !noNewData}
          <div class="border border-gray-700 rounded-xl min-w-full md:min-w-0 md:inline-block">
            <table class="progress">
              {#each Object.entries(types) as [code, type]}
                {#if wishes[code] !== undefined}
                  <tr>
                    <td class="px-2 py-1">
                      <span class="text-white mr-2 whitespace-no-wrap">{type.name} Banner</span>
                    </td>
                    <td class="pr-2 py-1">
                      <span class="text-white mr-2 whitespace-no-wrap">
                        <Icon size={0.5} path={mdiClose} />
                        {numberFormat.format(wishes[code].length)}
                      </span>
                    </td>
                  </tr>
                {/if}
              {/each}
            </table>
          </div>
        {/if}
        {#if !finishedProcessingLog}
          <div>
            <Button on:click={cancel} disabled={calculatingPity || cancelled}>
              {cancelled ? $t('wish.import.cancelling') : $t('wish.import.cancel')}
            </Button>
          </div>
        {/if}
        {#if finishedProcessingLog && !noNewData}
          <div class="text-white">
            <p>{$t('wish.import.importNotice1')}</p>
            <p class="mb-1">{$t('wish.import.importNotice2')}</p>
            <p class="text-red-300 mb-1">{$t('wish.import.importNotice3')}</p>
            <p class="font-semibold">{$t('wish.import.saveData')}</p>
          </div>
          <div class="flex mt-2">
            <Button on:click={saveData} disabled={calculatingPity} color="green" className="mr-4">
              <Icon path={mdiContentSave} />
              {$t('wish.import.save')}
            </Button>
            <Button on:click={cancelSave} disabled={calculatingPity}>{$t('wish.import.cancel')}</Button>
          </div>
        {/if}
        {#if finishedProcessingLog && noNewData}
          <p class="text-white mb-2">{$t('wish.import.noNewData')}</p>
          <Button on:click={cancelSave} disabled={calculatingPity}>{$t('wish.import.cancel')}</Button>
        {/if}
      </div>
    </div>
  {/if}
  <Ad type="desktop" variant="lb" id="2" />
  <Ad type="mobile" variant="lb" id="2" />
</div>
<div class="w-full flex justify-center">
  <Ad type="mobile" variant="mpu" id="1" />
</div>
<div class="fixed top-0 right-0 m-8">
  <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
</div>

<style>
  .step-number {
    min-height: 2rem;
  }

  .step-bar {
    border-radius: 4px;
  }

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

    &:disabled {
      @apply cursor-not-allowed;
    }
  }

  table.progress {
    tr:not(:last-child) {
      @apply border-b border-gray-700;
    }
  }
</style>
