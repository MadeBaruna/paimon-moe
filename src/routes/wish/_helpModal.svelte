<script>
  import { t } from 'svelte-i18n';

  import { mdiPencil, mdiStar } from '@mdi/js';
  import Icon from '../../components/Icon.svelte';
</script>

<div>
  <h1 class="font-display text-white text-xl mb-2">{$t('wish.help.howto.title')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <p class="mb-2">{$t('wish.help.howto.subtitle')}</p>
    <p class="mb-2">
      {@html $t('wish.help.howto.pressWhenYouGet', {
        values: {
          button: '<b class="rounded-lg px-2 py-1 border-white border inline-flex">+1</b>',
          rarity: 3,
        },
      })}
    </p>
    <p class="mb-2">
      {@html $t('wish.help.howto.pressWhenYouGet', {
        values: {
          button: `<b class="rounded-lg px-2 py-1 border-white border inline-flex">Get 4★</b>`,
          rarity: 4,
        },
      })}
    </p>
    <p class="mb-2">
      {@html $t('wish.help.howto.pressWhenYouGet', {
        values: {
          button: `<b class="rounded-lg px-2 py-1 border-white border inline-flex">Get 5★</b>`,
          rarity: 5,
        },
      })}
    </p>
    <p class="text-gray-400">
      {$t('wish.help.howto.p1')}
    </p>
    <p class="text-gray-400">
      {$t('wish.help.howto.p2.0')}
      <span class="inline-flex items-center"
        >4
        <Icon path={mdiStar} size={0.7} /></span
      >
      {$t('wish.help.howto.p2.1')}
    </p>
    <p class="text-gray-400">
      {$t('wish.help.howto.p3.0')}
      <span class="inline-flex items-center"
        >5
        <Icon path={mdiStar} size={0.7} /></span
      >
      {$t('wish.help.howto.p3.1')}
    </p>
  </div>
  <div class="text-white p-2 bg-background rounded-xl mt-4">
    {$t('wish.help.howto.p4.0')}
    <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center">+10</b>
    <span class="text-gray-400">{$t('wish.help.howto.p4.1')}</span>
  </div>
  <div class="text-white p-2 bg-background rounded-xl mt-4">
    {$t('wish.help.howto.p5.0')}
    <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center"><Icon path={mdiPencil} size={0.7} /></b
    >
    {$t('wish.help.howto.p5.1')}
  </div>
  <div class="text-white p-2 bg-background rounded-xl mt-4">
    {$t('wish.help.howto.p6.0')}
    <span class="inline-flex items-center"
      >5
      <Icon path={mdiStar} size={0.7} /></span
    >
    {$t('wish.help.howto.p6.1')}
    <span class="inline-flex items-center"
      >4
      <Icon path={mdiStar} size={0.7} /></span
    >. {$t('wish.help.howto.p6.2')}
  </div>
</div>
