<script>
  import { mdiCalendarCheck, mdiDelete, mdiLoading } from '@mdi/js';
  import { t, locale } from 'svelte-i18n';
  import dayjs from 'dayjs';
  import relative from 'dayjs/plugin/relativeTime';
  import customParseFormat from 'dayjs/plugin/customParseFormat';
  import 'dayjs/locale/id';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ru';
  dayjs.extend(relative);
  dayjs.extend(customParseFormat);

  import Button from '../../components/Button.svelte';
  import Input from '../../components/Input.svelte';
  import Icon from '../../components/Icon.svelte';
  import { pushToast } from '../../stores/toast';

  import { loading, firebaseToken, requestPermission } from '../../stores/firebase';

  let time = '15:00';

  let currentReminder = null;

  let loadingCurrent = false;
  let loadingSave = false;

  locale.subscribe((val) => {
    if (currentReminder === null) return;
    dayjs.locale(val.substring(0, 2));
    currentReminder = currentReminder.locale(val.substring(0, 2));
  });

  async function getCurrentReminder() {
    if ($firebaseToken === '') return;

    console.log('get reminder');
    const url = new URL(`${__paimon.env.API_HOST}/reminder`);
    const query = new URLSearchParams({ token: $firebaseToken, type: 'hoyolab' });
    url.search = query.toString();

    loadingCurrent = true;

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (data.time) {
        currentReminder = dayjs(data.time);
      }
    } catch (err) {
      console.error(err);
    }

    loadingCurrent = false;
  }

  async function deleteCurrentReminder() {
    console.log('delete reminder');
    const url = new URL(`${__paimon.env.API_HOST}/reminder`);
    const query = new URLSearchParams({ token: $firebaseToken, type: 'hoyolab' });
    url.search = query.toString();

    loadingCurrent = true;

    try {
      await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      currentReminder = null;
    } catch (err) {
      console.error(err);
    }

    loadingCurrent = false;
  }

  async function setReminder() {
    loadingSave = true;
    await requestPermission();

    const reminderTime = dayjs(time, 'HH:mm').utc().year(2000).month(0).date(1).format('YYYY-MM-DD HH:mm:ssZ');

    try {
      const res = await fetch(`${__paimon.env.API_HOST}/reminder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          time: reminderTime,
          type: 'hoyolab',
          token: $firebaseToken,
        }),
      });

      const data = await res.json();
      currentReminder = dayjs(data.reminder.time);
      loadingSave = false;
    } catch (err) {
      loadingSave = false;
      console.error(err);
      pushToast($t('reminder.errorSaving'), 'error');
    }

    console.log('set reminder', 'hoyolab', reminderTime);
  }

  $: $firebaseToken, getCurrentReminder();
</script>

<div>
  <div class="flex items-center mb-2 h-12">
    <Icon path={mdiCalendarCheck} size={1.5} className="mr-2" />
    <p class="font-display text-xl font-semibold">{$t('reminder.hoyolab')}</p>
  </div>
  <div class="bg-item p-4 rounded-xl text-white flex flex-col">
    {#if loadingCurrent}
      <div class="bg-background mb-4 p-4 rounded-xl flex">
        <Icon path={mdiLoading} size={0.8} spin className="mr-2" />
        {$t('reminder.checking')}
      </div>
    {/if}
    {#if !loadingCurrent && currentReminder !== null}
      <div class="bg-background mb-4 p-4 rounded-xl relative">
        <p class="text-gray-400">{$t('reminder.current')}</p>
        <p class="text-gray-400">{$t('reminder.every')} {currentReminder.format('HH:mm')}</p>
        <Button size="sm" on:click={deleteCurrentReminder} className="absolute top-0 right-0 mt-1 mr-1 text-gray-400">
          <Icon path={mdiDelete} />
        </Button>
      </div>
    {/if}
    <p class="mb-1 ml-1">
      {$t('reminder.lastHoyolab')}
    </p>
    <Input type="time" bind:value={time} />
    <Button className="mt-2" on:click={setReminder} disabled={loadingSave}>
      {#if loadingSave}<Icon path={mdiLoading} size={0.8} spin className="mr-2" />{/if}
      {$t('reminder.set')}
    </Button>
    {#if $loading}
      <p class="text-green-400 text-center mt-2">{$t('reminder.allowNotification')}</p>
    {/if}
  </div>
</div>
