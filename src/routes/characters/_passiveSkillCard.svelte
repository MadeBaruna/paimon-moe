<script>
  export let id;
  export let image;
  export let data;
  export let fade = false;

  const description = data.description.replace(/\\n/g, '<br/>').replace(/·/g, '- ');
  const name = data.name;
</script>

<div class="py-4 rounded-xl bg-item flex flex-col mb-4" style="{fade ? 'filter: grayscale(30%);' : ''}">
  <div class="flex mb-2 items-start px-4">
    <img src="/images/skills/{id}/{image}.png" alt={name} class="w-16 h-16 mr-4" />
    <div>
      <p class="font-black font-display text-xl">{name}</p>
      <p class="skill-description">{@html description}</p>
    </div>
  </div>
</div>
