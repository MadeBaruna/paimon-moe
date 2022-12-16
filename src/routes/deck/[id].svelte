<script context="module">
  export function load({ params }) {
    const { id } = params;
    return {
      status: 301,
      redirect: `/tcg/${id}`,
    };
  }
</script>

<svelte:head>
  <title>Genius Invokation TCG - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Genius Invokation TCG Deck Builder" />
  <meta
    property="og:description"
    content="Genshin Impact Genius Invokation TCG Deck Builder, see card information, build and share your deck!"
  />
</svelte:head>
