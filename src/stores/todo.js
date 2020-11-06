import { writable } from 'svelte/store';

export const todos = writable([]);

export function addTodo(data) {
  todos.update((value) => {
    console.log([...value, data]);
    return [...value, data];
  });
}
