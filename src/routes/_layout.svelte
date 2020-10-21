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
<main>
  <slot />
</main>
