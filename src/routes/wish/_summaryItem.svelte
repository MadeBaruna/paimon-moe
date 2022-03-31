<script>
  import { t } from 'svelte-i18n';
  import { mdiStar } from '@mdi/js';

  import Icon from '../../components/Icon.svelte';
  import { onMount } from 'svelte';

  export let avg;
  export let type;

  const legendaryStr = JSON.stringify(avg.legendary.pulls);
  let legendary = JSON.parse(legendaryStr);
  let legendaryBackup = JSON.parse(legendaryStr);
  let dropit = false;
  let stop = false;
  let running = true;

  let numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  function calculateColor(percentage) {
    const hue = percentage * 120;
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  async function suprize() {
    const randomOrder = [...Array(legendary.length).keys()];
    for (let i = randomOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomOrder[i], randomOrder[j]] = [randomOrder[j], randomOrder[i]];
    }

    let time = 2000;
    for (const index of randomOrder) {
      legendary[index].name = 'Qiqi';
      await sleep(time);
      time = Math.max(100, time - 100);
    }

    running = false;
    await sleep(20000);
    if (stop) return;
    wow();
  }

  async function wow() {
    if (running) return;
    dropit = true;
    await sleep(3000);
    dropit = false;
    legendary = legendaryBackup;
  }

  function stopit() {
    stop = true;
    wow();
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onMount(() => {
    if (type.id === 'character-event' && Math.random() > 0.5) suprize();
  });

  $: textSize = avg.legendary.total > 20 ? 'text-sm' : 'text-base';
</script>

<div class="bg-item rounded-xl p-4 flex flex-col w-full" style="height: min-content;">
  <table>
    <tr>
      <td class="text-white text-md font-semibold pr-2 md:pr-4 flex-1 w-full">{$t(`wish.types.${type.id}`)}</td>
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
      <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700"> └ Character </td>
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
      <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700"> └ Weapon </td>
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
  {#if legendary.length > 0}
    <div class="flex flex-wrap mt-2 overflow-y-auto {dropit ? 'nice' : ''}" style="max-height: 500px;">
      {#each legendary as pull}
        <span class="pity {textSize}" on:click={stopit}>
          {$t(pull.name)} <span style={calculateColor((90 - pull.pity) / 90)}>{pull.pity}</span>
        </span>
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

  .nice {
    animation: 3s wow steps(1);
  }

  @keyframes wow {
    0% {
      filter: invert(1);
    }
    5% {
      filter: invert(0);
    }
    15% {
      filter: drop-shadow(16px 16px 20px red) invert(75%);
    }
    20% {
      filter: invert(0);
    }
    30% {
      filter: invert(0.9);
    }
    50% {
      filter: invert(0);
    }
    80% {
      filter: invert(1);
    }
    85% {
      filter: invert(0);
    }
    90% {
      filter: drop-shadow(16px 16px 20px red) invert(75%);
    }
    95% {
      filter: invert(0);
    }
    100% {
      filter: invert(1);
    }
  }
</style>
