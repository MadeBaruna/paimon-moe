<script>
  import { onMount } from 'svelte';

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';

  let refreshUrl;

  onMount(() => {
    refreshUrl = `${location.href}?r=${new Date().getTime()}`;
  });
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="lg:ml-64 p-16 flex flex-col justify-center items-center">
  <div class="relative">
    <h1 class="bg-red-500 text-red-700 rounded-lg px-4 font-display font-black" style="font-size: 6rem;">{status}</h1>
    <h1
      class="absolute top-0 left-0 text-background-secondary font-display font-black text-6xl"
      style="margin-left: 14px; z-index: 0; font-size: 6rem;"
    >
      {status}
    </h1>
  </div>

  <p class="text-red-400 text-xl mt-4 text-center">
    {status === 404 ? 'Page not found! Try one on the menu :)' : error.message}
  </p>

  {#if status === 500}
    <a
      class="px-4 py-2 rounded-xl border-2 border-white border-opacity-25 hover:border-primary text-blue-400 hover:text-primary text-xl mt-4 text-center"
      href={refreshUrl}
    >
      Click here to refresh
    </a>
    <p class="text-white text-xl mt-2 text-center">Or you can try refresh the page by pressing CTRL+F5</p>
  {/if}

  {#if dev && error.stack}
    <pre class="mt-8 p-4 rounded-lg text-black bg-red-400">{error.stack}</pre>
  {/if}
</div>
