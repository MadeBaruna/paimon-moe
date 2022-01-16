<script>
  import { fade } from 'svelte/transition';
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Input from '../../components/Input.svelte';
  import dayjs from 'dayjs';

  let fateValues = [
    { id: "interwinedFate", name: $t('calculator.fateCount.interwinedFate'), image: "/images/intertwined_fate.png", amount: 0 },
    { id: "starglitter", name: $t('calculator.fateCount.starglitter'), image: "/images/starglitter.png", amount: 0 },
    { id: "stardust", name: $t('calculator.fateCount.stardust'), image: "/images/stardust.png", amount: 0 },
    { id: "primogem", name: $t('calculator.fateCount.primogem'), image: "/images/primogem.png", amount: 0 },
    { id: "genesisCrystal", name: $t('calculator.fateCount.genesisCrystal'), image: "/images/genesis_crystal.png", amount: 0 },
    { id: "welkinMoon", name: $t('calculator.fateCount.welkinMoon'), image: "/images/welkin_moon.png", amount: 0 },
  ];

  let parameters = [
    { name: "Days until pull", amount: 0 },
    { name: "Stardust Wishes (left this month)", amount: 5 }
  ]

  let result = null;
  let totalPrimogem = 0;

  function calculate() {
    onChange();
    result = [];
    for (const value of fateValues) {
      if (value.amount >= 0) {
        let total = 0;
        switch (value.id) {
          case "interwinedFate":
            total = value.amount*160;
            break;
          case "starglitter":
            total = Math.floor(value.amount/5)*160;
            break;
          case "stardust":
            let dateNow = dayjs();
            let monthPull = dateNow.add(parameters[0].amount, 'day').startOf('month');
            let monthDiff = monthPull.diff(dateNow, 'month');
            let maxStardustFate = monthDiff*5+parameters[1].amount;
            total = Math.min(Math.floor(value.amount/75), maxStardustFate)*160;
            break;
          case "primogem":
            total = value.amount;
            break;
          case "genesisCrystal":
            total = value.amount;
            break;
          case "welkinMoon":
            let days = Math.min(value.amount, parameters[0].amount)
            total = Math.floor(days/30)*300 + days*90
        }
        if (total>0) {
          totalPrimogem += total
          result.push({name: value.name, image: value.image, amount: value.amount, total: total })
        }
      }
    }
    if (parameters[0].amount>0) {
      let total = parameters[0].amount*60;
      totalPrimogem += total;
      result.push({name: $t('calculator.fateCount.dailyCommission'), image: "/images/commission.png", amount: parameters[0].amount, total: total})
    }
  }

  function onChange() {
    result = null;
    totalPrimogem = 0;
  }
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    <div>
      <div>
        {#each fateValues as value}
          <div class="mb-1 rounded-xl border-background border p-2">
            <div class="flex flex-row items-center mb-1">
              <img src={value.image} alt={value.name} class="w-6 mr-2" />
              <p class="text-white">{value.name}</p>
            </div>
            <div class="flex flex-row items-center">
              <div class="w-full">
                <Input className="text-center" bind:value={value.amount} on:change={onChange} type="number" min="0" step="1" pattern="\d*" />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div>
      {#each parameters as value}
        <div class="mb-1 rounded-xl border-background border p-2">
          <div class="flex flex-row items-center mb-1">
            <p class="text-white">{value.name}</p>
          </div>
          <div class="flex flex-row items-center">
            <div class="w-full">
              <Input className="text-center" bind:value={value.amount} on:change={onChange} type="number" min="0" step="1" pattern="\d*" />
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="md:col-span-2 xl:col-span-1">
      <Button className="block w-full md:w-auto" on:click={calculate}
        >{$t('calculator.fateCount.calculate')}</Button
      >
      {#if result !== null}
        <div>
          <div
          transition:fade={{ duration: 100 }}
          class="rounded-xl bg-background p-4 block md:inline-block"
          style="height: fit-content; width: fit-content;"
          >
            <table>
              <tr>
                <th class="text-white pr-2 text-center">{$t('calculator.fateCount.type')}</th>
                <th class="text-white pr-2 text-center">{$t('calculator.fateCount.amount')}</th>
                <th class="text-white pr-2 text-right">{$t('calculator.fateCount.totalPrimogem')}</th>
              </tr>
              {#each result as res}
                <tr>
                  <td class="border-t border-gray-700 text-white pr-2">
                    <span class="inline-flex align-middle">
                      {#if res.image !== null}<img src={res.image} alt={res.name} class="w-6 h-6 mr-2" />{/if}
                      <p class="text-white">{res.name}</p>
                    </span>
                  </td>
                  <td class="border-t border-gray-700 text-white pr-2 text-center">
                    {res.amount}
                  </td>
                  <td class="border-t border-gray-700 text-white text-right">
                    {res.total}
                  </td>
                </tr>
              {/each}
              <tr>
                <td class="border-t border-gray-700 text-white text-right whitespace-no-wrap" colspan={5}>
                  {$t('calculator.fateCount.totalPrimogem')}
                  {totalPrimogem}
                  <img class="mr-1 w-6 inline" src="/images/primogem.png" alt="Primogem" />
                  ({Math.floor(totalPrimogem / 160)}
                  <img class="w-6 inline" src="/images/intertwined_fate.png" alt="Fate" />)
                </td>
              </tr>
            </table>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
