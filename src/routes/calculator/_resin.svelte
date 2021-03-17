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
  let maxResin = 160;
  let millisecondsToWait;
  let fullTime = null;
  let missingResin = 160;

  let originalResin = {
    id: 'original_resin',
    image: '/images/resin.png',
    label: 'Original Resin',
    value: 8,
  };

  // 8 menit per resin * 60 seconds * 1000 millisec
  let minutePerResin = originalResin.value * 60 * 1000;

  let dateTimeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
  };

  $: canCalculate = currentResin !== '' && currentResin >= 0 && currentResin < 160;

  function calculate() {
    missingResin = maxResin - currentResin;
    millisecondsToWait = missingResin * minutePerResin;
    fullTime = new Date($time.getTime() + millisecondsToWait);
  }

  function onChange() {
    changed = true;
  }
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-4">
    <!-- input -->
    <div class="md:col-span-1 xl:col-span-1">
      <Input
        className="mb-2"
        on:change={onChange}
        type="number"
        min={0}
        max={160}
        bind:value={currentResin}
        placeholder={$t('calculator.resin.inputCurrentResin')}
      />
      <p class="text-white text-center mt-3 mb-2">
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
      {#if fullTime}
        <div transition:fade={{ duration: 100 }} class="bg-background rounded-xl p-4 mt-2 block xl:inline-block">
          <tr>
            <td class="text-right border-b border-gray-700 py-1">
              <span class="text-white mr-2 whitespace-no-wrap"
                >{missingResin}
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
