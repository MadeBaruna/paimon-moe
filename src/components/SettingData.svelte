<script>
  import { server, ar, wl, loading } from '../stores/server';
  import { readSave, updateSave, fromRemote } from '../stores/saveManager';
  import { onMount } from 'svelte';

  let unsubscribeServer = null;
  let unsubscribeAr = null;
  let unsubscribeWl = null;
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

    if (unsubscribeServer) unsubscribeServer();
    if (unsubscribeAr) unsubscribeAr();
    if (unsubscribeWl) unsubscribeWl();

    console.log('setting read local');
    const serverSave = readSave('server');
    const arSave = readSave('ar');
    const wlSave = readSave('wl');
    if (serverSave !== null) {
      const currentServer = serverSave;
      server.set(currentServer);
    }
    if (arSave !== null) {
      ar.set(arSave);
    }
    if (wlSave !== null) {
      wl.set(wlSave);
    }

    unsubscribeServer = server.subscribe((val) => {
      if (firstLoad) return;

      console.log('server changed', val);
      updateSave('server', val);
    });
    unsubscribeWl = wl.subscribe((val) => {
      if (firstLoad) return;

      console.log('wl changed', val);
      updateSave('wl', val);
    });
    unsubscribeAr = ar.subscribe((val) => {
      if (firstLoad) return;

      console.log('ar changed', val);
      updateSave('ar', val);
    });

    firstLoad = false;
    loading.set(false);
  }
</script>
