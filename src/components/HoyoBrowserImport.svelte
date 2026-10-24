<script>
  import { onMount, onDestroy } from 'svelte';
  import { t } from 'svelte-i18n';
  import Button from './Button.svelte';
  import { createHoyoBridge, REGIONS } from '../functions/hoyoverseBridge';

  export let disabled = false;
  export let selectedRole = null;
  export let china = false;
  let bridge;
  let roles = [];
  let busy = false;
  let ready = false;
  let errorCode = '';
  let controller;
  let mounted = false;

  function message(code) {
    return $t(`wish.import.hoyoverse.errors.${code}`);
  }

  export async function authkey(signal) {
    if (!bridge || !selectedRole) throw Object.assign(new Error('NO_ROLES'), { code: 'NO_ROLES' });
    return bridge.authkey(selectedRole, { signal });
  }

  async function connect() {
    if (busy || disabled) return;
    busy = true;
    ready = false;
    errorCode = '';
    roles = [];
    selectedRole = null;
    controller = new AbortController();
    try {
      await bridge.capabilities();
      ready = true;
      const result = await bridge.roles({ signal: controller.signal });
      if (!mounted) return;
      roles = result.roles;
      selectedRole = roles.length === 1 ? roles[0] : null;
    } catch (error) {
      if (mounted && error.code !== 'CANCELLED') errorCode = error.code || 'UPSTREAM_REJECTED';
    } finally {
      if (mounted) busy = false;
    }
  }

  function cancel() {
    controller?.abort();
  }

  onMount(() => {
    mounted = true;
    bridge = createHoyoBridge();
  });
  onDestroy(() => {
    mounted = false;
    controller?.abort();
    bridge?.destroy();
  });
</script>

<div class="bg-background rounded-xl p-4 text-white min-w-0" data-testid="hoyoverse-import">
  <h2 class="font-semibold mb-2">{$t('wish.import.hoyoverse.title')}</h2>
  <p class="text-sm text-gray-200 mb-4">{$t('wish.import.hoyoverse.description')}</p>
  <ol class="list-decimal ml-5 space-y-3 text-sm">
    <li>
      {$t('wish.import.hoyoverse.install')}
      <a class="text-primary underline" href="/browser-connector/chromium.zip" download>
        {$t('wish.import.hoyoverse.chromium')}
      </a>
      <span aria-hidden="true"> / </span>
      <a class="text-primary underline" href="/browser-connector/firefox.zip" download>
        {$t('wish.import.hoyoverse.firefox')}
      </a>
      <details class="mt-2">
        <summary class="cursor-pointer text-primary">{$t('wish.import.hoyoverse.previewTitle')}</summary>
        <p class="mt-2 text-gray-200">{$t('wish.import.hoyoverse.previewNotice')}</p>
        <p class="mt-2">{$t('wish.import.hoyoverse.chromiumInstructions')}</p>
        <p class="mt-2">{$t('wish.import.hoyoverse.firefoxInstructions')}</p>
      </details>
    </li>
    <li>
      <a href="https://account.hoyoverse.com/" target="_blank" rel="noopener noreferrer" class="text-primary underline">
        {$t('wish.import.hoyoverse.signIn')}
      </a>
      {$t('wish.import.hoyoverse.sameBrowser')}
    </li>
    <li>{$t('wish.import.hoyoverse.chooseRole')}</li>
    <li>{$t('wish.import.hoyoverse.reviewSave')}</li>
  </ol>
  <p class="text-xs text-gray-300 mt-4">{$t('wish.import.hoyoverse.privacy')}</p>
  <p class="text-xs text-gray-300 mt-2">{$t('wish.import.hoyoverse.support')}</p>
  {#if china}
    <p role="status" class="text-yellow-300 mt-4">{$t('wish.import.hoyoverse.errors.UNSUPPORTED_REGION')}</p>
  {:else}
    <div class="flex flex-wrap gap-2 mt-4">
      <Button on:click={connect} disabled={disabled || busy}>
        {busy ? $t('wish.import.hoyoverse.connecting') : $t('wish.import.hoyoverse.connect')}
      </Button>
      {#if busy}<Button on:click={cancel}>{$t('wish.import.cancel')}</Button>{/if}
    </div>
    {#if errorCode}
      <p role="alert" class="text-red-300 mt-3">{message(errorCode)}</p>
    {:else if ready && roles.length > 0}
      <label class="block mt-4">
        <span class="block text-sm mb-2">{$t('wish.import.hoyoverse.character')}</span>
        <select
          bind:value={selectedRole}
          disabled={disabled || busy}
          class="w-full bg-background-secondary border border-gray-500 rounded-xl p-3 text-white"
        >
          <option value={null} disabled>{$t('wish.import.hoyoverse.selectCharacter')}</option>
          {#each roles as role}
            <option value={role}
              >{role.nickname || role.uid} · {role.uid} · {REGIONS[role.region]} ({role.region})</option
            >
          {/each}
        </select>
      </label>
      <p role="status" class="text-green-300 text-sm mt-2">{$t('wish.import.hoyoverse.ready')}</p>
    {/if}
  {/if}
</div>
