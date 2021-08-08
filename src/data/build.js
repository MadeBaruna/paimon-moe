export const builds = {
  sucrose: {
    roles: {
      'EM BUILD': {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'favonius_codex',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['instructor'],
          ['instructor', 'wanderers_troupe'],
          ['viridescent_venerer', 'wanderers_troupe'],
        ],
        mainStats: {
          sands: 'Elemental Mastery',
          goblet: 'Elemental Mastery',
          circlet: 'Elemental Mastery',
        },
        subStats: ['Elemental Mastery', 'ATK%', 'Crit Rate / DMG', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip:
          "When utilized as a Viridescent Venerer (4) buffer, make sure you don't immediately swap away after casting Skill/Burst, you need to be on-field when the swirl reaction happens for you to trigger the 4-set effect.",
        note:
          "People often compare Sucrose with Venti for Crowd-Control capabilities, but that's not what you'll be looking for. Sucrose is a character that can give Elemental Mastery to her teammates through swirling the correct elements (Ascension 1 Talent), which improves reaction damage for the Characters benefitting from the EM boost. Her Ascension 4 Talent also boosts the entire team's EM by 20% of Sucrose's total EM, this is why you want to stack as much elemental mastery as possible in her artifacts. As a support, most of Sucrose's value lies on her Ascension 1 and 4 talents, hence leveling her other talents (Normal Attack, Skill, and Burst) is not required.\n\nRegarding Weapon Priority: It's important to note that these weapons were ranked based on how much EM they offered you. However, this doesn't take into account how much each catalyst benefits your entire team's DPS. It's worth noting that Thrilling Tales overtakes the other weapons on the list when it comes to enabling your team.\n\nRegarding Energy Recharge Priority: Ranking is based on the assumption that Sucrose has Sacrificial Fragments and is not valued for her Burst in teams that may not want Sucrose's Burst interfering with elemental auras. Energy Recharge could be prioritized higher when Sucrose is utilized in teams that don't really mind which element is being applied first and last (e.g. Electro Charge).",
      },
    },
  },
  traveler_anemo: {
    roles: {
      'DPS ANEMO': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'sword_of_descension',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['viridescent_venerer', '+18%_atk_set'],
          ['noblesse_oblige', 'viridescent_venerer'],
          ['+18%_atk_set', 'martial_artist'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Anemo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note:
          "This section is dedicated to utilising the Anemo Traveller's Anemo Skill/ Burst. Due to how little field time this playstyle takes, the traveller can also fulfill the role of a quickswap style Sub-DPS.",
      },
      'DPS PHYSICAL': {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['+18%_atk_set', 'pale_flame'],
          ['+18%_atk_set', 'bloodstained_chivalry'],
          ['brave_heart', 'berserker'],
          ['martial_artist', 'berserker'],
          ['resolution_of_sojourner', 'berserker'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note:
          'When running Pale Flame (4), make sure you do Press Cast and not Hold Cast, as the Hold Cast Skill Cooldown would be too long for you to refresh your Pale Flame (4) stacks.',
      },
    },
  },
  jean: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [
          ['bloodstained_chivalry', 'pale_flame'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['pale_flame', '+18%_atk_set'],
          ['+18%_atk_set', 'viridescent_venerer'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical Damage',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip:
          "Jean's Elemental Burst continuously imbues characters in zone with Anemo status, that means it can cleanse all elemental statuses aside from Dendro",
        note:
          "Jean's Elemental Skill can deal fall damage based off enemy's max HP% and fall velocity if you aim it upwards. Do note that some 4 stars outdps Jean, Jean is better off as a Support.",
      },
      'BURST / SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
            stack: 5,
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'summit_shaper',
            stack: 0,
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['noblesse_oblige', 'viridescent_venerer'],
          ['noblesse_oblige', 'viridescent_venerer', '+18%_atk_set', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Anemo Damage / ATK%',
          circlet: 'Crit Rate / DMG / ATK%',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          "Jean's Elemental Skill can be used to push smaller mobs and stagger bigger ones. Her healing scales with ATK.\n\nRegarding Freedom-Sworn:\nThe ranking here only assumes Jean's personal damage and not the utility it gives. If you want to furthermore buff your main DPS, you can give this sword to Jean as she can trigger Freedom-Sworn's skill relatively easily since Anemo is always trigger.\n\nSet 1 is the bread and butter for Anemo characters in general, as it is commonly used for the 40% elemental resistance shred.\nSet 2 Is aimed to improve Jean's burst damage and its general uptime.\nSet 3 is the other option for providing utilities to the team. This set gives a 20% partywide ATK boost after Jean casts her Elemental Burst.\nSet 4 provides more damage (and healing since her heals scale with ATK) for Jean. It's the go to set if you already have a 4 pc Viridescent Venerer user and/ or 4 pc Noblesse Oblige user on the team.\nSet 5 buffs her already huge burst multiplier even more. You can go for this set instead of Set 3 if you want more burst damage and don't need the extra heals.\n\nFor Support Jean, you can either go for more ATK for stronger heals, but relatively lower Burst uptime, or more ER for lower heals, but higher Burst uptime. Choosing between these two is up to personal preference, although if Venti is on the team, Jean has very little energy problem and can potentially go full Sub DPS build.\n\nRegarding Talent Priorities, if you prefer more damage than healing, prioritize Elemental Skill over Elemental Burst since it scales better.",
      },
    },
  },
  venti: {
    roles: {
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'the_stringless',
            refine: [4, 5],
          },
          {
            id: 'alley_hunter',
            refine: [5],
          },
          {
            id: 'the_stringless',
            refine: [1, 3],
          },
          {
            id: 'windblume_ode',
            refine: [5],
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
            refine: [1, 4],
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'rust',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['noblesse_oblige'],
          ['viridescent_venerer', 'noblesse_oblige'],
          ['viridescent_venerer', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'Elemental Mastery / ATK%',
          goblet: 'Elemental Mastery / Anemo DMG',
          circlet: 'Elemental Mastery / Crit Rate / DMG',
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on swirl first.(E > Q to avoid this issue)\n\nYou can infuse elements onto Venti's Burst if you walk up with an element status on you. (e.g. Bennett Burst > Venti Burst > Walk up to infuse Pyro)\n\nCheck out this link to see which characters can hit the enemies sucked and ragdolled in Venti's burst. (Sheet has not been updated since Yanfei release)",
        note:
          "This build focuses on damage over ER because of his ER ascension stat. This weapon order is in the assumption of EM venti, specifics about EM vs Crit venti can be found below.\n\nThe amount of swirls his burst can achieve depends on how long the original element's aura lasts and how many enemies are inside the burst. If it's a single target, the element might expire before being infused into the burst. If you keep refresh the aura and ensure the infusion has been activated early in the burst's duration by reapplying the element, then it can swirl up to 7 times. This can be seen here.\n\nSwirl can only cause two instances of AoE damage per element per target for a single AoE skill. This means that if you have two or more enemies with Pyro auras, and Swirl them with an AoE ability, only two instances of Swirl Pyro damage will occur on each target. This results in a max of 14 swirl damage procs against a single target throughout a single Venti burst, per element. Different elements follow a separate \"two instance\" rule.\n\nWhen Venti's burst swirls Hydro, only 7 total instances of Swirl can be done on each enemy. This is due to Hydro Swirl not dealing damage in an AoE, which is a property exclusive to Hydro. However, if Electro is consistently applied to a Hydro-infused Venti burst with 2 or more enemies, Venti will instead deal 21 total instances of Swirl damage on each enemy (14 from the Electro aura, 7 from the Hydro aura). This means that in certain builds where swirling only hydro is necessary, it is still better to build crit than EM. Further analysis on swirl can be seen here.\n\nRegarding Skyward Harp: Skyward Harp becomes better if used in a pure crit build with Bennett. Crit build ONLY outperforms EM build on high constellation (C4-C6) Venti with the help of Bennett burst or C0 with unrealistic (~30% or above crit value substats per artifact) substats plus Bennett burst. Generally it is better to build EM on low constellation Venti.\n\nElegy for the End's ATK buff DOES NOT buff Venti's burst if Venti is the one equipping the bow, but the EM buff affects Venti's Swirl reaction. This is due to Venti's burst snapshotting his stats (excluding EM toward transformative reactions) at the time of cast. Swirl is considered a transformative reaction.",
      },
    },
  },
  xiao: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'lithic_spear',
            stack: 2,
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['viridescent_venerer', '+18%_atk_set'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Anemo DMG',
          circlet: 'Crit DMG > Crit Rate',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "Regarding Xiao's Optimal Skill Rotation:\nE > E > Q > Plunge Combo\n\nRegarding Xiao's Plunge Combo:\nBest combo for Xiao when fighting a single target:\nPlunge -> Normal Attack -> Charged Attack -> Plunge\n\nBest combo for Xiao when fighting multiple enemies:\nPlunge -> Normal Attack -> Plunge",
        note:
          "Xiao has issues with Energy regeneration because he cannot generate any particles with his Elemental Skill while his Burst is active, so it is not suggested to use his Elemental Skill during Elemental Burst.\n\nStart off a fight by casting the skill of your Anemo Battery and then casting his skill twice (three times at C1) then cast your burst immediately. You will want to be half way through your burst animation before the particles reach you, so this way you can start off your burst with a portion of the energy gauge already filled. Same goes for any other Anemo Battery (recommended below), cast skill and swap back to Xiao to cast burst before the particles reach you.\n\nYou'll want to pair Xiao with another Anemo character (Venti, Sucrose, Jean or Anemo Traveler) to help him gain energy while his Elemental Burst is on cooldown. Xiao's Elemental Burst ends when you swap to another character. Although he has two charges of his Elemental Skill, only ONE charge comes back per cooldown.\n\nRegarding Weapon options: With a proper anemo battery (e.g. Sucrose), Xiao needs as little as 120-130% ER to maintain a high burst uptime. In these scenarios, unless there are no ERs from substats, you should always go for a non-ER weapon as it will result in more damage.",
      },
    },
  },
  kaedehara_kazuha: {
    roles: {
      'EM BUILD': {
        recommended: true,
        weapons: [
          {
            id: 'freedom-sworn',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'dark_iron_sword',
          },
        ],
        artifacts: [['viridescent_venerer'], ['instructor']],
        mainStats: {
          sands: 'Elemental Mastery / Energy Recharge',
          goblet: 'Elemental Mastery',
          circlet: 'Elemental Mastery',
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "The element which is absorbed by Kazuha's elemental burst follows the priority of Pyro > Hydro > Electro > Cryo, and can be absorbed from both the active character and enemies. (i.e. Standing in Bennett burst will result in Kazuha's burst infusing pyro as Bennett applies pyro to the active character)",
        note:
          "Kazuha's 4th Ascension Passive encourages players to maximise Elemental Mastery in order to maximise his utility.\n\nRegarding Weapon Rankings: While Iron Sting will yield the highest upfront EM and teamwide buff, Kazuha struggles to maintain high burst uptime without energy recharge or a battery. Hence, swords with Energy Recharge substats are favoured over Iron Sting UNLESS KAZUHA IS IN A DUAL ANEMO TEAM.\n\nSimilar to Venti, due to the EM buffs, a triple EM build will out-damage a regular ATK || EM / Anemo / Crit build as long as there are 2+ enemies due to the amount of swirls involved. Because of this, we do not recommend building him with crit unless he is in a team whereby he cannot make use of his A4 passive or swirls. (i.e. mono anemo/geo teams)",
      },
    },
  },
  diona: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'recurve_bow',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['maiden_beloved'],
          ['maiden_beloved', 'tenacity_of_the_millelith'],
          ['maiden_beloved', 'emblem_of_severed_fate'],
          ['the_exile'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'HP% / Healing Bonus',
        },
        subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Diona's Elemental Skill grants you a cryo shield which allows cleansing. Every time you swap characters with the shield up, it applies cryo. This acts as a cleanse.",
        note:
          "The shielding Diona puts out should offset the need for healing from her burst. The damage boost from Noblesse Oblige (4) has more practical use. Additionally, her first constellation greatly increases her ultimate uptime, further lowering the healing needed.\n\nAs a support, Diona's typically used for three things; Shielding, Healing, and Cryo particle generation. Pairing Diona with Cryo carries such as Ganyu and Eula allows you to funnel energy into your DPS characters while providing them with quick shields for stagger resistance. Weapons such as Sacrificial Bow and Favonius Warbow greatly increase her potential as a battery.\n\nRegarding mainstat choices: Full Stack HP% is recommended if you want stronger shields but a weaker heal. Go for a HB Circlet if you want a nice balance between the two.\n\nRegarding Talent Priority: Prioritise whichever your Diona is geared for (shielder or healer), if built for a balance between the two, level both equally.\n\nRegarding Weapon Choice:\nSacrificial Bow VS Favonius Warbow: Sacrificial Bow wins, especially at higher refinements.\nFavonius Warbow: You will look to build some Crit Rate coverage to have a higher chance of triggering bow passive for energy.\nRecurve Bow: This bow will be your best choice for stronger shields, but it reduces Diona's burst uptime significantly due to no Energy Recharge on her weapon.",
      },
    },
  },
  chongyun: {
    roles: {
      'SUB DPS/NUKE': {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'blizzard_strayer'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer', 'wanderers_troupe', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge / Elemental Mastery',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Chongyun's Elemental Burst is calculated as Claymore damage, which means it breaks Geo Structures/ Shields at a much easier rate and can proc shatter.",
        note:
          "Chongyun is much preferred as a Sub DPS/ Nuke over Main DPS as his Normal Attack scalings are very low, even when including Constellation 1. His Elemental Burst on the other hand hits extremely hard on later constellations and takes a much higher total damage portion over his Normal Attack. On top of that, you can Reverse Melt all 3 hits of his Elemental Burst on enemies applied with strong Pyro, such as Bennett's Elemental Skill and Elemental Burst.\n\nChongyun is very niche as he only performs well in certain teams and can completely destroy the other. He is mainly used on a team as an enabler, be it for Reverse Melt teams (e.g. Melt DPS Bennett) or Freeze teams (e.g. Freeze DPS Kaeya). He also does not function well with Physical teams (e.g. Razor, Eula) as it renders his Elemental Skill useless because it converts their Normal Attack damage from Physical to Cryo. They're usually using a Physical Goblet, so if they got their Normal Attack converted from Physical to Cryo, they won't benefit from Physical DMG Bonus from the goblet, thus it's a DPS loss.\n\nAt [C2], his Elemental Skill reduces ability cooldown that is casted within the zone by 15%. This is one of the few abilities in the game that can reduce cooldown.\n\nRegarding Sacrificial Greatsword: This weapon is your best choice if faced in a situation where you heavily rely on Chongyun's cryo infusion uptime (e.g. against Abyss Heralds). Current rankings are damage oriented.\n\nRegarding Noblesse Oblige (4): This set has the potential to outperform the other artifact sets in terms of teamwide DPS potential as Chongyun can achieve 100% buff uptime if he bursts off cooldown.\n\nRegarding Talent Priority:\nPrioritize Elemental Burst on a Melt team as it offers a huge DPS boost.\n\nPrioritize Elemental Skill on a Freeze team to furthermore extend the duration of the cryo infusion.",
      },
    },
  },
  kaeya: {
    roles: {
      'CRYO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'cool_steel',
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['blizzard_strayer', '+18%_atk_set'],
          ['gladiators_finale'],
          ['blizzard_strayer', 'noblesse_oblige'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit DMG',
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Flat ATK', 'Crit Rate'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          'As a Freeze DPS, he gains over 55%+ Crit Rate with the right team set up:\n- 15% from Cryo Resonance against Cryo affected enemies\n- 40% from Blizzard Strayer against Frozen enemies\n- 15% from C1 against Cryo affected enemies\n\nHere is a simple showcase of how a Freeze Kaeya DPS would work:\nhttps://www.bilibili.com/video/BV19Z4y1371S?zw',
        note:
          "Kaeya is very strong with Blizzard Strayer (4) and in the right comp.\n\nSee side notes for more info and see the link for reference and to credit the user that provided this build.\n\nKaeya Cryo DPS is mostly used in a team with Chongyun and Xingqiu/Barbara while having Blizzard Strayer (4) equipped. In this team, Kaeya has 55% crit rate against frozen enemies without any additional Crit stats, which means weapons with Crit Rate stats would usually be unnecessary and easier to reach diminishing returns.\n\nRegarding Pale Flame (4): This set is difficult to fully utilise due to Kaeya's skill cooldown being 6 seconds. The full set effect requires 2 stacks to be active at any given time, so maintaining stacks can be difficult when considering rotations between characters.",
      },
      'PHYSICAL DPS': {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'blackcliff_longsword',
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame'],
          ['gladiators_finale'],
          ['pale_flame', '+18%_atk_set'],
          ['bloodstained_chivalry', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate/DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_blade',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['noblesse_oblige', 'the_exile'],
          ['noblesse_oblige', 'scholar'],
          ['the_exile', 'scholar'],
          ['instructor'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Elemental Mastery'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          "His burst makes him an excellent source of cryo application for characters that often stay in melee range, although his burst can't be fully utilized with Reverse Melt teams due to how his Cryo damage is split into a barrage of attacks.\n\nIn most teams, investment for damage is not a necessity, most notable examples are Razor teams and Hutao Xingqiu teams where his general purpose is to apply Cryo, instead of being the damage dealer. This does not mean that he should not be invested, but is still useful even without proper investments.",
      },
    },
  },
  rosaria: {
    roles: {
      'CRYO DPS': {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'blackcliff_pole',
            stack: 3,
          },
          {
            id: 'lithic_spear',
            stack: 3,
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'white_tassel',
            refine: [5],
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['gladiators_finale'],
          ['blizzard_strayer', '+18%_atk_set'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit DMG',
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Crit Rate', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          'If Rosaria is played in a reverse melt team comp, the talent priority should be:Burst > Normal Attack > Skill',
        note:
          "This section is dedicated for Rosaria's synergy with Chongyun, which allows her attacks to be infused with cryo.\nIf played in a permafreeze setup, Rosaria has the same team comp as Freeze kaeya. Check Kaeya's ability tips section for teamcomp setup.\n\nRegarding substat choices: Energy Recharge has a higher priority over Crit Rate until the 150% mark.\nCompared to Kaeya, Rosaria has even less desire for Crit Rate, as her Ascension 1 Talent includes an extra 12% Crit Rate once skill hits the back of an enemy.\n\nRegarding Dragon's Bane: This ranking for dragon's bane is only if Rosaria is played in a team comp in which she triggers reverse melt, otherwise do not use this weapon.",
      },
      'PHYSICAL DPS': {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'crescent_pike',
          },
          {
            id: 'lithic_spear',
            stack: 3,
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'lithic_spear',
            stack: 1,
          },
          {
            id: 'dragonspine_spear',
          },
          {
            id: 'white_tassel',
            refine: [5],
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame'],
          ['gladiators_finale'],
          ['pale_flame', '+18%_atk_set'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['blizzard_strayer'],
          ['retracing_bolide'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note:
          "Regarding Pale Flame (4): This set is difficult to fully utilise due to Rosaria's skill cooldown being 6 seconds. The full set effect requires 2 stacks to be active at any given time, so maintaining stacks can be difficult when considering rotations between characters.\n\nRegarding Gladiator's Finale (2) Bloodstained Chivalry (2) / Pale Flame (2): This set is better than Gladiator's Finale (4) if Rosaria is running Crescent Pike (4⭐). This is because the 4-set effect of Gladiator's Finale does not stack with Crescent Pike's passive.\n\nRegarding Blizzard Strayer (4): It has been tested that Rosaria's Q is required to maintain uptime on 4pc blizzard strayer (due to fischl/beidou stealing cryo procs for superconduct). Due to the low uptime of Rosaria's Q at [C0] this artifact set should only be recommended at [C2+].",
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
            stack: 3,
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'white_tassel',
            refine: [5],
          },
        ],
        artifacts: [['noblesse_oblige'], ['noblesse_oblige', 'blizzard_strayer'], ['noblesse_oblige', 'berserker']],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG*',
        },
        subStats: ['Crit Rate', 'Elemental Mastery', 'Energy Recharge', 'Crit DMG', 'ATK%'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Be sure to cast skill before burst as Crit Rate granted by the Ascension 1 Talent will be included with Ascension 4 Talent Bonus as well.\n\nRosaria's skill and burst can be reverse melted (1.5x) using Bennett or a pyro main DPS for some quick and powerful damage. More on this can be seen https://youtu.be/5-WywJcsAt8",
        note:
          "This Sub DPS section is tailored around giving Rosaria as much damage as possible. Crit Rate stacking is not as necessary, if 50% Crit Rate is guaranteed at the very least, you will still be giving crit rate buffs of 9.7% with the Ascension 1 Talent Bonus.\n\nElemental Mastery is only recommended if Rosaria is to be utilized as a Reverse Melt trigger, as shown in the Ability Tips section.\n\nThe following is only recommended to those who have not obtained a desirable set for Rosaria, with crit rate building as her place holder set.\nIf you don't wish to hyper invest onto Rosaria, she could still be used as a crit rate battery, you can build up to 88% Crit Rate and use skill to cap out 100% Crit Rate, then burst for easy crit rate buff. This can be easily achievable if you have an existing Crit Rate substat polearm, otherwise just put on whatever Crit Rate Circlet, substat and Berserker artifacts you may have.",
      },
    },
  },
  qiqi: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'fillet_blade',
          },
          {
            id: 'cool_steel',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['maiden_beloved'],
          ['maiden_beloved', 'gladiators_finale'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'ATK% / Cryo DMG Bonus',
          circlet: 'ATK% / Healing Bonus',
        },
        subStats: ['ATK%', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "QiQi's ES when casted can still work while swimming, if you're trying to travel far distances across water, cast ES and just keep going forward.",
        note:
          "Qiqi's Burst has an 80 energy cost with her skill not generating any energy until c1. Energy Recharge will greatly benefit Qiqi, while her Burst should be kept as a last resort.\n\nQiqi's Burst allows other characters to maximize DPS field time while offering healing from being off-field. At Ascension 4, her Normal Attack applies the healing talisman onto an enemy with a cool down of 30 seconds.\n\nTenacity of the Millelith allows Qiqi to give the team a decent ATK boost (and shield strength boost if your team contains a Shielder) while staying in enemy melee reach with Skill active. Sacrificial Sword increases the uptime of her Skill, which in turn increases the uptime of the team's ATK and Shield Strength boost. If you find that your Qiqi's heals are often more than enough, you may consider switching her to this artifact set.",
      },
    },
  },
  ganyu: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'the_stringless',
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['shimenawas_reminiscence'],
          ['wanderers_troupe'],
          ['blizzard_strayer', '+18%_atk_set'],
          ['retracing_bolide'],
          ['heart_of_depth'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          'Charge Attack spam is her main source of damage. Do note that her Frostflake arrow crits (2nd charge) hits Crit separately. Your Charge Shot could crit while the Frostflake arrow does not.\n\nHer skill generates 4 Cryo energy particles separately, 2 from initial cast and 2 from explosion, energy is only generated when an enemy is hit.\n\nWhen using her Elemental burst, make sure to stand inside to benefit from the Cryo DMG Bonus buff.',
        note:
          "NOTE: Amos is an excellent weapon for Ganyu since her Charge Attack's Bloom extends arrow flight duration and you can get 4 stacks of amos even on point blank range.\n\nRegarding Blizzard Strayer (4): is a build for Frozen team comp, whereas you focus all your stats on Crit DMG while prioritizing ATK% over Crit Rate%. This has high damage and energy sustainability while also be used outside of Freeze comps for a flat 20% Crit Rate against enemies with a Cryo status. A Hydro Support would be appreciated with Blizzard Strayer (4) Ganyu. Highly Recommended, especially for players who have Ganyu at C4.\n\nKeep in mind that for this set, Elemental Mastery is not going to be used at all.\n\nRegarding Wanderer's Troupe (4): is a set that focuses on maximizing Charged Shot damage with Reverse Melt since the initial hit and Bloom have a separate ICD which allows you to Reverse Melt both hits. Highly Recommended, as Xiangling, the best Pyro support for this team is easily accessible while also offering consistent damage output.\n\nKeep in mind that for this set, Ganyu's Burst will not be used at all since it interrupts with Reverse Melting her Charged Shot.\n\nRegarding Gladiator's Finale (2) Blizzard Strayer (2): is the generalist set, and provides an overall damage increase to all aspects to her kit. Recommended as a placeholder set.\n\nRegarding Retracing bolide(4): is an alternative to set 2 but ONLY if you pair ganyu with Zhongli. Zhongli is the only character in the game with permanent shield uptime on his own. Diona (sacrificial bow) still has downtime on her shield since the shield lasts 12 seconds on skill lvl 7+ (hold e) and sacrificial bow has a 30 second cooldown. Recommended as a placeholder set.\n\nRegarding Heart of Depth (4): is also an alternative to set 2 if you don't have Zhongli. Only use this set when you already have existing HoD pieces, in cases when you, for example, have been trying to get Blizzard pieces but end up with only HoD pieces. It is Not Recommended to Farm.",
      },
      'SUB DPS': {
        recommended: false,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'windblume_ode',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'royal_bow',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'blizzard_strayer'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "When using her burst, place her skill in the AOE to taunt and keep enemies inside the zone for constant damage.\n\nMake sure to hit enemies with her skill's initial damage and her explosion damage as they both regen energy for her ult.",
        note:
          "NOTE: For weapons, Stringless is BiS only when Ganyu is used as a reverse melt sub dps, Skyward Harp is BiS for any other build.\n\nRegarding Noblesse Oblige (2) Blizzard Strayer (2): is the generalist set, it focuses on dealing damage with her elemental burst and constantly affecting enemies with cryo for reactions.\n\nRegarding Gladiator's Finale (2) Noblesse Oblige (2): has the same ease of use as Set 1, however it deals overall less damage than Set 1.\n\nRegarding Gladiator's Finale (2) Blizzard Strayer (2): same as Set 1 and Set 2, just deals less damage compared to both.\n\nRegarding Noblesse Oblige (4): is a pure support build for Ganyu, focuses on her using her burst and switching out to to your main dps for extra damage (Gives a 20% boost to DMG) and to trigger reactions. Use this set if you are only using her Burst and to support your main DPS.\n\nYou would want at least 140% ER with a support Ganyu, although from testing, with a DPS Ganyu at 111% ER, the ult uptime is already 100% so you don't have to invest a lot of stats into Energy Recharge explicitly, you want to focus more on Crit Rate/DMG and EM. The stats priority, Crit Rate/DMG and Elemental Mastery is interchangeable depending on what team comp you're using Ganyu as a support is in. Elemental Mastery would be no. 2 priority for Reverse Melt comps, while Crit Rate/DMG for a more general purpose, and Crit Rate/DMG is generally more versatile and useful.",
      },
    },
  },
  eula: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'lithic_blade',
            stack: 1,
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'skyrider_greatsword',
            refine: [5],
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame', 'bloodstained_chivalry', '+18%_atk_set'],
          ['gladiators_finale'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'ATK%', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          'Normal combo while no Burst:\nNA Spam > Tap Skill > NA Spam > Tap Skill\n\nBurst combo:\nTap Skill > Burst > 4 NA > Hold Skill > 4 NA\n\nBurst combo that generates more energy at the cost of slightly less DPS:\nTap Skill > Burst > Tap Skill > 4 NA > Dash Cancel > 2 NA > Hold Skill > 2 NA',
        note:
          "Eula's weapon rankings assume that you're running her with a cryo battery (i.e. Diona) instead of Bennett and that she has more than 30% ER substats from her artifacts alone. Increasing it to 40% through substats can help alleviate her energy issues.\n\nEula's burst does not snapshot. This means that any buffs Eula has upon casting burst will not be taken into effect if the buff duration expires before the Lightfall Sword hits.\n\nRegarding Pale Flame (4): This is Eula's optimal artifact set and it relies on having a condition fulfilled in order to outperform Pale Flame (2) + Bloodstained Chivalry (2). If you are able to sustain the conditional buff, you will be able to achieve a 50% Physical DMG Bonus + 18% Atk. Without using your Elemental Burst, you can sustain the Pale Flame's 4 set bonus because each stack lasts 7s and it refreshes per stack, and Eula's Elemental Skill is only 4s when doing 1-taps, therefore you can keep the condition up.\n\nWhen using this set, it is recommended to not use hold skill cast until your Lightfall Sword is nearly about to end. This restriction is only for players who don't have Eula C2 or above. Please visit the Ability Tips for her combo.\n\nRegarding Pale Flame (2) + Bloodstained Chivalry (2): This is a non-conditional, consistent artifact set that provides you a constant 50% physical dmg bonus. While that by itself is amazing, Pale Flame (4) can out perform this set because it also has an 18% atk buff and is easily maintained through her low tap skill cooldown.\n\nRegarding Weapon Choice:\nSerpent Spine: It can be better than Skyward Pride if you have at least 130% ER from substats and running a cryo battery. It is also worth noting that an R5 Serpent Spine will outperform all 5⭐ weapons at R1 with proper stack management.\nSkyward Pride: This weapon is more forgiving towards ER substats. If there is a cryo battery unit in your team (Diona with Sacrificial bow or Kaeya with Favonius Sword) or your team generates enough particles on their own, Skyward Pride loses effectiveness compared to the above options.",
      },
    },
  },
  kamisato_ayaka: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
            stack: 1,
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['blizzard_strayer', '+18%_atk_set'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
          ['blizzard_strayer', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Crit Rate', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip:
          "Ayaka's Charged Attack, Elemental Skill and Elemental Burst hits enemies inside Venti's Elemental Burst.\n\nHer Elemental Burst also stays in place on frozen enemies and slightly knocks enemies away when they're not frozen.",
        note:
          "Kamisato Ayaka is a pretty straightforward DPS that deals most of her damage from her Elemental Burst. She has very high scalings on her burst at the cost of it being expensive, which is 80 energy. This is the reason why you need another Cryo battery on the team to provide energy for her (Diona, Kaeya, Rosaria, etc). She has a special dash (like Mona) and after she dashes, she will get a Cryo infusion on her Normal Attacks. You'd want to play around her special dash to constantly deal Cryo damage on enemies from her Normal Attack.\n\nShe can be played on a permafreeze team (paired with a Hydro enabler such as Mona, Xingqiu, or even Barbara) where she could gain huge benefits from the Blizzard Strayer (4) artifact set. Blizzard Strayer (4) piece gives a huge amount of stats on a Freeze team, so try to get this artifact set as fast as you can. Her Elemental Burst also sticks on frozen enemies, but it also has a small hitbox so you need to position it well so that it can hit multiple bigger enemies.\n\nRegarding Weapon Choices:\nAquila Favonia (5⭐): While Aquila has Physical Damage% as a main stat, which is basically useless on Ayaka, it is still a good statstick as it got a high base ATK and ATK% buff from the passive.\nPrimordial Jade Cutter (5⭐): With Blizzard Strayer (4) and Cryo Resonance, this weapon overcrits, so avoid getting Crit Rate substats.\nSkyward Blade (5⭐), Blackcliff Longsword (4⭐), The Black Sword (4⭐), Amenoma Kageuchi (4⭐): These 4 weapons will give a similar output, so it's not worth getting or building another when you already have one. Depends on how much Energy Recharge you're running, how much stacks your Blackcliff has, how much time you're gonna spend doing Normal Attacks, and how much you value the passive on Amenoma since it gives you leeway in building Energy Recharge, one can be better than the other. If you're running Skyward Blade or Amenoma Kageuchi (especially with higher refines), avoid getting Energy Recharge substats. These 2 weapons (especially Skyward Blade) helps a lot for her to charge her Elemental Burst and allows for comfier Elemental Burst uptime and rotation.\nThe Flute (4⭐): This is a slightly better option than Amenoma Kageuchi if you do not benefit from Amenoma Kageuchi's passive (which is unlikely).",
      },
    },
  },
  fischl: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'mitternachts_waltz',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'rust',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'compound_bow',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['thundersoother'],
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['thundering_fury', 'bloodstained_chivalry'],
          ['thundering_fury', '+18%_atk_set'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
          ['+18%_atk_set', 'gambler'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG / Electro DMG%',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip:
          'See https://bit.ly/3xOMZyh for more specifics regarding the weapon rankings.\n\nCourtesy of paraszcazk#0148',
        note:
          "[C1] is recommended to even start Fischl's DPS build, with Oz still contributing to Physical DPS even when he's off-field.\n\nThere is an animation cancelling technique with Fischl DPS. After 3 or 5 basic attacks, shoot an Aim Shot to reset your attack combo. The faster you can do this, the better it is. Only use this for animation cancelling when you're out of stamina since it can be pretty hard to replicate consistently.\n\nRegarding Fischl C6 Build: Starting C6, Oz will be dealing about 60% of the DPS and it'd be better to invest on Gladiator's Finale (2) Thundering Fury (2) until you can obtain Pale Flame (4) with an Electro Goblet.\n\nRegarding Weapon Choice\nMitternachts Waltz: Mitternachts Waltz would be prioritized over Amos if you manage to get refinement 5 for pure Physical build Fischl.\nViridescent Hunt: Viridescent Hunt is a really good investment that even surpasses Amos in a situation where there are crowds of enemies, although it's not as efficient towards massive single targets or really agile targets. It offers crowd DPS that is severely lacking due to Fischl's single target attacks.\nPrototype Crescent: If you manage to weave in a Charged Shot on enemy weak spots once every 9-10 seconds, Prototype Crescent could potentially offer more DPS, this weapon can be an option for those interested in a more challenging playstyle.",
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'alley_hunter',
            refine: [5],
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'the_stringless',
            refine: [5],
          },
          {
            id: 'alley_hunter',
            refine: [1, 4],
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'the_stringless',
            refine: [1, 4],
          },
          {
            id: 'mitternachts_waltz',
            refine: [5],
          },
          {
            id: 'windblume_ode',
            refine: [5],
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'rust',
          },
          {
            id: 'mitternachts_waltz',
            refine: [1, 4],
          },
        ],
        artifacts: [
          ['thundering_fury', '+18%_atk_set'],
          ['thundersoother'],
          ['gambler', 'thundering_fury'],
          ['+18%_atk_set', 'gambler'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip:
          'See https://bit.ly/3xOMZyh for more specifics regarding the weapon rankings.\n\nCourtesy of paraszcazk#0148',
        note:
          "Burst and skill both summon Oz, so make sure you're only using one at a time. Start with your Skill, use Burst for second Oz rotation and alternate. Hopefully, by the time your second/third round of Oz summoning is over, you'll have gained enough energy to repeat the loop.\n\nRegarding Windblume's Ode:\nWindblume's ATK buff can be applied to Oz after burst through pressing your skill button after exiting bird form. This relocates Oz and reapplies the buff which is then snapshotted throughout the rest of its duration.\n\nRegarding Thundersoother (4): This artifact set will outperform Gladiator's Finale(2) Thundering Fury(2) if used in a team comp where an electro aura is always present (e.g. Electro/Electro-charged comps) therefore it is highly recommended within this niche.\n\nRegarding Gamblers (2): Similar to Albedo and defender's will, since this artifact set only goes up to 4 star quality, you should only use them in the Feather and Flower slot such that you do not lose out as much on offensive mainstats.\n\nRecommended amount of ER: 130-150%",
      },
    },
  },
  beidou: {
    roles: {
      'ELECTRO DPS': {
        recommended: false,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'sacrificial_greatsword',
          },
        ],
        artifacts: [['thundering_fury', 'noblesse_oblige', '+18%_atk_set']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK', 'Elemental Mastery'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Beidou's skill grants you an Electro status for a brief moment upon holding it. This means it can be used for status-cleansing (NO Particular Effective Element). Can only be done on herself. For a more comprehensive guide on Beidou, please check https://keqingmains.com/beidou/.",
        note:
          'Very versatile with artifact choices and works well with rotations due to her burst being maintained off field. Her great survivability makes her very enticing for a carry role, but her low basic attack ratios and hybrid damage makes Sub DPS the strongest role for her.\n\nRegarding Serpent Spine: If paired with Bennett, this weapon would yield the highest damage output.',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'thundering_fury', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['thundersoother'],
          ['scholar', 'the_exile'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK', 'Elemental Mastery'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          "Set 1 does not require you to full stack ER for the maximum DMG Bonus you can get, prioritize Crit Rate/DMG depending on your ratio needs.\n\nSet 2 combinations is what you would ideally want for damage output.\n\nSet 3 could be considered if your Beidou can get her Burst off Cooldown and the team doesn't have a Noblesse Oblige (4) user yet.\n\nSet 4 seeks to maximise your Burst damage in an Electro-Charge comp, take note that the set could be rendered useless when against enemies with non-Electro/Hydro elements imbued.\n\nRecommended amount of ER with sets 1-4: 140-150% ER\n\nSet 5 should only be considered when you have no other set options or when you cannot secure over 150% ER with a double electro team, this set should be replaced as soon as possible.\n\nRegarding Serpent Spine:This weapon should generally be considered over Wolf's Gravestone for Beidou Sub DPS, while Wolf's Gravestone is equipped onto a Claymore DPS character with higher field time. Beidou can effectively make use of the full stacks, as long as you have her stacks up before swapped away, the stacks will be maintained even while off-field.",
      },
    },
  },
  lisa: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'dodoco_tales',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['thundering_fury'],
          ['thundersoother'],
          ['thundering_fury', '+18%_atk_set'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge / Elemental Mastery',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: 'https://keqingmains.com/lisa/',
        note:
          'Regarding Thundersoother (4): For teams that focus on Electro-Charge reactions, Thundersoother (4) can out dps Thundering Fury (4), said set is only recommended below Thundering Fury (4) due to the potential inconsistency.\n\nElectro DPS Lisa plays around Electro-Charge reaction teams ideally, for Overload Lisa teams, you would be building for EM DPS since you can be the consistent trigger with supports that apply constant Pyro off-field.\n\nOptimal Lisa String:\nE (Tap) > Normal Attack x2 [until 3 stacks] > Fully-charged E (Hold) > Normal Attack x2 > Charged Attack. Repeat NA2CA1 until E is off-cooldown, then repeat the string.\n\nWhen c1+ Lisa is up against a bigger crowd, you could change your playstyle to abusing the c1 mechanic to generate energy more efficiently, please refer to the more comprehensive Lisa guide linked in the Ability Tips for more details.',
      },
      'EM DPS': {
        recommended: false,
        weapons: [
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'favonius_codex',
          },
        ],
        artifacts: [['thundering_fury'], ['instructor'], ['instructor', 'wanderers_troupe']],
        mainStats: {
          sands: 'Elemental Mastery',
          goblet: 'Elemental Mastery',
          circlet: 'Elemental Mastery',
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          'Lisa\'s in game c1 description only mentions "Hold Cast" as i\'s triggering condition, but this applies to Tap Casts as well.',
        note:
          'EM Lisa DPS aims to be the consistent trigger for reactions, Overload is generally the best reaction for this set up. Avoid having a second Electro in the team for this build since this could mess up the Pyro aura Lisa wants for this playstyle.\n\nElectro-Charge teams will have a hard time trying to utilize EM DPS Lisa, in these situations, build Electro DPS or Sub DPS Lisa instead.\n\nIf you have Lisa at c1, ER% priority could be shifted lower, while focusing more on ATK%.',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['thundering_fury', '+18%_atk_set'],
          ['thundering_fury', 'noblesse_oblige'],
          ['noblesse_oblige'],
          ['thundersoother'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Lisa's Hold cast does not require 4 full seconds of charging to reach maximum damage threshold, as long as the indicator aligns with ring, you can release your cast at max damage.",
        note:
          "Can be built to set up for either Burst damage or Quickswap Skill Nuke damage.\nLisa works well with anemo characters which can keep enemies in her ultimate radius.\n\nRegarding Substat Priority: These options prioritize Lisa's ult uptime as a defense shredding tool.\nRegarding Thrilling Tales Of Dragon slayers (3⭐): This option is for a low investment Lisa whereby she is focused around buffing her teammates and contributing team DPS over outputting high damage on her own, recommended only if low investment.",
      },
    },
  },
  razor: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame', 'gladiators_finale'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['pale_flame', '+18%_atk_set'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "Razor's EB grants you an Electro Status when you basic attack while burst is in-effect, that means it can be used for status-cleansing (no particular effective element). Can only be done on himself. Razor Mains Theorycrafting Library",
        note:
          "Pale Flame (2) Bloodsdtained Chivalry (2) is better if your ATK% is covered by your substats, otherwise you would be better off running Gladiator's Finale (4). This is only recommended to those who have no immediate access to a decent Pale Flame set, otherwise you would be better off investing on Pale Flame pieces, regardless of weapon choice.\n\nRegarding Wolf's Gravestone: Wolf's Gravestone (inactive) outperforms Skyward Pride in every scenario except crowd battles.\n\nRegarding The Unforged: The playstyle with this weapon becomes a lot more comfortable without having to worry about snapshotting Wolf's Gravestone / Song of Broken Pines buffs for Sub DPSes, while also granting more Shield Bonus for better Shield uptime. A shielder is required for this, with Zhongli being the most ideal option.\n\nRegarding Serpent Spine: At C6, it is better to run an ATK% Goblet over Physical Damage% with Serpent Spine. This is due to the oversaturation of damage bonuses (ascension stat + Serpent Spine) in addition to the fact that Electro accounts for a significant portion of Razor's damage. An in-depth explanation can be found here. It is also worth noting that an R5 Serpent Spine with max stacks will outperform all 5⭐ weapons at R1.\n\nRegarding Skyward Pride: Skyward Pride is viable with a Physical DMG goblet, as the damage dealt through its passive scales with Physical%.",
      },
    },
  },
  traveler_electro: {
    roles: {
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'skyrider_sword',
          },
        ],
        artifacts: [['emblem_of_severed_fate']],
        mainStats: {
          sands: 'Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          "Traveler can provide a lot of energy and energy recharge to the on-field character through their skill pick up or Q procs. This is especially useful with a damage dealer that doesn't conflict with traveler's element and can benefit from the abundance of energy.",
      },
    },
  },
  keqing: {
    roles: {
      'PHYSICAL DPS': {
        recommended: true,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'prototype_rancour',
            refine: [3, 5],
          },
          {
            id: 'the_black_sword',
            refine: [2],
          },
          {
            id: 'prototype_rancour',
            refine: [1, 2],
          },
          {
            id: 'the_black_sword',
            refine: [1],
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'iron_sting',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['retracing_bolide'],
          ['bloodstained_chivalry'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "For an in-depth analysis on keqing's attack rotations, check out https://library.keqingmains.com/evidence/characters/electro/keqing",
        note:
          'This section is dedicated to a playstyle where Keqing does not infuse her attacks with electro, and instead focuses on physical damage (white numbers). For this reason, you should be charged attacking after casting Stellar Restoration (E) instead of recasting it.\n\nSet 1 (4PF) is the best by far as Keqing can proc its 4 piece set bonus instantly by charge attacking after casting E.\n\nSet 2 (2PF+2BSC) should only be used until getting 4PF.\n\nSet 3 (2BSC+2Glad) is a generalist set, just the same as Set 1 for Electro but physical instead.\n\nSet 4 (4RB) should only be used with a consistent shielder (i.e. Zhongli/Diona) for obvious reasons.\n\nSet 5 (4BSC) is for general solo and Abyss content where there are multiple mobs that can be killed with charged attacks within 10 seconds, this is for dealing with a crowd, in other words, AoE. It is not recommended because of the kill condition.',
      },
      'ELECTRO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'the_flute',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [['thundering_fury', '+18%_atk_set'], ['thundersoother'], ['thundering_fury', 'noblesse_oblige']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "Preferred Skill Combo: ES (Place stiletto, don't reactivate yet) -> EB -> ES (Reactivation) -> Spam AA -> Repeat\n\nRegarding Roles:\nBoth physical and electro keqing are good and viable. You'd usually want to decide which build to go for depending on your weapon gacha luck. For example, Lion's Roar = Electro, Flute will be equally good on Electro/Phys, etc.",
        note:
          "Set 1 (2Glad+2TF) is a generalist set, which means it can be used generally anywhere, whether it be Co-op or Abyss, or other singleplayer content. This has a lot of consistency due to its independence from electro aura, and it is more viable in abyss.\n\nSet 2 (4TS) should be used with Electro-charged team compositions (Keqing + Xingqiu) or mono-electro team comp(Not Suggested). This set has a 35% dmg modifier which increases all damage from all sources, although that modifier is a bit unstable due to its dependency to the sustainability of electro aura on enemies.\n\nSet 3 (2TF+2NO) This set is used for Burst/Quickswap AoE Keqing. With this set, you'd want to be using Starward Sword (Q) all the time, which is your main source of dps with this set.\n\nRegarding Summit Shaper (5⭐): It can only beat Jade Cutter [R1] when it's shielded at [R2].\n\nRegarding Quickswap Keqing: The Black Sword (4⭐) will be shifted below Harbinger of Dawn (3⭐) R5.",
      },
    },
  },
  ningguang: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'memory_of_dust',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'dodoco_tales',
            refine: [5],
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
            stack: 1,
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'archaic_petra'],
          ['retracing_bolide'],
          ['archaic_petra', 'noblesse_oblige'],
          ['gladiators_finale', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK', 'HP%'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "Ningguang's Burst generally does not land all 12 hits - one of the Star Gems from the Jade Screen usually slams into the ground before its homing can activate. This missed gem is important for Bolide vs Noblesse.\n\nSkill has a 6 second internal cooldown on generating Energy, so for the sake of maintaining Burst loops, wait 6 seconds to cast again if you need energy.\n\nScreen also breaks when casted on top of another Geo Structure, you can intentionally use a structure to break your first screen.",
        note:
          "The DPS Artifact set ranking order assumes C2 so that you have efficient energy generation with burst loops. If you don't have C2 and can't quickly regain your EB basically off cooldown, then full bolide set may be better.\n\nRegarding Retracing Bolide (4): This set is generally recommended for players with Ningguang constellations lower than 2. N1 > CA rotations are the most ideal for this set, to prevent stamina consumption you need to be close up to enemies so the Normal Attack hits before the CA animation starts.\n\nWalk through your Skill before using Burst for more damage. Normal Attack Animation Cancel is possible if you hold down on a walking direction and do Normal Attack before you start moving.\n\nNingguang C2 can reset Skill cooldown when Skill is used while there's an existing Jade Screen, shattering the existing Jade Screen and triggering the C2 perk. See example below:\nSkill Cast > Wait Skill CD (11s) > Skill Cast > C2 resets Skill CD > Skill Cast (Shatters Previous Barrier) > Wait C2 CD (6s) > Skill Cast (Shatters Previous Barrier)\n\nRegarding Dodoco Tales (4⭐): Generally, Dodoco Tales is outperformed by Widsith/Solar Pearl at R3, however with the right buffs, Widsith can match Dodoco Tales at lower refinements.\n\nRegarding Widsith/Solar Pearl: If your stats aren't balanced, then whichever weapon's substat is better for balancing you out at the 1:2 ratio (assuming C2) will outperform the other. For example, if you're at 50/70 from artifacts, The Widsith is ahead even with no Theme on charged attacks thanks to it pushing your crit damage high enough to overpower solar's crit rate. If your crit rate and crit damage are at 50/100 or 60/120 or similar balanced values, The Widsith is very slightly better so long as you get two good Themes in a row before EM themes, which on average is expected.\n\nA consistently updated sheet on the math behind Ningguang's weapon priority can be found here.",
      },
      'SUB DPS/NUKE': {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
            refine: [4],
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
            refine: [1, 3],
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'dodoco_tales',
            refine: [5],
          },
        ],
        artifacts: [
          ['archaic_petra', 'noblesse_oblige'],
          ['archaic_petra', 'gladiators_finale'],
          ['noblesse_oblige', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          'If Ningguang is [C6], talent priority changes to Burst > Normal Attack > Skill.\n\nWalking through the Jade Screen before casting burst is heavily recommended for the Geo DMG bonus.',
        note:
          'This section is dedicated towards a quickswap style Ningguang, where she outputs high burst damage in an extremely short time window before swapping out to other supports.\n\nRegarding Widsith: Widsith is ranked lowly due to the playstyle not aligning with its downtime. (You might get 1-2 burst rotations without buff active, depending on how quickly you rotate your supports) For this reason, its average DPS is below Solar Pearl.\n\nREGARDING WEAPON RANKINGS WITH BENNETT BURST: With Bennett burst considered, Solar Pearl and Lost Prayer will be ranked above Memory of Dust, with Solar Pearl outperforming LP at R2+. This is because in a quickswap composition, it is difficult to develop and maintain stacks on a Lost Prayer. (5⭐ weapons R1 assumed.) (All other rankings remain the same.)',
      },
    },
  },
  noelle: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'serpent_spine',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'lithic_blade',
            stack: 2,
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'whiteblind',
          },
          {
            id: 'debate_club',
            refine: [5],
          },
        ],
        artifacts: [['retracing_bolide'], ['gladiators_finale']],
        mainStats: {
          sands: 'ATK% / DEF%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'ATK%', 'Energy Recharge', 'Flat DEF', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "Optimal attack rotation is N1>N2>N3>N4>dash/hop, where N refers to each normal attack in her 4 hit combo. This isn't always feasible due to cast time and N4 covers a lesser AoE than N1-3, so the recommended rotation is N1>N2>N3>dash/hop.\nThis video covers optimal attack cancels and weapon priorities for both DPS and support.",
        note:
          "Weapon comparison data can be found here, as well as an indepth look into her kit for both DPS and support.\nNoelle DPS is best optimized at [C6] where she converts an additional 50% DEF into ATK.\nDPS weapon comparison assumes [C1]-[C4] with 50% burst uptime.\n\n*It's recommended to avoid building Noelle if she's not C6.\n\n[C6] WEAPON PRIORITY: (Max stacks) Serpent Spine > Skyward Pride R1 > Whiteblind > Blackcliff Slasher > The Unforged / Wolf's Gravestone\nSkyward Pride is BELOW Serpent Spine when assuming you cast your burst off cooldown.",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'whiteblind',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [['maiden_beloved'], ['defenders_will', 'maiden_beloved'], ['retracing_bolide', 'maiden_beloved']],
        mainStats: {
          sands: 'DEF%',
          goblet: 'DEF%',
          circlet: 'Healing Bonus',
        },
        subStats: ['DEF%', 'Flat DEF', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: 'Use her charged attacks for healing instead of normal attacks as it is much faster.',
        note:
          "With the Retracing and Maiden hybrid set you'll be able to heal with a stronger shield durability while you're on field, as Retracing Bolide 2-set perk only works for the character equipped with it. (It increases shield strength, which is a stat instead of a value multiplier.)",
      },
    },
  },
  traveler_geo: {
    roles: {
      'DPS GEO': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
            stack: 3,
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'sword_of_descension',
          },
        ],
        artifacts: [
          ['archaic_petra', '+18%_atk_set'],
          ['archaic_petra', 'noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: 'Skill and Burst have equal priorities.',
        note:
          "This section is dedicated to utilising the Geo Traveller's geo burst damage capabilities. Due to how little field time this playstyle takes, the traveller can also fulfill the role of a quickswap style Sub-DPS.",
      },
      'DPS PHYSICAL': {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['retracing_bolide'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note:
          "Not Recommended for End Game Content.\n\nRegarding Gladiator's Finale (2) Pale Flame (2): This set is ranked higher than Pale Flame (2) Bloodstained Chivalry (2) due to how much geo damage is in the traveller's kit. If you truly prefer to have the highest physical damage output, use Set 2 instead.\n\nPale Flame (4) is not recommended due to the Traveller's elemental skill cooldown being 6 seconds, which means the 4 piece set effect only kicks in 6 seconds into every rotation, and also gives the player a very little time window to keep up the 4 piece set effect.",
      },
    },
  },
  zhongli: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'crescent_pike',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'dragonspine_spear',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'royal_spear',
          },
          {
            id: 'halberd',
          },
          {
            id: 'prototype_starglitter',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['bloodstained_chivalry', 'pale_flame'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'ATK% / HP%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'HP%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: 'Optimal Physical Rotation:\nNormal Attack until Spear Kick -> Dodge/Jump Cancel -> Repeat',
      },
      'SUPPORT/NUKE': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
            refine: [1],
            stack: 1,
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'black_tassel',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['archaic_petra', 'noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['archaic_petra', '+18%_atk_set'],
          ['archaic_petra', 'tenacity_of_the_millelith'],
          ['archaic_petra'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'HP% / ATK%',
          goblet: 'Geo DMG / HP%',
          circlet: 'Crit Rate / DMG / HP%',
        },
        subStats: ['Crit Rate / DMG', 'HP%', 'ATK%', 'Energy Recharge', 'Flat ATK', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          "SHIELDBOT\nThis kind of playstyle is very straightforward; stack as much HP as possible. Prioritize HP scaling polearms such as Black Tassel and artifact sets such as Tenacity of the Millelith to capitalize on Zhongli's Shield. A high refine Favonius Lance can be used over Black Tassel as the energy generated can be much more valuable compared to a slightly stronger shield.\n\n\nSUPPORT/NUKE\nZhongli's kit is best utilised as a Geo burst damage support for his short burst cool down (12s) and low energy cost (40 Energy), while his Elemental Skill Hold Cast (Shield) scales his HP and at Ascension lv.4 you would unlock a talent that allows your burst to scale 33% of Max HP, making him an amazing source of shields and damage.\n\n\nComparison between Tenacity (4) and Noblesse (2) Archaic (2): Tenacity is recommended as top choice because of what it offers at a lower investment is just way too good, while at higher investments it won't be losing out a lot as it offers more utility instead of some extra DPS. Noblesse (2) Archaic (2) is only recommended for people who are willing to invest as much as they can for higher damage numbers.\n\nRegarding Favonius Lance Rankings: Zhongli's lackluster particle generation can be problematic in teams without a reliable source of geo energy. With sufficient energy/geo particles (i.e. in a dual Geo team) Lithic Spear and above will outperform Favonius Lance.\n\nIdeally, you'll want ATK% / Geo DMG Bonus / Crit Rate/DMG for maximum burst damage, as his Ascension 4 Talent scaling would be best benefitted using only one HP main stat, any additional HP stat is desirable as it goes to his shield durability/burst damage.\n\nNote that if paired with Xingqiu, the damage reduction from orbitals can be utilized on Zhongli's shield.",
      },
    },
  },
  albedo: {
    roles: {
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'freedom-sworn',
          },
        ],
        artifacts: [
          ['archaic_petra', 'noblesse_oblige'],
          ['tenacity_of_the_millelith'],
          ['archaic_petra'],
          ['archaic_petra', 'defenders_will'],
          ['noblesse_oblige'],
          ['defenders_will', 'the_exile'],
          ['defenders_will', 'scholar'],
          ['berserker', 'the_exile'],
          ['berserker', 'scholar'],
        ],
        mainStats: {
          sands: 'DEF%',
          goblet: 'Geo DMG / DEF%',
          circlet: 'Crit Rate / DMG / DEF%',
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'Energy Recharge', 'Flat DEF'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note:
          "Albedo's E particle generation is completely RNG like Zhongli, but with better odds.\n\nIf looking for a cheap damage to investment ratio, DEF%/Geo DMG/DEF% or DEF%/Geo DMG/Crit% is your best choice. Hybrid builds that take advantage of Albedo's Burst scalings are viable with higher levels of investment.\n\nRun DEF main stat on Circlet and Sands. Albedo's Skill has a high DEF scaling and Harbinger of Dawn gives you a lot of leeway for a strong crit ratio.\n\nRegarding Defender's Will (2): Because this artifact set only goes up to 4 star rarity, you should only use them in the feather and flower slots such that you do not lose out on offensive mainstats.\n\nGeo DMG Goblet is better than DEF Goblet assuming same substats, but if your DEF goblet has significantly better substats than Geo goblet, DEF goblet is better. In terms of Burst damage, DEF Goblet will always be a lot worse than Geo DMG Goblet unless you have C2.",
      },
    },
  },
  xingqiu: {
    roles: {
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['thundersoother'],
          ['blizzard_strayer'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Activating XQ's ES/EB applies Hydro to the on-field character with his shield. (Pyro in specific)\n\nCleansing electro may take an additional switch for your character with the rain swords active, while Cryo would freeze you in place.",
        note:
          "Regarding Artifact Choice:\nEmblem of Severed Fate (4): If you already have an invested Xingqiu build with Noblesse Oblige (2) Heart of Depth (2) and Sacrificial Sword, you don't need to farm for this set.\nNoblesse Oblige (4): Offers party wide ATK boost, you can use this set on Xingqiu if nobody else on the party is equipping it.\nThundersoothers (4): This set is only recommended if you're running an electrocharged team. It's essentially the same as Noblesse Oblige (2) Heart of Depth (2) in terms of damage boost, but it also increases Elemental Skill damage, it comes with a condition though; the enemy needs to be affected by Electro aura.\nBlizzard Strayer (4): This set is only recommended on a freeze team to optimize Xingqiu's stats since he can just disregard crit rate and build crit damage% instead for more damage output.\nThe Exile (2) Scholar (2): This set is a cheap beginner option to maintain burst uptime well since it gives 40% Energy Recharge.\n\nRegarding Sands Main Stats: Ideally you would be running ATK% Sands when your ER needs are fulfilled. (200% if Sacrificial Sword, 230%+ for others).\n\nRegarding Weapon Choice:\nHarbinger of Dawn: This is a great weapon for Xingqiu, assuming he's either C6 or teamed with another Hydro character for energy generation.\nPrimordial Jade Cutter: This weapon can rank above Sacrificial Sword when running Emblem of Severed Fate (4), for Xingqiu's under c6 you will want at least 240% ER for sustainable rotations.\n\nWeapon order on constellation 6: When Xingqiu is constellation 6, Mistsplitter and Jade Cutter has the best damage potential given enough ER (170-190%), Skyward Blade has the second best damage potential (same ER requirement as Jade), and Sacrificial Sword has the third best damage potential.",
      },
    },
  },
  barbara: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'dodoco_tales',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [['heart_of_depth'], ['wanderers_troupe'], ['heart_of_depth', '+18%_atk_set', 'wanderers_troupe']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip:
          "Barbara's skill gives you a pulse of healing every 5 seconds, every pulse will imbue you with a hydro status, that means it can be used for status-cleansing (Pyro in specific, while other elements may take more pulses).\n\nTake note that Hydro reacting with Cryo status will freeze you in place, her skill should be used in consideration of the environment",
        note:
          "Use Charged Attacks if you're going to be doing Vaporize DPS, Normal Attacks are for Electro-Charge DPS.\n\nMemory of Dust requires stacks to be utilized, and in Vaporize DPS comps, you usually don't want to give up the first few Vaporize hits to stack up Memory of Dust's perk.\n\nAlways activate your skill first, as it reduces stamina consumption and if you have Constellation 2, it will give 15% Hydro Damage Bonus.",
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'prototype_amber',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'wine_and_song',
          },
        ],
        artifacts: [
          ['maiden_beloved'],
          ['maiden_beloved', 'tenacity_of_the_millelith'],
          ['noblesse_oblige'],
          ['maiden_beloved', 'the_exile'],
          ['maiden_beloved', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'Healing Bonus',
        },
        subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note:
          'Use Elemental Skill and/or Elemental Burst and Switch. Generally, run ER if you want more consistent heals. Noblesse is an option if Barb already has enough heal and you want her to buff your dps more.\n\nSet 2 is introduced as a place holder set for Maiden Beloved if you want pure healing and have not been able to gather Maiden Beloved (4) yet.',
      },
    },
  },
  tartaglia: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'rust',
            refine: [5],
          },
          {
            id: 'prototype_crescent',
            refine: [5],
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'rust',
            refine: [1, 4],
          },
          {
            id: 'prototype_crescent',
            refine: [1, 4],
          },
          {
            id: 'the_stringless',
          },
        ],
        artifacts: [['heart_of_depth'], ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', 'wanderers_troupe']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: 'For a more indepth guide please check the Childe Mains Theorycrafting Library.',
        note:
          "Rust R5 wins in normal stance non aimed, and is about equal with Skyward R1 in melee stance. Skyward only pulls ahead on good EB usage; they're mostly interchangeable, but Skyward has a very slight advantage. Simulated over a wide variety of stat distributions.\n\nPrototype Crescent can potentially be on par with Viridescent Hunt with decent perk uptime.",
      },
      'SUB DPS/NUKE': {
        recommended: false,
        weapons: [
          {
            id: 'the_stringless',
            refine: [4, 5],
          },
          {
            id: 'alley_hunter',
            refine: [4, 5],
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'alley_hunter',
            refine: [2, 3],
          },
          {
            id: 'the_stringless',
            refine: [1, 3],
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
            refine: [1],
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'windblume_ode',
            refine: [5],
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', 'wanderers_troupe'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          "Weapon rankings are assuming that you are setting up for Childe's Vaporize Burst.\n\nFocuses on using his Elemental Burst off cooldown, for weaker enemies, you could use Childe's Bow Form Burst to get the 15 energy refund and save yourself some trouble.\n\nElemental Mastery on sands is for when you have enough ATK% substats, and not running Stringless.",
      },
    },
  },
  mona: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'dodoco_tales',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
        ],
        artifacts: [
          ['heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', 'wanderers_troupe'],
          ['wanderers_troupe'],
          ['berserker', 'the_exile'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: '',
        note:
          'This build is best utilised at [C2], but can work without it. Do note that several 4 stars will out-dps Mona, as Mona is better off as a Sub-DPS/ Support.',
      },
      'SUB DPS/NUKE': {
        recommended: true,
        weapons: [
          {
            id: 'the_widsith',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', 'wanderers_troupe', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge / Elemental Mastery',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'ATK%', 'Elemental Mastery'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "To make Mona's burst damage trigger the Vaporize 2.0x multiplier:\n1. Apply Pyro on enemy\n2. Cast Burst (should react and remove Pyro status on the enemy after using Burst)\n3. Wait 2.5 seconds for Mona's burst ICD (Mona should stay on field if you have Bennett, to keep the buff)\n4. Swap to Pyro character and apply Pyro on enemy\n5. Burst will pop after enemy gets hit, applying Hydro and vaporising her damage.",
        note:
          "Mona's Elemental Skill provides taunt and procs wet status on enemies, her Elemental Burst is also capable of rendering smaller enemies immobile (Mona needs to be at least 20 levels within the enemy's level) and providing a huge damage burst (and additional omen debuff after proc).\n\nLook to the Sub DPS/Nuke Ability Tip section for Vaporize Nuke set up instructions.",
      },
      'FREEZE SUPPORT': {
        recommended: false,
        weapons: [
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'prototype_amber',
          },
          {
            id: 'wine_and_song',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Hydro DMG / ATK%',
          circlet: 'Crit Rate',
        },
        subStats: ['Energy Recharge', 'Crit Rate', 'ATK%'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          "Mona's Burst applies bubble and Omen debuff upon cast, the count down timer only begins when the bubble is broken.\n\nFrozen enemies can have their bubbles preserved as long as enemies stay in a frozen state. This technique makes Mona a priority Support for Freeze DPS teams.",
        note:
          "Offensive stats aren't needed, just stack ER for comfortable Elemental Burst uptime\n\nMona's main role on a freeze team is to provide Omen debuff from her burst as it is extendable via Freeze mechanics. Note that you must apply Cryo before casting Mona's Elemental Burst for the extension to happen. Omen Freeze extension can be done by reapplying Cryo and Hydro aura consistently (this can be done with Cryo/ Hydro infused Venti Elemental Burst + on-field Cryo/ Hydro aura).\n\nRegarding Weapon Priorities:\nThrilling Tales of Dragon Slayers is BiS on Freeze Support Mona because she can furthermore buff the ATK of your Main DPS. This however comes with an assumption that with TTDS, you still have 100% Elemental Burst uptime. If you do not, go with the other Energy Recharge weapon options for more burst uptime.",
      },
    },
  },
  amber: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'sharpshooters_oath',
            refine: [5],
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'hamayumi',
          },
          {
            id: 'the_viridescent_hunt',
          },
        ],
        artifacts: [
          ['wanderers_troupe'],
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['+18%_atk_set', 'martial_artist'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit DMG',
        },
        subStats: ['Crit DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note:
          "Amber DPS will be focused on maximizing Charged Shot damage on enemy weak spots as Amber's Ascension 4 Talent increases ATK by 15% for 10s after hitting a weak spot. Crit is also guaranteed when you land your shot on a weak spot so we aim to maximize Crit DMG with little to no dependance on Crit Rate, this could change after c4.\n\nAfter C4, the playstyle catering towards her Skill damage becomes available, with this build you will want to run Crimson Witch of Flames (4) while trying to maintain the 1:2 Crit Ratio for more frequent nukes. This playstyle is safer, more consistent and has more AoE damage to play compared to Charge Shot Amber.\n\nRegarding Weapon Choice:\nPrototype Crescent (4⭐): This bow will beat Skyward Harp at R2+.\nHamayumi (4⭐): This bow will beat Sharpshooter's Oath R5 at R2+.",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'the_viridescent_hunt',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['instructor'],
          ['the_exile', 'emblem_of_severed_fate'],
          ['scholar', 'emblem_of_severed_fate'],
          ['emblem_of_severed_fate'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note:
          'Due to her poor scalings, this section is dedicated to a low-investment build that provides utility and shieldbreaking capabilities by abusing her quick pyro application on her elemental burst. Due to her energy generation being extremely poor, her energy recharge options are prioritized.\n\nIf burst uptime can be maintained, a damage oriented bow such as Skyward Harp, Alley Hunter, or The Stringless can be used to maximize damage over Favonius Warbow.',
      },
    },
  },
  xiangling: {
    roles: {
      'PHYSICAL DPS': {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'crescent_pike',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'dragonspine_spear',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['pale_flame', '+18%_atk_set'],
          ['martial_artist'],
          ['bloodstained_chivalry', 'crimson_witch_of_flames'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note:
          "Pale Flame (4) can maintain 100% uptime through using Guoba off cooldown.\nCrescent Pike is extremely strong on Xiangling due to the nature of her attack combo, Crescent Pike continues to surpass Primordial Jade Winged-Spear in terms of Normal/Charge Attack Damage.\nDo not use Gladiator's Finale (4) with Crescent Pike due to the passive damage scaling with physical, NOT normal damage.",
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'kitain_cross_spear',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['crimson_witch_of_flames'],
          ['noblesse_oblige', 'crimson_witch_of_flames'],
          ['noblesse_oblige', 'crimson_witch_of_flames', '+18%_atk_set', 'wanderers_troupe', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip:
          'A few commonly used teams for pyro Xiangling are:\nNational Team: Xiangling, Xingqiu, Sucrose/Zhongli/Chongyun/Flex, and Bennett\nChilde Team: Childe, Xiangling, Sucrose/Zhongli/Venti/Flex, and Bennett',
        note:
          "Regarding Crimson Witch of Flames (4): It's better than emblem set assuming that you are using her with Xingqiu and vaporizing constantly via her ult and guoba, otherwise you may consider for other sets.\n\nStaff of Homa, due to its superb passive and Crit DMG substat, remains as Xiangling's BIS weapon for a Pyro Sub-DPS build. However, Primordial Jade Winged-Spear offers more flexibility due to its Crit Rate sub-stat, allowing you to not stress over Crit Rate sub-stats in your artifacts. Switch between the two as you see fit.\n\nAlthough the damage Skyward Spine nets you is lacking compared to the other (5⭐) weapons, it does offer more upfront ER, allowing for easier burst rotations. Favonius Lance and Prototype Starglitter accomplish the same task. However, it's worth noting that ER becomes less important when considering a second pyro character for increased energy generation (IE bennett). Note that Xiangling require a bit less ER (150%-200% for example) in national/childe teams and a lot more ER (200-250% for example) in ganyu melt teams (or teams where xiangling isn't a reaction trigger) unless in specific 1 rotation setup.\n\nRegarding Dragon's Bane: Skyward Spine/Favonius Lance/Prototype Starglitter vs Dragon's Bane depends entirely on what team comp/artifacts you currently have. ER weapons offers more upfront ER while Bane offers more upfront EM, and a balanced mix is necessary. It's worth noting that a Dragon's Bane will easily outperform Favonius Lance, Spine, and Starglitter in a Vaporize-centered team composition.",
      },
    },
  },
  bennett: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'iron_sting',
            refine: [5],
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
            refine: [1, 4],
          },
          {
            id: 'lions_roar',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['crimson_witch_of_flames', 'noblesse_oblige'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['thundering_fury'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip:
          "Bennett's EB grants you a pyro status as long as your characters are within his burst AoE (Cryo in specific, since Pyro > Cryo).\n\nFor that, cast EB with Bennett, switch to the character imbued with Cryo and walk on Bennett's Burst field\n\nUpon entering burst field, the Pyro status will continuously imbue you with Pyro, reacting with other elements on you and eventually removing them.",
        note:
          "Set 1 works best with Chongyun on the same team for consistent Melt.\nAssuming a Melt/Vaporize team, Crimson Witch (4) is your best set for damage.\nPyro Damage Bonus will always be the best for cup. The combo for the highest Melt/Vaporize damage is The Black Sword and EM sand. R1 Iron Sting and EM sand turns out to have diminishing returns and isn't as good, but R2+ Iron Sting is a different question because better buffs. (Assuming you don't have a whale build's CR/CD stats, in which case Aquila with EM sands is just flat out better.)\n\nRegarding The Alley Flash: The Alley Flash has the potential to beat Iron sting R5, but this requires the passive to be up, whenever damaged, your passive is disabled for 5 seconds and you could be losing out a lot of damage, especially if you are constantly being damaged.\n\nRegarding Thundering Fury (4): This set works best if paired with Electro supports such as Beidou and Fischl/Lisa, as it allows Bennett to accomplish 2 things:\n1) Rapidly spam E for raw pyro damage + overload\n2) Generate tons of energy for the entire team.\nThundering Fury (4) also allows Bennett to quickly break the shields of the Abyss Lectors in the Spiral Abyss. This comp is generally only recommended for those with Beidou on C2/C6.\nIt's worth noting that the main-stat artifacts you want to farm for 4-TF Bennett varies from the main-stat artifacts you'd normally go for in other builds. Instead of ATK/EM, Pyro, and Crit, you'd instead want to go for EM/Pyro/EM on a 4-TF Bennett. As such, this also means weapons that have EM substats such as Iron sting take priority over other swords.\n\nIt is also worth noting that with 4 TF, Primordial Jade Cutter is able to overtake MIstsplitter Reforged due to its massive Crit Rate% substat, which allows you to vape consistently despite the lack of Crit Dmg/Crit Rate subs in your artifacts. This assumes that your EM mainstat pieces (sands, goblet, and circlet) lack Crit Rate substats. However, in the rare occasion that your EM pieces manage to roll plenty of Crit subs, Mistsplitter easily overtakes Jade Cutter.\nRecommended amount of ER%: 130-150%. Worth noting that with Thundering Fury (4), you have a lot more leeway when it comes to ER.",
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'skyrider_sword',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['crimson_witch_of_flames'],
          ['noblesse_oblige', 'crimson_witch_of_flames', '+18%_atk_set', 'wanderers_troupe', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'Recommended amount of ER%: 180-200',
        note:
          "A Sub DPS Bennett completely ignores the need for healing since people usually don't need that much healing from him and prefer to squeeze out more damage instead.\n\nOn this build, Bennett is built with offensive stats like ATK%, Pyro Damage, and Crit stats while having a good amount of Energy Recharge to burst off cooldown.\nPrioritize Energy Recharge before offensive stats if you cannot burst off cooldown.",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'skyrider_sword',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['the_exile', 'scholar'],
          ['tenacity_of_the_millelith', 'maiden_beloved'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'Healing Bonus% / HP%',
        },
        subStats: ['Energy Recharge', 'HP%', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'Recommended amount of ER%: 200+',
        note:
          "Heals from Elemental Burst scale off of HP, while damage buff from Burst only scales with your base ATK (Character Base ATK stat and Weapon Base ATK stat)\n\nDO NOT increase Bennett's constellation from 5 to 6 unless he is in a pyro team and you know what you're doing. This is because Bennett turns all of your melee on-field character's normal/charge attack into pyro, which means that Bennett will lose a lot of his team comp potential.\n\nAlthough Bennett is usually considered a healer, he already heals a lot even without necessarily building for HP%, if you find it unnecessary to build for HP%, you are free to build him as a Pyro DPS with ATK%, Pyro% and Crit.\n\nRegarding Weapon Choice:\nAquila Favonia: This weapon has the highest Base ATK in the game which is why it is ranked #1. It is assuming you have enough Energy Recharge so you still can burst off cooldown for the maximum ATK buff.\nFreedom-Sworn: In comps where Bennett can reliably trigger reactions (and thus trigger this sword's passive), the buffs provided by this weapon will be stronger than Aquila Favonia.\nAlley Flash: This weapon currently has the highest Base ATK for a 4 star weapon (even more Base ATK than some 5 stars like Skyward Blade).\nPrototype Rancour: This weapon has one of the highest Base ATK for a 4 Star weapon (and this is also a weapon you could craft from the Blacksmith)",
      },
    },
  },
  xinyan: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_pride',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'lithic_blade',
            stack: 1,
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'skyrider_greatsword',
            refine: [5],
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['retracing_bolide'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['gladiators_finale'],
          ['bloodstained_chivalry'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK', 'DEF%'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          "Xinyan's ES grants you a pyro status upon contact with shield. No matter how many times you switch your characters, it'll still apply pyro every instant you switch with shield. This allows you to cleanse every single elemental status that has been applied to you.\n\nIf the status doesn't get cleansed, switch on that character one more time with the shield. Pyro doesn't cleanse Hydro very efficiently, take Cecilia Garden for example, you'll have to apply pyro on your character 4 times before actually cleansing the hydro status.",
        note:
          "Despite how dependant Xinyan's playstyle can get with Charged Attacks, Bloodstained Chivalry Full Set is still not recommended due to it only coming in effect after a kill.\n\nIt is worth noting that an R5 Serpent Spine will outperform all 5⭐ weapons at R1 with proper stack management",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'whiteblind',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['bloodstained_chivalry', 'noblesse_oblige'],
          ['noblesse_oblige', '+18%_atk_set'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['tenacity_of_the_millelith'],
          ['defenders_will', 'noblesse_oblige'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'DEF% / ATK% / Energy Recharge',
          goblet: 'Physical DMG / DEF%',
          circlet: 'DEF% / Crit Rate / Crit DMG',
        },
        subStats: ['DEF% / ATK%', 'Crit Rate / DMG', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note:
          "For a Sub-DPS role, Set 1 is best on Xinyan once she's C2.\n\nXinyan support is mostly used for her shield and/or burst damage. If you want to use her as a Physical Support, she needs both her Ascension 4 Talent and C4 to maximize her support capabilities, making her a somewhat expensive choice to be considered for Physical Support role. However, the Tenacity of the Millelith set gives her a new role with a lower Constellation level prerequisite.\n\nTenacity of the Millelith: This set gives Xinyan a unique role among the shielders. Currently, Xinyan is one of the few shielders in the game who can make full use of the Tenacity set's effects. If you can maximize the uptime of Xinyan's Level 3 shield, she can provide a constant 30% Shield Strength and 20% Atk boost to the team (as long as the pulses hit an enemy). This means that Sacrificial Greatsword and Xinyan's C2 are crucial to making this set shine on her. This set isn't as recommended for her if you have neither of the two.\n\nShield uptime is also crucial to maximizing her Physical/Shield Support capabilities. If you have neither Sacrificial Greatsword nor at least C2 (but ideally C4) on Xinyan, you may want to build her as a Burst Support instead of Physical/Shield Support.\n\nAt C2, her burst \"Riff Revolution\" has a 100% Crit Rate, which means you can build solely Crit Dmg (instead of trying to get a 1:2 Crit Rate:Crit DMG ratio) if you're building her as a Physical Burst support.\n\nGenerally not recommended for Pyro Applications, as the pulses only happen at Shield Level 3, and are not very efficient at breaking Cryo shields.",
      },
    },
  },
  yanfei: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'the_widsith',
            refine: [5],
          },
          {
            id: 'dodoco_tales',
            refine: [5],
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'the_widsith',
            refine: [1, 4],
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['wanderers_troupe'],
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          'Her Ascension 4 Talent does a second hit after a Crit Charge Attack. This scales 80% of your ATK and can trigger reactions as well due to having a separate internal cooldown on its pyro application.\n\nFor more information on Yanfei and her role in a team, check https://www.youtube.com/watch?v=Uz7E1kOlZDc.',
        note:
          "Yanfei can have trouble trying to set up for her reaction DPS. Vaporize is generally the more consistent option and you need Xingqiu to make this work best. When running a vaporize team with Xingqiu, 3 normal attacks into a charged attack (N1>N2>N3>C) is the safest and most reliable way to vaporize your charged attacks. Make sure you're adding applying hydro first before starting combos.\n\nEnergy Recharge is prioritized over Elemental Mastery here since she has an 80 energy burst cost while her skill is also not very efficient at generating particles for getting it back. A major source of your energy will be coming from enemies as well as potential pyro batteries like Bennett, so be sure to have her pick the particles up as off-field characters only get 0.6x the value of the particles.\n\nRunning Yanfei with a shield character also allows you to make use of a full Retracing Bolide 4-set as a placeholder until you're able to find a good Crimson Witch 4-set.\n\nRegarding Dodoco Tales: On equal refinements, Widsith is better than Dodoco Tales, but assuming it's R5 Dodoco Tales vs R1-R3 Widsith, R5 Dodoco Tales is better. Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff will push Widsith and Solar Pearl above Dodoco Tales, even at low refinements.",
      },
    },
  },
  diluc: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'debate_club',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['gladiators_finale'],
          ['+18%_atk_set', 'martial_artist'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip:
          'You can interweave Normal Attacks while using his Elemental skill.\n\nie. ES -> NA -> NA -> ES -> NA -> NA -> ES -> NA -> NA',
        note:
          "Crimson Witch of Flames is generally the better choice with how easily Diluc can stack up for Pyro Damage, while his burst imbues his Normal/Charged Attacks with Pyro.\n\nGladiator's Finale is for those who are still reluctant on farming for Crimson Witch of Flames (Pre-AR 45), this will still provide it a fairly decent increase in DPS as he still relies on his Normal/Charged Attacks mostly.\n\nIf you're Constellation 2, refrain from using Serpent Spine as C2 requires you to take damage for the buff which counteracts with Serpent Spine's Stacks UNLESS Diluc is being used with Zhongli for consistent shield. Serpent Spine can lose its stacks if you take any damage, but taking hits with a shield on does not constitute as taking damage. Constellation 2 buff stacks up even if you take hits with a shield, which means that you can potentially stack up both constellation 2 buff and the serpent spine buff. This can only be performed consistently by a well invested Zhongli. (S1 means 1 Stack)\n\nIf Diluc is run alongside Xingqiu where he can trigger vaporize very often, you can run EM sands as an alternative to ATK sands. EM boosts diluc's reaction damage by a lot after all. Note that when Diluc's pyro imbued basic attack is active, he can trigger vaporize every 2 basic attacks due to internal cooldown. (vaporize, no vaporize, vaporize, no vaporize, etc.)\n\nLithic Blade is assumed to have 1 stack active bc you will almost definitely be running xingqiu with diluc in every situation.\n\nRegarding Weapon Choice:\nSerpent Spine: R5 serpent spine (with decent stack management) will outperform a R2 Wolf's gravestone.\nRainslasher: For obvious reasons, this weapon is only recommended when Diluc is in a team comp where he can consistently proc vaporize (i.e. when paired with Xingqiu). Rainslasher will also outperform Blackcliff Slasher at [R3+].",
      },
    },
  },
  klee: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'dodoco_tales',
            refine: [5],
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['lavawalker'],
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', 'noblesse_oblige'],
          ['wanderers_troupe'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip:
          'Extremely squishy, Klee requires great positioning. Being tiny, this is hard to achieve. Constant jumping during your charged attacks can help.',
        note:
          "Attacks have a 50% chance of spawning a floating star. Floating star removes the stamina cost for the next Charged Attack and increases 50% of its damage, this gives us another DPS option (Wanderer's Troupe).\n\nGladiator's Finale and Crimson Witch of Flames hybrid is generally the easiest utilised build for general combat, as you get a straight increase of damage from your stats and Pyro Damage Bonus.\n\nCrimson Witch of Flames is best used against Cryo/Electro enemies as it increases the damage of your reactions, but the 4-set perk doesn't really get stacked efficiently as Klee's Elemental Skill takes quite a while to charge again, making it hard to have the set used at full capacity.\n\nKlee's kit makes it harder to utilize vaporize and melt the same way another pyro carry would, but her constant pyro application makes Lavawalkers a viable set. See Kleeful Frame's great number breakdown here\n\nWith her fantastic energy generation and ult uptime, 2 Noblesse becomes viable.\n\nRegarding Dodoco Tales: On equal refinements, Widsith and Solar Pearl are better than Dodoco Tales, but when assuming R5 Dodoco Tales vs R1-R3 Widsith/Pearl, Dodoco Tales is better. Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff will push Widsith and Solar Pearl above Dodoco Tales, even at low refinements.\n\nWanderer's Troupe increases the Charged Attack by another 35% Damage Bonus. It can serve as a decent DPS choice but due to how clunky Klee's attack animations are, it's hard to put this in actual practise as it requires you to dodge more and consume more stamina, not to mention how the DPS gets caught up by the 2 other builds mentioned above.",
      },
    },
  },
  hu_tao: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'lithic_spear',
            stack: 1,
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['shimenawas_reminiscence'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['crimson_witch_of_flames', 'tenacity_of_the_millelith'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'HP% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'HP%', 'Elemental Mastery', 'ATK%', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip:
          "Use Hu Tao's Elemental Burst (Q) when your HP is below 50% (=/<50%), and use it when Hu Tao's Elemental Skill is about to end as to maximize its damage.\n\nFor more in depth information about Hu Tao, please check https://keqingmains.com/hu-tao/",
        note:
          "Important Note - Hu Tao is most effective when used with Xingqiu to proc Vaporize / Freeze Melt reactions which utilizes her BiS Set, Crimson Witch of Flames (4). Freeze Melt refers to freezing enemies for Melt set up.\n\nShimenawa's Reminiscence (4): Gives higher NA & CA damage than 4CW but lowers your burst damage which hurts your AoE damage, also if you're unable to burst it might cause survivability issues if you're not running a healer\nRetracing Bolide (4) and Wanderer's Troupe / Tenacity of the Millelith (2) + Crimson's Witch of Flame (2) is almost on equal footing because both of the sets have an equal overall damage output assuming you have 100% shield uptime when using Bolide (4). The difference is, you want to use 2/2 WT/CW when focusing on Nuking and better consistency, while 4 Bolide is for overall higher AA damage at the expense of lower burst damage, although inconsistent if you cannot keep your shield permanently.\n\nRegarding Weapon Choice:\nPrimordial Jade Winged-Spear: Instead of spending time stacking and maintaining your weapon passive, you can start off with full damage potential on Dragon's Bane (4⭐) for Vaporize Nuke/DPS which gives faster clear times in realistic situations.\nRegarding Deathmatch: Deathmatch is better than Dragon's Bane when you're not doing Vaporize DPS. It is highly recommended to play for Vaporize/Freeze Melt DPS.\nVortex Vanquisher and Skyward Spine: provide little to nothing to Hu Tao since Hu Tao scales better with HP% than Atk% with every spear in the game. Base attack makes little difference on Hu Tao because Hu Tao has a very high HP to ATK conversion cap. It is so high that even a 3 star weapon's base attack is enough.",
      },
    },
  },
};
