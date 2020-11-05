import dayjs from 'dayjs';
import { writable } from 'svelte/store';

export const updateTime = writable(null);
export const fromRemote = writable(false);

export const UPDATE_TIME_KEY = 'update-time';

export const checkLocalSave = () => {
  const localUpdateTime = localStorage.getItem(UPDATE_TIME_KEY);
  if (localUpdateTime !== null) {
    updateTime.set(dayjs(localUpdateTime));
    console.log('local save update time:', localUpdateTime);
  }
};

export const getLocalSaveJson = () => {
  return JSON.stringify(localStorage);
};

export const updateSave = (key, data, isFromRemote) => {
  localStorage.setItem(key, data);

  if (!isFromRemote) {
    const currentTime = dayjs().toISOString();
    updateTime.set(currentTime);
    localStorage.setItem(UPDATE_TIME_KEY, currentTime);
  } else {
    fromRemote.set(true);
  }
};

export const readSave = (key) => {
  const data = localStorage.getItem(key);
  return data;
};
