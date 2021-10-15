<script>
  import dayjs from 'dayjs';

  import { t } from 'svelte-i18n';

  import Button from '../../components/Button.svelte';
  import Input from '../../components/Input.svelte';

  export let time;
  export let close;
  export let clear;
  export let edit;

  function save() {
    const updatedTime = dayjs(time);
    edit(updatedTime);
  }
</script>

<div>
  <p class="text-white mb-4">{$t('fishing.emptyTime')}</p>
  <Input type="datetime-local" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" bind:value={time} />
  <div class="flex space-x-2 mt-4">
    <Button on:click={clear} color="red">{$t('fishing.clear')}</Button>
    <div class="flex-1" />
    <Button on:click={save} color="green">{$t('fishing.save')}</Button>
    <Button on:click={close}>{$t('fishing.cancel')}</Button>
  </div>
</div>
