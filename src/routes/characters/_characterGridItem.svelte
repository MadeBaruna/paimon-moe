<script>
  import { onMount, tick } from 'svelte';
  import Icon from '../../components/Icon.svelte';

  export let id;
  export let char;
  export let showConstellation;
  export let constellation;
  export let name;

  let nameLabel;
  let smallName;

  async function adjustNameSize() {
    if (nameLabel === undefined) return;
    smallName = false;
    await tick();
    const height = nameLabel.clientHeight;
    smallName = height > 40;
  }

  onMount(() => {
    adjustNameSize();
  });

  $: name, adjustNameSize();
</script>

<a
  href="/characters/{id}"
  class="m-2 cell relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl rounded-xl {!showConstellation ||
  constellation ||
  char.new
    ? ''
    : 'opacity-50'} {char.rarity === 5 ? 'ring-legendary-from' : 'ring-rare-from'} {char.new ? 'ring-4' : ''}"
>
  <div
    class="w-full rounded-t-xl bg-opacity-50 overflow-hidden {char.rarity === 5 ? 'bg-legendary-from' : 'bg-rare-from'}"
  >
    <img
      class="w-full h-full"
      width="106"
      height="106"
      src={`/images/characters/${id}.png`}
      alt={char.name}
      loading="lazy"
    />
  </div>
  <div
    class="absolute top-0 right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md {constellation &&
    Math.max(0, constellation.default + constellation.wish + constellation.manual - 1) >= 6
      ? 'text-legendary-from'
      : 'text-white'}"
    style="padding: 4px; margin: -10px;"
  >
    {#if constellation}
      <span class="mx-1 text-xs font-semibold">
        C{Math.max(0, constellation.default + constellation.wish + constellation.manual - 1)}
      </span>
    {/if}
    {#if char.new}
      <span class="mx-1 text-primary text-xs font-semibold">NEW</span>
    {/if}
    <img class="w-4 h-4" src={`/images/elements/${char.element.id}.png`} alt={char.element.name} />
  </div>
  <div class="relative overflow-hidden bg-item rounded-b-xl" style="height: 29px">
    <div class="w-full overflow-hidden absolute bottom-0">
      <p class="text-white p-1 text-center text-sm {smallName ? 'small' : ''}" bind:this={nameLabel}>
        {name}
      </p>
    </div>
  </div>
</a>

<style lang="postcss">
  .small {
    font-size: 12px;
    line-height: 1;
    padding-bottom: 3px;
    word-spacing: 200px;
  }

  .cell {
    width: calc(33.33333% - 1rem);

    @apply md:w-24;
  }
</style>
