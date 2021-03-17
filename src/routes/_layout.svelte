<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { derived } from 'svelte/store';
  import { stores } from '@sapper/app';

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
  import { mdiDiscord, mdiFacebook, mdiReddit, mdiTelegram } from '@mdi/js';

  export let segment;

  const { preloading } = stores();
  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

  // check local storage save on load
  onMount(() => {
    checkLocalSave();
  });
</script>

<svelte:head>
  <title>Paimon.moe</title>
</svelte:head>

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
<div class="lg:ml-64 px-4 md:px-8 py-8 flex flex-col">
  <p class="text-gray-400">
    Paimon.moe is not affiliated with miHoYo.<br />
    Genshin Impact, game content and materials are trademarks and copyrights of miHoYo.
  </p>
  <div class="flex mt-4 md:items-center flex-col md:flex-row">
    <a class="text-gray-400 hover:text-primary" href="https://discord.gg/tPURAYgHV9" target="__blank">
      <Icon path={mdiDiscord} size={1.5} /> Join Our Discord
    </a>
    <div class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col md:pl-4 md:border-l border-gray-600">
      <span class="text-gray-500">Community Links</span>
      <a class="text-gray-400 hover:text-primary" href="https://t.me/GenshinImpact_ID" target="__blank">
        <Icon path={mdiTelegram} size={1} /> Telegram
      </a>
    </div>
    <div class="text-gray-400 mt-4 md:mt-0 md:ml-4 flex flex-col md:pl-4 md:border-l border-gray-600">
      <span class="text-gray-500">Official Links</span>
      <div>
        <a class="text-gray-400 hover:text-primary mr-1 whitespace-no-wrap" href="https://discord.gg/2UqwpAr" target="__blank">
          <Icon path={mdiDiscord} size={1} /> Discord
        </a>
        <a class="text-gray-400 hover:text-primary mr-1 whitespace-no-wrap" href="https://www.facebook.com/Genshinimpact/" target="__blank">
          <Icon path={mdiFacebook} size={1} /> Facebook
        </a>
        <a class="text-gray-400 hover:text-primary whitespace-no-wrap" href="https://www.reddit.com/r/Genshin_Impact/" target="__blank">
          <Icon path={mdiReddit} size={1} /> Reddit
        </a>
      </div>
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
