import locations from '../../data/fishing/location.json';

let spots = {
  mondstadt: [],
  liyue: [],
  inazuma: [],
  enkanomiya: [],
  chasm: [],
  sumeru: [],
};
for (const [id, location] of Object.entries(locations)) {
  spots[location.location].push({ ...location, id });
}

export async function load() {
  return { spots };
}
