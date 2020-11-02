import { itemList } from './itemList';

export const characters = {
  amber: {
    rarity: 4,
    name: 'Amber',
    id: 'amber',
    element: 'pyro',
    weapon: 'bow',
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
  },
  barbara: {
    rarity: 4,
    name: 'Barbara',
    id: 'barbara',
    element: 'hydro',
    weapon: 'catalyst',
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
  },
  beidou: {
    rarity: 4,
    name: 'Beidou',
    id: 'beidou',
    element: 'electro',
    weapon: 'claymore',
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
  },
  bennett: {
    rarity: 4,
    name: 'Bennett',
    id: 'bennett',
    element: 'pyro',
    weapon: 'sword',
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
  },
  chongyun: {
    rarity: 4,
    name: 'Chongyun',
    id: 'chongyun',
    element: 'cryo',
    weapon: 'claymore',
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
  },
  diluc: {
    rarity: 5,
    name: 'Diluc',
    id: 'diluc',
    element: 'pyro',
    weapon: 'claymore',
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
  },
  fischl: {
    rarity: 4,
    name: 'Fischl',
    id: 'fischl',
    element: 'electro',
    weapon: 'bow',
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
  },
  jean: {
    rarity: 5,
    name: 'Jean',
    id: 'jean',
    element: 'anemo',
    weapon: 'sword',
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
  },
  kaeya: {
    rarity: 4,
    name: 'Kaeya',
    id: 'kaeya',
    element: 'cryo',
    weapon: 'sword',
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
  },
  keqing: {
    rarity: 5,
    name: 'Keqing',
    id: 'keqing',
    element: 'electro',
    weapon: 'sword',
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
  },
  klee: {
    rarity: 5,
    name: 'Klee',
    id: 'klee',
    element: 'pyro',
    weapon: 'catalyst',
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
  },
  lisa: {
    rarity: 4,
    name: 'Lisa',
    id: 'lisa',
    element: 'electro',
    weapon: 'catalyst',
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
  },
  mona: {
    rarity: 5,
    name: 'Mona',
    id: 'mona',
    element: 'hydro',
    weapon: 'catalyst',
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
  },
  ningguang: {
    rarity: 4,
    name: 'Ningguang',
    id: 'ningguang',
    element: 'geo',
    weapon: 'catalyst',
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
  },
  noelle: {
    rarity: 4,
    name: 'Noelle',
    id: 'noelle',
    element: 'geo',
    weapon: 'claymore',
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
  },
  qiqi: {
    rarity: 5,
    name: 'Qiqi',
    id: 'qiqi',
    element: 'cryo',
    weapon: 'sword',
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
  },
  razor: {
    rarity: 4,
    name: 'Razor',
    id: 'razor',
    element: 'electro',
    weapon: 'claymore',
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
  },
  sucrose: {
    rarity: 4,
    name: 'Sucrose',
    id: 'sucrose',
    element: 'anemo',
    weapon: 'catalyst',
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
  },
  traveler: {
    rarity: 5,
    name: 'Traveler',
    id: 'traveler',
    element: 'adaptive',
    weapon: 'sword',
    sex: "player's choice",
    nation: '',
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
  },
  venti: {
    rarity: 5,
    name: 'Venti',
    id: 'venti',
    element: 'anemo',
    weapon: 'bow',
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
  },
  xiangling: {
    rarity: 4,
    name: 'Xiangling',
    id: 'xiangling',
    element: 'pyro',
    weapon: 'polearm',
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
  },
  xingqiu: {
    rarity: 4,
    name: 'Xingqiu',
    id: 'xingqiu',
    element: 'hydro',
    weapon: 'sword',
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
  },
};
