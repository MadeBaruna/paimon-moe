import dayjs from 'dayjs';
import { writable } from 'svelte/store';
import debounce from 'lodash/debounce';

import { synced, saveId, localModified, lastSyncTime } from './dataSync';

export const updateTime = writable(null);
export const fromRemote = writable(false);

export const UPDATE_TIME_KEY = 'update-time';

let pendingQueue = [];
let queueSave = true;
let saveFileId = '';

saveId.subscribe((val) => {
  saveFileId = val;
});

const saveToRemote = debounce(() => {
  saveData(getLocalSaveJson());
}, 5000);

async function saveData(data) {
  console.log('saving to remote file');
  synced.set(false);

  try {
    await gapi.client.request({
      path: `/upload/drive/v3/files/${saveFileId}`,
      method: 'PATCH',
      params: {
        uploadType: 'media',
      },
      body: data,
    });
    synced.set(true);
    localModified.set(false);
  } catch (err) {
    console.error(err);
  }
}

synced.subscribe((value) => {
  console.log('synced:', value);
  queueSave = !value;

  if (value) {
    flushPendingQueue();
    lastSyncTime.set(dayjs());
  }
});

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
  if (!isFromRemote) {
    localModified.set(true);
  }

  if (queueSave && !isFromRemote) {
    pendingQueue.push({ key, data });
    return;
  }

  localStorage.setItem(key, data);

  if (!isFromRemote) {
    const currentTime = dayjs().toISOString();
    updateTime.set(currentTime);
    localStorage.setItem(UPDATE_TIME_KEY, currentTime);
    saveToRemote();
  } else {
    fromRemote.set(true);
  }
};

export const readSave = (key) => {
  const data = localStorage.getItem(key);
  return data;
};

export const flushPendingQueue = () => {
  console.log('flushing save queue');
  console.log(pendingQueue);

  for (const item of pendingQueue) {
    updateSave(item.key, item.data);
  }

  pendingQueue = [];
  queueSave = false;
};
