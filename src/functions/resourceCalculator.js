import { itemList } from '../data/itemList';
import { talent as talentTemplate } from '../data/talent';
import { characters } from '../data/characters';

function getSuffix(val) {
  switch (val) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    case 4:
      return 'th';
  }
}

export function calculateMinimumAscension(level) {
  if (level > 80) {
    return 6;
  } else if (level > 70) {
    return 5;
  } else if (level > 60) {
    return 4;
  } else if (level > 50) {
    return 3;
  } else if (level > 40) {
    return 2;
  } else if (level > 20) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Heuristic for finding the amount of EXP materials needed to reach an amount of EXP.
 * Material usage is not guaranteed to be optimal (i.e. least amount of EXP wasted possible).
 * 
 * @typedef {Object} LevelResult
 * @property {ExpMaterialStack[]} materialsUsed
 * @property {number} expWasted
 * @property {number} mora
 * 
 * @typedef {Object} ExpMaterialStack
 * @property {ExpMaterial} material
 * @property {number} amount
 * 
 * @typedef {Object} ExpMaterial
 * @property {number} exp
 * 
 * @param {number} remainingExp 
 * @param {object[]} expMaterials 
 * @param {object[]} materialsUsed 
 * @param {number} materialIndex 
 * 
 * @returns {LevelResult} 
 */
function resolveExpMaterials(remainingExp, expMaterials, materialsUsed, materialIndex) {
  if (remainingExp <= 0) {
    return {materialsUsed: materialsUsed, expWasted: Math.abs(remainingExp)};
  }
  
  const expMaterial = expMaterials[materialIndex];
  const matExp = expMaterial.exp;
  const amountNeeded = remainingExp / matExp;
  const expMaterialIsLastMaterial = expMaterials[materialIndex + 1] == null;

  // If exp material is last material in the array, resolve the remaining EXP with this material
  // even if the EXP usage is not optimal.
  if (expMaterialIsLastMaterial) {
    const amountUsed = Math.ceil(amountNeeded);
    remainingExp -= matExp * amountUsed;
    materialsUsed.push({material: expMaterial, amount: amountUsed});
    
    return resolveExpMaterials(remainingExp, expMaterials, materialsUsed, materialIndex + 1);
  }
  else {
    const amountUsed = Math.floor(amountNeeded);
    
    if (amountUsed > 0) {
      remainingExp -= matExp * amountUsed;
      materialsUsed.push({material: expMaterial, amount: amountUsed});
    }
    
    return resolveExpMaterials(remainingExp, expMaterials, materialsUsed, materialIndex + 1);
  }
}

/**
 * Calculates what materials (including mora) are needed to reach an amount of level EXP for a weapon.
 * 
 * @param {number} exp
 * @param {ExpMaterial[]} expMaterials
 * 
 * @returns {LevelResult} 
*/
export function calculateWeaponLevelMaterials(exp, expMaterials) {
  const result = resolveExpMaterials(exp, expMaterials, [], 0);
  result.mora = Math.ceil(exp / 10 / 20) * 20;
  return result;
}

/**
 * @typedef WeaponAscensionResult
 * @property {Object[]} materials
 * @property {number} mora
 * @property {Array} unknownList
 * 
 * @param {Object} weapon 
 * @param {number} fromAscension 
 * @param {number} toAscension
 * 
 * @returns {WeaponAscensionResult}
 */
export function calculateWeaponAscensionMaterials(weapon, fromAscension, toAscension) {
  const result = weapon.ascension.slice(fromAscension, toAscension).reduce(
    (sum, ascension, index) => {
      const materials = sum.materials;
      const unknownList = sum.unknownList;

      if (ascension.mora === 0) {
        if (unknownList[index + fromAscension] === undefined) {
          unknownList[index + fromAscension] = ['Mora amount'];
        }
      }

      sum.mora += ascension.mora;

      for (const [i, stack] of ascension.items.entries()) {
        if (stack.item.id === 'unknown') {
          if (unknownList[index + fromAscension] === undefined) {
            unknownList[index + fromAscension] = [];
          }

          unknownList[index + fromAscension].push(`${i + 1}${getSuffix(i + 1)} material`);
        }

        if (materials[stack.item.id] === undefined) {
          materials[stack.item.id] = { item: stack.item, amount: 0, order: i };
        }
        materials[stack.item.id].amount += stack.amount;
      }

      return sum;
    },
    {
      mora: 0,
      materials: {},
      unknownList: []
    },
  );

  return result;
}

/**
 * Calculates what materials (including mora) are needed to reach an amount of level EXP for a character.
 * 
 * @param {number} exp
 * @param {ExpMaterial[]} expMaterials
 * 
 * @returns {LevelResult} 
*/
export function calculateCharacterLevelMaterials(exp, expMaterials) {
  const result = resolveExpMaterials(exp, expMaterials, [], 0);
  result.mora = (Math.floor(exp / 1000) * 1000) / 5;
  return result;
}

/**
 * @typedef CharacterAscensionResult
 * @property {{}} materials
 * @property {number} mora
 * @property {Array} unknownList
 * 
 * @param {Object} character 
 * @param {number} fromAscension 
 * @param {number} toAscension
 * 
 * @returns {CharacterAscensionResult}
 */
export function calculateCharacterAscensionMaterials(character, fromAscension, toAscension) {
  const result = character.ascension.slice(fromAscension, toAscension).reduce(
    (sum, ascension, index) => {
      const materials = sum.materials;
      const unknownList = sum.unknownList;

      if (ascension.mora === 0) {
        if (unknownList[index + fromAscension] === undefined) {
          unknownList[index + fromAscension] = ['Mora amount'];
        }
      }

      sum.mora += ascension.mora;

      for (const [i, stack] of ascension.items.entries()) {
        if (stack.item.id === 'unknown') {
          if (unknownList[index + fromAscension] === undefined) {
            unknownList[index + fromAscension] = [];
          }

          unknownList[index + fromAscension].push(`${i + 1}${getSuffix(i + 1)} material`);
        }

        if (materials[stack.item.id] === undefined) {
          materials[stack.item.id] = { item: stack.item, amount: 0, order: i };
        }
        materials[stack.item.id].amount += stack.amount;
      }

      return sum;
    },
    {
      mora: 0,
      materials: {},
      unknownList: []
    },
  );

  return result;
}

const talentMatOrderOffset = 0;
const bookOrderOffset = 100;
const bossMatOrderOffset = 1000;
const crownOrderOffset = 10000;
/**
 * @typedef CharacterTalentResult
 * @property {{}} materials
 * @property {number} mora
 * 
 * @typedef TalentLevels
 * @property {number} first
 * @property {number} second
 * @property {number} third
 * 
 * @param {Object} character 
 * @param {TalentLevels} fromLevels
 * @param {TalentLevels} toLevels
 * 
 * @returns {CharacterTalentResult}
 */
export function calculateTalentMaterials(character, fromLevels, toLevels) {
  let mora = 0;
  let items = {};

  Object.keys(fromLevels).forEach((talentName, i) => {
    talentTemplate.slice(fromLevels[talentName] - 1, toLevels[talentName] - 1).forEach((talent) => {
      mora += talent.mora;

      const currentBook = character.material.book[talent.book.rarity - 2];
      const currentMaterial = character.material.material[talent.commonMaterial.rarity - 1];

      if (items[currentBook.id] === undefined) {
        items[currentBook.id] = { item: currentBook, amount: 0, order: bookOrderOffset + i };
      }
      items[currentBook.id].amount += talent.book.amount;

      if (items[currentMaterial.id] === undefined) {
        items[currentMaterial.id] = { item: currentMaterial, amount: 0, order: talentMatOrderOffset + i };
      }
      items[currentMaterial.id].amount += talent.commonMaterial.amount;

      if (talent.bossMaterial > 0) {
        if (items[character.material.boss.id] === undefined) {
          items[character.material.boss.id] = { item: character.material.boss, amount: 0, order: bossMatOrderOffset + i };
        }
        items[character.material.boss.id].amount += talent.bossMaterial;
      }

      if (talent.eventMaterial > 0) {
        if (items['crown_of_insight'] === undefined) {
          items['crown_of_insight'] = { item: itemList.crown_of_insight, amount: 0, order: crownOrderOffset };
        }
        items['crown_of_insight'].amount += talent.eventMaterial;
      }
    });
  });

  return {items, mora};
}

/**
 * @param {Object} character 
 * @param {TalentLevels} fromLevels
 * @param {TalentLevels} toLevels
 * 
 * @returns {CharacterTalentResult}
 */
export function calculateTalentMaterialsTraveler(character, fromLevels, toLevels) {
  const mora = 0;
  let items = {};

  Object.keys(fromLevels).forEach((talentName, i) => {
    for (let i = fromLevels[talentName] - 1; i < toLevels[talentName] - 1; i++) {
      mora += talent[i].mora;

      let currentBook = character.material.book[i];
      let currentMaterial = character.material.material[i];

      if (character.id === characters.traveler_geo.id && talentName === 'first') {
        currentBook = character.material_atk.book[i];
        currentMaterial = character.material_atk.material[i];
      }

      const key = character.id === characters.traveler_geo.id && talentName === 'first' ? 'material_atk' : 'material';

      const bookAmount = talent[i].book.amount;
      const commonMaterial = talent[i].commonMaterial.amount;
      const bossMaterial = talent[i].bossMaterial;
      const eventMaterial = talent[i].eventMaterial;

      if (items[currentBook.id] === undefined) {
        items[currentBook.id] = { item: currentBook, amount: 0, order: bookOrderOffset + i };
      }
      items[currentBook.id].amount += bookAmount;

      if (items[currentMaterial.id] === undefined) {
        items[currentMaterial.id] = { item: currentMaterial, amount: 0, order: talentMatOrderOffset + i };
      }
      items[currentMaterial.id].amount += commonMaterial;

      if (bossMaterial > 0) {
        if (items[character[key].boss.id] === undefined) {
          items[character[key].boss.id] = { item: character[key].boss, amount: 0, order: bossMatOrderOffset + i };
        }
        items[character[key].boss.id].amount += bossMaterial;
      }

      if (eventMaterial > 0) {
        if (items['crown_of_insight'] === undefined) {
          items['crown_of_insight'] = { item: itemList.crown_of_insight, amount: 0, order: crownOrderOffset + i };
        }
        items['crown_of_insight'].amount += eventMaterial;
      }
    }
  });

  return {items, mora};
}