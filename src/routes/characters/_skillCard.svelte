<script>
  import { slide } from 'svelte/transition';
  import { t } from 'svelte-i18n';
  import Icon from '../../components/Icon.svelte';
  import { mdiChevronDown } from '@mdi/js';

  export let id = "";
  export let image = "";
  export let data = {};
  export let withQuote = false;
  export let withSingleLevel = false

  let showStat = false;

  let iter = [...new Array(withSingleLevel ? 1 : 13)];

  const lastIndex = withQuote ? data.description.indexOf('<i>') : data.description.length;
  const description = data.description.substring(0, lastIndex).replace(/\\n/g, '<br/>').replace(/·/g, '- ');
  const quote = data.description
    .substring(lastIndex, data.description.length)
    .replace('<i>', '')
    .replace('</i>', '')
    .replace(/\\n/g, '<br/>')
    .replace(/·/g, '- ');
  const name = data.name;

  const numberFormat1Digit = Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });
  const numberFormat2Digit = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  function formatter(type, number) {
    switch (type) {
      case 'i':
        return Math.round(number);
      case 'p':
        return `${Math.round(number * 100)}%`;
      case '1p':
        return `${numberFormat1Digit.format(number * 100)}%`;
      case '2p':
        return `${numberFormat2Digit.format(number * 100)}%`;
      case '1f':
        return `${numberFormat1Digit.format(number)}`;
      case '2f':
        return `${numberFormat2Digit.format(number)}`;
    }
  }

  function format(str, args) {
    // let formatted = str.replace(/(\/{)|(\+{)|\s[^+]+/g, (token) => ` ${token} `);
    let formatted = str.replace(/[\+\/]{/g, (token) => ` ${token}`);
    formatted = formatted.replace(/{[0-9]:\w+}/g, (text) => {
      const splitted = text.substring(1, text.length - 1).split(':');
      return formatter(splitted[1], args[splitted[0]]);
    });
    return formatted;
  }
</script>

<div class="py-4 rounded-xl bg-item flex flex-col mb-4">
  <div class="flex mb-2 items-center px-4">
    <img src="/images/skills/{id}/{image}.png" alt={name} class="w-16 h-16 mr-4" />
    <div>
      <p class="font-black font-display text-xl">{name}</p>
    </div>
  </div>
  <p class="skill-description px-4">{@html description}</p>
  {#if withQuote}
    <p class="text-sm text-gray-400 italic mt-2 px-4">{@html quote}</p>
  {/if}
  <button
    class="inline-flex px-4 mt-4 cursor-pointer focus:outline-none"
    on:click={() => {
      showStat = !showStat;
    }}
  >
    Talent Stat <Icon path={mdiChevronDown} className="transform duration-100 {showStat ? 'rotate-180' : ''}" />
  </button>
  {#if showStat}
    <div transition:slide class="mt-4 block overflow-x-auto">
      <div class="px-4" style="width: fit-content;">
        <div class="table max-w-full rounded-xl border border-gray-200 border-opacity-25">
          <table class="text-gray-200 text-sm">
            <tr>
              <td class="border-gray-700 px-2">{$t('characters.lvl')}</td>
              {#each iter as _, i}
                <td class="text-center border-gray-700 px-2">{i + 1}</td>
              {/each}
            </tr>
            {#each data.skillLabels as label, i}
              <tr>
                <td class="border-t border-gray-700 px-2" style="min-width: 150px;">{label}</td>
                {#each data.skillStats[i].slice(0, 13) as stat}
                  <td class="text-center border-t border-gray-700 px-2">
                    {@html format(data.skillStatsLabels[i], stat)}
                  </td>
                {/each}
              </tr>
            {/each}
          </table>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  td:not(:last-child) {
    @apply border-r;
  }

  :global(span.color) {
    @apply text-primary font-semibold;
  }

  :global(p.skill-description > br) {
    line-height: 1px;
  }

  @screen lg {
    ::-webkit-scrollbar {
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      @apply bg-transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.35);
      @apply rounded-xl;
    }
  }
</style>
