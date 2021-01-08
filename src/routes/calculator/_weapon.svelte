<script>
  import { fade } from 'svelte/transition';
  import { mdiStar, mdiClose, mdiInformationOutline, mdiCheckCircleOutline } from '@mdi/js';

  import Select from '../../components/Select.svelte';
  import Input from '../../components/Input.svelte';
  import AscensionSelector from '../../components/AscensionSelector.svelte';
  import WeaponSelect from '../../components/WeaponSelect.svelte';
  import Checkbox from '../../components/Checkbox.svelte';
  import Check from '../../components/Check.svelte';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  import { weaponExp } from '../../data/weaponExp';
  import { addTodo } from '../../stores/todo';

  let weaponsRarity = [
    { label: '3 Star', value: 3 },
    { label: '4 Star', value: 4 },
    { label: '5 Star', value: 5 },
  ];

  let resources = [
    {
      selected: true,
      disabled: true,
      id: 'mystic_enhancement_ore',
      image: '/images/items/mystic_enhancement_ore.png',
      label: 'Mystic Enhancement Ore',
      value: '10000',
    },
    {
      selected: true,
      disabled: false,
      id: 'fine_enhancement_ore',
      image: '/images/items/fine_enhancement_ore.png',
      label: 'Fine Enhancement Ore',
      value: '2000',
    },
    {
      selected: true,
      disabled: false,
      id: 'enhancement_ore',
      image: '/images/items/enhancement_ore.png',
      label: 'Enhancement Ore',
      value: '400',
    },
    {
      selected: true,
      disabled: false,
      id: 'any_weapon_1',
      image: '/images/weapons/sword.png',
      label: '1 Star Weapon',
      value: '600',
    },
    {
      selected: true,
      disabled: false,
      id: 'any_weapon_2',
      image: '/images/weapons/sword.png',
      label: '2 Star Weapon',
      value: '1200',
    },
    {
      selected: true,
      disabled: false,
      id: 'any_weapon_3',
      image: '/images/weapons/sword.png',
      label: '3 Star Weapon',
      value: '1800',
    },
  ];

  let addedToTodo = false;

  let withAscension = true;

  let rarity = null;

  let selectedWeapon = null;

  let currentLevel = '';
  let currentExp = '';
  let currentAscension = 0;

  let intendedAscension = 0;
  let intendedLevel = '';

  let minAscension = 0;
  let minIntendedAscension = 0;
  let ascensionResouce = {};
  let unknownList = {};
  let currentMax = null;
  let moraNeeded = 0;
  let changed = false;

  let numberFormat = Intl.NumberFormat();

  $: usedResource = resources.filter((e) => e.selected).sort((a, b) => b.value - a.value);
  $: currentAscension, updateIntendedAscension();
  $: currentLevel, updateMinAscension();
  $: intendedLevel, updateMinIntendedAscension();

  $: canCalculate =
    (withAscension ? selectedWeapon !== null : rarity !== null) &&
    intendedLevel >= currentLevel &&
    intendedAscension >= currentAscension &&
    currentLevel !== '' &&
    currentLevel > 0 &&
    currentLevel <= 90 &&
    intendedLevel !== '' &&
    intendedLevel > 0 &&
    intendedLevel <= 90;

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
    }
  }

  function calculateAscension() {
    const current = Math.max(currentAscension, 0);
    const target = intendedAscension;

    const result = selectedWeapon.ascension.slice(current, target).reduce(
      (sum, weapon, index) => {
        if (weapon.mora === 0) {
          if (unknownList[index + current] === undefined) {
            unknownList[index + current] = ['Mora amount'];
          }
        }

        const mora = sum.mora + weapon.mora;
        const items = sum.items;

        for (const [i, item] of weapon.items.entries()) {
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

  function calculate() {
    unknownList = {};
    ascensionResouce = {};

    const values = resources
      .filter((e) => e.selected)
      .map((e) => e.value)
      .sort((a, b) => b - a);
    const items = values.map(() => 0);

    if (withAscension) {
      rarity = weaponsRarity[-3 + selectedWeapon.rarity];
    }

    const target =
      weaponExp[rarity.value - 3][intendedLevel - 1] - (weaponExp[rarity.value - 3][currentLevel - 1] + currentExp);
    let current = target;
    let max = [];

    moraNeeded = Math.ceil(target / 10 / 20) * 20;

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
      type: 'weapon',
      weapon: withAscension ? selectedWeapon : null,
      level: { from: currentLevel, to: intendedLevel },
      resources: {
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
        <Check className="mb-2" on:change={onChange} bind:checked={withAscension}>Calculate Ascension Material?</Check>
        {#if !withAscension}
          <Select
            on:change={onChange}
            bind:selected={rarity}
            icon={mdiStar}
            options={weaponsRarity}
            placeholder="Select weapon rarity" />
        {:else}
          <WeaponSelect on:change={onChange} bind:selected={selectedWeapon} placeholder="Select weapon" />
        {/if}

        <div>
          <p class="text-white text-center mt-3 mb-2">Current Weapon Level, Exp, & Ascension</p>
          <Input
            className="mb-2"
            on:change={onChange}
            type="number"
            min={1}
            max={80}
            bind:value={currentLevel}
            placeholder="Input current weapon level..." />
          <Input
            className="mb-2"
            on:change={onChange}
            type="number"
            min={0}
            bind:value={currentExp}
            placeholder="Input current weapon exp..." />
          {#if withAscension}
            <AscensionSelector min={minAscension} bind:value={currentAscension} on:change={onChange} />
          {/if}
        </div>
        <div>
          <p class="text-white text-center mt-3 mb-2">Intended Weapon Level & Ascension</p>
          <Input
            className="mb-2"
            on:change={onChange}
            type="number"
            min={currentLevel}
            max={80}
            bind:value={intendedLevel}
            placeholder="Input intended weapon level..." />
          {#if withAscension}
            <AscensionSelector
              min={Math.max(currentAscension, minIntendedAscension)}
              bind:value={intendedAscension}
              on:change={onChange} />
          {/if}
        </div>
      </div>
    </div>
    <div class="flex flex-col pl-1">
      <p class="text-white text-center md:text-left mb-1">Resource to Use</p>
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
    </div>
    <div class="md:col-span-2 xl:col-span-1">
      <Button disabled={!canCalculate} className="block w-full md:w-auto" on:click={calculate}>Calculate</Button>
      {#if currentMax !== null && !changed}
        {#if Object.keys(unknownList).length > 0}
          <div class="border-2 border-red-400 rounded-xl mt-2 p-4 md:inline-block">
            <p class="font-bold flex items-center text-red-400">
              <Icon className="mr-1 mb-1" path={mdiInformationOutline} />
              There are some unknown information
            </p>
            {#each Object.entries(unknownList) as [title, values]}
              <p class="text-red-400">Ascension level {Number(title) + 1}</p>
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
                    <span class="text-white mr-2 whitespace-no-wrap">{currentMax.usage[i]}
                      <Icon size={0.5} path={mdiClose} /></span>
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
                    <span class="text-white mr-2 whitespace-no-wrap">{item.amount}
                      <Icon size={0.5} path={mdiClose} /></span>
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
                <span class="text-white mr-2 whitespace-no-wrap">{numberFormat.format(moraNeeded)}
                  <Icon size={0.5} path={mdiClose} /></span>
              </td>
              <td class="border-b border-gray-700 py-1">
                <span class="text-white">
                  <span class="w-6 inline-block">
                    <img class="h-6 inline-block mr-1" src="/images/mora.png" alt="Mora" />
                  </span>
                  Mora (approximate ±40)
                </span>
              </td>
            </tr>
            {#if currentMax.over < 0}
              <tr>
                <td />
                <td class="text-red-400 py-1">{currentMax.over * -1} EXP Wasted</td>
              </tr>
            {/if}
          </table>
          <Button className="mt-2 w-full" on:click={addedToTodo ? () => {} : addToTodo}>
            {#if addedToTodo}
              <span class="text-green-400" in:fade={{ duration: 100 }}>
                <Icon path={mdiCheckCircleOutline} size={0.8} />
                Added to Todo List
              </span>
            {:else}<span in:fade={{ duration: 100 }}>Add to Todo List </span>{/if}
          </Button>
        </div>
      {/if}
    </div>
  </div>
</div>
