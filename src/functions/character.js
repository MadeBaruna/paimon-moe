import { getAccountPrefix } from "../stores/account";
import { readSave, updateSave } from "../stores/saveManager";

const bannerCategories = ['beginners', 'standard', 'character-event', 'weapon-event'];

function readLocalData(path) {
  const prefix = getAccountPrefix();
  const data = readSave(`${prefix}${path}`);
  if (data !== null) {
    const counterData = JSON.parse(data);
    const pullData = counterData.pulls || [];

    return pullData;
  }

  return null;
}

export function processCharacters() {
  const characters = {};
  for (const id of bannerCategories) {
    const data = readLocalData(`wish-counter-${id}`);
    if (data === null) continue;

    for (const item of data) {
      if (item.type === 'character') {
        if (characters[item.id] === undefined) {
          characters[item.id] = 0;
        }

        characters[item.id]++;
      }
    }
  }

  const prefix = getAccountPrefix();
  updateSave(`${prefix}characters`, JSON.stringify(characters));
}