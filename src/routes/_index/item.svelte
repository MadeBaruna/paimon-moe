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
  let characterItems = [];
  let weaponItems = {};

  const order = {
    teachings_of_freedom: 0,
    teachings_of_prosperity: 1,
    teachings_of_transience: 2,
    teachings_of_admonition: 3,
    teachings_of_resistance: 4,
    teachings_of_diligence: 5,
    teachings_of_elegance: 6,
    teachings_of_ingenuity: 7,
    teachings_of_ballad: 8,
    teachings_of_gold: 9,
    teachings_of_light: 10,
    teachings_of_praxis: 11,
  };

  function parseTalentBook() {
    const _characters = {};
    const _weapons = {};

    for (const [_, character] of Object.entries(characters)) {
      const isTraveler = character.id.startsWith('traveler');
      const item = character.material.book[0];
      if (!isTraveler) {
        if (!item.day.includes(today)) continue;
        if (_characters[item.id] === undefined) {
          _characters[item.id] = [];
        }
        _characters[item.id].push(character.id);
      } else {
        for (let i = 1; i <= 3; i++) {
          const e = character.material.book[i];
          if (!e.day.includes(today)) continue;
          if (_characters[e.parent] === undefined) {
            _characters[e.parent] = [];
          }
          _characters[e.parent].push(character.id);
        }
      }
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

    characterItems = Object.entries(_characters).sort((a, b) => order[a[0]] - order[b[0]]);
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
      {#each characterItems as [id, characters]}
        <tr>
          <td class="border-b border-gray-700 h-14 w-14 pr-2 py-2 align-middle">
            <img class="w-full" src="/images/items/{id}.png" alt={id} title={id} />
          </td>
          <td class="border-b border-gray-700 pt-2 align-middle">
            {#each characters as char}
              <a href="/characters/{char}" class="relative">
                <img
                  class="h-10 w-auto mb-2 mr-1 inline rounded-full"
                  src="/images/characters/{char}.png"
                  alt={char}
                  title={char}
                  width="40"
                  height="40"
                />
                {#if char.startsWith('traveler')}
                  <img
                    class="w-6 h-6 object-contain absolute -bottom-2 right-2"
                    src={`/images/elements/${char.split('_')[1]}.png`}
                    alt=""
                    loading="lazy"
                  />
                {/if}
              </a>
            {/each}
          </td>
        </tr>
      {/each}
      <tr>
        <td colspan="2" class="py-2 align-middle">
          {#each Object.entries(weaponItems) as [id, _]}
            <img class="max-w-[2.5rem] h-auto inline-block mr-3" src="/images/items/{id}.png" alt={id} title={id} />
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
