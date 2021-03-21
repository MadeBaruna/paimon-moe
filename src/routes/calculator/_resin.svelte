<script>
  import { mdiClose } from '@mdi/js';
  import dayjs from 'dayjs';
  import { t } from 'svelte-i18n';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import rTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/en';
  import 'dayjs/locale/id';

  dayjs.extend(rTime);

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';

  let changed = true;
  let currentResin = '';
  let desiredResin = '';
  let maxResin = 160;
  let millisecondsToWait;
  let fullTime = null;
  let relativeTime = null;
  let missingResin = 160;
  let resinTypeOutput = '';
  let resinOutput = {
    resin: 0,
    condensed: {
      resin: 0,
      condensedResin: 0,
    },
  };
  let currentTime = dayjs();

  let originalResin = {
    id: 'original_resin',
    image: '/images/resin.png',
    label: 'Original Resin',
    value: 8,
  };

  let condensedResin = {
    id: 'condensed_resin',
    label: 'Condensed Resin',
    value: 40,
  };

  // 8 minute per resin * 60 seconds * 1000 millisec
  let minutePerResin = originalResin.value * 60 * 1000;

  $: isCurrentResin = currentResin >= 0 && currentResin < 160 && currentResin !== '';
  $: isDesiredResin = desiredResin <= 160 && desiredResin >= 1 && desiredResin !== '';
  $: canCalculate = isCurrentResin || isDesiredResin;

  function calculateCondensedResin(nResin) {
    if (condensedResin.value % nResin == 0) {
      return {
        resin: 0,
        condensedResin: Math.floor(nResin / condensedResin.value),
      };
    } else {
      return {
        resin: nResin % condensedResin.value,
        condensedResin: Math.floor(nResin / condensedResin.value),
      };
    }
  }

  function calculate() {
    missingResin = maxResin - currentResin;
    resinOutput =
      resinTypeOutput === 'maxResin'
        ? { resin: missingResin, condensed: calculateCondensedResin(missingResin) }
        : { resin: desiredResin, condensed: calculateCondensedResin(desiredResin) };
    millisecondsToWait = resinTypeOutput === 'maxResin' ? missingResin * minutePerResin : desiredResin * minutePerResin;
    fullTime = dayjs(currentTime.valueOf() + millisecondsToWait);
    changed = false;
  }

  function onChange(type) {
    changed = true;
    resinTypeOutput = type;
  }

  onMount(() => {
    const interval = setInterval(() => {
      currentTime = dayjs().add(0, 'minute');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-4">
    <!-- input -->
    <div class="md:col-span-1 xl:col-span-1 space-y-2">
      <p class="text-center text-white">
        {$t('calculator.resin.currentResin')}
      </p>
      <Input
        on:change={() => onChange('maxResin')}
        type="number"
        min={0}
        max={160}
        bind:value={currentResin}
        placeholder={$t('calculator.resin.inputCurrentResin')}
      />
      <p class="text-center text-white">{$t('calculator.resin.or')} {$t('calculator.resin.desiredResin')}</p>
      <Input
        on:change={() => onChange('desiredResin')}
        type="number"
        min={1}
        max={160}
        bind:value={desiredResin}
        placeholder={$t('calculator.resin.inputDesireResin')}
      />
      <p class="text-white text-center">
        {$t('calculator.resin.currentTime')}:
        {#if $t('calculator.resin.timeFormat') === 'en'}
          {currentTime.locale('en').format('dddd HH:mm:ss')}
        {:else}
          {currentTime.locale('id').format('dddd HH:mm:ss')}
        {/if}
      </p>
    </div>
    <div class="md:col-span-2 xl:col-span-2">
      <Button disabled={!canCalculate} className="block w-full md:w-auto" on:click={calculate}
        >{$t('calculator.resin.calculate')}</Button
      >
      {#if !changed}
        <div transition:fade={{ duration: 100 }} class="bg-background rounded-xl p-4 mt-2 block xl:inline-block">
          <table class="table w-full">
            <tr>
              <td />
              <td class="text-red-400">
                {$t('calculator.resin.fullTime')}:
                {#if $t('calculator.resin.timeFormat') === 'en'}
                  {fullTime.locale('en').format('dddd HH:mm:ss')} ({fullTime.locale('en').fromNow()})
                {:else}
                  {fullTime.locale('id').format('dddd HH:mm:ss')} ({fullTime.locale('id').fromNow()})
                {/if}
              </td>
            </tr>
          </table>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  td {
    @apply py-1;
    @apply border-b;
    @apply border-gray-700;
  }
  tr:last-child {
    td {
      @apply border-b-0;
    }
  }
</style>
