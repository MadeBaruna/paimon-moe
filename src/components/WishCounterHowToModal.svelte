<script>
  import { t } from 'svelte-i18n';

  import { mdiPencil, mdiStar } from '@mdi/js';
  import Icon from './Icon.svelte';
  import Checkbox from '../components/Checkbox.svelte';

  export let setManualInput;
  export let settings;

  let enableManual = settings.manualInput;

  function toggleManual() {
    setManualInput(enableManual);
  }

  $: enableManual, toggleManual();
</script>

<div>
  <h1 class="font-display text-white text-xl mb-4">{$t('wish.help.title')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <div class="py-2 pl-4">
      <Checkbox disabled={false} bind:checked={enableManual}
        ><span class="select-none cursor-pointer">{$t('wish.help.enableManual')}</span></Checkbox
      >
    </div>
    <p class="text-red-300">{$t('wish.help.notice')}</p>
    <p>{$t('wish.help.consider')}</p>
  </div>
  <h1 class="font-display text-white text-xl mt-6 mb-4">{$t('wish.help.howto.title')}</h1>
  <div class="text-white p-2 bg-background rounded-xl mt-4">
    <p class="mb-2">{$t('wish.help.howto.subtitle')}</p>
    <p class="mb-2">
      {$t('wish.help.howto.press')}
      <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center">+1</b>
      {$t('wish.help.howto.whenYouGet')}
      <span class="inline-flex items-center"
        >3
        <Icon path={mdiStar} size={0.7} /></span
      >
    </p>
    <p class="mb-2">
      {$t('wish.help.howto.press')}
      <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center"
        >Get 4
        <Icon path={mdiStar} size={0.7} /></b
      >
      {$t('wish.help.howto.whenYouGet')}
      <span class="inline-flex items-center"
        >4
        <Icon path={mdiStar} size={0.7} /></span
      >
    </p>
    <p class="mb-2">
      {$t('wish.help.howto.press')}
      <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center"
        >Get 5
        <Icon path={mdiStar} size={0.7} /></b
      >
      {$t('wish.help.howto.whenYouGet')}
      <span class="inline-flex items-center"
        >5
        <Icon path={mdiStar} size={0.7} /></span
      >
    </p>
    <p class="text-gray-400">
      {$t('wish.help.howto.p1')}
      <span class="inline-flex items-center"
        >5
        <Icon path={mdiStar} size={0.7} /></span
      >
      {$t('wish.help.howto.and')}
      <span class="inline-flex items-center"
        >4
        <Icon path={mdiStar} size={0.7} /></span
      >
      pity
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
