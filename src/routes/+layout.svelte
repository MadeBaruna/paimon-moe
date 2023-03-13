<script>
  import '../app.css';

  import { navigating, page } from '$app/stores';

  import { mdiDiscord, mdiFacebook, mdiGithub, mdiReddit, mdiTwitter } from '@mdi/js';
  import localforage from 'localforage';
  import { onMount } from 'svelte';
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { t } from 'svelte-i18n';
  import Modal from 'svelte-simple-modal';

  import { startClient } from '../i18n.js';

  import DataSync from '../components/DataSync.svelte';
  import Icon from '../components/Icon.svelte';
  import Header from '../components/Header.svelte';
  import SettingData from '../components/SettingData.svelte';
  import Sidebar from '../components/Sidebar/Sidebar.svelte';
  import ServiceWorker from '../components/ServiceWorker.svelte';
  import Toast from '../components/Toast.svelte';
  import TodoData from '../components/TodoData.svelte';

  import { showSidebar } from '../stores/sidebar';
  import { checkLocalSave } from '../stores/saveManager';

  const delayedPreloading = derived(navigating, (_, set) => {
    set(true);
    setTimeout(() => set(true), 250);
  });

  startClient();

  page.subscribe(() => {
    try {
      window.reloadAdSlots();
    } catch (error) {}
  });

  onMount(async () => {
    console.log('localforage config');
    localforage.config({
      driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
      name: 'paimonmoe',
      version: 1.0,
      description: 'paimonmoe local storage',
    });
    window.localforage = localforage;
    await checkLocalSave();
  });

  $: segment = $page.url.pathname.substring(1).split('/')[0];
</script>

<Header />
<Modal>
  <Sidebar {segment} />
  {#if $showSidebar}
    <Sidebar {segment} mobile />
  {/if}
  <DataSync>
    <TodoData />
    <SettingData />
    <Toast />
    <main style="flex: 1 0 auto;">
      <slot />
    </main>
  </DataSync>
  <ServiceWorker />
</Modal>

{#if $navigating && $delayedPreloading}
  <div transition:fade class="loading-bar" />
{/if}

<div class="lg:ml-64 px-4 md:px-8 py-8 flex flex-col md:pb-24">
  <p class="text-gray-400">
    {$t('footer.affliate')}<br />
    {$t('footer.copyright')}
  </p>
  <div class="flex mt-4 md:items-center flex-col md:flex-row">
    <a class="text-gray-400 hover:text-primary" href="https://discord.gg/tPURAYgHV9" target="_blank">
      <Icon path={mdiDiscord} size={1.5} />
      {$t('footer.discord')}
    </a>
    <div class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col md:pl-4 md:border-l border-gray-600">
      <span class="text-gray-500">{$t('footer.community')}</span>
      <div>
        <a
          class="text-gray-400 hover:text-primary whitespace-nowrap"
          href="https://github.com/MadeBaruna/paimon-moe"
          target="_blank"
        >
          <Icon path={mdiGithub} size={1} />
          {$t('footer.link.github')}
        </a>
        <a
          class="text-gray-400 hover:text-primary whitespace-nowrap"
          href="https://twitter.com/MadeBaruna"
          target="_blank"
        >
          <Icon path={mdiTwitter} size={1} />
          {$t('footer.link.devTwitter')}
        </a>
      </div>
    </div>
    <div class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col md:pl-4 md:border-l border-gray-600">
      <span class="text-gray-500">{$t('footer.official')}</span>
      <div>
        <a
          class="text-gray-400 hover:text-primary mr-1 whitespace-nowrap"
          href="https://discord.gg/4nbWsCGjjE"
          target="_blank"
        >
          <Icon path={mdiDiscord} size={1} />
          {$t('footer.link.discord')}
        </a>
        <a
          class="text-gray-400 hover:text-primary mr-1 whitespace-nowrap"
          href="https://www.facebook.com/Genshinimpact/"
          target="_blank"
        >
          <Icon path={mdiFacebook} size={1} />
          {$t('footer.link.facebook')}
        </a>
        <a
          class="text-gray-400 hover:text-primary whitespace-nowrap"
          href="https://www.reddit.com/r/Genshin_Impact/"
          target="_blank"
        >
          <Icon path={mdiReddit} size={1} />
          {$t('footer.link.reddit')}
        </a>
      </div>
    </div>
    <div
      class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col justify-center h-full md:pl-4 md:border-l border-gray-600"
    >
      <a class="text-gray-400 hover:text-primary" href="/privacy-policy">{$t('footer.link.privacyPolicy')}</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="text-gray-400 hover:text-primary nn-cmp-show" href="#">{$t('footer.link.cookieSettings')}</a>
    </div>
  </div>
</div>

<style lang="postcss">
  .loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: transparent;
    overflow: hidden;
    z-index: 100;
  }

  .loading-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 3px;
    background-color: #4e7cff;
    box-shadow: 10px 0 20px 20px #4e7cff, -10px 0 20px 20px #4e7cff;
    animation: loading-bar 2s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  }

  @keyframes loading-bar {
    0% {
      left: -25%;
    }
    100% {
      left: 110%;
    }
  }
</style>
