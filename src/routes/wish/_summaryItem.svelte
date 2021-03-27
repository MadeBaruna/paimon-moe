<script>
  import { mdiStar } from '@mdi/js';

  import Icon from '../../components/Icon.svelte';

  export let withBottomSpace;
  export let avg;
  export let type;

  let numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  function calculateColor(percentage) {
    const hue = percentage * 120;
    return `color: hsl(${hue}, 100%, 60%);`;
  }
</script>

<div
  class={`bg-item rounded-xl p-4 flex flex-col w-full ${withBottomSpace ? 'mb-4' : ''}`}
  style="height: min-content;"
>
  <table>
    <tr>
      <td class="text-white text-md font-semibold pr-2 md:pr-4 flex-1 w-full">{type.name}</td>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-right">Total</td>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-right">Percent</td>
      <td class="text-gray-400 text-sm font-display text-right whitespace-no-wrap">Pity AVG</td>
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
        └ Character
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
        └ Weapon
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
  </table>
  {#if avg.legendary.pulls.length > 0}
    <div class="flex flex-wrap mt-2 overflow-y-auto" style="max-height: 300px;">
      {#each avg.legendary.pulls as pull}
        <span class="pity">{pull.name} <span style={calculateColor((90 - pull.pity) / 90)}>{pull.pity}</span></span>
      {/each}
    </div>
  {/if}
</div>

<style>
  span.pity {
    @apply rounded-xl;
    @apply text-gray-400;
    @apply border;
    @apply border-legendary-from;
    @apply whitespace-no-wrap;
    @apply px-2;
    @apply mb-1;
    @apply mr-1;

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
</style>
