import data from '../../../data/weapons/en.json';
import { weaponList } from '../../../data/weaponList.js';
import { builds } from '../../../data/build';

function getCharacter(weaponId) {
  const collection = {};
  const chars = Object.entries(builds);
  for (const [charId, char] of chars) {
    const roles = Object.entries(char.roles);
    for (const [roleName, role] of roles) {
      if (!role.recommended) continue;

      let found = false;
      for (const weapon of role.weapons) {
        if (weapon.id === weaponId) {
          found = true;
          break;
        }
      }

      if (found) {
        if (collection[charId] === undefined) {
          collection[charId] = {
            id: charId,
            roles: [],
          };
        }

        collection[charId].roles.push(roleName);
      }
    }
  }

  return Object.values(collection).sort((a, b) => a.id.localeCompare(b.id));
}

export async function load({ params }) {
  const { id } = params;
  const weapon = data[id];
  const ascensions = weaponList[id].ascension;
  const source = weaponList[id].source;
  const recommendedCharacter = getCharacter(id);

  return { id, weapon, recommendedCharacter, source, ascensions };
}
