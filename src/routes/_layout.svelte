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
  import { mdiDiscord } from '@mdi/js';

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
  <a class="text-gray-400 hover:text-primary mt-4" href="https://discord.gg/tPURAYgHV9" target="__blank">
    <Icon path={mdiDiscord} size={1.5} /> Join Our Discord
  </a>
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
