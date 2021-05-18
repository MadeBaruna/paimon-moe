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

  onMount(async () => {
    await readLocalData();

    const unsub = selectedAccount.subscribe(() => {
      console.log('account changed, reading todo for the account');
      readLocalData();
    });

    return () => unsub();
  });

  async function readLocalData() {
    loading.set(true);
    firstLoad = true;

    if (unsubscribe) unsubscribe();

    const prefix = getAccountPrefix();

    console.log('todo read local');
    const data = await readSave(`${prefix}todos`);
    console.log(data);
    if (data !== null) {
      const todoList = data;
      todos.set(todoList);
    } else {
      todos.set([]);
    }

    unsubscribe = todos.subscribe(async (val) => {
      if (firstLoad) return;

      await updateSave(`${prefix}todos`, val);
    });

    firstLoad = false;
    loading.set(false);
  }
</script>
