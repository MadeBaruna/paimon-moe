<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Input from '../../components/Input.svelte';

  let inputCount = 0;
  let showMessage = false;
  let youtubeLink;

  function increaseCount() {
    inputCount++;

    if (inputCount === 3) {
      youtubeLink.click();
      showAprilFoolMessage();
    }
  }

  function showAprilFoolMessage() {
    setTimeout(() => {
      showMessage = true;
    }, 5000);
  }
</script>

<div class="text-white">
  <p class="font-semibold mb-4">{$t('giveaway.title')}</p>
  <p>{$t('giveaway.message')}</p>
  <div class="flex flex-col md:flex-row mt-4 mb-1">
    <Input placeholder="UID" />
    <Button on:click={increaseCount} className="mt-2 md:mt-0 md:ml-2">{$t('giveaway.submit')}</Button>
  </div>
  {#if inputCount > 1}
    <p class="text-red-200">
      {$t('giveaway.invalidUID2')}
      <a
        on:click={showAprilFoolMessage}
        bind:this={youtubeLink}
        class="text-primary hover:underline"
        href="/giveaway"
        target="_blank"
      >
        {$t('giveaway.click')}
      </a>
    </p>
  {:else if inputCount > 0}
    <p class="text-red-200">{$t('giveaway.invalidUID1')}</p>
  {/if}
  {#if showMessage}
    <p class="mt-4 mb-32 md:mb-0">{$t('giveaway.aprilfools')}</p>
  {/if}
</div>
