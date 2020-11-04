<script>
  import { mdiGoogleDrive, mdiLoading } from '@mdi/js';

  import Button from '../components/Button.svelte';
  import Icon from '../components/Icon.svelte';
  import { driveSignedIn, driveLoading } from '../stores/dataSync';

  function signIn() {
    gapi.auth2.getAuthInstance().signIn();
  }

  function signOut() {
    gapi.auth2.getAuthInstance().signOut();
  }
</script>

<div class="lg:ml-64 pt-20 px-8 lg:pt-8">
  {#if $driveLoading}
    <Icon path={mdiLoading} color="white" spin />
  {:else}
    <p class="text-white">Drive signed in: {$driveSignedIn}</p>
    {#if !$driveSignedIn}
      <Button on:click={signIn}>
        <Icon path={mdiGoogleDrive} className="mr-2" />
        Sign in to Google Drive
      </Button>
    {:else}
      <Button on:click={signOut}>
        <Icon path={mdiGoogleDrive} className="mr-2" />
        Sign out Google Drive
      </Button>
    {/if}
  {/if}
</div>
