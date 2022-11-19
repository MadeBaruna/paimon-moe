<script>
  import { onMount, tick } from 'svelte';
  import { t } from 'svelte-i18n';

  import { banners } from '../../data/banners';
  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import { mdiSwapVertical } from '@mdi/js';
  import Ad from '../../components/Ad.svelte';

  let container;

  let length = 0;
  let versions = [];
  let rows = [[]];
  let rowsWep = [[]];
  let names = [{ name: '', length: 0 }];
  let namesWep = [{ name: '', length: 0 }];
  let hovered = -1;

  let __rows5;
  let __rows4;
  let __names5;
  let __names4;
  let __rowsWep5;
  let __rowsWep4;
  let __namesWep5;
  let __namesWep4;

  let sort = false;

  async function process() {
    length = banners.characters.length;

    let _versions = {};
    let _chars5 = {};
    let _chars4 = {};
    let _rows5 = [];
    let _rows4 = [];
    let _names5 = [];
    let _names4 = [];

    let pos5 = 0;
    let pos4 = 0;
    let len = 0;
    for (const banner of banners.characters) {
      if (_versions[banner.version] === undefined) {
        _versions[banner.version] = 0;
      }
      _versions[banner.version]++;

      for (const ch of Object.keys(_chars5)) {
        _chars5[ch].length++;
        _names5[_chars5[ch].pos].length++;
        _rows5[_chars5[ch].pos][len] = { l: _chars5[ch].length, m: 15 };
      }
      for (const ch of Object.keys(_chars4)) {
        _chars4[ch].length++;
        _names4[_chars4[ch].pos].length++;
        _rows4[_chars4[ch].pos][len] = { l: _chars4[ch].length, m: 9 };
      }

      for (const char of banner.featured) {
        if (_chars5[char] === undefined) {
          _chars5[char] = {
            pos: pos5,
            length: 0,
          };
          _names5[pos5] = { name: characters[char].name, length: 0 };
          _rows5[pos5] = [...new Array(len).fill({ l: '' }), { char, l: 0 }];
          pos5++;
        } else {
          _rows5[_chars5[char].pos][len] = { char, l: 0 };
          _names5[_chars5[char].pos].length = 0;
          _chars5[char].length = 0;
        }
      }

      for (const char of banner.featuredRare) {
        if (_chars4[char] === undefined) {
          _chars4[char] = {
            pos: pos4,
            length: 0,
          };
          _names4[pos4] = { name: characters[char].name, length: 0 };
          _rows4[pos4] = [...new Array(len).fill({ l: '' }), { char, l: 0 }];
          pos4++;
        } else {
          _rows4[_chars4[char].pos][len] = { char, l: 0 };
          _names4[_chars4[char].pos].length = 0;
          _chars4[char].length = 0;
        }
      }

      len++;
    }

    versions = Object.entries(_versions).map(([version, length]) => ({
      version,
      length,
    }));

    __rows5 = _rows5;
    __rows4 = _rows4;
    __names5 = _names5;
    __names4 = _names4;

    rows = [..._rows5, new Array(length).fill({ l: '' }), ..._rows4, new Array(length).fill({ l: '' })];
    names = [..._names5, { name: '', length: 0 }, ..._names4, { name: '', length: 0 }];

    await processWeapons();
  }

  async function processWeapons() {
    const weaponsBanners = [...banners.weapons];
    weaponsBanners.splice(8, 0, banners.weapons[7]);

    let _chars5 = {};
    let _chars4 = {};
    let _rows5 = [];
    let _rows4 = [];
    let _names5 = [];
    let _names4 = [];

    let pos5 = 0;
    let pos4 = 0;
    let len = 0;

    for (const banner of weaponsBanners) {
      for (const ch of Object.keys(_chars5)) {
        _chars5[ch].length++;
        _names5[_chars5[ch].pos].length++;
        _rows5[_chars5[ch].pos][len] = { l: _chars5[ch].length, m: 15 };
      }
      for (const ch of Object.keys(_chars4)) {
        _chars4[ch].length++;
        _names4[_chars4[ch].pos].length++;
        _rows4[_chars4[ch].pos][len] = { l: _chars4[ch].length, m: 9 };
      }

      for (const char of banner.featured) {
        if (_chars5[char] === undefined) {
          _chars5[char] = {
            pos: pos5,
            length: 0,
          };
          _names5[pos5] = { name: weaponList[char].name, length: 0 };
          _rows5[pos5] = [...new Array(len).fill({ l: '' }), { char, l: 0 }];
          pos5++;
        } else {
          _rows5[_chars5[char].pos][len] = { char, l: 0 };
          _names5[_chars5[char].pos].length = 0;
          _chars5[char].length = 0;
        }
      }

      for (const char of banner.featuredRare) {
        if (_chars4[char] === undefined) {
          _chars4[char] = {
            pos: pos4,
            length: 0,
          };
          _names4[pos4] = { name: weaponList[char].name, length: 0 };
          _rows4[pos4] = [...new Array(len).fill({ l: '' }), { char, l: 0 }];
          pos4++;
        } else {
          _rows4[_chars4[char].pos][len] = { char, l: 0 };
          _names4[_chars4[char].pos].length = 0;
          _chars4[char].length = 0;
        }
      }

      len++;
    }

    __rowsWep5 = _rows5;
    __rowsWep4 = _rows4;
    __namesWep5 = _names5;
    __namesWep4 = _names4;

    rowsWep = [..._rows5, new Array(length).fill({ l: '' }), ..._rows4];
    namesWep = [..._names5, { name: '', length: 0 }, ..._names4];

    await tick();

    container.scrollTo({
      left: container.scrollWidth,
      top: 0,
      behavior: 'smooth',
    });
  }

  function sortOrder() {
    sort = !sort;

    if (!sort) {
      rows = [...__rows5, new Array(length).fill({ l: '' }), ...__rows4];
      names = [...__names5, { name: '', length: 0 }, ...__names4];
      return;
    }

    const _rows5 = [...__rows5].sort((a, b) => b[length - 1].l - a[length - 1].l);
    const _rows4 = [...__rows4].sort((a, b) => b[length - 1].l - a[length - 1].l);
    const _names5 = [...__names5].sort((a, b) => b.length - a.length);
    const _names4 = [...__names4].sort((a, b) => b.length - a.length);
    const _rowsWep5 = [...__rowsWep5].sort((a, b) => b[length - 1].l - a[length - 1].l);
    const _rowsWep4 = [...__rowsWep4].sort((a, b) => b[length - 1].l - a[length - 1].l);
    const _namesWep5 = [...__namesWep5].sort((a, b) => b.length - a.length);
    const _namesWep4 = [...__namesWep4].sort((a, b) => b.length - a.length);

    rows = [..._rows5, new Array(length).fill({ l: '' }), ..._rows4, new Array(length).fill({ l: '' })];
    names = [..._names5, { name: '', length: 0 }, ..._names4, { name: '', length: 0 }];
    rowsWep = [..._rowsWep5, new Array(length).fill({ l: '' }), ..._rowsWep4];
    namesWep = [..._namesWep5, { name: '', length: 0 }, ..._namesWep4];
  }

  function getColor(index, max) {
    if (index === '') return 'none';

    const lightness = 100 - Math.min(75, 45 + Math.floor((index / max) * 30));
    return `hsl(210, 60%, ${lightness}%)`;
  }

  function onHover(index) {
    hovered = index;
  }

  onMount(() => {
    process();
  });
