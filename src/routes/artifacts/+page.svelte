<script>
  import { onMount } from 'svelte';
  import { locale, t } from 'svelte-i18n';
  import TableHeader from '../../components/Table/TableHeader.svelte';
  import { domains } from '../../data/domain.js';
  import dataJson from '../../data/artifacts/en.json';

  let data = dataJson;
  let artifactList = [];
  let artifacts = [];
  let sortBy = 'maxRarity';
  let sortOrder = false;

  const rarity = {
    2: 'text-green-400',
    3: 'text-primary',
    4: 'text-rare-from',
    5: 'text-legendary-from',
  };

  function sort(by) {
    if (sortBy === by) {
      sortOrder = !sortOrder;
    } else {
      sortBy = by;
    }
    doSort();
  }

  function process() {
    const _artifacts = [];
    for (const [id, artifact] of Object.entries(data)) {
      _artifacts.push({
        id,
        name: artifact.name,
        maxRarity: artifact.rarity[artifact.rarity.length - 1],
        bonus2: artifact.bonuses[0],
        bonus4: artifact.bonuses[1] || '-',
        domain: artifact.domain ? domains[artifact.domain].name : '-',
        image: artifact.setPiece[0] === 1 ? `${artifact.id}_circlet.png` : `${artifact.id}_flower.png`,
      });
    }

    artifactList = _artifacts;

    doSort();
    artifacts = artifactList;
  }

  process();

  function doSort() {
    if (sortBy === 'maxRarity') {
      artifactList.sort((a, b) => a.domain.localeCompare(b.domain));
    }

    artifactList.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          if (sortOrder) {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        case 'bonus2':
          if (sortOrder) {
            return a.bonus2.localeCompare(b.bonus2);
          } else {
            return b.bonus2.localeCompare(a.bonus2);
          }
        case 'bonus4':
          if (sortOrder) {
            return a.bonus4.localeCompare(b.bonus4);
          } else {
            return b.bonus4.localeCompare(a.bonus4);
          }
        case 'domain':
          if (sortOrder) {
            return a.domain.localeCompare(b.domain);
          } else {
            return b.domain.localeCompare(a.domain);
          }
        case 'maxRarity':
          if (sortOrder) {
            return a.maxRarity - b.maxRarity;
          } else {
            return b.maxRarity - a.maxRarity;
          }
      }
    });

    artifacts = artifactList;
  }

  async function changeLocale(locale) {
    const _data = await import(`../../data/artifacts/${locale}.json`);
    data = _data.default;
    process();
  }

  onMount(async () => {
    locale.subscribe((val) => {
      changeLocale(val);
    });
  });
</script>

<svelte:head>
  <title>Artifact List - Paimon.moe</title>
  <meta name="description" content="Genshin Impact Artifact list" />
  <meta property="og:description" content="Genshin Impact Artifact list" />
</svelte:head>
<div class="lg:ml-64 pt-20 lg:pt-8">
  <h1 class="font-display px-4 md:px-8 font-black text-5xl text-white">{$t('artifact.title')}</h1>
  <div class="block overflow-x-auto whitespace-nowrap pb-8">
    <div class="px-4 md:px-8 table max-w-full">
      <table class="w-full block p-4 bg-item rounded-xl">
        <thead>
          <TableHeader />
          <TableHeader on:click={() => sort('name')} sort={sortBy === 'name'} order={sortOrder}>
            {$t('artifact.name')}
          </TableHeader>
          <TableHeader on:click={() => sort('maxRarity')} sort={sortBy === 'maxRarity'} order={sortOrder}>
            {$t('artifact.maxRarity')}
          </TableHeader>
          <TableHeader on:click={() => sort('bonus2')} sort={sortBy === 'bonus2'} order={sortOrder}>
            {$t('artifact.bonus2')}
          </TableHeader>
          <TableHeader on:click={() => sort('bonus4')} sort={sortBy === 'bonus4'} order={sortOrder}>
            {$t('artifact.bonus4')}
          </TableHeader>
          <TableHeader on:click={() => sort('domain')} sort={sortBy === 'domain'} order={sortOrder}>
            {$t('artifact.domain')}
          </TableHeader>
        </thead>
        <tbody class="text-white">
          {#each artifacts as artifact (artifact.id)}
            <a href="/artifacts/{artifact.id}" style="display: contents;">
              <tr class="cursor-pointer hover:bg-background">
                <td class="border-gray-700 border-t py-1 text-center h-12 align-middle">
                  <img
                    src="/images/artifacts/{artifact.image}"
                    alt={artifact.id}
                    class="inline"
                    style="min-width: 60px; height: 60px;"
                  />
                </td>
                <td class="border-gray-700 border-t py-1 pl-4 pr-2 align-middle">
                  {artifact.name}
                </td>
                <td
                  class="border-gray-700 border-t py-1 text-center text-2xl align-middle {rarity[artifact.maxRarity]}"
                >
                  ★
                </td>
                <td class="border-gray-700 border-t py-2 pl-4 max-w-xs whitespace-normal align-middle">
                  {artifact.bonus2}
                </td>
                <td
                  class="border-gray-700 border-t py-2 pl-4 max-w-xs whitespace-normal align-middle text-sm"
                  style="min-width: 320px;"
                >
                  {artifact.bonus4}
                </td>
                <td class="border-gray-700 border-t py-1 pl-4 align-middle">
                  {artifact.domain}
                </td>
              </tr>
            </a>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
