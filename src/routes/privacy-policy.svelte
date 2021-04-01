<script>
  import { t, _ } from 'svelte-i18n';
</script>

<div class="lg:ml-64 pt-20 lg:pt-8">
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
  </div>
</div>
