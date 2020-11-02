<script>
  import Counter from './_counter.svelte';
</script>

<svelte:head>
  <title>Wish Counter - Paimon.moe</title>
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 p-8">
  <h1 class="font-display font-black text-5xl text-white mb-2">Wish Counter</h1>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
    <Counter id="character-event" name="Character Event" />
    <Counter id="weapon-event" name="Weapon Event" />
    <Counter id="standard" name="Standard" />
  </div>
</div>
