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
 * @param {ExpMaterialStack[]} materialsUsed
 * @param {number} materialIndex
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