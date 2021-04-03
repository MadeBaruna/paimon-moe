<script>
  import { onMount } from 'svelte';
  import debounce from 'lodash/debounce';

  import Masonry from '../components/Masonry.svelte';

  import Welcome from './_index/welcome.svelte';
  import Banner from './_index/banner.svelte';
  import Event from './_index/event.svelte';
  import Reminder from './_index/reminder.svelte';
  import Wish from './_index/wish.svelte';
  import Item from './_index/item.svelte';
  import Calculator from './_index/calculator.svelte';
  import Discord from './_index/discord.svelte';

  let refreshLayout;

  const onDone = debounce(() => {
    console.log('refresh');
    refreshLayout();
  }, 100);

  onMount(() => {
    setTimeout(() => {
      refreshLayout();
    }, 1);
  });
</script>

<svelte:head>
  <title>Paimon.moe</title>
  <meta
    name="description"
    content="Your best Genshin Impact companion! Help you plan what to farm with ascension calculator and database. Also track your progress with todo and wish counter."
  />
  <meta
    property="og:description"
    content="Your best Genshin Impact companion! Help you plan what to farm with ascension calculator and database. Also track your progress with todo and wish counter."
  />
</svelte:head>
<div class="lg:ml-64 pt-16 lg:pt-4 md:px-4">
  <Masonry bind:refreshLayout gridGap="1rem">
    <Welcome on:done={onDone} />
    <Wish on:done={onDone} />
    <Reminder on:done={onDone} />
    <Event on:done={onDone} />
    <Item on:done={onDone} />
    <Banner on:done={onDone} featured="venti" bannerId={300010} />
    <Discord on:done={onDone} />
    <Calculator on:done={onDone} />
  </Masonry>
</div>
