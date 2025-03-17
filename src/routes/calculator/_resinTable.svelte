<script>
  import { mdiArrowRight } from '@mdi/js';
  import dayjs from 'dayjs';
  import 'dayjs/locale/en';
  import 'dayjs/locale/id';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';

  dayjs.extend(relativeTime);

  const step = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200 ];
  const stepTime = [];

  let originalResin = {
    id: 'original_resin',
    image: '/images/resin.png',
    label: 'Original Resin',
    value: 8,
  };

  function counTimeRelative() {
    step.map((s) => {
      const time = originalResin.value * s * 60 * 1000;
      stepTime.push(new Date().getTime() + time);
    });
  }

  const rows = Array.from(Array(step.length - 1).keys());

  counTimeRelative();
</script>

<div class="block overflow-x-auto whitespace-nowrap pb-1">
  <div class="table w-full">
    <div class="bg-item rounded-xl p-4 w-full">
      <table class="w-full">
        <tr>
          <th class="px-2 font-display text-gray-400">{$t('calculator.resinTable.quantity')}</th>
          <th class="px-2 font-display text-gray-400 align-bottom">{$t('calculator.resinTable.time')}</th>
        </tr>
        {#each rows as _, i}
          <tr>
            <td class="pl-2 text-white text-center"
              >{step[0]}<Icon className="mb-1 text-gray-400" path={mdiArrowRight} size={0.7} />{step[i + 1]}
              <img src={originalResin.image} alt={originalResin.label} class="h-6 w-6 inline" /></td
            >
            <td class="pr-2 text-white text-center">
              {dayjs(new Date(stepTime[i + 1]))
                .locale($t('calculator.resin.timeFormat'))
                .fromNow()}
            </td>
          </tr>
        {/each}
      </table>
    </div>
  </div>
</div>

<style lang="postcss">
  td,
  th {
    @apply py-1;
    @apply border-b;
    @apply border-gray-700;
  }
</style>
