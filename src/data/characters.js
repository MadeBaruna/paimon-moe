import { itemList } from './itemList';

import { elements } from './elements';
import { weapons } from './weapons';

export const characters = {
  albedo: {
    name: 'Albedo',
    id: 'albedo',
    rarity: 5,
    element: elements.geo,
    weapon: weapons.sword,
    sex: 'male',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.prithiva_topaz_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.cecilia, amount: 3 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 3 },
          { item: itemList.basalt_pillar, amount: 2 },
          { item: itemList.cecilia, amount: 10 },
          { item: itemList.divining_scroll, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 6 },
          { item: itemList.basalt_pillar, amount: 4 },
          { item: itemList.cecilia, amount: 20 },
          { item: itemList.sealed_scroll, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 3 },
          { item: itemList.basalt_pillar, amount: 8 },
          { item: itemList.cecilia, amount: 30 },
          { item: itemList.sealed_scroll, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 6 },
          { item: itemList.basalt_pillar, amount: 12 },
          { item: itemList.cecilia, amount: 45 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_gemstone, amount: 6 },
          { item: itemList.basalt_pillar, amount: 20 },
          { item: itemList.cecilia, amount: 60 },
          { item: itemList.forbidden_curse_scroll, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12296, atk: 233, def: 815 },
    material: {
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      boss: itemList.tusk_of_monoceros_caeli,
    },
  },
  aloy: {
    name: 'Aloy',
    id: 'aloy',
    rarity: 5,
    element: elements.cryo,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'wandering heroine',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.crystalline_bloom, amount: null },
          { item: itemList.crystal_marrow, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.crystalline_bloom, amount: 2 },
          { item: itemList.crystal_marrow, amount: 10 },
          { item: itemList.spectral_husk, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.crystalline_bloom, amount: 4 },
          { item: itemList.crystal_marrow, amount: 20 },
          { item: itemList.spectral_heart, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.crystalline_bloom, amount: 8 },
          { item: itemList.crystal_marrow, amount: 30 },
          { item: itemList.spectral_heart, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.crystalline_bloom, amount: 12 },
          { item: itemList.crystal_marrow, amount: 45 },
          { item: itemList.spectral_nucleus, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.crystalline_bloom, amount: 20 },
          { item: itemList.crystal_marrow, amount: 60 },
          { item: itemList.spectral_nucleus, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9108, atk: 311, def: 586 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      boss: itemList.molten_moment,
    },
  },
  amber: {
    name: 'Amber',
    id: 'amber',
    rarity: 4,
    element: elements.pyro,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.small_lamp_grass, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.everflame_seed, amount: 2 },
          { item: itemList.small_lamp_grass, amount: 10 },
          { item: itemList.firm_arrowhead, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.everflame_seed, amount: 4 },
          { item: itemList.small_lamp_grass, amount: 20 },
          { item: itemList.sharp_arrowhead, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.everflame_seed, amount: 8 },
          { item: itemList.small_lamp_grass, amount: 30 },
          { item: itemList.sharp_arrowhead, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.everflame_seed, amount: 12 },
          { item: itemList.small_lamp_grass, amount: 45 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.everflame_seed, amount: 20 },
          { item: itemList.small_lamp_grass, amount: 60 },
          { item: itemList.weathered_arrowhead, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 8806, atk: 208, def: 559 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      boss: itemList.dvalins_sigh,
    },
  },
  barbara: {
    name: 'Barbara',
    id: 'barbara',
    rarity: 4,
    element: elements.hydro,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.varunada_lazurite_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.philanemo_mushroom, amount: 3 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 3 },
          { item: itemList.cleansing_heart, amount: 2 },
          { item: itemList.philanemo_mushroom, amount: 10 },
          { item: itemList.divining_scroll, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 6 },
          { item: itemList.cleansing_heart, amount: 4 },
          { item: itemList.philanemo_mushroom, amount: 20 },
          { item: itemList.sealed_scroll, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 3 },
          { item: itemList.cleansing_heart, amount: 8 },
          { item: itemList.philanemo_mushroom, amount: 30 },
          { item: itemList.sealed_scroll, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 6 },
          { item: itemList.cleansing_heart, amount: 12 },
          { item: itemList.philanemo_mushroom, amount: 45 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_gemstone, amount: 6 },
          { item: itemList.cleansing_heart, amount: 20 },
          { item: itemList.philanemo_mushroom, amount: 60 },
          { item: itemList.forbidden_curse_scroll, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9110, atk: 148, def: 623 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      boss: itemList.ring_of_boreas,
    },
  },
  beidou: {
    name: 'Beidou',
    id: 'beidou',
    rarity: 4,
    element: elements.electro,
    weapon: weapons.claymore,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.noctilucous_jade, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.lightning_prism, amount: 2 },
          { item: itemList.noctilucous_jade, amount: 10 },
          { item: itemList.treasure_hoarder_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.lightning_prism, amount: 4 },
          { item: itemList.noctilucous_jade, amount: 20 },
          { item: itemList.silver_raven_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.lightning_prism, amount: 8 },
          { item: itemList.noctilucous_jade, amount: 30 },
          { item: itemList.silver_raven_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.lightning_prism, amount: 12 },
          { item: itemList.noctilucous_jade, amount: 45 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.lightning_prism, amount: 20 },
          { item: itemList.noctilucous_jade, amount: 60 },
          { item: itemList.golden_raven_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12146, atk: 210, def: 603 },
    material: {
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      boss: itemList.dvalins_sigh,
    },
  },
  bennett: {
    name: 'Bennett',
    id: 'bennett',
    rarity: 4,
    element: elements.pyro,
    weapon: weapons.sword,
    sex: 'male',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.everflame_seed, amount: 2 },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.treasure_hoarder_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.everflame_seed, amount: 4 },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.silver_raven_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.everflame_seed, amount: 8 },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.silver_raven_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.everflame_seed, amount: 12 },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.everflame_seed, amount: 20 },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.golden_raven_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11539, atk: 178, def: 718 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      boss: itemList.dvalins_plume,
    },
  },
  chongyun: {
    name: 'Chongyun',
    id: 'chongyun',
    rarity: 4,
    element: elements.cryo,
    weapon: weapons.claymore,
    sex: 'male',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.cor_lapis, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 2 },
          { item: itemList.cor_lapis, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 4 },
          { item: itemList.cor_lapis, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 8 },
          { item: itemList.cor_lapis, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 12 },
          { item: itemList.cor_lapis, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 20 },
          { item: itemList.cor_lapis, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10223, atk: 208, def: 603 },
    material: {
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.dvalins_sigh,
    },
  },
  diluc: {
    name: 'Diluc',
    id: 'diluc',
    rarity: 5,
    element: elements.pyro,
    weapon: weapons.claymore,
    sex: 'male',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.small_lamp_grass, amount: 3 },
          { item: itemList.recruits_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.everflame_seed, amount: 2 },
          { item: itemList.small_lamp_grass, amount: 10 },
          { item: itemList.recruits_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.everflame_seed, amount: 4 },
          { item: itemList.small_lamp_grass, amount: 20 },
          { item: itemList.sergeants_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.everflame_seed, amount: 8 },
          { item: itemList.small_lamp_grass, amount: 30 },
          { item: itemList.sergeants_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.everflame_seed, amount: 12 },
          { item: itemList.small_lamp_grass, amount: 45 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.everflame_seed, amount: 20 },
          { item: itemList.small_lamp_grass, amount: 60 },
          { item: itemList.lieutenants_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12068, atk: 311, def: 729 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      boss: itemList.dvalins_plume,
    },
  },
  diona: {
    name: 'Diona',
    id: 'diona',
    rarity: 4,
    element: elements.cryo,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.calla_lily, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 2 },
          { item: itemList.calla_lily, amount: 10 },
          { item: itemList.firm_arrowhead, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 4 },
          { item: itemList.calla_lily, amount: 20 },
          { item: itemList.sharp_arrowhead, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 8 },
          { item: itemList.calla_lily, amount: 30 },
          { item: itemList.sharp_arrowhead, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 12 },
          { item: itemList.calla_lily, amount: 45 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 20 },
          { item: itemList.calla_lily, amount: 60 },
          { item: itemList.weathered_arrowhead, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 8907, atk: 198, def: 559 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      boss: itemList.shard_of_a_foul_legacy,
    },
  },
  eula: {
    name: 'Eula',
    id: 'eula',
    rarity: 5,
    element: elements.cryo,
    weapon: weapons.claymore,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.dandelion_seed, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.crystalline_bloom, amount: 2 },
          { item: itemList.dandelion_seed, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.crystalline_bloom, amount: 4 },
          { item: itemList.dandelion_seed, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.crystalline_bloom, amount: 8 },
          { item: itemList.dandelion_seed, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.crystalline_bloom, amount: 12 },
          { item: itemList.dandelion_seed, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.crystalline_bloom, amount: 20 },
          { item: itemList.dandelion_seed, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12296, atk: 318, def: 698 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.dragon_lords_crown,
    },
  },
  fischl: {
    name: 'Fischl',
    id: 'fischl',
    rarity: 4,
    element: elements.electro,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.small_lamp_grass, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.lightning_prism, amount: 2 },
          { item: itemList.small_lamp_grass, amount: 10 },
          { item: itemList.firm_arrowhead, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.lightning_prism, amount: 4 },
          { item: itemList.small_lamp_grass, amount: 20 },
          { item: itemList.sharp_arrowhead, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.lightning_prism, amount: 8 },
          { item: itemList.small_lamp_grass, amount: 30 },
          { item: itemList.sharp_arrowhead, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.lightning_prism, amount: 12 },
          { item: itemList.small_lamp_grass, amount: 45 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.lightning_prism, amount: 20 },
          { item: itemList.small_lamp_grass, amount: 60 },
          { item: itemList.weathered_arrowhead, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 8553, atk: 227, def: 553 },
    material: {
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      boss: itemList.spirit_locket_of_boreas,
    },
  },
  ganyu: {
    name: 'Ganyu',
    id: 'ganyu',
    rarity: 5,
    element: elements.cryo,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.qingxin, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 2 },
          { item: itemList.qingxin, amount: 10 },
          { item: itemList.whopperflower_nectar, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 4 },
          { item: itemList.qingxin, amount: 20 },
          { item: itemList.shimmering_nectar, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 8 },
          { item: itemList.qingxin, amount: 30 },
          { item: itemList.shimmering_nectar, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 12 },
          { item: itemList.qingxin, amount: 45 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 20 },
          { item: itemList.qingxin, amount: 60 },
          { item: itemList.energy_nectar, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9108, atk: 311, def: 586 },
    material: {
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      boss: itemList.shadow_of_the_warrior,
    },
  },
  hu_tao: {
    name: 'Hu Tao',
    id: 'hu_tao',
    rarity: 5,
    element: elements.pyro,
    weapon: weapons.polearm,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.silk_flower, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.juvenile_jade, amount: 2 },
          { item: itemList.silk_flower, amount: 10 },
          { item: itemList.whopperflower_nectar, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.juvenile_jade, amount: 4 },
          { item: itemList.silk_flower, amount: 20 },
          { item: itemList.shimmering_nectar, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.juvenile_jade, amount: 8 },
          { item: itemList.silk_flower, amount: 30 },
          { item: itemList.shimmering_nectar, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.juvenile_jade, amount: 12 },
          { item: itemList.silk_flower, amount: 45 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.juvenile_jade, amount: 20 },
          { item: itemList.silk_flower, amount: 60 },
          { item: itemList.energy_nectar, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 14459, atk: 99, def: 815 },
    material: {
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      boss: itemList.shard_of_a_foul_legacy,
    },
  },
  jean: {
    name: 'Jean',
    id: 'jean',
    rarity: 5,
    element: elements.anemo,
    weapon: weapons.sword,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.vayuda_turquoise_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.dandelion_seed, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 3 },
          { item: itemList.hurricane_seed, amount: 2 },
          { item: itemList.dandelion_seed, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 6 },
          { item: itemList.hurricane_seed, amount: 4 },
          { item: itemList.dandelion_seed, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 3 },
          { item: itemList.hurricane_seed, amount: 8 },
          { item: itemList.dandelion_seed, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 6 },
          { item: itemList.hurricane_seed, amount: 12 },
          { item: itemList.dandelion_seed, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_gemstone, amount: 6 },
          { item: itemList.hurricane_seed, amount: 20 },
          { item: itemList.dandelion_seed, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 13662, atk: 222, def: 715 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.dvalins_plume,
    },
  },
  kaeya: {
    name: 'Kaeya',
    id: 'kaeya',
    rarity: 4,
    element: elements.cryo,
    weapon: weapons.sword,
    sex: 'male',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.calla_lily, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 2 },
          { item: itemList.calla_lily, amount: 10 },
          { item: itemList.treasure_hoarder_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 4 },
          { item: itemList.calla_lily, amount: 20 },
          { item: itemList.silver_raven_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 8 },
          { item: itemList.calla_lily, amount: 30 },
          { item: itemList.silver_raven_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 12 },
          { item: itemList.calla_lily, amount: 45 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 20 },
          { item: itemList.calla_lily, amount: 60 },
          { item: itemList.golden_raven_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10830, atk: 208, def: 737 },
    material: {
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      boss: itemList.spirit_locket_of_boreas,
    },
  },
  kaedehara_kazuha: {
    name: 'Kaedehara Kazuha',
    id: 'kaedehara_kazuha',
    rarity: 5,
    element: elements.anemo,
    weapon: weapons.sword,
    sex: 'male',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.vayuda_turquoise_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.sea_ganoderma, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 3 },
          { item: itemList.marionette_core, amount: 2 },
          { item: itemList.sea_ganoderma, amount: 10 },
          { item: itemList.treasure_hoarder_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 6 },
          { item: itemList.marionette_core, amount: 4 },
          { item: itemList.sea_ganoderma, amount: 20 },
          { item: itemList.silver_raven_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 3 },
          { item: itemList.marionette_core, amount: 8 },
          { item: itemList.sea_ganoderma, amount: 30 },
          { item: itemList.silver_raven_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 6 },
          { item: itemList.marionette_core, amount: 12 },
          { item: itemList.sea_ganoderma, amount: 45 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_gemstone, amount: 6 },
          { item: itemList.marionette_core, amount: 20 },
          { item: itemList.sea_ganoderma, amount: 60 },
          { item: itemList.golden_raven_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 13348, atk: 297, def: 807 },
    material: {
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      boss: itemList.gilded_scale,
    },
  },
  kamisato_ayaka: {
    name: 'Kamisato Ayaka',
    id: 'kamisato_ayaka',
    rarity: 5,
    element: elements.cryo,
    weapon: weapons.sword,
    sex: 'female',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.sakura_bloom, amount: 3 },
          { item: itemList.old_handguard, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.perpetual_heart, amount: 2 },
          { item: itemList.sakura_bloom, amount: 10 },
          { item: itemList.old_handguard, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.perpetual_heart, amount: 4 },
          { item: itemList.sakura_bloom, amount: 20 },
          { item: itemList.kageuchi_handguard, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.perpetual_heart, amount: 8 },
          { item: itemList.sakura_bloom, amount: 30 },
          { item: itemList.kageuchi_handguard, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.perpetual_heart, amount: 12 },
          { item: itemList.sakura_bloom, amount: 45 },
          { item: itemList.famed_handguard, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.perpetual_heart, amount: 20 },
          { item: itemList.sakura_bloom, amount: 60 },
          { item: itemList.famed_handguard, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11954, atk: 318, def: 729 },
    material: {
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      boss: itemList.bloodjade_branch,
    },
  },
  keqing: {
    name: 'Keqing',
    id: 'keqing',
    rarity: 5,
    element: elements.electro,
    weapon: weapons.sword,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.cor_lapis, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.lightning_prism, amount: 2 },
          { item: itemList.cor_lapis, amount: 10 },
          { item: itemList.whopperflower_nectar, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.lightning_prism, amount: 4 },
          { item: itemList.cor_lapis, amount: 20 },
          { item: itemList.shimmering_nectar, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.lightning_prism, amount: 8 },
          { item: itemList.cor_lapis, amount: 30 },
          { item: itemList.shimmering_nectar, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.lightning_prism, amount: 12 },
          { item: itemList.cor_lapis, amount: 45 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.lightning_prism, amount: 20 },
          { item: itemList.cor_lapis, amount: 60 },
          { item: itemList.energy_nectar, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12182, atk: 300, def: 743 },
    material: {
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      boss: itemList.ring_of_boreas,
    },
  },
  klee: {
    name: 'Klee',
    id: 'klee',
    rarity: 5,
    element: elements.pyro,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.philanemo_mushroom, amount: 3 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.everflame_seed, amount: 2 },
          { item: itemList.philanemo_mushroom, amount: 10 },
          { item: itemList.divining_scroll, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.everflame_seed, amount: 4 },
          { item: itemList.philanemo_mushroom, amount: 20 },
          { item: itemList.sealed_scroll, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.everflame_seed, amount: 8 },
          { item: itemList.philanemo_mushroom, amount: 30 },
          { item: itemList.sealed_scroll, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.everflame_seed, amount: 12 },
          { item: itemList.philanemo_mushroom, amount: 45 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.everflame_seed, amount: 20 },
          { item: itemList.philanemo_mushroom, amount: 60 },
          { item: itemList.forbidden_curse_scroll, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9563, atk: 289, def: 572 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      boss: itemList.ring_of_boreas,
    },
  },
  kujou_sara: {
    name: 'Kujou Sara',
    id: 'kujou_sara',
    rarity: 4,
    element: elements.electro,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.dendrobium, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.storm_beads, amount: 2 },
          { item: itemList.dendrobium, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.storm_beads, amount: 4 },
          { item: itemList.dendrobium, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.storm_beads, amount: 8 },
          { item: itemList.dendrobium, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.storm_beads, amount: 12 },
          { item: itemList.dendrobium, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.storm_beads, amount: 20 },
          { item: itemList.dendrobium, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 8553, atk: 227, def: 553 },
    material: {
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.ashen_heart,
    },
  },
  lisa: {
    name: 'Lisa',
    id: 'lisa',
    rarity: 4,
    element: elements.electro,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.valberry, amount: 3 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.lightning_prism, amount: 2 },
          { item: itemList.valberry, amount: 10 },
          { item: itemList.slime_condensate, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.lightning_prism, amount: 4 },
          { item: itemList.valberry, amount: 20 },
          { item: itemList.slime_secretions, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.lightning_prism, amount: 8 },
          { item: itemList.valberry, amount: 30 },
          { item: itemList.slime_secretions, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.lightning_prism, amount: 12 },
          { item: itemList.valberry, amount: 45 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.lightning_prism, amount: 20 },
          { item: itemList.valberry, amount: 60 },
          { item: itemList.slime_concentrate, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 8907, atk: 215, def: 534 },
    material: {
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      boss: itemList.dvalins_claw,
    },
  },
  mona: {
    name: 'Mona',
    id: 'mona',
    rarity: 5,
    element: elements.hydro,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.varunada_lazurite_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.philanemo_mushroom, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 3 },
          { item: itemList.cleansing_heart, amount: 2 },
          { item: itemList.philanemo_mushroom, amount: 10 },
          { item: itemList.whopperflower_nectar, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 6 },
          { item: itemList.cleansing_heart, amount: 4 },
          { item: itemList.philanemo_mushroom, amount: 20 },
          { item: itemList.shimmering_nectar, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 3 },
          { item: itemList.cleansing_heart, amount: 8 },
          { item: itemList.philanemo_mushroom, amount: 30 },
          { item: itemList.shimmering_nectar, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 6 },
          { item: itemList.cleansing_heart, amount: 12 },
          { item: itemList.philanemo_mushroom, amount: 45 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_gemstone, amount: 6 },
          { item: itemList.cleansing_heart, amount: 20 },
          { item: itemList.philanemo_mushroom, amount: 60 },
          { item: itemList.energy_nectar, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9677, atk: 267, def: 607 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      boss: itemList.ring_of_boreas,
    },
  },
  ningguang: {
    name: 'Ningguang',
    id: 'ningguang',
    rarity: 4,
    element: elements.geo,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.prithiva_topaz_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.glaze_lily, amount: 3 },
          { item: itemList.recruits_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 3 },
          { item: itemList.basalt_pillar, amount: 2 },
          { item: itemList.glaze_lily, amount: 10 },
          { item: itemList.recruits_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 6 },
          { item: itemList.basalt_pillar, amount: 4 },
          { item: itemList.glaze_lily, amount: 20 },
          { item: itemList.sergeants_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 3 },
          { item: itemList.basalt_pillar, amount: 8 },
          { item: itemList.glaze_lily, amount: 30 },
          { item: itemList.sergeants_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 6 },
          { item: itemList.basalt_pillar, amount: 12 },
          { item: itemList.glaze_lily, amount: 45 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_gemstone, amount: 6 },
          { item: itemList.basalt_pillar, amount: 20 },
          { item: itemList.glaze_lily, amount: 60 },
          { item: itemList.lieutenants_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9110, atk: 198, def: 534 },
    material: {
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      boss: itemList.spirit_locket_of_boreas,
    },
  },
  noelle: {
    name: 'Noelle',
    id: 'noelle',
    rarity: 4,
    element: elements.geo,
    weapon: weapons.claymore,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.prithiva_topaz_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.valberry, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 3 },
          { item: itemList.basalt_pillar, amount: 2 },
          { item: itemList.valberry, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 6 },
          { item: itemList.basalt_pillar, amount: 4 },
          { item: itemList.valberry, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 3 },
          { item: itemList.basalt_pillar, amount: 8 },
          { item: itemList.valberry, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 6 },
          { item: itemList.basalt_pillar, amount: 12 },
          { item: itemList.valberry, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_gemstone, amount: 6 },
          { item: itemList.basalt_pillar, amount: 20 },
          { item: itemList.valberry, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11235, atk: 178, def: 743 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.dvalins_claw,
    },
  },
  qiqi: {
    name: 'Qiqi',
    id: 'qiqi',
    rarity: 5,
    element: elements.cryo,
    weapon: weapons.sword,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.violetgrass, amount: 3 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 2 },
          { item: itemList.violetgrass, amount: 10 },
          { item: itemList.divining_scroll, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 4 },
          { item: itemList.violetgrass, amount: 20 },
          { item: itemList.sealed_scroll, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 8 },
          { item: itemList.violetgrass, amount: 30 },
          { item: itemList.sealed_scroll, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 12 },
          { item: itemList.violetgrass, amount: 45 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 20 },
          { item: itemList.violetgrass, amount: 60 },
          { item: itemList.forbidden_curse_scroll, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11499, atk: 267, def: 857 },
    material: {
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      boss: itemList.tail_of_boreas,
    },
  },
  raiden_shogun: {
    name: 'Raiden Shogun',
    id: 'raiden_shogun',
    rarity: 5,
    element: elements.electro,
    weapon: weapons.polearm,
    sex: 'female',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.amakumo_fruit, amount: 3 },
          { item: itemList.old_handguard, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.storm_beads, amount: 2 },
          { item: itemList.amakumo_fruit, amount: 10 },
          { item: itemList.old_handguard, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.storm_beads, amount: 4 },
          { item: itemList.amakumo_fruit, amount: 20 },
          { item: itemList.kageuchi_handguard, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.storm_beads, amount: 8 },
          { item: itemList.amakumo_fruit, amount: 30 },
          { item: itemList.kageuchi_handguard, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.storm_beads, amount: 12 },
          { item: itemList.amakumo_fruit, amount: 45 },
          { item: itemList.famed_handguard, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.storm_beads, amount: 20 },
          { item: itemList.amakumo_fruit, amount: 60 },
          { item: itemList.famed_handguard, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12182, atk: 300, def: 743 },
    material: {
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      boss: itemList.molten_moment,
    },
  },
  razor: {
    name: 'Razor',
    id: 'razor',
    rarity: 4,
    element: elements.electro,
    weapon: weapons.claymore,
    sex: 'male',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.vajrada_amethyst_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.wolfhook, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 3 },
          { item: itemList.lightning_prism, amount: 2 },
          { item: itemList.wolfhook, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_fragment, amount: 6 },
          { item: itemList.lightning_prism, amount: 4 },
          { item: itemList.wolfhook, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 3 },
          { item: itemList.lightning_prism, amount: 8 },
          { item: itemList.wolfhook, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_chunk, amount: 6 },
          { item: itemList.lightning_prism, amount: 12 },
          { item: itemList.wolfhook, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vajrada_amethyst_gemstone, amount: 6 },
          { item: itemList.lightning_prism, amount: 20 },
          { item: itemList.wolfhook, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11134, atk: 217, def: 699 },
    material: {
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.dvalins_claw,
    },
  },
  rosaria: {
    name: 'Rosaria',
    id: 'rosaria',
    rarity: 4,
    element: elements.cryo,
    weapon: weapons.polearm,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.shivada_jade_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.valberry, amount: 3 },
          { item: itemList.recruits_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 2 },
          { item: itemList.valberry, amount: 10 },
          { item: itemList.recruits_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.shivada_jade_fragment, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 4 },
          { item: itemList.valberry, amount: 20 },
          { item: itemList.sergeants_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 3 },
          { item: itemList.hoarfrost_core, amount: 8 },
          { item: itemList.valberry, amount: 30 },
          { item: itemList.sergeants_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.shivada_jade_chunk, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 12 },
          { item: itemList.valberry, amount: 45 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.shivada_jade_gemstone, amount: 6 },
          { item: itemList.hoarfrost_core, amount: 20 },
          { item: itemList.valberry, amount: 60 },
          { item: itemList.lieutenants_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11438, atk: 223, def: 661 },
    material: {
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      boss: itemList.shadow_of_the_warrior,
    },
  },
  sangonomiya_kokomi: {
    name: 'Sangonomiya Kokomi',
    id: 'sangonomiya_kokomi',
    rarity: 5,
    element: elements.hydro,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.varunada_lazurite_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.sango_pearl, amount: 3 },
          { item: itemList.spectral_husk, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 3 },
          { item: itemList.dew_of_repudiation, amount: 2 },
          { item: itemList.sango_pearl, amount: 10 },
          { item: itemList.spectral_husk, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 6 },
          { item: itemList.dew_of_repudiation, amount: 4 },
          { item: itemList.sango_pearl, amount: 20 },
          { item: itemList.spectral_heart, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 3 },
          { item: itemList.dew_of_repudiation, amount: 8 },
          { item: itemList.sango_pearl, amount: 30 },
          { item: itemList.spectral_heart, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 6 },
          { item: itemList.dew_of_repudiation, amount: 12 },
          { item: itemList.sango_pearl, amount: 45 },
          { item: itemList.spectral_nucleus, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_gemstone, amount: 6 },
          { item: itemList.dew_of_repudiation, amount: 20 },
          { item: itemList.sango_pearl, amount: 60 },
          { item: itemList.spectral_nucleus, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 13471, atk: 234, def: 657 },
    material: {
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      boss: itemList.hellfire_butterfly,
    },
  },
  sayu: {
    name: 'Sayu',
    id: 'sayu',
    rarity: 4,
    element: elements.anemo,
    weapon: weapons.claymore,
    sex: 'female',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.vayuda_turquoise_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.crystal_marrow, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 3 },
          { item: itemList.marionette_core, amount: 2 },
          { item: itemList.crystal_marrow, amount: 10 },
          { item: itemList.whopperflower_nectar, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 6 },
          { item: itemList.marionette_core, amount: 4 },
          { item: itemList.crystal_marrow, amount: 20 },
          { item: itemList.shimmering_nectar, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 3 },
          { item: itemList.marionette_core, amount: 8 },
          { item: itemList.crystal_marrow, amount: 30 },
          { item: itemList.shimmering_nectar, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 6 },
          { item: itemList.marionette_core, amount: 12 },
          { item: itemList.crystal_marrow, amount: 45 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_gemstone, amount: 6 },
          { item: itemList.marionette_core, amount: 20 },
          { item: itemList.crystal_marrow, amount: 60 },
          { item: itemList.energy_nectar, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11033, atk: 227, def: 693 },
    material: {
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      boss: itemList.gilded_scale,
    },
  },
  sucrose: {
    name: 'Sucrose',
    id: 'sucrose',
    rarity: 4,
    element: elements.anemo,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.vayuda_turquoise_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 3 },
          { item: itemList.hurricane_seed, amount: 2 },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.whopperflower_nectar, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 6 },
          { item: itemList.hurricane_seed, amount: 4 },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.shimmering_nectar, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 3 },
          { item: itemList.hurricane_seed, amount: 8 },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.shimmering_nectar, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 6 },
          { item: itemList.hurricane_seed, amount: 12 },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_gemstone, amount: 6 },
          { item: itemList.hurricane_seed, amount: 20 },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.energy_nectar, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 8603, atk: 158, def: 654 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      boss: itemList.spirit_locket_of_boreas,
    },
  },
  tartaglia: {
    name: 'Tartaglia',
    id: 'tartaglia',
    rarity: 5,
    element: elements.hydro,
    weapon: weapons.bow,
    sex: 'male',
    nation: 'snezhnaya',
    ascension: [
      {
        items: [
          { item: itemList.varunada_lazurite_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.starconch, amount: 3 },
          { item: itemList.recruits_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 3 },
          { item: itemList.cleansing_heart, amount: 2 },
          { item: itemList.starconch, amount: 10 },
          { item: itemList.recruits_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 6 },
          { item: itemList.cleansing_heart, amount: 4 },
          { item: itemList.starconch, amount: 20 },
          { item: itemList.sergeants_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 3 },
          { item: itemList.cleansing_heart, amount: 8 },
          { item: itemList.starconch, amount: 30 },
          { item: itemList.sergeants_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 6 },
          { item: itemList.cleansing_heart, amount: 12 },
          { item: itemList.starconch, amount: 45 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_gemstone, amount: 6 },
          { item: itemList.cleansing_heart, amount: 20 },
          { item: itemList.starconch, amount: 60 },
          { item: itemList.lieutenants_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 12182, atk: 280, def: 757 },
    material: {
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      boss: itemList.shard_of_a_foul_legacy,
    },
  },
  traveler_anemo: {
    name: 'Traveler (Anemo)',
    id: 'traveler_anemo',
    rarity: 5,
    element: elements.anemo,
    weapon: weapons.sword,
    sex: "player's choice",
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.brilliant_diamond_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_gemstone, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 198, def: 635 },
    material: {
      book: [
        itemList.teachings_of_freedom,
        itemList.guide_to_resistance,
        itemList.guide_to_ballad,
        itemList.guide_to_freedom,
        itemList.guide_to_resistance,
        itemList.philosophies_of_ballad,
        itemList.philosophies_of_freedom,
        itemList.philosophies_of_resistance,
        itemList.philosophies_of_ballad,
      ],
      material: [
        itemList.divining_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
      ],
      boss: itemList.dvalins_sigh,
    },
  },
  traveler_geo: {
    name: 'Traveler (Geo)',
    id: 'traveler_geo',
    rarity: 5,
    element: elements.geo,
    weapon: weapons.sword,
    sex: "player's choice",
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.brilliant_diamond_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_gemstone, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 198, def: 635 },
    material: {
      book: [
        itemList.teachings_of_prosperity,
        itemList.guide_to_diligence,
        itemList.guide_to_gold,
        itemList.guide_to_prosperity,
        itemList.guide_to_diligence,
        itemList.philosophies_of_gold,
        itemList.philosophies_of_prosperity,
        itemList.philosophies_of_diligence,
        itemList.philosophies_of_gold,
      ],
      material: [
        itemList.firm_arrowhead,
        itemList.sharp_arrowhead,
        itemList.sharp_arrowhead,
        itemList.sharp_arrowhead,
        itemList.sharp_arrowhead,
        itemList.weathered_arrowhead,
        itemList.weathered_arrowhead,
        itemList.weathered_arrowhead,
        itemList.weathered_arrowhead,
      ],
      boss: itemList.tail_of_boreas,
    },
    material_atk: {
      book: [
        itemList.teachings_of_freedom,
        itemList.guide_to_resistance,
        itemList.guide_to_ballad,
        itemList.guide_to_freedom,
        itemList.guide_to_resistance,
        itemList.philosophies_of_ballad,
        itemList.philosophies_of_freedom,
        itemList.philosophies_of_resistance,
        itemList.philosophies_of_ballad,
      ],
      material: [
        itemList.divining_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
      ],
      boss: itemList.dvalins_sigh,
    },
  },
  traveler_electro: {
    name: 'Traveler (Electro)',
    id: 'traveler_electro',
    rarity: 5,
    element: elements.electro,
    weapon: weapons.sword,
    sex: "player's choice",
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.brilliant_diamond_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_gemstone, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 198, def: 635 },
    material: {
      book: [
        itemList.teachings_of_transience,
        itemList.guide_to_elegance,
        itemList.guide_to_light,
        itemList.guide_to_transience,
        itemList.guide_to_elegance,
        itemList.philosophies_of_light,
        itemList.philosophies_of_transience,
        itemList.philosophies_of_elegance,
        itemList.philosophies_of_light,
      ],
      material: [
        itemList.old_handguard,
        itemList.kageuchi_handguard,
        itemList.kageuchi_handguard,
        itemList.kageuchi_handguard,
        itemList.kageuchi_handguard,
        itemList.famed_handguard,
        itemList.famed_handguard,
        itemList.famed_handguard,
        itemList.famed_handguard,
      ],
      boss: itemList.dragon_lords_crown,
    },
  },

  venti: {
    name: 'Venti',
    id: 'venti',
    rarity: 5,
    element: elements.anemo,
    weapon: weapons.bow,
    sex: 'male',
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.vayuda_turquoise_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.cecilia, amount: 3 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 3 },
          { item: itemList.hurricane_seed, amount: 2 },
          { item: itemList.cecilia, amount: 10 },
          { item: itemList.slime_condensate, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 6 },
          { item: itemList.hurricane_seed, amount: 4 },
          { item: itemList.cecilia, amount: 20 },
          { item: itemList.slime_secretions, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 3 },
          { item: itemList.hurricane_seed, amount: 8 },
          { item: itemList.cecilia, amount: 30 },
          { item: itemList.slime_secretions, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 6 },
          { item: itemList.hurricane_seed, amount: 12 },
          { item: itemList.cecilia, amount: 45 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_gemstone, amount: 6 },
          { item: itemList.hurricane_seed, amount: 20 },
          { item: itemList.cecilia, amount: 60 },
          { item: itemList.slime_concentrate, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9790, atk: 245, def: 622 },
    material: {
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      boss: itemList.tail_of_boreas,
    },
  },
  xiangling: {
    name: 'Xiangling',
    id: 'xiangling',
    rarity: 4,
    element: elements.pyro,
    weapon: weapons.polearm,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.jueyun_chili, amount: 3 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.everflame_seed, amount: 2 },
          { item: itemList.jueyun_chili, amount: 10 },
          { item: itemList.slime_condensate, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.everflame_seed, amount: 4 },
          { item: itemList.jueyun_chili, amount: 20 },
          { item: itemList.slime_secretions, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.everflame_seed, amount: 8 },
          { item: itemList.jueyun_chili, amount: 30 },
          { item: itemList.slime_secretions, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.everflame_seed, amount: 12 },
          { item: itemList.jueyun_chili, amount: 45 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.everflame_seed, amount: 20 },
          { item: itemList.jueyun_chili, amount: 60 },
          { item: itemList.slime_concentrate, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 210, def: 623 },
    material: {
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      boss: itemList.dvalins_claw,
    },
  },
  xiao: {
    name: 'Xiao',
    id: 'xiao',
    rarity: 5,
    element: elements.anemo,
    weapon: weapons.polearm,
    sex: 'male',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.vayuda_turquoise_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.qingxin, amount: 3 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 3 },
          { item: itemList.juvenile_jade, amount: 2 },
          { item: itemList.qingxin, amount: 10 },
          { item: itemList.slime_condensate, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_fragment, amount: 6 },
          { item: itemList.juvenile_jade, amount: 4 },
          { item: itemList.qingxin, amount: 20 },
          { item: itemList.slime_secretions, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 3 },
          { item: itemList.juvenile_jade, amount: 8 },
          { item: itemList.qingxin, amount: 30 },
          { item: itemList.slime_secretions, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_chunk, amount: 6 },
          { item: itemList.juvenile_jade, amount: 12 },
          { item: itemList.qingxin, amount: 45 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.vayuda_turquoise_gemstone, amount: 6 },
          { item: itemList.juvenile_jade, amount: 20 },
          { item: itemList.qingxin, amount: 60 },
          { item: itemList.slime_concentrate, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 11840, atk: 325, def: 743 },
    material: {
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      boss: itemList.shadow_of_the_warrior,
    },
  },
  xingqiu: {
    name: 'Xingqiu',
    id: 'xingqiu',
    rarity: 4,
    element: elements.hydro,
    weapon: weapons.sword,
    sex: 'male',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.varunada_lazurite_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.silk_flower, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 3 },
          { item: itemList.cleansing_heart, amount: 2 },
          { item: itemList.silk_flower, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_fragment, amount: 6 },
          { item: itemList.cleansing_heart, amount: 4 },
          { item: itemList.silk_flower, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 3 },
          { item: itemList.cleansing_heart, amount: 8 },
          { item: itemList.silk_flower, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_chunk, amount: 6 },
          { item: itemList.cleansing_heart, amount: 12 },
          { item: itemList.silk_flower, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.varunada_lazurite_gemstone, amount: 6 },
          { item: itemList.cleansing_heart, amount: 20 },
          { item: itemList.silk_flower, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9515, atk: 188, def: 705 },
    material: {
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      boss: itemList.tail_of_boreas,
    },
  },
  xinyan: {
    name: 'Xinyan',
    id: 'xinyan',
    rarity: 4,
    element: elements.pyro,
    weapon: weapons.claymore,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.violetgrass, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.everflame_seed, amount: 2 },
          { item: itemList.violetgrass, amount: 10 },
          { item: itemList.treasure_hoarder_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.everflame_seed, amount: 4 },
          { item: itemList.violetgrass, amount: 20 },
          { item: itemList.silver_raven_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.everflame_seed, amount: 8 },
          { item: itemList.violetgrass, amount: 30 },
          { item: itemList.silver_raven_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.everflame_seed, amount: 12 },
          { item: itemList.violetgrass, amount: 45 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.everflame_seed, amount: 20 },
          { item: itemList.violetgrass, amount: 60 },
          { item: itemList.golden_raven_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10425, atk: 231, def: 743 },
    material: {
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      boss: itemList.tusk_of_monoceros_caeli,
    },
  },
  yanfei: {
    name: 'Yanfei',
    id: 'yanfei',
    rarity: 4,
    element: elements.pyro,
    weapon: weapons.catalyst,
    sex: 'female',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.noctilucous_jade, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.juvenile_jade, amount: 2 },
          { item: itemList.noctilucous_jade, amount: 10 },
          { item: itemList.treasure_hoarder_insignia, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.juvenile_jade, amount: 4 },
          { item: itemList.noctilucous_jade, amount: 20 },
          { item: itemList.silver_raven_insignia, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.juvenile_jade, amount: 8 },
          { item: itemList.noctilucous_jade, amount: 30 },
          { item: itemList.silver_raven_insignia, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.juvenile_jade, amount: 12 },
          { item: itemList.noctilucous_jade, amount: 45 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.juvenile_jade, amount: 20 },
          { item: itemList.noctilucous_jade, amount: 60 },
          { item: itemList.golden_raven_insignia, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10425, atk: 231, def: 743 },
    material: {
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      boss: itemList.bloodjade_branch,
    },
  },
  yoimiya: {
    name: 'Yoimiya',
    id: 'yoimiya',
    rarity: 5,
    element: elements.pyro,
    weapon: weapons.bow,
    sex: 'female',
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.agnidus_agate_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.naku_weed, amount: 3 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 3 },
          { item: itemList.smoldering_pearl, amount: 2 },
          { item: itemList.naku_weed, amount: 10 },
          { item: itemList.divining_scroll, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_fragment, amount: 6 },
          { item: itemList.smoldering_pearl, amount: 4 },
          { item: itemList.naku_weed, amount: 20 },
          { item: itemList.sealed_scroll, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 3 },
          { item: itemList.smoldering_pearl, amount: 8 },
          { item: itemList.naku_weed, amount: 30 },
          { item: itemList.sealed_scroll, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_chunk, amount: 6 },
          { item: itemList.smoldering_pearl, amount: 12 },
          { item: itemList.naku_weed, amount: 45 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.agnidus_agate_gemstone, amount: 6 },
          { item: itemList.smoldering_pearl, amount: 20 },
          { item: itemList.naku_weed, amount: 60 },
          { item: itemList.forbidden_curse_scroll, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 9450, atk: 300, def: 572 },
    material: {
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      boss: itemList.dragon_lords_crown,
    },
  },
  zhongli: {
    name: 'Zhongli',
    id: 'zhongli',
    rarity: 5,
    element: elements.geo,
    weapon: weapons.polearm,
    sex: 'male',
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.prithiva_topaz_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.cor_lapis, amount: 3 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 3 },
          { item: itemList.basalt_pillar, amount: 2 },
          { item: itemList.cor_lapis, amount: 10 },
          { item: itemList.slime_condensate, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_fragment, amount: 6 },
          { item: itemList.basalt_pillar, amount: 4 },
          { item: itemList.cor_lapis, amount: 20 },
          { item: itemList.slime_secretions, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 3 },
          { item: itemList.basalt_pillar, amount: 8 },
          { item: itemList.cor_lapis, amount: 30 },
          { item: itemList.slime_secretions, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_chunk, amount: 6 },
          { item: itemList.basalt_pillar, amount: 12 },
          { item: itemList.cor_lapis, amount: 45 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.prithiva_topaz_gemstone, amount: 6 },
          { item: itemList.basalt_pillar, amount: 20 },
          { item: itemList.cor_lapis, amount: 60 },
          { item: itemList.slime_concentrate, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 13662, atk: 233, def: 686 },
    material: {
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      boss: itemList.tusk_of_monoceros_caeli,
    },
  },
};
