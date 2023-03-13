export async function load({ fetch }) {
  const promoted = ['barbara', 'collei', 'bennett'];
  const builds = {};

  for (const p of promoted) {
    const response = await fetch(`/characters/build/${p}.json`);
    const b = await response.json();
    builds[p] = b;
  }

  return { builds };
}
