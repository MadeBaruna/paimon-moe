<script>
  import { createEventDispatcher } from 'svelte';

  export let value = 1;
  export let min = 0;

  const dispath = createEventDispatcher();

  function setValue(val) {
    if (value === val) {
      value = Math.max(min, val - 1);
    } else {
      value = Math.max(min, val);
    }

    dispath('change');
  }
</script>

<div class="flex flex-1 justify-center items-center bg-background rounded-2xl h-14">
  {#each { length: 6 } as _, i}
    <span on:click={() => setValue(i + 1)} class="cursor-pointer">
      <img
        class={`w-10 h-10 transition duration-100 ${i > value - 1 ? 'opacity-25' : ''}`}
        src="/images/ascension_star.png"
        alt="level" />
    </span>
  {/each}
</div>
