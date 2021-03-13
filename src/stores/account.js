import { get, writable } from 'svelte/store';

export const accounts = writable([{ label: 'Main', value: 'main' }]);
export const selectedAccount = writable({ label: 'Main', value: 'main' });

export const getAccountPrefix = () => {
  const current = get(selectedAccount);
  if (current.value === 'main') {
    return '';
  } else {
    return `${current.value}-`;
  }
};
