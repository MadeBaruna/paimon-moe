<script>
  import { server, loading } from '../stores/server';
  import { readSave, updateSave, fromRemote } from '../stores/saveManager';
  import { onMount } from 'svelte';

  let unsubscribe = null;
  let firstLoad = true;

  $: if ($fromRemote) {
    readLocalData();
  }

  onMount(() => {
    readLocalData();
  });

  function readLocalData() {
    loading.set(true);
    firstLoad = true;

    if (unsubscribe) unsubscribe();

    console.log('setting read local');
    const data = readSave('server');
    if (data !== null) {
      const currentServer = data;
      server.set(currentServer);
    }

    unsubscribe = server.subscribe((val) => {
      if (firstLoad) return;

      console.log('server changed', val);
      updateSave('server', val);
    });

    firstLoad = false;
    loading.set(false);
  }
</script>
