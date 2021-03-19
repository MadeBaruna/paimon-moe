<script>
  import { mdiClose } from '@mdi/js';
  import { t } from 'svelte-i18n';
  import { fade } from 'svelte/transition';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import { time } from '../../stores/time';
  import Countdown from 'svelte-countdown';

  let changed = true;
  let currentResin = '';
  let desiredResin = '';
  let maxResin = 160;
  let millisecondsToWait;
  let fullTime = null;
  let missingResin = 160;
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
  $: isDesiredResin = desiredResin <= 160 && desiredResin >= 1 && desiredResin !== '';
  $: canCalculate = isCurrentResin || isDesiredResin;

  function calculate() {
    missingResin = maxResin - currentResin;
    resinOutput = resinTypeOutput === 'maxResin' ? missingResin : desiredResin;
    millisecondsToWait = resinTypeOutput === 'maxResin' ? missingResin * minutePerResin : desiredResin * minutePerResin;
    fullTime = new Date($time.getTime() + millisecondsToWait);
    changed = false;
  }

  function onChange(type) {
    changed = true;
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
      {#if !changed}
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
              <Countdown from={new Date(fullTime)} dateFormat="YYYY-MM-DD H:m:s" let:remaining>
                <span class="font-bold">
                  {new Intl.DateTimeFormat($t('calculator.resin.timeFormat'), dateTimeOptions).format(fullTime)}
                  ({remaining.hours != 0 ? `${remaining.hours} ${$t('calculator.resin.hours')}` : ''}
                  {remaining.minutes != 0 ? `${remaining.minutes} ${$t('calculator.resin.minutes')}` : ''}
                  {remaining.seconds != 0 ? `${remaining.seconds} ${$t('calculator.resin.seconds')}` : ''})
                </span>
              </Countdown></td
            >
          </tr>
        </div>
      {/if}
    </div>
  </div>
</div>
