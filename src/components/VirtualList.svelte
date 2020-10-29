<!-- Copyright (c) 2018 Rich Harris

Permission is hereby granted by the authors of this software, to any person, to use the software for any purpose, free of charge, including the rights to run, read, copy, change, distribute and sell it, and including usage rights to any patents the authors may hold on it, subject to the following conditions:

This license, or a link to its text, must be included with all copies of the software and any derivative works.

Any modification to the software submitted to the authors may be incorporated into the software under the terms of this license.

The software is provided "as is", without warranty of any kind, including but not limited to the warranties of title, fitness, merchantability and non-infringement. The authors have no obligation to provide support or updates for the software, and may not be held liable for any damages, claims or other liability arising from its use. -->
<script>
  import { onMount, tick } from 'svelte';
  // props
  export let items;
  export let height = '100%';
  export let itemHeight = undefined;
  let foo;
  // read-only, but visible to consumers via bind:start
  export let start = 0;
  export let end = 0;
  // local state
  let height_map = [];
  let rows;
  let viewport;
  let contents;
  let viewport_height = 0;
  let visible;
  let mounted;
  let top = 0;
  let bottom = 0;
  let average_height;
  $: visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  // whenever `items` changes, invalidate the current heightmap
  $: if (mounted) refresh(items, viewport_height, itemHeight);
  async function refresh(items, viewport_height, itemHeight) {
    const { scrollTop } = viewport;
    await tick(); // wait until the DOM is up to date
    let content_height = top - scrollTop;
    let i = start;
    while (content_height < viewport_height && i < items.length) {
      let row = rows[i - start];
      if (!row) {
        end = i + 1;
        await tick(); // render the newly visible row
        row = rows[i - start];
      }
      const row_height = (height_map[i] = itemHeight || row.offsetHeight);
      content_height += row_height;
      i += 1;
    }
    end = i;
    const remaining = items.length - end;
    average_height = (top + content_height) / end;
    bottom = remaining * average_height;
    height_map.length = items.length;
  }
  async function handle_scroll() {
    const { scrollTop } = viewport;
    const old_start = start;
    for (let v = 0; v < rows.length; v += 1) {
      height_map[start + v] = itemHeight || rows[v].offsetHeight;
    }
    let i = 0;
    let y = 0;
    while (i < items.length) {
      const row_height = height_map[i] || average_height;
      if (y + row_height > scrollTop) {
        start = i;
        top = y;
        break;
      }
      y += row_height;
      i += 1;
    }
    while (i < items.length) {
      y += height_map[i] || average_height;
      i += 1;
      if (y > scrollTop + viewport_height) break;
    }
    end = i;
    const remaining = items.length - end;
    average_height = y / end;
    while (i < items.length) height_map[i++] = average_height;
    bottom = remaining * average_height;
    // prevent jumping if we scrolled up into unknown territory
    if (start < old_start) {
      await tick();
      let expected_height = 0;
      let actual_height = 0;
      for (let i = start; i < old_start; i += 1) {
        if (rows[i - start]) {
          expected_height += height_map[i];
          actual_height += itemHeight || rows[i - start].offsetHeight;
        }
      }
      const d = actual_height - expected_height;
      viewport.scrollTo(0, scrollTop + d);
    }
    // TODO if we overestimated the space these
    // rows would occupy we may need to add some
    // more. maybe we can just call handle_scroll again?
  }
  // trigger initial refresh
  onMount(() => {
    rows = contents.getElementsByTagName('svelte-virtual-list-row');
    mounted = true;
  });
</script>

<style>
  svelte-virtual-list-viewport {
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: block;
  }
  svelte-virtual-list-contents,
  svelte-virtual-list-row {
    display: block;
  }
  svelte-virtual-list-row {
    overflow: hidden;
  }
</style>

<svelte-virtual-list-viewport
  bind:this={viewport}
  bind:offsetHeight={viewport_height}
  on:scroll={handle_scroll}
  style="height: {height};">
  <svelte-virtual-list-contents bind:this={contents} style="padding-top: {top}px; padding-bottom: {bottom}px;">
    {#each visible as row (row.index)}
      <svelte-virtual-list-row>
        <slot item={row.data} index={row.index}>Missing template</slot>
      </svelte-virtual-list-row>
    {/each}
  </svelte-virtual-list-contents>
</svelte-virtual-list-viewport>
