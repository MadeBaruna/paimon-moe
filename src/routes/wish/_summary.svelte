<script>
  import { t } from 'svelte-i18n';

  import { createEventDispatcher, onMount } from 'svelte';
  import dayjs from 'dayjs';
  import debounce from 'lodash/debounce';

  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';
  import { bannerTypes } from '../../data/bannerTypes';

  import { getAccountPrefix } from '../../stores/account';
  import { readSave, updateTime, fromRemote, updateSave } from '../../stores/saveManager';
  import SummaryItem from './_summaryItem.svelte';
  import Icon from '../../components/Icon.svelte';
  import { mdiEarth } from '@mdi/js';

  const dispatch = createEventDispatcher();

  let numberFormat = Intl.NumberFormat();

  export let monthlyData = {};

  const types = bannerTypes;

  let loading = true;
  let wishCount = 0;
  let box = [0, 1, 2, 3];
  const avg = {};
  const percentages = {};

  const readDebounced = debounce(() => {
    readLocalData();
  }, 1000);

  $: if ($fromRemote) {
    readDebounced();
  }

  $: if ($updateTime) {
    readDebounced();
  }

  onMount(async () => {
    await readLocalData();
  });

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

  export async function readLocalData() {
    let totalWish = 0;
    console.log('wish summary read local');
    const prefix = getAccountPrefix();

    let currentMonthlyData = {};

    // collected characters stuff
    let updateCollectedCharacters = false;
    let collectedCharacters = {};
    const collectedCharactersData = await readSave(`${prefix}characters`);
    if (collectedCharactersData !== null) {
      collectedCharacters = collectedCharactersData;
      for (const collectedId of Object.keys(collectedCharacters)) {
        collectedCharacters[collectedId].wish = 0;
      }
      updateCollectedCharacters = true;
    } else {
      collectedCharacters = JSON.parse(JSON.stringify(defaultChars));
    }
    const collectablesNeedUpdateData = await readSave(`${prefix}collectables-updated`);
    if (collectablesNeedUpdateData === null || collectablesNeedUpdateData === true) {
      updateCollectedCharacters = true;
    } else if (collectablesNeedUpdateData === false) {
      updateCollectedCharacters = false;
    }

    for (let type of types) {
      const path = `wish-counter-${type.id}`;
      const data = await readSave(`${prefix}${path}`);
      if (data !== null) {
        const counterData = data;
        const pulls = counterData.pulls || [];
        const total = counterData.total;

        totalWish += total;

        let legendary = 0;
        let legendaryPity = 0;
        let legendaryPulls = [];
        let rare = 0;
        let rareWeapon = 0;
        let rarePityWeapon = 0;
        let rareCharacter = 0;
        let rarePityCharacter = 0;
        let rarePity = 0;
        for (let pull of pulls) {
          let rarity;
          let itemName;
          let currentType;
          if (pull.type === 'character') {
            rarity = characters[pull.id].rarity;
            itemName = characters[pull.id].name;
            currentType = 'character';

            // collected characters stuff
            if (updateCollectedCharacters) {
              if (collectedCharacters[pull.id]) {
                collectedCharacters[pull.id].wish += 1;
              } else {
                collectedCharacters[pull.id] = {
                  default: 0,
                  manual: 0,
                  wish: 1,
                };
              }
            }
          } else if (pull.type === 'weapon') {
            rarity = weaponList[pull.id].rarity;
            itemName = weaponList[pull.id].name;
            currentType = 'weapon';
          }

          const time = dayjs(pull.time).format('YYYY-MM');
          if (currentMonthlyData[time] === undefined) {
            currentMonthlyData[time] = {
              total: 0,
              legendary: 0,
              rare: 0,
            };
          }

          currentMonthlyData[time].total++;

          if (rarity === 5) {
            legendary++;
            legendaryPity += pull.pity;
            currentMonthlyData[time].legendary++;

            legendaryPulls.push({ name: itemName, pity: pull.pity, rate: pull.rate });
          } else if (rarity === 4) {
            rare++;
            rarePity += pull.pity;
            currentMonthlyData[time].rare++;

            if (currentType === 'character') {
              rareCharacter++;
              rarePityCharacter += pull.pity;
            } else if (currentType === 'weapon') {
              rareWeapon++;
              rarePityWeapon += pull.pity;
            }
          }
        }

        avg[type.id] = {
          rare: {
            total: rare,
            percentage: total > 0 ? rare / total : 0,
            pity: rare > 0 ? rarePity / rare : 0,
            weapon: {
              total: rareWeapon,
              percentage: total > 0 ? rareWeapon / total : 0,
              pity: rareWeapon > 0 ? rarePityWeapon / rareWeapon : 0,
            },
            character: {
              total: rareCharacter,
              percentage: total > 0 ? rareCharacter / total : 0,
              pity: rareCharacter > 0 ? rarePityCharacter / rareCharacter : 0,
            },
          },
          legendary: {
            total: legendary,
            percentage: total > 0 ? legendary / total : 0,
            pity: legendary > 0 ? legendaryPity / legendary : 0,
            pulls: legendaryPulls,
          },
        };

        if (counterData.rateoff !== undefined) {
          if (avg[type.id].rare.total > 0) {
            avg[type.id].rare.rateOff = {
              total: counterData.rateoff.rare.win,
              percentage: counterData.rateoff.rare.win / (counterData.rateoff.rare.win + counterData.rateoff.rare.lose),
            };
          }
          if (avg[type.id].legendary.total > 0) {
            avg[type.id].legendary.rateOff = {
              total: counterData.rateoff.legendary.win,
              percentage:
                counterData.rateoff.legendary.win /
                (counterData.rateoff.legendary.win + counterData.rateoff.legendary.lose),
            };
          }

          percentages[type.id] = {
            winRateOff: {
              legendary: avg[type.id].legendary.rateOff.percentage,
              rare: avg[type.id].rare.rateOff.percentage,
            },
          };
        }

        percentages[type.id] = {
          ...percentages[type.id],
          legendary: avg[type.id].legendary.percentage,
          rare: avg[type.id].rare.percentage,
        };
      }
    }

    wishCount = totalWish;
    monthlyData = currentMonthlyData;

    if (
      avg['weapon-event'] !== undefined &&
      avg['standard'] !== undefined &&
      avg['weapon-event'].legendary.total > avg['standard'].legendary.total
    ) {
      box = [0, 2, 1, 3];
    }

    if (updateCollectedCharacters && totalWish > 0) {
      console.log('updating collectables');
      await updateSave(`${prefix}characters`, collectedCharacters);
      await updateSave(`${prefix}collectables-updated`, false);
    }

    dispatch('summaryread', percentages);

    loading = false;
  }
