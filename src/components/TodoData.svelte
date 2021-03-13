<script>
  import { todos, loading } from '../stores/todo';
  import { readSave, updateSave, fromRemote } from '../stores/saveManager';
  import { onMount } from 'svelte';
  import { getAccountPrefix, selectedAccount } from '../stores/account';

  let unsubscribe = null;
  let firstLoad = true;

  $: if ($fromRemote) {
    readLocalData();
  }

  onMount(() => {
    readLocalData();

    const unsub = selectedAccount.subscribe(() => {
      console.log('account changed, reading todo for the account');
      readLocalData();
    });

    return () => unsub();
  });

  function readLocalData() {
    loading.set(true);
    firstLoad = true;

    if (unsubscribe) unsubscribe();

    const prefix = getAccountPrefix();

    console.log('todo read local');
    const data = readSave(`${prefix}todos`);
    if (data !== null) {
      const todoList = JSON.parse(data);
      todos.set(todoList);
    } else {
      todos.set([]);
    }

    unsubscribe = todos.subscribe((val) => {
      if (firstLoad) return;

      updateSave(`${prefix}todos`, JSON.stringify(val));
    });

    firstLoad = false;
    loading.set(false);
  }
</script>
