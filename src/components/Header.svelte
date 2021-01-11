<script>
  import { mdiMenu } from '@mdi/js';
  import Icon from '../components/Icon.svelte';

  import { showSidebar } from '../stores/sidebar';

  function showMenu() {
    showSidebar.set(true);
  }
</script>

<style>
  .header::after {
    content: '';
    top: -40px;
    left: 100px;
    height: 198px;
    width: 168px;
    position: absolute;
    z-index: -1;
    background: url('/paimon_bg.png') no-repeat;
    background-size: contain;
  }
</style>

<a href="/" class="flex items-center lg:hidden fixed w-full h-16 header bg-background z-30 shadow-md overflow-hidden">
  <h1 class="flex-1 pl-4 md:pl-8 font-display text-3xl font-black text-white relative z-10 pt-2">
    Paimon<span class="text-xl text-primary">.moe</span>
  </h1>
  <div class="p-8 cursor-pointer" on:click={showMenu}>
    <Icon path={mdiMenu} color="white" />
  </div>
</a>
