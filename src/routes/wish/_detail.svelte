<script>
  import { t } from 'svelte-i18n';

  import dayjs from 'dayjs';
  import Icon from '../../components/Icon.svelte';
  import { mdiStar } from '@mdi/js';

  let numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });

  export let banner;
  export let dual;

  function calculateColor(percentage) {
    const hue = percentage * 120;
    return `color: hsl(${hue}, 100%, 60%);`;
  }

  const legendaryPity = banner.legendary.reduce((prev, next) => {
    prev += next.pity;
    return prev;
  }, 0);

  let rarePity = 0;
  let rarePityCharacter = 0;
  let rarePityWeapon = 0;
  let rareTotal = banner.rare.character.length + banner.rare.weapon.length;

  for (let item of banner.rare.character) {
    rarePity += item.pity;
    rarePityCharacter += item.pity;
  }
  for (let item of banner.rare.weapon) {
    rarePity += item.pity;
    rarePityWeapon += item.pity;
  }
</script>

<div>
  <img src={banner.image} class="w-full rounded-lg" alt={banner.name} />
  {#if dual}
    <img src={dual.image} class="w-full rounded-lg mt-2" alt={banner.name} />
  {/if}
  <h1 class="mt-4 text-white font-display font-semibold text-xl">
    {banner.name}
    {#if dual}
      - {dual.name}
    {/if}
  </h1>
  <p class="text-gray-400 font-body flex flex-col md:flex-row">
    <span class="flex">
      <span>{dayjs.unix(banner.start).format('ddd, D MMM YYYY HH:mm')}</span>
      <span class="mx-2">-</span>
    </span>
    <span>{dayjs.unix(banner.end).format('ddd, D MMM YYYY HH:mm')}</span>
  </p>
  <p class="text-gray-400 pr-2 mt-4">
    {$t('wish.detail.totalThisBanner')}
    <span class="text-gray-200 font-semibold">{banner.total}</span>
  </p>
  <p class="text-gray-400 pr-2">
    {$t('wish.detail.worth')}
    <img class="inline h-4" src="/images/primogem.png" alt="primogem" />
    <span class="text-gray-200 font-semibold">{banner.total * 160}</span>
  </p>
  <table class="mt-4">
    <tr>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-left">Rarity</td>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-right">Total</td>
      <td class="text-gray-400 text-sm font-display pr-2 md:pr-4 text-right">Percent</td>
      <td class="text-gray-400 text-sm font-display text-right whitespace-no-wrap">Pity AVG</td>
    </tr>
    <tr>
      <td class="text-legendary-from font-semibold pr-2 md:pr-4 border-t border-gray-700">
        5 <Icon path={mdiStar} color="#FFB13F" size="0.6" />
      </td>
      <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(banner.legendary.length)}
      </td>
      <td class="text-legendary-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format((banner.legendary.length / banner.total) * 100)}%
      </td>
      <td class="text-legendary-from font-semibold text-right border-t border-gray-700">
        {banner.legendary.length ? numberFormat.format(legendaryPity / banner.legendary.length) : 0}
      </td>
    </tr>
    <tr>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 border-t border-gray-700">
        4 <Icon path={mdiStar} color="#AD76B0" size="0.6" />
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(rareTotal)}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format((rareTotal / banner.total) * 100)}%
      </td>
      <td class="text-rare-from font-semibold text-right border-t border-gray-700">
        {rareTotal > 0 ? numberFormat.format(rarePity / rareTotal) : 0}
      </td>
    </tr>
    <tr>
      <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700 whitespace-no-wrap">
        └ Character
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(banner.rare.character.length)}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format((banner.rare.character.length / banner.total) * 100)}%
      </td>
      <td class="text-rare-from font-semibold text-right border-t border-gray-700">
        {banner.rare.character.length > 0 ? numberFormat.format(rarePityCharacter / banner.rare.character.length) : 0}
      </td>
    </tr>
    <tr>
      <td class="text-rare-from font-semibold pl-4 md:pl-4 pr-2 md:pr-4 border-t border-gray-700 whitespace-no-wrap">
        └ Weapon
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format(banner.rare.weapon.length)}
      </td>
      <td class="text-rare-from font-semibold pr-2 md:pr-4 text-right border-t border-gray-700">
        {numberFormat.format((banner.rare.weapon.length / banner.total) * 100)}%
      </td>
      <td class="text-rare-from font-semibold text-right border-t border-gray-700">
        {banner.rare.weapon.length > 0 ? numberFormat.format(rarePityWeapon / banner.rare.weapon.length) : 0}
      </td>
    </tr>
  </table>
  <div class="flex flex-wrap mt-4">
    {#each banner.legendary as pull}
      <span class="pity">{pull.name} <span style={calculateColor((90 - pull.pity) / 90)}>{pull.pity}</span></span>
    {/each}
  </div>
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
</style>
