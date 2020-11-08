<script>
  import { todos, loading } from '../stores/todo';
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

    console.log('todo read local');
    const data = readSave('todos');
    if (data !== null) {
      const todoList = JSON.parse(data);
      todos.set(todoList);
    }

    unsubscribe = todos.subscribe((val) => {
      if (firstLoad) return;

      console.log('todos changed', val);
      updateSave('todos', JSON.stringify(val));
    });

    firstLoad = false;
    loading.set(false);
  }
</script>
