<script>
  import { mdiChevronRight, mdiTwitter } from '@mdi/js';
  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
</script>

<div class="bg-item rounded-xl p-4 flex flex-col items-start">
  <p class="text-white ml-2">
    {$t('home.twitter.title')}
  </p>
  <a
    href="https://twitter.com/MadeBaruna"
    target="_blank"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
  <Icon path={mdiTwitter} className="mr-2" />
    {$t('home.twitter.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
