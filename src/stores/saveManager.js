import dayjs from 'dayjs';
import { writable } from 'svelte/store';
import debounce from 'lodash/debounce';
import localforage from 'localforage';

import { synced, saveId, localModified, lastSyncTime, driveSignedIn } from './dataSync';
import { pushToast } from './toast';

export const updateTime = writable(null);
export const fromRemote = writable(false);

export const UPDATE_TIME_KEY = 'update-time';
export const CONVERTED_KEY = 'converted';

let saveFileId = '';
let signedIn = false;

saveId.subscribe((val) => {
  saveFileId = val;
});

driveSignedIn.subscribe((val) => {
  signedIn = val;
});

const saveToRemote = debounce(async () => {
  saveData(await getLocalSaveJson());
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

    pushToast('Data has been synced!');
  } catch (err) {
    console.error(err);
    pushToast('Error when uploading your data!', 'error');
    synced.set(true);
  }
}

synced.subscribe((value) => {
  console.log('synced:', value);

  if (value) {
    lastSyncTime.set(dayjs());
  }
});

const convertTime = (data) => {
  for (const pull of data.pulls) {
    pull.time = dayjs.unix(pull.time).format('YYYY-MM-DD HH:mm:ss');
  }

  return data;
};

const convertSave = async () => {
  const converted = localStorage.getItem(CONVERTED_KEY);
  if (converted !== null) return;

  let convertedCount = 0;
  for (const [key, value] of Object.entries(localStorage)) {
    if (key.endsWith('ar') || key.endsWith('wl')) {
      await localforage.setItem(key, Number(value));
    } else if (key.endsWith('collectables-updated')) {
      await localforage.setItem(key, value === 'true');
    } else if (
      key.endsWith('accounts') ||
      key.endsWith('locale') ||
      key.endsWith('server') ||
      key.endsWith('update-time')
    ) {
      await localforage.setItem(key, value);
    } else if (
      key.endsWith('wish-counter-character-event') ||
      key.endsWith('wish-counter-weapon-event') ||
      key.endsWith('wish-counter-standard') ||
      key.endsWith('wish-counter-beginners')
    ) {
      const converted = convertTime(JSON.parse(value));
      await localforage.setItem(key, converted);
    } else {
      await localforage.setItem(key, JSON.parse(value));
    }

    if (!key.endsWith('locale')) {
      convertedCount++;
    }
  }

  localStorage.setItem(CONVERTED_KEY, dayjs().toISOString());

  if (convertedCount > 0) {
    window.location.reload();
  }
};

export const checkLocalSave = async () => {
  await convertSave();

  const localUpdateTime = await localforage.getItem(UPDATE_TIME_KEY);
  if (localUpdateTime !== null) {
    updateTime.set(dayjs(localUpdateTime));
    console.log('local save update time:', localUpdateTime);
  }
};

export const getLocalSaveJson = async () => {
  const data = {};
  await localforage.iterate((value, key) => {
    data[key] = value;
  });
  return JSON.stringify(data);
};

export const updateSave = async (key, data, isFromRemote) => {
  if (!isFromRemote) {
    localModified.set(true);
  }

  if (data !== undefined) {
    await localforage.setItem(key, data);
  } else {
    await localforage.removeItem(key);
  }

  if (!isFromRemote) {
    const currentTime = dayjs();
    updateTime.set(currentTime);
    await localforage.setItem(UPDATE_TIME_KEY, currentTime.toISOString());

    if (signedIn) {
      saveToRemote();
    }
  } else {
    fromRemote.set(true);
  }
};

export const readSave = async (key) => {
  const data = await localforage.getItem(key);
  return data;
};
