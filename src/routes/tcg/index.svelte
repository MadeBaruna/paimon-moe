<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import TCG from './_tcg.svelte';

  let id = null;
  let loading = false;
  let error = false;
  let deck = null;

  async function getDeck(idQuery) {
    try {
      loading = true;
      const url = new URL(`${import.meta.env.VITE_API_HOST}/deck/${idQuery}`);
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status !== 200) {
        error = true;
        loading = false;
        return;
      }

      const data = await res.json();
      const deckData = JSON.parse(data.deck);

      id = idQuery;
      deck = {
        name: data.name,
        ...deckData,
      };

      loading = false;
    } catch (err) {
      error = true;
    }
  }

  onMount(() => {
    const idQuery = $page.url.searchParams.get('d') || null;
    if (idQuery === null) {
      return;
    }

    getDeck(idQuery);
  });
</script>

<svelte:head>
  <title>Genius Invokation TCG - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Genius Invokation TCG Deck Builder" />
  <meta
    property="og:description"
    content="Genshin Impact Genius Invokation TCG Deck Builder, see card information, build and share your deck!"
  />
</svelte:head>
{#if !loading && !error}
  <TCG sharedDeck={deck} sharedId={id} />
{:else if loading}
  <div class="lg:ml-64 pt-20 lg:pt-8 px-4 lg:px-8 max-w-full">
    <h1 class="text-white text-3xl">Loading Deck...</h1>
  </div>
{:else if error}
  <div class="lg:ml-64 pt-20 lg:pt-8 px-4 lg:px-8 max-w-full">
    <h1 class="text-white text-3xl">Deck not found 😪</h1>
  </div>
{/if}
