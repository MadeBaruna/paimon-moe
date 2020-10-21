<script>
  import { fly } from 'svelte/transition';
  import { mdiCloseCircle } from '@mdi/js';

  import Icon from '../Icon.svelte';

  import SidebarTitle from './Title.svelte';
  import SidebarItem from './SidebarItem.svelte';

  import characterImage from 'images/characters.png';
  import artifactImage from 'images/artifacts.png';

  import { showSidebar } from '../../stores/sidebar';

  export let segment;
  export let mobile = false;

  function close() {
    showSidebar.set(false);
  }
</script>

<style>
  .sidebar::after {
    content: '';
    top: -50px;
    left: 50px;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: url('/paimon_bg.png') no-repeat top;
    background-size: contain;
  }
</style>

<div
  in:fly={{ x: 100, duration: 100 }}
  out:fly={{ x: 100, duration: 100 }}
  class={`sidebar overflow-x-hidden fixed w-full lg:w-64 h-full flex-col p-5 bg-background items-center z-50 
    ${mobile ? 'flex' : 'hidden lg:flex'}`}>
  {#if !mobile}
    <SidebarTitle />
  {/if}
  {#if mobile}
    <div class="cursor-pointer" on:click={close}>
      <Icon path={mdiCloseCircle} size={2} color="white" className="mb-8 mt-4 opacity-75" />
    </div>
  {/if}
  <SidebarItem
    on:clicked={close}
    active={segment === 'characters'}
    image={characterImage}
    label="Character"
    href="/characters" />
  <SidebarItem
    on:clicked={close}
    active={segment === 'artifacts'}
    image={artifactImage}
    label="Artifact"
    href="/artifacts" />
</div>
