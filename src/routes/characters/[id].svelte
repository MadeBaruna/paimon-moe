<script context="module">
  export async function preload(page) {
    const { id } = page.params;
    const data = await import(`../../data/characterData/${id}.json`);

    return { id, data };
  }
</script>

<script>
  export let id;
  export let data;

  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import { mdiCircle, mdiContentSave, mdiMinus, mdiPencil, mdiPlus, mdiStar } from '@mdi/js';
  import Icon from '../../components/Icon.svelte';
  import Button from '../../components/Button.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';
  import { characters } from '../../data/characters';
  import { itemGroup } from '../../data/itemGroup';

  import SkillCard from './_skillCard.svelte';
  import PassiveSkillCard from './_passiveSkillCard.svelte';

  let constellationDiv;

  const defaultChars = {
    amber: {
      default: 1,
      wish: 0,
      manual: 0,
    },
    kaeya: {
      default: 1,
      wish: 0,
      manual: 0,
    },
    lisa: {
      default: 1,
      wish: 0,
      manual: 0,
    },
    traveler_geo: {
      default: 1,
      wish: 0,
      manual: 0,
    },
    traveler_anemo: {
      default: 1,
      wish: 0,
      manual: 0,
    },
    barbara: {
      default: 1,
      wish: 0,
      manual: 0,
    },
    xiangling: {
      default: 1,
      wish: 0,
      manual: 0,
    },
  };

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  const character = characters[id];
  const bookId = character.material.book[0].id;
  const book = itemGroup[bookId];
  const materials = character.ascension[1].items;

  let chars = {};
  let constellationCount = -1;
  let manualCount = 0;
  let editConstellation = false;

  const showedIndex = [1, 20, 21, 41, 42, 52, 53, 63, 64, 74, 75, 85, 86, 96];
  const level = [1, 20, 20, 40, 40, 50, 50, 60, 60, 70, 70, 80, 80, 90];
  const ascen = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

  async function getConstellationCount() {
    const prefix = getAccountPrefix();
    const data = await readSave(`${prefix}characters`);
    if (data !== null) {
      const constellation = data;
      chars = constellation;
      if (constellation[id]) {
        constellationCount = constellation[id].default + constellation[id].wish - 1;
        manualCount = constellation[id].manual;
      } else {
        constellationCount = -1;
      }
    }
  }

  function editConstellationCount(val) {
    manualCount = Math.max(manualCount + val);
  }

  async function saveConstellationCount() {
    editConstellation = false;
    if (chars[id]) {
      chars[id].manual = manualCount;
    } else if (defaultChars[id]) {
      chars[id] = {
        ...defaultChars[id],
        manual: manualCount,
      };
    } else {
      chars[id] = {
        default: 0,
        wish: 0,
        manual: manualCount,
      };
    }

    if (chars[id].default + chars[id].wish + chars[id].manual === 0) {
      delete chars[id];
    }

    const prefix = getAccountPrefix();
    await updateSave(`${prefix}characters`, chars);
  }

  function scrollToView(view) {
    view.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(async () => {
    await getConstellationCount();
  });

  $: constellationCountTotal = Math.max(0, constellationCount + manualCount);
</script>

<svelte:head>
  <title>{character.name} - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact {character.name} build guide, constellation, and skill information"
  />
  <meta
    property="og:description"
    content="Genshin Impact {character.name} build guide, constellation, and skill information"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="flex flex-col xl:flex-row items-start">
    <img
      class="character-image object-cover md:pl-8 self-center xl:self-auto"
      src="/images/characters/full/{id}.png"
      alt={character.name}
    />
    <div class="flex flex-col items-start mt-4 xl:mt-0 side-detail pt-4 xl:pt-0">
      <div class="flex items-center px-4 md:px-8">
        <h1 class="font-display font-black text-4xl md:text-5xl text-white mr-4 z-0">{character.name}</h1>
        <img
          class="h-10 mr-4 z-10 object-contain"
          src="/images/elements/{character.element.id}.png"
          alt={character.element.name}
        />
        <div class="flex space-y-1 lg:space-y-0 lg:space-x-1 {editConstellation ? 'flex-col' : ''} md:flex-row items-center">
          {#if constellationCountTotal > -1}
            <p class="text-3xl text-gray-200 bg-black bg-opacity-50 rounded-xl px-2 font-semibold">
              C{constellationCountTotal}
            </p>
          {/if}
          {#if editConstellation}
            <div class="flex flex-wrap space-x-1">
              <Button size="sm" on:click={() => editConstellationCount(1)}>
                <Icon path={mdiPlus} />
              </Button>
              <Button size="sm" on:click={() => editConstellationCount(-1)}>
                <Icon path={mdiMinus} />
              </Button>
              <Button size="sm" on:click={saveConstellationCount}>
                <Icon path={mdiContentSave} />
              </Button>
            </div>
          {:else}
            <div
              class="ml-2 rounded-xl hover:bg-black hover:bg-opacity-25 cursor-pointer p-2"
              on:click={() => {
                editConstellation = true;
              }}
            >
              <Icon path={mdiPencil} className="text-gray-400" />
            </div>
          {/if}
        </div>
      </div>
      <div
        class="{character.rarity === 5
          ? 'text-legendary-from'
          : 'text-rare-from'} px-4 md:px-8 text-2xl flex items-center z-0 -mt-2 md:-mt-4"
      >
        <Icon path={mdiStar} />
        <Icon path={mdiStar} />
        <Icon path={mdiStar} />
        <Icon path={mdiStar} />
        {#if character.rarity === 5}
          <Icon path={mdiStar} />
        {/if}
        <Icon path={mdiCircle} size={0.4} className="mx-2 mt-1" color="white" />
        <p class="text-base text-white font-semibold mt-1">{character.weapon.name}</p>
      </div>
      <p class="text-gray-200 px-4 md:px-8">{data.description}</p>
      <div class="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-8">
        <div class="text-gray-200 rounded-xl border border-gray-200 border-opacity-25 p-4">
          <p>Talent Book</p>
          <div class="flex items-center mt-2">
            <div class="mr-2 h-12 w-12 bg-background rounded-xl p-1">
              <img src="/images/items/{bookId}.png" alt={book.name} class="h-full max-w-full object-contain" />
            </div>
            <p class="mb-1 font-semibold">{book.name}</p>
          </div>
        </div>
        <div class="text-gray-200 rounded-xl border border-gray-200 border-opacity-25 p-4">
          <p>Ascension Materials</p>
          <div class="flex items-center mt-2">
            {#each materials as material}
              {#if material.item.id !== 'none'}
                <div class="mr-2 h-12 w-12 bg-background rounded-xl p-1">
                  <img
                    src="/images/items/{material.item.id}.png"
                    alt={material.item.name}
                    title={material.item.name}
                    class="h-full max-w-full object-contain mx-auto"
                  />
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <div class="md:px-4 mt-4 block overflow-x-auto whitespace-no-wrap w-screen md:w-auto">
        <div class="px-4" style="width: min-content;">
          <div class="table max-w-full rounded-xl border border-gray-200 border-opacity-25">
            <table class="text-gray-200 w-full">
              <tr>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('characters.asc')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('characters.lvl')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('characters.hp')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('characters.atk')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                  {$t('characters.def')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2"
                  >{$t('characters.critRate')}
                </td>
                <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2"
                  >{$t('characters.critDamage')}
                </td>
                {#if data.statGrow !== 'critRate' && data.statGrow !== 'critDamage'}
                  <td class="text-center whitespace-no-wrap border-gray-700 font-semibold px-2">
                    {$t(`characters.${data.statGrow}`)}
                  </td>
                {/if}
              </tr>
              {#each showedIndex as index, i}
                <tr>
                  {#if i % 2 === 0}
                    <td rowspan={2} class="text-center border-t border-gray-700 px-2">{ascen[i]}</td>
                  {/if}
                  <td class="text-center border-t border-gray-700 px-2">{level[i]}</td>
                  <td class="text-center border-t border-gray-700 px-2">{Math.round(data.hp[index])}</td>
                  <td class="text-center border-t border-gray-700 px-2">{Math.round(data.atk[index])}</td>
                  <td class="text-center border-t border-gray-700 px-2">{Math.round(data.def[index])}</td>
                  {#if data.statGrow === 'critRate'}
                    <td class="text-center border-t border-gray-700 px-2">
                      {numberFormat.format(data.critRate[index] * 100)}%
                    </td>
                  {:else}
                    <td class="text-center border-t border-gray-700 px-2">5%</td>
                  {/if}
                  {#if data.statGrow === 'critDamage'}
                    <td class="text-center border-t border-gray-700 px-2">
                      {numberFormat.format(data.critDamage[index] * 100)}%
                    </td>
                  {:else}
                    <td class="text-center border-t border-gray-700 px-2">50%</td>
                  {/if}
                  {#if data.statGrow !== 'critRate' && data.statGrow !== 'critDamage' && data.statGrow !== 'em'}
                    <td class="text-center border-t border-gray-700 px-2">
                      {numberFormat.format(data[data.statGrow][index] * 100)}%
                    </td>
                  {:else if data.statGrow === 'em'}
                    <td class="text-center border-t border-gray-700 px-2">
                      {numberFormat.format(data[data.statGrow][index])}
                    </td>
                  {/if}
                </tr>
              {/each}
            </table>
          </div>
        </div>
      </div>
      <Button className="mt-4 mx-4 md:mx-8" on:click={() => scrollToView(constellationDiv)}>
        {$t('characters.constellations')}
      </Button>
    </div>
  </div>
  <div class="flex flex-col mt-4 text-white px-4 md:px-8">
    <p class="font-black font-display text-2xl mt-4">{$t('characters.talents')}</p>
    <SkillCard {id} image="talent_1" data={data.attack} withQuote={false} />
    <SkillCard {id} image="talent_2" data={data.elementalSkill} withQuote={true} />
    <SkillCard {id} image="talent_3" data={data.burst} withQuote={true} />
  </div>
  <div class="flex flex-col text-white px-4 md:px-8">
    <p class="font-black font-display text-2xl mt-4">{$t('characters.passiveTalents')}</p>
    {#each data.passives as passive, i}
      <PassiveSkillCard {id} image="talent_{i + 4}" data={passive} />
    {/each}
  </div>
  <div class="flex flex-col text-white px-4 md:px-8" id="constellations" bind:this={constellationDiv}>
    <a href="/characters/{id}/#constellations" class="font-black font-display text-2xl mt-4"
      >{$t('characters.constellations')}</a
    >
    {#each data.constellations as constellation, i}
      <PassiveSkillCard
        {id}
        fade={constellationCountTotal > -1 && constellationCountTotal < i + 1}
        image={`constellation_${i + 1}`}
        data={constellation}
      />
    {/each}
  </div>
</div>

<style>
  .character-image {
    height: calc(100vh - 4rem);
    max-height: 700px;
    max-width: 100%;
  }

  .side-detail {
    margin-top: -40vh;
    background: linear-gradient(180deg, rgba(37, 41, 74, 0) 0%, rgba(37, 41, 74, 0.75) 10%);
  }

  @screen xl {
    .character-image {
      max-width: 550px;
    }

    .side-detail {
      margin-top: 0;
    }
  }

  td:not(:last-child) {
    @apply border-r;
  }
</style>
