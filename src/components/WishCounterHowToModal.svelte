<script>
  import { mdiStar } from '@mdi/js';
  import Icon from './Icon.svelte';
</script>

<div>
  <h1 class="font-display text-white text-xl mb-4">How to use Wish Counter</h1>
  <div class="text-white p-2 bg-background rounded-xl">
    <p class="mb-2">After you do 1 pull Wish:</p>
    <p class="mb-2">
      Press
      <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center">+1</b>
      when you get
      <span class="inline-flex items-center">3
        <Icon path={mdiStar} size={0.7} /></span>
    </p>
    <p class="mb-2">
      Press
      <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center">Get 4
        <Icon path={mdiStar} size={0.7} /></b>
      when you get
      <span class="inline-flex items-center">4
        <Icon path={mdiStar} size={0.7} /></span>
    </p>
    <p class="mb-2">
      Press
      <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center">Get 5
        <Icon path={mdiStar} size={0.7} /></b>
      when you get
      <span class="inline-flex items-center">5
        <Icon path={mdiStar} size={0.7} /></span>
    </p>
    <p class="text-gray-400">
      It will automatically add the lifetime pulls,
      <span class="inline-flex items-center">5
        <Icon path={mdiStar} size={0.7} /></span>
      and
      <span class="inline-flex items-center">4
        <Icon path={mdiStar} size={0.7} /></span>
      pity
    </p>
    <p class="text-gray-400">
      When the
      <span class="inline-flex items-center">4
        <Icon path={mdiStar} size={0.7} /></span>
      pity reach 10, it will automatically reset to 0
    </p>
    <p class="text-gray-400">
      When the
      <span class="inline-flex items-center">5
        <Icon path={mdiStar} size={0.7} /></span>
      pity reach 90, it will automatically reset to 0
    </p>
  </div>
  <div class="text-white p-2 bg-background rounded-xl mt-4">
    For when you do 10 pulls Wish, press the
    <b class="rounded-lg px-2 py-1 border-white border inline-flex items-center">+10</b>
    button,
    <span class="text-gray-400">but the pity counter won't be accurate, because there is no way to tell when the drop
      occur (maybe you got it on the 1st or even the 10th). To make the counter still accurate, you need to check it on
      the history table and add it 1 by 1 like you do 1 pull Wish.</span>
  </div>
</div>
