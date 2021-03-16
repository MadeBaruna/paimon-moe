<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Input from '../../components/Input.svelte';
  import { time } from '../../stores/time';

  let changed = false;
  let currentResin;
  let maxResin = 160;
  let millisecondsToWait;
  let fullTime = null;

  // 8 menit per resin * 60 seconds * 1000 millisec
  let minutePerResin = 8 * 60 * 1000;

  let dateTimeOptions = {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
  };

  function calculate() {
    millisecondsToWait = (maxResin - currentResin) * minutePerResin;
    fullTime = new Date($time.getTime() + millisecondsToWait);
  }

  function onChange() {
    changed = true;
  }
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    <!-- input -->
    <div>
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
      {#if fullTime}
        <p class="text-white text-center mt-3 mb-2">
          {$t('calculator.resin.fullTime')} : {new Intl.DateTimeFormat(
            $t('calculator.resin.timeFormat'),
            dateTimeOptions,
          ).format(fullTime)}
        </p>
      {/if}
    </div>
    <div class="md:col-span-2 xl:col-span-1">
      <Button disabled={!currentResin} className="block w-full md:w-auto" on:click={calculate}
        >{$t('calculator.resin.calculate')}</Button
      >
    </div>
  </div>
</div>
