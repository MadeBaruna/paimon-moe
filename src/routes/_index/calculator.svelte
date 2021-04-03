<script>
  import { mdiChevronRight } from '@mdi/js';

  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  <p class="text-white">{$t('home.calculator.title')}</p>
  <a
    href="/calculator"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 
  bg-background-secondary rounded-xl py-2 px-4 hover:bg-background transition-colors duration-100"
  >
    <img src="/images/calculator.png" alt="wish" class="mr-2 h-6 w-6" />
    {$t('home.calculator.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
