<script>
  import { mdiChevronRight, mdiTwitter } from '@mdi/js';
  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
</script>

<div class="bg-item rounded-xl p-4 flex flex-col items-start">
  <div class="w-full text-white">
    <a
      class="twitter-timeline"
      data-dnt="true"
      data-theme="dark"
      data-tweet-limit="1"
      data-chrome="noheader nofooter noborders transparent"
      href="https://twitter.com/MadeBaruna?ref_src=twsrc%5Etfw">Tweets by MadeBaruna</a
    > <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
  <a
    href="https://twitter.com/intent/user?screen_name=MadeBaruna"
    target="_blank"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
    <Icon path={mdiTwitter} className="mr-2" />
    {$t('home.twitter.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
