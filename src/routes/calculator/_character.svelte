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
  import { talent } from '../../data/talent';
  import { addTodo } from '../../stores/todo';
  import { itemList } from '../../data/itemList';
  import { characters } from '../../data/characters';

  let resources = [
    {
      selected: true,
      disabled: false,
      image: '/images/items/heros_wit.png',
      label: "Hero's Wit",
      id: 'heros_wit',
      value: '20000',
    },
    {
      selected: true,
      disabled: false,
      image: '/images/items/adventurers_experience.png',
      label: "Adventurer's Experience",
      id: 'adventurers_experience',
      value: '5000',
    },
    {
      selected: true,
      disabled: false,
      image: '/images/items/wanderes_advice.png',
      label: "Wanderer's Advice",
      id: 'wanderes_advice',
      value: '1000',
    },
  ];

  let addedToTodo = false;

  let withAscension = true;
  let withTalent = false;

  let selectedCharacter = null;

  let currentLevel = '';
  let currentExp = '';
  let currentAscension = 0;

  let intendedAscension = 0;
  let intendedLevel = '';

  let minAscension = 0;
  let minIntendedAscension = 0;

  let maxTalentLevel = 1;

  let ascensionResouce = {};
  let unknownList = {};
  let currentMax = null;
  let moraNeeded = 0;
  let changed = false;

  let currentTalentLevel = {
    first: 1,
    second: 1,
    third: 1,
  };
  let targetTalentLevel = {
    first: 1,
    second: 1,
    third: 1,
  };
  let talentMaterial = {
    items: {},
    mora: 0,
  };

  let numberFormat = Intl.NumberFormat();

  $: usedResource = resources.filter((e) => e.selected).sort((a, b) => b.value - a.value);
  $: currentAscension, updateIntendedAscension();
  $: currentLevel, updateMinAscension();
  $: intendedLevel, updateMinIntendedAscension();
  $: intendedAscension, updateMaxTalentLevel();
  $: withAscension, checkWithTalent();

  $: canCalculate =
    (withAscension ? selectedCharacter !== null : true) &&
    intendedLevel >= currentLevel &&
    intendedAscension >= currentAscension &&
    currentLevel !== '' &&
    currentLevel > 0 &&
    currentLevel <= 90 &&
    intendedLevel !== '' &&
    intendedLevel > 0 &&
    intendedLevel <= 90;

  function checkWithTalent() {
    if (!withAscension) {
      withTalent = false;
    }
  }

  function updateIntendedAscension() {
    intendedAscension = Math.max(currentAscension, intendedAscension);
  }

  function updateMinAscension() {
    if (currentLevel > 80) {
      minAscension = 6;
    } else if (currentLevel > 70) {
      minAscension = 5;
    } else if (currentLevel > 60) {
      minAscension = 4;
    } else if (currentLevel > 50) {
      minAscension = 3;
    } else if (currentLevel > 40) {
      minAscension = 2;
    } else if (currentLevel > 20) {
      minAscension = 1;
    } else {
      minAscension = 0;
    }

    currentAscension = Math.max(currentAscension, minAscension);
  }

  function updateMinIntendedAscension() {
    if (intendedLevel > 80) {
      minIntendedAscension = 6;
    } else if (intendedLevel > 70) {
      minIntendedAscension = 5;
    } else if (intendedLevel > 60) {
      minIntendedAscension = 4;
    } else if (intendedLevel > 50) {
      minIntendedAscension = 3;
    } else if (intendedLevel > 40) {
      minIntendedAscension = 2;
    } else if (intendedLevel > 20) {
      minIntendedAscension = 1;
    } else {
      minIntendedAscension = 0;
    }

    intendedAscension = Math.max(intendedAscension, minIntendedAscension);
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
    changed = true;
  }

  function getSuffix(val) {
    switch (val) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      case 4:
        return 'th';
    }
  }

  function calculateAscension() {
    const current = Math.max(currentAscension, 0);
    const target = intendedAscension;

    const result = selectedCharacter.ascension.slice(current, target).reduce(
      (sum, character, index) => {
        if (character.mora === 0) {
          if (unknownList[index + current] === undefined) {
            unknownList[index + current] = ['Mora amount'];
          }
        }

        const mora = sum.mora + character.mora;
        const items = sum.items;

        for (const [i, item] of character.items.entries()) {
          if (item.item.id === 'unknown') {
            if (unknownList[index + current] === undefined) {
              unknownList[index + current] = [];
            }

            unknownList[index + current].push(`${i + 1}${getSuffix(i + 1)} material`);
          }

          if (items[item.item.id] === undefined) {
            items[item.item.id] = { ...item.item, amount: 0 };
          }
          items[item.item.id].amount += item.amount;
        }

        return { items, mora };
      },
      {
        mora: 0,
        items: {},
      },
    );

    moraNeeded = moraNeeded + result.mora;
    ascensionResouce = result.items;
  }

  function calculateTalentTraveler() {
    Object.keys(currentTalentLevel).forEach((i) => {
      for (let j = currentTalentLevel[i] - 1; j < targetTalentLevel[i] - 1; j++) {
        talentMaterial.mora = talentMaterial.mora + talent[j].mora;

        let currentBook = selectedCharacter.material.book[j];
        let currentMaterial = selectedCharacter.material.material[j];

        if (selectedCharacter.id === characters.traveler_geo.id && i === 'first') {
          currentBook = selectedCharacter.material_atk.book[j];
          currentMaterial = selectedCharacter.material_atk.material[j];
        }

        const bookAmount = talent[j].book.amount;
        const commonMaterial = talent[j].commonMaterial.amount;
        const bossMaterial = talent[j].bossMaterial;
        const eventMaterial = talent[j].eventMaterial;

        if (talentMaterial.items[currentBook.id] === undefined) {
          talentMaterial.items[currentBook.id] = { ...currentBook, amount: 0 };
        }
        talentMaterial.items[currentBook.id].amount += bookAmount;

        if (talentMaterial.items[currentMaterial.id] === undefined) {
          talentMaterial.items[currentMaterial.id] = { ...currentMaterial, amount: 0 };
        }
        talentMaterial.items[currentMaterial.id].amount += commonMaterial;

        if (bossMaterial > 0) {
          if (talentMaterial.items[selectedCharacter.material.boss.id] === undefined) {
            talentMaterial.items[selectedCharacter.material.boss.id] = {
              ...selectedCharacter.material.boss,
              amount: 0,
            };
          }
          talentMaterial.items[selectedCharacter.material.boss.id].amount += bossMaterial;
        }

        if (eventMaterial > 0) {
          if (talentMaterial.items['crown_of_insight'] === undefined) {
            talentMaterial.items['crown_of_insight'] = { ...itemList.crown_of_insight, amount: 0 };
          }
          talentMaterial.items['crown_of_insight'].amount += eventMaterial;
        }
      }
    });

    moraNeeded = moraNeeded + talentMaterial.mora;
  }

  function calculateTalent() {
    Object.keys(currentTalentLevel).forEach((i) => {
      talent.slice(currentTalentLevel[i] - 1, targetTalentLevel[i] - 1).forEach((talent) => {
        talentMaterial.mora = talentMaterial.mora + talent.mora;

        const currentBook = selectedCharacter.material.book[talent.book.rarity - 2];
        const currentMaterial = selectedCharacter.material.material[talent.commonMaterial.rarity - 1];

        if (talentMaterial.items[currentBook.id] === undefined) {
          talentMaterial.items[currentBook.id] = { ...currentBook, amount: 0 };
        }
        talentMaterial.items[currentBook.id].amount += talent.book.amount;

        if (talentMaterial.items[currentMaterial.id] === undefined) {
          talentMaterial.items[currentMaterial.id] = { ...currentMaterial, amount: 0 };
        }
        talentMaterial.items[currentMaterial.id].amount += talent.commonMaterial.amount;

        if (talent.bossMaterial > 0) {
          if (talentMaterial.items[selectedCharacter.material.boss.id] === undefined) {
            talentMaterial.items[selectedCharacter.material.boss.id] = {
              ...selectedCharacter.material.boss,
              amount: 0,
            };
          }
          talentMaterial.items[selectedCharacter.material.boss.id].amount += talent.bossMaterial;
        }

        if (talent.eventMaterial > 0) {
          if (talentMaterial.items['crown_of_insight'] === undefined) {
            talentMaterial.items['crown_of_insight'] = { ...itemList.crown_of_insight, amount: 0 };
          }
          talentMaterial.items['crown_of_insight'].amount += talent.eventMaterial;
        }
      });
    });

    moraNeeded = moraNeeded + talentMaterial.mora;
  }

  function calculate() {
    unknownList = {};
    ascensionResouce = {};
    talentMaterial = {
      mora: 0,
      items: {},
    };
    moraNeeded = 0;

    const values = resources
      .filter((e) => e.selected)
      .map((e) => e.value)
      .sort((a, b) => b - a);
    const items = values.map(() => 0);

    const target = characterExp[intendedLevel - 1] - (characterExp[currentLevel - 1] + currentExp);
    let current = target;
    let max = [];

    moraNeeded = (Math.floor(target / 1000) * 1000) / 5;

    items[0] = Math.ceil(current / values[0]);
    max.push({
      usage: [...items],
      over: current - items[0] * values[0],
    });
    items[0] = Math.ceil(current / values[0]);

    items[0] -= 1;
    items[1] = Math.ceil((current - items[0] * values[0]) / values[1]);

    max.push({
      usage: [...items],
      over: current - (items[0] * values[0] + items[1] * values[1]),
    });

    function process(usage, start) {
      let i = start;
      if (i === values.length - 1) return;
      while (usage[i] > 0) {
        usage[i]--;

        usage[i + 1] = 0;
        let currentTotal = usage.reduce((total, e, f) => {
          total += e * values[f];
          return total;
        }, 0);
        usage[i + 1] = Math.ceil((target - currentTotal) / values[i + 1]);

        currentTotal = usage.reduce((total, e, f) => {
          total += e * values[f];
          return total;
        }, 0);
        max.push({
          usage: [...usage],
          over: target - currentTotal,
        });

        if (usage[i] === 0) i++;
        if (i === values.length - 1) break;
        process([...usage], start + 1);
      }
    }

    process([...items], 1);

    currentMax = max.sort((a, b) => b.over - a.over)[0];

    if (withAscension) {
      calculateAscension();

      if (withTalent) {
        if (
          selectedCharacter.id === characters.traveler_anemo.id ||
          selectedCharacter.id === characters.traveler_geo.id ||
          selectedCharacter.id === characters.traveler_electro.id
        ) {
          calculateTalentTraveler();
        } else {
          calculateTalent();
        }
      }

      for (const [id, item] of Object.entries(talentMaterial.items)) {
        if (ascensionResouce[id]) {
          ascensionResouce[id].amount += item.amount;
        } else {
          ascensionResouce[id] = item;
        }
      }
    }

    changed = false;
  }

  function addToTodo() {
    const levelRes = usedResource.reduce((prev, item, i) => {
      if (currentMax.usage[i] > 0) {
        prev[item.id] = currentMax.usage[i];
      }

      return prev;
    }, {});

    const ascensionRes = Object.keys(ascensionResouce).reduce((prev, item) => {
      if (ascensionResouce[item].amount > 0) {
        prev[item] = ascensionResouce[item].amount;
      }

      return prev;
    }, {});

    addTodo({
      type: 'character',
      character: withAscension ? selectedCharacter : null,
      level: { from: currentLevel, to: intendedLevel },
      resources: {
        mora: moraNeeded,
        ...levelRes,
        ...ascensionRes,
      },
      original: {
        mora: moraNeeded,
        ...levelRes,
        ...ascensionRes,
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
            min={1}
            max={80}
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
            max={80}
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
      {#each resources as res}
        <div class="mb-1">
          <Checkbox disabled={res.disabled} bind:checked={res.selected} on:change={onChange}>
            <span class="text-white">
              {#if res.image}
                <span class="w-6 inline-block">
                  <img class="h-6 inline-block mr-1" src={res.image} alt={res.label} />
                </span>
              {/if}
              {res.label}
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
              bind:value={targetTalentLevel.first}
              placeholder={$t('calculator.character.talent.0')}
            />
            <Input
              on:change={onChange}
              type="number"
              min={currentTalentLevel.second}
              max={maxTalentLevel}
              bind:value={targetTalentLevel.second}
              placeholder={$t('calculator.character.talent.1')}
            />
            <Input
              on:change={onChange}
              type="number"
              min={currentTalentLevel.third}
              max={maxTalentLevel}
              bind:value={targetTalentLevel.third}
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
      {#if currentMax !== null && !changed}
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
            {#each usedResource as res, i}
              {#if currentMax.usage[i] > 0}
                <tr>
                  <td class="text-right border-b border-gray-700 py-1">
                    <span class="text-white mr-2 whitespace-nowrap"
                      >{currentMax.usage[i]}
                      <Icon size={0.5} path={mdiClose} /></span
                    >
                  </td>
                  <td class="border-b border-gray-700 py-1">
                    <span class="text-white">
                      {#if res.image}
                        <span class="w-6 inline-block">
                          <img class="h-6 inline-block mr-1" src={res.image} alt={res.label} />
                        </span>
                      {/if}
                      {res.label}
                    </span>
                  </td>
                </tr>
              {/if}
            {/each}
            {#each Object.entries(ascensionResouce) as [id, item]}
              {#if item.amount > 0}
                <tr>
                  <td class="text-right border-b border-gray-700 py-1">
                    <span class="text-white mr-2 whitespace-nowrap"
                      >{item.amount}
                      <Icon size={0.5} path={mdiClose} /></span
                    >
                  </td>
                  <td class="border-b border-gray-700 py-1">
                    <span class="text-white">
                      <span class="w-6 inline-block">
                        <img class="h-6 inline-block mr-1" src={`/images/items/${id}.png`} alt={item.name} />
                      </span>
                      {item.name}
                    </span>
                  </td>
                </tr>
              {/if}
            {/each}
            <tr>
              <td class="text-right border-b border-gray-700 py-1">
                <span class="text-white mr-2 whitespace-nowrap"
                  >{numberFormat.format(moraNeeded)}
                  <Icon size={0.5} path={mdiClose} /></span
                >
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
            {#if currentMax.over < 0}
              <tr>
                <td />
                <td class="text-red-400 py-1">{currentMax.over * -1} {$t('calculator.character.expWasted')}</td>
              </tr>
            {/if}
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
