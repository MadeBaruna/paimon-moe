<script>
  import { stores } from '@sapper/app';
  import { mdiCalendarCheck, mdiDelete, mdiLoading } from '@mdi/js';
  import { onMount } from 'svelte';
  import { t, locale } from 'svelte-i18n';
  import dayjs from 'dayjs';
  import relative from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/id';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ru';
  dayjs.extend(relative);

  import Button from '../components/Button.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Icon from '../components/Icon.svelte';
  import { pushToast } from '../stores/toast';

  import {
    loading,
    firebaseToken,
    firstLoadNotification,
    loadingFirst,
    notificationAllowed,
    notificationSupported,
    requestPermission,
  } from '../stores/firebase';

  const daysOptions = [...new Array(7)].map((_, i) => ({
    label: i,
    value: i,
  }));
  const hourOptions = [...new Array(24)].map((_, i) => ({
    label: i,
    value: i,
  }));

  let useType = 'last';
  let time = dayjs().format('YYYY-MM-DDTHH:mm');
  let day = null;
  let hour = null;

  let currentReminder = null;

  let loadingCurrent = false;
  let loadingSave = false;

  locale.subscribe((val) => {
    if (currentReminder === null) return;
    currentReminder = currentReminder.locale(val.substring(0, 2));
  });

  async function getCurrentReminder() {
    if ($firebaseToken === '') return;

    console.log('get reminder');
    const url = new URL(`${__paimon.env.API_HOST}/reminder`);
    const query = new URLSearchParams({ token: $firebaseToken, type: 'transformer' });
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
    const query = new URLSearchParams({ token: $firebaseToken, type: 'transformer' });
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

    let reminderTime;

    if (useType === 'last') {
      reminderTime = dayjs(time).add(6, 'day').add(22, 'h').format('YYYY-MM-DD HH:mm:ssZ');
    } else {
      if (day === null || hour === null) {
        pushToast($t('reminder.errorSelect'), 'error');
        loadingSave = false;
        return;
      } else {
        reminderTime = dayjs().add(day.value, 'day').add(hour.value, 'h').format('YYYY-MM-DD HH:mm:ssZ');
      }
    }

    try {
      const res = await fetch(`${__paimon.env.API_HOST}/reminder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          time: reminderTime,
          type: 'transformer',
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

    console.log('set reminder', useType, 'transformer', reminderTime);
  }

  function toggleUseType() {
    if (useType === 'last') {
      useType = 'countdown';
      time = dayjs().format('HH:mm');
    } else {
      useType = 'last';
      time = dayjs().format('YYYY-MM-DDTHH:mm');
    }
  }

  onMount(async () => {
    await firstLoadNotification();
    await getCurrentReminder();
  });

  const { page } = stores();
  $: if (page) {
    getCurrentReminder();
  }
</script>

<svelte:head>
  <title>Paimon.moe</title>
  <meta
    name="description"
    content="Set up a reminder notification for Parametric Transformer and Hoyolab Daily Login here"
  />
  <meta
    property="og:description"
    content="Set up a reminder notification for Parametric Transformer and Hoyolab Daily Login here"
  />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <div class="px-4 md:px-8 flex flex-col text-white">
    {#if $loadingFirst}
      <Icon path={mdiLoading} spin />
    {:else if !$notificationSupported}
      <div class="rounded-xl border-2 border-red-600 bg-red-400 bg-opacity-75 p-4 not-supported text-black">
        {$t('reminder.notSupported')}
      </div>
    {:else if !$notificationAllowed}
      <div class="rounded-xl border-2 border-red-600 bg-red-400 bg-opacity-75 p-4 not-supported text-black">
        {$t('reminder.blocked')}
      </div>
    {:else}
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
        <div>
          <div class="flex items-center mb-2 h-12">
            <img src="/images/items/parametric_transformer.png" alt="parametric transformer" class="w-12 h-12 mr-2" />
            <p class="font-display text-xl font-semibold">{$t('reminder.transformer')}</p>
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
                <p class="text-gray-400">{currentReminder.format('YYYY-MM-DD HH:mm')} ({currentReminder.fromNow()})</p>
                <Button size="sm" on:click={deleteCurrentReminder} className="absolute top-0 right-0 mt-1 mr-1 text-gray-400">
                  <Icon path={mdiDelete} />
                </Button>
              </div>
            {/if}
            <p class="mb-1 ml-1">
              {$t(useType === 'last' ? 'reminder.last' : 'reminder.countdown')}
            </p>
            {#if useType === 'last'}
              <Input type="datetime-local" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" bind:value={time} />
            {:else}
              <div class="flex">
                <Select placeholder="Day" className="mr-1 flex-1" options={daysOptions} bind:selected={day} />
                <Select placeholder="Hour" className="ml-1 flex-1" options={hourOptions} bind:selected={hour} />
              </div>
            {/if}
            <Button size="sm" className="my-2" on:click={toggleUseType}>
              {$t(useType === 'last' ? 'reminder.useCountdown' : 'reminder.useLast')}
            </Button>
            <Button on:click={setReminder} disabled={loadingSave}>
              {#if loadingSave}<Icon path={mdiLoading} size={0.8} spin className="mr-2" />{/if}
              {$t('reminder.set')}
            </Button>
            {#if $loading}
              <p class="text-green-400 text-center mt-2">{$t('reminder.allowNotification')}</p>
            {/if}
          </div>
        </div>
        <div>
          <div class="flex items-center mb-2 h-12">
            <Icon path={mdiCalendarCheck} size={1.5} className="mr-2" />
            <p class="font-display text-xl font-semibold">{$t('reminder.hoyolab')}</p>
          </div>
          <div class="bg-item p-4 rounded-xl text-white flex flex-col">
            {$t('reminder.comingsoon')}
          </div>
        </div>
        <div>
          <div class="rounded-xl border-2 border-green-600 bg-green-400 bg-opacity-75 p-4 not-supported text-black">
            {$t('reminder.early')}
          </div>
          <div
            class="rounded-xl border-2 border-orange-600 bg-orange-400 bg-opacity-75 p-4 not-supported text-black mb-4 mt-2 hidden lg:block"
          >
            {$t('reminder.desktop')}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  @screen md {
    .not-supported {
      width: fit-content;
    }
  }
</style>
