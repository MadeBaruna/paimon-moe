<script>
  import Button from './Button.svelte';

  export let todo;
  export let deleteTodo;
  export let cancel;
</script>

<div>
  <p class="text-white font-bold mb-4 text-lg">Delete this todo?</p>
  <div class="flex items-center mb-4 text-white">
    {#if todo.type === 'weapon'}
      <img
        class="h-8 inline-block mr-2"
        src={`/images/weapons/${todo.weapon ? todo.weapon.id : 'any_weapon_1'}.png`}
        alt={todo.weapon ? todo.weapon.name : `Weapon Level ${todo.level.from}-${todo.level.to}`} />
      <div class="flex-1">
        <p class="font-bold">{todo.weapon ? todo.weapon.name : 'Weapon'}</p>
        <p class="text-gray-500">Level {`${todo.level.from}-${todo.level.to}`}</p>
      </div>
    {:else if todo.type === 'character'}
      <img
        class="h-8 inline-block mr-2"
        src={`/images/characters/${todo.character ? todo.character.id : 'characters'}.png`}
        alt={todo.character ? todo.character.name : `Character Level ${todo.level.from}-${todo.level.to}`} />
      <div class="flex-1">
        <p class="font-bold">{todo.character ? todo.character.name : 'Character'}</p>
        <p class="text-gray-500">Level {`${todo.level.from}-${todo.level.to}`}</p>
      </div>
    {/if}
  </div>
  <div class="flex justify-end gap-2">
    <Button on:click={cancel}>Cancel</Button>
    <Button on:click={deleteTodo} color="red">Delete</Button>
  </div>
</div>
