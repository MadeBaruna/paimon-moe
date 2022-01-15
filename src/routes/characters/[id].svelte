<script context="module">
  import { builds as buildsJson } from '../../data/build';

  export async function preload(page) {
    const { id } = page.params;
    const data = await import(`../../data/characterData/${id}.json`);
    const buildData = buildsJson[id];

    return { id, data, buildData };
  }
</script>

<script>
  export let id;
  export let data;
  export let buildData;

  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import { mdiChevronRight, mdiCircle, mdiContentSave, mdiMinus, mdiPencil, mdiPlus, mdiStar } from '@mdi/js';
  import Icon from '../../components/Icon.svelte';
  import Button from '../../components/Button.svelte';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateSave } from '../../stores/saveManager';
  import { characters } from '../../data/characters';
  import { itemGroup } from '../../data/itemGroup';

  import SkillCard from './_skillCard.svelte';
  import PassiveSkillCard from './_passiveSkillCard.svelte';
  import { weaponList } from '../../data/weaponList';
  import artifacts from '../../data/artifacts/en.json';
  import weapons from '../../data/weapons/en.json';
  import Ad from '../../components/Ad.svelte';
  import { formatStat } from '../../helper';

  const rarityColor = {
    1: 'text-white',
    2: 'text-green-400',
    3: 'text-primary',
    4: 'text-rare-from',
    5: 'text-legendary-from',
  };

  let constellationDiv;
  let talentDiv;
  const builds = Object.entries(buildData.roles)
    .sort((a, b) => b[1].recommended - a[1].recommended)
    .map((e) => ({ name: e[0], build: e[1] }));
  let currentBuild = 0;

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
  const bossItem = character.material.boss;

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
    manualCount = Math.max(-constellationCount - 1, manualCount + val);
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

    if (chars[id].default + chars[id].wish === 0 && chars[id].manual === 0) {
      delete chars[id];
    }

    const prefix = getAccountPrefix();
    await updateSave(`${prefix}characters`, chars);
  }

  function scrollToView(view) {
    view.scrollIntoView({ behavior: 'smooth' });
  }

  function selectBuild(index) {
    currentBuild = index;
    window.location.hash = builds[index].name.replace(/[ /]/g, '_').toLowerCase();
  }

  onMount(async () => {
    const buildHash = window.location.hash.substring(1);
    console.log(buildHash);
    const foundBuild = builds.findIndex((e) => e.name.replace(/[ /]/g, '_').toLowerCase() === buildHash);
    if (foundBuild > -1) {
      currentBuild = foundBuild;
    }

    await getConstellationCount();
  });

  $: constellationCountTotal = constellationCount + manualCount;
  $: buildName = builds[currentBuild].name;
  $: build = builds[currentBuild].build;
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
  <div class="flex">
    <div class="flex flex-col xl:flex-row items-start max-w-screen-xl">
      <img
        class="character-image object-cover md:pl-8 self-center xl:self-auto"
        src="/images/characters/full/{id}.png"
        alt={character.name}
      />
      <div class="flex flex-col items-start mt-4 xl:mt-0 side-detail pt-4 xl:pt-0">
        <div class="flex items-center px-4 md:px-8">
          <h1 class="font-display font-black text-4xl leading-10 md:leading-normal md:text-5xl text-white mr-4 z-0">
            {$t(character.name)}
          </h1>
          <img
            class="h-10 mr-4 z-10 object-contain"
            src="/images/elements/{character.element.id}.png"
            alt={character.element.name}
          />
          <div
            class="flex space-y-1 lg:space-y-0 lg:space-x-1 {editConstellation
              ? 'flex-col'
              : ''} md:flex-row items-center"
          >
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
          <div class="text-gray-200 rounded-xl border border-gray-200 border-opacity-25 p-4 flex">
            <div class="mr-4">
              <p>{$t('characters.talentBook')}</p>
              <div class="flex items-center mt-2">
                <div class="mr-2 h-12 w-12 bg-background rounded-xl p-1">
                  <img src="/images/items/{bookId}.png" alt={book.name} class="h-full max-w-full object-contain" />
                </div>
                <p class="mb-1 font-semibold">{book.name}</p>
              </div>
            </div>
            <div>
              <p>{$t('characters.bossItem')}</p>
              <div class="flex items-center mt-2">
                <div class="mr-2 h-12 w-12 bg-background rounded-xl p-1">
                  <img
                    src="/images/items/{bossItem.id}.png"
                    alt={bossItem.name}
                    title={bossItem.name}
                    class="h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="text-gray-200 rounded-xl border border-gray-200 border-opacity-25 p-4">
            <p>{$t('characters.ascensionMaterial')}</p>
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
        <div class="flex mt-4 mx-4 md:mx-8">
          <Button className="mr-4" on:click={() => scrollToView(talentDiv)}>
            {$t('characters.talents')}
          </Button>
          <Button on:click={() => scrollToView(constellationDiv)}>
            {$t('characters.constellations')}
          </Button>
        </div>
      </div>
    </div>
    <Ad class="ml-4" type="desktop" variant="mpu" id="1" />
  </div>
  <Ad class="flex justify-center my-4" type="mobile" variant="mpu" id="2" />
  <div class="flex flex-col mt-4 text-white px-4 md:px-8 max-w-screen-xl">
    {#if builds.length > 1}
      <div class="flex mt-4 items-center">
        {#each builds as item, i}
          <button class="pill mr-2 {currentBuild === i ? 'active' : ''}" on:click={() => selectBuild(i)}>
            {item.name}
            {item.build.recommended ? '👍' : ''}
          </button>
        {/each}
      </div>
    {/if}
    <div class="p-4 mt-2 rounded-xl bg-item flex flex-col">
      <h3 class="font-black font-display text-xl">
        {buildName}
        {$t('characters.build')}
        {build.recommended ? '👍' : ''}
      </h3>
      <p class="whitespace-pre-wrap text-gray-200 character-note">{@html build.note}</p>
      {#if build.tip !== ''}
        <h4 class="font-black font-display text-lg mt-4">ABILITY TIP</h4>
        <p class="whitespace-pre-wrap text-gray-200">{build.tip}</p>
      {/if}
      <div class="flex mt-2 -mx-4 flex-wrap">
        <div class="mx-4 mt-4">
          <h4 class="font-black font-display text-lg">MAIN STATS</h4>
          <div class="flex items-center">
            <div class="px-2 py-1 mr-3 bg-background rounded-md w-32">
              <img class="w-8 h-8 inline mr-1" src="/images/artifacts/adventurer_sands.png" alt="SANDS" />
              <span class="font-semibold">SANDS</span>
            </div>
            <p>{build.mainStats.sands}</p>
          </div>
          <div class="flex items-center mt-1">
            <div class="px-2 py-1 mr-3 bg-background rounded-md w-32">
              <img class="w-8 h-8 inline mr-1" src="/images/artifacts/adventurer_goblet.png" alt="GOBLET" />
              <span class="font-semibold">GOBLET</span>
            </div>
            <p>{build.mainStats.goblet}</p>
          </div>
          <div class="flex items-center mt-1">
            <div class="px-2 py-1 mr-3 bg-background rounded-md w-32">
              <img class="w-8 h-8 inline mr-1" src="/images/artifacts/adventurer_circlet.png" alt="CIRCLET" />
              <span class="font-semibold">CIRCLET</span>
            </div>
            <p>{build.mainStats.circlet}</p>
          </div>
        </div>
        <div class="mt-4  mx-4">
          <h4 class="font-black font-display text-lg">SUB STATS</h4>
          <div class="decimal-list">
            {#each build.subStats as stat, i}
              <p><span class="font-semibold w-4 inline-block">{i + 1}.</span> {stat}</p>
            {/each}
          </div>
        </div>
        <div class="mt-4 mx-4">
          <h4 class="font-black font-display text-lg">TALENT PRIORITY</h4>
          <div class="flex items-center">
            {#each build.talent as talent, i}
              <p class="mr-1">{talent}</p>
              {#if i !== build.talent.length - 1}
                <Icon className="mr-1" path={mdiChevronRight} />
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <div class="flex -mx-4 flex-wrap">
        <div class="mt-4 mx-4 -mb-1">
          <h4 class="font-black font-display text-lg">WEAPONS</h4>
          {#each build.weapons as weapon, i}
            <a class="popup flex mb-1" href="/weapons/{weapon.id}">
              <div class="popup-container">
                <div class="bg-gray-300 text-gray-900 p-2 rounded-md mb-1 shadow-2xl">
                  <p class="font-bold text-primary text-sm">
                    {weapons[weapon.id].skill.name}
                  </p>
                  <p class="text-gray-900 text-sm break-words" style="filter: brightness(0);">
                    {@html weapons[weapon.id].skill.description}
                  </p>
                  <div class="flex mt-2">
                    <div class="mr-4">
                      <p class="font-bold text-primary text-sm">ATK</p>
                      <p class="text-gray-900 text-sm">{Math.round(weapons[weapon.id].atk[96])}</p>
                    </div>
                    {#if weapons[weapon.id].secondary.stats}
                      <div>
                        <p class="font-bold text-primary text-sm">
                          {$t(`weapon.${weapons[weapon.id].secondary.name}`)}
                        </p>
                        <p class="text-gray-900 text-sm">
                          {formatStat(weapons[weapon.id].secondary.stats[96], weapons[weapon.id].secondary.name)}
                        </p>
                      </div>
                    {/if}
                  </div>
                </div>
              </div>

              <div class="flex items-center bg-background rounded-md p-1 mr-1">
                <p class="w-6 text-center mr-1" style="padding-top: 2px;">{i + 1}</p>
                <Icon className={rarityColor[weaponList[weapon.id].rarity]} path={mdiStar} size={0.8} />
                <img class="h-8 mr-2 ml-2" src="/images/weapons/{weapon.id}.png" alt={weaponList[weapon.id].name} />
                <p class="pl-1 pr-2" style="padding-top: 2px;">
                  <span>{weaponList[weapon.id].name}</span>
                  {#if weapon.refine}
                    <span class="ml-2 bg-blue-300 rounded-md px-1 text-sm text-gray-900"
                      >R{weapon.refine.join('-')}</span
                    >
                  {/if}
                  {#if weapon.stack}
                    <span class="ml-2 bg-orange-300 rounded-md px-1 text-sm text-gray-900">S{weapon.stack}</span>
                  {/if}
                </p>
              </div>
            </a>
          {/each}
        </div>
        <div class="mt-4 mx-4 -mb-1 md:max-w-screen-sm">
          <h4 class="font-black font-display text-lg">ARTIFACTS</h4>
          {#each build.artifacts as item, i}
            <div class="flex mb-1">
              <div class="flex items-center justify-center bg-background rounded-md px-1 mr-1">
                <p class="w-6 text-center" style="min-width: 1.5rem; padding-top: 2px;">{i + 1}</p>
                <div class="flex flex-wrap -mb-1">
                  {#each item as artifact, i}
                    {#if item.length > 2 && i === 0}
                      <div
                        class="flex items-center justify-center bg-background rounded-md px-2 py-1 mb-1 mr-1"
                        style="height: 40px;"
                      >
                        <p class="text-center whitespace-no-wrap text-primary" style="padding-top: 2px;">Choose 2</p>
                      </div>
                    {/if}
                    <a
                      class="popup bg-background rounded-md py-1 pl-1 pr-2 mr-1 mb-1 flex items-center"
                      href={artifact === '+18%_atk_set' ? undefined : `/artifacts/${artifact}`}
                    >
                      <div class="popup-container">
                        <div class="bg-gray-300 text-gray-900 p-2 rounded-md mb-1 shadow-2xl">
                          {#if artifact !== '+18%_atk_set'}
                            {#each artifacts[artifact].bonuses as bonus, i}
                              <div class={i === 1 ? 'mt-2' : ''}>
                                <p class="font-bold text-primary text-sm">
                                  {$t('artifact.setPiece', { values: { piece: (i + 1) * 2 } })}
                                </p>
                                <p class="text-gray-900 text-sm">{bonus}</p>
                              </div>
                            {/each}
                          {:else}
                            <a
                              class="flex items-center text-primary hover:text-blue-400 pb-1 border-b border-gray-400"
                              href="/artifacts/gladiators_finale"
                            >
                              <img
                                class="h-8 ml-1 mr-2"
                                src="/images/artifacts/gladiators_finale_flower.png"
                                alt="Gladiator's Finale"
                              />
                              <span class="font-semibold">Gladiator's Finale</span>
                            </a>
                            <a
                              class="flex items-center text-primary hover:text-blue-400 pt-1"
                              href="/artifacts/shimenawas_reminiscence"
                            >
                              <img
                                class="h-8 ml-1 mr-2"
                                src="/images/artifacts/shimenawas_reminiscence_flower.png"
                                alt="Shimenawa's Reminiscence"
                              />
                              <span class="font-semibold">Shimenawa's Reminiscence</span>
                            </a>
                          {/if}
                        </div>
                      </div>
                      <img
                        class="h-8 mr-2"
                        src="/images/artifacts/{artifact === '+18%_atk_set'
                          ? 'gladiators_finale'
                          : artifact}_flower.png"
                        alt={artifact === '+18%_atk_set' ? '+18% ATK set' : artifacts[artifact].name}
                      />
                      <span style="padding-top: 2px;">
                        {artifact === '+18%_atk_set' ? '+18% ATK Set' : artifacts[artifact].name}
                      </span>
                      <span class="ml-2 bg-gray-400 rounded-md px-1 text-sm text-gray-900">
                        {item.length === 1 ? '4' : '2'}
                      </span>
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <a
    class="mx-4 md:mx-8 px-2 py-1 bg-background hover:bg-item text-primary mt-2 rounded-md inline-block"
    href="https://tinyurl.com/genshinbuilds"
    target="_blank"
  >
    {$t('characters.source')}
  </a>
  <Ad class="ml-8 mt-4 mb-2" type="desktop" variant="lb" id="1" />
  <Ad type="desktop" variant="lb" id="2" />
  <div class="flex flex-col mt-4 text-white px-4 md:px-8 max-w-screen-xl" bind:this={talentDiv}>
    <a href="/characters/{id}/#talents" class="font-black font-display text-2xl mt-4">
      {$t('characters.talents')}
    </a>
    <SkillCard {id} image="talent_1" data={data.attack} withQuote={false} />
    <SkillCard {id} image="talent_2" data={data.elementalSkill} withQuote={true} />
    <SkillCard {id} image="talent_3" data={data.burst} withQuote={true} />
  </div>
  <div class="flex flex-col text-white px-4 md:px-8 max-w-screen-xl">
    <p class="font-black font-display text-2xl mt-4">{$t('characters.passiveTalents')}</p>
    {#each data.passives as passive, i}
      <PassiveSkillCard {id} image="talent_{i + 4}" data={passive} />
    {/each}
  </div>
  <Ad class="ml-8 mt-4 mb-2" type="desktop" variant="lb" id="3" />
  <Ad class="flex justify-center mt-4 mb-2" type="mobile" variant="mpu" id="1" />
  <Ad type="mobile" variant="lb" id="1" />
  <div class="flex flex-col text-white px-4 md:px-8 max-w-screen-xl" id="constellations" bind:this={constellationDiv}>
    <a href="/characters/{id}/#constellations" class="font-black font-display text-2xl mt-4">
      {$t('characters.constellations')}
    </a>
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
  .pill {
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
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

  .character-image {
    height: calc(100vh - 4rem);
    max-height: 700px;
    max-width: 100%;
  }

  .side-detail {
    margin-top: -40vh;
    background: linear-gradient(180deg, rgba(37, 41, 74, 0) 0%, rgba(37, 41, 74, 0.75) 10%);
  }

  .character-note :global(b) {
    color: #ffd780ff;
    font-weight: 400;
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

  .popup {
    @apply relative;

    .popup-container {
      @apply hidden absolute top-0 left-0;
      transform: translateY(-100%);
      width: calc(100vw - 100px);
    }

    @screen md {
      .popup-container {
        width: 320px;
      }
    }

    &:hover {
      .popup-container {
        @apply block;
      }
    }
  }
</style>
