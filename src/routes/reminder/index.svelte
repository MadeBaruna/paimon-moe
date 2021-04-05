<script>
  import { mdiLoading } from '@mdi/js';
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';

  import Icon from '../../components/Icon.svelte';

  import TransformerReminder from './_transformer.svelte';
  import HoyolabReminder from './_hoyolab.svelte';

  import {
    firstLoadNotification,
    loadingFirst,
    notificationAllowed,
    notificationSupported,
  } from '../../stores/firebase';

  onMount(async () => {
    await firstLoadNotification();
  });
</script>

<svelte:head>
  <title>Paimon.moe</title>
  <meta
    name="description"
    content="Set up a reminder notification for Parametric Transformer and Hoyolab Daily Login here"
  />
  <meta
    property="og:description"
    content="Set up a reminder notification for Parametric Transformer and Hoyolab Daily Login here"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="px-4 md:px-8 flex flex-col text-white">
    {#if $loadingFirst}
      <Icon path={mdiLoading} spin />
    {:else if !$notificationSupported}
      <div class="rounded-xl border-2 border-red-600 bg-red-400 bg-opacity-75 p-4 not-supported text-black">
        {$t('reminder.notSupported')}
      </div>
    {:else if !$notificationAllowed}
      <div class="rounded-xl border-2 border-red-600 bg-red-400 bg-opacity-75 p-4 not-supported text-black">
        {$t('reminder.blocked')}
      </div>
    {:else}
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
        <TransformerReminder />
        <HoyolabReminder />
        <div>
          <div class="rounded-xl border-2 border-green-600 bg-green-400 bg-opacity-75 p-4 not-supported text-black">
            {$t('reminder.early')}
          </div>
          <div
            class="rounded-xl border-2 border-orange-600 bg-orange-400 bg-opacity-75 p-4 not-supported text-black mb-4 mt-2 hidden lg:block"
          >
            {$t('reminder.desktop')}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  @screen md {
    .not-supported {
      width: fit-content;
    }
  }
</style>
