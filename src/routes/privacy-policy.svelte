<script>
  import { t, _ } from 'svelte-i18n';
</script>

<div class="lg:ml-64 pt-20 lg:pt-8">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('privacypolicy.title')}</h1>
  <div class="px-4 md:px-8 text-white">
    <h3 class="text-xl font-bold">{$t('privacypolicy.subtitle')}</h3>
    <ul class="list-disc ml-4">
      {#each new Array(3) as _, i}
        <li class="mt-2">
          <span class="font-bold">{$t(`privacypolicy.collect.${i}.title`)}</span><br/>
          {$t(`privacypolicy.collect.${i}.content`)}
        </li>
      {/each}
    </ul>
    <h3 class="text-xl font-bold mt-4">{$t('privacypolicy.subtitleNotCollect')}</h3>
    <p>{$t('privacypolicy.notCollect')}</p>
  </div>
</div>
