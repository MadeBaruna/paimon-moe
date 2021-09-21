<script>
  import { t, _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>Privacy Policy - Paimon.moe</title>
</svelte:head>

<div class="lg:ml-64 pt-20 lg:pt-8 max-w-screen-xl">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('privacypolicy.title')}</h1>
  <div class="px-4 md:px-8 text-white">
    <h3 class="text-xl font-bold">{$t('privacypolicy.subtitle')}</h3>
    <ul class="list-disc ml-4">
      <li class="mt-2">
        <span class="font-bold">{$t(`privacypolicy.collect.0.title`)}</span><br />
        {$t(`privacypolicy.collect.0.content.0`)}
        <a target="_blank" class="text-primary hover:underline" href="https://plausible.io">
          {$t(`privacypolicy.collect.0.content.1`)}
        </a>
        {$t(`privacypolicy.collect.0.content.2`)}
      </li>
      <li class="mt-2">
        <span class="font-bold">{$t(`privacypolicy.collect.1.title`)}</span><br />
        {$t(`privacypolicy.collect.1.content.0`)}
        <a target="_blank" class="text-primary hover:underline" href="https://sentry.io">
          {$t(`privacypolicy.collect.1.content.1`)}
        </a>
        {$t(`privacypolicy.collect.1.content.2`)}
      </li>
      <li class="mt-2">
        <span class="font-bold">{$t(`privacypolicy.collect.2.title`)}</span><br />
        {$t(`privacypolicy.collect.2.content.0`)}
        <a target="_blank" class="text-primary hover:underline" href="/wish/tally">
          {$t(`privacypolicy.collect.2.content.1`)}
        </a>
      </li>
    </ul>
    <h3 class="text-xl font-bold mt-4">{$t('privacypolicy.subtitleNotCollect')}</h3>
    <p>
      {$t('privacypolicy.notCollect.0')}
      <a target="_blank" class="text-primary hover:underline" href="https://github.com/MadeBaruna/paimon-moe-api">
        {$t(`privacypolicy.notCollect.1`)}
      </a>
      {$t('privacypolicy.notCollect.2')}
      <a target="_blank" class="text-primary hover:underline" href="https://github.com/MadeBaruna/paimon-moe">
        {$t(`privacypolicy.notCollect.3`)}
      </a>
    </p>
    <h3 class="text-xl font-bold mt-4">Advertisements</h3>
    We use third party advertisements to support our site. Some of these advertisers may be served from our third party advertiser.
    You can view their
    <a class="text-primary hover:underline" href="https://www.network-n.com/network-privacy-policy/"> privacy policy</a>
    and
    <a class="text-primary hover:underline" href="https://www.network-n.com/network-cookie-policy/">cookie policy</a>
    here. You can manage your cookies
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="text-primary hover:underline nn-cmp-show" href="#">here</a>
  </div>
</div>
