<script>
  import { mdiCheck, mdiContentCopy } from '@mdi/js';
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';

  export let deck;

  let loading = true;
  let error = false;
  let copied = false;
  export let id = null;
  export let setShareId;

  async function submitDeck() {
    try {
      const url = new URL(`${import.meta.env.VITE_API_HOST}/deck`);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deck),
      });

      if (res.status !== 200) {
        error = true;
        loading = false;
        return;
      }

      const data = await res.json();
      id = data.id;

      setShareId(id);

      loading = false;
    } catch (err) {
      error = true;
    }
  }

  function copyLink() {
    try {
      navigator.clipboard.writeText(generatedLink);
      copied = true;

      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {}
  }

  onMount(() => {
    if (id === null) {
      submitDeck();
    } else {
      loading = false;
    }
  });

  $: generatedLink = `paimon.moe/deck/${id}`;
</script>

{#if loading}
  <p class="text-white">{$t('tcg.loadingLink')}</p>
{:else if error}
  <p class="text-white">{$t('tcg.loadingLinkError')}</p>
{:else}
  <div class="flex flex-col">
    <p class="text-gray-400 pb-4">{$t('tcg.shareDeck', { values: { name: deck.name } })}</p>
    <div class="flex gap-4">
      <div class="bg-background rounded-xl px-4 flex items-center flex-1">
        <p class="text-white">{generatedLink}</p>
      </div>
      <Button on:click={copyLink}>
        <Icon path={copied ? mdiCheck : mdiContentCopy} />
      </Button>
    </div>
  </div>
{/if}
