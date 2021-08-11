<script>
  // doc: /static/images.save_sync_flow.png

  import dayjs from 'dayjs';
  import { onMount, getContext, setContext } from 'svelte';
  import { driveSignedIn, driveError, driveLoading, saveId, synced } from '../stores/dataSync';
  import { getLocalSaveJson, updateSave, updateTime, UPDATE_TIME_KEY } from '../stores/saveManager';

  import SyncConflictModal from '../components/SyncConflictModal.svelte';
  import { pushToast } from '../stores/toast';
  import { t } from 'svelte-i18n';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  const CLIENT_ID = __paimon.env.GOOGLE_DRIVE_CLIENT_ID;
  const API_KEY = __paimon.env.GOOGLE_DRIVE_API_KEY;
  const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
  const SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

  let remoteSave = null;
  let timeout;

  $: localSaveExists = $updateTime !== null;

  setContext('sync', {
    startSync,
  });

  onMount(() => {
    startSync();

    window.onerror = function () {
      handleError();
    };
  });

  function startSync() {
    synced.set(false);
    const script = document.createElement('script');
    script.onload = handleClientLoad;
    script.onerror = handleError;
    script.src = 'https://apis.google.com/js/api.js';
    document.body.appendChild(script);

    timeout = setTimeout(() => {
      handleError();
    }, 15000);
  }

  function cancelTimeout() {
    console.log('cancelling timeout');
    if (timeout) clearTimeout(timeout);
  }

  function handleError() {
    cancelTimeout();
    console.log('error loading google drive api');
    driveSignedIn.set(false);
    driveLoading.set(false);
    driveError.set(true);
    synced.set(true);
    pushToast('Drive sync not available right now 😔', 'error');
  }

  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  function updateSigninStatus(status) {
    const hasScope = gapi.auth2.getAuthInstance().currentUser.get().hasGrantedScopes(SCOPES);

    if (status && !hasScope) {
      pushToast($t('settings.driveSignInErrorScope'), 'error');
      gapi.auth2.getAuthInstance().signOut();
    }

    const finalStatus = status && hasScope;

    console.log('update drive signed in status:', finalStatus);
    driveSignedIn.set(finalStatus);
    driveLoading.set(false);

    if (finalStatus) {
      getFiles();
    } else {
      synced.set(true);
    }
  }

  async function copyRemoteToLocal() {
    try {
      const remoteSaveData = await getData();
      for (const k in remoteSaveData) {
        await updateSave(k, remoteSaveData[k], true);
      }
    } catch (err) {
      console.error(err);
      handleError();
    }
  }

  function convertTime(data) {
    for (const pull of data.pulls) {
      pull.time = dayjs.unix(pull.time).format('YYYY-MM-DD HH:mm:ss');
    }

    return data;
  }

  async function useRemoteData() {
    // check if old local storage version
    if (!remoteSave['converted'] === undefined) {
      for (const key in remoteSave) {
        if (key.endsWith('ar') || key.endsWith('wl')) {
          await updateSave(key, Number(remoteSave[key]), true);
        } else if (key.endsWith('collectables-updated')) {
          await updateSave(key, remoteSave[key] === 'true', true);
        } else if (
          key.endsWith('accounts') ||
          key.endsWith('locale') ||
          key.endsWith('server') ||
          key.endsWith('update-time') ||
          key.endsWith('converted')
        ) {
          await updateSave(key, remoteSave[key], true);
        } else if (
          key.endsWith('wish-counter-character-event') ||
          key.endsWith('wish-counter-weapon-event') ||
          key.endsWith('wish-counter-standard') ||
          key.endsWith('wish-counter-beginners')
        ) {
          const converted = convertTime(JSON.parse(remoteSave[key]));
          await updateSave(key, converted, true);
        } else {
          try {
            await updateSave(key, JSON.parse(remoteSave[key]), true);
          } catch (err) {
            await updateSave(key, remoteSave[key], true);
          }
        }
      }
      console.log('finished convert from google drive');
    } else {
      for (const key in remoteSave) {
        if (typeof remoteSave[key] === 'string') {
          console.log('converting', key);
          if (key.endsWith('ar') || key.endsWith('wl')) {
            await updateSave(key, Number(remoteSave[key]), true);
          } else if (key.endsWith('collectables-updated')) {
            await updateSave(key, remoteSave[key] === 'true', true);
          } else if (
            key.endsWith('accounts') ||
            key.endsWith('locale') ||
            key.endsWith('server') ||
            key.endsWith('update-time') ||
            key.endsWith('converted')
          ) {
            await updateSave(key, remoteSave[key], true);
          } else if (
            key.endsWith('wish-counter-character-event') ||
            key.endsWith('wish-counter-weapon-event') ||
            key.endsWith('wish-counter-standard') ||
            key.endsWith('wish-counter-beginners')
          ) {
            const converted = convertTime(JSON.parse(remoteSave[key]));
            await updateSave(key, converted, true);
          } else {
            try {
              await updateSave(key, JSON.parse(remoteSave[key]), true);
            } catch (err) {
              await updateSave(key, remoteSave[key], true);
            }
          }
        } else {
          await updateSave(key, remoteSave[key], true);
        }
      }
    }

    synced.set(true);
    closeModal();
    window.location.reload();
  }

  async function useLocalData() {
    await saveData(await getLocalSaveJson());

    synced.set(true);
    closeModal();
  }

  async function compareLocalSave() {
    try {
      const data = await getData();
      remoteSave = data;

      const remoteTime = dayjs(data[UPDATE_TIME_KEY]);
      if ($updateTime !== null && remoteTime.diff($updateTime) !== 0) {
        console.log('DRIVE SYNC CONFLICT!');
        openModal(
          SyncConflictModal,
          {
            remoteTime: remoteTime,
            localTime: $updateTime,
            downloadBackup: exportData,
            useRemote: useRemoteData,
            useLocal: useLocalData,
          },
          {
            closeButton: false,
            closeOnEsc: false,
            closeOnOuterClick: false,
            styleWindow: { background: '#25294A' },
          },
        );
      } else {
        synced.set(true);
        pushToast('Data has been synced!');
      }
    } catch (err) {
      console.error(err);
      handleError();
    }
  }

  // check if remote save.json exists
  async function getFiles() {
    console.log('checking remote file');

    try {
      const { result } = await gapi.client.drive.files.list({
        spaces: 'appDataFolder',
        q: "name = 'save.json'",
      });
      console.log(result);

      // create save.json on remote if not exists
      if (result.files.length === 0) {
        await createFile();
      } else {
        saveId.set(result.files[0].id);

        if (localSaveExists) {
          await compareLocalSave();
        } else {
          await copyRemoteToLocal();
          synced.set(true);
        }
      }
    } catch (err) {
      console.error(err);
      handleError();
    }
  }

  async function createFile() {
    console.log('creating remote file');

    try {
      const { result } = await gapi.client.drive.files.create({
        resource: {
          name: 'save.json',
          parents: ['appDataFolder'],
        },
        fields: 'id',
      });

      saveId.set(result.id);

      if (localSaveExists) {
        await saveData(await getLocalSaveJson());
      }

      synced.set(true);
      console.log(result);
    } catch (err) {
      console.error(err);
      handleError();
    }
  }

  async function getData() {
    console.log('reading remote file now');

    try {
      const { result } = await gapi.client.drive.files.get({
        fileId: $saveId,
        alt: 'media',
      });

      console.log('get file res', result);
      return result;
    } catch (err) {
      console.error('get file res error', err);
      handleError();
    }
  }

  async function saveData(data) {
    console.log('saving to remote file');

    try {
      await gapi.client.request({
        path: `/upload/drive/v3/files/${$saveId}`,
        method: 'PATCH',
        params: {
          uploadType: 'media',
        },
        body: data,
      });
    } catch (err) {
      console.error(err);
      handleError();
    }
  }

  function initClient() {
    console.log('gapi init client');

    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          cancelTimeout();
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {
          console.error(error);
          handleError();
        },
      );
  }

  async function exportData() {
    downloadData(await getLocalSaveJson(), 'paimon-moe-local-data');
    downloadData(JSON.stringify(remoteSave), 'paimon-moe-drive-data');
  }

  function downloadData(data, name) {
    const fileLink = document.createElement('a');

    const filename = `${name}.json`;
    const dataStr = encodeURIComponent(data);

    fileLink.setAttribute('href', `data:text/json;charset=utf-8,${dataStr}`);
    fileLink.setAttribute('download', filename);
    document.body.appendChild(fileLink);
    fileLink.click();
  }
</script>

<slot />
