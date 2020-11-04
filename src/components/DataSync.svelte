<script>
  import { onMount } from 'svelte';
  import { driveSignedIn, driveLoading } from '../stores/dataSync';

  const CLIENT_ID = __paimon.env.GOOGLE_DRIVE_CLIENT_ID;
  const API_KEY = __paimon.env.GOOGLE_DRIVE_API_KEY;
  const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
  const SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

  onMount(() => {
    const script = document.createElement('script');
    script.onload = handleClientLoad;
    script.src = 'https://apis.google.com/js/api.js';
    document.body.appendChild(script);
  });

  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  function updateSigninStatus(status) {
    console.log('DRIVE signed in:', status);
    driveSignedIn.set(status);
    driveLoading.set(false);

    if (status) {
      getFiles();
    }
  }

  async function getFiles() {
    try {
      const { result } = await gapi.client.drive.files.list({
        spaces: 'appDataFolder',
        q: "name = 'save.json'",
      });
      console.log(result);

      if (result.files.length === 0) {
        createFile();
      } else {
        const data = await gapi.client.drive.files.get({
          fileId: result.files[0].id,
          alt: 'media',
        });
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function createFile() {
    try {
      const { result } = await gapi.client.drive.files.create({
        resource: {
          name: 'save.json',
          parents: ['appDataFolder'],
        },
        fields: 'id',
      });

      const data = await gapi.client.request({
        path: `/upload/drive/v3/files/${result.id}`,
        method: 'PATCH',
        params: {
          uploadType: 'media',
        },
        body: JSON.stringify({ v: __paimon.env.CURRENT_VERSION }),
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  function initClient() {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {
          console.error(error);
        },
      );
  }
</script>
