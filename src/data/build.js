export const builds = {
  amber: {
    roles: {
      'DPS ': {
        recommended: false,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'sharpshooters_oath',
            refine: [5],
          },
          {
            id: 'windblume_ode',
            refine: [5],
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'hamayumi',
          },
        ],
        artifacts: [
          ['wanderers_troupe'],
          ['shimenawas_reminiscence'],
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
        subStats: [' Crit DMG', ' ATK%', ' Elemental Mastery', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note:
          "Amber Damage will be focused on maximizing Charged Shot damage on enemy weak spots as Amber's Ascension 4 Talent increases ATK by 15% for 10s after hitting a weak spot. Crit is also guaranteed when you land your shot on a weak spot so we aim to maximize Crit DMG with little to no dependance on Crit Rate, this could change after [C4].\n\nAfter [C4], the playstyle catering towards her Skill damage becomes available, with this build you will want to run Crimson Witch of Flames (4) while trying to maintain the 1:2 Crit Ratio for more frequent nukes. This playstyle is safer, more consistent and has more AoE damage to play compared to Charge Shot Amber.\n\nRegarding Artifact Sets:\nShimenawa's Reminiscence: At [C4] this set will beat out Wanderer's Troupe for Amber Charged Shot Main DPS.\n\nRegarding Weapon Choices:\nPrototype Crescent: This bow will beat Skyward Harp if it's [R2+].\nHamayumi: This bow will beat Sharpshooter's Oath [R5] if it's [R2+].",
      },
      SUPPORT: {
        recommended: true,
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
          ['emblem_of_severed_fate'],
          ['the_exile', 'scholar'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Energy Recharge', ' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip: '',
        note:
          'Due to her poor scalings, this section is dedicated to a low-investment build that provides utility and shieldbreaking capabilities by abusing her quick Pyro application on her Elemental Burst. Due to her energy generation being extremely poor, her Energy Recharge options are prioritized.\n\nRegarding Weapon Choices:\nIf Elemental Burst uptime can be maintained, a damage oriented bow such as Skyward Harp, Alley Hunter, or The Stringless can be used to maximize damage over Favonius Warbow.',
      },
    },
  },
  xiangling: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'wavebreakers_fin',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'kitain_cross_spear',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'prototype_starglitter',
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
        subStats: [' Energy Recharge', ' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip:
          'A few commonly used teams for pyro Xiangling are:\nNational Team: Xiangling, Xingqiu, Bennett and a Flex unit (Sucrose/Zhongli/Kazuha/Raiden/Chongyun/etc)\nChilde Team: Childe, Xiangling, Bennett and a Flex unit (Sucrose/Zhongli/Venti/Kazuha/etc)\n\nRecommended ER thresholds: \nNational/Childe Teams: 160-200 ER%\nEnabler for Reverse Melt teams: 200-250 ER%',
        note:
          "Regarding Weapon Choices: THIS LIST ASSUMES THAT XIANGLING IS RUN WITH BOTH BENNETT AND A SECONDARY BUFFER (i.e. Kazuha/Sucrose)\nWavebreaker's Fin: [R5] Wavebreaker's Fin is equal to or outperforms Staff of Homa, depending on your total team burst cost.\nDragon's Bane: [R5] Dragon's Bane outperforms Primordial Jade Winged-Spear.\nKitain Cross Spear: Kitain Cross Spear's passive reduces the ER threshold of Xiangling greatly, down to ~140 ER% at [R1] and ~110 ER% at [R5]. This allows you to distribute ER rolls into otherwise offensive substats and due to this, an [R5] Kitain Cross Spear can outperform Primordial Jade Winged-Spear. Due to lowering ER thresholds so much, the Crimson Witch of Flames (4) artifact set will outperform Emblem of Severed Fate (4).\nLithic Spear: [R5] Lithic Spear with 2 stacks performs equal to Primordial Jade Winged-Spear.\nFavonius Lance: The utility provided from a highly refined Favonius Lance can make it a weapon of choice in a team comp where Xiangling is not triggering the reaction and is instead used as an aura. (i.e. Reverse Melt teams)\n\nRegarding Weapons and Artifacts with EM stat:\nDragon's Bane / Kitain Cross Spear / EM substats: In team comps where you can trigger both Vaporise and Overload at the same time (i.e. Raiden National), Elemental Mastery gets more value, pushing these weapons and artifacts ahead in damage.\n\nRegarding Artifact Sets:\nCrimson Witch (4): This set pulls ahead over Emblem of Severed Fate (4) on team comps where Xiangling has lower Energy Recharge requirements (i.e. Raiden National).",
      },
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
        subStats: [' Crit Rate / DMG ', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note:
          'It is not recommended to run Physical Xiangling since Xiangling excels more as an Off-field Pyro DPS. Physical Xiangling is only good for early game.\n\nRegarding Weapon Choices:\nCrescent Pike: Crescent Pike is extremely strong on Xiangling due to the nature of her attack combo, Crescent Pike continues to surpass Primordial Jade Winged-Spear in terms of Normal/Charge Attack Damage.\n\nRegarding Artifact Sets:\nPale Flame (4): The passive from this set can have 100% uptime through using Guoba off cooldown.',
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
            id: 'blackcliff_longsword',
          },
          {
            id: 'iron_sting',
            refine: [5],
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
            refine: [1, 4],
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', '+18%_atk_set', 'noblesse_oblige', 'wanderers_troupe'],
          ['thundering_fury'],
        ],
        mainStats: {
          sands: 'Elemental Mastery / ATK%',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' Elemental Mastery ', ' ATK% ', ' Energy Recharge'],
        talent: [' Skill', ' Burst', ' Normal Attack'],
        tip:
          "Bennett's EB grants you a pyro status as long as your characters are within his burst AoE (Cryo in specific, since Pyro > Cryo).\n\nFor that, cast EB with Bennett, switch to the character imbued with Cryo and walk on Bennett's Burst field\n\nUpon entering burst field, the Pyro status will continuously imbue you with Pyro, reacting with other elements on you and eventually removing them.",
        note:
          "Regarding Weapon Choices:\nThe Alley Flash: The Alley Flash has the potential to beat Iron Sting R5, but this requires the passive to be up, whenever damaged, your passive is disabled for 5 seconds and you could be losing out a lot of damage, especially if you are constantly being damaged.\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): This set works best with Chongyun on the same team for consistent Melt.\nAssuming a Melt/Vaporize team, Crimson Witch (4) is your best set for damage.\nPyro Damage Bonus will always be the best for cup. The combo for the highest Melt/Vaporize damage is The Black Sword and EM sand. [R1] Iron Sting and EM sand turns out to have diminishing returns and isn't as good, but [R2+] Iron Sting is a different question because better buffs. (Assuming you don't have a whale build's CR/CD stats, in which case Aquila with EM sands is just flat out better.)\n\nThundering Fury (4): This set works best if paired with Electro supports such as Beidou and Fischl/Lisa, as it allows Bennett to accomplish 2 things: \n1) Rapidly spam E for raw pyro damage + overload\n2) Generate tons of energy for the entire team. \nThundering Fury (4) also allows Bennett to quickly break the shields of the Abyss Lectors in the Spiral Abyss. This comp is generally only recommended for those with Beidou on C2/C6.\nIt's worth noting that the main-stat artifacts you want to farm for 4-TF Bennett varies from the main-stat artifacts you'd normally go for in other builds. Instead of ATK/EM, Pyro, and Crit, you'd instead want to go for EM/Pyro/EM on a 4-TF Bennett. As such, this also means weapons that have EM substats such as Iron sting take priority over other swords. \n\nIt is also worth noting that with 4 TF, Primordial Jade Cutter is able to overtake MIstsplitter Reforged due to its massive Crit Rate% substat, which allows you to vape consistently despite the lack of Crit Dmg/Crit Rate subs in your artifacts. This assumes that your EM mainstat pieces (sands, goblet, and circlet) lack Crit Rate substats. However, in the rare occasion that your EM pieces manage to roll plenty of Crit subs, Mistsplitter easily overtakes Jade Cutter.\nRecommended amount of ER%: 130-150%. Worth noting that with Thundering Fury (4), you have a lot more leeway when it comes to ER.",
      },
      'BURST SUPPORT': {
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
          ['emblem_of_severed_fate'],
          ['crimson_witch_of_flames'],
          ['noblesse_oblige', 'crimson_witch_of_flames', '+18%_atk_set', 'wanderers_troupe', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery'],
        talent: [' Burst', ' Skill'],
        tip: 'Recommended amount of ER%: 180-200',
        note:
          "A Burst Support Bennett completely ignores the need for healing and is aimed for people who don't need that much healing from him and prefer to squeeze out more damage instead. \nOn this build, Bennett is built with offensive stats like ATK%, Pyro Damage, and Crit stats while having a good amount of Energy Recharge to burst off cooldown. \nPrioritize Energy Recharge before offensive stats if you cannot cast your Elemental Burst off cooldown.",
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
        subStats: [' Energy Recharge', ' HP%', ' Flat HP'],
        talent: [' Burst'],
        tip: 'Recommended amount of ER%: 200+',
        note:
          "Heals from his Elemental Burst scale off of HP, while his damage buff from Burst only scales with your base ATK (Character Base ATK stat and Weapon Base ATK stat)\nDO NOT increase Bennett's constellation from 5 to 6 unless he is in a Pyro team and you know what you're doing. This is because Bennett turns all of your melee on-field character's Auto Attacks into Pyro, which means that Bennett will lose a lot of his team comp potential.\nAlthough Bennett is usually considered a healer, he already heals a lot even without necessarily building for HP%, if you find it unnecessary to build for HP%, you can consider building him as a Sub DPS.\n\nRegarding Weapon Choices:\nMistsplitter Reforged, Aquila Favonia: These weapons have the highest Base ATK in the game which is why it is ranked quite high. It is assuming you have enough Energy Recharge so you still can burst off cooldown for the maximum ATK buff.\nFreedom-Sworn: In comps where Bennett can reliably trigger reactions (and thus trigger this sword's passive),  the buffs provided by this weapon will be stronger than Aquila Favonia.\nThe Alley Flash: This weapon currently has the highest Base ATK for a 4 star weapon (even more Base ATK than some 5 stars like Skyward Blade).\nPrototype Rancour: This weapon has one of the highest Base ATK for a 4 Star weapon (and this is also a weapon you could craft from the Blacksmith)",
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
        subStats: [' Crit Rate / DMG ', ' ATK%', ' Energy Recharge', ' Flat ATK', ' DEF%'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Xinyan's ES grants you a pyro status upon contact with shield. No matter how many times you switch your characters, it'll still apply pyro every instant you switch with shield. This allows you to cleanse every single elemental status that has been applied to you.\n\nIf the status doesn't get cleansed, switch on that character one more time with the shield. Pyro doesn't cleanse Hydro very efficiently, take Cecilia Garden for example, you'll have to apply pyro on your character 4 times before actually cleansing the hydro status.",
        note:
          "Regarding Weapon Choices:\nSerpent Spine: It is worth noting that an [R5] Serpent Spine can outperform all 5 star weapons at [R1] with proper stack management\n\nRegarding Artifact Sets: \nBloodstained Chivalry (4): Despite how dependant Xinyan's playstyle can get with Charged Attacks, Bloodstained Chivalry Full Set is still not recommended due to it only coming in effect after a kill.",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'luxurious_sea-lord',
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
          ['bloodstained_chivalry', 'pale_flame', 'noblesse_oblige'],
          ['noblesse_oblige', '+18%_atk_set'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['tenacity_of_the_millelith'],
          ['husk_of_opulent_dreams', 'defenders_will'],
          ['husk_of_opulent_dreams', 'noblesse_oblige'],
          ['defenders_will', 'noblesse_oblige'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'DEF% / ATK% / Energy Recharge',
          goblet: 'Physical DMG / DEF%',
          circlet: 'DEF% / Crit Rate / Crit DMG',
        },
        subStats: [' DEF% / ATK%', ' Crit Rate / DMG ', ' Energy Recharge'],
        talent: [' Skill', ' Burst'],
        tip: '',
        note:
          "Regarding Artifact Sets: \nNoblesse Oblige (4): This set can be used on Xinyan if nobody else on the team is using this set for the partywide ATK buff.\n\nRegarding Tenacity of the Millelith (4) and Sacrificial Greatsword: \nXinyan support is mostly used for her Shield and/or Elemental Burst damage. If you want to use her as a Physical Support, she needs both her Ascension 4 Talent and [C4] to maximize her support capabilities, making her a somewhat expensive choice to be considered for Physical Support role. However, the Tenacity of the Millelith set gives her a new role with a lower Constellation level prerequisite.\n\nTenacity of the Millelith: This set gives Xinyan a unique role among the shielders. Currently, Xinyan is one of the few shielders in the game who can make full use of the Tenacity set's effects. If you can maximize the uptime of Xinyan's Level 3 shield, she can provide a constant 30% Shield Strength and 20% Atk boost to the team (as long as the pulses hit an enemy). This means that Sacrificial Greatsword and Xinyan's [C2] are crucial to making this set shine on her. This set isn't as recommended for her if you have neither of the two.\n\nShield uptime is also crucial to maximizing her Physical/Shield Support capabilities. If you have neither Sacrificial Greatsword nor at least [C2] (but ideally [C4]) on Xinyan, you may want to build her as a Burst Support instead of Physical/Shield Support.\n\nAt [C2], her burst \"Riff Revolution\" has a 100% Crit Rate, which means you can build solely Crit Dmg (instead of trying to get a 1:2 Crit Rate:Crit DMG ratio) if you're building her as a Physical Burst support.\n\nGenerally not recommended for Pyro Applications, as the pulses only happen at Shield Level 3, and are not very efficient at breaking Cryo shields.",
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
            id: 'memory_of_dust',
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
          ['crimson_witch_of_flames', '+18%_atk_set', 'wanderers_troupe'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG ', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Yanfei's Ascension 4 Talent does a second hit after a Crit Charge Attack. This scales 80% of your ATK and can trigger reactions as well due to having a separate internal cooldown on its pyro application.",
        note:
          "Yanfei can have trouble trying to set up for her reaction DPS. Vaporize is generally the more consistent option and you need Xingqiu to make this work best. When running a Vaporize team with Xingqiu, 3 normal attacks into a charged attack (N1>N2>N3>C) is the safest and most reliable way to vaporize your charged attacks. Make sure you're adding applying hydro first before starting combos.\n\nRegarding Weapon Choices:\nLost Prayer to the Sacred Winds: Bennett buff/ Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) will push Lost Prayer ahead of Skyward Atlas and Memory of Dust\nDodoco Tales: On equal refinements, Widsith is better than Dodoco Tales, but assuming it's [R5] Dodoco Tales vs [R1]-[R3] Widsith, [R5] Dodoco Tales is better. Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff may push Widsith and Solar Pearl above Dodoco Tales, even at low refinements.\n\nRegarding Artifact Set:\nRetracing Bolide (4): Running Yanfei with a shield character also allows you to make use of a full Retracing Bolide 4-set as a placeholder until you're able to find a good Crimson Witch 4-set. \n\nRegarding Artifact Substats Priority: \nEnergy Recharge is prioritized over Elemental Mastery here since she has an 80 energy burst cost while her skill is also not very efficient at generating particles for getting it back. A major source of your energy will be coming from enemies as well as potential pyro batteries like Bennett, so be sure to have her pick the particles up as off-field characters only get 0.6x the value of the particles.",
      },
      'SHIELD SUPPORT': {
        recommended: false,
        weapons: [
          {
            id: 'prototype_amber',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [['emblem_of_severed_fate', 'tenacity_of_the_millelith'], ['noblesse_oblige']],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'HP%',
        },
        subStats: [' Energy Recharge', ' HP% ', ' Flat HP'],
        talent: [''],
        tip:
          'Energy Recharge Guidelines\nPrototype Amber [R5]: 210 ER\nPrototype Amber [R1] /Favonius Codex: 240 ER\nThrilling Tales of Dragon Slayers: 250+ ER',
        note:
          '[NEED C4+] This section is dedicated to a playstyle where Yanfei is utilised as a primary shielder through her 4th Constellation. Due to the requirement of having to burst off cooldown, this build has high energy requirements.',
      },
    },
  },
  thoma: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_lance',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'black_tassel',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith', 'emblem_of_severed_fate'],
          ['emblem_of_severed_fate'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'HP%',
        },
        subStats: [' Energy Recharge', ' HP%', ' Flat HP'],
        talent: [' Skill', ' Burst'],
        tip: '',
        note:
          'Thoma ideally wants to focus on shield over damage, and his burst uptime is required to achieve better shields, which is why he needs ER% on top of HP%.\n\nRegarding Weapon Choices:\nBlack Tassel: At [C4], Thoma gains 15 energy when he fires his Elemental Burst. This effectively reduces his energy cost to 65 and makes it possible to use Black Tassel with ER sands instead of ER weapon with ER sands to furthermore strengthen his shield.',
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
            id: 'blackcliff_slasher',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'luxurious_sea-lord',
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
          ['crimson_witch_of_flames', '+18%_atk_set', 'wanderers_troupe'],
          ['gladiators_finale'],
          ['+18%_atk_set', 'martial_artist'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG ', ' ATK%', ' Elemental Mastery', ' Energy Recharge'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip:
          'You can interweave Normal Attacks while using his Elemental Skill.\n\nie. ES -> NA -> NA -> ES -> NA -> NA -> ES -> NA -> NA',
        note:
          "Regarding Weapon Choices:\nSerpent Spine: Because Diluc's [C2] requires you to get hit to gain the ATK buff, it can potentially lead to a damage loss due to losing Serpent Spine stacks. However, when paired with Zhongli, the shield allows you to gain the [C2] buff while not losing any stacks - running Zhongli with [C2] Diluc is highly recommended.\nBlackcliff Slasher: This weapon has excellent DPS potential when facing against crowds, but at the same time it's potential will not be utilized at single target situations.\nRainslasher: For obvious reasons, this weapon is only recommended when Diluc is in a team comp where he can consistently proc vaporize (i.e. when paired with Xingqiu). Rainslasher will also outperform Skyward Pride at [R3+].\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): Generally the best go to set for Diluc due to how easily Diluc can stack the Pyro Damage effect, while his burst imbues his Normal/Charged Attacks with Pyro.\nGladiator's Finale (4):  For those who are still reluctant on farming for Crimson Witch of Flames (Pre-AR 45), this will still provide it a fairly decent increase in DPS as he still relies on his Normal Attacks mostly.\n\nRegarding Main Stats Choice:\nIf Diluc is run alongside Xingqiu where he can trigger vaporize very often, you can run EM sands as an alternative to ATK sands. EM boosts Diluc's reaction damage by a lot after all. Note that when Diluc's Pyro imbued basic attack is active, he can trigger Vaporize every 2 basic attacks due to internal cooldown.",
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
          sands: 'ATK%',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG ', ' ATK%', ' Elemental Mastery', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Klee's Attacks have a 50% chance of spawning a floating star. Floating star removes the stamina cost for the next Charged Attack and increases 50% of its damage.",
        note:
          "Extremely squishy, Klee requires great positioning. Being tiny, this is hard to achieve. Constant jumping during your Charged Attacks can help. \n\n Regarding Weapon Choice:\nLost Prayer to the Sacred Winds:  Bennett buff/ Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) will push Lost Prayer ahead of Skyward Atlas and Memory of Dust \nDodoco Tales:  On equal refinements, Widsith and Solar Pearl are better than Dodoco Tales, but when assuming  [R5]  Dodoco Tales vs  [R1] - [R3]  Widsith/Pearl, Dodoco Tales is better.  Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff may push Widsith and Solar Pearl above Dodoco Tales, even at low refinements. \n\n Regarding Artifact Sets: \n Lavawalker (4):  Klee's kit makes it harder to utilize Vaporize and Melt the same way another pyro carry would, but her constant pyro application makes Lavawalkers a viable set. See KleefulFrame's great number breakdow n  here \n Crimson Witch of Flames (4):  This set is best used on a Vaporize Klee, but do note that due to Klee's fast Pyro application from all of her kits, she may not be able to vape most of her Normal/ Charged Attacks. \n Wanderer's Troupe (4):  Wanderer's Troupe increases the Charged Attack by another 35% Damage Bonus. It can serve as a decent DPS choice but due to how clunky Klee's attack animations are, it's hard to put this in actual practise as it requires you to dodge more and consume more stamina, not to mention how the DPS gets caught up by the other builds mentioned above.",
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
            id: 'deathmatch',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'lithic_spear',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['shimenawas_reminiscence'],
          ['crimson_witch_of_flames', 'wanderers_troupe', 'tenacity_of_the_millelith'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'HP% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' Elemental Mastery', ' HP%', ' ATK%', ' Energy Recharge'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip:
          "When ending Hu Tao's combos with an Elemental Burst, if you do not jump/dash cancel the last charged attack, the Elemental Burst will still benefit from Hu Tao's Elemental Skill.\n\nIt is recommended to use cancels when performing your Hu Tao combos as to maximize damage.\nN2CJ for [C0] and N2CD for [C1].\nN3CJ/N3CD can be used to conserve stamina at the cost of damage.\n\n*N = Normal Attack, C = Charged Attack, J = Jump, D = Dash",
        note: '',
      },
    },
  },
  yoimiya: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'thundering_pulse',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'rust',
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
            id: 'hamayumi',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['shimenawas_reminiscence'],
          ['crimson_witch_of_flames'],
          ['lavawalker'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG ', ' ATK%', ' Elemental Mastery', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note:
          "Regarding Weapon Choices: \nRust:  At higher refinements ,  this weapon can outperform an  [R1]  Amos' Bow and an  [R1]  Skyward Harp. \n Hamayumi:  If you're using Shimenawa's Reminiscence (4), this weapon doesn't synergize well with that artifact set due to its passive. Generally just use Prototype Crescent (or other 4✩alternatives) over this weapon.\n Prototype Crescent:  At higher refinements, this weapon can beat out Hamayumi, The Viridescent Hunt, and Blackcliff Warbow. \n\n Regarding Artifacts:  \nCrimson Witch of Flames (2) +18% ATK set (2):  The best  generalist set  on Yoimiya. This set is considered better than Shimenawa's Reminiscence (4) due to Yoimiya's optimal combo which involves using her Elemental Burst before Elemental Skill, as detailed  in  xandy#7124's sheet .  Shimenawa's Reminiscence (4) offers more personal damage on Yoimiya but it sacrifices her Elemental Burst uptime which translates to lower overall team DPS  due to not being able to fully benefit from her Ascension 4 passive.\n Crimson Witch of Flames (4):  The go-to artifact set for Vaporize focused Pyro carries,  excels over the other options especially on a reaction focused team comp. \n Lavawalker (4):  Viable option on a  mono Pyro team  comp where Yoimiya can have 100% uptime on the artifact passive.\n\n Regarding Talent Priorities: \n Elemental Skill scales very poorly which is why it is the least priority. If you do not care about her Elemental Burst damage output, you can prioritize Elemental Skill over Elemental Burst, but Normal Attack talent still has the most priority since it's the main source of Yoimiya's damage.",
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
            id: 'polar_star',
          },
          {
            id: 'thundering_pulse',
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
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['thundering_fury', 'bloodstained_chivalry'],
          ['thundering_fury', '+18%_atk_set'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
          ['+18%_atk_set', 'gambler'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG / Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip:
          'See  here  for more specifics regarding the weapon rankings. \n\nCourtesy of  paraszcazk#0148\n\n Due to how Polar Star works, your optimal rotation would be different from other weapons:\n\n Skill (Burst) > NA > CA > Resummon Oz (To snapshot Polar Star stacks)',
        note:
          "[C1] is recommended to even start Fischl's DPS build, with Oz still contributing to Physical DPS even when he's off-field.\n\nThere is an animation cancelling technique with Fischl DPS. After 3 or 5 basic attacks, shoot an Aim Shot to reset your attack combo. The faster you can do this, the better it is. Only use this for animation cancelling when you're out of stamina since it can be pretty hard to replicate consistently.\n\nRegarding [C6] Fischl Build: At [C6], Oz will be dealing about 60% of the DPS and it'd be better to invest on Gladiator's Finale (2) Thundering Fury (2) until you can obtain Pale Flame (4) with an Electro Goblet.\n\nRegarding Weapon Choices:\nSkyward Harp and Polar Star: Due to the aforementioned Electro/Phys split at [C6], Polar Star will surpass Skyward Harp.\nThe Viridescent Hunt: The Viridescent Hunt is a really good investment that even surpasses Amos in a situation where there are crowds of enemies, although it's not as efficient towards massive single targets or really agile targets. It offers crowd DPS that is severely lacking due to Fischl's single target attacks.\nMitternachts Waltz: Mitternachts Waltz would be prioritized over Amos if you manage to get refinement 5 for pure Physical build Fischl.\nPrototype Crescent: If you manage to weave in a Charged Shot on enemy weak spots once every 9-10 seconds, Prototype Crescent could potentially offer more DPS, this weapon can be an option for those interested in a more challenging playstyle.",
      },
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'polar_star',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'windblume_ode',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'mitternachts_waltz',
          },
          {
            id: 'slingshot',
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Skill', ' Burst'],
        tip: 'See  here  for more specifics regarding the weapon rankings.\n\n Courtesy of itsjaeYOU#2868',
        note:
          "Elemental Burst and Skill both summon Oz, so make sure you're only using one at a time. Start with your Skill, use Burst for second Oz rotation and alternate. Hopefully, by the time your second/third round of Oz summoning is over, you'll have gained enough energy to repeat the loop.\n\nRegarding Weapon Choices: \nThe Stringless and Alley Hunter: At [R5], both these weapons are roughly equivalent to Thundering Pulse and Skyward Harp.\nPrototype Crescent: Ranking assumes hitting enemy's weak spot with Charged Shot everytime before summoning Oz.\nWindblume Ode: Ode only performs this well if Fischl ends up being the trigger for some reactions. If Fischl is used in a team comp where by there are NO ELEMENTAL REACTIONS, this weapon will be ranked below Mitternachts Waltz.\nMitternachts Waltz: This weapon will be ranked above Windblume Ode at [R5].\n\nRegarding Artifact Sets:\nThundersoother (4): This artifact set will outperform Gladiator's Finale(2) Thundering Fury(2) if used in a team comp where an electro aura is always present (e.g. Electro/Electro-charged comps) therefore it is highly recommended within this niche.\nGambler (2) Thundering Fury (2): Similar to Albedo and Defender's Will, since Gambler artifact set only goes up to 4 star quality, you should only use them in the Feather and Flower slot such that you do not lose out as much on offensive mainstats.\nTenacity of the Millelith (4): Works as a low/no investment Fischl build. This set trades off Fischl's damage in return for a party wide 20 ATK% buff. Not recommended to specifically farm this set for Fischl. Only use this set if you have pieces while farming for the Pale Flame set for your Physical DPSes.",
      },
    },
  },
  beidou: {
    roles: {
      'OFF-FIELD DPS': {
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
            id: 'akuoumaru',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'luxurious_sea-lord',
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
          ['thundersoother'],
          ['noblesse_oblige'],
          ['scholar', 'the_exile'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK', ' Elemental Mastery'],
        talent: [' Burst', ' Skill'],
        tip:
          "Beidou's skill grants you an Electro status for a brief moment upon holding it. This means it can be used for status-cleansing (No particular effective element). Can only be done on herself.",
        note:
          "Regarding Weapon Choices:\nSerpent Spine: This weapon can be considered over Wolf's Gravestone for a Sub DPS Beidou, while Wolf's Gravestone is equipped onto another Claymore DPS character with higher field time. Beidou can effectively make use of the full stacks, as long as you have her stacks up before swapped away, the stacks will be maintained even while off-field since her Elemental Burst snapshots her stats. Serpent Spine outperforms Wolf's Gravestone by a significant margin when Bennett/Sara ATK buffs are applied.\nAkuoumaru (260 team energy assumed): Akuoumaru outperforms Skyward Pride on a low ER requirement Beidou (where she is paired with other Electro characters to battery her energy needs). At [R3+], it becomes exponentially better and comes very close to Serpent Spine and Wolf's Gravestone. \n\nRegarding Artifact Sets:\nEmblem of Severed Fate (4): Even after considering the 4-piece set effect, you should refrain from investing into Energy Recharge beyond what is needed to burst off cooldown as it will result in a damage loss as compared to prioritising offensive stats such as ATK/Crit. In team comps where Beidou has low ER requirements (i.e. when paired with electro batteries), a Noblesse Oblige (2) / Thundering Fury (2) / +18% ATK set (2)  will outperform Emblem of Severed Fate (4).\nThundersoother (4): This set seeks to maximise your Burst damage in an Electro-Charged or mono Electro comps, take note that the set could be rendered useless when against enemies with non-Electro elements imbued.\nNoblesse Oblige (4): This set could be considered if your Beidou can get her Elemental Burst off cooldown and the team doesn't have a Noblesse Oblige (4) user yet, do note that sometimes Beidou doesn't benefit from the ATK buff from the 4 piece set if she's the set holder, so Beidou as a Noblesse Oblige (4) holder isn't really recommended.\nScholar (2) The Exile (2): This set acts as a cheap beginner's option to provide Beidou with 40% Energy Recharge to help maintain her Elemental Burst uptime.",
      },
    },
  },
  lisa: {
    roles: {
      'ELECTRO DPS': {
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
            id: 'the_widsith',
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
          ['thundering_fury', '+18%_atk_set'],
          ['thundersoother'],
          ['thundering_fury'],
          ['gladiators_finale', 'shimenawas_reminiscence'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Skill', ' Normal Attack', ' Burst'],
        tip:
          'Optimal Lisa String: \nES (Tap) > NA x2 [until 3 stacks] > Fully-charged ES (Hold) > N2C. Repeat N2C until E is off-cooldown, then repeat the string.\n\n*N/NA = Normal attack, C = Charged attack, ES = Elemental Skill',
        note:
          'S\nRegarding Artifact Sets:\nThundersoother (4): For teams that focus on Electro-Charge reactions, Thundersoother (4) can out dps Thundering Fury (2) +18% ATK set (2), said set is only recommended below Thundering Fury (2) +18% ATK set (2) due to the potential inconsistency.\n\nElectro DPS Lisa plays around Electro-Charge reaction teams ideally, for Overload Lisa teams, you would be building for',
      },
      'EM DPS': {
        recommended: false,
        weapons: [
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['instructor'],
          ['thundering_fury'],
          ['instructor', 'wanderers_troupe'],
          ['wanderers_troupe', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'Elemental Mastery / Energy Recharge',
          goblet: 'Elemental Mastery',
          circlet: 'Elemental Mastery',
        },
        subStats: [' Elemental Mastery', ' Energy Recharge', ' ATK%', ' Crit Rate / DMG'],
        talent: [' Burst', ' Skill', ' Normal Attack'],
        tip: '',
        note:
          'since you can be the consistent trigger with supports that apply constant Pyro off-field. You can still have an Overload team with an Electro DPS Lisa, however, if the situation prefers it.\n\nEM DPS\nEM Lisa DPS aims to be the consistent trigger for reactions, Overload is generally the best reaction for this set up. Avoid having a second Electro in the team for this build since this could mess up the Pyro aura Lisa wants for this playstyle. \n\nElectro-Charge teams will have a hard time trying to utilize EM DPS Lisa, in these situations, build Electro DPS or Off-Field DPS Lisa instead.\n\nRegarding Stats Priority: Try to invest both into EM and ER. The goal is to try stack as much EM while getting enough ER (170-190%) for a comfortable Burst uptime depending on your teams.',
      },
      'OFF-FIELD DPS': {
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
          ['emblem_of_severed_fate'],
          ['thundersoother'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro Damage',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Energy Recharge', ' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Burst', ' Skill', ' Normal Attack'],
        tip:
          "Lisa's Hold cast does not require 4 full seconds of charging to reach maximum damage threshold, as long as the indicator aligns with ring, you can release your cast at max damage.",
        note:
          "Can be built to set up for either Burst damage or Quickswap Skill Nuke damage.\nLisa works well with anemo characters which can keep enemies in her ultimate radius.\n\nRegarding Weapon Choice:\nThrilling Tales Of Dragon Slayers: This option is only recommended on a low investment Lisa whereby she is focused around buffing her teammates and contributing team DPS over outputting high damage on her own.\n\nRegarding Stats Priority: These options prioritize Lisa's Elemental Burst uptime as a defense shredding tool.",
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
          ['pale_flame', 'bloodstained_chivalry', 'gladiators_finale'],
          ['bloodstained_chivalry', 'pale_flame', '+18%_atk_set'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge ', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Razor's EB grants you an Electro Status when you basic attack while burst is in-effect, that means it can be used for status-cleansing (no particular effective element).  Can only be done on himself.",
        note:
          "Regarding Weapon Choices: \n Wolf's Gravestone : Wolf's Gravestone (inactive) outperforms Skyward Pride in every scenario except crowd battles.\n The Unforged : The playstyle with this weapon becomes a lot more comfortable without having to worry about snapshotting Wolf's Gravestone / Song of Broken Pines buffs for Sub DPSes, while also granting more Shield Bonus for better Shield uptime. A shielder is required for this, with Zhongli being the most ideal option.\n Serpent Spine : At  [C6]  and high refinement Serpent Spine, it is better to run an ATK% Goblet over Physical Damage% with Serpent Spine. This is due to the oversaturation of damage bonuses (ascension stat + Serpent Spine) in addition to the fact that Electro accounts for a significant portion of Razor's damage. An in-depth explanation can be found  here .  It is also worth noting that an [R5] Serpent Spine with max stacks can outperform all 5✩ weapons at [R1]. \n Skyward Pride : Skyward Pride is viable with a Physical DMG goblet, as the damage dealt through its passive scales with Physical%.\n\n Regarding Artifact Sets: \nPale Flame (2) Bloodstained Chivalry (2):  This set is better if your ATK% is covered by your substats, otherwise you would be better off running Gladiator's Finale (4).  This is only recommended to those who have no immediate access to a decent Pale Flame (4) set, otherwise you would be better off investing on Pale Flame pieces, regardless of weapon choice.",
      },
    },
  },
  kujou_sara: {
    roles: {
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'mouuns_moon',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'messenger',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'thundering_fury'],
          ['noblesse_oblige', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Skill', ' Burst'],
        tip:
          "For her Elemental Skill to generate particles, you need to perform a Charged Shot to place a Crowfeather after casting her Elemental Skill. If the Crowfeather explosion hits an enemy, it generates 3 particles.\n\nCrowfeathers generated from Sara's [C2] do NOT generate particles.",
        note:
          "Sara is a quickswap support who is able to buff your active characters via its Crowfeather mechanics. When Sara uses her Elemental Skill, her next Charged Shot will leave a Crowfeather on the target location and after a short while, the Crowfeather explodes and the active character in its AoE will benefit from Sara's ATK buff, which scales with her Base ATK. \n\nAt [C2], you can skip the Charged Shot as it immediately drops a Crowfeather, and save it for later on if you wanna swap back to her to extend her buffs. You can also use Elemental Skill followed by Elemental Burst so that she benefits from the Crowfeather dropped by her Elemental Skill, then swap to other character so that character can benefit from Sara's ATK buff. It's worth mentioning that Sara's Crit DMG buff at [C6] doesn't snapshot and it also doesn't show on the stats page, so don't freak out when you don't see it there.\n\nRegarding Weapon Choices: Weapons here are ranked based on their Base ATK to maximize Sara's ATK buff.\nElegy for the End: The cooldown on this weapon's passive aligns perfectly with Sara's Elemental Burst cooldown. This weapon has lower base ATK if compared with Skyward Harp, but this weapon can be considered over Skyward Harp since Sara is able to trigger the weapon passive quite easily with her Elemental Burst to provide your party members with another 100 EM and 20% ATK buff for 12 seconds, it also has Energy Recharge substat which is very valuable on a Burst Support Sara. \n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Universal support set that is able to buff your party member's ATK by 20%, use this set on Sara if there's nobody else in the party who's equipping one.",
      },
    },
  },
  traveler_electro: {
    roles: {
      SUPPORT: {
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
        artifacts: [['noblesse_oblige'], ['emblem_of_severed_fate'], ['the_exile', 'scholar']],
        mainStats: {
          sands: 'Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Energy Recharge', ' ATK%', ' Crit Rate / DMG', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip: '',
        note:
          "Traveler can provide a lot of energy and Energy Recharge to the on-field character through their Elemental Skill pick up or Elemental Burst procs. This is especially useful with a damage dealer that doesn't conflict with traveler's element and can benefit from the abundance of energy. Due to the low damage scaling on Electro Traveler's Elemental Skill and Burst, its recommended to build Electro Traveler by just stacking Energy Recharge to amplify the batterying power.",
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
            refine: [3],
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Flat ATK', ' Energy Recharge'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note:
          'This section is dedicated to a playstyle where Keqing does not infuse her attacks with electro, and instead focuses on physical damage (white numbers). For this reason, you should be charged attacking after casting Stellar Restoration (E) instead of recasting it.\n\nRegarding Artifact Sets:\nPale Flame (4): This set is the best by far as Keqing can proc its 4 piece set bonus instantly by charge attacking after casting E.\nPale Flame (2) Bloodstained Chivalry (2):  This set should only be used until getting 4PF.\nBloodstained Chivalry (2) +18% ATK set (2): The generalist Physical DPS set.\nRetracing Bolide (4): This set should only be used with a consistent shielder (i.e. Zhongli/Diona) for obvious reasons.\nBloodstained Chivalry (4): This set is for general solo and Abyss content where there are multiple mobs that can be killed with charged attacks within 10 seconds, this is for dealing with a crowd, in other words, AoE. It is not recommended because of the kill condition.',
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
            id: 'amenoma_kageuchi',
          },
          {
            id: 'skyward_blade',
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Flat ATK', ' Energy Recharge'],
        talent: [' Normal Attack', ' Burst', ' Skill', '', '.'],
        tip:
          "Preferred Skill Combo: ES (Place stiletto, don't reactivate yet) -> EB -> ES (Reactivation) -> Spam AA -> Repeat\n\nRegarding Roles:\nBoth physical and electro keqing are good and viable. You'd usually want to decide which build to go for depending on your weapon gacha luck. For example, Lion's Roar = Electro, Flute will be equally good on Electro/Phys, etc.",
        note:
          "Regarding Weapon Choices: \nSummit Shaper: This weapon can only beat Jade Cutter [R1] when it's shielded at [R2].\nThe Black Sword: On a quickswap Keqing, this weapon will be shifted below Harbinger of Dawn [R5].\n\nRegarding Artifact Sets: \nThundering Fury (2) +18% ATK set (2): This set is a generalist set, which means it can be used generally anywhere, whether it be Co-op or Abyss, or other singleplayer content. This has a lot of consistency due to its independence from electro aura, and it is more viable in abyss.\nThundersoother (4): This set should be used with Electro-charged team compositions (Keqing + Xingqiu) or mono-electro team comp (Not Suggested). This set has a 35% Dmg modifier which increases all damage from all sources, although that modifier is a bit unstable due to its dependency to the sustainability of Electro aura on enemies.\nThundering Fury (2) Noblesse Oblige (2): This set is used for Burst/Quickswap AoE Keqing. With this set, you'd want to be using Starward Sword (Q) all the time, which is your main source of DPS with this set.",
      },
    },
  },
  raiden_shogun: {
    roles: {
      'ELECTRO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'engulfing_lightning',
          },
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
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'wavebreakers_fin',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'white_tassel',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'thundering_fury', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Electro DMG / ATK%',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK', ' Elemental Mastery'],
        talent: [' Burst ', ' Skill'],
        tip:
          "Start your rotation with Raiden's Elemental Skill to amplify your party member's Elemental Burst damage.\n\nBurst combo :\n- Skill > Burst > 4NA + CA (2 times) > 2NA + CA (Recommended)\n- Skill > Burst > 3NA + CA (3 times) > 1NA + CA (Optimal)\n\n*NA = Normal Attack, CA = Charged Attack\n\nThe recommended combo provides more room for error and offers slightly better AoE while the optimal combo provides slightly higher damage",
        note:
          "Raiden's Elemental Burst damage depends on her  team's energy consumption prior to her Burst , and her Burst  restores a comfortable amount of energy for her team  (which is further amplified by her passive). This is especially convenient on teams that doesn't conflict with her element and wants the energy provision. (IE Eula, Electro, National teams, etc.). Raiden has no issues with firing her ult off cooldown after reaching about 200% Energy Recharge, but it is possible to raise it higher for better energy restoration for her team.\n\n Regarding Weapon Choices: This list assumes that Raiden is not ran with an external buffer. \n Wavebreaker's Fin:   [R5]  Wavebreaker's Fin is relatively equal Staff of Homa, depending on your total team burst cost.\n\n Regarding Artifact Sets:\nTenacity of the Millelith (4):  This set acts as a low investment support oriented set.   Raiden is an excellent ToTM holder since her Elemental Skill has 100% uptime and procs very easily. Do note that if your Raiden is equipping this set, then she will sacrifice her personal damage. \n\nRegarding Main Stats: Raiden's main stat priority for Sands and Goblet entirely depends on the substats, whether she has external buffs, and which weapon she is running.  You can find a more detailed list of suggestions f rom  ZΛNTO#4984's mastersheet here  or run it on a calculator/optimizer.",
      },
    },
  },
  xingqiu: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'sacrificial_sword',
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
            id: 'amenoma_kageuchi',
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip:
          "Activating XQ's ES/EB applies Hydro to the on-field character with his shield. (Pyro in specific)\n\nCleansing electro may take an additional switch for your character with the rain swords active, while Cryo would freeze you in place.",
        note:
          "Regarding Weapon Choices: \n Primordial Jade Cutter:  This is Xingqiu's best in slot weapon if ran with sufficient ER (240% ER before  [C6]  and 170-190% ER after  [C6] ).\n Sacrifical Sword : This is Xingqiu's best in slot weapon if he doesnt have much ER from substats, otherwise it is his second best in slot weapon.\n Harbinger of Dawn : This is a great weapon for Xingqiu, assuming he's either  [C6]  or teamed with another Hydro character for energy generation.\n\n Regarding Weapon Order on [C6]:  When Xingqiu is  [C6] , Mistsplitter and Jade Cutter has the best damage potential given enough ER (170-190%), Skyward Blade has the second best damage potential (same ER requirement as Jade), and Sacrificial Sword has the third best damage potential. \n\nBig thanks to Quincy#6965 for helping us with the   weapons calculations .\n\n Regarding Artifact Set: \n Emblem of Severed Fate (4):  If you already have an invested  [C6]  Xingqiu build with Noblesse Oblige (2) Heart of Depth (2) and Sacrificial Sword, you don't need to farm for this set. \n Noblesse Oblige (4):  Offers party-wide ATK boost, you can use this set on Xingqiu if nobody else on the party is equipping it.\n Thundersoothers (4):  This set is only recommended if you're running an electrocharged team. It's essentially the same as Noblesse Oblige (2) Heart of Depth (2) in terms of damage boost, but it also increases Elemental Skill damage, it comes with a condition though; the enemy needs to be affected by Electro aura.  Not recommended to specifically farm for this set. \n Blizzard Strayer (4):  This set is only recommended on a freeze team to optimize Xingqiu's stats since he can just disregard Crit Rate and build Crit Damage instead for more damage output. Despite it outperforming  Emblem of Severed Fate (4)  within this niche,  it is generally not recommended to specifically farm for this set. \n The Exile (2) Scholar (2):  This set is a cheap beginner option to maintain burst uptime well since it gives 40% Energy Recharge. \n\n Regarding Main Stats Priority: \nIdeally you would be running ATK% Sands when your ER needs are fulfilled. (200% if Sacrificial Sword, 230%+ for others).",
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
        artifacts: [
          ['shimenawas_reminiscence'],
          ['heart_of_depth'],
          ['wanderers_troupe'],
          ['heart_of_depth', '+18%_atk_set', 'wanderers_troupe'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip:
          "Barbara's skill gives you a pulse of healing every 5 seconds, every pulse will imbue you with a Hydro status, that means it can be used for status-cleansing (Pyro in specific, while other elements may take more pulses).\n\nTake note that Hydro reacting with Cryo status will freeze you in place, her skill should be used in consideration of the environment",
        note:
          "Use Charged Attacks if you're going to be doing Vaporize DPS, Normal Attacks are for Electro-Charge DPS.\nAlways activate your skill first, as it reduces stamina consumption and if you have [C2], it will give 15% Hydro Damage Bonus.\n\nRegarding Weapon Choices:\nMemory of Dust: This weapon requires stacks to be utilized, and in Vaporize DPS comps, you usually don't want to give up the first few Vaporize hits to stack up Memory of Dust's perk.",
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
          ['ocean-hued_clam'],
          ['maiden_beloved'],
          ['maiden_beloved', 'tenacity_of_the_millelith'],
          ['noblesse_oblige'],
          ['maiden_beloved', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'Healing Bonus',
        },
        subStats: [' HP%', ' Energy Recharge', ' Flat HP'],
        talent: [' Skill', ' Burst'],
        tip: '',
        note:
          'Use Elemental Skill and/or Elemental Burst and immediately switch. Generally, run ER if you want more consistent heals from Elemental Burst. \n\nRegarding Artifact Sets:\nMaiden Beloved (2) Tenacity of the Millelith (2): Acts as a place holder set for Maiden Beloved if you want pure healing and have not been able to gather Maiden Beloved (4) yet.\nNoblesse Oblige (4): Usable option if you want Barbara to have more utility, but do note that Barbara might have bad uptime on this set.',
      },
    },
  },
  tartaglia: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'thundering_pulse',
          },
          {
            id: 'polar_star',
          },
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
            id: 'blackcliff_warbow',
          },
          {
            id: 'mouuns_moon',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'rust',
          },
          {
            id: 'hamayumi',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['heart_of_depth'],
          ['heart_of_depth', '+18%_atk_set'],
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set'],
          ['shimenawas_reminiscence'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Energy Recharge', ' Flat ATK'],
        talent: [' Skill', ' Burst', ' Normal Attack'],
        tip:
          "Optimal skill duration for [C0]: 7s, 9s or 12s.\nOptimal skill duration for [C1]: 9s, 11s or 14s.\n\nMelee burst: Only to be used in situations where you need only 1 rotation to clear as the ER requirement to maintain burst uptime is quite high (170-190%), you'll always want to start your rotations with Ranged Burst since it refunds energy to maintain your rotation well.\n\nSkill Combo:\n- 2 NA + 1 CA (Optimal)\n- 3 NA + 1 CA (Recommended)\n- 5 NA + 1 CA (Recommended combo if using Rust or Thundering Pulse)\n\n*NA = Normal Attack, CA = Charged Attack\n\nThe Optimal combo provides more damage but consumes more stamina. Recommended combo provides slightly less damage but is more stamina efficient.",
        note:
          "Regarding Weapon Choices:\nThundering Pulse: Slightly better than Skyward Harp depending on rotations - the more time you spend doing Normal Attacks, the more it pulls ahead over Skyward Harp, but it's not recommended to extend your Childe's melee rotation for this.\nPolar Star: Has varied performance depending on how many passive stacks you get. Getting 2-3 stacks at the start of your rotation can perform better than Thundering Pulse while getting no stacks can perform worse than Skyward Harp.  **This only applies if you are Vaporising Childe Burst together with Bennett. In teams without Bennett, Polar Star will always perform better than the other options.\n3 stacks can be achieved by doing Skill + 1 Normal + 1 Charged attack before setting up your Vaporise Burst. If your Skill is still on cooldown, a fully charged Aimed shot against a riptide affected target, OR a Ranged Normal + quick Aimed shot gives 2 stacks (which can be followed by Skill for the 3rd stack).\nViridescent Hunt: Offers a valuable passive that helps a lot in grouping enemies, which can offer a ton of damage from Riptide.\nBlackcliff Warbow: Due to inconsistency of gaining stacks, falls off compared to other weapons at higher refinements.\nPrototype Crescent: Requires you to trigger its passive by hitting the enemy's weak points, falls off if compared with other options without the passive triggered.\nThe Stringless: Main DPS Childe should only use this weapon in teams where you are Vaporising your Burst, as the Elemental Mastery substat loses alot of value in other teams. If Childe is being used as a Nuke Support only for his Vaporised Burst damage, R5 Stringless will rank just below Thundering Pulse. Note that the stringless elemental skill passive does not affect Childe's melee stance auto attacks.\n\nRegarding Artifact Sets:\nShimenawa's Reminiscence (4): Due to this set requiring Childe to have around 140% Energy Recharge to reliably burst every rotation, it falls behind the other options. However, it outperforms Heart of Depth (4) if used in a single rotation setting (ignoring ER).\nHeart of Depth (2) +18% ATK set (2): This set is only about 1-2 substats behind Heart of Depth (4), you can opt out for this set instead if you already have decent pieces.",
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Energy Recharge'],
        talent: [' Burst', ' Normal Attack', ' Skill'],
        tip: '',
        note:
          'This build is best utilised at [C2], but can work without it. Do note that several 4 stars will out-dps Mona, as Mona is better off as a Sub-DPS/ Support.',
      },
      NUKE: {
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
        subStats: [' Crit Rate / DMG', ' Energy Recharge', ' ATK%', ' Elemental Mastery'],
        talent: [' Burst', ' Skill'],
        tip:
          "To make Mona's burst damage trigger the Vaporize 2.0x multiplier:\n1. Apply Pyro on enemy\n2. Cast Burst (should react and remove Pyro status on the enemy after using Burst)\n3. Wait 2.5 seconds for Mona's burst ICD (Mona should stay on field if you have Bennett, to keep the buff)\n4. Swap to Pyro character and apply Pyro on enemy\n5. Burst will pop after enemy gets hit, applying Hydro and vaporising her damage.",
        note:
          "Mona's Elemental Skill provides taunt and procs wet status on enemies, her Elemental Burst is also capable of rendering smaller enemies immobile (Mona needs to be at least 20 levels within the enemy's level) and providing a huge damage burst (and additional omen debuff after proc). \n\nLook to the Nuke Mona's Ability Tip section for Vaporize Nuke set up instructions.",
      },
      'FREEZE SUPPORT': {
        recommended: true,
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
        artifacts: [['noblesse_oblige'], ['tenacity_of_the_millelith'], ['scholar', 'the_exile']],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Hydro DMG / ATK%',
          circlet: 'Crit Rate',
        },
        subStats: [' Energy Recharge', ' Crit Rate', ' ATK%'],
        talent: [' Burst', ' Skill'],
        tip:
          "Mona's Burst applies bubble and Omen debuff upon cast, the count down timer only begins when the bubble is broken.\n\nFrozen enemies can have their bubbles preserved as long as enemies stay in a frozen state. This technique makes Mona a priority Support for Freeze DPS teams.",
        note:
          "Mona's main role on a freeze team is to provide Omen debuff from her burst as it is extendable via Freeze mechanics. Note that you must apply Cryo before casting Mona's Elemental Burst for the extension to happen. Omen Freeze extension can be done by reapplying Cryo and Hydro aura consistently (this can be done with Cryo/ Hydro infused Venti Elemental Burst + on-field Cryo/ Hydro aura).\n\nRegarding Weapon Choices:\nThrilling Tales of Dragon Slayers: Generally the best option on Freeze Support Mona because she can furthermore buff the ATK of your Main DPS. This however comes with an assumption that with TTDS, you still have 100% Elemental Burst uptime. If you do not, pick the other Energy Recharge weapon options for more Elemental Burst uptime.",
      },
    },
  },
  sangonomiya_kokomi: {
    roles: {
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
            id: 'hakushin_ring',
          },
          {
            id: 'sacrificial_fragments',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['ocean-hued_clam'],
          ['maiden_beloved'],
          ['maiden_beloved', 'ocean-hued_clam', 'tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: 'HP% / Energy Recharge / ATK%',
          goblet: 'HP% / Hydro DMG',
          circlet: 'Healing Bonus / ATK%',
        },
        subStats: [' HP%', ' Energy Recharge', ' ATK%', ' Flat HP', ' Flat ATK'],
        talent: [' Skill', ' Burst'],
        tip:
          "Kokomi's Elemental Burst dynamically alters her skill's damage, this means that you cannot use her Burst to snapshot the buff onto the Skill and swap out.",
        note:
          "Support Kokomi focuses on just using her Elemental Burst before her Elemental Skill's duration ends to refresh her skill duration. This allows 100% uptime on Hydro application from her Elemental Skill for Freeze / Electro-charge teams.\n\nRegarding Weapon Choices:\nHakushin Ring: This weapon can provide Elemental DMG% for the team in Electro-charged teams and will outperform Prototype Amber if you value damage more than healing.\nSacrificial Fragments: Can be useful as Kokomi won't need to use her Elemental Burst to reset her skill duration. This allows for smoother rotations as she will not face the problem of missing out on the reset for her Elemental Skill due to not casting Burst in time.\n\nRegarding Artifact Choices:\nTenacity of the Millelith (4): With proper extension of Kokomi's Elemental Skill, she can maintain near 100% uptime on this artifact set's 4 piece effect.\nOcean Hued Clam (4): This ranking assumes Kokomi is being used only for her Elemental Skill. If she is being used to attack onfield during Elemental Burst, this set may overtake Tenacity of the Millelith (4). \n\nRegarding Main Stats and Sub Stats: \nEnergy Recharge: Prioritise Energy Recharge first to ensure you can always use Elemental Burst before the Elemental Skill expires in order to maintain Hydro application. Without Prototype Amber, Kokomi will need ~200-220% Energy Recharge (170-190% with Prototype Amber at [R1] and 150-170% at [R5])\nATK% / Hydro DMG: If Kokomi is just being used to maintain 100% uptime on her Elemental Skill without using normal attacks during Elemental Burst, ATK% / Hydro DMG mainstat can be used to sacrifice her healing to instead maximise damage from Elemental Skill.",
      },
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'everlasting_moonglow',
          },
          {
            id: 'prototype_amber',
          },
          {
            id: 'hakushin_ring',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['ocean-hued_clam'],
          ['heart_of_depth'],
          ['maiden_beloved', 'ocean-hued_clam', 'heart_of_depth', 'tenacity_of_the_millelith'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: 'HP% / Energy Recharge',
          goblet: 'Hydro DMG',
          circlet: 'Healing Bonus',
        },
        subStats: [' HP%', ' Energy Recharge', ' ATK%', ' Flat HP', ' Flat ATK'],
        talent: [' Burst', ' Normal Attack', ' Skill'],
        tip:
          "Due to Kokomi's high stamina cost on her Charged Attacks, her best attack strings are: \n\nAt [C0]: N2D \nAt [C1]: N3D*\n\n*N3D might result in a loss of Beidou Stormbreaker hits (DPS loss), and as such is only recommended in a Vaporize comp where the added Hydro application is favoured.\n\n*NA = Normal Attack, D = Dash",
        note:
          "DPS Kokomi aims to maximise her onfield damage only during her Elemental Burst's duration. Outside of her Elemental Burst, her damage is lackluster and not worth building for.\n\nRegarding Weapon Choices:\nThrilling Tales of Dragon Slayers: Although this weapon doesn't provide as much personal damage for Kokomi, the 48% ATK buff is usually more worth in most cases. This can be her best weapon in for overall team DPS if you don't already have another TTDS  user in your team.\nHakushin Ring: This weapon can provide Elemental DMG% for the team in Electro-charged teams, and will usually be the best choice in those situations.\n\nRegarding Artifact Choices:\nTenacity of the Millelith (4): Although this set offers the lowest personal dmg for Kokomi, the 20% ATK team buff is usually more worth for overall team DPS.",
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
          ['emblem_of_severed_fate', 'tenacity_of_the_millelith'],
          ['maiden_beloved', 'tenacity_of_the_millelith'],
          ['maiden_beloved'],
          ['maiden_beloved', 'emblem_of_severed_fate'],
          ['the_exile'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'HP% / Healing Bonus',
        },
        subStats: [' HP%', ' Energy Recharge', ' Flat HP'],
        talent: [' Burst = Skill'],
        tip:
          "Diona's Elemental Skill grants you a cryo shield which allows cleansing. Every time you swap characters with the shield up, it applies cryo. This acts as a cleanse.",
        note:
          "The shielding Diona puts out should offset the need for healing from her burst. The damage boost from Noblesse Oblige (4) has more practical use. Additionally, her first constellation greatly increases her ultimate uptime, further lowering the healing needed.\n\nAs a support, Diona's typically used for three things; Shielding, Healing, and Cryo particle generation. Pairing Diona with Cryo carries such as Ganyu and Eula allows you to funnel energy into your DPS characters while providing them with quick shields for stagger resistance. Weapons such as Sacrificial Bow and Favonius Warbow greatly increase her potential as a battery.\n\nRegarding Weapon Choices:\nSacrificial Bow: Prefered over Favonious especially at higher refinements due to having better Shield uptime.\nFavonius Warbow: You will look to build some Crit Rate coverage to have a higher chance of triggering bow passive for energy.\nRecurve Bow: This bow will be your best choice for stronger shields, but it reduces Diona's burst uptime significantly due to no Energy Recharge on her weapon.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): This set provides an atk buff while also increasing burst damage - this set is usually used with healers because you want to use damage sets on other support units such as Xingqiu or Beidou.\nEmblem of Severed Fate (2) Tenacity of the Milellith (2): Provides both ER and HP which are both valuable for a support diona, increasing ult uptime and healing strength respectively.\n\nRegarding Main Stat Choices: \nFull Stack HP% is recommended if you want stronger shields but a weaker heal. You can use Healing Bonus Circlet if you want a nice balance between the two. \n\nRegarding Talent Priority: \nPrioritise whichever your Diona is geared for (shielder or healer), if built for a balance between the two, level both equally.",
      },
    },
  },
  chongyun: {
    roles: {
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'redhorn_stonethresher',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'akuoumaru',
          },
          {
            id: 'luxurious_sea-lord',
            refine: [5],
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
        subStats: [' Crit Rate / DMG ', ' ATK% ', ' Elemental Mastery ', ' Energy Recharge', ' Flat ATK'],
        talent: [' Burst = Skill'],
        tip:
          "Chongyun's Elemental Burst is calculated as Claymore damage, which means it breaks Geo Structures/ Shields at a much easier rate and can proc shatter.",
        note:
          "Chongyun is much preferred as a Sub DPS/ Nuke over Main DPS as his Normal Attack scalings are very low, even when including Constellation 1. His Elemental Burst on the other hand hits extremely hard on later constellations and takes a much higher total damage portion over his Normal Attack. On top of that, you can Reverse Melt all 3 hits of his Elemental Burst on enemies applied with strong Pyro, such as Bennett's Elemental Skill and Elemental Burst.\n\nChongyun is very niche as he only performs well in certain teams and can completely destroy the other. He is mainly used on a team as an enabler, be it for Reverse Melt teams (e.g. Melt DPS Bennett) or Freeze teams (e.g. Freeze DPS Kaeya). He also does not function well with Physical teams (e.g. Razor, Eula) as it renders his Elemental Skill useless because it converts their Normal Attack damage from Physical to Cryo. They're usually using a Physical Goblet, so if they got their Normal Attack converted from Physical to Cryo, they won't benefit from Physical DMG Bonus from the goblet, thus it's a DPS loss.\n\nAt [C2], his Elemental Skill reduces ability cooldown that is casted within the zone by 15%. This is one of the few abilities in the game that can reduce cooldown.\n\nRegarding Weapon Choices:\nSerpent Spine: This weapon outperforms Wolf's Gravestone if we only look at Chongyun's damage contribution [5 Stack Assumed]. Wolf's Gravestone is ranked higher as it provides more teamwide DPS and does not come with the need to acquire stacks before engaging in combat.\nAkuoumaru: At [R1], Akuoumaru beats Luxurious Sea-Lord if Chongyun is used in a team with 260 or greater total team energy. Akuoumaru only beats Luxurious Sea-Lord if [R2] and above otherwise.\nSacrificial Greatsword: This weapon is your best choice if faced in a situation where you heavily rely on Chongyun's Cryo infusion uptime.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Chongyun is one of the best Noblesse holders since he has low energy requirements for his Elemental Burst.\n\nRegarding Talent Priority: \nPrioritize Elemental Burst on a Melt team as it scales better than his Elemental Skill.\nPrioritize Elemental Skill on a Freeze team to furthermore extend the duration of the Cryo infusion.",
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
        subStats: [' Crit DMG ', ' ATK%', ' Energy Recharge', ' Crit Rate', ' Flat ATK'],
        talent: [' Burst', ' Normal Attack', ' Skill'],
        tip:
          'As a Freeze DPS, he gains over 55%+ Crit Rate with the right team set up:\n- 15% from Cryo Resonance against Cryo affected enemies\n- 40% from Blizzard Strayer against Frozen enemies\n- 15% from [C1] against Cryo affected enemies',
        note: 'DPS\nCry',
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Flat ATK', ' Energy Recharge'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note:
          "S Kaeya is recommended over Physical DPS Kaeya since most of his kit scales with Cryo.\n\nKaeya Cryo DPS is mostly used in a team with Chongyun and Xingqiu/Barbara while having Blizzard Strayer (4) equipped. In this team, Kaeya has 55% crit rate against Frozen enemies without any additional Crit stats, which means Crit Rate substats are generally prioritized less than ATK% or Crit DMG.\n\nRegarding Artifact Sets:\nPale Flame (4): This set is difficult to fully utilise due to Kaeya's skill cooldown being 6 seconds. The full set effect requires 2 stacks to be active at any given time, so maintaining stacks can be difficult when considering rotations between characters.",
      },
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'freedom-sworn',
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
            id: 'lions_roar',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['noblesse_oblige', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Energy Recharge ', ' Crit Rate / DMG ', ' ATK%', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip: '',
        note:
          "Kaeya's Elemental Burst makes him an excellent source of Cryo application for characters that often stay in melee range, although his burst can't be fully utilized with Reverse Melt teams due to how his Cryo damage is split into a barrage of attacks.\n\nIn most teams, investment for damage is not a necessity, most notable examples are Razor teams and Hutao Xingqiu teams where his general purpose is to apply Cryo, instead of being the damage dealer. This does not mean that he should not be invested, but is still useful even without proper investments.\n\nRegarding Weapon Choices:\nFreedom Sworn: This weapon's ranking is assumed with reverse melt teams where the EM stat would be useful.\nSkyward Blade: In teams with a 2nd cryo unit generating energy, this weapon would have a lower priority as the Energy Recharge stat would mostly be wasted.\nLion's Roar / The Alley Flash / Iron Sting: These weapons' rankings are assumed with reverse melt teams where the passive and EM stat would be useful. At [R5], these weapons would outperform Summit Shaper.\n\nRegarding Artifact Sets:\nInstructor (4): Due to his ability to easily trigger Instructor's passive, Kaeya is a good holder of Instructor (4) for Reverse Melt teams. Aside from ER%, most of his other main stats don't matter as much, making this one of his budget support builds. \nNoblesse Oblige (4): This set is only recommended if there is no other member of the team running Noblesse Oblige (4).",
      },
    },
  },
  rosaria: {
    roles: {
      'CRYO DPS': {
        recommended: false,
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
            id: 'wavebreakers_fin',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'white_tassel',
            refine: [5],
          },
        ],
        artifacts: [['blizzard_strayer'], ['gladiators_finale'], ['blizzard_strayer', '+18%_atk_set']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit DMG',
        },
        subStats: [' Crit DMG ', ' ATK%', ' Energy Recharge', ' Crit Rate', ' Flat ATK'],
        talent: [' Burst', ' Skill', ' Normal Attack'],
        tip: '',
        note:
          "If played in a permafreeze setup, Rosaria has the same team comp as Freeze kaeya. Check Kaeya's ability tips section for teamcomp setup.\n\nRegarding Substats: \nRosaria does not need much Energy Recharge if paired with Kaeya. If paired with another Cryo unit such as Chongyun or Ayaka, she will need ~130-150% Energy Recharge\nCompared to Kaeya, Rosaria has even less desire for Crit Rate, as her Ascension 1 Talent includes an extra 12% Crit Rate once skill hits the back of an enemy.\n\nRegarding Weapon Choices:\nWavebreaker's Fin: At [R5], this weapon can perform similar to Staff of Homa.\nDeathmatch: Rosaria gets alot of Crit rate from Blizzard Strayer (4) and Cryo Resonance. As a result, this weapon falls off in value as you will tend to overcap above 100% Crit rate. If Rosaria is being used without the Blizzard Strayer (4) set, then this weapon can perform better compared to other options.\n\nRegarding Talent Priority:\nNormal Attack: If Rosaria is being used with Chongyun to infuse her normal attacks with Cryo, her Normal Attack talent will have higher priority than Skill.",
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
            id: 'deathmatch',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'lithic_spear',
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
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['pale_flame', '+18%_atk_set'],
          ['blizzard_strayer'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note:
          "Regarding Artifact Sets:\nPale Flame (4): This set is difficult to fully utilise due to Rosaria's skill cooldown being 6 seconds. The full set effect requires 2 stacks to be active at any given time, so maintaining stacks can be difficult when considering rotations between characters.\nGladiator's Finale (4): The 4 piece set passive doesn't work with Crescent Pike.\nBlizzard Strayer (4): Rosaria's Elemental Burst is required to maintain uptime for Blizzard Strayer (4) (due to Fischl/Beidou stealing Cryo procs for Superconduct). Due to the low uptime of Rosaria's Elemental Burst at [C0], this artifact set is only recommended at [C2+].",
      },
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'wavebreakers_fin',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'kitain_cross_spear',
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
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['noblesse_oblige', 'blizzard_strayer', '+18%_atk_set'],
          ['lavawalker'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' Elemental Mastery', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip:
          "Be sure to cast skill before burst as Crit Rate granted by the Ascension 1 Talent will be included with Ascension 4 Talent Bonus as well.\n\nRosaria's Elemental Skill and Elemental Burst can be Reverse Melted (1.5x) with another Pyro applier for some quick and powerful damage.",
        note:
          "This section is tailored around giving Rosaria as much damage as possible. Crit Rate stacking is not as necessary, if 50% Crit Rate is guaranteed at the very least, you will still be giving crit rate buffs of 9.7% with the Ascension 1 Talent Bonus.\n\nRegarding Weapon Choices: This section was calculated with 160% ER requirement, which is why ER substats weapons are valued highly here, with lower ER reqs, those weapons may fall off if compared with weapons with more offensive substats. Rosaria's [C4] can reduce this ER requirement down to 140% or lower.\nVortex Vanquisher: This ranking is assumed without a shield. With a large amount of attack buffs such as Bennett, this weapon can fall off compared to the other options due to overstacking ATK%.\nDragon's Bane / Kitain Cross Spear: These weapons are only used if Rosaria is played in a team comp in which she constantly triggers Reverse Melt. [R5] Dragon's Bane can outperform The Catch, and [R5] Kitain's Cross Spear is on par with Deathmatch.\nWavebreaker's Fin: At [R5], this weapon can perform similar to Staff of Homa.\nLithic Spear: At [R5], this weapon can perform similar to Vortex Vanquisher.\n\nRegarding Artifact Sets:\nLavawalker's Epiphany (4): Only viable on Rosaria if she's triggering Reverse Melt, pulls ahead of Noblesse Oblige (2) Blizzard Strayer (2) assuming you can trigger Reverse Melt on all of her kits.\nNoblesse Oblige (4):  Offers party-wide ATK boost, you can equip this set on Rosaria if nobody else on the team is equipping it.\n\nRegarding Substats Priority:\nElemental Mastery is only recommended if Rosaria is to be utilized as a Reverse Melt trigger, as shown in the Ability Tips section.\n\nThe following is only recommended to those who have not obtained a desirable set for Rosaria, with Crit Rate building as her placeholder set.\nIf you don't wish to hyperinvest onto Rosaria, she could still be used as a Crit Rate provider, you can build up to 88% Crit Rate and use skill to cap out 100% Crit Rate, then cast Elemental Burst for the Crit Rate buff. This can be easily achievable if you have an existing Crit Rate substat polearm, otherwise just put on whatever Crit Rate Circlet, Substats and Berserker artifacts you may have to stack Crit Rate.",
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
          ['ocean-hued_clam'],
          ['maiden_beloved'],
          ['maiden_beloved', 'gladiators_finale'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'ATK%',
          circlet: 'Healing Bonus / ATK%',
        },
        subStats: [' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip: '',
        note:
          "Qiqi's Burst has an 80 energy cost with her skill not generating any energy until [C1]. Energy Recharge will greatly benefit Qiqi, while her Burst should be kept as a last resort.\nQiqi's Burst allows other characters to maximize DPS field time while offering healing from being off-field. At Ascension 4, her Normal Attack applies the healing talisman onto an enemy with a cooldown of 30 seconds.\n\nRegarding Weapon and Artifact Choices:\nSacrificial Sword and Tenacity of the Millelith (4): Tenacity of the Millelith allows Qiqi to give the team a decent ATK boost while staying in enemy melee reach with Skill active. Sacrificial Sword increases the uptime of her Skill, which in turn increases the uptime of the team's ATK boost. If you find that your Qiqi's heals are often more than enough, you may consider switching her to this artifact set. Do note that other characters might utilize Sacrificial Sword more than Qiqi, such as Xingqiu, Kazuha, etc.\nOcean Hued Clam (4): This ranking assumes Qiqi does not get her Elemental Burst up often and is instead relying mainly on her Elemental Skill for healing. If she is in a team which funds her enough energy particles, or if she acts as the on-field DPS, this set can overtake Tenacity of the Millelith (4).",
      },
    },
  },
  ganyu: {
    roles: {
      'MELT DPS': {
        recommended: true,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'hamayumi',
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
        ],
        artifacts: [
          ['shimenawas_reminiscence'],
          ['wanderers_troupe'],
          ['blizzard_strayer', '+18%_atk_set', 'wanderers_troupe'],
        ],
        mainStats: {
          sands: 'EM / ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Flat ATK', ' Energy Recharge'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip: '',
        note:
          "Ganyu's Level 2 Charged Shot applies two instances Cryo as they do not share the same ICD, which allows you to trigger Melt reaction twice for both damage instances. Charged Attack will be the majority of her damage output while neglecting her Skill/Burst damage contribution for most scenarios.\n\nRegarding Weapon Choices:\nAmos' Bow: Amos is an excellent weapon for Ganyu since her Level 2 Charge Shot Bloom extends arrow flight duration and you can get 3 stacks of Amos' passive even on point blank range.\nHamayumi: This weapon doesn't synergize well with Shimenawa's Reminiscence (4) due to its passive.\nPrototype Crescent: At [R5] with good uptime on its passive, it can potentially beat Skyward Harp. However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly.",
      },
      'FREEZE DPS': {
        recommended: true,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'polar_star',
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
        ],
        artifacts: [['blizzard_strayer'], ['blizzard_strayer', '+18%_atk_set']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack = Burst', ' Skill'],
        tip:
          "When using her Elemental Burst, make sure to stand inside to benefit from the Cryo DMG Bonus buff.\n\nMake sure to not overcap on Crit Rate (25%-45% Crit Rate since Ganyu's A1 passive only affects her Charged Shot and subsequent Bloom effect)",
        note:
          "Freeze Ganyu gives a lot of i-frames since you would be spamming Elemental Burst from all of your party members off cooldown. Ganyu's Elemental Burst can deal a ton of damage based on how grouped the enemies are.\n\nRegarding Weapon Choices: \nPolar Star: This weapon is much harder to optimize with, due to having a very high Crit Rate stat resulting in your Crit Rate going well above 100%. However, if optimised properly (i.e. very little Crit Rate rolls and more rolls into ATK/Crit DMG), it pulls ahead of the other two options.\nThundering Pulse and Skyward Harp: In quickswap heavy rotations (Ganyu Mona Venti Diona) where you usually don't do a lot of Charged Shots, these two weapons could pull ahead of Amos' Bow.\nPrototype Crescent: Similar to the Melt Build, Crescent can pull ahead of Skyward Harp at high refines and with good uptime on its passive. However, its performance is affected by enemies having/not having a weak spot you can consistently headshot. \n\nRegarding Artifact Sets:\nBlizzard Strayer (4): This set is the go to set for a Frozen team comp, whereas you focus all your stats on Crit DMG while prioritizing ATK% over Crit Rate%. This has high damage and energy sustainability while also be used outside of Freeze comps for a flat 20% Crit Rate against enemies with a Cryo status. A Hydro Support would be appreciated with Blizzard Strayer (4) Ganyu. Highly Recommended, especially for players who have Ganyu at [C4].",
      },
      'OFF-FIELD DPS': {
        recommended: false,
        weapons: [
          {
            id: 'thundering_pulse',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'the_stringless',
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
            id: 'elegy_for_the_end',
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
        subStats: [' Energy Recharge ', ' Crit Rate / DMG', ' ATK%', ' Elemental Mastery ', ' Flat ATK'],
        talent: [' Burst', ' Skill', ' Normal Attack'],
        tip:
          "When using her Elemental Burst, place her Elemental Skill in the AoE to taunt and keep enemies inside the zone for constant damage.\n\nMake sure to hit enemies with her skill's initial damage and her explosion damage as they both regen energy for her ult.",
        note:
          "An Off-field DPS Ganyu shines brightly on a Freeze comp as she has 100% Elemental Burst uptime and her Elemental Burst buffs party members' Cryo Damage. \n\nRegarding Weapon Choices:\nPrototype Crescent: This weapon might pull ahead of some of the other options if you activate the buff before casting Elemental Burst.\nBlackcliff Warbow: Might be dificult to activate the passive and gain stacks since Ganyu is most of the time off field.\nElegy for the End: Offers party-wide Elemental Mastery and ATK buff which is quite nice on reaction heavy team comps.\n\nRegarding Artifact Sets:\nNoblesse Oblige (2) Blizzard Strayer (2): This set is the generalist set, it focuses on dealing damage with her Elemental Burst and constantly affecting enemies with Cryo for reactions.\nNoblesse Oblige (4): This set is a pure support set for Ganyu, focuses on her using her burst and switching out to to your main dps for extra damage (Gives a 20% boost to DMG) and to trigger reactions. Use this set if you are only using her Burst and to support your main DPS.\nIt is also worth noting that on a Freeze comp, a Sub DPS Ganyu can also equip Blizzard Strayer (4) as it offers high stat values. This set pulls ahead of the other options on a Freeze comp.",
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
            id: 'luxurious_sea-lord',
            refine: [5],
          },
          {
            id: 'akuoumaru',
            refine: [1],
          },
          {
            id: 'blackcliff_slasher',
            stack: 1,
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
        subStats: [' Crit Rate / DMG', ' Energy Recharge', ' ATK%', ' Flat ATK'],
        talent: [' Normal Attack = Burst', ' Skill'],
        tip:
          'Normal combo while no Burst:\nNA Spam > Tap Skill > NA Spam > Tap Skill\n\nBurst combo:\nTap Skill > Burst > 4 NA > Hold Skill > 4 NA\n\nBurst combo that generates more energy at the cost of slightly less DPS:\nTap Skill > Burst > Tap Skill > 4 NA > Dash Cancel > 2 NA > Hold Skill > 2 NA\n\n*NA = Normal Attack',
        note:
          "Eula's weapon rankings assume that you're running her with a Cryo battery (i.e. Diona) instead of Bennett. She would usually need 30%-60%+ Energy Recharge from substats depending on what team and Cryo batteries you use.\n\nEula's Elemental Burst does not snapshot. This means that any buffs Eula has upon casting Burst will not be taken into effect if the buff duration expires before the Lightfall Sword hits. \n\nRegarding Weapon Choice:\nSkyward Pride: This weapon is more forgiving towards ER substats. If there is a Cryo battery unit in your team (Diona with Sacrificial Bow or Kaeya with Favonius Sword) or if your team generates enough particles on their own, Skyward Pride loses effectiveness compared to the above options. \nAkuoumaru: This weapon will outperform Luxurious Sea Lord at higher refinements.\n\nRegarding Artifact Sets:\nPale Flame (4): This is Eula's optimal artifact set and it relies on having a condition fulfilled in order to outperform Pale Flame (2) Bloodstained Chivalry (2). If you are able to sustain the conditional buff, you will be able to achieve a 50% Physical DMG Bonus + 18% ATK. Without using your Elemental Burst, you can sustain the Pale Flame's 4 piece set bonus because each stack lasts 7s and it refreshes per stack, and Eula's Elemental Skill cooldown is only 4 seconds when doing 1-taps, therefore you can keep the condition up. When using this set, it is recommended to not use Hold Skill cast until your Lightfall Sword is nearly about to end. This restriction is only for players who don't have Eula [C2+]. Please visit the Ability Tips for her combo.\nPale Flame (2) Bloodstained Chivalry (2): This is a non-conditional, consistent artifact set that provides you a constant 50% Physical DMG bonus. While that by itself is amazing, Pale Flame (4) can outperform this set because it also has another 18% ATK buff and is easily maintained through her low tap skill cooldown.",
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
          circlet: 'Crit Damage / ATK%',
        },
        subStats: [' Crit DMG', ' ATK%', ' ER%', ' Crit Rate', ' Flat ATK'],
        talent: [' Burst', ' Normal Attack', ' Skill'],
        tip:
          "Ayaka's Charged Attack, Elemental Skill and Elemental Burst hits enemies inside Venti's Elemental Burst.\n\nHer Elemental Burst also stays in place on frozen enemies and slightly knocks enemies away when they're not frozen.",
        note:
          "Kamisato Ayaka is a pretty straightforward DPS that deals most of her damage from her Elemental Burst. She has very high scalings on her burst at the cost of it being 80 energy. You will likely need another Cryo battery on the team to provide energy for her (Diona, Kaeya, Rosaria, etc). She has a special dash (like Mona) and after she dashes, she will get a Cryo infusion on her Normal Attacks. Ensure you always have this bonus active to maximise your rotation damage.\n\nShe can be played on a permafreeze team (paired with a Hydro enabler such as Mona, Xingqiu, or even Barbara) where she could gain huge benefits from the Blizzard Strayer (4) artifact set. Blizzard Strayer (4) piece gives a huge amount of stats on a Freeze team, so try to get this artifact set as fast as you can. Her Elemental Burst also sticks on frozen enemies, but it also has a small hitbox so you need to position it well so that it can hit multiple bigger enemies.\n\nRegarding Weapon Choices:\nAquila Favonia: While Aquila has Physical Damage% as a main stat, which is basically useless on Ayaka, it is still a good statstick as it has a high base ATK and ATK% buff from the passive.\nPrimordial Jade Cutter: With Blizzard Strayer (4) and Cryo Resonance, this weapon overcrits, so avoid getting Crit Rate substats.\nSkyward Blade, Blackcliff Longsword, The Black Sword, Amenoma Kageuchi: These 4 weapons will give a similar output, so it's not worth getting or building another when you already have one. Depends on how much Energy Recharge you're running, how much stacks your Blackcliff has, how much time you're gonna spend doing Normal Attacks, and how much you value the passive on Amenoma since it gives you leeway in building Energy Recharge, one can be better than the other. If you're running Skyward Blade or Amenoma Kageuchi (especially with higher refines), avoid getting Energy Recharge substats as their stats / passives assist in elemental burst generation significantly.\nThe Flute: Offers slightly more damage potential than Amenoma Kageuchi, with the tradeoff being losing Kageuchi's energy generation. Decide for yourself which is better for your team and rotations.",
      },
    },
  },
  aloy: {
    roles: {
      'BURST SUPPORT': {
        recommended: false,
        weapons: [
          {
            id: 'thundering_pulse',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'predator',
          },
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'slingshot',
            refine: [5],
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer', 'wanderers_troupe', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%  / Elemental Mastery',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Elemental Mastery', ' Energy Recharge', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip: '',
        note:
          "Aloy is much preferred as a Burst Support over Main DPS as getting coil stacks for her Cryo infusion can be quite unreliable. Aloy needs 4 coil stacks to get the Cryo infusion and you can only get 1 stack every 0.1 seconds which is quite hard to do considering the Bomblets are scattered all over the place. One thing to note regarding Aloy's coil stacks is that she can still get coil stacks even when she's off-field.\n\nAloy is very niche as she only performs well in certain comps and even then, she's still completely replaceable by other characters. She can be utilized on a Freeze team where she can be a battery and nuke at the same time since she provides 5 Cryo particles on her Elemental Skill. She can also be utilized on a Melt team where you can melt her Elemental Burst for quite a decent amount of damage.\n\nRegarding Weapon Choice:\nPolar Star: Forcing to get Polar stacks isn't worth due to consuming extra time to get those stacks.\nThe Stringless: Placement was considering Aloy is used on a Reverse Melt team. On Reverse Melt Aloy, Stringless especially at higher refinement levels can pull ahead of Thundering Pulse.\nPrototype Crescent: Assumes the passive is active by proccing a weak point shot. This weapon especially at higher refinement levels can be as good as a Skyward Harp.\nSacrificial Bow: A pretty decent option to make Aloy a Cryo battery as her Elemental Skill provides 5 Cryo particles.\n\nRegarding Artifact Sets:\nBlizzard Strayer (4): This artifact set is best used on a Freeze-focused Aloy as it provides a ton of Crit Value.\nWanderer's Troupe (2): This artifact set bonus only benefits a Melt-focused Aloy, Elemental Mastery provides nothing on a Freeze Aloy.\nNoblesse Oblige (4): Aloy is one of the best Noblesse holders since she has low energy requirements and cooldown for her Elemental Burst.\n\nRegarding Artifact Main Stat and Substats Priority: \nElemental Mastery is only an option if your Aloy is played on a Reverse Melt team as it provides nothing to a Freeze Aloy.",
      },
    },
  },
  shenhe: {
    roles: {
      TBD: {
        recommended: false,
        weapons: [
          {
            id: 'calamity_queller',
          },
        ],
        artifacts: [],
        mainStats: {
          sands: 'TBD',
          goblet: 'TBD',
          circlet: 'TBD',
        },
        subStats: ['TBD'],
        talent: ['TBD'],
        tip: '',
        note: '',
      },
    },
  },
  sucrose: {
    roles: {
      'EM BUILD': {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'the_widsith',
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
        subStats: [' Elemental Mastery', ' ATK%', ' Crit Rate / DMG', ' Energy Recharge'],
        talent: [' Skill', ' Burst'],
        tip:
          "When utilized as a Viridescent Venerer (4) artifact set holder, make sure you don't immediately swap away after casting Skill/Burst, you need to be on-field when the swirl reaction happens for you to trigger the 4-set effect.",
        note:
          "People often compare Sucrose with Venti for Crowd-Control capabilities, but that's not what you'll be looking for. Sucrose is a character that can give Elemental Mastery to her teammates through swirling the correct elements (Ascension 1 Talent), which improves reaction damage for the Characters benefitting from the EM boost. Her Ascension 4 Talent also boosts the entire team's EM by 20% of Sucrose's total EM, this is why you want to stack as much elemental mastery as possible in her artifacts. As a support, most of Sucrose's value lies on her Ascension 1 and 4 talents, hence leveling her other talents (Normal Attack, Skill, and Burst) is not required.\n\nRegarding Weapon Choices: \nIt's important to note that these weapons were ranked based on how much EM they offered you. However, this doesn't take into account how much each catalyst benefits your entire team's DPS.\nThrilling Tales of Dragon Slayers: This weapon does not provide any EM, however it overtakes the other weapons on the list when it comes to enabling your team. It offers 48% ATK boost to the character you swap to which is equivalent to 1 main stat. This enables your DPS more if compared to Sacrificial Fragments which only gives ~44EM, equivalent to only 2 substats.\nWidsith: This weapon is only useful if you get the EM passive from it. As such, it is not recommended for general gameplay but only if you want the highest possible EM buff.\nFavonius Codex: This weapon can be useful if you need Sucrose's Elemental Burst up as often as possible for grouping. You may need to get a few crit rate substats to trigger the passive reliably.\nThere are some team compositions in which Sucrose's Elemental Mastery is not a priority, such as Freeze teams or an Anemo battery for Xiao. In such situations it's better for Sucrose to use to Thrilling Tales of the Dragon Slayers.\n\nRegarding Energy Recharge Priority: \nRanking is based on the assumption that Sucrose has Sacrificial Fragments and is not valued for her Burst in teams that may not want Sucrose's Burst interfering with elemental auras. Energy Recharge could be prioritized higher when Sucrose is utilized in teams that don't really mind which element is being applied first and last (e.g. Electro-charged).",
      },
    },
  },
  sayu: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'katsuragikiri_nagamasa',
          },
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'bloodtainted_greatsword',
          },
        ],
        artifacts: [['viridescent_venerer'], ['noblesse_oblige'], ['emblem_of_severed_fate', 'maiden_beloved']],
        mainStats: {
          sands: 'Energy Recharge / Elemental Mastery',
          goblet: 'Elemental Mastery / ATK%',
          circlet: 'Healing Bonus / Elemental Mastery',
        },
        subStats: [' Energy Recharge', ' Elemental Mastery', ' ATK%'],
        talent: [' Burst', ' Skill'],
        tip: 'Use hold Skill then immediately press it to generate more particles.',
        note:
          "Sayu does more damage with EM builds and heals more with ATK hybrid builds, Healing Bonus hat can be used for better heals while maintaining respectable damage. Note that Sayu wants a large amount of energy recharge when used as the only anemo slot on the team (200%ish).\n\nRegarding Weapon Choices:\nWolf's Gravestone: Wolf's Gravestone is a universal claymore that is capable of buffing your teammates along with providing more healing in Sayu's case. It is best used once you achieve your ER threshold.\n\nRegarding Artifact Sets:\nViridescent Venerer: The bread and butter artifact set for Anemo units, this set provides the ability to shred the enemy's elemental resistance while also buffing Sayu's swirl damage output.",
      },
    },
  },
  traveler_anemo: {
    roles: {
      'ANEMO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'freedom-sworn',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'amenoma_kageuchi',
            refine: [1],
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'dark_iron_sword',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['viridescent_venerer', 'wanderers_troupe', 'noblesse_oblige', '+18%_atk_set'],
          ['+18%_atk_set', 'martial_artist'],
        ],
        mainStats: {
          sands: 'Elemental Mastery / ATK% / Energy Recharge',
          goblet: 'Elemental Mastery / Anemo DMG',
          circlet: 'Elemental Mastery / Crit Rate / DMG',
        },
        subStats: [' Elemental Mastery', ' Energy Recharge', ' ATK%', ' Crit Rate / DMG', ' Flat ATK'],
        talent: [' Skill', ' Burst'],
        tip: '',
        note:
          "This section is dedicated to utilising the Anemo Traveler's Elemental Skill / Burst. Due to how little field time this playstyle takes, the Traveler can also fulfill the role of a quickswap style Sub-DPS.\nAnemo Traveler can require up to 160% Energy Recharge.\n\nRegarding Weapon Choices:\nAnemo Traveler can either go for a full Elemental Mastery build or a full ATK/Crit build without much difference in damage. The weapon rankings listed here will not change much between the two builds.\nSacrificial Sword: This weapon's ranking assumes you make use of the passive Elemental Skill reset, however doing so will require you to stay onfield for a much longer period of time which may not be ideal sometimes.\nAmenoma Kageuchi: This weapon reduces your ER% requirements to ~135% at [R1] and ~110% at [R5]. At [R5], this weapon will be better than Sacrificial Sword.\nFavonius Sword: Although this weapon does not provide much damage, the Energy generated by the passive can sometimes be more beneficial to your team. Make sure to build some amount of Crit rate to reliably trigger the passive.",
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
            refine: [5],
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Flat ATK', ' Energy Recharge'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip: '',
        note:
          'Not Recommended for End Game Content.\n\nRegarding Artifact Sets: \nPale Flame (4): When running this set, make sure you do Press Cast and not Hold Cast, as the Hold Cast Skill Cooldown would be too long for you to refresh your stacks.',
      },
    },
  },
  jean: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
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
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip:
          "Jean's Elemental Burst continuously imbues characters in zone with Anemo status, that means it can cleanse all elemental statuses aside from Dendro",
        note:
          "Jean's Elemental Skill can deal fall damage based off enemy's max HP% and fall velocity if you aim it upwards. Do note that some 4 stars outdps Jean, Jean is better off as a Support.\n\nRegarding Weapon Choices:\nMistsplitter Reforged: If Jean is used with a way to infuse her attacks with an element (Chongyun / [C6] Bennett), Mistsplitter Reforged will outperform Primordial Jade Cutter as you get full value out of the passive.",
      },
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'favonius_sword',
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
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['noblesse_oblige'],
          ['ocean-hued_clam'],
          ['viridescent_venerer', '+18%_atk_set'],
          ['viridescent_venerer', 'emblem_of_severed_fate'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'viridescent_venerer'],
          ['noblesse_oblige', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Anemo Damage / ATK%',
          circlet: 'Crit Rate / DMG / ATK%',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Burst / Skill', ' Skill / Burst'],
        tip: '',
        note:
          "Jean's Elemental Skill can be used to push smaller mobs and stagger bigger ones. Her healing scales with ATK.\n\nRegarding Weapon Choices:\nAmenoma Kageuchi: This weapon can lower your ER% requirements from anywhere between ~150% to no additional ER% needed, depending on the number of stacks on the passive and the refinement of this weapon. As such, at higher refines / more stacks on the passive, this weapon can perform better than Skyward Blade, while at lower refines / less stacks, it can perform worse.\nFreedom-Sworn: The ranking here only assumes Jean's personal damage and not the utility it gives. If you want to furthermore buff your main DPS, you can give this sword to Jean as she can trigger Freedom-Sworn's skill relatively easily since Anemo is always trigger. \nLion's Roar: Depending on passive uptime, it can be ranked over Favonius (at 50% uptime) and even Aquila (at 100% uptime).\n\nRegarding Artifact Sets:\nViridescent Venerer (4) is the bread and butter for Anemo characters in general, as it is commonly used for the 40% elemental resistance shred.\nNoblesse Oblige (4) is the other option for providing utilities to the team. This set gives a 20% partywide ATK boost after Jean casts her Elemental Burst.\nOcean-Hued Clam (4) is the best set for Jean's personal damage, as the damage it deals scales with Jean's burst healing. However, because Jean's total damage output is on the low end, it is generally recommended to prioritize utility options such as Noblesse Oblige or Viridescent Venerer over this set.\n\nRegarding Talent Priorities: \nIf you prefer more damage than healing, prioritize Elemental Skill over Elemental Burst since it scales better.\n\nFor Support Jean, you can either go for more ATK for stronger heals, but relatively lower Burst uptime, or more ER for lower heals, but higher Burst uptime. Choosing between these two is up to personal preference, although if another Anemo character is on the team, Jean has very little energy problem and can potentially go full Sub DPS build.",
      },
    },
  },
  venti: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'windblume_ode',
            refine: [5],
          },
          {
            id: 'alley_hunter',
            refine: [5],
          },
          {
            id: 'raven_bow',
            refine: [5],
          },
          {
            id: 'alley_hunter',
            refine: [1, 4],
          },
          {
            id: 'skyward_harp',
          },
        ],
        artifacts: [['viridescent_venerer'], ['noblesse_oblige']],
        mainStats: {
          sands: 'Elemental Mastery / ATK%',
          goblet: 'Elemental Mastery / Anemo DMG',
          circlet: 'Elemental Mastery/ Crit Rate / DMG',
        },
        subStats: [' Elemental Mastery', ' Energy Recharge', ' ATK%', ' Crit Rate / DMG', ' Flat ATK'],
        talent: [' Burst', ' Skill'],
        tip:
          "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on swirl first.(E > Q to avoid this issue)\n\nYou can infuse elements onto Venti's Burst if you walk up with an element status on you. (e.g. Bennett Burst > Venti Burst > Walk up to infuse Pyro)\n\nCheck out  this link  to see which characters can hit the enemies sucked and ragdolled in Venti's burst. (Sheet has not been updated since Yanfei release)",
        note:
          "This build focuses on damage over ER because of his ER ascension stat. This weapon order is in the assumption of EM Venti, as Crit Venti's damage potential is limited to either extremely high investment or single target situations.\n\nRegarding Weapon Choices:\nSkyward Harp: Due to EM build assumptions, the stats offered aren't very valuable. Consider reading the In-depth Guide from KQM if you're interested in a Crit-focused build.\nElegy for the End: Elegy for the End's ATK buff DOES NOT buff Venti's burst if Venti is the one equipping the bow, but the EM buff affects Venti's Swirl reaction. This is due to Venti's burst snapshotting his stats (excluding EM toward transformative reactions such as Swirl) at the time of cast. While an [R1] Elegy of the End yields slightly lower Venti damage compared to an [R5] Stringless (~7% assuming 50% Elegy buff uptime), it provides a party-wide ATK and EM buff which can be better in terms of total team damage and comfortable ER.",
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
            id: 'deathmatch',
          },
          {
            id: 'lithic_spear',
            stack: 2,
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [['viridescent_venerer', 'gladiators_finale', 'shimenawas_reminiscence']],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Anemo DMG',
          circlet: 'Crit DMG / Crit Rate',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Elemental Mastery', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Regarding Xiao's Optimal Skill Rotation:\nE > E > Q > Plunge Combo\n\nRegarding Xiao's Plunge Combo:\nBest combo for Xiao when fighting a single target:\nPlunge -> Normal Attack -> Charged Attack -> Plunge\n\nBest combo for Xiao when fighting multiple enemies:\nPlunge -> Normal Attack -> Plunge",
        note:
          "Xiao has issues with Energy regeneration because he cannot generate any particles with his Elemental Skill while his Burst is active, so it is not suggested to use his Elemental Skill during Elemental Burst.\n\nStart off a fight by casting the skill of your Anemo Battery and then casting his skill twice then cast your burst immediately. You will want to be half way through your burst animation before the particles reach you, so this way you can start off your burst with a portion of the energy gauge already filled. Same goes for any other Anemo Battery (recommended below), cast skill and swap back to Xiao to cast burst before the particles reach you.\n\nYou'll want to pair Xiao with another Anemo character (Venti, Sucrose, Jean or Anemo Traveler) to help him gain energy while his Elemental Burst is on cooldown. Xiao's Elemental Burst ends when you swap to another character. Although he has two charges of his Elemental Skill, only ONE charge comes back per cooldown.\n\nRegarding Weapon Choices: With a proper anemo battery (e.g. Sucrose), Xiao needs as little as 120-130% ER to maintain a high burst uptime. In these scenarios, unless there are no ER from substats, you should always go for a non-ER weapon as it will result in more damage.\n\nRegarding Artifact Sets: Prioritize Viridescent Venerer over the other 2 +18% ATK sets if there are external ATK% buff sources on your team.",
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
            id: 'iron_sting',
          },
          {
            id: 'dark_iron_sword',
          },
        ],
        artifacts: [['viridescent_venerer'], ['instructor'], ['thundering_fury']],
        mainStats: {
          sands: 'Elemental Mastery / Energy Recharge',
          goblet: 'Elemental Mastery',
          circlet: 'Elemental Mastery',
        },
        subStats: [' Elemental Mastery', ' Energy Recharge', ' ATK%', ' Crit Rate / DMG'],
        talent: [' Burst', ' Skill', ' Normal Attack'],
        tip:
          "The element which is absorbed by Kazuha's elemental burst follows the priority of Pyro > Hydro > Electro > Cryo, and can be absorbed from both the active character and enemies. (i.e. Standing in Bennett burst will result in Kazuha's Burst infusing Pyro as Bennett applies Pyro to the active character)",
        note:
          "Kazuha's 4th Ascension Passive encourages players to maximise Elemental Mastery in order to maximise his utility. \n\nSimilar to Venti, due to the EM buffs, a triple EM build will out-damage a regular ATK-EM/Anemo/Crit build as long as there are 2+ enemies due to the amount of swirls involved. Because of this, an ADC (Attack/Damage/Crit) build isn't recommended unless he is in a team whereby he cannot make use of his A4 passive or swirls. (i.e. mono Anemo/Geo teams)\n\nRegarding Weapon Choices: \nThe ultimate goal is to try stack as much EM while getting enough ER (160-180%) for a consistent Burst uptime. Having Sacrificial Sword or a second Anemo character in the team will also help reduce the needs for ER and prioritize EM substat more.\nIron Sting: Iron Sting will yield the highest upfront EM and teamwide buff if compared to the other 4 star options, if you manage to meet his energy needs or simply don't need more than one rotation, this would be the better option if compared to the Energy Recharge weapons.\n\nRegarding Artifact Sets:\nThundering Fury (4): This is a niche build that excels only in AOE situations and with specific teams. This teams includes an off-field Hydro and Electro support to allow Kazuha to constantly trigger the 4p effect and spam his Elemental Skill, aswell as another Anemo support to hold the 4p Viridiscent Venerer set. Such teams can be Kazuha + Kokomi + Fischl + Venti, with Barbara and Sucrose being weaker replacements for Kokomi and Venti. This team triggers multiple fall damage instances against enemies that can be Crowd Controlled by Kazuha. Fischl can use The Viridiscent Hunt bow to allow for more fall damage instances. **NOTE: This team performs very poorly in pure single target situations.",
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
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
        ],
        artifacts: [
          ['archaic_petra', '+18%_atk_set'],
          ['retracing_bolide'],
          ['noblesse_oblige', 'archaic_petra'],
          ['noblesse_oblige', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Ningguang's Burst generally does not land all 12 hits - one of the Star Gems from the Jade Screen usually slams into the ground before its homing can activate. This missed gem is important for Bolide vs Noblesse.\n\nSkill has a 6 second internal cooldown on generating Energy, so for the sake of maintaining Burst loops, wait 6 seconds to cast again if you need energy.\n\nScreen also breaks when casted on top of another Geo Structure, you can intentionally use a structure to break your first screen.",
        note:
          "Regarding Weapon Choices:\nDodoco Tales: Generally, Dodoco Tales is outperformed by The Widsith/Solar Pearl at [R3], however with the right buffs, The Widsith can match Dodoco Tales at lower refinements. Note that Bennett's buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff may push The Widsith and Solar Pearl above Dodoco Tales, even at low refinements.\nThe Widsith/Solar Pearl: If your stats aren't balanced, then whichever weapon's substat is better for balancing you out at the 1:2 ratio (assuming [C2]) will outperform the other. For example, if you're at 50/70 from artifacts, The Widsith is ahead even with no theme on charged attacks thanks to it pushing your crit damage high enough to overpower Solar Pearl's crit rate. If your crit rate and crit damage are at 50/100 or 60/120 or similar balanced values, The Widsith is very slightly better so long as you get two good themes in a row before EM themes, which on average is expected.\n\nRegarding Artifact Sets:\nThis set ranking order assumes [C2] so that you have efficient energy generation with burst loops. If you don't have [C2] and can't quickly regain your Elemental Burst basically off cooldown, then a full Retracing Bolide (4) set may be better.\n\nRetracing Bolide (4): This set is generally recommended for players without Ningguang [C2+] . N1 > CA rotations are the most ideal for this set, to prevent stamina consumption you need to be close up to enemies so the Normal Attack hits before the CA animation starts.\n\nWalk through your Skill before using Burst for more damage. Normal Attack Animation Cancel is possible if you hold down on a walking direction and do Normal Attack before you start moving.\n\nNingguang [C2] can reset Skill cooldown when Skill is used while there's an existing Jade Screen, shattering the existing Jade Screen and triggering the [C2] perk. See example below:\nSkill Cast > Wait Skill CD (11s) > Skill Cast > [C2] resets Skill CD > Skill Cast (Shatters Previous Barrier) > Wait [C2] CD (6s) > Skill Cast (Shatters Previous Barrier)",
      },
      'SUB DPS / NUKE': {
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
          ['noblesse_oblige', 'archaic_petra'],
          ['archaic_petra', '+18%_atk_set'],
          ['noblesse_oblige', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Burst', ' Skill', ' Normal Attack'],
        tip:
          'If Ningguang is [C6], talent priority changes to Burst > Normal Attack > Skill.\n\nWalking through the Jade Screen before casting burst is heavily recommended for the Geo DMG bonus.',
        note:
          "This section is dedicated towards a quickswap style Ningguang, where she outputs high burst damage in an extremely short time window before swapping out to other supports.\n\nRegarding Weapon Choices: \nThe Widsith: The Widsith is ranked lowly due to the playstyle not aligning with its downtime. (You might get 1-2 Burst rotations without buff active, depending on how quickly you rotate your supports) For this reason, its average DPS is below Solar Pearl.\n\nRegarding Weapons Ranking with Bennett's Burst considered: With Bennett's burst considered, Solar Pearl and Lost Prayer to the Sacred Winds will be ranked above Memory of Dust, with Solar Pearl outperforming Lost Prayer to the Sacred Winds at [R2+]. This is because in a quickswap composition, it is difficult to develop and maintain stacks on a [R1] Lost Prayer to the Sacred Winds.",
      },
    },
  },
  noelle: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'redhorn_stonethresher',
          },
          {
            id: 'serpent_spine',
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
          ['husk_of_opulent_dreams'],
          ['retracing_bolide'],
          ['gladiators_finale'],
          ['husk_of_opulent_dreams', 'archaic_petra'],
        ],
        mainStats: {
          sands: 'DEF% / ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' Energy Recharge', ' DEF%'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          "Optimal attack rotation is N1>N2>N3>N4>dash/hop, where N refers to each normal attack in her 4 hit combo. This isn't always feasible due to cast time and N4 covers a lesser AoE than N1-3 (as well as knockback issues), so the recommended rotation is N1>N2>N3>dash/hop.",
        note:
          "It's recommended to avoid building a DPS Noelle if she's not [C5+].\nNoelle DPS is best optimized at [C6] where she converts an additional 50% DEF into ATK. Her ability to sustain her team with shields, heals and AOE damage makes for a reliable DPS when your team is built around her.\n\nRegarding Weapon Choices:\nSerpent Spine: When using Husk of Opulent Dreams, Serpent Spine stacks are prioritized over Husk of the Opulent Dreams stacks, due to their conflicting nature in gaining stacks (Off-field and on-field)\nSkyward Pride: Useful if you are unable to get ER from your substats. Does really well while its passive is active, but falls off in sustained fights. Comfort option that has quite a big power gap if compared with Serpent Spine or Whiteblind.\nFavonius Greatsword: Only recommended with high refines, as its usefulness scales with its particle generation capabilities. R5 allows her to self-battery assuming some additional particles from enemies, but a second Geo is always recommended regardless for resonance. \n\nRegarding Artifact Sets:\nHusk of Opulent Dreams (4): Noelle snapshots her DEF on burst cast. To get the full 4 stacks' DEF% boost during your first burst, you need to wait 12 seconds off field before swapping in. In abyss, time spent before the chamber starts still generates stacks.\nRetracing Bolide (4): Optimally offers slightly less damage than Gladiator's, but is much easier to farm per resin and can have 100% uptime with crystallise shields. Consider Gladiator's Finale if you don't want to farm for Archaic Petra as Artifact Strongbox is much more effective than elite bosses in terms of artifacts per resin.",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'whiteblind',
          },
          {
            id: 'sacrificial_greatsword',
            refine: [5],
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [['husk_of_opulent_dreams'], ['husk_of_opulent_dreams', 'maiden_beloved']],
        mainStats: {
          sands: 'DEF%',
          goblet: 'DEF%',
          circlet: 'DEF%',
        },
        subStats: [' DEF%', ' Flat DEF', ' Energy Recharge'],
        talent: [' Skill', ' Burst', ' Normal Attack'],
        tip: 'Use her charged attacks for healing as they are much faster than normal attacks.',
        note:
          "Support Noelle is not currently recommended in any content due to her extremely lackluster healing and poor shield uptime.\n\nRegarding Weapon Choices:\nSacrificial Greatsword: Does not proc on Noelle's [C4] if she's off field, so a high refine is needed for the initial cast to reliably reset cooldown. Even with [R5], the cooldown is 16 seconds while Noelle's shield duration is 12, so forced downtime is an issue.\nFavonius Greatsword: Relies on hitting crits to generate energy. The 12 second cooldown at [R1] matches with her shield cooldown. Generally not recommended unless you have an abundance of crit substats or wish to build her pseudo-DPS.\n\nRegarding Artifact Sets: \nHusk of Opulent Dreams (4): Gives up to 54% DEF at max stacks. Will outperform Husk of Opulent Dreams (2) Defender's Will (2) due to 5 star artifacts having higher scaling for mainstats and substats compared to their 4 star variants.",
      },
    },
  },
  gorou: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_warbow',
          },
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'elegy_for_the_end',
          },
        ],
        artifacts: [
          ['the_exile'],
          ['noblesse_oblige'],
          ['emblem_of_severed_fate', 'the_exile'],
          ['emblem_of_severed_fate', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge',
          goblet: 'Geo DMG / DEF%',
          circlet: 'Crit Rate / DEF% / Healing Bonus',
        },
        subStats: [' Energy Recharge', ' DEF%', ' Crit Rate'],
        talent: [' Skill'],
        tip:
          "[C2] extends the duration of Gorou's Elemental Burst from 9 seconds to 12 seconds if you can obtain the required Crystallize shields. This allows his teammates to gain the 3 Geo 15% Geo DMG% bonus for a longer duration, so it's preferable to use Burst as your last ability before swapping into your DPS.",
        note:
          "Gorou is a Support character that can give increasing buffs to your party members from his Elemental Skill and Elemental Burst based on the number of Geo characters in your team (capped at 3). Casting his Elemental Skill sets up a banner which gives flat DEF (1 Geo), Interruption Resistance (2 Geo) and Geo DMG% Bonus (3 Geo) for your active character standing inside the banner radius. Casting his Elemental Burst creates a field following the active character which deals periodic damage and offers the same bonuses given by the Skill, destroying any placed banners in the process. Due to his kit focusing on buffing DEF and Geo DMG, he's a specialised support geared towards Geo DPS that scales with DEF, such as Noelle or Itto. He can see niche use at [C6] with other Geo characters as well.\n\nRegarding Weapon Choices:\nElegy for the End: Elegy offers a helpful ER substat alongside an EM and ATK% buff for your teammates. While not directly useful in teams centered around Noelle or Itto, this could possibly be a good choice for future Geo DPS characters, or in a team which utilizes Geo Resonance.\n\nRegarding Artifact Sets:\nThe Exile (4): Casting Elemental Burst regenerates a total of 6 Energy for each of your party member. This set reduces your Energy Requirements by a bit for all of your party members, which can be quite beneficial. Do note that this is a 4 star set so you're potentially missing out on 5 star stat scaling, which is a 34% difference in mainstat value and 25% difference in individual substat value.\nNoblesse Oblige (4): The effectiveness of this set increases if you've already met the ER requirement for Gorou. At that point, you'd no longer need to run the recommended ER% sets, which means you can opt for this instead. \n\nRegarding Artifact Mainstats and Substats Priority:\nDEF% mainstats and substats (and potentially a Healing Bonus mainstat on Circlet) can be considered at [C4] due to being able to heal the active character based on his DEF during burst. This is useful if you plan to use him as a solo healer.\nCrit Rate circlet and substats can be considered when Gorou is using Favonius Warbow to trigger the passive comfortably.\nER% substats can usually be more important than getting the right mainstat, as Gorou's damage contribution to a team is negligible, while being able to get Energy for his Burst is a lot more important.",
      },
    },
  },
  yun_jin: {
    roles: {
      TBD: {
        recommended: false,
        weapons: [],
        artifacts: [],
        mainStats: {
          sands: 'TBD',
          goblet: 'TBD',
          circlet: 'TBD',
        },
        subStats: ['TBD'],
        talent: ['TBD'],
        tip: '',
        note: '',
      },
    },
  },
  traveler_geo: {
    roles: {
      'GEO DPS': {
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
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'sword_of_descension',
          },
        ],
        artifacts: [
          ['archaic_petra', '+18%_atk_set'],
          ['noblesse_oblige', 'archaic_petra'],
          ['emblem_of_severed_fate'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Skill ', ' Burst'],
        tip:
          'Skill and Burst have equal priorities.\nWhen using your Elemental Skill, try to use the hold variant of it over tapping, as it has a slight delay on the tap variant.',
        note:
          "This section is dedicated to utilising the Geo Traveler's Geo Elemental Burst damage capabilities. Due to how little field time this playstyle takes, the Traveler can also fulfill the role of a quickswap style Sub-DPS.\n\nRegarding Weapon Choices: \nFestering Desire, Skyward Blade, Amenoma Kageuchi: These weapons help in bursting off cooldown, but if you're not having issues with energy, then these weapons falls behind in terms of damage.",
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
            refine: [5],
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
          ['pale_flame', 'bloodstained_chivalry', '+18%_atk_set'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['retracing_bolide'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Phys DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Skill', ' Burst'],
        tip: '',
        note:
          "Not Recommended for End Game Content.\n\nRegarding Artifact Sets:\nGladiator's Finale (2) Pale Flame (2): This set is ranked higher than Pale Flame (2) Bloodstained Chivalry (2) due to how much Geo Damage is in the Traveler's kit. If you truly prefer to have the highest physical damage output, use Set 2 instead.\nPale Flame (4): This set is not recommended due to the Traveler's Elemental Skill cooldown being 6 seconds, which means the 4 piece set effect only kicks in 6 seconds into every rotation, and also gives the player a very little time window to keep up the 4 piece set effect.",
      },
    },
  },
  zhongli: {
    roles: {
      'PHYSICAL DPS': {
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
            id: 'blackcliff_pole',
          },
          {
            id: 'white_tassel',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', '+18%_atk_set'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'ATK% / HP%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' HP%', ' Energy Recharge', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip: '',
        note: 'Optimal Physical Rotation:\nNormal Attack until Spear Kick -> Dodge/Jump Cancel -> Repeat',
      },
      'SHIELD SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'black_tassel',
          },
          {
            id: 'favonius_lance',
          },
        ],
        artifacts: [['tenacity_of_the_millelith']],
        mainStats: {
          sands: 'HP%',
          goblet: 'HP%',
          circlet: 'HP%',
        },
        subStats: [' HP%', ' Flat HP', ' Energy Recharge'],
        talent: [' Skill', ' Burst'],
        tip: '',
        note:
          "This kind of playstyle is very straightforward; stack as much HP as possible. Prioritize HP scaling polearms such as Black Tassel and artifact sets such as Tenacity of the Millelith (4) to capitalize on Zhongli's Shield. Most of the time, especially on a HP-focused Zhongli, casting Elemental Burst is a DPS loss due to the cast time, which is why you'd only want to cast Elemental Burst for the Crowd Control it offers, and not for damage.\n\nNote that if paired with Xingqiu and/or Beidou, the damage reduction from orbitals from Xingqiu's Elemental Skill and Elemental Burst and/or Beidou's Elemental Burst can be utilized on Zhongli's shield, making it basically unbreakable.\n\nRegarding Weapon Choices:\nFavonius Lance: Use this weapon over Black Tassel if you value the team energy (Note that you need to build some amount of Crit Rate if you are running Favonius Lance to trigger the passive).",
      },
      'BURST / NUKE': {
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
            id: 'the_catch',
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
            stack: 1,
          },
          {
            id: 'prototype_starglitter',
          },
        ],
        artifacts: [
          ['archaic_petra', 'noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'archaic_petra', '+18%_atk_set', 'tenacity_of_the_millelith'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK% / HP%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' ATK%', ' HP%', ' Energy Recharge', ' Flat ATK', ' Flat HP'],
        talent: [' Burst', ' Skill'],
        tip: '',
        note:
          "Zhongli's kit is best utilised as a Geo Burst damage dealer for his short Elemental Burst cooldown (12s) and low energy cost (40 Energy), while his Elemental Skill Hold Cast (Shield) scales with HP and at Ascension 4, you would unlock a talent that allows your burst to scale with 33% of Zhongli's Max HP, making him an amazing source of shield and damage.\n\nRegarding Artifact Sets:\nEmblem of Severed Fate (4): On higher ER requirements, this set pulls ahead of Archaic Petra (2) Noblesse Oblige (2), however it's not recommended to stack ER to fully benefit from the 4 piece set effect since by stacking ER, you sacrifice other offensive stats.\n\nRegarding Weapon Choices:\nFavonius Lance: Zhongli's lackluster particle generation can be problematic in teams without a reliable source of Geo energy. With sufficient energy/Geo particles (i.e. in a dual Geo team) Lithic Spear and above will outperform Favonius Lance.\nDeathmatch: In teams with a reliable source of Geo energy, Deathmatch will outperform The Catch. \n\nRegarding Main Stats:\nIdeally, you'll want ATK%/Geo/Crit Rate-DMG for maximum Elemental Burst damage, as his Ascension 4 Talent scaling would be best benefitted using only one HP main stat, any additional HP stat is desirable as it goes to his shield durability/burst damage.",
      },
    },
  },
  albedo: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'cinnabar_spindle',
            refine: [5],
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'freedom-sworn',
          },
        ],
        artifacts: [
          ['husk_of_opulent_dreams'],
          ['husk_of_opulent_dreams', 'archaic_petra'],
          ['noblesse_oblige', 'archaic_petra'],
          ['tenacity_of_the_millelith'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'DEF%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG / DEF%',
        },
        subStats: [' Crit Rate / DMG', ' DEF%', ' ATK%', ' Energy Recharge', ' Flat DEF', ' Flat ATK'],
        talent: [' Skill', ' Burst'],
        tip: "Albedo's Elemental Skill particle generation is completely RNG like Zhongli, but with better odds.",
        note:
          "Albedo is a character that can summon a Geo Construct from his Elemental Skill which deals damage on a 2 second interval whenever enemies in the field are damaged. His Elemental Burst provides 125 EM to the party, which is good on teams that rely on amplification reactions, such as Vaporize. It is worth noting that since his stat priority is focused on DEF (Elemental Skill scaling), you might want to skip casting Elemental Burst if your team doesn't benefit from the 125 EM buff. Another option is to build him with ATK-DEF Hybrid, which ends up with lower Skill damage but higher Burst damage.\n\nRegarding Weapon Choices:\nPrimordial Jade Cutter: On a Hybrid build where Albedo casts his Elemental Burst, this weapon can be a better option than Cinnabar Spindle on certain situations, such as AoE where Albedo's Burst hits multiple enemies or when there are external ATK buffs like Bennett's Burst. On a pure Elemental Skill focused Albedo or Single Target situations for Hybrid Albedo, Cinnabar Spindle is the better option, so choose wisely.\nHarbinger of Dawn: Albedo's Elemental Skill scales with Defense, which is why the Base ATK from the weapon doesn't matter that much. Harbinger of Dawn offers a lot of Crit stats which is why it is one of the strongest weapons for him despite being a 3 star weapon. The downside of this weapon is that you'd need to keep Albedo's HP at 90% or higher to benefit from the passive, so it might be annoying to use against certain enemies which has a HP lowering debuff, even when off-field, such as Corrosion.\nMistsplitter Reforged: Realistically you are only able to get 2 stacks of this weapon's passive and this requires setup. Generally just use Harbinger of Dawn instead and give your Mistsplitter Reforged to another sword DPS character.\nFreedom-Sworn: Equipping this weapon will decrease Albedo's own damage significantly but he is one of the better Freedom-Sworn holders since he can trigger the passive quite easily to buff your other party members.\n\nRegarding Artifact Sets:\nHusk of Opulent Dreams (4): Due to Albedo's skill snapshotting upon cast, you need to either wait ~12 seconds before starting a domain/fight to reach max stacks or recast his skill to benefit from the DEF and Geo DMG bonus provided by the 4 piece set effect.\nTenacity of the Milelith (4): This set is used for the 4 piece set effect which has good uptime on Albedo. Worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\nNoblesse Oblige (4): If you don't have another character in your party that has this set, you can use this set on Albedo. You might want to get some Energy Recharge substats to maintain your Elemental Burst uptime for this. It is also worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\n\nRegarding Artifact Substats Priority:\nATK and Energy Recharge substats are only valuable on a Hybrid Albedo that casts his Elemental Burst.",
      },
    },
  },
  arataki_itto: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'redhorn_stonethresher',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'whiteblind',
          },
        ],
        artifacts: [
          ['husk_of_opulent_dreams'],
          ['retracing_bolide'],
          ['husk_of_opulent_dreams', 'archaic_petra', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: 'DEF%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [' Crit Rate / DMG', ' DEF%', ' Energy Recharge', ' ATK%', ' Flat DEF', ' Flat ATK'],
        talent: [' Normal Attack', ' Burst', ' Skill'],
        tip:
          'Itto can prefunnel energy from his Elemental Skill before casting Elemental Burst but you might want to cast your Skill after your Burst to benefit from the DEF to ATK conversion so that your Skill hits way harder.',
        note:
          "[WIP] Arataki Itto is a Geo DPS Character who primarily deals damage from doing Charged Attacks, named Arataki Kesagiri, during his Elemental Burst duration. Arataki Kesigiri consumes no stamina and can be casted continuously as long as he has Superlative Superstrength stacks. Superlative Superstrength is capped at 5 stacks at any given time, and Itto gets those stacks when his 2nd and 4th Normal Attack string hits an enemy. Activating his Elemental Burst allows his 1st and 3rd Normal Attack to also generate stacks. Itto's Elemental Skill deals damage to enemies on cast and summons a taunt, Ushi, which is considered a Geo Construct. This initial cast damage grants Itto 1 Superlative Superstrength stack, and upon Ushi leaving the field, Itto is granted another stack. When Ushi takes damage, Itto gains a stack (capped at 1 stack per 2 seconds). Itto's Elemental Burst converts his Normal and Charged Attacks into Geo DMG, increases Itto's Normal Attack Speed and converts a portion of Itto's current DEF to ATK.\n\nRegarding Weapon Choices:\nSerpent Spine: When using Husk of Opulent Dreams, Serpent Spine stacks are prioritized over Husk of the Opulent Dreams stacks due to their conflicting nature in gaining stacks (Off-field and on-field).\nSkyward Pride: Can be a great or bad weapon for Itto depending on your ER needs. The less Energy Recharge you need (due to particle generation from your party members or ER from subs), the less useful this weapon becomes.\nWhiteblind: Your first rotation often starts with 1 stack of this weapon, and due to Itto's Burst snapshotting DEF on cast, you're unable to take advantage of further DEF% from the stacks until your second Burst.\n\nRegarding Artifact Sets: \nRetracting Bolide (4): Bolide grants you an additional 40% Normal and Charged Attack DMG when shielded. Crystallize can be unreliable so a consistent shielder is preferred, such as Zhongli.",
      },
    },
  },
};
