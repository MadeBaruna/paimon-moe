<script>
  import { t } from 'svelte-i18n';

  import { getContext } from 'svelte';

  import { characters } from '../data/characters';
  import { itemGroup } from '../data/itemGroup';
  import { itemList } from '../data/itemList';
  import { weaponList } from '../data/weaponList';

  import CharacterSelect from '../components/CharacterSelect.svelte';
  import WeaponSelect from '../components/WeaponSelect.svelte';
  import TodoAddModal from '../components/TodoAddModal.svelte';
  import { addTodo } from '../stores/todo';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let dayName = {
    monday_thursday: ['Monday', 'Thursday'],
    tuesday_friday: ['Tuesday', 'Friday'],
    wednesday_saturday: ['Wednesday', 'Saturday'],
  };

  let charactersDays = {
    monday_thursday: {},
    tuesday_friday: {},
    wednesday_saturday: {},
  };

  let weaponsDays = {
    monday_thursday: {},
    tuesday_friday: {},
    wednesday_saturday: {},
  };

  let allItems = {};

  let selectedCharacter = null;
  let selectedWeapon = null;

  function addTodoItem(item, amount) {
    addTodo({
      type: 'item',
      item,
      amount,
    });

    closeModal();
  }

  function openAddTodo(item) {
    openModal(
      TodoAddModal,
      {
        item: itemList[item].parent && itemList[item].rarity < 5 ? itemList[item].parent : item,
        addTodo: addTodoItem,
        cancel: closeModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '400px' },
      },
    );
  }

  function parseData() {
    dayName = {
      monday_thursday: ['Monday', 'Thursday'],
      tuesday_friday: ['Tuesday', 'Friday'],
      wednesday_saturday: ['Wednesday', 'Saturday'],
    };

    charactersDays = {
      monday_thursday: {
        teachings_of_freedom: [],
        teachings_of_prosperity: [],
        teachings_of_transience: [],
        teachings_of_admonition: [],
      },
      tuesday_friday: {
        teachings_of_resistance: [],
        teachings_of_diligence: [],
        teachings_of_elegance: [],
        teachings_of_ingenuity: [],
      },
      wednesday_saturday: {
        teachings_of_ballad: [],
        teachings_of_gold: [],
        teachings_of_light: [],
        teachings_of_praxis: [],
      },
    };

    weaponsDays = {
      monday_thursday: {},
      tuesday_friday: {},
      wednesday_saturday: {},
    };

    allItems = {};

    if (
      (selectedCharacter === null && selectedWeapon === null) ||
      (selectedCharacter !== null && selectedWeapon === null) ||
      (selectedCharacter !== null && selectedWeapon !== null)
    ) {
      for (const [_, character] of Object.entries(characters)) {
        if (selectedCharacter !== null && selectedCharacter.id !== character.id) continue;

        const item = character.material.book[0];
        if (charactersDays[item.day.join('_')][item.id] === undefined) {
          charactersDays[item.day.join('_')][item.id] = [];
        }
        charactersDays[item.day.join('_')][item.id].push(character.id);

        if (character.id.startsWith('traveler')) {
          for (let i = 1; i <= 2; i++) {
            const e = character.material.book[i];
            const parent = itemList[e.parent];
            if (charactersDays[parent.day.join('_')][parent.id] === undefined) {
              charactersDays[parent.day.join('_')][parent.id] = [];
            }
            charactersDays[parent.day.join('_')][parent.id].push(character.id);
          }
        }

        const ascension = character.ascension[1];
        for (const item of ascension.items) {
          if (item.amount) {
            if (allItems[item.item.id] === undefined) {
              allItems[item.item.id] = {};
            }
            allItems[item.item.id][character.id] = 'characters';
          }
        }

        const bossMaterial = character.material.boss;
        if (allItems[bossMaterial.id] === undefined) {
          allItems[bossMaterial.id] = {};
        }
        allItems[bossMaterial.id][character.id] = 'characters';
      }
    }

    if (
      (selectedCharacter === null && selectedWeapon === null) ||
      (selectedCharacter === null && selectedWeapon !== null) ||
      (selectedCharacter !== null && selectedWeapon !== null)
    ) {
      for (const [_, weapon] of Object.entries(weaponList)) {
        if (selectedWeapon !== null && selectedWeapon.id !== weapon.id) continue;

        const items = weapon.ascension[0].items;
        for (const itemData of items) {
          const item = itemData.item;
          if (item.day) {
            if (weaponsDays[item.day.join('_')][item.id] === undefined) {
              weaponsDays[item.day.join('_')][item.id] = [];
            }
            weaponsDays[item.day.join('_')][item.id].push(weapon.id);
          } else if (itemData.amount) {
            if (allItems[item.id] === undefined) {
              allItems[item.id] = {};
            }
            allItems[item.id][weapon.id] = 'weapons';
          }
        }
      }
    }
  }

  parseData();

  $: selectedCharacter, parseData();
  $: selectedWeapon, parseData();
