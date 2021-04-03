<script>
  import { mdiChevronRight } from '@mdi/js';
  import dayjs from 'dayjs';
  import { onMount, createEventDispatcher, tick } from 'svelte';

  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';

  import { bannerTypes } from '../../data/bannerTypes';
  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';
  import { getAccountPrefix } from '../../stores/account';
  import { readSave } from '../../stores/saveManager';

  const dispatch = createEventDispatcher();

  let latestPull = null;
  let latestBanner = null;

  function getLatestWish() {
    const prefix = getAccountPrefix();

    let latestTime = 0;
    let latest = null;
    let banner = null;
    for (let type of bannerTypes) {
      const path = `wish-counter-${type.id}`;
      const data = readSave(`${prefix}${path}`);
      if (data !== null) {
        const counterData = JSON.parse(data);
        const pulls = counterData.pulls || [];

        if (pulls.length > 0) {
          const currentLatest = pulls[pulls.length - 1];
          if (currentLatest.time > latestTime) {
            latestTime = currentLatest.time;
            latest = currentLatest;
            banner = type;
          }
        }
      }
    }

    latestPull = latest;
    latestBanner = banner;
  }

  onMount(async () => {
    getLatestWish();
    await tick();
    dispatch('done');
  });
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  {#if latestPull === null}
    <p class="text-white">{$t('home.wish.message')}</p>
  {:else}
    <p class="text-white mb-2">{$t('home.wish.latest')}</p>
    <div class="flex">
      <div class="h-16 w-16 mr-1" style="min-width: 4rem;">
        <img
          class="h-full w-auto"
          src={latestPull.type === 'character'
            ? `/images/characters/${latestPull.id}.png`
            : latestPull.type === 'weapon'
            ? `/images/weapons/${latestPull.id}.png`
            : '/images/wish.png'}
          alt={latestPull.id}
        />
      </div>
      <table class="text-white">
        <tr>
          <td class="text-gray-400 pr-1">{$t('home.wish.banner')}</td>
          <td>{latestBanner.name}</td>
        </tr>
        <tr>
          <td class="text-gray-400 pr-1">{$t('home.wish.time')}</td>
          <td>{dayjs.unix(latestPull.time).format('ddd YYYY-MM-DD HH:mm:ss')}</td>
        </tr>
        <tr>
          <td class="text-gray-400 pr-1 align-top">{$t('home.wish.name')}</td>
          <td>
            {latestPull.type === 'character'
              ? characters[latestPull.id].name
              : latestPull.type === 'weapon'
              ? weaponList[latestPull.id].name
              : 'Unknown'}
          </td>
        </tr>
        <tr>
          <td class="text-gray-400 pr-1">{$t('home.wish.pity')}</td>
          <td>{latestPull.pity}</td>
        </tr>
      </table>
    </div>
  {/if}
  <a
    href="/wish"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
    <img src="/images/wish.png" alt="wish" class="mr-2 h-6 w-6" />
    {$t('home.wish.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