</script>

{#if !loading}
  <div class="col-span-1 md:col-span-2 w-full">
    <div class="container">
      {#if avg[types[box[0]].id]}
        <SummaryItem avg={avg[types[box[0]].id]} type={types[box[0]]} order={1} />
      {/if}
      {#if avg[types[box[1]].id]}
        <SummaryItem avg={avg[types[box[1]].id]} type={types[box[1]]} order={box[1] + 1} />
      {/if}
      {#if avg[types[box[2]].id]}
        <SummaryItem avg={avg[types[box[2]].id]} type={types[box[2]]} order={box[2] + 1} />
      {/if}
      <div class="order-4">
        {#if avg[types[box[3]].id]}
          <SummaryItem avg={avg[types[box[3]].id]} type={types[box[3]]} />
          <div class="h-4 md:h-0" />
        {/if}
        <div class="flex flex-col summary-item">
          <div class="bg-item rounded-xl p-4 flex items-center w-full text-white mb-4" style="height: min-content;">
            {$t('wish.wishesWorth')} <img class="w-4 h-4 mx-2" src="/images/primogem.png" alt="primogem" />
            {numberFormat.format(wishCount * 160)}
          </div>
          <a
            href="/wish/tally"
            class="bg-item rounded-xl p-4 flex items-center w-full text-white hover:text-primary"
            style="height: min-content;"
          >
            <Icon path={mdiEarth} className="mr-2" />
            {$t('wish.globalWishTally')}
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    @apply flex flex-col gap-4;
  }

  @screen md {
    .container {
      @apply block gap-0;
      column-count: 2;
      column-gap: 1rem;
    }
  }

  @screen md {
    .summary-item {
      margin: 0;
      display: grid;
      grid-template-rows: 1fr auto;
      margin-bottom: 1rem;
      break-inside: avoid;
    }
  }
</style>
