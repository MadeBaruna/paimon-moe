<script>
  import { t } from 'svelte-i18n';
  import { Workbook, ValueType } from 'exceljs';
  import dayjs from 'dayjs';

  import Button from '../../components/Button.svelte';
  import { pushToast } from '../../stores/toast';
  import { weaponList } from '../../data/weaponList';
  import { characters } from '../../data/characters';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';

  export let closeModal;

  const bannerCategories = {
    'character-event': 'Character Event',
    'weapon-event': 'Weapon Event',
    standard: 'Standard',
    beginners: "Beginners' Wish",
  };

  let selectedType = 'default';
  let fileInput;
  let step = 0;
  let loading = false;
  let error = null;

  let added = {};

  function changeType(type) {
    selectedType = type;
  }

  function selectFile() {
    fileInput.click();
  }

  async function readLocalData(id) {
    const prefix = getAccountPrefix();
    const path = `wish-counter-${id}`;
    const data = await readSave(`${prefix}${path}`);
    let pulls = [];

    let newest = dayjs().year(2000);
    let oldest = dayjs().year(2200);

    if (data !== null) {
      if (data.pulls.length > 0) {
        newest = dayjs(data.pulls[data.pulls.length - 1].time);
        oldest = dayjs(data.pulls[0].time);
        pulls = data.pulls;
      }
    }

    return {
      path: `${prefix}${path}`,
      data: pulls,
      newest,
      oldest,
    };
  }

  async function processWishes(path, combined) {
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

    await updateSave(path, data);
  }

  async function save() {
    loading = true;

    for (const id of Object.keys(bannerCategories)) {
      const { path, data } = await readLocalData(id);
      const { append, prepend } = added[id];

      const beginning = prepend.map((e) => ({
        id: e[2],
        time: e[1],
        type: e[0],
        pity: 0,
        manualInput: true,
      }));
      const end = append.map((e) => ({
        id: e[2],
        time: e[1],
        type: e[0],
        pity: 0,
        manualInput: true,
      }));

      const combined = [...beginning, ...data, ...end];

      await processWishes(path, combined);
    }

    const prefix = getAccountPrefix();
    await updateSave(`${prefix}collectables-updated`, true);

    pushToast($t('wish.excel.success'));
    loading = false;
    closeModal();
  }

  async function parseData(id, imported) {
    const { newest, oldest } = await readLocalData(id);
    const append = [];
    const prepend = [];

    console.log(newest, oldest);

    // new wishes
    imported.reverse();
    let index = 0;
    for (const row of imported) {
      if (dayjs(row[1]).isAfter(newest)) {
        append.push(row);
        index++;
      } else {
        break;
      }
    }
    imported = imported.slice(index, imported.length);

    // old wishes
    imported.reverse();
    for (const row of imported) {
      if (dayjs(row[1]).isBefore(oldest)) {
        prepend.push(row);
      } else {
        break;
      }
    }

    append.reverse();

    console.log(prepend);
    console.log(append);

    added[id] = {
      append,
      prepend,
    };
  }

  async function readPaimonExcel(workbook) {
    const informationSheet = workbook.getWorksheet('Information');
    if (!informationSheet) {
      pushToast($t('wish.excel.errorExcelPaimon'), 'error');
      loading = false;
      return;
    }

    const row = informationSheet.getCell('A1').value;

    if (row !== 'Paimon.moe Wish History Export') {
      pushToast($t('wish.excel.errorExcelPaimon'), 'error');
      loading = false;
      return;
    }

    const bannerCategories = {
      'character-event': 'Character Event',
      'weapon-event': 'Weapon Event',
      standard: 'Standard',
      beginners: "Beginners' Wish",
    };

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    for (const [id, category] of Object.entries(bannerCategories)) {
      const sheet = workbook.getWorksheet(category);
      const wishes = [];
      sheet.eachRow((row, index) => {
        if (index === 1) return;
        const type = row.getCell(1).text.toLowerCase();
        let time = row.getCell(3);
        const fullName = row.getCell(2).text;

        if (time.type === ValueType.Date) {
          time = dayjs.utc(time.value).format('YYYY-MM-DD HH:mm:ss');
        } else {
          time = time.text;
        }

        let name = '';
        if (type === 'weapon') {
          const weapon = weapons.find((e) => e.name === fullName);
          if (weapon === undefined) {
            pushToast($t('wish.excel.errorUnknownItem'), 'error');
            error = {
              banner: category,
              line: index,
              name: fullName,
              type,
            };
            step = 2;
            loading = false;
            throw 'unknown reward name';
          }

          name = weapon.id;
        } else if (type === 'character') {
          const character = chars.find((e) => e.name === fullName);
          if (character === undefined) {
            pushToast($t('wish.excel.errorUnknownItem'), 'error');
            error = {
              banner: category,
              line: index,
              name: fullName,
              type,
            };
            step = 2;
            loading = false;
            throw 'unknown reward name';
          }

          name = character.id;
        }

        if (name === '') {
          pushToast($t('wish.excel.errorUnknownItem'), 'error');
          loading = false;
          throw 'unknown reward name';
        }

        wishes.push([type, time, name]);
      });

      console.log('from excel', category, wishes.length);
      await parseData(id, wishes);
    }

    step = 1;
    loading = false;
  }

  async function readGachaExportExcel(workbook) {
    const bannerCategories = {
      'character-event': 'Character Event Wish',
      'weapon-event': 'Weapon Event Wish',
      standard: 'Permanent Wish',
      beginners: 'Novice Wishes',
    };

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    for (const [id, category] of Object.entries(bannerCategories)) {
      const sheet = workbook.getWorksheet(category);
      const wishes = [];
      sheet.eachRow((row, index) => {
        if (index === 1) return;
        const type = row.getCell(3).text.toLowerCase();
        let time = row.getCell(1);
        const fullName = row.getCell(2).text;

        if (time.type === ValueType.Date) {
          time = dayjs.utc(time.value).format('YYYY-MM-DD HH:mm:ss');
        } else {
          time = time.text;
        }

        let name = '';
        if (type === 'weapon') {
          const weapon = weapons.find((e) => e.name === fullName);
          if (weapon === undefined) {
            pushToast($t('wish.excel.errorUnknownItem'), 'error');
            error = {
              banner: category,
              line: index,
              name: fullName,
              type,
            };
            step = 2;
            loading = false;
            throw 'unknown reward name';
          }

          name = weapon.id;
        } else if (type === 'character') {
          const character = chars.find((e) => e.name === fullName);
          if (character === undefined) {
            pushToast($t('wish.excel.errorUnknownItem'), 'error');
            error = {
              banner: category,
              line: index,
              name: fullName,
              type,
            };
            step = 2;
            loading = false;
            throw 'unknown reward name';
          }

          name = character.id;
        }

        if (name === '') {
          pushToast($t('wish.excel.errorUnknownItem'), 'error');
          loading = false;
          throw 'unknown reward name';
        }

        wishes.push([type, time, name]);
      });

      console.log('from excel', category, wishes.length);
      await parseData(id, wishes);
    }

    step = 1;
    loading = false;
  }

  async function readGenshinWishesCSV(texts) {
    const lines = texts.split(/\r?\n/);
    lines.shift();

    const bannerCategories = {
      'Character Event': 'character-event',
      'Weapon Event': 'weapon-event',
      Permanent: 'standard',
      Novice: 'beginners',
    };

    const wishes = {
      'character-event': [],
      'weapon-event': [],
      standard: [],
      beginners: [],
    };

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    for (const line of lines) {
      if (line === '') continue;

      const cells = line.split(';');
      console.log(cells);

      const banner = bannerCategories[cells[0]];
      const type = cells[3].toLowerCase();
      const fullName = cells[2];
      const time = cells[5];

      let name = '';
      if (type === 'weapon') {
        const weapon = weapons.find((e) => e.name === fullName);
        if (weapon === undefined) {
          pushToast($t('wish.excel.errorUnknownItem'), 'error');
          error = {
            banner: category,
            line: index,
            name: fullName,
            type,
          };
          step = 2;
          loading = false;
          throw 'unknown reward name';
        }

        name = weapon.id;
      } else if (type === 'character') {
        const character = chars.find((e) => e.name === fullName);
        if (character === undefined) {
          pushToast($t('wish.excel.errorUnknownItem'), 'error');
          error = {
            banner: category,
            line: index,
            name: fullName,
            type,
          };
          step = 2;
          loading = false;
          throw 'unknown reward name';
        }

        name = character.id;
      }

      if (name === '') {
        pushToast($t('wish.excel.errorUnknownItem'), 'error');
        loading = false;
        throw 'unknown reward name';
      }

      wishes[banner].push([type, time, name]);
    }

    for (const [id, list] of Object.entries(wishes)) {
      console.log('from csv', id, list.length);
      await parseData(id, list);
    }

    step = 1;
    loading = false;
  }

  async function readWishTallyExcel(workbook) {
    const bannerCategories = {
      'character-event': 'Character Event Wish History',
      'weapon-event': 'Weapon Event Wish History',
      standard: 'Permanent Wish History',
      beginners: 'Novice Wish History',
    };

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    for (const [id, category] of Object.entries(bannerCategories)) {
      const sheet = workbook.getWorksheet(category);
      const wishes = [];
      sheet.eachRow((row, index) => {
        if (index === 1) return;
        const type = row.getCell(4).text.toLowerCase();
        let time = row.getCell(5);
        const fullName = row.getCell(6).text;

        if (time.type === ValueType.Date) {
          time = dayjs.utc(time.value).format('YYYY-MM-DD HH:mm:ss');
        } else {
          time = time.text;
        }

        let name = '';
        if (type === 'weapon') {
          const weapon = weapons.find((e) => e.name === fullName);
          if (weapon === undefined) {
            pushToast($t('wish.excel.errorUnknownItem'), 'error');
            error = {
              banner: category,
              line: index,
              name: fullName,
              type,
            };
            step = 2;
            loading = false;
            throw 'unknown reward name';
          }

          name = weapon.id;
        } else if (type === 'character') {
          const character = chars.find((e) => e.name === fullName);
          if (character === undefined) {
            pushToast($t('wish.excel.errorUnknownItem'), 'error');
            error = {
              banner: category,
              line: index,
              name: fullName,
              type,
            };
            step = 2;
            loading = false;
            throw 'unknown reward name';
          }

          name = character.id;
        }

        if (name === '') {
          pushToast($t('wish.excel.errorUnknownItem'), 'error');
          loading = false;
          throw 'unknown reward name';
        }

        wishes.push([type, time, name]);
      });

      console.log('from excel', category, wishes.length);
      await parseData(id, wishes);
    }

    step = 1;
    loading = false;
  }

  function readCSV(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const texts = reader.result;
      readGenshinWishesCSV(texts);
    };
    reader.readAsText(file);
  }

  async function readExcel(file) {
    loading = true;

    const workbook = new Workbook();

    try {
      const buffer = await fileToBuffer(file);
      await workbook.xlsx.load(buffer);
    } catch (err) {
      pushToast($t('wish.excel.errorReadExcel'), 'error');
      loading = false;
    }

    const readFunc = {
      default: readPaimonExcel,
      takagg: readGachaExportExcel,
      wishtally: readWishTallyExcel,
    };

    try {
      readFunc[selectedType](workbook);
    } catch (err) {
      console.log(err);
      pushToast($t('wish.excel.errorReadExcel'), 'error');
      loading = false;
    }
  }

  function checkFile(file) {
    console.log(file.type);
    if (
      file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.type === 'application/wps-office.xlsx'
    ) {
      readExcel(file);
    } else if (
      file.type === 'text/csv' ||
      file.type === 'application/vnd.ms-excel' ||
      file.type === 'text/comma-separated-values'
    ) {
      readCSV(file);
    } else {
      pushToast($t('wish.excel.errorInvalidFile'), 'error');
    }
  }

  function onFileChange(event) {
    const target = event.target;
    const { files } = target;

    if (files === null || files.length === 0) return;
    const file = files[0];

    checkFile(file);
    fileInput.value = null;
  }

  function dropHandler(ev) {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      if (ev.dataTransfer.items[0].kind === 'file') {
        const file = ev.dataTransfer.items[0].getAsFile();
        checkFile(file);
      }
    } else {
      checkFile(ev.dataTransfer.files[0]);
    }
  }

  function dragOverHandler(ev) {
    ev.preventDefault();
  }

  const fileToBuffer = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target === null) {
          reject(new Error('Failed to read file'));
        } else {
          const buffer = event.target.result;
          resolve(buffer);
        }
      };
      reader.readAsArrayBuffer(file);
    });
