<script>
  import { mdiAlarm, mdiChevronRight } from '@mdi/js';

  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  <p class="text-white">{$t('home.reminder.message')}</p>
  <a
    href="/reminder"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
    <Icon path={mdiAlarm} className="mr-2" />
    {$t('home.reminder.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
