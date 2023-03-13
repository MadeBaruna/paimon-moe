import data from '../../../data/artifacts/en.json';
import { builds } from '../../../data/build';

function getCharacter(artifactId) {
  const collection2 = {};
  const collection4 = {};
  const collectionPiece = {
    sands: {},
    goblet: {},
    circlet: {},
  };

  const chars = Object.entries(builds);
  for (const [charId, char] of chars) {
    const roles = Object.entries(char.roles);
    for (const [roleName, role] of roles) {
      if (!role.recommended) continue;

      let found2 = false;
      let found4 = false;
      for (const artifact of role.artifacts) {
        if (
          artifact.find((e) => {
            if (e === '+18%_atk_set') {
              return [
                'gladiators_finale',
                'shimenawas_reminiscence',
                'vermillion_hereafter',
                'echoes_of_an_offering',
              ].includes(artifactId);
            } else if (e === '+20%_energy_recharge') {
              return ['emblem_of_severed_fate', 'the_exile', 'scholar'].includes(artifactId);
            } else if (e === '+25%_physical_dmg') {
              return ['bloodstained_chivalry', 'pale_flame'].includes(artifactId);
            }

            return e === artifactId;
          })
        ) {
          if (artifact.length === 1) found4 = true;
          else found2 = true;

          for (const piece of ['sands', 'goblet', 'circlet']) {
            for (const stat of role.mainStats[piece]) {
              let statName = stat;
              if (stat === 'DMG') statName = 'Crit DMG';
              if (collectionPiece[piece][statName] === undefined) collectionPiece[piece][statName] = {};
              collectionPiece[piece][statName][charId] = true;
            }
          }
        }
      }

      if (found2) {
        if (collection2[charId] === undefined) {
          collection2[charId] = {
            id: charId,
            roles: [],
          };
        }

        collection2[charId].roles.push(roleName);
      }

      if (found4) {
        if (collection4[charId] === undefined) {
          collection4[charId] = {
            id: charId,
            roles: [],
          };
        }

        collection4[charId].roles.push(roleName);
      }
    }
  }

  return {
    two: Object.values(collection2).sort((a, b) => a.id.localeCompare(b.id)),
    four: Object.values(collection4).sort((a, b) => a.id.localeCompare(b.id)),
    pieces: collectionPiece,
  };
}

export async function load({ params }) {
  const { id } = params;
  const artifact = data[id];
  const recommendedCharacter = getCharacter(id);

  return { id, artifact, recommendedCharacter };
}
