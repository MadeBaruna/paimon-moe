<script>
  import { fade, fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  import { toasts } from '../stores/toast';

  const types = {
    default: 'text-white',
    error: 'text-red-400',
  }
</script>

<div class="fixed left-0 right-0 bottom-0 text-center px-4 md:left-auto md:max-w-screen-sm" style="z-index:99999;">
  {#each $toasts as toast (toast._id)}
    <div
      class={`rounded-xl px-4 py-2 mb-4 w-full bg-black bg-opacity-75 ${types[toast.type]}`}
      in:fly={{ delay: 0, duration: 300, x: 0, y: 50, opacity: 0.1, easing: backOut }}
      out:fade={{ duration: 500, opacity: 0 }}>
      {toast.msg}
    </div>
  {/each}
</div>
