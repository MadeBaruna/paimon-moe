<script>
  import { mdiChevronRight, mdiCircle } from '@mdi/js';
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';

  const url = 'https://discord.com/api/guilds/820601523125747712/widget.json';
  let online = '...';

  async function getData() {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      online = data.presence_count;
    } catch (err) {
      console.error(err);
    }
  }

  onMount(() => {
    getData();
  });
</script>

<div class="bg-item rounded-xl p-4 flex flex-col items-start">
  <img class="h-16" src="/images/home/discord.svg" alt="discord" />
  <p class="text-white ml-2">
    <span class="text-green-400 mr-1">⬤</span>
    {online}
    {$t('home.discord.online')}
  </p>
  <p class="text-white ml-2">
    {$t('home.discord.message')}
  </p>
  <a
    href="https://discord.gg/4nbWsCGjjE"
    target="_blank"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
    {$t('home.discord.join')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
