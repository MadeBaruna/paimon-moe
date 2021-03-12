<script>
  import { fly } from 'svelte/transition';
  import { getContext } from 'svelte';
  import { mdiCloseCircle } from '@mdi/js';

  import Icon from '../Icon.svelte';

  import SidebarTitle from './Title.svelte';
  import SidebarItem from './SidebarItem.svelte';

  import { showSidebar } from '../../stores/sidebar';
  import Button from '../Button.svelte';

  import DonateModal from '../DonateModal.svelte';

  const { open: openModal } = getContext('simple-modal');

  export let segment;
  export let mobile = false;

  function openDonationModal() {
    openModal(
      DonateModal,
      {},
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  function close() {
    showSidebar.set(false);
  }
</script>

<div
  in:fly={{ x: 100, duration: 100 }}
  out:fly={{ x: 100, duration: 100 }}
  class={`sidebar overflow-x-hidden fixed w-full lg:w-64 h-full flex-col p-5 bg-background items-center z-50 
    ${mobile ? 'flex' : 'hidden lg:flex'}`}
>
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
    image="/images/characters.png"
    label="Character"
    href="/characters"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'wish'}
    image="/images/wish.png"
    label="Wish Counter"
    href="/wish"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'calculator'}
    image="/images/calculator.png"
    label="Calculator"
    href="/calculator"
  />
  <SidebarItem on:clicked={close} active={segment === 'items'} image="/images/items.png" label="Items" href="/items" />
  <SidebarItem
    on:clicked={close}
    active={segment === 'todo'}
    image="/images/todos.png"
    label="Todo List"
    href="/todo"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'timeline'}
    image="/images/timeline.png"
    label="Timeline"
    href="/timeline"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'settings'}
    image="/images/settings.png"
    label="Settings"
    href="/settings"
  />
  <div class="mt-8 md:mt-0 md:flex-1" />
  <Button on:click={openDonationModal}>
    <img class="inline w-8 h-8" src="/images/mora.png" alt="donate" />
    Donate
  </Button>
</div>

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
