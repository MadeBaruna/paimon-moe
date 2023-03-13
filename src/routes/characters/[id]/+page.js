export async function load({ params, fetch }) {
  const { id } = params;

  const character = await import(`../../../data/characterData/${id}.json`);
  const build = await (await fetch(`/characters/build/${id}.json`)).json();

  return { id, character, build };
}
