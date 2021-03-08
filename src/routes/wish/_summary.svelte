<script>
  import { mdiStar } from '@mdi/js';
  import { onMount } from 'svelte';
  import Icon from '../../components/Icon.svelte';
  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';

  import { readSave, updateTime, fromRemote } from '../../stores/saveManager';
  import SummaryItem from './_summaryItem.svelte';

  const types = [
    {
      name: 'Character Event',
      id: 'character-event',
    },
    {
      name: 'Weapon Event',
      id: 'weapon-event',
    },
    {
      name: 'Standard',
      id: 'standard',
    },
    {
      name: "Beginners' Wish",
      id: 'beginners',
    },
  ];

  let loading = true;
  const avg = {};

  $: if ($fromRemote) {
    readLocalData();
  }

  $: if ($updateTime) {
    readLocalData();
  }

  onMount(() => {
    readLocalData();
  });

  export function readLocalData() {
    console.log('wish summary read local');

    for (let type of types) {
      const path = `wish-counter-${type.id}`;
      const data = readSave(path);
      if (data !== null) {
        const counterData = JSON.parse(data);
        const pulls = counterData.pulls || [];
        const total = counterData.total;

        let legendary = 0;
        let legendaryPity = 0;
        let legendaryPulls = [];
        let rare = 0;
        let rarePity = 0;
        for (let pull of pulls) {
          let rarity;
          let itemName;
          if (pull.type === 'character') {
            rarity = characters[pull.id].rarity;
            itemName = characters[pull.id].name;
          } else if (pull.type === 'weapon') {
            rarity = weaponList[pull.id].rarity;
            itemName = weaponList[pull.id].name;
          }

          if (rarity === 5) {
            legendary++;
            legendaryPity += pull.pity;
            legendaryPulls.push({ name: itemName, pity: pull.pity });
          } else if (rarity === 4) {
            rare++;
            rarePity += pull.pity;
          }
        }

        avg[type.id] = {
          rare: {
            total: rare,
            percentage: total > 0 ? rare / total : 0,
            pity: rare > 0 ? rarePity / rare : 0,
          },
          legendary: {
            total: legendary,
            percentage: total > 0 ? legendary / total : 0,
            pity: legendary > 0 ? legendaryPity / legendary : 0,
            pulls: legendaryPulls,
          },
        };
      }
    }

    console.log(avg);
    loading = false;
  }
</script>

{#if !loading}
  <div class="flex flex-col">
    {#if avg[types[0].id]}
      <SummaryItem avg={avg[types[0].id]} type={types[0]} withBottomSpace />
    {/if}
    {#if avg[types[1].id]}
      <SummaryItem avg={avg[types[1].id]} type={types[1]} />
    {/if}
  </div>
  <div class="flex flex-col">
    {#if avg[types[2].id]}
      <SummaryItem avg={avg[types[2].id]} type={types[2]} withBottomSpace />
    {/if}
    {#if avg[types[3].id]}
      <SummaryItem avg={avg[types[3].id]} type={types[3]} />
    {/if}
  </div>
{/if}
