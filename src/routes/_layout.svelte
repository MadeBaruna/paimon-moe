<script>
  import { onMount } from 'svelte';
  import Modal from 'svelte-simple-modal';

  import Tailwind from '../components/Tailwindcss.svelte';
  import Sidebar from '../components/Sidebar/Sidebar.svelte';
  import Header from '../components/Header.svelte';
  import DataSync from '../components/DataSync.svelte';

  import { showSidebar } from '../stores/sidebar';
  import { checkLocalSave } from '../stores/saveManager';
  import TodoData from '../components/TodoData.svelte';
  import SettingData from '../components/SettingData.svelte';

  export let segment;

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
<Sidebar {segment} />
{#if $showSidebar}
  <Sidebar {segment} mobile />
{/if}
<Modal>
  <DataSync>
    <TodoData />
    <SettingData />
    <main style="flex: 1 0 auto;">
      <slot />
    </main>
  </DataSync>
</Modal>
<p class="lg:ml-64 px-8 py-4 text-gray-600">
  Paimon.moe is not affiliated with miHoYo.<br />
  Genshin Impact, game content and materials are trademarks and copyrights of miHoYo.
</p>