</script>

<div>
  <h1 class="font-display text-white text-xl mb-2">{$t('wish.excel.title')}</h1>
  {#if step === 0}
    <div class="mb-4 bg-background rounded-xl p-4">
      <ol class="list-decimal ml-4">
        <li class="text-red-300">{$t('wish.excel.notice.0')}</li>
        <li class="text-white">{$t('wish.excel.notice.1')}</li>
        <li class="text-white">{$t('wish.excel.notice.2')}</li>
        <li class="text-white">{$t('wish.excel.notice.3')}</li>
      </ol>
    </div>
    <p class="text-gray-200 mb-2">{$t('wish.excel.subtitle')}</p>
    <div class="flex flex-row flex-wrap">
      <button on:click={() => changeType('default')} class={`pill ${selectedType === 'default' ? 'active' : ''}`}>
        {$t('wish.excel.default')}
      </button>
      <button on:click={() => changeType('takagg')} class={`pill ${selectedType === 'takagg' ? 'active' : ''}`}>
        {$t('wish.excel.takagg')}
      </button>
      <button
        on:click={() => changeType('genshinwishes')}
        class={`pill ${selectedType === 'genshinwishes' ? 'active' : ''}`}
      >
        {$t('wish.excel.genshinwishes')}
      </button>
      <button on:click={() => changeType('wishtally')} class={`pill ${selectedType === 'wishtally' ? 'active' : ''}`}>
        {$t('wish.excel.wishtally')}
      </button>
    </div>
    <input on:change={onFileChange} type="file" style="display: none;" bind:this={fileInput} />
    <!-- <Button disabled={loading} on:click={selectFile}>
      {loading ? $t('wish.excel.processing') : $t(`wish.excel.selectFile.${selectedType}`)}
    </Button> -->
    <div
      on:click={selectFile}
      on:drop={dropHandler}
      on:dragover={dragOverHandler}
      class="w-full h-32 rounded-xl border-dashed border-2 border-gray-400 flex items-center justify-center cursor-pointer p-8"
    >
      <p class="text-white">{loading ? $t('wish.excel.processing') : $t(`wish.excel.selectFile.${selectedType}`)}</p>
    </div>
  {/if}
  {#if step === 1}
    <table>
      <tr>
        <td class="px-2 text-white border-r border-gray-700">{$t('wish.excel.addedOn')}</td>
        <td class="px-2 text-white border-r border-gray-700 text-center">{$t('wish.excel.beginning')}</td>
        <td class="px-2 text-white border-r border-gray-700 text-center">{$t('wish.excel.end')}</td>
        <td class="px-2 text-white border-gray-700 text-center">{$t('wish.excel.total')}</td>
      </tr>
      {#each Object.entries(added) as [id, data]}
        <tr>
          <td class="px-2 text-white border-r border-t border-gray-700">{bannerCategories[id]}</td>
          <td class="px-2 text-white border-r border-t border-gray-700 text-center">{data.prepend.length}</td>
          <td class="px-2 text-white border-r border-t border-gray-700 text-center">{data.append.length}</td>
          <td class="px-2 text-white border-t border-gray-700 text-center">
            {data.prepend.length + data.append.length}
          </td>
        </tr>
      {/each}
    </table>
    <p class="text-white py-2">{$t('wish.excel.saveNotice')}</p>
    <Button disabled={loading} on:click={save}>{$t('wish.excel.save')}</Button>
  {/if}
  {#if step === 2}
    <p class="text-red-400">{$t('wish.excel.errorUnknownItem')}</p>
    <table class="text-white mb-4">
      <tr>
        <td class="pr-2">BANNER</td>
        <td>{error.banner}</td>
      </tr>
      <tr>
        <td class="pr-2">LINE</td>
        <td>{error.line}</td>
      </tr>
      <tr>
        <td class="pr-2">NAME</td>
        <td>{error.name}</td>
      </tr>
      <tr>
        <td class="pr-2">TYPE</td>
        <td>{error.type}</td>
      </tr>
    </table>
    <Button
      on:click={() => {
        step = 0;
      }}
    >
      Back
    </Button>
  {/if}
</div>

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
</style>
