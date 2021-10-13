import { writable } from 'svelte/store';

export const driveSignedIn = writable(false);
export const driveEmail = writable('');
export const driveLoading = writable(true);
export const driveError = writable(false);
export const lastSyncTime = writable(null);
export const localModified = writable(false);
export const synced = writable(false);
export const saveId = writable('');
