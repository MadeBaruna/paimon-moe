<script>
  import { mdiCompare, mdiMinus, mdiPlus } from '@mdi/js';
  import { onMount, tick, createEventDispatcher, getContext } from 'svelte';
  import Detail from './_detail.svelte';
  import CardButton from './_cardButton.svelte';
  import DetailModal from './_detailModal.svelte';
  import { t } from 'svelte-i18n';

  export let tags;
  export let card;
  export let compare;
  export let count = 0;
  export let index = 0;
  export let showDetail = false;
  export let smallScreen = false;
  export let draggable = false;

  const dispatch = createEventDispatcher();
  const { open, close } = getContext('simple-modal');

  const sizes = {
    base: {
      card: 'w-32',
      hp: 'w-8',
      hpVal: 'text-2xl',
      element: 'w-10',
      elementVal: 'text-2xl',
      energyStar: 'w-6',
      energyStarMargin: '-mb-1',
      energyStarPos: 'top-2 -right-3',
    },
    small: {
      card: 'w-24',
      hp: 'w-6',
      hpVal: 'text-xl',
      element: 'w-8',
      elementVal: 'text-xl',
      energyStar: 'w-6',
      energyStarMargin: '-mb-1',
      energyStarPos: 'top-2 -right-3',
    },
    large: {
      card: 'w-64',
      hp: 'w-10',
      hpVal: 'text-3xl',
      element: 'w-12',
      elementVal: 'text-3xl',
      energyStar: 'w-8',
      energyStarMargin: '-mb-1',
      energyStarPos: 'top-5 -right-4',
    },
  };
  export let size = 'base';

  let loaded = false;

  let nameLabel;
  let smallName;
  let isDragging = false;
  let isDragHovered = false;
  let isHovered = false;
  let x, y, width, height;
  let lastMoveEvent;

  let cardContainer;
  let detailContainer;

  async function adjustNameSize() {
    if (nameLabel === undefined) return;
    smallName = false;
    await tick();
    const height = nameLabel.clientHeight;
    smallName = height > 40;
  }

  async function mouseOver(event) {
    if (!showDetail) return;

    let bounds = cardContainer.getBoundingClientRect();

    x = event.clientX - bounds.left + 10;
    y = event.clientY - bounds.top + 20;
    isHovered = true;

    await tick();

    const detailRect = detailContainer.getBoundingClientRect();
    width = detailRect.width;
    height = detailRect.height;

    mouseMove(event);
  }

  function mouseMove(event) {
    lastMoveEvent = event;

    let bounds = cardContainer.getBoundingClientRect();
    let curX = event.clientX - bounds.left + 20;
    let curY = event.clientY - bounds.top + 5;

    const detailRectRightX = event.clientX + width + 40;
    const detailRectBottomY = event.clientY + height + 20;

    if (detailRectRightX >= window.innerWidth) {
      curX -= width + 30;
    }

    if (detailRectBottomY >= window.innerHeight) {
      curY = window.innerHeight - height - bounds.top - 5;
    }

    x = curX;
    y = curY;
  }

  function mouseLeave() {
    lastMoveEvent = undefined;
    isHovered = false;
  }

  async function refreshPos() {
    if (!loaded || lastMoveEvent === undefined) return;
    await mouseOver(lastMoveEvent);
    mouseMove(lastMoveEvent);
  }

  async function setCompare() {
    dispatch('compare');
  }

  async function addToDeck() {
    dispatch('addToDeck');
  }

  async function removeFromDeck() {
    dispatch('removeFromDeck');
  }

  function showDetailModal() {
    open(
      DetailModal,
      {
        card,
        compare,
        showCompare,
        count,
        addToDeck,
        removeFromDeck,
        close,
      },
      {
        closeButton: false,
        styleWindow: {
          background: '#25294A',
          width: 'fit-content',
          'max-width': showCompare ? '1280px' : '860px',
        },
        styleContent: { padding: 0 },
      },
    );
  }

  function handleDragStart(e) {
    isHovered = false;
    isDragging = true;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
  }

  function handleDragEnd() {
    isDragging = false;
  }

  function handleDragEnter() {
    isDragHovered = true;
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragLeave() {
    isDragHovered = false;
  }

  function handleDrop(e) {
    e.stopPropagation();
    isDragHovered = false;
    const sourceIndex = Number(e.dataTransfer.getData('text/plain'));
    dispatch('swapOrder', { from: index, to: sourceIndex });
  }

  onMount(() => {
    adjustNameSize();
    loaded = true;

    if (draggable) {
      cardContainer.addEventListener('dragstart', handleDragStart);
      cardContainer.addEventListener('dragend', handleDragEnd);
      cardContainer.addEventListener('dragenter', handleDragEnter);
      cardContainer.addEventListener('dragleave', handleDragLeave);
      cardContainer.addEventListener('dragover', handleDragOver);
      cardContainer.addEventListener('drop', handleDrop);
    }
  });

  $: card.name, adjustNameSize();
  $: showCompare = compare !== undefined;
  $: compare, refreshPos();
</script>

<div
  class="group relative {draggable ? 'cursor-move' : 'cursor-pointer'} {sizes[size].card}"
  on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
  on:mousemove={mouseMove}
  on:focus={mouseOver}
  bind:this={cardContainer}
>
  <div class="relative">
    <img
      src="/images/tcg/{card.id}.png"
      alt={card.name}
      class="w-full rounded-xl duration-100 {isDragHovered ? 'ring-4 ring-primary rounded-xl' : ''} {isDragging
        ? 'opacity-40'
        : ''}"
      loading="lazy"
      width="420"
      height="720"
      on:click={showDetailModal}
    />
    {#if count}
      <div class="absolute bottom-0 right-0">
        <div class="relative -mb-[1px] -mr-[1px]">
          <img src="/images/tcg/icons/counter.png" alt="counter" width="68" height="68" class="w-8 h-8" />
          <div class="w-full h-full flex items-center justify-center top-0 left-0 absolute">
            <p
              class="font-bold text-white pt-[2px] pr-[1px] {sizes[size].elementVal}"
              style="-webkit-text-stroke: 1.2px black;"
            >
              {count}
            </p>
          </div>
        </div>
      </div>
    {/if}
    {#if size !== 'large'}
      <div class="group-hover:hidden group-hover:md:flex  absolute hidden bottom-1 left-1 flex-col gap-1">
        {#if count > 0}
          <CardButton
            icon={mdiMinus}
            label={count > 1 ? $t('tcg.remove') : $t('tcg.delete')}
            on:click={removeFromDeck}
          />
          {#if card.type !== 'character'}
            <CardButton icon={mdiPlus} label={$t('tcg.addToDeck')} on:click={addToDeck} />
          {/if}
        {:else}
          <CardButton icon={mdiPlus} label={$t('tcg.addToDeck')} on:click={addToDeck} />
        {/if}
        <CardButton icon={mdiCompare} label={$t('tcg.compare')} on:click={setCompare} />
      </div>
    {/if}
    {#if isHovered}
      <div
        class="absolute z-50 flex {showCompare ? 'w-[860px]' : 'w-[600px]'}"
        style="top: {y}px; left: {x}px;"
        bind:this={detailContainer}
      >
        <Detail {tags} {card} {smallScreen} />
        {#if showCompare}
          <div class="w-2" />
          <Detail {tags} card={compare} {smallScreen} />
        {/if}
      </div>
    {/if}
  </div>
  {#if size !== 'large'}
    <p
      bind:this={nameLabel}
      class="text-white text-center leading-none pt-1 min-h-[32px] {smallName ? 'text-xs' : 'text-sm'}"
    >
      {card.name}
    </p>
  {/if}
  {#if card.type === 'character'}
    <div class="absolute top-0 left-0 -mx-1 -my-2 z-10">
      <img src="/images/tcg/icons/hp.png" alt="HP" class={sizes[size].hp} width="140" height="172" />
      <div class="w-full h-full flex items-center justify-center top-0 left-0 absolute">
        <p class="font-bold text-white pt-1 {sizes[size].hpVal}" style="-webkit-text-stroke: 1.2px black;">
          {card.hp}
        </p>
      </div>
    </div>
    <div class="absolute {sizes[size].energyStarPos}">
      {#each Array(card.energy) as _}
        <img
          src="/images/tcg/icons/energy_card.png"
          alt="Energy"
          class="{sizes[size].energyStar} {sizes[size].energyStarMargin}"
          width="100"
          height="100"
        />
      {/each}
    </div>
  {:else}
    <div class="absolute top-0 left-0 -mx-2 -my-2 flex">
      {#each card.skills.cost.length > 0 ? card.skills.cost : [{}] as cost}
        <div class="relative">
          <img
            src="/images/tcg/icons/{cost.type || 'same'}.png"
            alt={cost.type}
            class={sizes[size].element}
            width="140"
            height="172"
          />
          <div class="w-full h-full flex items-center justify-center top-0 left-0 absolute">
            <p
              class="font-bold text-white pt-[2px] pr-[1px] {sizes[size].elementVal}"
              style="-webkit-text-stroke: 1.2px black;"
            >
              {cost.count || 0}
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
