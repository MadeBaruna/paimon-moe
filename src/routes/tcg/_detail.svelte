<script context="module">
  import tagsJson from '../../data/tcg/tags/en.json';
</script>

<script>
  export let card;
  export let smallScreen = false;
  export let withBackground = true;

  const sizes = {
    base: {
      text: 'text-sm',
      title: 'text-base',
      gap: 'gap-y-2',
      tag: 'w-8',
      image: 'w-12',
      element: 'w-10',
      padding: 'p-2',
    },
    small: {
      text: 'text-xs',
      title: 'text-xs',
      gap: 'gap-y-1',
      tag: 'w-6',
      image: 'w-6',
      element: 'w-8',
      padding: 'p-1',
    },
  };

  let tags = tagsJson;

  $: size = sizes[smallScreen ? 'small' : 'base'];
</script>

{#if card.type === 'character'}
  <div
    class="flex flex-col bg-opacity-95 rounded-xl text-white w-full h-fit 
    origin-top-left {withBackground ? 'bg-background' : ''} {size.gap} {size.padding}"
  >
    <div class="flex gap-2 items-center">
      <img
        src="/images/tcg/icons/elements/{card.element}.png"
        alt={card.element}
        class={size.tag}
        width="128"
        height="128"
      />
      <p class="{size.title} font-bold flex-1">{card.name}</p>
      <img
        src="/images/tcg/icons/weapons/{card.weapon}.png"
        alt={card.weapon}
        class={size.tag}
        width="64"
        height="64"
      />
    </div>

    <div class="flex flex-col text-sm {size.gap}">
      {#each card.skills as skill, i}
        <div class="bg-black bg-opacity-60 p-2 rounded-xl">
          <div class="flex items-center pb-2">
            <img class={size.image} src="/images/tcg/skills/{card.id}/skill_{i + 1}.png" alt={skill.name} />
            <div class="pr-3 flex-1">
              <p class="pl-2 font-bold leading-tight {size.title}">{skill.name}</p>
              <p class="pl-2 {size.title}" style="color: #ffd780ff;">{skill.type}</p>
            </div>
            <div class="flex">
              {#each skill.cost as cost}
                <div class="relative">
                  <img
                    src="/images/tcg/icons/{cost.type}.png"
                    alt={cost.type}
                    class={size.element}
                    width="140"
                    height="172"
                  />
                  <div class="w-full h-full flex items-center justify-center top-0 left-0 absolute">
                    <p
                      class="font-bold text-2xl text-white pt-[2px] pr-[1px]"
                      style="-webkit-text-stroke: 1.2px black;"
                    >
                      {cost.count}
                    </p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
          <p class={size.text}>{@html skill.desc.replace(/\\n/g, '<br/>')}</p>
          {#if skill.sub}
            <p class="{size.title} font-bold pt-4">{skill.sub.name}</p>
            <p class={size.text}>
              {@html skill.sub.desc.replace(/\\n/g, '<br/>')}
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
{:else}
  <div
    class="flex flex-col gap-2 bg-opacity-95 p-2 rounded-xl text-white w-full h-fit 
    {withBackground ? 'bg-background' : ''}"
  >
    <div class="flex gap-2 items-center">
      <p class="{size.title} font-bold flex-1">{card.name}</p>
    </div>
    <div class="bg-black bg-opacity-60 p-2 rounded-xl">
      <div class="flex items-center pb-2">
        <div class="pr-3 flex-1 flex gap-2 items-center">
          <img
            src="/images/tcg/icons/types/{card.type}.png"
            alt={card.type}
            class={size.image}
            width="64"
            height="64"
          />
          <p class="{size.title} font-bold leading-tight">{tags[card.type]}</p>
        </div>
        <div class="flex">
          {#if card.skills.cost.length === 0}
            <div class="relative">
              <img src="/images/tcg/icons/same.png" alt="same" class={size.image} width="140" height="172" />
              <div class="w-full h-full flex items-center justify-center top-0 left-0 absolute">
                <p class="font-bold text-2xl text-white pt-[2px] pr-[1px]" style="-webkit-text-stroke: 1.2px black;">
                  0
                </p>
              </div>
            </div>
          {/if}
          {#each card.skills.cost as cost}
            <div class="relative">
              <img
                src="/images/tcg/icons/{cost.type}.png"
                alt={cost.type}
                class={size.element}
                width="140"
                height="172"
              />
              <div class="w-full h-full flex items-center justify-center top-0 left-0 absolute">
                <p class="font-bold text-2xl text-white pt-[2px] pr-[1px]" style="-webkit-text-stroke: 1.2px black;">
                  {cost.count}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      <p class={size.text}>{@html card.skills.desc.replace(/\\n/g, '<br/>')}</p>
    </div>
  </div>
{/if}