</script>

<svelte:head>
  <title>Character Release Timeline - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Character Release Timeline" />
  <meta property="og:description" content="See when the character is released and their last re-run" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="mb-4 pl-8">
    <h1 class="font-display font-black text-2xl xl:text-5xl mb-3 xl:mb-0 text-white">{$t('calendar.bannerTitle')}</h1>
    <p class="text-gray-400 font-medium pb-4 leading-none" style="margin-top: -1rem;">
      {$t('calendar.bannerSubtitle')}
    </p>

    <div class="flex">
      <p class="text-white mr-2 border-2 border-white border-opacity-25 px-4 py-2 rounded-xl">
        {$t(sort ? 'calendar.sortByRerun' : 'calendar.sortByTime')}
      </p>
      <Button size="sm" className="px-2" on:click={sortOrder}><Icon path={mdiSwapVertical} /></Button>
    </div>
  </div>
  <div class="overflow-x-auto whitespace-nowrap px-8 pb-4" bind:this={container}>
    <table class="table-fixed">
      <tbody>
        <tr>
          {#each versions as v}
            <td class="text-center border border-gray-600 text-white font-bold relative" colspan={v.length}
              >{v.version}</td
            >
          {/each}
        </tr>
        {#each rows as r, rowIndex}
          <tr>
            {#each r as col, index}
              {#if col.char}
                <td on:mouseenter={() => onHover(index)} class="cell {hovered === index ? 'hovered' : ''}">
                  <img class="w-full h-full" src="/images/characters/{col.char}.png" alt={col.char} />
                </td>
              {:else}
                <td
                  on:mouseenter={() => onHover(index)}
                  class="cell {hovered === index ? 'hovered' : ''}"
                  style="background: {getColor(col.l, col.m)};">{col.l}</td
                >
              {/if}
            {/each}
            <td class="border border-gray-600 text-white px-2 text-xs">{$t(names[rowIndex].name)}</td>
          </tr>
        {/each}
        {#each rowsWep as r, rowIndex}
          <tr>
            {#each r as col, index}
              {#if col.char}
                <td on:mouseenter={() => onHover(index)} class="cell {hovered === index ? 'hovered' : ''}">
                  <img class="w-full h-full" src="/images/weapons/{col.char}.png" alt={col.char} />
                </td>
              {:else}
                <td
                  on:mouseenter={() => onHover(index)}
                  class="cell {hovered === index ? 'hovered' : ''}"
                  style="background: {getColor(col.l, col.m)};">{col.l}</td
                >
              {/if}
            {/each}
            <td class="border border-gray-600 text-white px-2 text-xs max-w-[2rem] whitespace-pre-wrap"
              >{$t(namesWep[rowIndex].name)}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
<Ad type="desktop" variant="lb" id="2" />
<Ad type="mobile" variant="lb" id="1" />

<style lang="postcss">
  .cell {
    @apply border border-gray-600 w-8 h-8 min-w-[2rem] min-h-[2rem] xl:min-w-[2.5rem] xl:min-h-[2.5rem] xl:w-10 xl:h-10 text-center relative z-0;
  }

  .hovered::after {
    content: '';
    @apply absolute bg-white bg-opacity-20 left-0 top-0 h-8 w-8 xl:h-10 xl:w-10;
  }

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
    margin: 0 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    @apply rounded-xl;
  }
</style>
