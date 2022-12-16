<script context="module">
  export async function load({ params }) {
    const { id } = params;
    return { props: { id } };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Index from './index.svelte';

  export let id;
  let loading = true;
  let error = false;
  let deck = null;

  async function getDeck() {
    try {
      const url = new URL(`${import.meta.env.VITE_API_HOST}/deck/${id}`);
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
    if (id === '@') {
      if (deck === null) {
        goto('/tcg');
      }
      return;
    }

    getDeck();
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
{#if loading}
  <div class="lg:ml-64 pt-20 lg:pt-8 px-4 lg:px-8 max-w-full">
    <h1 class="text-white text-3xl">Loading Deck...</h1>
  </div>
{:else if error}
  <div class="lg:ml-64 pt-20 lg:pt-8 px-4 lg:px-8 max-w-full">
    <h1 class="text-white text-3xl">Deck not found 😪</h1>
  </div>
{:else}
  <Index sharedDeck={deck} sharedId={id} />
{/if}