</script>

<svelte:head>
  <title>Item List - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Item List Table to see what to farm each day and for each character or weapon"
  />
  <meta
    property="og:description"
    content="Genshin Impact Item List Table to see what to farm each day and for each character or weapon"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('items.title')}</h1>
  <p class="text-gray-400 px-4 md:px-8 font-medium pb-4" style="margin-top: -1rem;">
    ※ {$t('items.subtitle')}
  </p>
  <div class="pb-4 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-screen-md">
    <CharacterSelect bind:selected={selectedCharacter} placeholder={$t('items.searchCharacter')} />
    <WeaponSelect bind:selected={selectedWeapon} placeholder={$t('items.searchWeapon')} />
  </div>
  <div class="block overflow-x-auto whitespace-nowrap pb-8">
    <div class="px-4 md:px-8 table max-w-full">
      <table class="w-full block p-4 bg-item rounded-xl">
        <thead>
          <th class="text-gray-400 select-none font-display text-lg text-left px-4 pb-2 border-gray-700 border-b">
            {$t('items.day')}
          </th>
          <th class="text-gray-400 select-none font-display text-lg text-left px-4 pb-2 border-gray-700 border-b">
            {$t('items.material')}
          </th>
          <th class="text-gray-400 select-none font-display text-lg text-left px-4 pb-2 border-gray-700 border-b">
            {$t('items.characterWeapons')}
          </th>
        </thead>
        <tbody>
          {#each Object.entries(dayName) as [day, dayArr]}
            {#each Object.entries(charactersDays[day]) as [itemName, chars], index}
              <tr>
                <td
                  class={index === Object.entries(charactersDays[day]).length - 1 &&
                  Object.entries(weaponsDays[day]).length === 0
                    ? 'border-gray-700 border-b py-2'
                    : 'py-2'}
                >
                  {#if index === 0}{$t(`days.${dayArr[0]}`)}<br />{$t(`days.${dayArr[1]}`)}{/if}
                </td>
                <td class="border-gray-700 border-b text-center align-middle py-2">
                  <div class="flex items-center">
                    <div
                      on:click={() => openAddTodo(itemName)}
                      class="h-12 w-12 md:h-14 md:w-14 mr-2 cursor-pointer hover:bg-background rounded-xl
                       inline-flex items-center justify-center align-top"
                    >
                      <img
                        class="w-full max-h-full object-contain"
                        src={`/images/items/${itemName}.png`}
                        alt={itemName}
                        loading="lazy"
                      />
                    </div>
                    <span>{itemGroup[itemName].name}</span>
                  </div>
                </td>
                <td class="border-gray-700 border-b py-2">
                  {#each chars as char}
                    <a
                      href="/characters/{char}"
                      class="h-12 w-12 md:h-14 md:w-14 cursor-pointer mr-2 hover:bg-background rounded-xl 
                       inline-flex items-center justify-center align-top relative"
                    >
                      <img
                        class="w-full max-h-full object-contain"
                        src={`/images/characters/${char}.png`}
                        alt={char}
                        title={characters[char].name}
                        loading="lazy"
                      />
                      {#if char.startsWith('traveler')}
                        <img
                          class="w-6 h-6 object-contain absolute bottom-0 right-0"
                          src={`/images/elements/${char.split('_')[1]}.png`}
                          alt=""
                          loading="lazy"
                        />
                      {/if}
                    </a>
                  {/each}
                </td>
              </tr>
            {/each}
            {#each Object.entries(weaponsDays[day]) as [itemName, weapons], index}
              <tr>
                <td
                  class={index === Object.entries(weaponsDays[day]).length - 1 ||
                  Object.entries(charactersDays[day]).length === 0
                    ? 'border-gray-700 border-b py-2'
                    : 'py-2'}
                >
                  {#if index === 0 && Object.entries(charactersDays[day]).length === 0}{$t(`days.${dayArr[0]}`)}<br
                    />{$t(`days.${dayArr[1]}`)}{/if}
                </td>
                <td class="border-gray-700 border-b text-center py-2">
                  <div class="flex items-center">
                    <div
                      on:click={() => openAddTodo(itemName)}
                      class="h-12 w-12 md:h-14 md:w-14 mr-2 cursor-pointer hover:bg-background rounded-xl 
                       inline-flex items-center justify-center align-top"
                    >
                      <img
                        class="w-full max-h-full object-contain"
                        src={`/images/items/${itemName}.png`}
                        alt={itemName}
                        loading="lazy"
                      />
                    </div>
                    <span class="whitespace-normal text-left w-20">{itemGroup[itemName].name}</span>
                  </div>
                </td>
                <td class="border-gray-700 border-b weapon-cell pt-2">
                  {#each weapons as weapon}
                    <a
                      href="/weapons/{weapon}"
                      class="h-12 w-12 md:h-14 md:w-14 cursor-pointer mr-2 mb-2 hover:bg-background rounded-xl 
                       inline-flex items-center justify-center align-top"
                    >
                      <img
                        class="w-full max-h-full object-contain"
                        src={`/images/weapons/${weapon}.png`}
                        alt={weapon}
                        title={weaponList[weapon].name}
                        loading="lazy"
                      />
                    </a>
                  {/each}
                </td>
              </tr>
            {/each}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
  <div class="block overflow-x-auto whitespace-nowrap pb-8">
    <div class="px-4 md:px-8 table max-w-full">
      <table class="w-full block p-4 bg-item rounded-xl">
        <thead>
          <th class="text-gray-400 select-none font-display text-lg text-left px-4 pb-2 border-gray-700 border-b">
            {$t('items.material')}
          </th>
          <th class="text-gray-400 select-none font-display text-lg text-left px-4 pb-2 border-gray-700 border-b">
            {$t('items.characterWeapons')}
          </th>
        </thead>
        <tbody>
          {#each Object.entries(allItems).sort((a, b) => a[0].localeCompare(b[0])) as [itemName, char]}
            <tr>
              <td class="border-gray-700 border-b align-middle py-2">
                <div class="flex items-center">
                  <div
                    on:click={() => openAddTodo(itemName)}
                    class="h-12 w-12 md:h-14 md:w-14 mr-2 cursor-pointer hover:bg-background rounded-xl inline-flex items-center justify-center"
                  >
                    <img
                      class="w-full max-h-full object-contain"
                      src={`/images/items/${itemName}.png`}
                      alt={itemName}
                      loading="lazy"
                    />
                  </div>
                  <span>{$t(itemList[itemName].name)}</span>
                </div>
              </td>
              <td class="border-gray-700 border-b align-middle pt-2 weapon-cell">
                {#each Object.entries(char) as [charName, type]}
                  <a
                    href="/{type}/{charName}"
                    class="h-12 w-12 md:h-14 md:w-14 mb-2 cursor-pointer mr-2 hover:bg-background rounded-xl 
             inline-flex items-center justify-center align-top"
                  >
                    <img
                      class="w-full max-h-full object-contain"
                      src={`/images/${type}/${charName}.png`}
                      alt={charName}
                      title={type === 'characters' ? characters[charName].name : weaponList[charName].name}
                      loading="lazy"
                    />
                  </a>
                {/each}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>

<style lang="postcss">
  td {
    @apply text-white;
    @apply px-4;
    @apply align-top;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    &.weapon-cell {
      min-width: 29.5rem;
      @apply whitespace-normal;
      @apply overflow-x-scroll;
      @apply overflow-y-hidden;
    }
  }

  tr:last-child {
    td {
      @apply border-b-0;
    }
  }
</style>
