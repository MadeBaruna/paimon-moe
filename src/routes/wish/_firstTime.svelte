<script>
  import { t } from 'svelte-i18n';

  import { fade } from 'svelte/transition';
  import { mdiArrowUp, mdiClose } from '@mdi/js';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  export let processFirstTimePopup;

  function enableManual() {
    processFirstTimePopup(false, true);
  }

  function closePopup() {
    processFirstTimePopup(false, false);
  }
</script>

<div
  transition:fade={{ duration: 100 }}
  class="p-4 mb-4 text-white flex items-start max-w-screen-xl flex-col-reverse md:flex-row"
>
  <img src="/images/paimon_hello.png" alt="Paimon" class="w-full md:mt-0 md:w-2/6" />
  <span
    on:click={closePopup}
    class="inline-flex md:hidden self-end mt-1 items-center justify-center w-9 h-9 ml-2 
    rounded-full bg-background p-1 float-right text-white hover:opacity-50 cursor-pointer"
  >
    <Icon path={mdiClose} />
  </span>
  <div class="md:ml-6 flex-1 pl-6 py-4 pr-4 md:text-lg lg:text-xl bg-item rounded-xl relative bubble">
    <p>
      <span
        on:click={closePopup}
        class="hidden md:inline-flex items-center justify-center w-9 h-9 ml-2 
        rounded-full bg-background p-1 float-right text-white hover:opacity-50 cursor-pointer"
      >
        <Icon path={mdiClose} />
      </span>
      {$t('wish.welcome')}
    </p>
    <p class="mb-2">
      {$t('wish.welcomeStart1')}
      <span class="bg-background px-2 rounded-xl font-bold whitespace-nowrap">{$t('wish.autoImport')}</span>
      {$t('wish.welcomeStart2')}
      <Icon path={mdiArrowUp} size={1.2} />
    </p>
    <p class="text-gray-400">
      {$t('wish.manual')}
      <Button on:click={enableManual} className="text-gray-400" size="sm">{$t('wish.manualButton')}</Button>
    </p>
  </div>
</div>

<style lang="postcss">
  .bubble::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    right: auto;
    bottom: -22px;
    border: 22px solid;
    border-color: transparent transparent transparent #2d325a;
  }

  @screen md {
    .bubble::after {
      left: -40px;
      right: auto;
      bottom: 0;
      border: 40px solid;
      border-color: transparent transparent #2d325a transparent;
    }
  }
</style>
