<script context="module">
  import { waitLocale } from 'svelte-i18n';

  export async function preload() {
    return waitLocale();
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { derived } from 'svelte/store';
  import { stores } from '@sapper/app';
  import { t } from 'svelte-i18n';

  import Modal from 'svelte-simple-modal';

  import Tailwind from '../components/Tailwindcss.svelte';
  import Sidebar from '../components/Sidebar/Sidebar.svelte';
  import Header from '../components/Header.svelte';
  import DataSync from '../components/DataSync.svelte';

  import { showSidebar } from '../stores/sidebar';
  import { checkLocalSave } from '../stores/saveManager';
  import TodoData from '../components/TodoData.svelte';
  import SettingData from '../components/SettingData.svelte';
  import Toast from '../components/Toast.svelte';
  import Icon from '../components/Icon.svelte';
  import { mdiDiscord, mdiFacebook, mdiGithub, mdiReddit, mdiTelegram, mdiTwitter } from '@mdi/js';

  export let segment;

  const { preloading, page } = stores();
  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

  // check local storage save on load
  onMount(async () => {
    await checkLocalSave();

    page.subscribe(() => {
      try {
        window.reloadAdSlots();
      } catch (error) {}
    });
  });
</script>

<Tailwind />

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
</Modal>
{#if $preloading && $delayedPreloading}
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
          class="text-gray-400 hover:text-primary whitespace-no-wrap"
          href="https://github.com/MadeBaruna/paimon-moe"
          target="_blank"
        >
          <Icon path={mdiGithub} size={1} /> {$t('footer.link.github')}
        </a>
        <a
          class="text-gray-400 hover:text-primary whitespace-no-wrap"
          href="https://twitter.com/MadeBaruna"
          target="_blank"
        >
          <Icon path={mdiTwitter} size={1} /> {$t('footer.link.devtwitter')}
        </a>
      </div>
    </div>
    <div class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col md:pl-4 md:border-l border-gray-600">
      <span class="text-gray-500">{$t('footer.official')}</span>
      <div>
        <a
          class="text-gray-400 hover:text-primary mr-1 whitespace-no-wrap"
          href="https://discord.gg/4nbWsCGjjE"
          target="_blank"
        >
          <Icon path={mdiDiscord} size={1} /> {$t('footer.link.discord')}
        </a>
        <a
          class="text-gray-400 hover:text-primary mr-1 whitespace-no-wrap"
          href="https://www.facebook.com/Genshinimpact/"
          target="_blank"
        >
          <Icon path={mdiFacebook} size={1} /> {$t('footer.link.facebook')}
        </a>
        <a
          class="text-gray-400 hover:text-primary whitespace-no-wrap"
          href="https://www.reddit.com/r/Genshin_Impact/"
          target="_blank"
        >
          <Icon path={mdiReddit} size={1} /> {$t('footer.link.reddit')}
        </a>
      </div>
    </div>
    <div
      class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col justify-center h-full md:pl-4 md:border-l border-gray-600"
    >
      <a class="text-gray-400 hover:text-primary" href="/privacy-policy">{$t('footer.link.privacypolicy')}</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="text-gray-400 hover:text-primary nn-cmp-show" href="#">{$t('footer.link.cookiesettings')}</a>
    </div>
  </div>
</div>

<style>
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
