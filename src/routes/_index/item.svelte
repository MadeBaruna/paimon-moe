<script>
  import { mdiChevronRight } from '@mdi/js';

  import { onMount, createEventDispatcher, tick } from 'svelte';

  import { t, _ } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
  import { characters } from '../../data/characters';
  import { weaponList } from '../../data/weaponList';
  import { getCurrentDay, server } from '../../stores/server';

  const dispatch = createEventDispatcher();

  let today = getCurrentDay();
  let characterItems = {};
  let weaponItems = {};

  function parseTalentBook() {
    const _characters = {};
    const _weapons = {};

    for (const [_, character] of Object.entries(characters)) {
      const item = character.material.book[0];
      if (!item.day.includes(today)) continue;

      if (_characters[item.id] === undefined) {
        _characters[item.id] = [];
      }
      _characters[item.id].push(character.id);
    }

    for (const [_, weapon] of Object.entries(weaponList)) {
      const items = weapon.ascension[0].items;
      const item = items[0].item;
      if (item.day) {
        if (!item.day.includes(today)) continue;
        if (_weapons[item.id] === undefined) {
          _weapons[item.id] = [];
        }
        _weapons[item.id].push(weapon.id);
      }
    }

    characterItems = _characters;
    weaponItems = _weapons;
  }

  onMount(async () => {
    const ubsub = server.subscribe(async () => {
      today = getCurrentDay();
      parseTalentBook();
      await tick();
      dispatch('done');
    });

    parseTalentBook();
    await tick();
    dispatch('done');

    return () => {
      ubsub();
    };
  });
</script>

<div class="bg-item rounded-xl p-4 flex flex-col">
  <p class="text-white mb-2">{$t('home.items.title')}</p>
  {#if today === 'sunday'}
    <div class="text-white">{$t('home.items.sunday')}</div>
  {:else}
    <table>
      {#each Object.entries(characterItems) as [id, characters]}
        <tr>
          <td class="border-b border-gray-700 h-14 w-14 pr-2 py-2 align-middle">
            <img class="w-full" src="/images/items/{id}.png" alt={id} title={id} />
          </td>
          <td class="border-b border-gray-700 pt-2 align-middle">
            {#each characters as char}
              <a href="/characters/{char}">
                <img
                  class="h-10 w-auto mb-2 mr-2 inline rounded-full"
                  src="/images/characters/{char}.png"
                  alt={char}
                  title={char}
                  width="40"
                  height="40"
                />
              </a>
            {/each}
          </td>
        </tr>
      {/each}
      <tr>
        <td colspan="2" class="py-2 align-middle">
          {#each Object.entries(weaponItems) as [id, _]}
            <img class="max-w-[2.5rem] h-auto inline-block mr-4" src="/images/items/{id}.png" alt={id} title={id} />
          {/each}
        </td>
      </tr>
    </table>
  {/if}
  <a
    href="/items"
    class="flex justify-end items-center self-end lg:self-start text-white mt-4 bg-background-secondary rounded-xl py-2 px-4
    hover:bg-background transition-colors duration-100"
  >
    <img src="/images/items.png" alt="wish" class="mr-2 h-6 w-6" />
    {$t('home.items.detail')}
    <Icon path={mdiChevronRight} />
  </a>
</div>
