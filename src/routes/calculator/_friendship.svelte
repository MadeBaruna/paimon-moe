<script>
  import { fade } from 'svelte/transition';
  import { t } from 'svelte-i18n';
  import Select from '../../components/Select.svelte';
  import Button from '../../components/Button.svelte';
  import { commissionBonusExp, commissionExp, friendshipExp } from '../../data/friendshipExp';
  import { ar } from '../../stores/server';
  import Icon from '../../components/Icon.svelte';
  import { mdiMinus, mdiPlus } from '@mdi/js';

  let selectOptions = [...new Array(9)].map((e, i) => ({ label: i + 1, value: i + 1 }));
  let level = null;
  let randomEvent = 0;
  let canCalculate = false;
  let currentExp = 20;
  let changed = true;
  let result = 0;
  let resultSerenitea = 0;

  function calculate() {
    let expNeeded = friendshipExp.slice(level.value - 1).reduce((prev, cur) => prev + cur, 0);
    expNeeded -= (currentExp / 100) * friendshipExp[level.value - 1];

    const currentAR = $ar;

    const commisExpDaily = commissionExp[currentAR - 12] * 4 + commissionBonusExp[currentAR - 12];
    const dailyResinExp = currentAR >= 35 ? 180 : 135;
    const randomEventExp = randomEvent * 10;

    const total = commisExpDaily + dailyResinExp + randomEventExp;

    console.log(expNeeded, commisExpDaily, dailyResinExp, randomEventExp, total);
    result = Math.ceil(expNeeded / total);
    resultSerenitea = Math.ceil(expNeeded / (total + 5 * 24));
    changed = false;
  }

  function changeRandomEvent(count) {
    randomEvent += count;
    if (randomEvent < 0) randomEvent = 0;
    if (randomEvent > 10) randomEvent = 10;
    changed = true;
  }

  function onChange() {
    changed = true;
  }

  $: canCalculate = level !== null;
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    <div>
      <Select
        options={selectOptions}
        on:change={onChange}
        bind:selected={level}
        placeholder={$t('calculator.friendship.currentLevel')}
      />
      <p class="text-white mt-4 text-center">{$t('calculator.friendship.currentExp')} - {currentExp}%</p>
      <input
        type="range"
        min={0}
        max={100}
        class="slider"
        style="background: linear-gradient(to right, #b3a2f8 0%, #b3a2f8 {currentExp}%, #202442 {currentExp}%, #202442 100%);"
        on:change={onChange}
        bind:value={currentExp}
      />
      <p class="text-white mt-4 text-center">{$t('calculator.friendship.randomEventFarm')}</p>
      <div class="flex justify-center">
        <Button on:click={() => changeRandomEvent(-1)}><Icon path={mdiMinus} /></Button>
        <p class="mx-2 bg-background rounded-xl text-bold text-white py-4 w-16 text-center">{randomEvent}</p>
        <Button on:click={() => changeRandomEvent(1)}><Icon path={mdiPlus} /></Button>
      </div>
    </div>
    <div class="md:col-span-2 xl:col-span-1">
      <Button disabled={!canCalculate} className="block w-full md:w-auto" on:click={calculate}>
        {$t('calculator.friendship.calculate')}
      </Button>
      {#if !changed}
        <div transition:fade={{ duration: 100 }} class="bg-background rounded-xl p-4 mt-2 block xl:inline-block">
          <p class="block text-center text-gray-400">{$t('calculator.friendship.based', { values: { ar: $ar } })}</p>
          <table class="text-gray-200">
            <tr>
              <td class="text-xl font-bold text-primary whitespace-nowrap pr-4 border-b border-gray-700 pb-1">
                {$t('calculator.friendship.resultDay', { values: { result } })}
              </td>
              <td class="border-b border-gray-700 pb-1">{$t('calculator.friendship.result')}</td>
            </tr>
            <tr>
              <td class="text-xl font-bold text-primary whitespace-nowrap pr-4 pt-1">
                {$t('calculator.friendship.resultDay', { values: { result: resultSerenitea } })}
              </td>
              <td class="pt-1">{$t('calculator.friendship.resultSerenitea')}</td>
            </tr>
          </table>
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .slider {
    @apply w-full h-4 rounded-xl;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1px;
    background: #b3a2f8;
  }

  .slider::-moz-range-thumb {
    width: 0px;
    background: #b3a2f8;
  }
  /* .slider:focus {
    -webkit-appearance: none;
  } */
</style>
