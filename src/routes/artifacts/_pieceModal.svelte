<script>
  import { t } from 'svelte-i18n';

  export let pieces;
  export let name;
</script>

<div>
  <p class="text-white font-bold mb-4 text-lg">
    {$t('artifact.pieceStat', { values: { piece: $t(`artifact.${name}`) } })}
  </p>
  {#each pieces as piece}
    <p class="text-white font-bold bg-background px-4 py-1 rounded-xl mb-1">
      {piece[0]}
    </p>
    <div class="flex flex-wrap mb-2">
      {#each piece[1] as char}
        <a href="/characters/{char}">
          <img src="/images/characters/{char}.png" class="mb-2 mr-2 w-12 h-12 rounded-full" alt="char" />
        </a>
      {/each}
    </div>
  {/each}
</div>
