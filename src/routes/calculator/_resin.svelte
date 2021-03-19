<script>
  import { mdiClose } from '@mdi/js';
  import { t } from 'svelte-i18n';
  import { fade } from 'svelte/transition';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import { time } from '../../stores/time';

  let changed = false;
  let currentResin = '';
  let desiredResin = '';
  let maxResin = 160;
  let millisecondsToWait;
  let fullTime = null;
  let missingResin = 160;
  let showResult = false;
  let resinTypeOutput = '';
  let resinOutput = '';

  let originalResin = {
    id: 'original_resin',
    image: '/images/resin.png',
    label: 'Original Resin',
    value: 8,
  };

  // 8 minute per resin * 60 seconds * 1000 millisec
  let minutePerResin = originalResin.value * 60 * 1000;

  let dateTimeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
  };

  $: isCurrentResin = currentResin >= 0 && currentResin < 160 && currentResin !== '';
  $: isDesiredResin = desiredResin <= 160 && desiredResin >= 1 && desiredResin === '';
  $: canCalculate = isCurrentResin || isDesiredResin;

  function calculate() {
    missingResin = maxResin - currentResin;
    resinOutput = resinTypeOutput === 'maxResin' ? missingResin : desiredResin;
    millisecondsToWait = resinTypeOutput === 'maxResin' ? missingResin * minutePerResin : desiredResin * minutePerResin;
    fullTime = new Date($time.getTime() + millisecondsToWait);
    showResult = true;
  }

  function onChange(type) {
    changed = true;
    showResult = false;
    resinTypeOutput = type;
  }
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
        {$t('calculator.resin.currentTime')}: {new Intl.DateTimeFormat(
          $t('calculator.resin.timeFormat'),
          dateTimeOptions,
        ).format($time)}
      </p>
    </div>
    <div class="md:col-span-2 xl:col-span-2">
      <Button disabled={!canCalculate} className="block w-full md:w-auto" on:click={calculate}
        >{$t('calculator.resin.calculate')}</Button
      >
      {#if showResult}
        <div transition:fade={{ duration: 100 }} class="bg-background rounded-xl p-4 mt-2 block xl:inline-block">
          <tr>
            <td class="text-right border-b border-gray-700 py-1">
              <span class="text-white mr-2 whitespace-no-wrap"
                >{resinOutput}
                <Icon size={0.5} path={mdiClose} /></span
              >
            </td>
            <td class="border-b border-gray-700 py-1">
              <span class="text-white">
                <span class="w-6 inline-block">
                  <img class="h-6 inline-block mr-1" src={originalResin.image} alt={originalResin.label} />
                </span>
                {originalResin.label}
              </span>
            </td>
          </tr>
          <tr>
            <td />
            <td class="text-red-400 py-1">
              {$t('calculator.resin.fullTime')}:
              <span class="bg-red-400 rounded-lg mt-2 font-bold text-sm text-white p-1">
                {new Intl.DateTimeFormat($t('calculator.resin.timeFormat'), dateTimeOptions).format(fullTime)}
              </span></td
            >
          </tr>
        </div>
      {/if}
    </div>
  </div>
</div>
