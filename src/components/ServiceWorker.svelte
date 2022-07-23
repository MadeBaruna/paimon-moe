<script>
  import { getContext, onMount } from 'svelte';
  import { page } from '$app/stores';

  import UpdateModal from './UpdateModal.svelte';

  const { open, close } = getContext('simple-modal');
  let broadcastChannel;

  page.subscribe((p) => {
    if (broadcastChannel) {
      broadcastChannel.postMessage({
        type: 'fetch-doc',
        path: p.url.pathname,
      });
    }
  });

  async function refreshUpdate() {
    open(
      UpdateModal,
      {
        close,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '500px' },
      },
    );
  }

  onMount(() => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      broadcastChannel = new BroadcastChannel('paimonmoe-sw');
      broadcastChannel.addEventListener('message', (event) => {
        if (event.data.type === 'update') refreshUpdate();
      });

      navigator.serviceWorker.register('/service-worker.js').then(
        function () {
          console.log('service worker registration succeeded');
        },
        function (error) {
          console.log('service worker registration failed:', error);
        },
      );
    } else {
      console.log('service workers are not supported');
    }
  });
</script>
