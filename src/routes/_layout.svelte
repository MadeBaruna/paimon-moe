<script>
  import Tailwind from '../components/Tailwindcss.svelte';
  import Sidebar from '../components/Sidebar/Sidebar.svelte';
  import Header from '../components/Header.svelte';

  import { showSidebar } from '../stores/sidebar';

  export let segment;
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
<main style="flex: 1 0 auto;">
  <slot />
</main>
<p class="lg:ml-64 px-8 py-4 text-gray-600">
  Paimon.moe is not affiliated with miHoYo.<br />
  Genshin Impact, game content and materials are trademarks and copyrights of miHoYo.
</p>
