<script>
  import { page } from '$app/stores';

  import { onMount } from 'svelte';

  const dev = import.meta.env.DEV;

  let refreshUrl;

  onMount(() => {
    console.error('ERROR', $page.error);
    refreshUrl = `${location.href}?r=${new Date().getTime()}`;
  });
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<div class="lg:ml-64 p-16 flex flex-col justify-center items-center">
  <div class="relative">
    <h1 class="bg-red-500 text-red-700 rounded-lg px-4 font-display font-black" style="font-size: 6rem;">{$page.status}</h1>
    <h1
      class="absolute top-0 left-0 text-background-secondary font-display font-black text-6xl"
      style="margin-left: 14px; z-index: 0; font-size: 6rem;"
    >
      {$page.status}
    </h1>
  </div>

  <p class="text-red-400 text-xl mt-4 text-center">
    {$page.status === 404 ? 'Page not found! Try one on the menu :)' : $page.error.message}
  </p>

  {#if $page.status === 500}
    <a
      class="px-4 py-2 rounded-xl border-2 border-white border-opacity-25 hover:border-primary text-blue-400 hover:text-primary text-xl mt-4 text-center"
      href={refreshUrl}
      rel="external"
    >
      Click here to refresh
    </a>
    <p class="text-white text-xl mt-2 text-center">Or you can try refresh the page by pressing CTRL+SHIFT+R</p>
    <p class="text-white text-xl mt-2 text-center">
      You might also want to check your extension, like adblock, it sometimes wrongly block the script needed for the
      site.
    </p>
  {/if}

  {#if dev && $page.error.stack}
    <pre class="mt-8 p-4 rounded-lg text-black bg-red-400">{$page.error.stack}</pre>
  {/if}
</div>
