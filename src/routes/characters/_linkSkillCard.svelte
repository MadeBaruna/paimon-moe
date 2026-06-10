<script>
  import { tick } from "svelte";

  /** @type{{ title: string, desc: string }} */
  export let data;
  let description = data.desc.replace(/\\n/g, '<br/>').replace(/·/g, '- ');
  let title = data.title;
  const _description = description;
  const _title = data.title;

  /** @param {string} text */
  export async function highlight(text) {
    description = _description;
    title = _title;
    description = description.replaceAll(text, (str) => `<span class="text-highlight">${str}</span>`);
    title = title.replaceAll(text, (str) => `<span class="text-highlight">${str}</span>`);
    await tick();
    document.querySelector('span.text-highlight').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
</script>

<div class="py-4 rounded-xl bg-item flex flex-col mb-2">
  <div class="flex items-start px-4">
    <div>
      <p class="font-black font-display text-xl">{@html title}</p>
      <p class="skill-description">{@html description}</p>
    </div>
  </div>
</div>

<style lang="postcss">
:global(button[data-link]):hover {
  text-decoration: underline;
}

:global(.text-highlight) {
  animation: blink 1000ms ease-in-out forwards; 
  --color: #FFD78050;
}

@keyframes blink {
  20%, 60%, 100% {
    background-color: var(--color);
  }

  0%, 40%, 80% {
    background-color: transparent;
  }
}
</style>
