import { writable } from 'svelte/store';

export const loading = writable(true);
export const todos = writable([]);

export function addTodo(data) {
  todos.update((value) => {
    console.log([...value, data]);
    return [...value, data];
  });
}
