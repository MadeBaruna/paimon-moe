<script>
  import { t } from 'svelte-i18n';

  import { mdiCheckCircleOutline, mdiLoading, mdiPencil, mdiStar } from '@mdi/js';
  import Icon from './Icon.svelte';
  import Button from './Button.svelte';
  import Checkbox from '../components/Checkbox.svelte';

  import { exportToExcel } from '../functions/export';
  import { submitWishTally } from '../functions/wishTally';
  import { pushToast } from '../stores/toast';

  export let setManualInput;
  export let settings;

  let loadingExport = false;
  let wishTallySubmitted = false;

  let enableManual = settings.manualInput;

  function toggleManual() {
    setManualInput(enableManual);
  }

  function submitWish() {
    submitWishTally();
    pushToast($t('wish.help.wishTallyThankyou'));
    wishTallySubmitted = true;
  }

  async function exportFile() {
    loadingExport = true;
    await exportToExcel();
    loadingExport = false;
    pushToast($t('wish.help.exportFinish'));
  }

  $: enableManual, toggleManual();
</script>

<div>
  <!-- <h1 class="font-display text-white text-xl mb-4">{$t('wish.help.title')}</h1> -->
  <h1 class="font-display text-white text-xl mb-2">{$t('wish.help.exportTitle')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <p class="mb-2">{$t('wish.help.exportMessage')}</p>
    <Button className="mr-2" disabled={loadingExport} on:click={exportFile}>
      {#if loadingExport}
        <Icon path={mdiLoading} spin size={0.8} className="mr-2" />
      {/if}
      {$t(loadingExport ? 'wish.help.exporting' : 'wish.help.export')}
    </Button>
    <!-- <Button disabled={loadingExport}>{$t('wish.help.import')}</Button> -->
  </div>
  <h1 class="font-display text-white text-xl mt-8 mb-2">{$t('wish.help.wishTallyTitle')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <p class="mb-1">{$t('wish.help.wishTally')}</p>
    <p class="mb-1">
      {$t('wish.help.wishTallyCollected.0')} 5<Icon size={0.8} path={mdiStar} className="mb-1" />
      {$t('wish.help.wishTallyCollected.1')} 4<Icon size={0.8} path={mdiStar} className="mb-1" />
      {$t('wish.help.wishTallyCollected.2')}
    </p>
    <Button className="mr-2" disabled={wishTallySubmitted} on:click={submitWish}>
      {#if wishTallySubmitted}
        <Icon path={mdiCheckCircleOutline} size={0.8} />
      {/if}
      {$t('wish.help.wishTallySubmit')}
    </Button>
  </div>
  <h1 class="font-display text-white text-xl mt-8 mb-2">{$t('wish.help.manualTitle')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <div class="py-2 pl-4">
      <Checkbox disabled={false} bind:checked={enableManual}
        ><span class="select-none cursor-pointer">{$t('wish.help.enableManual')}</span></Checkbox
      >
    </div>
    <p class="text-red-300">{$t('wish.help.notice')}</p>
    <p>{$t('wish.help.consider')}</p>
  </div>
  <h1 class="font-display text-white text-xl mt-8 mb-2">{$t('wish.help.howto.title')}</h1>
  <div class="text-white p-2 bg-background rounded-xl">
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
