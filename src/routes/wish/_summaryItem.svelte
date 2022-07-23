<script>
  import { t } from 'svelte-i18n';
  import { mdiStar } from '@mdi/js';

  import Icon from '../../components/Icon.svelte';

  export let avg;
  export let type;
  export let order = 0;
  export let legendaryPity = type.id === 'weapon-event' ? 80 : 90;
  export let colorMultiplier = 120;

  let numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  function calculateColor(percentage) {
    const hue = percentage * colorMultiplier;
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  $: textSize = avg.legendary.total > 20 ? 'text-sm' : 'text-base';
</script>

<div
  class="bg-item rounded-xl p-4 flex flex-col w-full half-width summary-item"
  style="height: min-content; order: {order};"
>
  <table>
    <tr>
      <td class="text-white text-md font-semibold pr-2 md:pr-4 flex-1 w-full">{$t(`wish.types.${type.id}`)}</td>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-right">{$t('wish.summary.total')}</td>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-right">{$t('wish.summary.percent')}</td>
      <td class="text-gray-400 text-sm font-display text-right whitespace-nowrap">{$t('wish.summary.pityAverage')}</td>
    </tr>
    <tr>
      <td class="text-legendary-from font-semibold pr-2 md:pr-4 border-t border-gray-700">
        5 <Icon path={mdiStar} color="#FFB13F" size="0.6" />
      </td>
      <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.legendary.total)}
      </td>
      <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.legendary.percentage * 100)}%
      </td>
      <td class="text-legendary-from font-semibold text-right border-t border-gray-700">
        {numberFormat.format(avg.legendary.pity)}
      </td>
    </tr>
    {#if avg.legendary.rateOff !== undefined}
      <tr>
        <td class="text-legendary-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700">
          └ {$t('wish.summary.featured')}
        </td>
        <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
          {numberFormat.format(avg.legendary.featured.total)}
        </td>
        <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
          {numberFormat.format(avg.legendary.featured.percentage * 100)}%
        </td>  
        <td class="text-legendary-from font-semibold text-right border-t border-gray-700">
          {numberFormat.format(avg.legendary.featured.pity)}
        </td>
        <td class="text-legendary-from font-semibold text-right border-t border-gray-700" />
      </tr>
      <tr>
        <td class="text-legendary-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700">
          └ {$t(type.id === 'weapon-event' ? 'wish.summary.winRateOffWeapon' : 'wish.summary.winRateOff')}
        </td>
        <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
          {numberFormat.format(avg.legendary.rateOff.total)}
        </td>
        <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
          {numberFormat.format(avg.legendary.rateOff.percentage * 100)}%
        </td>
        <td class="text-legendary-from font-semibold text-right border-t border-gray-700" />
      </tr>
    {/if}
    <tr>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 border-t border-gray-700">
        4 <Icon path={mdiStar} color="#AD76B0" size="0.6" />
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.total)}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.percentage * 100)}%
      </td>
      <td class="text-rare-from font-semibold text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.pity)}
      </td>
    </tr>
    <tr>
      <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700">
        └ {$t('wish.summary.character')}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.character.total)}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.character.percentage * 100)}%
      </td>
      <td class="text-rare-from font-semibold text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.character.pity)}
      </td>
    </tr>
    <tr>
      <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700">
        └ {$t('wish.summary.weapon')}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.weapon.total)}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.weapon.percentage * 100)}%
      </td>
      <td class="text-rare-from font-semibold text-right border-t border-gray-700">
        {numberFormat.format(avg.rare.weapon.pity)}
      </td>
    </tr>
    {#if avg.rare.rateOff !== undefined}
      <tr>
        <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700">
          └ {$t('wish.summary.winRateOff')}
        </td>
        <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
          {numberFormat.format(avg.rare.rateOff.total)}
        </td>
        <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
          {numberFormat.format(avg.rare.rateOff.percentage * 100)}%
        </td>
        <td class="text-rare-from font-semibold text-right border-t border-gray-700" />
      </tr>
    {/if}
  </table>
  {#if avg.legendary.pulls.length > 0}
    <div class="flex flex-wrap mt-2 overflow-y-auto" style="max-height: 500px;">
      {#each avg.legendary.pulls as pull}
        <span class="pity rate-{pull.rate} {textSize}"
          >{$t(pull.name)}
          <span style={calculateColor((legendaryPity - pull.pity) / legendaryPity)}>{pull.pity}</span></span
        >
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  span.pity {
    @apply rounded-xl;
    @apply text-gray-400;
    @apply border;
    @apply border-legendary-from;
    @apply whitespace-nowrap;
    @apply px-2;
    @apply mb-1;
    @apply mr-1;

    &.rate-0,
    &.rate-2 {
      @apply border-gray-500;
    }

    & > span {
      @apply font-semibold;
      @apply pl-1;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    @apply rounded-xl;
  }

  @screen md {
    .summary-item {
      margin: 0;
      display: grid;
      grid-template-rows: 1fr auto;
      margin-bottom: 1rem;
      break-inside: avoid;
    }
  }
</style>
