import { itemList } from './itemList';

import { elements } from './elements';
import { weapons } from './weapons';

export const characters = {
  albedo: {
    id: 'albedo',
    name: 'Albedo',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 13226,
      atk: 251,
      def: 876,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cecilia,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.cecilia,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.cecilia,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.cecilia,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.cecilia,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.cecilia,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.tusk_of_monoceros_caeli,
    },
    element: elements.geo,
  },
  alhaitham: {
    id: 'alhaitham',
    name: 'Alhaitham',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 13348,
      atk: 313,
      def: 782,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 2,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 4,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 8,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 12,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 20,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.mirror_of_mushin,
    },
    element: elements.dendro,
  },
  aloy: {
    id: 'aloy',
    name: 'Aloy',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 10899,
      atk: 234,
      def: 676,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.crystal_marrow,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 2,
          },
          {
            item: itemList.crystal_marrow,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 4,
          },
          {
            item: itemList.crystal_marrow,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 8,
          },
          {
            item: itemList.crystal_marrow,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 12,
          },
          {
            item: itemList.crystal_marrow,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 20,
          },
          {
            item: itemList.crystal_marrow,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.molten_moment,
    },
    element: elements.cryo,
  },
  amber: {
    id: 'amber',
    name: 'Amber',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9461,
      atk: 223,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.dvalins_sigh,
    },
    element: elements.pyro,
  },
  arataki_itto: {
    id: 'arataki_itto',
    name: 'Arataki Itto',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 12858,
      atk: 227,
      def: 959,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.onikabuto,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 2,
          },
          {
            item: itemList.onikabuto,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 4,
          },
          {
            item: itemList.onikabuto,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 8,
          },
          {
            item: itemList.onikabuto,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 12,
          },
          {
            item: itemList.onikabuto,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 20,
          },
          {
            item: itemList.onikabuto,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.ashen_heart,
    },
    element: elements.geo,
  },
  arlecchino: {
    id: 'arlecchino',
    name: 'Arlecchino',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 13103,
      atk: 342,
      def: 765,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.rainbow_rose,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 2,
          },
          {
            item: itemList.rainbow_rose,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 4,
          },
          {
            item: itemList.rainbow_rose,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 8,
          },
          {
            item: itemList.rainbow_rose,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 12,
          },
          {
            item: itemList.rainbow_rose,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 20,
          },
          {
            item: itemList.rainbow_rose,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_order, itemList.guide_to_order, itemList.philosophies_of_order],
      boss: itemList.fading_candle,
    },
    element: elements.pyro,
  },
  baizhu: {
    id: 'baizhu',
    name: 'Baizhu',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 13348,
      atk: 193,
      def: 500,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.violetgrass,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.evergloom_ring,
            amount: 2,
          },
          {
            item: itemList.violetgrass,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.evergloom_ring,
            amount: 4,
          },
          {
            item: itemList.violetgrass,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.evergloom_ring,
            amount: 8,
          },
          {
            item: itemList.violetgrass,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.evergloom_ring,
            amount: 12,
          },
          {
            item: itemList.violetgrass,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.evergloom_ring,
            amount: 20,
          },
          {
            item: itemList.violetgrass,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.worldspan_fern,
    },
    element: elements.dendro,
  },
  barbara: {
    id: 'barbara',
    name: 'Barbara',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 9787,
      atk: 159,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.ring_of_boreas,
    },
    element: elements.hydro,
  },
  beidou: {
    id: 'beidou',
    name: 'Beidou',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 13050,
      atk: 225,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.dvalins_sigh,
    },
    element: elements.electro,
  },
  bennett: {
    id: 'bennett',
    name: 'Bennett',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 12397,
      atk: 191,
      def: 771,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.windwheel_aster,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.windwheel_aster,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.windwheel_aster,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.windwheel_aster,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.windwheel_aster,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_plume,
    },
    element: elements.pyro,
  },
  candace: {
    id: 'candace',
    name: 'Candace',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.henna_berry,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 2,
          },
          {
            item: itemList.henna_berry,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 4,
          },
          {
            item: itemList.henna_berry,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 8,
          },
          {
            item: itemList.henna_berry,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 12,
          },
          {
            item: itemList.henna_berry,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 20,
          },
          {
            item: itemList.henna_berry,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.hydro,
  },
  charlotte: {
    id: 'charlotte',
    name: 'Charlotte',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 10766,
      atk: 173,
      def: 546,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.beryl_conch,
            amount: 3,
          },
          {
            item: itemList.meshing_gear,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.tourbillon_device,
            amount: 2,
          },
          {
            item: itemList.beryl_conch,
            amount: 10,
          },
          {
            item: itemList.meshing_gear,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.tourbillon_device,
            amount: 4,
          },
          {
            item: itemList.beryl_conch,
            amount: 20,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.tourbillon_device,
            amount: 8,
          },
          {
            item: itemList.beryl_conch,
            amount: 30,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.tourbillon_device,
            amount: 12,
          },
          {
            item: itemList.beryl_conch,
            amount: 45,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.tourbillon_device,
            amount: 20,
          },
          {
            item: itemList.beryl_conch,
            amount: 60,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.meshing_gear, itemList.mechanical_spur_gear, itemList.artificed_dynamic_gear],
      book: [itemList.teachings_of_justice, itemList.guide_to_justice, itemList.philosophies_of_justice],
      boss: itemList.lightless_silk_string,
    },
    element: elements.cryo,
  },
  chasca: {
    id: 'chasca',
    name: 'Chasca',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 9797,
      atk: 347,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 3,
          },
          {
            item: itemList.juvenile_fang,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.ensnaring_gaze,
            amount: 2,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 10,
          },
          {
            item: itemList.juvenile_fang,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.ensnaring_gaze,
            amount: 4,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 20,
          },
          {
            item: itemList.seasoned_fang,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.ensnaring_gaze,
            amount: 8,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 30,
          },
          {
            item: itemList.seasoned_fang,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.ensnaring_gaze,
            amount: 12,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 45,
          },
          {
            item: itemList.tyrants_fang,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.ensnaring_gaze,
            amount: 20,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 60,
          },
          {
            item: itemList.tyrants_fang,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.juvenile_fang, itemList.seasoned_fang, itemList.tyrants_fang],
      book: [itemList.teachings_of_conflict, itemList.guide_to_conflict, itemList.philosophies_of_conflict],
      boss: itemList.silken_feather,
    },
    element: elements.anemo,
  },
  chevreuse: {
    id: 'chevreuse',
    name: 'Chevreuse',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 11962,
      atk: 193,
      def: 605,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 3,
          },
          {
            item: itemList.meshing_gear,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 2,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 10,
          },
          {
            item: itemList.meshing_gear,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 4,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 20,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 8,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 30,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 12,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 45,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 20,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 60,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.meshing_gear, itemList.mechanical_spur_gear, itemList.artificed_dynamic_gear],
      book: [itemList.teachings_of_order, itemList.guide_to_order, itemList.philosophies_of_order],
      boss: itemList.lightless_eye_of_the_maelstrom,
    },
    element: elements.pyro,
  },
  chiori: {
    id: 'chiori',
    name: 'Chiori',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 11438,
      atk: 323,
      def: 953,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dendrobium,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 2,
          },
          {
            item: itemList.dendrobium,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 4,
          },
          {
            item: itemList.dendrobium,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 8,
          },
          {
            item: itemList.dendrobium,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 12,
          },
          {
            item: itemList.dendrobium,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 20,
          },
          {
            item: itemList.dendrobium,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.lightless_silk_string,
    },
    element: elements.geo,
  },
  chongyun: {
    id: 'chongyun',
    name: 'Chongyun',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 10984,
      atk: 223,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cor_lapis,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.cor_lapis,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.cor_lapis,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.cor_lapis,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.cor_lapis,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.cor_lapis,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.dvalins_sigh,
    },
    element: elements.cryo,
  },
  citlali: {
    id: 'citlali',
    name: 'Citlali',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 11634,
      atk: 127,
      def: 763,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.quenepa_berry,
            amount: 3,
          },
          {
            item: itemList.juvenile_fang,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 2,
          },
          {
            item: itemList.quenepa_berry,
            amount: 10,
          },
          {
            item: itemList.juvenile_fang,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 4,
          },
          {
            item: itemList.quenepa_berry,
            amount: 20,
          },
          {
            item: itemList.seasoned_fang,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 8,
          },
          {
            item: itemList.quenepa_berry,
            amount: 30,
          },
          {
            item: itemList.seasoned_fang,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 12,
          },
          {
            item: itemList.quenepa_berry,
            amount: 45,
          },
          {
            item: itemList.tyrants_fang,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 20,
          },
          {
            item: itemList.quenepa_berry,
            amount: 60,
          },
          {
            item: itemList.tyrants_fang,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.juvenile_fang, itemList.seasoned_fang, itemList.tyrants_fang],
      book: [itemList.teachings_of_kindling, itemList.guide_to_kindling, itemList.philosophies_of_kindling],
      boss: itemList.denial_and_judgment,
    },
    element: elements.cryo,
  },
  clorinde: {
    id: 'clorinde',
    name: 'Clorinde',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 12956,
      atk: 337,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.lumitoile,
            amount: 3,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 2,
          },
          {
            item: itemList.lumitoile,
            amount: 10,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 4,
          },
          {
            item: itemList.lumitoile,
            amount: 20,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 8,
          },
          {
            item: itemList.lumitoile,
            amount: 30,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 12,
          },
          {
            item: itemList.lumitoile,
            amount: 45,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 20,
          },
          {
            item: itemList.lumitoile,
            amount: 60,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.transoceanic_pearl, itemList.transoceanic_chunk, itemList.xenochromatic_crystal],
      book: [itemList.teachings_of_justice, itemList.guide_to_justice, itemList.philosophies_of_justice],
      boss: itemList.everamber,
    },
    element: elements.electro,
  },
  collei: {
    id: 'collei',
    name: 'Collei',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9787,
      atk: 200,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 2,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 4,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 8,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 12,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 20,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.dendro,
  },
  cyno: {
    id: 'cyno',
    name: 'Cyno',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 12491,
      atk: 318,
      def: 859,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.scarab,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 2,
          },
          {
            item: itemList.scarab,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 4,
          },
          {
            item: itemList.scarab,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 8,
          },
          {
            item: itemList.scarab,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 12,
          },
          {
            item: itemList.scarab,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 20,
          },
          {
            item: itemList.scarab,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.mudra_of_the_malefic_general,
    },
    element: elements.electro,
  },
  dehya: {
    id: 'dehya',
    name: 'Dehya',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 15675,
      atk: 265,
      def: 628,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 2,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 4,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 8,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 12,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 20,
          },
          {
            item: itemList.sand_grease_pupa,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.puppet_strings,
    },
    element: elements.pyro,
  },
  diluc: {
    id: 'diluc',
    name: 'Diluc',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 12981,
      atk: 335,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_plume,
    },
    element: elements.pyro,
  },
  diona: {
    id: 'diona',
    name: 'Diona',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9570,
      atk: 212,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.calla_lily,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.calla_lily,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.calla_lily,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.calla_lily,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.calla_lily,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.calla_lily,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.shard_of_a_foul_legacy,
    },
    element: elements.cryo,
  },
  dori: {
    id: 'dori',
    name: 'Dori',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 12397,
      atk: 223,
      def: 723,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 2,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 4,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 8,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 12,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 20,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.bloodjade_branch,
    },
    element: elements.electro,
  },
  emilie: {
    id: 'emilie',
    name: 'Emilie',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 13568,
      atk: 335,
      def: 730,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.lakelight_lily,
            amount: 3,
          },
          {
            item: itemList.meshing_gear,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 2,
          },
          {
            item: itemList.lakelight_lily,
            amount: 10,
          },
          {
            item: itemList.meshing_gear,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 4,
          },
          {
            item: itemList.lakelight_lily,
            amount: 20,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 8,
          },
          {
            item: itemList.lakelight_lily,
            amount: 30,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 12,
          },
          {
            item: itemList.lakelight_lily,
            amount: 45,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.fragment_of_a_golden_melody,
            amount: 20,
          },
          {
            item: itemList.lakelight_lily,
            amount: 60,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.meshing_gear, itemList.mechanical_spur_gear, itemList.artificed_dynamic_gear],
      book: [itemList.teachings_of_order, itemList.guide_to_order, itemList.philosophies_of_order],
      boss: itemList.silken_feather,
    },
    element: elements.dendro,
  },
  eula: {
    id: 'eula',
    name: 'Eula',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 13226,
      atk: 342,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dandelion_seed,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 2,
          },
          {
            item: itemList.dandelion_seed,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 4,
          },
          {
            item: itemList.dandelion_seed,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 8,
          },
          {
            item: itemList.dandelion_seed,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 12,
          },
          {
            item: itemList.dandelion_seed,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 20,
          },
          {
            item: itemList.dandelion_seed,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dragon_lords_crown,
    },
    element: elements.cryo,
  },
  faruzan: {
    id: 'faruzan',
    name: 'Faruzan',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9570,
      atk: 196,
      def: 628,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.henna_berry,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 2,
          },
          {
            item: itemList.henna_berry,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 4,
          },
          {
            item: itemList.henna_berry,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 8,
          },
          {
            item: itemList.henna_berry,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 12,
          },
          {
            item: itemList.henna_berry,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 20,
          },
          {
            item: itemList.henna_berry,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.puppet_strings,
    },
    element: elements.anemo,
  },
  fischl: {
    id: 'fischl',
    name: 'Fischl',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9189,
      atk: 244,
      def: 594,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.electro,
  },
  freminet: {
    id: 'freminet',
    name: 'Freminet',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 12071,
      atk: 255,
      def: 708,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.romaritime_flower,
            amount: 3,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 2,
          },
          {
            item: itemList.romaritime_flower,
            amount: 10,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 4,
          },
          {
            item: itemList.romaritime_flower,
            amount: 20,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 8,
          },
          {
            item: itemList.romaritime_flower,
            amount: 30,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 12,
          },
          {
            item: itemList.romaritime_flower,
            amount: 45,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 20,
          },
          {
            item: itemList.romaritime_flower,
            amount: 60,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.transoceanic_pearl, itemList.transoceanic_chunk, itemList.xenochromatic_crystal],
      book: [itemList.teachings_of_justice, itemList.guide_to_justice, itemList.philosophies_of_justice],
      boss: itemList.worldspan_fern,
    },
    element: elements.cryo,
  },
  furina: {
    id: 'furina',
    name: 'Furina',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 15307,
      atk: 244,
      def: 696,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.lakelight_lily,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 2,
          },
          {
            item: itemList.lakelight_lily,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 4,
          },
          {
            item: itemList.lakelight_lily,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 8,
          },
          {
            item: itemList.lakelight_lily,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 12,
          },
          {
            item: itemList.lakelight_lily,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 20,
          },
          {
            item: itemList.lakelight_lily,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_justice, itemList.guide_to_justice, itemList.philosophies_of_justice],
      boss: itemList.lightless_mass,
    },
    element: elements.hydro,
  },
  gaming: {
    id: 'gaming',
    name: 'Gaming',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 11419,
      atk: 302,
      def: 703,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.starconch,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.emperors_resolution,
            amount: 2,
          },
          {
            item: itemList.starconch,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.emperors_resolution,
            amount: 4,
          },
          {
            item: itemList.starconch,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.emperors_resolution,
            amount: 8,
          },
          {
            item: itemList.starconch,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.emperors_resolution,
            amount: 12,
          },
          {
            item: itemList.starconch,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.emperors_resolution,
            amount: 20,
          },
          {
            item: itemList.starconch,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.lightless_mass,
    },
    element: elements.pyro,
  },
  ganyu: {
    id: 'ganyu',
    name: 'Ganyu',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 9797,
      atk: 335,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.qingxin,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.qingxin,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.qingxin,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.qingxin,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.qingxin,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.qingxin,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.shadow_of_the_warrior,
    },
    element: elements.cryo,
  },
  gorou: {
    id: 'gorou',
    name: 'Gorou',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9570,
      atk: 183,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sango_pearl,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 2,
          },
          {
            item: itemList.sango_pearl,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 4,
          },
          {
            item: itemList.sango_pearl,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 8,
          },
          {
            item: itemList.sango_pearl,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 12,
          },
          {
            item: itemList.sango_pearl,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 20,
          },
          {
            item: itemList.sango_pearl,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.molten_moment,
    },
    element: elements.geo,
  },
  hu_tao: {
    id: 'hu_tao',
    name: 'Hu Tao',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 15552,
      atk: 106,
      def: 876,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.silk_flower,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 2,
          },
          {
            item: itemList.silk_flower,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 4,
          },
          {
            item: itemList.silk_flower,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 8,
          },
          {
            item: itemList.silk_flower,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 12,
          },
          {
            item: itemList.silk_flower,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 20,
          },
          {
            item: itemList.silk_flower,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.shard_of_a_foul_legacy,
    },
    element: elements.pyro,
  },
  jean: {
    id: 'jean',
    name: 'Jean',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 14695,
      atk: 239,
      def: 769,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dandelion_seed,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 2,
          },
          {
            item: itemList.dandelion_seed,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 4,
          },
          {
            item: itemList.dandelion_seed,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 8,
          },
          {
            item: itemList.dandelion_seed,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 12,
          },
          {
            item: itemList.dandelion_seed,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 20,
          },
          {
            item: itemList.dandelion_seed,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_plume,
    },
    element: elements.anemo,
  },
  kachina: {
    id: 'kachina',
    name: 'Kachina',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 11799,
      atk: 217,
      def: 792,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.quenepa_berry,
            amount: 3,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 2,
          },
          {
            item: itemList.quenepa_berry,
            amount: 10,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 4,
          },
          {
            item: itemList.quenepa_berry,
            amount: 20,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 8,
          },
          {
            item: itemList.quenepa_berry,
            amount: 30,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 12,
          },
          {
            item: itemList.quenepa_berry,
            amount: 45,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 20,
          },
          {
            item: itemList.quenepa_berry,
            amount: 60,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        itemList.sentrys_wooden_whistle,
        itemList.warriors_metal_whistle,
        itemList.saurian_crowned_warriors_golden_whistle,
      ],
      book: [itemList.teachings_of_conflict, itemList.guide_to_conflict, itemList.philosophies_of_conflict],
      boss: itemList.fading_candle,
    },
    element: elements.geo,
  },
  kaedehara_kazuha: {
    id: 'kaedehara_kazuha',
    name: 'Kaedehara Kazuha',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 13348,
      atk: 297,
      def: 807,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 2,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 4,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 8,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 12,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 20,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.gilded_scale,
    },
    element: elements.anemo,
  },
  kaeya: {
    id: 'kaeya',
    name: 'Kaeya',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 11636,
      atk: 223,
      def: 792,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.calla_lily,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.calla_lily,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.calla_lily,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.calla_lily,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.calla_lily,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.calla_lily,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.cryo,
  },
  kamisato_ayaka: {
    id: 'kamisato_ayaka',
    name: 'Kamisato Ayaka',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 12858,
      atk: 342,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sakura_bloom,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 2,
          },
          {
            item: itemList.sakura_bloom,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 4,
          },
          {
            item: itemList.sakura_bloom,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 8,
          },
          {
            item: itemList.sakura_bloom,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 12,
          },
          {
            item: itemList.sakura_bloom,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 20,
          },
          {
            item: itemList.sakura_bloom,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.bloodjade_branch,
    },
    element: elements.cryo,
  },
  kamisato_ayato: {
    id: 'kamisato_ayato',
    name: 'Kamisato Ayato',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 13715,
      atk: 299,
      def: 769,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sakura_bloom,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 2,
          },
          {
            item: itemList.sakura_bloom,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 4,
          },
          {
            item: itemList.sakura_bloom,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 8,
          },
          {
            item: itemList.sakura_bloom,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 12,
          },
          {
            item: itemList.sakura_bloom,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 20,
          },
          {
            item: itemList.sakura_bloom,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.mudra_of_the_malefic_general,
    },
    element: elements.hydro,
  },
  kaveh: {
    id: 'kaveh',
    name: 'Kaveh',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 11962,
      atk: 234,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.mourning_flower,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 2,
          },
          {
            item: itemList.mourning_flower,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 4,
          },
          {
            item: itemList.mourning_flower,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 8,
          },
          {
            item: itemList.mourning_flower,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 12,
          },
          {
            item: itemList.mourning_flower,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 20,
          },
          {
            item: itemList.mourning_flower,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.primordial_greenbloom,
    },
    element: elements.dendro,
  },
  keqing: {
    id: 'keqing',
    name: 'Keqing',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 13103,
      atk: 323,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cor_lapis,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.cor_lapis,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.cor_lapis,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.cor_lapis,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.cor_lapis,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.cor_lapis,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.ring_of_boreas,
    },
    element: elements.electro,
  },
  kinich: {
    id: 'kinich',
    name: 'Kinich',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 12858,
      atk: 332,
      def: 802,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.saurian_claw_succulent,
            amount: 3,
          },
          {
            item: itemList.juvenile_fang,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 2,
          },
          {
            item: itemList.saurian_claw_succulent,
            amount: 10,
          },
          {
            item: itemList.juvenile_fang,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 4,
          },
          {
            item: itemList.saurian_claw_succulent,
            amount: 20,
          },
          {
            item: itemList.seasoned_fang,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 8,
          },
          {
            item: itemList.saurian_claw_succulent,
            amount: 30,
          },
          {
            item: itemList.seasoned_fang,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 12,
          },
          {
            item: itemList.saurian_claw_succulent,
            amount: 45,
          },
          {
            item: itemList.tyrants_fang,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.overripe_flamegranate,
            amount: 20,
          },
          {
            item: itemList.saurian_claw_succulent,
            amount: 60,
          },
          {
            item: itemList.tyrants_fang,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.juvenile_fang, itemList.seasoned_fang, itemList.tyrants_fang],
      book: [itemList.teachings_of_kindling, itemList.guide_to_kindling, itemList.philosophies_of_kindling],
      boss: itemList.denial_and_judgment,
    },
    element: elements.dendro,
  },
  kirara: {
    id: 'kirara',
    name: 'Kirara',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 12180,
      atk: 223,
      def: 546,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.evergloom_ring,
            amount: 2,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.evergloom_ring,
            amount: 4,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.evergloom_ring,
            amount: 8,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.evergloom_ring,
            amount: 12,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.evergloom_ring,
            amount: 20,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.everamber,
    },
    element: elements.dendro,
  },
  klee: {
    id: 'klee',
    name: 'Klee',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 10287,
      atk: 311,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.ring_of_boreas,
    },
    element: elements.pyro,
  },
  kujou_sara: {
    id: 'kujou_sara',
    name: 'Kujou Sara',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9570,
      atk: 195,
      def: 628,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dendrobium,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 2,
          },
          {
            item: itemList.dendrobium,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 4,
          },
          {
            item: itemList.dendrobium,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 8,
          },
          {
            item: itemList.dendrobium,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 12,
          },
          {
            item: itemList.dendrobium,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 20,
          },
          {
            item: itemList.dendrobium,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.ashen_heart,
    },
    element: elements.electro,
  },
  kuki_shinobu: {
    id: 'kuki_shinobu',
    name: 'Kuki Shinobu',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 12289,
      atk: 212,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.naku_weed,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 2,
          },
          {
            item: itemList.naku_weed,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 4,
          },
          {
            item: itemList.naku_weed,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 8,
          },
          {
            item: itemList.naku_weed,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 12,
          },
          {
            item: itemList.naku_weed,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 20,
          },
          {
            item: itemList.naku_weed,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.electro,
  },
  lan_yan: {
    id: 'lan_yan',
    name: 'Lan Yan',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 9244,
      atk: 251,
      def: 580,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.clearwater_jade,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 2,
          },
          {
            item: itemList.clearwater_jade,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 4,
          },
          {
            item: itemList.clearwater_jade,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 8,
          },
          {
            item: itemList.clearwater_jade,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 12,
          },
          {
            item: itemList.clearwater_jade,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 20,
          },
          {
            item: itemList.clearwater_jade,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.eroded_sunfire,
    },
    element: elements.anemo,
  },
  layla: {
    id: 'layla',
    name: 'Layla',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 11092,
      atk: 217,
      def: 655,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 2,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 4,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 8,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 12,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 20,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.mirror_of_mushin,
    },
    element: elements.cryo,
  },
  lisa: {
    id: 'lisa',
    name: 'Lisa',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 9570,
      atk: 232,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.valberry,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.valberry,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.valberry,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.valberry,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.valberry,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.valberry,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.dvalins_claw,
    },
    element: elements.electro,
  },
  lynette: {
    id: 'lynette',
    name: 'Lynette',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 12397,
      atk: 232,
      def: 712,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 3,
          },
          {
            item: itemList.meshing_gear,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 2,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 10,
          },
          {
            item: itemList.meshing_gear,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 4,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 20,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 8,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 30,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 12,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 45,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 20,
          },
          {
            item: itemList.lumidouce_bell,
            amount: 60,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.meshing_gear, itemList.mechanical_spur_gear, itemList.artificed_dynamic_gear],
      book: [itemList.teachings_of_order, itemList.guide_to_order, itemList.philosophies_of_order],
      boss: itemList.everamber,
    },
    element: elements.anemo,
  },
  lyney: {
    id: 'lyney',
    name: 'Lyney',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 11021,
      atk: 318,
      def: 538,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.rainbow_rose,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.emperors_resolution,
            amount: 2,
          },
          {
            item: itemList.rainbow_rose,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.emperors_resolution,
            amount: 4,
          },
          {
            item: itemList.rainbow_rose,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.emperors_resolution,
            amount: 8,
          },
          {
            item: itemList.rainbow_rose,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.emperors_resolution,
            amount: 12,
          },
          {
            item: itemList.rainbow_rose,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.emperors_resolution,
            amount: 20,
          },
          {
            item: itemList.rainbow_rose,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_equity, itemList.guide_to_equity, itemList.philosophies_of_equity],
      boss: itemList.primordial_greenbloom,
    },
    element: elements.pyro,
  },
  mavuika: {
    id: 'mavuika',
    name: 'Mavuika',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 12552,
      atk: 359,
      def: 792,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 3,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 2,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 10,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 4,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 20,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 8,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 30,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 12,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 45,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 20,
          },
          {
            item: itemList.withering_purpurbloom,
            amount: 60,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        itemList.sentrys_wooden_whistle,
        itemList.warriors_metal_whistle,
        itemList.saurian_crowned_warriors_golden_whistle,
      ],
      book: [itemList.teachings_of_contention, itemList.guide_to_contention, itemList.philosophies_of_contention],
      boss: itemList.eroded_horn,
    },
    element: elements.pyro,
  },
  mika: {
    id: 'mika',
    name: 'Mika',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 12506,
      atk: 223,
      def: 713,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.wolfhook,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 2,
          },
          {
            item: itemList.wolfhook,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 4,
          },
          {
            item: itemList.wolfhook,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 8,
          },
          {
            item: itemList.wolfhook,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 12,
          },
          {
            item: itemList.wolfhook,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.pseudo_stamens,
            amount: 20,
          },
          {
            item: itemList.wolfhook,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.mirror_of_mushin,
    },
    element: elements.cryo,
  },
  mona: {
    id: 'mona',
    name: 'Mona',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 10409,
      atk: 287,
      def: 653,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.ring_of_boreas,
    },
    element: elements.hydro,
  },
  mualani: {
    id: 'mualani',
    name: 'Mualani',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 15185,
      atk: 182,
      def: 570,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sprayfeather_gill,
            amount: 3,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 2,
          },
          {
            item: itemList.sprayfeather_gill,
            amount: 10,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 4,
          },
          {
            item: itemList.sprayfeather_gill,
            amount: 20,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 8,
          },
          {
            item: itemList.sprayfeather_gill,
            amount: 30,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 12,
          },
          {
            item: itemList.sprayfeather_gill,
            amount: 45,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 20,
          },
          {
            item: itemList.sprayfeather_gill,
            amount: 60,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        itemList.sentrys_wooden_whistle,
        itemList.warriors_metal_whistle,
        itemList.saurian_crowned_warriors_golden_whistle,
      ],
      book: [itemList.teachings_of_contention, itemList.guide_to_contention, itemList.philosophies_of_contention],
      boss: itemList.lightless_mass,
    },
    element: elements.hydro,
  },
  nahida: {
    id: 'nahida',
    name: 'Nahida',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 10360,
      atk: 299,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 2,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 4,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 8,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 12,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 20,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.puppet_strings,
    },
    element: elements.dendro,
  },
  navia: {
    id: 'navia',
    name: 'Navia',
    rarity: 5,
    weapon: weapons.claymore,
    stats: {
      hp: 12650,
      atk: 352,
      def: 793,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.spring_of_the_first_dewdrop,
            amount: 3,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 2,
          },
          {
            item: itemList.spring_of_the_first_dewdrop,
            amount: 10,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 4,
          },
          {
            item: itemList.spring_of_the_first_dewdrop,
            amount: 20,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 8,
          },
          {
            item: itemList.spring_of_the_first_dewdrop,
            amount: 30,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 12,
          },
          {
            item: itemList.spring_of_the_first_dewdrop,
            amount: 45,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.artificed_spare_clockwork_component_coppelius,
            amount: 20,
          },
          {
            item: itemList.spring_of_the_first_dewdrop,
            amount: 60,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.transoceanic_pearl, itemList.transoceanic_chunk, itemList.xenochromatic_crystal],
      book: [itemList.teachings_of_equity, itemList.guide_to_equity, itemList.philosophies_of_equity],
      boss: itemList.lightless_silk_string,
    },
    element: elements.geo,
  },
  neuvillette: {
    id: 'neuvillette',
    name: 'Neuvillette',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 14695,
      atk: 208,
      def: 576,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.lumitoile,
            amount: 3,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 2,
          },
          {
            item: itemList.lumitoile,
            amount: 10,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 4,
          },
          {
            item: itemList.lumitoile,
            amount: 20,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 8,
          },
          {
            item: itemList.lumitoile,
            amount: 30,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 12,
          },
          {
            item: itemList.lumitoile,
            amount: 45,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.fontemer_unihorn,
            amount: 20,
          },
          {
            item: itemList.lumitoile,
            amount: 60,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.transoceanic_pearl, itemList.transoceanic_chunk, itemList.xenochromatic_crystal],
      book: [itemList.teachings_of_equity, itemList.guide_to_equity, itemList.philosophies_of_equity],
      boss: itemList.everamber,
    },
    element: elements.hydro,
  },
  nilou: {
    id: 'nilou',
    name: 'Nilou',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 15185,
      atk: 230,
      def: 729,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.padisarah,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 2,
          },
          {
            item: itemList.padisarah,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 4,
          },
          {
            item: itemList.padisarah,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 8,
          },
          {
            item: itemList.padisarah,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 12,
          },
          {
            item: itemList.padisarah,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 20,
          },
          {
            item: itemList.padisarah,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.hydro,
  },
  ningguang: {
    id: 'ningguang',
    name: 'Ningguang',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 9787,
      atk: 212,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.glaze_lily,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.glaze_lily,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.glaze_lily,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.glaze_lily,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.glaze_lily,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.glaze_lily,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.geo,
  },
  noelle: {
    id: 'noelle',
    name: 'Noelle',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 12071,
      atk: 191,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.valberry,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.valberry,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.valberry,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.valberry,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.valberry,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.valberry,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_claw,
    },
    element: elements.geo,
  },
  ororon: {
    id: 'ororon',
    name: 'Ororon',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9244,
      atk: 244,
      def: 587,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.glowing_hornshroom,
            amount: 3,
          },
          {
            item: itemList.juvenile_fang,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 2,
          },
          {
            item: itemList.glowing_hornshroom,
            amount: 10,
          },
          {
            item: itemList.juvenile_fang,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 4,
          },
          {
            item: itemList.glowing_hornshroom,
            amount: 20,
          },
          {
            item: itemList.seasoned_fang,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 8,
          },
          {
            item: itemList.glowing_hornshroom,
            amount: 30,
          },
          {
            item: itemList.seasoned_fang,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 12,
          },
          {
            item: itemList.glowing_hornshroom,
            amount: 45,
          },
          {
            item: itemList.tyrants_fang,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.mark_of_the_binding_blessing,
            amount: 20,
          },
          {
            item: itemList.glowing_hornshroom,
            amount: 60,
          },
          {
            item: itemList.tyrants_fang,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.juvenile_fang, itemList.seasoned_fang, itemList.tyrants_fang],
      book: [itemList.teachings_of_kindling, itemList.guide_to_kindling, itemList.philosophies_of_kindling],
      boss: itemList.lightless_silk_string,
    },
    element: elements.electro,
  },
  qiqi: {
    id: 'qiqi',
    name: 'Qiqi',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 12368,
      atk: 287,
      def: 922,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.violetgrass,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.violetgrass,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.violetgrass,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.violetgrass,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.violetgrass,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.violetgrass,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.tail_of_boreas,
    },
    element: elements.cryo,
  },
  raiden_shogun: {
    id: 'raiden_shogun',
    name: 'Raiden Shogun',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 12907,
      atk: 337,
      def: 789,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 2,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 4,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 8,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 12,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 20,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.molten_moment,
    },
    element: elements.electro,
  },
  razor: {
    id: 'razor',
    name: 'Razor',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 11962,
      atk: 234,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.wolfhook,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.wolfhook,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.wolfhook,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.wolfhook,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.wolfhook,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.wolfhook,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_claw,
    },
    element: elements.electro,
  },
  rosaria: {
    id: 'rosaria',
    name: 'Rosaria',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 12289,
      atk: 240,
      def: 710,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.valberry,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.valberry,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.valberry,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.valberry,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.valberry,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.valberry,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.shadow_of_the_warrior,
    },
    element: elements.cryo,
  },
  sangonomiya_kokomi: {
    id: 'sangonomiya_kokomi',
    name: 'Sangonomiya Kokomi',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 13471,
      atk: 234,
      def: 657,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sango_pearl,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 2,
          },
          {
            item: itemList.sango_pearl,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 4,
          },
          {
            item: itemList.sango_pearl,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 8,
          },
          {
            item: itemList.sango_pearl,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 12,
          },
          {
            item: itemList.sango_pearl,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 20,
          },
          {
            item: itemList.sango_pearl,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.hellfire_butterfly,
    },
    element: elements.hydro,
  },
  sayu: {
    id: 'sayu',
    name: 'Sayu',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 11854,
      atk: 244,
      def: 745,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.crystal_marrow,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 2,
          },
          {
            item: itemList.crystal_marrow,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 4,
          },
          {
            item: itemList.crystal_marrow,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 8,
          },
          {
            item: itemList.crystal_marrow,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 12,
          },
          {
            item: itemList.crystal_marrow,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 20,
          },
          {
            item: itemList.crystal_marrow,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.gilded_scale,
    },
    element: elements.anemo,
  },
  sethos: {
    id: 'sethos',
    name: 'Sethos',
    rarity: 4,
    weapon: weapons.bow,
    stats: {
      hp: 9787,
      atk: 227,
      def: 560,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.trishiraite,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 2,
          },
          {
            item: itemList.trishiraite,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 4,
          },
          {
            item: itemList.trishiraite,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 8,
          },
          {
            item: itemList.trishiraite,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 12,
          },
          {
            item: itemList.trishiraite,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 20,
          },
          {
            item: itemList.trishiraite,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.dakas_bell,
    },
    element: elements.electro,
  },
  shenhe: {
    id: 'shenhe',
    name: 'Shenhe',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 12993,
      atk: 304,
      def: 830,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.qingxin,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 2,
          },
          {
            item: itemList.qingxin,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 4,
          },
          {
            item: itemList.qingxin,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 8,
          },
          {
            item: itemList.qingxin,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 12,
          },
          {
            item: itemList.qingxin,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 20,
          },
          {
            item: itemList.qingxin,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.hellfire_butterfly,
    },
    element: elements.cryo,
  },
  shikanoin_heizou: {
    id: 'shikanoin_heizou',
    name: 'Shikanoin Heizou',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 10657,
      atk: 225,
      def: 684,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.onikabuto,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 2,
          },
          {
            item: itemList.onikabuto,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 4,
          },
          {
            item: itemList.onikabuto,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 8,
          },
          {
            item: itemList.onikabuto,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 12,
          },
          {
            item: itemList.onikabuto,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 20,
          },
          {
            item: itemList.onikabuto,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.the_meaning_of_aeons,
    },
    element: elements.anemo,
  },
  sigewinne: {
    id: 'sigewinne',
    name: 'Sigewinne',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 13348,
      atk: 193,
      def: 500,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.romaritime_flower,
            amount: 3,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 2,
          },
          {
            item: itemList.romaritime_flower,
            amount: 10,
          },
          {
            item: itemList.transoceanic_pearl,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 4,
          },
          {
            item: itemList.romaritime_flower,
            amount: 20,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 8,
          },
          {
            item: itemList.romaritime_flower,
            amount: 30,
          },
          {
            item: itemList.transoceanic_chunk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 12,
          },
          {
            item: itemList.romaritime_flower,
            amount: 45,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.water_that_failed_to_transcend,
            amount: 20,
          },
          {
            item: itemList.romaritime_flower,
            amount: 60,
          },
          {
            item: itemList.xenochromatic_crystal,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.transoceanic_pearl, itemList.transoceanic_chunk, itemList.xenochromatic_crystal],
      book: [itemList.teachings_of_equity, itemList.guide_to_equity, itemList.philosophies_of_equity],
      boss: itemList.lightless_eye_of_the_maelstrom,
    },
    element: elements.hydro,
  },
  sucrose: {
    id: 'sucrose',
    name: 'Sucrose',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 9244,
      atk: 170,
      def: 703,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 2,
          },
          {
            item: itemList.windwheel_aster,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 4,
          },
          {
            item: itemList.windwheel_aster,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 8,
          },
          {
            item: itemList.windwheel_aster,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 12,
          },
          {
            item: itemList.windwheel_aster,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 20,
          },
          {
            item: itemList.windwheel_aster,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.anemo,
  },
  tartaglia: {
    id: 'tartaglia',
    name: 'Tartaglia',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 13103,
      atk: 301,
      def: 815,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.starconch,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.starconch,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.starconch,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.starconch,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.starconch,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.starconch,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.shard_of_a_foul_legacy,
    },
    element: elements.hydro,
  },
  thoma: {
    id: 'thoma',
    name: 'Thoma',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 10331,
      atk: 202,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 2,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 4,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 8,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 12,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 20,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.hellfire_butterfly,
    },
    element: elements.pyro,
  },
  tighnari: {
    id: 'tighnari',
    name: 'Tighnari',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 10850,
      atk: 268,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 2,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 4,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 8,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 12,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 20,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.the_meaning_of_aeons,
    },
    element: elements.dendro,
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
  traveler_dendro: {
    id: 'traveler_dendro',
    name: 'Traveler (Dendro)',
    rarity: 5,
    element: elements.dendro,
    weapon: weapons.sword,
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.brilliant_diamond_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_fragment,
            amount: 3,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_fragment,
            amount: 6,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_chunk,
            amount: 3,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_chunk,
            amount: 6,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_gemstone,
            amount: 6,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        itemList.fungal_spores,
        itemList.luminescent_pollen,
        itemList.luminescent_pollen,
        itemList.luminescent_pollen,
        itemList.luminescent_pollen,
        itemList.crystalline_cyst_dust,
        itemList.crystalline_cyst_dust,
        itemList.crystalline_cyst_dust,
        itemList.crystalline_cyst_dust,
      ],
      book: [
        itemList.teachings_of_admonition,
        itemList.guide_to_ingenuity,
        itemList.guide_to_praxis,
        itemList.guide_to_admonition,
        itemList.guide_to_ingenuity,
        itemList.philosophies_of_praxis,
        itemList.philosophies_of_admonition,
        itemList.philosophies_of_ingenuity,
        itemList.philosophies_of_praxis,
      ],
      boss: itemList.mudra_of_the_malefic_general,
    },
    element: elements.dendro,
  },
  venti: {
    id: 'venti',
    name: 'Venti',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 10531,
      atk: 263,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cecilia,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 2,
          },
          {
            item: itemList.cecilia,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 4,
          },
          {
            item: itemList.cecilia,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 8,
          },
          {
            item: itemList.cecilia,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 12,
          },
          {
            item: itemList.cecilia,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 20,
          },
          {
            item: itemList.cecilia,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.tail_of_boreas,
    },
    element: elements.anemo,
  },
  wanderer: {
    id: 'wanderer',
    name: 'Wanderer',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 10164,
      atk: 328,
      def: 607,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 2,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 4,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 8,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 12,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 20,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.dakas_bell,
    },
    element: elements.anemo,
  },
  wriothesley: {
    id: 'wriothesley',
    name: 'Wriothesley',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 13593,
      atk: 311,
      def: 763,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.subdetection_unit,
            amount: 3,
          },
          {
            item: itemList.meshing_gear,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.tourbillon_device,
            amount: 2,
          },
          {
            item: itemList.subdetection_unit,
            amount: 10,
          },
          {
            item: itemList.meshing_gear,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.tourbillon_device,
            amount: 4,
          },
          {
            item: itemList.subdetection_unit,
            amount: 20,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.tourbillon_device,
            amount: 8,
          },
          {
            item: itemList.subdetection_unit,
            amount: 30,
          },
          {
            item: itemList.mechanical_spur_gear,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.tourbillon_device,
            amount: 12,
          },
          {
            item: itemList.subdetection_unit,
            amount: 45,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.tourbillon_device,
            amount: 20,
          },
          {
            item: itemList.subdetection_unit,
            amount: 60,
          },
          {
            item: itemList.artificed_dynamic_gear,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.meshing_gear, itemList.mechanical_spur_gear, itemList.artificed_dynamic_gear],
      book: [itemList.teachings_of_order, itemList.guide_to_order, itemList.philosophies_of_order],
      boss: itemList.primordial_greenbloom,
    },
    element: elements.cryo,
  },
  xiangling: {
    id: 'xiangling',
    name: 'Xiangling',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 10875,
      atk: 225,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.jueyun_chili,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.jueyun_chili,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.jueyun_chili,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.jueyun_chili,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.jueyun_chili,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.jueyun_chili,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.dvalins_claw,
    },
    element: elements.pyro,
  },
  xianyun: {
    id: 'xianyun',
    name: 'Xianyun',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 10409,
      atk: 335,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.clearwater_jade,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 2,
          },
          {
            item: itemList.clearwater_jade,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 4,
          },
          {
            item: itemList.clearwater_jade,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 8,
          },
          {
            item: itemList.clearwater_jade,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 12,
          },
          {
            item: itemList.clearwater_jade,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.cloudseam_scale,
            amount: 20,
          },
          {
            item: itemList.clearwater_jade,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.lightless_eye_of_the_maelstrom,
    },
    element: elements.anemo,
  },
  xiao: {
    id: 'xiao',
    name: 'Xiao',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 12736,
      atk: 349,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.qingxin,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 2,
          },
          {
            item: itemList.qingxin,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 4,
          },
          {
            item: itemList.qingxin,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 8,
          },
          {
            item: itemList.qingxin,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 12,
          },
          {
            item: itemList.qingxin,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 20,
          },
          {
            item: itemList.qingxin,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.shadow_of_the_warrior,
    },
    element: elements.anemo,
  },
  xilonen: {
    id: 'xilonen',
    name: 'Xilonen',
    rarity: 5,
    weapon: weapons.sword,
    stats: {
      hp: 12405,
      atk: 275,
      def: 930,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.brilliant_chrysanthemum,
            amount: 3,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 2,
          },
          {
            item: itemList.brilliant_chrysanthemum,
            amount: 10,
          },
          {
            item: itemList.sentrys_wooden_whistle,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 4,
          },
          {
            item: itemList.brilliant_chrysanthemum,
            amount: 20,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 8,
          },
          {
            item: itemList.brilliant_chrysanthemum,
            amount: 30,
          },
          {
            item: itemList.warriors_metal_whistle,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 12,
          },
          {
            item: itemList.brilliant_chrysanthemum,
            amount: 45,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.gold_inscribed_secret_source_core,
            amount: 20,
          },
          {
            item: itemList.brilliant_chrysanthemum,
            amount: 60,
          },
          {
            item: itemList.saurian_crowned_warriors_golden_whistle,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        itemList.sentrys_wooden_whistle,
        itemList.warriors_metal_whistle,
        itemList.saurian_crowned_warriors_golden_whistle,
      ],
      book: [itemList.teachings_of_kindling, itemList.guide_to_kindling, itemList.philosophies_of_kindling],
      boss: itemList.mirror_of_mushin,
    },
    element: elements.geo,
  },
  xingqiu: {
    id: 'xingqiu',
    name: 'Xingqiu',
    rarity: 4,
    weapon: weapons.sword,
    stats: {
      hp: 10222,
      atk: 202,
      def: 758,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.silk_flower,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.silk_flower,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.silk_flower,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.silk_flower,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.silk_flower,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.silk_flower,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.tail_of_boreas,
    },
    element: elements.hydro,
  },
  xinyan: {
    id: 'xinyan',
    name: 'Xinyan',
    rarity: 4,
    weapon: weapons.claymore,
    stats: {
      hp: 11201,
      atk: 249,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.violetgrass,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.violetgrass,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.violetgrass,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.violetgrass,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.violetgrass,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.violetgrass,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.tusk_of_monoceros_caeli,
    },
    element: elements.pyro,
  },
  yae_miko: {
    id: 'yae_miko',
    name: 'Yae Miko',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 10372,
      atk: 340,
      def: 569,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 2,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 4,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 8,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 12,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 20,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.the_meaning_of_aeons,
    },
    element: elements.electro,
  },
  yanfei: {
    id: 'yanfei',
    name: 'Yanfei',
    rarity: 4,
    weapon: weapons.catalyst,
    stats: {
      hp: 9352,
      atk: 240,
      def: 587,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 2,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 4,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 8,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 12,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 20,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.bloodjade_branch,
    },
    element: elements.pyro,
  },
  yaoyao: {
    id: 'yaoyao',
    name: 'Yaoyao',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 12289,
      atk: 212,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.jueyun_chili,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 2,
          },
          {
            item: itemList.jueyun_chili,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 4,
          },
          {
            item: itemList.jueyun_chili,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 8,
          },
          {
            item: itemList.jueyun_chili,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 12,
          },
          {
            item: itemList.jueyun_chili,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 20,
          },
          {
            item: itemList.jueyun_chili,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.dakas_bell,
    },
    element: elements.dendro,
  },
  yelan: {
    id: 'yelan',
    name: 'Yelan',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 14450,
      atk: 244,
      def: 548,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.starconch,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 2,
          },
          {
            item: itemList.starconch,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 4,
          },
          {
            item: itemList.starconch,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 8,
          },
          {
            item: itemList.starconch,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 12,
          },
          {
            item: itemList.starconch,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 20,
          },
          {
            item: itemList.starconch,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.gilded_scale,
    },
    element: elements.hydro,
  },
  yoimiya: {
    id: 'yoimiya',
    name: 'Yoimiya',
    rarity: 5,
    weapon: weapons.bow,
    stats: {
      hp: 10164,
      atk: 323,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.naku_weed,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 2,
          },
          {
            item: itemList.naku_weed,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 4,
          },
          {
            item: itemList.naku_weed,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 8,
          },
          {
            item: itemList.naku_weed,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 12,
          },
          {
            item: itemList.naku_weed,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 20,
          },
          {
            item: itemList.naku_weed,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.dragon_lords_crown,
    },
    element: elements.pyro,
  },
  yumemizuki_mizuki: {
    id: 'yumemizuki_mizuki',
    name: 'Yumemizuki Mizuki',
    rarity: 5,
    weapon: weapons.catalyst,
    stats: {
      hp: 12736,
      atk: 215,
      def: 757,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 2,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 4,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 8,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 12,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.talisman_of_the_enigmatic_land,
            amount: 20,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.fading_candle,
    },
    element: elements.anemo,
    new: true,
  },
  yun_jin: {
    id: 'yun_jin',
    name: 'Yun Jin',
    rarity: 4,
    weapon: weapons.polearm,
    stats: {
      hp: 10657,
      atk: 191,
      def: 734,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.glaze_lily,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 2,
          },
          {
            item: itemList.glaze_lily,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 4,
          },
          {
            item: itemList.glaze_lily,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 8,
          },
          {
            item: itemList.glaze_lily,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 12,
          },
          {
            item: itemList.glaze_lily,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 20,
          },
          {
            item: itemList.glaze_lily,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.ashen_heart,
    },
    element: elements.geo,
  },
  zhongli: {
    id: 'zhongli',
    name: 'Zhongli',
    rarity: 5,
    weapon: weapons.polearm,
    stats: {
      hp: 14695,
      atk: 251,
      def: 738,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cor_lapis,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.cor_lapis,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.cor_lapis,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.cor_lapis,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.cor_lapis,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.cor_lapis,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.tusk_of_monoceros_caeli,
    },
    element: elements.geo,
  },
};
