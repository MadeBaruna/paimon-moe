<script>
  import Icon from '../../components/Icon.svelte';

  export let icon;
  export let label;
</script>

<button
  on:click
  class="group/button w-8 hover:w-fit h-8 text-sm bg-black bg-opacity-90 rounded-full 
text-white text-center hover:ring-2 ring-primary duration-100 flex items-center justify-center z-30"
>
  <div class="min-w-[2rem] w-8">
    <Icon path={icon} />
  </div>
  <p class="hidden group-hover/button:block pr-2 text-xs leading-none">{label}</p>
</button>
