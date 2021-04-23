<script>
  import { mdiCircleMultiple } from '@mdi/js';
  import { t } from 'svelte-i18n';

  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  let showCrypto = false;

  function showCryptoContent() {
    showCrypto = true;
  }
</script>

<div class="text-white ">
  <h1 class="font-semibold">{$t('donate.message.0')}</h1>
  <p class="mt-2">{$t('donate.message.1')}</p>
  <p class="mt-1">{$t('donate.message.2')}</p>
  <p class="mt-1">
    {$t('donate.message.3')}
    <a target="_blank" class="text-primary hover:underline" href="https://github.com/MadeBaruna/paimon-moe" alt="github"
      >Github</a
    >
  </p>
  <div class="flex flex-col mt-2 space-y-1">
    <div class="flex flex-col md:flex-row md:space-x-1 md:space-y-0 space-y-1">
      <a class="flex-1" href="https://ko-fi.com/baruna" target="_blank">
        <Button className="w-full flex-1 flex flex-col items-center">
          <div class="flex h-8 mb-1 items-center">
            <img class="h-6 mr-1" src="/images/donation/ko-fi.png" alt="Ko-fi" />
            <img class="h-6" src="/images/donation/paypal.png" alt="PayPal" />
          </div>
          <span class="font-semibold">{$t('donate.kofi')}</span>
        </Button>
      </a>
      <a class="flex-1" href="https://trakteer.id/baruna" target="_blank">
        <Button className="w-full flex flex-col items-center">
          <div class="flex mb-1 items-center">
            <img class="h-8 mr-1" src="/images/donation/trakteer.png" alt="Trakteer" />
            <img class="h-4 mr-1" src="/images/donation/gopay.png" alt="gopay" />
            <img class="h-4 mr-1" src="/images/donation/ovo.png" alt="gopay" />
            <img class="h-4" src="/images/donation/dana.png" alt="gopay" />
          </div>
          <span class="font-semibold">{$t('donate.trakteer')}</span>
        </Button>
      </a>
    </div>
    <div class="flex-1" href="https://trakteer.id/baruna" target="_blank">
      {#if showCrypto}
        <div
          style="font-family: monospace;"
          class="bg-background border-2 border-white border-opacity-25 p-2 rounded-xl flex flex-col whitespace-pre-wrap"
        >
          <table>
            <tr>
              <td class="pr-1 align-top">BTC</td>
              <td class="align-top break-all">bc1qdaz2893tprp2dsce2mclhcjq5xdk4mzapvnm8r</td>
            </tr>
            <tr>
              <td class="pr-1 align-top">ETH</td>
              <td class="align-top break-all">0xD326831DFEf991F241B373F1Bc2966cf3Df140C6</td>
            </tr>
            <tr>
              <td class="pr-1 align-top">DOGE</td>
              <td class="align-top break-all">DDDJbGi9QUTNJrRKzHbDV4tS2iRuPZuGcR</td>
            </tr>
            <tr>
              <td class="pr-1 align-top">LTC</td>
              <td class="align-top break-all">ltc1q5ycw4dfqc9uekgenp4u9ctrp286yguqvfskprj</td>
            </tr>
            <tr>
              <td class="pr-1 align-top">BCH</td>
              <td class="align-top break-all">qqgn5pplwl4jr2eewgkc7y7vkxs7r4fgkyrvndtwc2</td>
            </tr>
            <tr>
              <td class="pr-1 align-top">XMR</td>
              <td class="align-top break-all">4AVX6AV2XaGZL6a69krzUALe2d6ZSZvDnNi3SuXE3zaMbT6fQyAnjMBRSH9rKn587QWcnvT6xtcdya5Fbexi45La1ZKdrA5
              </td>
            </tr>
          </table>
        </div>
      {:else}
        <Button className="w-full flex justify-center items-center" on:click={showCryptoContent}>
          <Icon path={mdiCircleMultiple} className="mr-1" />
          <span class="font-semibold">{$t('donate.crypto')}</span>
        </Button>
      {/if}
    </div>
  </div>
</div>
