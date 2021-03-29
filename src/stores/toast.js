import { writable } from 'svelte/store';

export const toasts = writable([]);

let toastId = 0;

const unshiftToast = () => {
  toasts.update((val) => {
    return val.slice(1);
  });
};

export const pushToast = (msg = '', type = 'default') => {
  toasts.update((val) => {
    const updatedToasts = [
      ...val,
      {
        _id: ++toastId,
        msg,
        type,
      },
    ];
    setTimeout(() => {
      unshiftToast();
    }, 5000);

    return updatedToasts;
  });
};
