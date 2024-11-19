<script>
  import { fly } from 'svelte/transition';
  import { mdiCloseCircle } from '@mdi/js';
  import { locale, t } from 'svelte-i18n';

  import Icon from '../Icon.svelte';

  import SidebarTitle from './Title.svelte';
  import SidebarItem from './SidebarItem.svelte';
  import SidebarMoreItem from './SidebarMoreItem.svelte';

  import { showSidebar } from '../../stores/sidebar';

  export let segment;
  export let mobile = false;

  const languages = [
    { id: 'zh', label: '中文(简体)' },
    { id: 'tw', label: '中文(繁體)' },
    { id: 'en', label: 'English' },
    { id: 'fr', label: 'Français' },
    { id: 'de', label: 'Deutsch' },
    { id: 'ja', label: '日本語' },
    { id: 'ko', label: '한국어' },
    { id: 'th', label: 'ภาษาไทย' },
    { id: 'vi', label: 'Tiếng Việt' },
    { id: 'id', label: 'Indonesia' },
    { id: 'es', label: 'Español' },
    { id: 'pt', label: 'Português' },
    { id: 'ru', label: 'Русский' },
    { id: 'tr', label: 'Türkçe' },
    { id: 'it', label: 'Italiano' },
  ];
  $: currentLocale =
    $locale !== null ? languages.find((e) => e.id === $locale.substring(0, 2)) || { id: 'en', label: 'English' } : '';
  $: locales = languages.filter((e) => e.id !== currentLocale.id);

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
  class={`sidebar fixed w-full lg:w-64 h-full flex-col bg-background items-center z-50 
    ${mobile ? 'flex' : 'hidden lg:flex'}`}
>
  <div class="paimon-bg overflow-x-hidden h-full w-full lg:w-64 fixed z-0" />
  <div class="flex flex-col flex-1 items-center overflow-y-auto w-full px-5 py-5 z-10">
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
      active={segment === ''}
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
    <SidebarItem
      on:clicked={close}
      active={segment === 'todo'}
      image="/images/todos.png"
      label={$t('sidebar.todoList')}
      href="/todo"
    />
    <SidebarMoreItem
      {mobile}
      {segment}
      on:clicked={close}
      active={[
        'items',
        'achievement',
        'reminder',
        'furnishing',
        'weapons',
        'artifacts',
        'radiant-spincrystal',
        'calendar',
        'banners',
      ].includes(segment)}
      image="/images/items.png"
      label={$t('sidebar.database')}
      items={[
        { label: $t('sidebar.items'), href: '/items' },
        { label: $t('sidebar.achievement'), href: '/achievement' },
        { label: $t('sidebar.reminder'), href: '/reminder' },
        { label: $t('sidebar.furnishing'), href: '/furnishing' },
        { label: $t('sidebar.weapons'), href: '/weapons' },
        { label: $t('sidebar.artifacts'), href: '/artifacts' },
        { label: $t('sidebar.fishing'), href: '/fishing' },
        { label: $t('sidebar.radiantSpincrystal'), href: '/radiant-spincrystal' },
        { label: $t('sidebar.calendar'), href: '/calendar' },
        { label: $t('sidebar.banners'), href: '/banners' },
      ]}
    />
    <SidebarItem
      on:clicked={close}
      active={segment === 'timeline'}
      image="/images/timeline.png"
      label={$t('sidebar.timeline')}
      href="/timeline"
    />
    <!-- <SidebarItem
      on:clicked={close}
      active={segment === 'tcg'}
      image="/images/tcg.png"
      label={$t('sidebar.tcg')}
      href="/tcg"
    /> -->
    <SidebarItem
      on:clicked={close}
      active={segment === 'settings'}
      image="/images/settings.png"
      label={$t('sidebar.settings')}
      href="/settings"
    />
  </div>
  <div
    class="pt-2 pb-4 flex flex-col items-center w-full z-20"
    style="width: 248px; background: linear-gradient(180deg, rgba(32, 36, 66, 0) 0%, rgba(32, 36, 66, 1) 10%);"
  >
    <div
      class="locale-selector flex items-center justify-center mb-4 mt-0 py-2 cursor-pointer
    rounded-xl hover:bg-black hover:bg-opacity-50 relative w-40"
    >
      <img class="w-4 h-4 rounded-full mr-2" alt={currentLocale.label} src="/images/locales/{currentLocale.id}.svg" />
      <span class="text-gray-400">{currentLocale.label}</span>
      <div class="locale-dropdown">
        <div class="bg-black grid grid-cols-2 rounded-xl overflow-hidden">
          {#each locales as locale}
            <div
              class="flex items-center justify-center py-2 cursor-pointer hover:bg-gray-900"
              on:click={() => changeLocale(locale.id)}
            >
              <img class="w-4 h-4 rounded-full mr-2" alt={locale.label} src="/images/locales/{locale.id}.svg" />
              <span class="text-gray-400">{locale.label}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .paimon-bg::after {
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
    @apply hidden absolute w-80 -left-20 md:left-0 pb-2 bottom-10;
  }

  .locale-selector:hover {
    .locale-dropdown {
      @apply block;
    }
  }

  @screen lg {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      @apply bg-transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.35);
      @apply rounded-xl;
    }
  }
</style>
