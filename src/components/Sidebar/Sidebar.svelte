<script>
  import { fly } from 'svelte/transition';
  import { getContext } from 'svelte';
  import { mdiCloseCircle } from '@mdi/js';
  import { locale, t } from 'svelte-i18n';

  import Icon from '../Icon.svelte';

  import SidebarTitle from './Title.svelte';
  import SidebarItem from './SidebarItem.svelte';

  import { showSidebar } from '../../stores/sidebar';
  import Button from '../Button.svelte';

  import DonateModal from '../DonateModal.svelte';

  const { open: openModal } = getContext('simple-modal');

  export let segment;
  export let mobile = false;

  const languages = [
    { id: 'en', label: 'English' },
    { id: 'id', label: 'Indonesia' },
    { id: 'ru', label: 'Русский' },
  ];
  $: currentLocale = languages.find((e) => e.id === $locale.substring(0, 2)) || { id: 'en', label: 'English' };
  $: locales = languages.filter((e) => e.id !== currentLocale.id);

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

  function changeLocale(lang) {
    locale.set(lang);
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
    active={segment === undefined}
    image="/images/home.png"
    label={$t('sidebar.home')}
    href="/"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'characters'}
    image="/images/characters.png"
    label={$t('sidebar.character')}
    href="/characters"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'wish'}
    image="/images/wish.png"
    label={$t('sidebar.wishCounter')}
    href="/wish"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'calculator'}
    image="/images/calculator.png"
    label={$t('sidebar.calculator')}
    href="/calculator"
  />
  <SidebarItem on:clicked={close} active={segment === 'items'} image="/images/items.png" label="Items" href="/items" />
  <SidebarItem
    on:clicked={close}
    active={segment === 'todo'}
    image="/images/todos.png"
    label={$t('sidebar.todoList')}
    href="/todo"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'timeline'}
    image="/images/timeline.png"
    label={$t('sidebar.timeline')}
    href="/timeline"
  />
  <SidebarItem
    on:clicked={close}
    active={segment === 'settings'}
    image="/images/settings.png"
    label={$t('sidebar.settings')}
    href="/settings"
  />
  <div class="mt-8 md:mt-0 md:flex-1" />
  <div
    class="locale-selector flex items-center justify-center my-4 py-2 cursor-pointer 
    rounded-xl hover:bg-black hover:bg-opacity-50 relative w-40"
  >
    <img class="w-4 h-4 rounded-full mr-2" alt={currentLocale.label} src="/images/locales/{currentLocale.id}.svg" />
    <span class="text-gray-400">{currentLocale.label}</span>
    <div class="locale-dropdown" style="top: {locales.length * -45}px;">
      {#each locales as locale}
        <div
          class="flex items-center justify-center py-2 cursor-pointer rounded-xl bg-opacity-50 bg-black hover:bg-opacity-75"
          on:click={() => changeLocale(locale.id)}
        >
          <img class="w-4 h-4 rounded-full mr-2" alt={locale.label} src="/images/locales/{locale.id}.svg" />
          <span class="text-gray-400">{locale.label}</span>
        </div>
        <div class="w-40" style="height: 5px;" />
      {/each}
    </div>
  </div>
  <Button on:click={openDonationModal}>
    <img class="inline w-8 h-8" src="/images/mora.png" alt="donate" />
    {$t('sidebar.donate')}
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

  .locale-dropdown {
    @apply hidden;
    @apply absolute;
    @apply w-40;
  }

  .locale-selector:hover {
    .locale-dropdown {
      @apply block;
    }
  }
</style>
