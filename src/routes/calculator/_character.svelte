<script>
  import { t } from 'svelte-i18n';

  import { fade } from 'svelte/transition';
  import { mdiCheckCircleOutline, mdiClose, mdiInformationOutline } from '@mdi/js';

  import Input from '../../components/Input.svelte';
  import AscensionSelector from '../../components/AscensionSelector.svelte';
  import CharacterSelect from '../../components/CharacterSelect.svelte';
  import Checkbox from '../../components/Checkbox.svelte';
  import Check from '../../components/Check.svelte';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  import { characterExp } from '../../data/characterExp';
  import { characters, isTravelerId, minCharacterLevel, maxCharacterLevel } from '../../data/characters';
  import { talent } from '../../data/talent';
  import { addTodo } from '../../stores/todo';
  import { itemList } from '../../data/itemList';
  import * as calculator from '../../functions/resourceCalculator';

  let selectableExpMaterials = [
    {
      selected: true,
      disabled: false,
      ...itemList.heros_wit
    },
    {
      selected: true,
      disabled: false,
      ...itemList.adventurers_experience
    },
    {
      selected: true,
      disabled: false,
      ...itemList.wanderes_advice
    },
  ];

  let addedToTodo = false;

  let withAscension = true;
  let withTalent = false;

  let selectedCharacter = null;

  let currentLevel = null;
  let currentExp = null;
  let currentExpAsNumber = 0;
  let currentAscension = 0;

  let intendedAscension = 0;
  let intendedLevel = null;

  let currentTalentLevel = {
    first: 1,
    second: 1,
    third: 1,
  };
  let intendedTalentLevel = {
    first: 1,
    second: 1,
    third: 1,
  };
  
  let minAscension = 0;
  let minIntendedAscension = 0;

  let maxTalentLevel = 1;

  let levelMaterials = [];
  let ascensionAndTalentMaterials = [];
  let unknownList = [];
  let moraNeeded = 0;
  let expWasted = 0;
  let calculated = false;

  let numberFormat = Intl.NumberFormat();

  $: currentAscension = calculator.calculateMinimumAscension(currentLevel);
  $: intendedAscension = calculator.calculateMinimumAscension(intendedLevel);
  $: currentExpAsNumber = currentExp == null ? 0 : currentExp;
  $: intendedAscension, updateMaxTalentLevel();
  $: withAscension, checkWithTalent();

  $: canCalculate =
    (withAscension ? selectedCharacter !== null : true) &&
    intendedLevel >= currentLevel &&
    intendedAscension >= currentAscension &&
    currentLevel !== null &&
    currentLevel >= minCharacterLevel &&
    currentLevel <= maxCharacterLevel &&
    intendedLevel !== null &&
    intendedLevel >= minCharacterLevel &&
    intendedLevel <= maxCharacterLevel;

  function checkWithTalent() {
    if (!withAscension) {
      withTalent = false;
    }
  }

  function updateMaxTalentLevel() {
    switch (intendedAscension) {
      case 6:
        maxTalentLevel = 10;
        break;
      case 5:
        maxTalentLevel = 8;
        break;
      case 4:
        maxTalentLevel = 6;
        break;
      case 3:
        maxTalentLevel = 4;
        break;
      case 2:
        maxTalentLevel = 2;
        break;
    }

    currentTalentLevel = {
      first: Math.min(currentTalentLevel.first, maxTalentLevel),
      second: Math.min(currentTalentLevel.second, maxTalentLevel),
      third: Math.min(currentTalentLevel.third, maxTalentLevel),
    };
  }

  function onChange() {
    calculated = false;
  }

  function calculate() {
    unknownList = [];
    moraNeeded = 0;

    const targetExp = characterExp[intendedLevel - 1] - (characterExp[currentLevel - 1] + currentExp);
    
    const expMaterials = selectableExpMaterials
      .filter(r => r.selected)
      .sort((a, b) => b.exp - a.exp);

    const levelResult = calculator.calculateCharacterLevelMaterials(targetExp, expMaterials);
    levelMaterials = levelResult.materialsUsed;
    expWasted = levelResult.expWasted;
    moraNeeded += levelResult.mora;

    ascensionAndTalentMaterials = null;
    if (withAscension) {
      let ascensionAndTalentMatsMap = {};
      let ascensionResult = calculator.calculateCharacterAscensionMaterials(selectedCharacter, currentAscension, intendedAscension);
      ascensionAndTalentMatsMap = ascensionResult.materials;
      unknownList.push(...ascensionResult.unknownList);
      moraNeeded += ascensionResult.mora;

      if (withTalent) {
        let talentResult = {};

        if (isTravelerId(selectedCharacter.id)) {
          talentResult = calculator.calculateTalentMaterialsTraveler(selectedCharacter, currentTalentLevel, intendedTalentLevel);
        } else {
          talentResult = calculator.calculateTalentMaterials(selectedCharacter, currentTalentLevel, intendedTalentLevel);
        }

        moraNeeded += talentResult.mora;
        
        const talentOrderOffset = 1000;
        for (const [id, mat] of Object.entries(talentResult.items)) {
          if (ascensionAndTalentMatsMap[id]) {
            ascensionAndTalentMatsMap[id].amount += mat.amount;
          } else {
            ascensionAndTalentMatsMap[id] = mat;
            ascensionAndTalentMatsMap[id].order += talentOrderOffset;
          }
        }
      }

      ascensionAndTalentMaterials = Object.entries(ascensionAndTalentMatsMap).sort((a, b) => a[1].order - b[1].order);
    }

    calculated = true;
  }

  function addToTodo() {
    let serializedLevelMats = levelMaterials.reduce((sum, item, i) => {
      if (item.amount > 0) {
        sum[item.material.id] = item.amount;
      }

      return sum;
    }, {});

    let serializedAscensionMats = [];
    if (ascensionAndTalentMaterials != null) {
      serializedAscensionMats = ascensionAndTalentMaterials.reduce((sum, value, i) => {
        let stack = value[1];
        if (stack.amount > 0) {
          sum[stack.item.id] = stack.amount;
        }
  
        return sum;
      }, {});
    }

    addTodo({
      formatVersion: 2,
      type: 'character',
      character: withAscension ? selectedCharacter : null,
      level: { from: currentLevel, to: intendedLevel },
      ascension: withAscension ? { from: currentAscension, to: intendedAscension } : null,
      exp: currentExp,
      talentLevel: withTalent ? { from: currentTalentLevel, to: intendedTalentLevel } : null,
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
    });

    addedToTodo = true;
    setTimeout(() => {
      addedToTodo = false;
    }, 2000);
  }
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    <div>
      <div>
        <Check className="mb-2" on:change={onChange} bind:checked={withAscension}
          >{$t('calculator.character.calculateAscension')}</Check
        >
        {#if withAscension}
          <CharacterSelect
            on:change={onChange}
            bind:selected={selectedCharacter}
            placeholder={$t('calculator.character.selectCharacter')}
          />
        {/if}

        <div>
          <p class="text-white text-center mt-3 mb-2">{$t('calculator.character.current')}</p>
          <Input
            className="mb-2"
            on:change={onChange}
            type="number"
            min={minCharacterLevel}
            max={maxCharacterLevel}
            bind:value={currentLevel}
            placeholder={$t('calculator.character.inputCurrentLevel')}
          />
          <Input
            className="mb-2"
            on:change={onChange}
            type="number"
            min={0}
            bind:value={currentExp}
            placeholder={$t('calculator.character.inputCurrentExp')}
          />
          {#if withAscension}
            <AscensionSelector min={minAscension} bind:value={currentAscension} on:change={onChange} />
          {/if}
        </div>
        <div>
          <p class="text-white text-center mt-3 mb-2">{$t('calculator.character.intended')}</p>
          <Input
            className="mb-2"
            on:change={onChange}
            type="number"
            min={currentLevel}
            max={maxCharacterLevel}
            bind:value={intendedLevel}
            placeholder={$t('calculator.character.inputIntendedLevel')}
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
      <p class="text-white text-center md:text-left mb-1">{$t('calculator.character.resource')}</p>
      {#each selectableExpMaterials as item}
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
      <div class="mt-4">
        {#if withAscension}
          <Check on:change={onChange} bind:checked={withTalent}>{$t('calculator.character.calculateTalent')}</Check>
        {/if}
        {#if withTalent}
          <p class="text-white text-center mt-3">{$t('calculator.character.inputTalentLevel')}</p>
          <p class="text-green-300 text-center">{$t('calculator.character.inputTalentNotice')}</p>
          <div class="grid grid-cols-3 gap-2 mt-2">
            <Input
              on:change={onChange}
              type="number"
              min={1}
              max={maxTalentLevel}
              bind:value={currentTalentLevel.first}
              placeholder={$t('calculator.character.talent.0')}
            />
            <Input
              on:change={onChange}
              type="number"
              min={1}
              max={maxTalentLevel}
              bind:value={currentTalentLevel.second}
              placeholder={$t('calculator.character.talent.1')}
            />
            <Input
              on:change={onChange}
              type="number"
              min={1}
              max={maxTalentLevel}
              bind:value={currentTalentLevel.third}
              placeholder={$t('calculator.character.talent.2')}
            />
          </div>
          <p class="text-white text-center mt-3">{$t('calculator.character.talentToLevel')}</p>
          <div class="grid grid-cols-3 gap-2 mt-2">
            <Input
              on:change={onChange}
              type="number"
              min={currentTalentLevel.first}
              max={maxTalentLevel}
              bind:value={intendedTalentLevel.first}
              placeholder={$t('calculator.character.talent.0')}
            />
            <Input
              on:change={onChange}
              type="number"
              min={currentTalentLevel.second}
              max={maxTalentLevel}
              bind:value={intendedTalentLevel.second}
              placeholder={$t('calculator.character.talent.1')}
            />
            <Input
              on:change={onChange}
              type="number"
              min={currentTalentLevel.third}
              max={maxTalentLevel}
              bind:value={intendedTalentLevel.third}
              placeholder={$t('calculator.character.talent.2')}
            />
          </div>
        {/if}
      </div>
    </div>
    <div class="md:col-span-2 xl:col-span-1">
      <Button disabled={!canCalculate} className="block w-full md:w-auto" on:click={calculate}
        >{$t('calculator.character.calculate')}</Button
      >
      {#if calculated}
        {#if Object.keys(unknownList).length > 0}
          <div class="border-2 border-red-400 rounded-xl mt-2 p-4 md:inline-block">
            <p class="font-bold flex items-center text-red-400">
              <Icon className="mr-1 mb-1" path={mdiInformationOutline} />
              {$t('calculator.character.talent.2')}
            </p>
            {#each Object.entries(unknownList) as [title, values]}
              <p class="text-red-400">{$t('calculator.character.ascensionLevel')} {Number(title) + 1}</p>
              <ul>
                {#each values as val}
                  <li class="pl-4 text-red-400">- {val}</li>
                {/each}
              </ul>
            {/each}
          </div>
        {/if}
        <div transition:fade={{ duration: 100 }} class="bg-background rounded-xl p-4 mt-2 block md:inline-block">
          <table>
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
                  {$t('calculator.character.mora')}
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
            {#if ascensionAndTalentMaterials != null}
              {#each ascensionAndTalentMaterials as [id, stack]}
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
            <tr>
              <td />
              <td class="text-red-400 py-1">{expWasted} {$t('calculator.character.expWasted')}</td>
            </tr>
          </table>
          <Button className="mt-2 w-full" on:click={addedToTodo ? () => {} : addToTodo}>
            {#if addedToTodo}
              <span class="text-green-400" in:fade={{ duration: 100 }}>
                <Icon path={mdiCheckCircleOutline} size={0.8} />
                {$t('calculator.character.addedToTodo')}
              </span>
            {:else}<span in:fade={{ duration: 100 }}>{$t('calculator.character.addToTodo')}</span>{/if}
          </Button>
        </div>
      {/if}
    </div>
  </div>
</div>
