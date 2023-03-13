<script>
  async function resetSW() {
    if ('serviceWorker' in navigator) {
      try {
        const r = await navigator.serviceWorker.getRegistration('/');
        const val = await r.unregister();
        alert(`unregister sw: ${val}`);
      } catch (err) {
        alert(err);
      }
    }
  }

  async function resetCache() {
    if ('caches' in window) {
      try {
        const keys = await caches.keys();
        for (const key of keys) {
          await caches.delete(key);
        }
        alert('static assets deleted');
      } catch (err) {
        alert(err);
      }
    }
  }

  async function both() {
    await resetSW();
    await resetCache();
    window.location.reload();
  }
</script>

<div class="lg:ml-64 pt-20 px-4 md:px-8 lg:pt-8 flex flex-col gap-4 max-w-screen-sm">
  <h1 class="text-white text-xl font-bold">Debug Options</h1>
  <button class="ring-2 hover:ring-4 ring-primary text-white rounded-md px-4 py-2" on:click={both}>
    Reset Service Worker & Assets Cache
  </button>
  <button class="ring-2 hover:ring-4 ring-primary text-white rounded-md px-4 py-2" on:click={resetSW}>
    Reset Service Worker Only
  </button>
  <button class="ring-2 hover:ring-4 ring-primary text-white rounded-md px-4 py-2" on:click={resetCache}>
    Reset Assets Cache Only
  </button>
</div>
