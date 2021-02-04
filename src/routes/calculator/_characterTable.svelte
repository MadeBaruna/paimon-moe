<script>
  import { mdiArrowRight } from '@mdi/js';

  import Icon from '../../components/Icon.svelte';
  import { characterExp } from '../../data/characterExp';

  let numberFormat = Intl.NumberFormat();
  const step = [1, 20, 40, 50, 60, 70, 80, 90];
  const resources = [
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

  let result = [];

  process();

  function process() {
    for (let i = 0; i < step.length - 1; i++) {
      calculate(step[i], step[i + 1]);
    }
  }

  function calculate(start, end) {
    const values = resources
      .filter((e) => e.selected)
      .map((e) => e.value)
      .sort((a, b) => b - a);
    const items = values.map(() => 0);

    const target = characterExp[end - 1] - characterExp[start - 1];
    let current = target;
    let max = [];

    const moraNeeded = (Math.floor(target / 1000) * 1000) / 5;

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

    const currentMax = max.sort((a, b) => b.over - a.over)[0];

    result = [...result, { usage: currentMax.usage, over: currentMax.over, mora: moraNeeded }];
  }
</script>

<div class="block overflow-x-auto whitespace-no-wrap pb-1">
  <div class="table w-full">
    <div class="bg-item rounded-xl p-4 w-full">
      <table>
        <tr>
          <th class="px-2 font-display text-gray-400" colspan="3">Level</th>
          <th class="px-2 font-display text-gray-400 align-bottom">Items</th>
          <th class="px-2 font-display text-gray-400 align-bottom">Wasted Exp</th>
          <th class="px-2 font-display text-gray-400 align-bottom text-right">Mora Cost</th>
        </tr>
        {#each result as row, i}
          <tr>
            <td class="pl-2 text-white text-center">{step[i]}</td>
            <td class="text-white text-center"
              ><Icon className="mb-1 text-gray-400" path={mdiArrowRight} size={0.7} /></td
            >
            <td class="pr-2 text-white text-center">{step[i + 1]}</td>
            <td class="px-2 text-white whitespace-no-wrap" style="min-width: 180px;">
              {#each resources as res, j}
                {#if row.usage[j] > 0}
                  <span class="mr-2">
                    <img src={res.image} alt={res.label} class="h-6 w-6 inline" />
                    <span>{row.usage[j]}</span>
                  </span>
                {/if}
              {/each}
            </td>
            <td class="px-2 text-white text-center">{Math.abs(row.over)}</td>
            <td class="px-2 text-white text-right">{numberFormat.format(row.mora)}</td>
          </tr>
        {/each}
      </table>
    </div>
  </div>
</div>

<style>
  td,
  th {
    @apply py-1;
    @apply border-b;
    @apply border-gray-700;
  }
</style>
