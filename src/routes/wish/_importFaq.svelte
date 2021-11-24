<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';

  export let close;
</script>

<h1 class="font-display text-white text-xl mb-2">{$t('wish.import.faqs.title')}</h1>

<div class="font-body">
  <p class="text-white font-semibold">{$t('wish.import.faqs.q1')}</p>
  <p class="text-gray-400">{$t('wish.import.faqs.a1')}</p>
  <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q2')}</p>
  <p class="text-gray-400">{$t('wish.import.faqs.a2')}</p>
  <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q3')}</p>
  <p class="text-gray-400">
    {$t('wish.import.faqs.a3.0')}
    <a class="text-primary hover:underline" target="_blank" href="https://github.com/MadeBaruna/paimon-moe">
      Github
    </a>{$t('wish.import.faqs.a3.1')}
  </p>
  <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q4')}</p>
  <p class="text-gray-400">
    {$t('wish.import.faqs.a4.0')}
    <a
      class="text-primary hover:underline"
      href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
      target="_blank"
    >
      CORS
    </a>{$t('wish.import.faqs.a4.1')}
    <a class="text-primary hover:underline" href="https://github.com/MadeBaruna/paimon-moe-api" target="_blank">
      {$t('wish.import.faqs.a4.2')}
    </a>
  </p>
  <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q5')}</p>
  <p class="text-gray-400">
    {$t('wish.import.faqs.a5.0')}
    <a class="text-primary hover:underline" href="/privacy-policy" target="_blank">{$t('wish.import.faqs.a5.1')}</a>
    {$t('wish.import.faqs.a5.2')}
    {$t('wish.import.faqs.a5.3')}
  </p>
  <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q6')}</p>
  <p class="text-gray-400">{$t('wish.import.faqs.a6')}</p>
  <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q7')}</p>
  <p class="text-gray-400">{$t('wish.import.faqs.a7')}</p>
</div>

<div class="flex justify-end mt-4">
  <Button on:click={close}>{$t('wish.import.close')}</Button>
</div>
