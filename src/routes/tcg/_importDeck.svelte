<script>
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import { pushToast } from '../../stores/toast';
  import { readCards } from '../../functions/deckUtils';
  import cv from 'opencv-ts';

  export let loadDeck;

  let fileInput;
  let importDeckURL = '';

  function selectFile() {
    fileInput.click();
  }

  function onImportFileChange(event) {
    const files = event.target.files;
    if (files === null || files.length === 0) return;
    const file = files[0];
    const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
    if (acceptedFileTypes.includes(file.type)) {
      importDeckURL = URL.createObjectURL(file);
    } else {
      pushToast($t('tcg.errorInvalidFile', { values: { filetype: file.type } }), 'error');
    }
  }

  async function onImportImageLoad() {
    console.log('Image loaded!');
    let queryMat = cv.imread('opencv-tcg-deck');
    console.log('OpenCV Read');
    try {
      let [characters, actions] = readCards(queryMat);
      delete characters['blank'];
      delete actions['blank'];
      loadDeck(characters, actions);
    } catch (err) {
      console.error(err);
      if (err instanceof RangeError) {
        pushToast($t('tcg.errorInvalidImageSize'), 'error');
      }
    } finally {
      importDeckURL = '';
      queryMat.delete();
    }
  }
</script>

<span>
  <img
    id="opencv-tcg-deck"
    class="hidden"
    src={importDeckURL}
    alt=""
    on:load={onImportImageLoad}
  />
  <input class="hidden" on:change={onImportFileChange} type="file" bind:this={fileInput} />
  <Button on:click={selectFile}>{$t('tcg.importDeck')}</Button>
</span>
