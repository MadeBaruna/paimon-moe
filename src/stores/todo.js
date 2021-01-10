import { writable } from 'svelte/store';

export const loading = writable(true);
export const todos = writable([]);

export function addTodo(data) {
  todos.update((value) => {
    if (data.type === 'item') {
      const itemsIndex = value.findIndex((e) => e.type === 'item');

      if (itemsIndex > -1) {
        const items = value[itemsIndex].resources;

        if (items[data.item.id] !== undefined) {
          items[data.item.id] += data.amount;
        } else {
          items[data.item.id] = data.amount;
        }

        value[itemsIndex] = {
          type: 'item',
          resources: items,
          original: items,
        };
      } else {
        const items = { [data.item.id]: data.amount };

        value.push({
          type: 'item',
          resources: items,
          original: items,
        });
      }

      return value;
    } else {
      return [...value, data];
    }
  });
}
