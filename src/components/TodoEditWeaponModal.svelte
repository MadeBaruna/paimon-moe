<script>
  import { t } from 'svelte-i18n';

  import { fade } from 'svelte/transition';
  import { mdiStar, mdiClose, mdiInformationOutline, mdiCheckCircleOutline } from '@mdi/js';

  import Input from './Input.svelte';
  import AscensionSelector from './AscensionSelector.svelte';
  import Checkbox from './Checkbox.svelte';
  import Check from './Check.svelte';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  import { getWeaponExp } from '../data/weaponExp';
  import { minWeaponLevel, maxWeaponLevel, weaponRarityInfo } from '../data/weapons';
  import { updateTodo } from '../stores/todo';
  import { itemList } from '../data/itemList';
  import * as calculator from '../functions/resourceCalculator';

  export let todo;
  export let todoIndex;
  export let cancel;

  let selectableExpItems = [
    {
      selected: true,
      disabled: false,
      ...itemList.mystic_enhancement_ore, 
    },
    {
      selected: true,
      disabled: false,
      ...itemList.fine_enhancement_ore, 

    },
    {
      selected: true,
      disabled: false,
      ...itemList.enhancement_ore, 
    },
    {
      selected: true,
      disabled: false,
      ...itemList.any_weapon_1, 
    },
    {
      selected: true,
      disabled: false,
      ...itemList.any_weapon_2, 
    },
    {
      selected: true,
      disabled: false,
      ...itemList.any_weapon_3,
    },
  ];

  let updatedTodo = false;

  let withAscension = todo.ascension != null;

  let rarity = todo.rarity;

  let currentLevel = todo.level.from;
  let currentExp = todo.exp;
  let currentExpAsNumber = 0;
  let currentAscension = withAscension ? todo.ascension.to : 0;

  let intendedLevel = todo.level.to;
  let intendedAscension = withAscension ? todo.ascension.to : 0;

  let minAscension = 0;
  let minIntendedAscension = 0;
  let unknownList = {};
  let moraNeeded = 0;
  let calculated = false;

  let ascensionMaterials = [];
  let levelMaterials = [];
  let expWasted = 0;

  let numberFormat = Intl.NumberFormat();

  $: currentAscension, updateIntendedAscension();
  $: currentAscension = calculator.calculateMinimumAscension(currentLevel);
  $: intendedAscension = calculator.calculateMinimumAscension(intendedLevel);
  $: currentExpAsNumber = currentExp == null ? 0 : currentExp;

  $: canCalculate =
    (withAscension ? todo.weapon !== null : rarity !== null) &&
    intendedLevel >= currentLevel &&
    intendedAscension >= currentAscension &&
    currentLevel !== null &&
    currentLevel >= minWeaponLevel &&
    currentLevel <= maxWeaponLevel &&
    intendedLevel !== null &&
    intendedLevel >= minWeaponLevel &&
    intendedLevel <= maxWeaponLevel;

  function updateIntendedAscension() {
    intendedAscension = Math.max(currentAscension, intendedAscension);
  }

  function onChange() {
    calculated = false;
  }

  function getSuffix(val) {
    switch (val) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
    }
  }

  function calculate() {
    unknownList = [];
    moraNeeded = 0;

    if (withAscension) {
      rarity = weaponRarityInfo[todo.weapon.rarity - 1].value;
    }
    
    const targetExp = 
      getWeaponExp(intendedLevel, 0, rarity) 
      - getWeaponExp(currentLevel, currentExpAsNumber, rarity);

    const expMaterials = selectableExpItems
      .filter(r => r.selected)
      .map(r => itemList[r.id])
      .sort((a, b) => b.exp - a.exp);

    const levelResult = calculator.calculateWeaponLevelMaterials(targetExp, expMaterials);
    levelMaterials = levelResult.materialsUsed;
    expWasted = levelResult.expWasted;
    moraNeeded += levelResult.mora;

    ascensionMaterials = null;
    if (withAscension) {
      const ascensionResult = calculator.calculateWeaponAscensionMaterials(todo.weapon, currentAscension, intendedAscension);
      moraNeeded += ascensionResult.mora;
      ascensionMaterials = Object.entries(ascensionResult.materials).sort((a, b) => a[1].order - b[1].order);
      unknownList.push(...ascensionResult.unknownList);
    }

    calculated = true;
  }

  function confirmChanges() {
    let serializedLevelMats = levelMaterials.reduce((sum, item, i) => {
      if (item.amount > 0) {
        sum[item.material.id] = item.amount;
      }

      return sum;
    }, {});

    let serializedAscensionMats = [];

    if (ascensionMaterials != null) {
      serializedAscensionMats = ascensionMaterials.reduce((sum, value, i) => {
        let stack = ascensionMaterials[i][1];
        if (stack.amount > 0) {
          sum[stack.item.id] = stack.amount;
        }
  
        return sum;
      }, {});
    }

    updateTodo({
      formatVersion: 2,
      type: 'weapon',
      weapon: withAscension ? todo.weapon : null,
      level: { from: currentLevel, to: intendedLevel },
      exp: currentExpAsNumber,
      ascension: withAscension ? { from: currentAscension, to: intendedAscension } : null,
      resources: {
        mora: moraNeeded,
        ...serializedLevelMats,
        ...serializedAscensionMats,
      },
      original: {
        mora: moraNeeded,
        ...serializedLevelMats,
        ...serializedAscensionMats,
      },
    },
    todoIndex);

    updatedTodo = true;
    setTimeout(() => {
      updatedTodo = false;
    }, 2000);
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-item rounded-xl px-4 py-8">
  <div>
    <!-- Todo item banner -->
    <div class="flex items-center mb-4 p-3 rounded-md text-white bg-item">
      <img
        class="h-8 inline-block mr-2"
        src={`/images/weapons/${todo.weapon ? todo.weapon.id : 'any_weapon_1'}.png`}
        alt={todo.weapon ? todo.weapon.name : `Unknown Weapon`} />
      <div class="flex-1">
        <p class="font-bold">{todo.weapon ? $t(todo.weapon.name) : 'Weapon'}</p>
      </div>
    </div>
    <div>
      <div>
        <p class="text-white text-center mt-3 mb-2">{$t('calculator.weapon.current')}</p>
        <Input
          className="mb-2"
          on:change={onChange}
          type="number"
          min={1}
          max={80}
          bind:value={currentLevel}
          placeholder={$t('calculator.weapon.inputCurrentLevel')}
        />
        <Input
          className="mb-2"
          on:change={onChange}
          type="number"
          min={0}
          bind:value={currentExp}
          placeholder={$t('calculator.weapon.inputCurrentExp')}
        />
        {#if withAscension}
          <AscensionSelector min={minAscension} bind:value={currentAscension} on:change={onChange} />
        {/if}
      </div>
      <div>
        <p class="text-white text-center mt-3 mb-2">{$t('calculator.weapon.intended')}</p>
        <Input
          className="mb-2"
          on:change={onChange}
          type="number"
          min={currentLevel}
          max={80}
          bind:value={intendedLevel}
          placeholder={$t('calculator.weapon.inputIntendedLevel')}
        />
        {#if withAscension}
          <AscensionSelector
            min={Math.max(currentAscension, minIntendedAscension)}
            bind:value={intendedAscension}
            on:change={onChange}
          />
        {/if}
      </div>
    </div>
  </div>
  <div class="flex flex-col pl-1">
    <p class="text-white text-center md:text-left mb-1">{$t('calculator.weapon.resource')}</p>
      {#each selectableExpItems as item}
        <div class="mb-1">
          <Checkbox disabled={item.disabled} bind:checked={item.selected} on:change={onChange}>
            <span class="text-white">
              <span class="w-6 inline-block">
                <img class="h-6 inline-block mr-1" src={`/images/items/${item.id}.png`} alt={item.name} />
              </span>
              {$t(item.name)}
            </span>
          </Checkbox>
        </div>
      {/each}
    </div>
    <div class="flex flex-col h-full md:col-span-2 xl:col-span-1">
      <Button disabled={!canCalculate} className="block w-full md:w-auto" on:click={calculate}>
        {$t('calculator.weapon.calculate')}
      </Button>
      {#if calculated}
        {#if Object.keys(unknownList).length > 0}
          <div class="border-2 border-red-400 rounded-xl mt-2 p-4 md:inline-block">
            <p class="font-bold flex items-center text-red-400">
              <Icon className="mr-1 mb-1" path={mdiInformationOutline} />
              {$t('calculator.weapon.unknownInformation')}
            </p>
            {#each Object.entries(unknownList) as [title, values]}
              <p class="text-red-400">{$t('calculator.weapon.ascensionLevel')} {Number(title) + 1}</p>
              <ul>
                {#each values as val}
                  <li class="pl-4 text-red-400">- {val}</li>
                {/each}
              </ul>
            {/each}
          </div>
        {/if}
      {/if}
      <div transition:fade={{ duration: 100 }} class="wrap-table bg-background rounded-xl p-4 mt-2 block md:inline-block">
        <table>
          {#if calculated}
            <tr>
              <td class="text-right border-b border-gray-700 py-1">
                <span class="text-white mr-2 whitespace-nowrap">
                  {numberFormat.format(moraNeeded)}
                  <Icon size={0.5} path={mdiClose} />
                </span>
              </td>
              <td class="border-b border-gray-700 py-1">
                <span class="text-white">
                  <span class="w-6 inline-block">
                    <img class="h-6 inline-block mr-1" src="/images/mora.png" alt="Mora" />
                  </span>
                  {$t('calculator.weapon.mora')}
                </span>
              </td>
            </tr>
            {#each levelMaterials as stack, i}
              <tr>
                <td class="text-right border-b border-gray-700 py-1">
                  <span class="text-white mr-2 whitespace-nowrap">
                    {stack.amount}
                    <Icon size={0.5} path={mdiClose} />
                  </span>
                </td>
                <td class="border-b border-gray-700 py-1">
                  <span class="text-white">
                    <span class="w-6 inline-block">
                      <img class="h-6 inline-block mr-1" src={`/images/items/${stack.material.id}.png`} alt={stack.material.name} />
                    </span>
                    {$t(stack.material.name)}
                  </span>
                </td>
              </tr>
            {/each}
            {#if ascensionMaterials != null}
              {#each ascensionMaterials as [id, stack]}
                {#if stack.amount > 0}
                  <tr>
                    <td class="text-right border-b border-gray-700 py-1">
                      <span class="text-white mr-2 whitespace-nowrap">
                        {stack.amount}
                        <Icon size={0.5} path={mdiClose} />
                      </span>
                    </td>
                    <td class="border-b border-gray-700 py-1">
                      <span class="text-white">
                        <span class="w-6 inline-block">
                          <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={stack.item.name} />
                        </span>
                        {$t(stack.item.name)}
                      </span>
                    </td>
                  </tr>
                {/if}
              {/each}
            {/if}
            {#if expWasted > 0}
              <tr>
                <td />
                <td class="text-red-400 py-1">{expWasted} {$t('calculator.weapon.expWasted')}</td>
              </tr>
            {/if}
          {/if}
        </table>
      </div>
      <div class="flex gap-2">
          <Button className="mt-2 w-min grow" on:click={cancel}>
            {$t('todo.edit.cancel')}
          </Button>
          
          <Button className="mt-2 grow" disabled={!calculated} on:click={updatedTodo ? () => {} : confirmChanges}>
            {#if updatedTodo}
              <span class="text-green-400" in:fade={{ duration: 100 }}>
                <Icon path={mdiCheckCircleOutline} size={0.8} />
                {$t('todo.edit.confirmed')}
              </span>
            {:else}
              <span in:fade={{ duration: 100 }}>{$t('todo.edit.confirm')}</span>
            {/if}
          </Button>
      </div>
    </div>
</div>

<style lang="postcss">
  .wrap-table {
    overflow: hidden scroll;
    flex-basis: 20vh;
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>