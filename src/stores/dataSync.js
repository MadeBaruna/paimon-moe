import { writable } from 'svelte/store';

export const driveSignedIn = writable(false);
export const driveLoading = writable(true);
export const lastSyncTime = writable(null);
export const localModified = writable(false);
export const synced = writable(false);
export const saveId = writable('');
