import { writable } from 'svelte/store';

export const driveSignedIn = writable(false);
export const driveLoading = writable(true);
