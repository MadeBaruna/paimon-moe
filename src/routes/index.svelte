<script>
  import { onMount } from 'svelte';
  import debounce from 'lodash/debounce';
  import { locale } from 'svelte-i18n';

  import Masonry from '../components/Masonry.svelte';

  import Welcome from './_index/welcome.svelte';
  import Banner from './_index/banner.svelte';
  import Event from './_index/event.svelte';
  import Reminder from './_index/reminder.svelte';
  import Wish from './_index/wish.svelte';
  import Item from './_index/item.svelte';
  import Calculator from './_index/calculator.svelte';
  import Discord from './_index/discord.svelte';
  import Twitter from './_index/twitter.svelte';
  import Achievement from './_index/achievement.svelte';

  let refreshLayout;

  const onDone = debounce(() => {
    refreshLayout();
  }, 100);

  onMount(() => {
    setTimeout(() => {
      refreshLayout();
    }, 1000);

    locale.subscribe(() => {
      setTimeout(() => {
        refreshLayout();
      }, 1);
    });
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
    <Banner on:done={onDone} />
    <Event on:done={onDone} />
    <Item on:done={onDone} />
    <Discord on:done={onDone} />
    <div class="flex flex-col gap-4">
      <Calculator on:done={onDone} />
      <Achievement on:done={onDone} />
    </div>
    <Twitter on:done={onDone} />
  </Masonry>
</div>
