export const builds = {
  amber: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'aqua_simulacra',
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
          ['crimson_witch_of_flames', '+80_em'],
          ['crimson_witch_of_flames', '+18%_atk_set'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit DMG'],
        },
        subStats: ['Crit DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Amber DPS will be focused on maximizing Charged Shot damage on enemy weak spots as Amber's Ascension 4 Talent increases ATK by 15% for 10s after hitting a weak spot. Crit is also guaranteed when you land your shot on a weak spot so we aim to maximize Crit DMG with little to no dependance on Crit Rate, this could change after <b>[C4]</b>.\nAfter <b>[C4]</b>, the playstyle catering towards her Skill damage becomes available, with this build you will want to run <b>Crimson Witch of Flames (4)</b> while trying to maintain the 1:2 Crit Ratio for more frequent nukes. This playstyle is safer, more consistent and has more AoE damage to play compared to Charge Shot Amber.\n\n<b>Regarding Weapon Choices:</b>\n<b>Prototype Crescent:</b> This bow will beat <b>Skyward Harp</b> if it's <b>[R2+]</b>.\n<b>Hamayumi:</b> This bow will beat <b>Sharpshooter's Oath</b> <b>[R5]</b> if it's <b>[R2+]</b>.\n\n<b>Regarding Artifact Sets:</b>\n<b>Shimenawa's Reminiscence (4):</b> At <b>[C4]</b> this set will beat out <b>Wanderer's Troupe (4) </b>for Amber Charged Shot Main DPS.",
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
            id: 'the_viridescent_hunt',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['instructor'],
          ['+20%_energy_recharge', '+20%_energy_recharge'],
          ['the_exile'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: 'Due to her poor scalings, this section is dedicated to a low-investment build that provides utility and shieldbreaking capabilities by abusing her quick Pyro application on her Elemental Burst. Due to her energy generation being extremely poor, her Energy Recharge options are prioritized.\n\n<b>Regarding Artifact Sets:\nInstructor (4): </b>This set is preferred over <b>Noblesse Oblige (4)</b> when Amber is used as support in a Hu Tao Vaporize team.',
      },
    },
  },
  xiangling: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_the_scarlet_sands',
          },
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
            id: 'calamity_queller',
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
            id: 'missive_windspear',
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
          ['noblesse_oblige', 'crimson_witch_of_flames', '+18%_atk_set', '+80_em', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%', 'Elemental Mastery'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: 'A few commonly used teams for pyro Xiangling are:\nNational Team: Xiangling, Xingqiu, Bennett and a Flex unit (Sucrose/Zhongli/Kazuha/Raiden/Chongyun/etc)\nChilde Team: Childe, Xiangling, Bennett and a Flex unit (Sucrose/Zhongli/Venti/Kazuha/etc)',
        note: "<b>Regarding Weapon Choices: THIS LIST ASSUMES THAT XIANGLING IS RUN WITH BOTH BENNETT AND A SECONDARY BUFFER (i.e. Kazuha/Sucrose)\nWavebreaker's Fin: </b>At <b>[R5], </b>this weapon is equal to or outperforms <b>Staff of Homa,</b> depending on your total team burst cost.<b>\nDragon's Bane: </b>At <b>[R5], </b>this weapon outperforms<b> Primordial Jade Winged-Spear.</b>\n<b>Kitain Cross Spear: </b>This weapon's passive reduces the ER threshold of Xiangling greatly. This allows you to distribute ER rolls into otherwise offensive substats and due to this, an <b>[R5] Kitain Cross Spear</b> can outperform <b>Primordial Jade Winged-Spear.</b> Due to lowering ER thresholds so much, the <b>Crimson Witch of Flames (4)</b> artifact set will outperform <b>Emblem of Severed Fate (4).</b>\n<b>Lithic Spear: </b>At<b> [R5], </b>and with <b>2 stacks</b>, this weapon performs equal to <b>Primordial Jade Winged-Spear.</b>\n<b>Favonius Lance:</b> The utility provided from a <b>highly refined Favonius Lance</b> can make it a weapon of choice in a team comp where Xiangling is not triggering the reaction and is instead used as an aura. <b>(i.e. Reverse Melt teams)</b>\n\n<b>Regarding Weapons and Artifacts with EM stat:\nDragon's Bane / Kitain Cross Spear / EM substats:</b> In team comps where you can trigger<b> </b>both <b>Vaporize and Overload at the same time</b> (i.e. Raiden National), <b>Elemental Mastery</b> gets more value, pushing these weapons and artifacts ahead in damage.<b>\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4):</b> This set can be competitive with <b>Emblem of Severed Fate (4)</b> on team comps where Xiangling triggers Overloads in addition to Vaporize (i.e. Raiden National).\n<b>The Exile (2) Scholar (2): </b>This set can be used as a <b>very low investment support build to enable Reverse Melt team comps</b> where Xiangling is not triggering the reaction and is instead used as an aura and needs a lot of Energy Recharge. Note that it is <b>not recommended to stay on this build as Xiangling can still contribute respectable damage with offensive stats.\n</b>",
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
            stack: 1,
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
          ['crimson_witch_of_flames', '+18%_atk_set', 'noblesse_oblige', '+80_em'],
          ['thundering_fury'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: "Bennett's EB grants you a pyro status as long as your characters are within his burst AoE (Cryo in specific, since Pyro > Cryo).\n\nFor that, cast EB with Bennett, switch to the character imbued with Cryo and walk on Bennett's Burst field\n\nUpon entering burst field, the Pyro status will continuously imbue you with Pyro, reacting with other elements on you and eventually removing them.",
        note: "<b>Regarding Weapon Choices:\nThe Black Sword: </b>With an EM sand, this combo has the highest Melt/Vaporize damage.<b> \nIron Sting: </b>This weapon at <b>[R1]</b> with an Elemental Mastery sand turns out to have diminishing returns and isn't as good, but <b>[R2+] Iron Sting</b> is a different question because better buffs.<b>\nAquila Favonia: </b>Assuming you have a high investment build's CR/CD stats, this weapon with EM sands will be better than the two above.<b>\nPrimordial Jade Cutter: </b>With <b>Thundering Fury (4)</b>, this weapon is able to out-perform<b> Mistsplitter Reforged</b> due to massive Crit Rate% substat, which allows consistent Vaporize damage despite the lack of Crit Rate/DMG substats, assuming that your EM Sands/Circlet lacks crit rate substats. However, in the rare occasion that your EM pieces manage to roll plenty of Crit subs, <b>Mistsplitter Reforged</b> easily overtakes the <b>Primordial Jade Cutter</b>.<b>\nThe Alley Flash: </b>This weapon has the potential to beat <b>Iron Sting [R5]</b>, but this requires the passive to be up, whenever damaged, your passive is disabled for 5 seconds and you could be losing out a lot of damage, especially if you are constantly being damaged.\n\n<b>Regarding Artifact Sets:\nCrimson Witch of Flames (4):</b> Assuming a Melt/Vaporize team, this set is your best set for damage and works best with Chongyun on the same team for consistent Melt.\n<b>Thundering Fury (4)</b>: This set works best if paired with Electro supports such as Beidou and Fischl/Lisa, as it allows Bennett to accomplish 2 things: \n>1) Rapidly spam E for raw Pyro damage and application, allowing frequent Overload reaction triggers and breaking Electro shields rapidly.\n>2) Generate tons of energy for the entire team. \nThe setup is generally only recommended for those with Beidou <b>[C2/C6].</b>\nThe main-stat artifacts you want to farm for <b>Thundering Fury (4)</b> Bennett varies from the main-stat artifacts you'd normally go for the other builds. Instead of <b>ATK%/EM, Pyro and Crit</b>, you'd instead want to go for <b>EM, Pyro and EM</b> on a <b>Thundering Fury (4)</b> Bennett. As such, this also means weapons that have EM substats such as <b>Iron Sting</b> take priority over other swords. \n\nRecommended amount of ER%: 130-150%. \nWith <b>Thundering Fury (4), </b>you have a lot more leeway when it comes to ER.\n\nEM sands is generally > ATK%, but substat quality and weapon choice can potentially favour ATK% sands.\nElemental Mastery has lower priority than ATK% when using Iron Sting\nNormal Attack is only a priority if you have C6 Bennett",
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
            id: 'sapwood_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'festering_desire',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['crimson_witch_of_flames'],
          ['noblesse_oblige', 'crimson_witch_of_flames', '+18%_atk_set', '+80_em', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "A Burst Support Bennett <b>completely ignores the need for excess healing potential </b>and is aimed for people who prefer to <b>squeeze out more damage</b> instead. \nOn this build, Bennett is <b>built with offensive stats like ATK%, Pyro Damage, and Crit stats while having a good amount of Energy Recharge to burst off cooldown.</b> \n<b>Prioritize Energy Recharge before offensive stats if you cannot cast your Elemental Burst off cooldown.</b>\n\nPrioritize Energy Recharge first if you can't burst off cooldown",
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
            id: 'sapwood_blade',
          },
          {
            id: 'blackcliff_longsword',
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
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['+20%_energy_recharge', '+20%_energy_recharge'],
          ['tenacity_of_the_millelith', '+15%_healing_bonus_set'],
          ['instructor'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus%', 'HP%'],
        },
        subStats: ['Energy Recharge', 'HP%', 'Flat HP'],
        talent: ['Burst'],
        tip: '',
        note: "<b>Heals from his Elemental Burst scale off of HP</b>, while his <b>damage buff from Burst only scales with your base ATK (Character Base ATK stat and Weapon Base ATK stat)</b>\n<b>DO NOT increase Bennett's constellation from 5 to 6 unless he is in a Pyro team and you know what you're doing. This is because Bennett turns all of your melee on-field character's Auto Attacks into Pyro, which means that Bennett will lose a lot of his team comp potential.</b>\nAlthough Bennett is usually considered a healer, he already heals a lot even without necessarily building for HP%, <b>if you find it unnecessary to build for HP%, you can consider building him as a Burst Support.\n</b>\n<b>Regarding Weapon Choices:\nMistsplitter Reforged, Aquila Favonia:</b> These weapons have the highest Base ATK in the game which is why it is ranked quite high. It is assuming you have enough Energy Recharge so you still can burst off cooldown for the maximum ATK buff.\n<b>Freedom-Sworn:</b> In comps where Bennett can reliably trigger reactions (and thus trigger this sword's passive), the buffs provided by this weapon will be stronger than <b>Aquila Favonia.</b>\n<b>The Alley Flash: </b>This weapon currently has the highest Base ATK for a 4 Star weapon (even more Base ATK than some 5 stars like <b>Skyward Blade</b>).\n<b>Prototype Rancour: </b>This weapon has one of the highest Base ATK for a 4 Star weapon (and this is also a weapon you could craft from the Blacksmith)\n\nMain stats aren't as important. Stack Energy Recharge for comfortable Elemental Burst uptime instead.",
      },
    },
  },
  xinyan: {
    roles: {
      'PHYSICAL DPS': {
        recommended: true,
        weapons: [
          {
            id: 'redhorn_stonethresher',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'luxurious_sea-lord',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame'],
          ['emblem_of_severed_fate', '+25%_physical_dmg'],
          ['+25%_physical_dmg', '+18%_atk_set', 'noblesse_oblige', 'husk_of_opulent_dreams'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'DEF%'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: 'This build focuses primarily on her Physical Damage as an On-Field DPS. At <b>[C2],</b> she can build a 1:3 Crit Rate:Crit DMG ratio, instead of the usual 1:2 Crit Rate:Crit DMG ratio.\n\n<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine:</b> At <b>[R5],</b> this weapon performs better than <b>Skyward Pride.</b>\n<b>The Unforged: </b>This ranking is based on <b>unshielded</b> performance, while <b>shielded</b> this weapon performs better than low refinement <b>Serpent Spine.</b>\n<b>Prototype Archaic: </b>At <b>[R5],</b> this weapon performs better than <b>Snow-Tombed Starsilver [R5].</b>',
      },
      'PYRO DPS': {
        recommended: false,
        weapons: [
          {
            id: 'redhorn_stonethresher',
          },
          {
            id: 'serpent_spine',
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
            id: 'song_of_broken_pines',
          },
          {
            id: 'blackcliff_slasher',
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
        ],
        artifacts: [
          ['lavawalker'],
          ['emblem_of_severed_fate', 'crimson_witch_of_flames'],
          ['emblem_of_severed_fate', '+18%_atk_set'],
          ['crimson_witch_of_flames', '+18%_atk_set', 'noblesse_oblige'],
          ['crimson_witch_of_flames'],
          ['retracing_bolide'],
          ['husk_of_opulent_dreams', 'crimson_witch_of_flames'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'Crit DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'DEF%'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note: 'It is <b>required</b> to run this build with<b> [C6]</b> Bennett. However, it is not recommended to <b>[C6]</b> Bennett solely for Xinyan.\n\n<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine:</b> It is worth noting that an <b>[R5]</b> <b>Serpent Spine</b> can outperform<b> Redhorn Stonethresher [R1]</b> with good <b>Serpent Spine</b> stack management.\n<b>Lithic Blade:</b> This ranking assumes 2 stacks.\n\n<b>Regarding Artifact Sets:</b>\n<b>Lavawalker (4):</b> Xinyan can maintain a high Pyro aura uptime on an enemy, making this her best set.',
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'whiteblind',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [['tenacity_of_the_millelith'], ['husk_of_opulent_dreams'], ['husk_of_opulent_dreams']],
        mainStats: {
          sands: ['DEF%', 'Energy Recharge'],
          goblet: ['DEF%'],
          circlet: ['DEF%'],
        },
        subStats: ['Energy Recharge', 'ATK% / DEF%', 'Crit Rate / DMG'],
        talent: ['Skill'],
        tip: "Xinyan's skill grants you a Pyro status upon contact with shield. No matter how many times you switch your characters, it'll still apply Pyro every instance you switch with shield. This allows you to cleanse most elemental statuses that has been applied to you.\n\nIf the status doesn't get cleansed, switch on that character one more time with the shield. Some elements, such as Hydro, are not cleansed very efficiently.",
        note: "This section is dedicated to using Xinyan as a shielder for her team.\n\n<b>Regarding Artifact Sets:</b>\n<b>Tenacity of the Millelith (4): </b> If you can maximize the uptime of Xinyan's Level 3 shield, she can provide a constant 30% Shield Strength and 20% ATK boost to the team (as long as the pulses hit an enemy). This means that <b>Sacrificial Greatsword</b> and Xinyan's <b>[C2]</b> are crucial to making this set shine on her. This set <b>isn't as recommended</b> for her if you have neither of the two.\n\nShield uptime is also crucial to maximizing her Physical/Shield Support capabilities. If you have neither <b>Sacrificial Greatsword</b> nor at least<b> [C2]</b> (but ideally <b>[C4]</b>) on Xinyan, you may want to build her as a DPS instead of Physical/Shield Support.\n\n<b>Generally not recommended for Pyro Applications, as the pulses only happen at Shield Level 3, and are not very efficient at breaking Cryo shields.\n</b>\n<b>Credit to the In-progress KQM Guide draft</b>",
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
            id: 'kaguras_verity',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'dodoco_tales',
            refine: [5],
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
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['gilded_dreams'],
          ['wanderers_troupe'],
          ['crimson_witch_of_flames', '+18%_atk_set', '+80_em'],
          ['shimenawas_reminiscence'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Yanfei's Ascension 4 Talent does a second hit after a Crit Charge Attack. This scales 80% of your ATK and can trigger reactions as well due to having a separate internal cooldown on its Pyro application.",
        note: "Yanfei can have trouble trying to set up for her reaction DPS. Vaporize is generally the more consistent option and you need Xingqiu to make this work best. When running a Vaporize team with Xingqiu, 3 normal attacks into a charged attack (N1>N2>N3>C) is the safest and most reliable way to Vaporize your charged attacks. Make sure you're applying Hydro first before starting combos.\n\n<b>Regarding Weapon Choices:\nLost Prayer to the Sacred Winds / Kagura's Verity: </b>Bennett buff / <b>Thrilling Tales of Dragon Slayer's</b> buff + <b>Noblesse Oblige (4)</b> will push <b>Lost Prayer to the Sacred Winds </b>and<b> Kagura's Verity</b> ahead of <b>Skyward Atlas </b>and <b>Memory of Dust.</b>\n<b>The Widsith: </b>Note that with strong attack buffs like Bennett's Burst, an <b>[R5] Widsith</b> can outperform most <b>[R1] </b>5-star weapons, with the exception of <b>Lost Prayer to the Sacred Winds.\nDodoco Tales: </b>On equal refinements, <b>The Widsith</b> is better than <b>Dodoco Tales</b>, but assuming it's <b>[R5]</b> <b>Dodoco Tales</b> vs <b>[R1]</b>-<b>[R3]</b> <b>The Widsith</b>, <b>[R5]</b> <b>Dodoco Tales</b> is better. <b>Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff may push Widsith and Solar Pearl above Dodoco Tales, even at low refinements.\n</b>\n<b>Regarding Artifact Sets:\nShimenawa's Reminiscence (4): </b>Yanfei will rarely have her burst up due to the 15 energy cost on the 4-piece effect, however she can instead <b>maintain the 4-piece DMG buff over a longer duration, making this set a good alternative to the other options.</b> Note that this set loses out on some value at higher constellations, as she can't get her <b>[C4]</b> effects without casting Burst.\n<b>Gilded Dreams (4): </b>Actually her<b> BiS </b>if used in a <b>full Elemental Mastery build </b>with a<b> Overload team.</b>\n<b>Retracing Bolide (4): </b>Running Yanfei with a shield character also allows you to make use of a full <b>Retracing Bolide (4)</b> as a placeholder until you're able to find a good <b>Crimson Witch of Flames (4). </b>\n\n<b>Regarding Artifact Substats Priority: \n</b>Energy Recharge is prioritized over Elemental Mastery here since she has an 80 energy burst cost while her skill is also not very efficient at generating particles for getting it back. A major source of your energy will be coming from enemies as well as potential Pyro batteries like Bennett, so be sure to have her pick the particles up as off-field characters only get 0.6x the value of the particles.",
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
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: ['Energy Recharge', 'HP%', 'Flat HP'],
        talent: [],
        tip: '',
        note: "C4+ REQUIRED<b>\n</b>This section is dedicated to a playstyle where Yanfei is utilised as a primary shielder through her 4th Constellation. Due to the requirement of having to burst off cooldown, this build has <b>high energy requirements.</b>\n\nYanfei's talent levels provide nothing for this role and it is not recommended to level them.",
      },
    },
  },
  thoma: {
    roles: {
      BURGEON: {
        recommended: true,
        weapons: [
          {
            id: 'kitain_cross_spear',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'moonpiercer',
          },
          {
            id: 'black_tassel',
          },
        ],
        artifacts: [
          ['flower_of_paradise_lost'],
          ['gilded_dreams'],
          ['+80_em', '+80_em'],
          ['emblem_of_severed_fate', '+80_em'],
          ['crimson_witch_of_flames'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Elemental Mastery', 'HP%', 'Flat HP', 'Crit Rate'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "This build focuses on using Thoma as a <b>trigger unit for Burgeon reactions</b>. A role he excels at because of his <b>slow Pyro application reducing the likelihood of creating Burning reactions</b> and his <b>shield reducing the self-damage</b> from the aforementioned Burgeon reactions.\n\n<b>Regarding Weapon Choices:</b>\n<b>Kitain Cross Spear:</b> <b>High refinement is recommended</b> to further reduce Thoma's Energy Recharge requirements\n<b>Dragon's Bane:</b> Becomes a more reasonable option when you have Thoma's <b>C4</b>.\n\n\nFor an EM-focused build, upgrading Thoma's talent levels isn't a necessity",
      },
      SUPPORT: {
        recommended: false,
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
            id: 'kitain_cross_spear',
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
          ['instructor'],
          ['emblem_of_severed_fate'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: ['Energy Recharge', 'HP%', 'Crit Rate'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: '<b></b>Thoma ideally wants to focus on shield over damage, and his burst uptime is required to achieve better shields, which is why he needs ER% on top of HP%.\n<b>\nRegarding Weapon Choices:\nBlack Tassel: </b>At<b> [C4]</b>, Thoma gains 15 energy when he fires his Elemental Burst. This effectively reduces his energy cost to 65 and makes it possible to use <b>Black Tassel</b> with ER sands instead of ER weapon with ER sands to further strengthen his shield.\n\n<b>Regarding Artifact sets:\nInstructor (4): </b>This set ideally works best in <b>heavily reaction focused</b> teams like <b>Hu Tao Vape</b> where the <b>Elemental Mastery</b> is utilized well. But this comes at the cost of making thoma <b>even more difficult to build,</b> since you have <b>fewer potential substat rolls using 4star artifacts, </b>and<b> </b>therefore less of a chance of<b> </b>hitting his Energy Recharge and HP goals.\n\n4. Flat HP\n\n**Crit Rate is an option when using Favonius Lance.',
      },
    },
  },
  diluc: {
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
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'luxurious_sea-lord',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['gilded_dreams'],
          ['crimson_witch_of_flames', '+18%_atk_set', '+80_em'],
          ['gladiators_finale'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "Diluc has a number of combos he can do during his uptime. \n N = Normal Attack, E = Elemental Skill, Q = Elemental Burst  (N2 would equal 2 Normal Attacks)\nHis most common combo is  Q N2 E N2 E N2 E.  This fits perfectly into the buff window of his teams.\n\nFor high upfront damage, use  Q E N1 E N1 E N1 . This falls off significantly if the enemy isn't killed within this window.\n\nA full rotation combo can look similar to  Q N2 E N2 E N2 E N4 N3 E N1 E E . An example video can be found  here.",
        note: "<b>Regarding Weapon Choices:\nThese placements assume strong ATK buffs such as Bennett, as Diluc is commonly played with them present in his party.\nRedhorn Stonethresher: </b>This weapon falls off considerably when strong ATK buffs are not present, still being a top tier option but similar in power to the weapons ranked directly below.\n<b>Serpent Spine: </b>This placement assumes you can <b>maintain high stacks of the weapon effect</b>. If you find yourself being hit often, a low-stacked <b>Serpent Spine</b> will find itself falling significantly in potential. This weapon scales well with refinements, having the potential to be Diluc's best weapon.\n<b>The Unforged: </b>This weapon matches <b>Wolf's Gravestone </b>while shielded. While unshielded, it loses some potency but is still a strong weapon tied with a low refined <b>Rainslasher</b>.\n<b>Rainslasher: </b>This weapon should only be used in teams where Diluc is consistently Vaporizing his attacks. This weapon scales well with refinements, potentially surpassing <b>Wolf's Gravestone </b>at <b>[R5]</b>.<b>\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): </b>Generally the best go to set for Diluc due to how easily Diluc can stack the Pyro Damage effect, while his burst imbues his Normal/Charged Attacks with Pyro.\n<b>Gladiator's Finale (4): </b> For those who are still reluctant on farming for <b>Crimson Witch of Flames (4)</b> (Pre-AR 45), this will still provide a fairly decent increase in DPS as a large portion of his damage is tied into his Normal Attack talent.\n\n<b>Regarding Main Stats Priority:\n</b>If Diluc is run alongside Xingqiu where he can trigger Vaporize very often, he can run EM sands as an alternative to ATK sands as EM boosts Diluc's reaction damage significantly.\n\nEM hashigher prio in Vaporize/Melt comps\n4. Energy Recharge\nWorth noting that Diluc's constellations boost his Elemental Skill's damage, so talent prioritization can vary from player to player",
      },
    },
  },
  klee: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'the_widsith',
            refine: [5],
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'kaguras_verity',
          },
          {
            id: 'the_widsith',
            refine: [1, 4],
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'tulaytullahs_remembrance',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'dodoco_tales',
            refine: [5],
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
          sands: ['ATK%'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'Klee has access to a number of animation cancels that allow her to deal damage with her talents faster than normal. \n\nHer N1 can be canceled through holding a directional key while clicking attack. This can be chained over and over again to produce a "machine gun" effect.\n\nHer optimal combos include N1C and N2C. N1C is higher DPS but eats stamina faster, while N2C has more consistency in keeping enemies stunned and gives a higher chance of obtaining her A1 passive onto the following CA.',
        note: "Being extremely squishy and prone to interruptions, Klee requires great positioning. Check out the in-depth guide to learn in-depth about animation cancelling which may help with this issue.\n\n<b>Regarding Weapon Choice:\nMemory of Dust: </b>This weapon's rankings assume that Klee is played without a shielder, as forcing a shielder for the additional 20 ATK% leads to a damage loss compared to her best teams, even if said shielder is Zhongli. If in a situation where Klee is played with a shielder anyway, this weapon would be on par with <b>Skyward Atlas</b>.\n<b>Solar Pearl: </b>When using <b>Solar Pearl</b>, it is recommended to animation cancel a Normal Attack into an Elemental Skill and cancel that into her Elemental Burst at the start of her field time.\n\n<b>Regarding Artifact Sets:</b>\n<b>Lavawalker (4): </b>Klee's kit makes it harder to utilize Vaporize and Melt the same way another Pyro carry would, but her constant Pyro application makes <b>Lavawalker (4)</b> a viable set. See KleefulFrame's great number breakdown <a href=\"https://docs.google.com/spreadsheets/d/1JJZPMoNOqXhX8Ez1cl63fNXESJZXx7kQaJEeQ-WLOEY/edit\">here.</a>\n<b>Crimson Witch of Flames (4): </b>This set is only recommended in a team where Klee is able to trigger Vaporize consistently.\n<b>Wanderer's Troupe (4): </b>This set increases the Charged Attack by another 35% Damage Bonus. It can serve as a decent DPS choice but due to how clunky Klee's attack animations are, it's hard to put this in actual practice as it requires you to dodge more and consume more stamina, not to mention how the DPS gets caught up by the other builds mentioned above.",
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
            id: 'staff_of_the_scarlet_sands',
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
            id: 'missive_windspear',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'vortex_vanquisher',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['shimenawas_reminiscence'],
          ['gilded_dreams'],
          ['crimson_witch_of_flames', '+80_em', 'tenacity_of_the_millelith'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: ['HP%', 'Elemental Mastery'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Elemental Mastery', 'HP%', 'ATK%', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "When ending Hu Tao's combos with an Elemental Burst, if you do not jump/dash cancel the last charged attack, the Elemental Burst will still benefit from Hu Tao's Elemental Skill.\n\nIt is recommended to use cancels when performing your Hu Tao combos as to maximize damage.\nN2CJ for [C0] and N2CD for [C1].\nN3CJ/N3CD can be used to conserve stamina at the cost of damage.\n\n*N = Normal Attack, C = Charged Attack, J = Jump, D = Dash",
        note: "Hu Tao is most effective when used with Xingqiu to proc Vaporize/Freeze Melt reactions which utilizes her BiS Set, <b>Crimson Witch of Flames (4)</b>. Freeze Melt refers to freezing enemies for Melt set up, since unlike Diluc or Klee, Hu Tao <b>doesn't shatter frozen enemies</b>.<b>\n\nRegarding Weapon Choices:\nPrimordial Jade Winged-Spear: </b>Is better than the <b>[R1] </b>variants of <b>Dragon's Bane</b> and <b>Deathmatch </b>with ideal stacking. While this<b> </b>is a very strong weapon when fully stacked, maintaining the stacks on Hu Tao isn't ideal in realistic situations making the weapon less consistent than other options.\n<b>Deathmatch: </b>This weapon is better than <b>Dragon's Bane</b> when you're not doing Vaporize.\n<b>Blackcliff Pole:</b> Despite seeming quite good due to the Crit DMG substat, <b>Blackcliff Pole </b>at 1 stack performs only slightly better than an <b>[R5]</b> <b>White Tassel</b> in practice as it is difficult to maintain stacks consistently. It is not recommended to buy this weapon specifically for Hu Tao and should only be used if you already have one.\n<b>Vortex Vanquisher: </b>Provides little to nothing to Hu Tao since she scales better with HP% than ATK% with every spear in the game. <b>Base ATK makes little difference on Hu Tao because she has a very high HP to ATK conversion cap.\nWhite Tassel: </b>This weapon requires your combos to be more focused on Normal Attacks (N2C over N1C) to make use of it's passive.<b>\n\nRegarding Artifact Sets: \nShimenawa's Reminiscence (4): </b>Provides higher AA damage than <b>Crimson Witch of Flames (4)</b> but lowers your Elemental Burst damage which hurts your AoE damage, also if you're unable to burst, it might cause survivability issues if you're not running a healer.\n<b>Gilded Dreams (4): </b>This artifact set is equal to <b>Crimson Witch of Flames (4) if you are using Staff of the Scarlet Sands</b>.\n<b>Retracing Bolide (4)</b> and <b>Crimson Witch of Flames (2) / Tenacity of the Millelith (2) + 80 EM set (2):</b> All these options are almost on equal footing because both of the sets have an equal overall damage output assuming you have 100% shield uptime when using <b>Retracing Bolide (4).</b> The difference is, you want to use<b> +80 EM set (2) / Tenacity of the Millelith (2) / Crimson's Witch of Flame (2)</b> when focusing on Nuking and better consistency, while <b>Retracing Bolide (4)</b> is for overall higher AA damage at the expense of lower burst damage, although inconsistent if you cannot keep your shield permanently.\n\n<b>Regarding Artifact Substats Priority: \n</b>Since Hu Tao is able to trigger Vaporize on most of her damage output, Elemental Mastery is quite valuable on her. If you have less than 100EM total (including from Sucrose EM share, <b>Instructor (4)</b>, etc) EM substat take priority over Crit Rate / DMG.",
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
            id: 'aqua_simulacra',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'slingshot',
            refine: [5],
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'rust',
          },
        ],
        artifacts: [
          ['shimenawas_reminiscence'],
          ['crimson_witch_of_flames'],
          ['echoes_of_an_offering'],
          ['retracing_bolide'],
          ['crimson_witch_of_flames', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill = Burst'],
        tip: '',
        note: "<b></b><b>Regarding Weapon Choices: \nAqua Simulacra: </b>This weapon requires Yoimiya to be very close to enemies <b>(~8m)</b>. As such, this weapon is recommended only with a good shielder. \n<b>Slingshot [R5]: </b>This ranking is assuming you're using either Yun Jin or Bennett in your team. While using both Yun Jin <b>and</b> Bennett, this weapon can potentially beat <b>Rust [R5]</b>.\n<b>Amos' Bow:</b> This weapon's ranking is assuming low stacks of its passive due to you ideally being close to enemies to consistently hit all attacks in your combo. When at 3 stacks, this weapon can be close to <b>Slingshot [R5]</b>. Use it if it's already built for another character and you don't want to invest in <b>Slingshot</b> just for Yoimiya.\n<b>Rust: </b>At <b>[R4]</b> this weapon performs better than <b>Polar Star</b>, and at <b>[R5] </b>performs better than <b>Aqua Simulacra.</b>\n\n<b>Regarding Artifacts:  \nShimenawa's Reminiscence (4): </b>This set is her Best in Slot in the vast majority of situations even when considering inconsistent Burst usage (once every 3-4 rotations).\n<b>Crimson Witch of Flames (4): </b>Usable in Vaporize teams and can be her Best in Slot for teams where she procs <b>Vaporize and Overload</b> (such as teams with a Fischl flex or Fischl + Beidou taser core)\n<b>Echoes of an Offering (4): </b>This set has a lot of caveats that generally warrant it being a subpar choice. Its effects proccing is tied to your connection to the servers, so<b> if your ping is above 100 and/or you have an unstable connection</b> (fluctuations), you should avoid this set. Additionally, the RNG nature of its procs makes it unreliable in Vaporize teams as you can't guarantee it working on N1, N3 and N5 (her vaporized hits). \n<b>Retracing Bolide (4): </b>This set is only recommended to be used <b>with a shielder.</b> This set is also very <b>resin inefficient, </b>so its not recommended to farm for this set specifically.\n<b>Crimson Witch of Flames (2) +18% ATK set (2):</b> While lacking in power compared to the other options, you will likely have good substats on the 2 piece combinations compared to a full 4 piece set which can compensate.\n\n<b>Regarding Mainstats:\nElemental Mastery:</b> A good option if Yoimiya is <b>triggering Vaporize and/or Overload.</b> Having Bennett in the team favours Elemental Mastery sands slightly more than ATK sands, however it is recommended to just use whichever has better substats.\n\n<b>Regarding Talent Priorities: \n</b>Her Skill has poor scaling which results in individual upgrades not affecting your damage much. Her Burst is also low priority due to it being used once every few rotations in some scenarios (such as when using <b>Shimenawa's Reminiscence (4)</b> without an abundance of off field energy) which can reduce its effectiveness.\n\n",
      },
    },
  },
  dehya: {
    roles: {
      'ON FIELD DPS': {
        recommended: false,
        weapons: [
          {
            id: 'beacon_of_the_reed_sea',
          },
          {
            id: 'redhorn_stonethresher',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'akuoumaru',
          },
          {
            id: 'luxurious_sea-lord',
          },
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [['emblem_of_severed_fate'], ['vourukashas_glow'], ['crimson_witch_of_flames'], ['lavawalker']],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Pyro DMG'],
          circlet: ['Cirt Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'HP%', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "<b></b><b>Regarding Weapon Choice:\nAkuoumaru: </b>At <b>R5</b>, it is comparable to <b>Wolf's Gravestone (5✩) at R1</b>",
      },
      'OFF FIELD DPS': {
        recommended: false,
        weapons: [
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_bell',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [['tenacity_of_the_millelith'], ['+20%_hp_set', '+20%_hp_set'], ['instructor']],
        mainStats: {
          sands: ['HP%'],
          goblet: ['HP%'],
          circlet: ['HP%', 'Crit Rate'],
        },
        subStats: ['HP%', 'Flat HP', 'Elemental Mastery', 'ATK%', 'Flat ATK'],
        talent: ['Skill'],
        tip: '',
        note: '<b>Regarding Artifacts:\nInstructor: </b>Only if your team is reaction based.\n\n<b>Regarding Main Stats:\nCirclet:</b> Crit Rate is only for Favonius Greatsword.',
      },
      BURGEON: {
        recommended: false,
        weapons: [
          {
            id: 'mailed_flower',
          },
          {
            id: 'makhaira_aquamarine',
          },
          {
            id: 'bloodtainted_greatsword',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [['flower_of_paradise_lost'], ['gilded_dreams'], ['+80_em', '+80_em'], ['crimson_witch_of_flames']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'HP%', 'Flat HP', 'Crit Rate%'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: "Since Dehya does not need her elemental burst to trigger burgeon, she doesn't need to build energy recharge.",
        note: "\nFor an EM-focused build, upgrading Dehya's talent levels isn't a necessity.",
      },
    },
  },
  fischl: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'polar_star',
          },
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'fading_twilight',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'prototype_crescent',
          },
        ],
        artifacts: [
          ['thundering_fury', '+18%_atk_set'],
          ['thundersoother'],
          ['+18%_atk_set', '+18%_atk_set'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "Elemental Burst and Skill both summon Oz, so make sure you're only using one at a time. Start with your Skill, use Burst for second Oz rotation and alternate. Hopefully, by the time your second/third round of Oz summoning is over, you'll have gained enough energy to repeat the loop.\n\n<b>Regarding Weapon Choices: \n</b>In general, Fischl's rankings depend significantly on the refinements of her weapons. For more detailed numbers, see the Google Sheet <a href=\"https://docs.google.com/spreadsheets/d/1YONq2v20Gn7immi87akhcJyAT74aUo96941zWTwSup0/edit\">here</a>.<b>\nAlley Hunter:</b> At<b> [R5]</b> this weapon can be similar in performance to<b> Skyward Harp</b> and <b>Thundering Pulse</b>.\n<b>The Stringless:</b> At <b>[R5]</b> this weapon can be stronger than <b>Amos' Bow</b> / <b>Alley Hunter [R1]</b> / <b>The Viridescent Hunt</b>. This difference is enlarged in teams where Fischl can find herself triggering reactions.\n<b>Prototype Crescent: </b>If you can consistently hit a weakpoint on an enemy before summoning Oz, this weapon performs better than <b>Fading Twilight.</b>\n\n<b>Regarding Artifact Sets:</b>\n<b>Thundersoother (4):</b> This artifact set will outperform <b>+18% ATK set</b> <b>(2) Thundering Fury (2)</b> if used in a team comp where an Electro aura is always present (e.g. Electro/Electro-charged comps) therefore it is <b>highly recommended within this niche.</b>\n<b>Tenacity of the Millelith (4): </b>This set trades off a portion of Fischl's damage in return for a party wide 20% ATK buff. If you have good pieces as a result of farming <b>Pale Flame</b> (for Eula or otherwise) this can be a good option for her in specific teams. Fischl can benefit from the 20% ATK buff herself if she summons Oz within 3 seconds of his previous attack. <b>Not recommended to specifically farm this set for Fischl. \n\n</b>",
      },
      'OFF-FIELD AGGRAVATE DPS': {
        recommended: true,
        weapons: [
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'hunters_path',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'windblume_ode',
          },
          {
            id: 'fading_twilight',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['thundering_fury', '+80_em'],
          ['thundering_fury', '+18%_atk_set'],
          ['gilded_dreams'],
          ['thundering_fury'],
          ['thundersoother'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK% ~= Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: '<b>Regarding Weapon Choices:</b> \nFor more detailed numbers, see the Google Sheet <a href="https://docs.google.com/spreadsheets/d/1YONq2v20Gn7immi87akhcJyAT74aUo96941zWTwSup0/edit">here</a>.\n<b>Alley Hunter:</b> At <b>[R5]</b> this weapon can be similar in performance to <b>Skyward Harp.</b>\n<b>The Stringless:</b> At <b>[R5]</b> this weapon can be stronger than <b>Skyward Harp / Alley Hunter [R5].</b>\n\n<b>Regarding Artifact Sets:</b>\n<b>Thundersoother (4):</b> This artifact set will outperform the other listed sets if used in a team comp where an Electro aura is always present.',
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
            id: 'redhorn_stonethresher',
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
            id: 'katsuragikiri_nagamasa',
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
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Beidou's skill grants you an Electro status for a brief moment upon holding it. This means it can be used for status-cleansing (No particular effective element). Can only be done on herself.",
        note: "<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine: </b>This weapon is a fine choice for Off-Field DPS Beidou and can outperform<b> Wolf's Gravestone</b> by a significant margin when Bennett/Sara ATK buffs are applied.<b> Be sure to use Beidou in slot 1 to pre-stack Serpent Spine before starting an abyss floor.\nRedhorn Stonethresher: </b>Depending on the amount of ATK% buffs you're getting, this weapon can overtake <b>Wolf's Gravestone</b> in personal damage.<b>\nAkuoumaru: Assuming 260 team energy, </b>this weapon outperforms <b>Skyward Pride</b> on a <b>low ER requirement Beidou</b> (where she is paired with other Electro characters to battery her energy needs). At <b>[R3+]</b>, it becomes exponentially better and comes very close to <b>Serpent Spine</b> and <b>Wolf's Gravestone.</b>\n\n<b>Regarding Artifact Sets:</b>\n<b>Emblem of Severed Fate (4): </b>Even after considering the 4-piece set effect, you should refrain from investing into <b>Energy Recharge</b> beyond what is needed to burst off cooldown as it will result in a <b>damage loss</b> as compared to prioritising offensive stats such as <b>ATK/Crit</b>. In team comps where Beidou has <b>low ER requirements</b> (i.e. when paired with electro batteries), a <b>Noblesse Oblige (2) / Thundering Fury (2) / +18% ATK set (2) [Choose Two]</b> will outperform<b> Emblem of Severed Fate (4).</b>\n<b>Thundersoother (4):</b> This set works best in an <b>Electro-Charged or mono Electro comps.</b>\n<b>Noblesse Oblige (4): </b>This set could be considered<b> if the team doesn't have a Noblesse Oblige (4) user</b>, do note that sometimes Beidou doesn't benefit from the ATK buff from the 4 piece set if she's the set holder, so Beidou as a <b>Noblesse Oblige (4)</b> holder isn't really recommended.\n\nPrioritize Energy Recharge first if you can't burst off cooldown",
      },
    },
  },
  lisa: {
    roles: {
      'AGGRAVATE DPS': {
        recommended: true,
        weapons: [
          {
            id: 'kaguras_verity',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'tulaytullahs_remembrance',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'dodoco_tales',
          },
          {
            id: 'magic_guide',
            refine: [5],
          },
        ],
        artifacts: [
          ['thundering_fury'],
          ['gilded_dreams'],
          ['thundersoother'],
          ['thundering_fury', '+18%_atk_set', '+80_em'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK% ~= Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill ~= Burst', 'Normal Attack'],
        tip: 'Optimal Thundering Fury Lisa String: \n- ES (tap) ES (tap) > N2 > ES (tap) ES (hold)\n(N2CA when ES is on cooldown)\n\n\n*N/NA = Normal attack, C = Charged attack, ES = Elemental Skill',
        note: 'This build makes the <b>best use of Lisa\'s entire kit</b>, from her EM ascension stat to her high rate of Electro application. While also minimizing her high energy needs by making her an <b>on-field driver for Quicken teams,</b> and is therefore her best usage case.\n\n<b>Regarding Weapons:</b>\nFor more details see the sheet <a href="https://docs.google.com/spreadsheets/d/1kBaIxbNUUkShl-OwbOxMK4wyPQvL-WWeOko7yfWRIxw/edit">here</a>\n<b>The Widsith:</b> At high refinement <b>[R4-R5]</b> this weapon starts <b>performing similarly</b> to <b>Lost Prayer to the Sacred Winds</b>.\n<b>Solar Pearl:</b> At high refinement <b>[R4-R5]</b> this is <b>competitive or even slightly better</b> than <b>Skyward Atlas</b>, especially with external attack buffs.\n\n<b>Regarding Artifact Sets:</b>\n<b>Thundersoother (4):</b> This set can outperform <b>Gilded Dreams (4)</b> in teams where she can keep <b>high uptime on her Electro application</b>.',
      },
      'OFF-FIELD DPS': {
        recommended: false,
        weapons: [
          {
            id: 'kaguras_verity',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'tulaytullahs_remembrance',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'oathsworn_eye',
          },
          {
            id: 'hakushin_ring',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['thundering_fury', 'emblem_of_severed_fate', '+18%_atk_set', 'noblesse_oblige'],
          ['gilded_dreams'],
          ['noblesse_oblige'],
          ['thundersoother'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%', 'Elemental Mastery'],
          goblet: ['Electro Damage'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Lisa's Hold cast does not require 4 full seconds of charging to reach maximum damage threshold, as long as the indicator aligns with ring, you can release your cast at max damage.",
        note: "This build focuses more on making Lisa a <b>flexible buffing/bursting</b> unit in short durations as a part of a variety of teams including <b>quickswap comps</b> and, especially, <b>Quicken comps</b>.\n\n<b>Regarding Weapon Choice:</b>\n<b>Kagura's Verity:</b> This weapon's ranking is <b>based on executing a specific rotation</b>, but the rotation is different for Off-Field DPS. The rotation is <b>Tap E > N2 > Tap E > Q > Hold E (3 Stack)</b>.\n<b>Thrilling Tales of Dragon Slayers:</b> This option is only recommended on a <b>low investment Lisa</b> whereby she is focused around buffing her teammates and contributing <b>team DPS over outputting high damage</b> on her own.\n\n<b>Regarding Stats Priority:</b> These options prioritize Lisa's Elemental Burst uptime as a defense shredding tool.\n\nOnly used in Quicken teams",
      },
      'EM DPS': {
        recommended: false,
        weapons: [
          {
            id: 'fruit_of_fulfillment',
          },
          {
            id: 'a_thousand_floating_dreams',
          },
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
            id: 'hakushin_ring',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['flower_of_paradise_lost'],
          ['gilded_dreams'],
          ['+80_em', 'emblem_of_severed_fate', '+80_em'],
          ['thundering_fury'],
          ['instructor'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'Energy Recharge'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Elemental Mastery', 'ATK%', 'Crit Rate / DMG'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "This build aims to be the <b>consistent trigger for reactions</b>, <b>Hyperbloom</b> and Overload are generally the best reactions for this set up. These reactions are <b>primarily triggered by her burst</b>, which is why it's important to <b>make sure its uptime is as high as possible</b>. Avoid having a second Electro in the Overload team for this build since this could mess up the Pyro aura Lisa wants for this playstyle. \n\n<b>Regarding Weapons:</b>\n<b>Fruit of Fulfillment:</b> At high refinement this weapon <b>performs similarly</b> to <b>A Thousand Floating Dreams</b> while also having a <b>significant amount of Energy Recharge</b> on it making it easier to build around.\n\n<b>Regarding Artifact sets:</b>\n<b>Flower of Paradise Lost (4):</b> This set only performs around <b>4-6%</b> (varies according to the elemental composition of your team) better in terms of <b>Hyperbloom damage</b>. Therefore it's worth considering farming <b>Gilded Dreams (4)</b> instead since it's in a <b>more resin efficient</b> domain alongside <b>Deepwood Memories (4)</b>.\n\n<b>Regarding Stats Priority:</b> Try to invest<b> both into EM and ER</b>. The goal is to try stack as much EM while getting enough ER for a comfortable Burst uptime depending on your teams.\n\nEM DPS Lisa's Talent Levels are not a necessity",
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
            id: 'redhorn_stonethresher',
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
          ['gladiators_finale'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['+25%_physical_dmg', '+18%_atk_set'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Razor's EB grants you an Electro Status when you basic attack while burst is in-effect, that means it can be used for status-cleansing (no particular effective element).  Can only be done on himself.",
        note: "<b>Regarding Weapon Choices:</b>\n<b>Wolf's Gravestone</b>: While the passive is <b>inactive, </b>this weapon outperforms <b>Skyward Pride</b> in every scenario except crowd battles.\n<b>Redhorn Stonethresher: </b>Depending on the amount of ATK% buffs you're getting, this weapon can overtake <b>Wolf's Gravestone</b> in personal damage.\n<b>The Unforged</b>: The playstyle with this weapon becomes a lot more comfortable without having to worry about snapshotting <b>Wolf's Gravestone / Song of Broken Pines</b> buffs for Sub DPSes, while also granting more Shield Bonus for better Shield uptime. A shielder is required for this, with Zhongli being the most ideal option.\n<b>Serpent Spine</b>: At <b>[C6] </b>and high refinement <b>Serpent Spine</b>, it is better to run an ATK% Goblet over Physical Damage%. This is due to the oversaturation of damage bonuses (ascension stat + <b>Serpent Spine</b>) in addition to the fact that Electro accounts for a significant portion of Razor's damage. An in-depth explanation can be found <a href=\"https://tinyurl.com/razoratk\">here</a>. <b>It is also worth noting that an [R5] Serpent Spine with max stacks can outperform all 5✩ weapons at [R1].</b>\n<b>Skyward Pride</b>: This weapon is viable with a Physical DMG goblet, as the damage dealt through its passive scales with Physical%.\n\n<b>Regarding Artifact Sets: \nPale Flame (2) Bloodstained Chivalry (2): </b>This set is better if your ATK% is covered by your substats, otherwise you would be better off running <b>Gladiator's Finale (4). This is only recommended to those who have no immediate access to a decent Pale Flame (4) set, otherwise you would be better off investing on Pale Flame pieces, regardless of weapon choice.</b>",
      },
    },
  },
  kujou_sara: {
    roles: {
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'polar_star',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'hunters_path',
          },
          {
            id: 'aqua_simulacra',
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
            id: 'elegy_for_the_end',
          },
          {
            id: 'alley_hunter',
          },
          {
            id: 'fading_twilight',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'messenger',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['noblesse_oblige', 'thundering_fury'],
          ['noblesse_oblige', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: "For her Elemental Skill to generate particles, you need to perform a Charged Shot to place a Crowfeather after casting her Elemental Skill. If the Crowfeather explosion hits an enemy, it generates 3 particles.\n\nCrowfeathers generated from Sara's [C2] do NOT generate particles.",
        note: "<b></b>Sara is a quickswap support who is able to buff your active characters via its Crowfeather mechanics. When Sara uses her Elemental Skill, her next Charged Shot will leave a Crowfeather on the target location and after a short while, the Crowfeather explodes and <b>the active character in its AoE will benefit from Sara's ATK buff, which scales with her Base ATK</b>. \n\nAt <b>[C2]</b>, you can skip the Charged Shot as it immediately drops a Crowfeather, and save it for later on if you wanna swap back to her to extend her buffs. You can also use Elemental Skill followed by Elemental Burst so that she benefits from the Crowfeather dropped by her Elemental Skill, then swap to other character so that character can benefit from Sara's ATK buff. It's worth mentioning that Sara's Crit DMG buff at <b>[C6] </b>doesn't snapshot and it also doesn't show on the stats page, so don't freak out when you don't see it there.\n\n<b>Regarding Weapon Choices: </b>Weapons here are <b>ranked based on their Base ATK</b> to maximize Sara's ATK buff.\n<b>Polar Star: </b>This is the<b> best weapon for her personal damage, </b>at the cost of having<b> weaker buffing capabilities </b>compared to<b> Skyward Harp.\nSkyward Harp: </b>This is the <b>best all-rounder weapon. </b>Combining both<b> high personal damage, </b>with the<b> second best buffing capabilities </b>of any weapon.\n<b>Mouun's Moon: </b>At<b> [R5] </b>this weapon<b> performs similarly to Hunter's Path </b>in personal damage while also giving you a<b> stronger buff.</b>\n<b>Elegy for the End: </b>The cooldown on this weapon's passive aligns perfectly with Sara's Elemental Burst cooldown. This weapon has lower base ATK if compared with <b>Skyward Harp</b>, but this weapon can be considered over <b>Skyward Harp </b>since Sara is able to trigger the weapon passive quite easily with her Elemental Burst to provide your party members with another 100 EM and 20% ATK buff for 12 seconds, it also has Energy Recharge substat which is very valuable on a Burst Support Sara. Making it her <b>best buffing weapon</b> at the cost of <b>significantly reduced personal damage</b>.\n<b>Sacrificial Bow:</b> The combination of high base ATK and a Energy Recharge substat makes this one of her best (4✩) weapon options in teams where she needs a Energy Recharge weapon to meet energy requirements and battery another Electro unit at the same time.\n\n<b>Regarding Artifact Sets:\nNoblesse Oblige (4): </b>Universal support set that is able to buff your party member's ATK by 20%, use this set on Sara if there's nobody else in the party who's equipping one.\n\nPrioritize Energy Recharge first until you can burst off cooldown",
      },
    },
  },
  kuki_shinobu: {
    roles: {
      HYPERBLOOM: {
        recommended: true,
        weapons: [
          {
            id: 'freedom-sworn',
          },
          {
            id: 'xiphos_moonlight',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'key_of_khaj-nisut',
          },
          {
            id: 'toukabou_shigure',
            refine: [5],
          },
          {
            id: 'dark_iron_sword',
          },
          {
            id: 'sapwood_blade',
          },
        ],
        artifacts: [['flower_of_paradise_lost'], ['gilded_dreams'], ['+80_em', '+80_em'], ['thundering_fury']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'HP%', 'Flat HP', 'Energy Recharge'],
        talent: ['Skill', 'Burst'],
        tip: 'Aim for around 850-950+ Elemental Mastery. Depending on whether you use a Elemental Mastery weapon or not.',
        note: "This is a Dendro team that requires a <b>reliable Electro trigger unit</b> to work,for which Kuki is <b>one of the best Electro units</b> to perform this role.\n\n<b>Regarding Weapon Choices:\nKey of Khaj-Nisut:</b> This becomes a better choice than <b>Iron Sting at [C4]</b> when you can gain the <b>3rd passive stack without extending your rotation time or taking extra field time</b>. It can also <b>net more Elemental Mastery than Freedom-Sworn at 3 stacks</b>, assuming you have actually built some<b> HP% Substats on your Sands/Goblet/Circlet</b>, but this is usually <b>not enough to out-perform the overall gains from Xiphos' Moonlight/Freedom-Sworn's respective passives</b>.\n<b>Toukabou Shigure:</b> This weapon performs <b>very similarly in a Hyperbloom focused build</b> to <b>Iron Sting</b> since its <b>passive does not effect Hyperbloom damage</b>.\n\nElemental Mastery is essentially your only priority",
      },
      AGGRAVATE: {
        recommended: false,
        weapons: [
          {
            id: 'freedom-sworn',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'key_of_khaj-nisut',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'xiphos_moonlight',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'sapwood_blade',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'dark_iron_sword',
          },
        ],
        artifacts: [
          ['gilded_dreams'],
          ['thundering_fury', '+80_em', 'noblesse_oblige'],
          ['thundersoother'],
          ['thundering_fury'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'Elemental Mastery'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'Elemental Mastery', 'HP%', 'Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: 'This <b>adds flat damage to the triggering Electro attack</b> that scales off <b>Elemental Mastery and levels</b>, which essentially allows Kuki\'s personal damage to become relevant while also filling the role of a healer in the team.\n\n<b>Regarding Weapon Choices:</b>\nFor more details see the sheet <a href="https://docs.google.com/spreadsheets/d/1x5UJIlR8Kx1IC_8a_SRTaLjR_mzi0j1o2Ive0MpLfQU/edit">here</a>\n<b>Freedom-Sworn:</b> While not having the highest personal damage it makes up for it in <b>overall team damage</b> through its <b>competitive buffs</b>.\n<b>Primordial Jade Cutter:</b> Has the <b>highest personal damage</b> of any weapon on Kuki but <b>little to no utility</b>, which means it usually <b>falls behind in overall team damage</b>.\n<b>Key of Khaj-Nisut: </b>On paper combines <b>a mixture of high personal damage with team buffs</b> to potentially be her best weapon if you manage to get it fully stacked. This is usually a <b>unrealistic scenario</b> though with it taking up to<b> 2-3\nrotations</b> to fully stack or forcing you to stay on-field to let it stack which is usually a <b>net DPS loss</b>.\n\n<b>Regarding Artifact choices:</b>\nFor more details see the sheet <a href="https://docs.google.com/spreadsheets/d/1x5UJIlR8Kx1IC_8a_SRTaLjR_mzi0j1o2Ive0MpLfQU/edit">here</a>\n<b>Thundersoother (4):</b> It\'s potentially your BIS set if you can maintain a <b>constant Electro aura</b> or near that, to be this consistent usually takes <b>up to 3 Electro units</b> (or possibly 2 Electro units and a Anemo unit like Kazuha or Venti swirling Electro)\n<b>Thundering Fury (2) +80 EM set (2) Noblesse Oblige (2): </b>Usually performs so close to <b>Gilded Dreams (4)</b> that you can simply pick the set or combination of sets with the<b> highest possible substats</b>.',
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'favonius_sword',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'key_of_khaj-nisut',
          },
          {
            id: 'iron_sting',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['noblesse_oblige'],
          ['instructor', 'the_exile'],
          ['ocean-hued_clam'],
        ],
        mainStats: {
          sands: ['HP%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus', 'HP%', 'Crit Rate'],
        },
        subStats: ['HP%', 'Crit Rate', 'Elemental Mastery / Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "Outside of reaction teams where she can be a <b>reliable trigger unit,</b> Kuki's damage contribution is usually insignificant. Hence her best usage case in those scenarios is building purely for utility.\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Sword:</b> The passive lets her provide energy to the rest of the team.<b> A Crit Rate circlet or substats should be considered to reliably trigger the passive.</b>\n<b>Freedom-Sworn:</b> In teams where Kuki can <b>reliably trigger reactions</b>, the teamwide buff from this weapon can make it preferable over <b>Favonius Sword</b>.\n<b>Key of Khaj-Nisut: Highest possible healing</b> in exchange for<b> weaker utility</b>. Worth considering in teams that <b>can't reliably trigger reactions</b> for<b> Freedom-Sworn</b> or <b>don't need extra energy particles</b> from <b>Favonius Sword.\n</b>\n<b>Regarding Artifact Choices:</b>\n<b>Noblesse Oblige (4):</b> When using this set, make sure to build enough Energy Recharge to cast Burst off cooldown and keep good uptime on this set's passive.\n<b>Ocean-Hued Clam (4):</b> Provides a decent amount of extra damage on a full healing build.\n<b>Instructor (4) / The Exile (4):</b> Can be a cheap alternative on teams where the extra ATK% buff from <b>Tenacity of the Millelith (4)</b> or <b>Noblesse Oblige (4)</b> is not as useful.\n\nCrit Rate is useful only when using Favonius Sword",
      },
    },
  },
  dori: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'katsuragikiri_nagamasa',
          },
          {
            id: 'forest_regalia',
          },
        ],
        artifacts: [['noblesse_oblige'], ['deepwood_memories'], ['instructor'], ['the_exile']],
        mainStats: {
          sands: ['Energy Recharge', 'HP%', 'Elemental Mastery'],
          goblet: ['HP%', 'Elemental Mastery'],
          circlet: ['Healing Bonus', 'HP%', 'Elemental Mastery'],
        },
        subStats: ['Crit Rate', 'Energy Recharge', 'HP%', 'Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: 'It is generally advised to use 2 elemental skills per burst rotation, as this helps to alleviate her otherwise extreme Energy requirements.',
        note: "Dori is mainly a support character that provides Healing and Energy to a teammate through her burst.\n\n<b>Regarding Weapon Choices: \nSacrificial Greatsword:</b> This weapon's passive allows Dori to cast her elemental skill twice while only swapping to her once per rotation. \n\n<b>Regarding Artifact Choices: \nDeepwood Memories (4):</b> This set should only be used when Dori is in a Dendro based team composition.\n\nA Crit Rate Circlet can be considered if running Favonius Greatsword\nCrit Rate is useful only when using Favonius Greatsword",
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
            id: 'freedom-sworn',
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
        artifacts: [
          ['noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['instructor'],
          ['+20%_energy_recharge', '+20%_energy_recharge'],
        ],
        mainStats: {
          sands: ['Energy Recharge'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'ATK%', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: 'It is not recommended to level Elemental Skill and Burst past talent level 7 as the amount of energy generated does not increase.',
        note: "<b></b>Traveler can provide a lot of energy and Energy Recharge to the on-field character through their Elemental Skill pick up or Elemental Burst procs. This is especially useful with a damage dealer that doesn't conflict with Traveler's element and can benefit from the abundance of energy. Due to the low damage scaling on Electro Traveler's Elemental Skill and Burst, its recommended to build Electro Traveler by just stacking Energy Recharge to amplify the batterying power.\n\nMain stats aren't as important. Stack Energy Recharge for comfortable Elemental Burst uptime instead.",
      },
    },
  },
  keqing: {
    roles: {
      'PHYSICAL DPS': {
        recommended: false,
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
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['+25%_physical_dmg', '+18%_atk_set'],
          ['retracing_bolide'],
          ['bloodstained_chivalry'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: 'This section is dedicated to a playstyle where Keqing does not infuse her attacks with Electro, and instead focuses on Physical damage (white numbers). For this reason, you should be charged attacking after casting Stellar Restoration (E) instead of recasting it.\n\n<b>Regarding Artifact Sets:</b>\n<b>Pale Flame (4): </b>This set is the best by far as Keqing can proc its 4 piece set bonus instantly by charge attacking after casting E.\n<b>Pale Flame (2) Bloodstained Chivalry (2): </b> This set should only be used until getting <b>Pale Flame (4)</b>.\n<b>+25% Physical DMG set (2) +18% ATK set (2): </b>The generalist Physical DPS set.\n<b>Retracing Bolide (4): </b>This set should only be used with a consistent shielder (i.e. Zhongli/Diona) for obvious reasons.\n<b>Bloodstained Chivalry (4): </b>This set is for general solo and Abyss content where there are multiple mobs that can be killed with charged attacks within 10 seconds, this is for dealing with a crowd, in other words, AoE. <b>It is not recommended because of the kill condition.</b>',
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
            id: 'haran_geppaku_futsu',
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
            id: 'the_black_sword',
          },
          {
            id: 'kagotsurube_isshin',
          },
          {
            id: 'amenoma_kageuchi',
          },
        ],
        artifacts: [['thundering_fury', '+18%_atk_set'], ['+18%_atk_set', '+18%_atk_set'], ['thundersoother']],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Preferred Skill Combo: Skill (Place stiletto, don't reactivate yet) -> Burst -> Skill (Reactivation) -> Spam NA Combo (See Below) -> Repeat\n\nNA Combos:\nN1C = 1 Normal Attack followed by a Charged Attack - Highest DPS Combo, but costs a lot of stamina\nN4C = 4 Normal Attacks followed by a Charged Attack - Second best Combo, and conserves stamina.",
        note: "<b>Regarding Weapon Choices: \nLion's Roar: </b>This weapon is only recommended on Pure Electro / Electro-charged teams. In teams where the Electro Aura can be easily removed OR when facing enemies with innate elements, this weapon <b>will severely underperform.</b> \n\n<b>Regarding Artifact Sets: \nThundering Fury (2) +18% ATK set (2): </b>This set is a generalist set, which means it can be used generally anywhere, whether it be Co-op or Abyss, or other singleplayer content. This has a lot of consistency due to its independence from Electro aura, and it is more viable in abyss.\n<b>+18% ATK set (2) / +18% ATK set (2): </b>While it is slightly behind <b>Thundering Fury (2) +18% ATK set (2)</b>, this set is preferred to farm for due to the resin efficiency of <b>Shimenawa's Reminiscence's</b> Domain.\n<b>Thundersoother (4): </b>This set should be used with <b>Electro-charged</b> team compositions (Keqing + Xingqiu). This set has a 35% DMG modifier which increases all damage from all sources, although that modifier is a bit unstable due to its dependency to the sustainability of Electro aura on enemies.",
      },
      'AGGRAVATE DPS': {
        recommended: true,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'light_of_foliar_incision',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'toukabou_shigure',
            refine: [5],
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
          },
        ],
        artifacts: [
          ['thundering_fury'],
          ['thundersoother'],
          ['gilded_dreams'],
          ['thundering_fury', '+80_em', '+18%_atk_set'],
          ['+18%_atk_set', '+80_em'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK% ~= Elemental Mastery', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst ~= Skill'],
        tip: '',
        note: "<b>Regarding Weapon Choices:\nHarbinger of Dawn [R5]: </b>This ranking assumes<b> full uptime on the passive.</b> If you cannnot maintain the passive, <b>this weapon is not recommended.\nSummit Shaper: </b>This ranking assumes Keqing is unshielded. If Keqing has a shielder, this weapon will perform better than <b>Harbinger of Dawn [R5].\nToukabou Shigure: </b>Eventually with high refinement<b> Lion's Roar/The Black Sword </b>will surpass it<b>. </b>But this ranking assumes <b>[R1]</b> for both<b>, Iron Sting </b>can also surpass it at<b> </b>equal refinement in<b> Multi-target content where Toukabou Shigure's passive falls off, </b>since it can only be applied to<b> one target at a time.\n\nRegarding Artifact Choices:\nGilded Dreams (4): </b>This set encourages the use of <b>ATK% Sands over an EM Sands.</b>\n\nIt is recommended to level Keqing to level 90",
      },
    },
  },
  raiden_shogun: {
    roles: {
      HYPERBLOOM: {
        recommended: false,
        weapons: [
          {
            id: 'dragons_bane',
          },
          {
            id: 'moonpiercer',
          },
          {
            id: 'kitain_cross_spear',
          },
        ],
        artifacts: [['flower_of_paradise_lost'], ['gilded_dreams'], ['+80_em', '+80_em'], ['thundering_fury']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'ATK%', 'Energy Recharge', 'Crit Rate/ DMG'],
        talent: ['Skill', 'Burst'],
        tip: 'You are aiming for between 850-1000+ Elemental mastery depending on weapon/artifact choice.',
        note: "<b></b>In this build Raiden is used as a <b>Hyperbloom trigger unit</b> in a Dendro team. She is <b>one of the best units in the game for this role</b>. Bringing <b>greater energy particle generation, a faster rate of seed triggering and a team ult buff</b> in exchange for reduced team flexibility compared to another top Hyperbloom triggering unit like Kuki.\n\n<b>Regarding Artifact Choices:\n+80 EM set (2) / +80 EM set (2): </b>In a team with one other Electro unit it's only <b>1 substat roll behind Gilded Dreams (4)</b> (3-4 substat rolls behind in a team with no other Electro units) therefore you can usually just <b>use the set with the most Elemental Mastery substat rolls </b>on it.<b>\nThundering Fury (4): </b>Only really a consideration if you have a completed set of it already, with a <b>higher number of Elemental Mastery substat rolls</b>, or as a placeholder set while you farm other sets.\n<b>\n</b>\n\nEM is essentially your only priority",
      },
      DPS: {
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
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'calamity_queller',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'wavebreakers_fin',
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
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Electro DMG', 'ATK%'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Start your rotation with Raiden's Elemental Skill to amplify your party member's Elemental Burst damage.\n\nBurst combo :\n- Skill > Burst > 3NA + CA (3 times) > 1NA + CA (Recommended)\n- Skill > Burst > 3NA + CA (3 times) > 4NA (Optimal)\n\n*NA = Normal Attack, CA = Charged Attack\n\nThe recommended combo can be performed consistently even without attack speed buffs, the optimal combo while a tad stronger is also significantly more difficult to perform.",
        note: "Raiden's Elemental Burst damage depends on her <b>team's energy consumption prior to her Burst</b>, and her Burst <b>restores a comfortable amount of energy for her team</b> (which is further amplified by her passive). This is especially convenient on teams that doesn't conflict with her element and wants the energy provision. (i.e. Eula, Electro, National teams, etc.).\n\n<b>Regarding Weapon Choices: This list assumes the average across a variety of buffs. \nStaff of the Scarlet Sands: </b>It is not recommended to build EM for this weapon as her other offensive stats still outclass it.<b>\nSkyward Spine: </b>Assumes that you are utilizing the ATK SPD buff to access higher damage combos. \n<b>Wavebreaker's Fin: </b>At <b>[R5], </b>this weapon is relatively equal to <b>Staff of Homa,</b> depending on your total team burst cost.\n<b>Lithic Spear:</b> The ranking for this weapon assumes 1 stack on its passive.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4): </b>This set acts as a low investment support oriented set. Raiden is an excellent <b>Tenacity of the Millelith (4)</b> holder since her Elemental Skill has 100% uptime and procs very easily. Do note that if your Raiden is equipping this set, then she will sacrifice her personal damage.\n<b>\nRegarding Main Stats Priority: \n</b>Raiden's main stat priority for Sands and Goblet entirely depends on the substats, whether she has external buffs, and which weapon she is running. Using a optimizer/calculator would be the best way to work out your optimal setup.",
      },
    },
  },
  yae_miko: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'kaguras_verity',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'oathsworn_eye',
            refine: [5],
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'hakushin_ring',
          },
          {
            id: 'mappa_mare',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['+18%_atk_set', 'thundering_fury', 'emblem_of_severed_fate'],
          ['thundersoother'],
          ['gilded_dreams'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: "Start your rotations with Yae's Elemental Skill to amplify her Elemental Burst damage. \n\nBurst combo:\n- Skill > Skill > Skill > Burst > Skill > Skill > Skill\n\n(After the first set of EEE you usually swap out and go through your buff rotation before swapping back to burst)\n\nTake note that none of Yae Miko's abilities snapshot.",
        note: "<b>Regarding Weapon Choices:\nLost Prayer to the Sacred Winds</b>: If Yae is in an<b> Aggravate team,</b> this weapon is<b> better than Skyward Atlas.\nA Thousand Floating Dreams: </b>If Yae is in an <b>Aggravate team</b>, this weapon is <b>better than Skyward Atlas and Lost Prayer to the Sacred Winds.</b>\n<b>Solar Pearl: </b>This weapon benefits a lot from refines and attack buffs like Bennett. <b>[R5] Solar Pearl without buffs, </b>or<b> </b>a<b> low refine Solar Pearl with Bennett buff</b> can perform similar to<b> Skyward Atlas</b>. Note that you should do a Normal Attack when you swap in and before you swap out of Yae Miko to keep good uptime on the passive.\n<b>The Widsith: In Aggravate teams specifically,</b> <b>this weapon ranks much higher</b> and can outperform the 5 stars. Otherwise, it is recommended to use the other options above <b>Widsith</b> for more consistent damage.\n<b>Hakushin Ring: </b>This weapon's passive can buff your other team members, which <b>may be more beneficial than Yae Miko's personal damage</b> depending on the team and rotation used. Note that the passive cannot be triggered when off-field.\n <b>\nRegarding Artifact Choices:</b>\n<b>Emblem of Severed Fate (4): </b>This set works best for Yae in <b>multi-target scenarios where her Elemental Burst hits multiple enemies and she is bursting every rotation.</b> This set also<b> provides more value</b> if she's<b> </b>used WITHOUT Raiden<b> (due to the higher ER requirements).\nGilded Dreams (4):</b> If Yae is used in an <b>Aggravate / Spread focused team</b>, this set will be equal to <b>Emblem of Severed Fate (4)</b>.\n<b>+18% ATK set (2) / Thundering Fury (2) / Emblem of Severed Fate (2): </b>Using a combination of these artifact sets works best for Yae in <b>single-target scenarios.</b> These also<b> provide more value</b> if she's paired WITH Raiden<b> (due to lower ER requirements). </b>\n<b>Thundersoother (4): </b>Assuming you are able to maintain 100% uptime on its passive, this is Yae's BiS set. This set works best for Yae in Electro-charged teams.\n<b>Tenacity of the Millelith (4): </b>This set trades off a portion of Yae's damage in return for a party wide 20 ATK% buff. If you have good pieces as a result of farming <b>Pale Flame (4)</b> (for Eula or otherwise) this can be a good option for her.<b> Not recommended to specifically farm this set for Yae.</b>\n\n<b>Regarding Substat Choices:\nElemental Mastery: </b>In <b>Aggravate teams, </b>this substat is much more potent, rivaling <b>ATK%</b>.\n\n<b>Regarding Talent Priority: </b> Do note that Yae's Elemental Burst does more damage than her Elemental Skill when it hits multiple enemies, and in some setups requiring high ER its more efficient to simply ult every second rotation rather than try to stack enough ER substats.\n\nBig thanks to <b>Fob#6835</b> for helping us with the weapon/artifact rankings.\n\nElemental Mastery can be viable as a Sands choice in Aggravate teams**\n",
      },
    },
  },
  cyno: {
    roles: {
      'QUICKBLOOM DPS': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'white_tassel',
            refine: [5],
          },
          {
            id: 'missive_windspear',
            refine: [5],
          },
          {
            id: 'kitain_cross_spear',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'moonpiercer',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'favonius_lance',
          },
        ],
        artifacts: [
          ['thundering_fury'],
          ['gilded_dreams'],
          ['+80_em', '+80_em', 'thundering_fury'],
          ['gladiators_finale'],
          ['flower_of_paradise_lost'],
        ],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Electro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Elemental Mastery', 'Crit Rate / DMG', 'ATK%'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "Cyno in Quickbloom focuses both on doing high personal damage, but also proccing Hyperbloom with a Hydro unit on the team. This is his highest damage setup at <b>[C0]. </b>However, at <b>[C2] and above </b>Cyno can use Aggravate or other team compositions to similar or better effectiveness.\n\n<b> **Weapon Rankings Assuming a Significant Amount of Hydro Application from an Off Field Unit**</b>\n<b>Regarding Weapon Choices:\nDragon's Bane: </b>In teams with a less consistent Hydro enabler such as Barbara, this weapon is equal to <b>Deathmatch.\nKitain Cross Spear and Favonius Lance: </b>In teams where energy is scarce, such as teams without another Favonius weapon user, this weapon can be desired for the Energy Recharge it gives. \n\n<b>Regarding Mainstat Choices:</b>\nAny combination of Elemental Mastery, Electro DMG Bonus, and Crit Rate / DMG is effective on Cyno. With consistent Hydro application, his highest damage combination is <b>Elemental Mastery Sands, Electro DMG Bonus Goblet, and Elemental Mastery Circlet</b>. However, the mainstats are extremely close in damage, so it should be determined through the <b>value of the substats on your pieces.\n</b>",
      },
      'AGGRAVATE DPS': {
        recommended: false,
        weapons: [
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'calamity_queller',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'white_tassel',
            refine: [5],
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'kitain_cross_spear',
          },
          {
            id: 'missive_windspear',
            refine: [5],
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'favonius_lance',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'thundering_fury'],
          ['gilded_dreams'],
          ['+18%_atk_set', 'thundering_fury', 'emblem_of_severed_fate', '+80_em'],
          ['thundersoother'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK% ~= Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: 'Rotations:\n\nNon-TF: EQ N3E N5E N5 N2E N5 N2E - 3 Endseer\nEQ N3E N5E N5 N2E N5 N2E N5 N2E - 4 Endseer\n\n4pc TF: EQ N2E N4E N4E N5E N4E N4E - 3 Endseer\nEQ N2E N4E N4E N5E N4E N4E N5E - 4 Endseer Option 1\nEQ N2E N4E N4E N5E N4E N4E N4E N4E - 4 Endseer Option 2',
        note: "<b></b>Cyno is a DPS character that uses his burst to change stance and deal Electro damage. The damage dealt during this stance is <b>Normal Attack damage </b>so burst damage buffs will not affect him. Cyno in Aggravate focuses solely on doing high personal damage with his burst stance with other Dendro and Electro characters.\n\n<b>Regarding Weapon Choices:\nSkyward Spine: </b>In teams where Cyno does <b>not need the Energy Recharge from this weapon</b> it is worse than <b>Missive Windspear</b>.<b>\nKitain Cross Spear: </b>This weapon is especailly competitive with the options higher on the list if Cyno is <b>not</b> being run with an Electro battery.\n\n<b>Regarding Artifact Sets:\nThundering Fury (4): In optimal conditions, this is Cyno's best artifact set</b>. This set is an especially competitive option when Cyno is the only Electro character in the team, as the extra Elemental Skill casts help alleviate his energy issues. Do note that casting his skill off cooldown with this set might lead to <b>missing Endseer stance windows and losing overall damage. </b>It is <b>highly recommended to use a shielder with Cyno with this set.\nGilded Dreams (4): </b>This artifact set is better than <b>Gladiator's Finale (4)</b> on <b>Staff of the Scarlet Sands and White Tassel</b>.\n<b>Thundersoother (4): </b>If you can <b>guarantee 100% uptime on this set</b>, it performs better than <b>Gladiator's Finale (4)</b>. However, satifying this condition is infeasible on most teams.\n\n<b>Regarding Main Stat Choices:\nSands: </b>Elemental Mastery versus ATK% is heavily dependant on the weapon and team Cyno is in. It is recommended to test each and/or consult an optimizer.\n<b>Circlet: </b>With <b>Staff of the Scarlet Sands</b>, Elemental Mastery may be used as the circlet mainstat.",
      },
    },
  },
  xingqiu: {
    roles: {
      'LOW ENERGY REQUIREMENTS\n(OFF-FIELD DPS)': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'light_of_foliar_incision',
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
          },
          {
            id: 'sacrificial_sword',
            refine: [3],
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'kagotsurube_isshin',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'sapwood_blade',
          },
          {
            id: 'sacrificial_sword',
            refine: [1, 2],
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['nymphs_dream'],
          ['noblesse_oblige', '+15%_hydro_dmg_set', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['blizzard_strayer'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Activating XQ's Elemental Skill or Elemental Burst applies Hydro to the on-field character with his shield. (Pyro in specific)\n\nCleansing Electro may take an additional switch for your character with the rain swords active, while Cryo would freeze you in place. \n\nIt is typicially recommended to use Xingqiu's Elemental Skill before his Burst. However, if Xingqiu is Constellation four, you may choose to use his Elemental Skill after his Burst for the increased damage. This increases his Energy Recharge needs so it is not recommended to use unless you run Sacrificial Sword or use the book trick method which involves pausing the game by opening a menu for a second to allow him to collect the particles.",
        note: 'High and Low Energy Recharge Requirements depends on the amount of Energy Recharge your Xingqiu needs. Choose wisely based on the team he\'s in and how easily you can achieve Energy Recharge targets. Other Hydro characters and Energy Recharge based teammates like Raiden Shogun can help alleviate his energy requirements, as does his <b>Constellation 6</b>.\n\n<b>Regarding Weapon Choices:\nThe weapon rankings assume you are running enough Energy Recharge to get Xingqiu\'s burst up off cooldown. If you are not, select an Energy Recharge weapon from this list.</b>\n<b>Sacrificial Sword [R3+]:</b> This weapon is<b> extremely inconsistent </b>and <b>extends rotation lengths</b> leading to an <b>overall loss in DPS</b>. This weapon does become more useful if <b>Xingqiu is not the only hydro character on the team</b>.\n<b>Harbinger of Dawn [R5]</b>: At <b>[C6], </b>if you can consistently keep the passive active, this has the potential to rival <b>Sacrificial Sword [R3+]\nSapwood Blade: </b>This weapon can be especially useful as a support weapon in<b> Dendro based teams</b>.\n\nBig thanks to Quincy#6965 for helping us with the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">weapon calculations</a>.\n\n<b>Regarding Artifact Sets:\nEmblem of Severed Fate (4):</b> This set falls off in terms of damage if Xingqiu has less than <b>130% </b>Energy Recharge.\n<b>Noblesse Oblige (4): </b>Offers party-wide ATK boost, you can use this set on Xingqiu<b> if nobody else on the party is able to use it better</b>. If someone else on the team<b> already has Noblesse Oblige (4), Noblesse Oblige (4) should not be used.</b>\n<b>Blizzard Strayer (4): </b>This set is <b>only recommended on a freeze team</b> to optimize Xingqiu\'s stats since he can mildly disregard Crit Rate and build Crit Damage instead for more damage output. Despite it outperforming <b>Emblem of Severed Fate (4)</b> within this niche,<b> it is generally not recommended to specifically farm for this set.</b>\n\n<b>Regarding Main Stats Priority:</b>\nIdeally you would be running ATK% Sands when your ER needs are fulfilled. ER needs can be found in the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">Xingqiu Mastersheet</a>.\n\nPrioritize Energy Recharge first if you can\'t burst off cooldown',
      },
      'HIGH ENERGY REQUIREMENTS\n(OFF-FIELD DPS)': {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'light_of_foliar_incision',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'sacrificial_sword',
            refine: [3],
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'kagotsurube_isshin',
          },
          {
            id: 'sapwood_blade',
          },
          {
            id: 'sacrificial_sword',
            refine: [1, 2],
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['nymphs_dream'],
          ['noblesse_oblige', '+15%_hydro_dmg_set', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['blizzard_strayer'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Activating XQ's Elemental Skill or Elemental Burst applies Hydro to the on-field character with his shield. (Pyro in specific)\n\nCleansing Electro may take an additional switch for your character with the rain swords active, while Cryo would freeze you in place. \n\nIt is typicially recommended to use Xingqiu's Elemental Skill before his Burst. However, if Xingqiu is Constellation four, you may choose to use his Elemental Skill after his Burst for the increased damage. This increases his Energy Recharge needs so it is not recommended to use unless you run Sacrificial Sword or use the book trick method which involves pausing the game by opening a menu for a second to allow him to collect the particles.",
        note: 'High and Low Energy Recharge Requirements depends on the amount of Energy Recharge your Xingqiu needs. Choose wisely based on the team he\'s in and how easily you can achieve Energy Recharge targets. Other Hydro characters and Energy Recharge based teammates like Raiden Shogun can help alleviate his energy requirements, as does his <b>Constellation 6</b>.\n\n<b>Regarding Weapon Choices:\nThe weapon rankings assume you are running enough Energy Recharge to get Xingqiu\'s burst up off cooldown. If you are not, select an Energy Recharge weapon from this list.</b>\n<b>Sacrificial Sword [R3+]:</b> This weapon is<b> extremely inconsistent </b>and <b>extends rotation lengths</b> leading to an <b>overall loss in DPS</b>. This weapon does become more useful if <b>Xingqiu is not the only hydro character on the team</b>.\n<b>Harbinger of Dawn [R5]</b>: At <b>[C6], </b>if you can consistently keep the passive active, this has the potential to rival <b>Sacrificial Sword [R3+]\nSapwood Blade: </b>This weapon can be especially useful as a support weapon in<b> Dendro based teams</b>.\n\nBig thanks to Quincy#6965 for helping us with the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">weapon calculations</a>.\n\n<b>Regarding Artifact Sets:\nEmblem of Severed Fate (4):</b> This set falls off in terms of damage if Xingqiu has less than <b>130% </b>Energy Recharge.\n<b>Noblesse Oblige (4): </b>Offers party-wide ATK boost, you can use this set on Xingqiu<b> if nobody else on the party is able to use it better</b>. If someone else on the team<b> already has Noblesse Oblige (4), Noblesse Oblige (4) should not be used.</b>\n<b>Blizzard Strayer (4): </b>This set is <b>only recommended on a freeze team</b> to optimize Xingqiu\'s stats since he can mildly disregard Crit Rate and build Crit Damage instead for more damage output. Despite it outperforming <b>Emblem of Severed Fate (4)</b> within this niche,<b> it is generally not recommended to specifically farm for this set.</b>\n\n<b>Regarding Main Stats Priority:</b>\nIdeally you would be running ATK% Sands when your ER needs are fulfilled. ER needs can be found in the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">Xingqiu Mastersheet</a>.\n\nPrioritize Energy Recharge first if you can\'t burst off cooldown',
      },
    },
  },
  barbara: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'everlasting_moonglow',
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
          ['maiden_beloved', 'tenacity_of_the_millelith', 'ocean-hued_clam'],
          ['instructor'],
        ],
        mainStats: {
          sands: ['HP%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus'],
        },
        subStats: ['HP%', 'Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: "Barbara's skill gives you a pulse of healing every 5 seconds, every pulse will imbue you with a Hydro status, that means it can be used for status-cleansing (Pyro in specific, while other elements may take more pulses).\n\nTake note that Hydro reacting with Cryo status will freeze you in place, her skill should be used in consideration of the environment",
        note: 'Use Elemental Skill and/or Elemental Burst and immediately switch. Building ER is <b>not recommended</b> on Support Barbara as her burst should be used as a last resort and should not be expected to be cast every rotation. This is further compounded by the fact that Barbara has no particle generation. For this reason, <b>Ocean-Hued Clam</b> is also <b>not recommended</b> for Support Barbara.\n\n<b>Regarding Weapon Choices: \nEverlasting Moonglow:</b> For Electro-Charged teams, this weapon will provide the highest personal damage for Barbara. However, <b>Thrilling Tales of Dragon Slayers</b> will still provide the highest team damage due to its 48 ATK% buff. \n\n<b>Regarding Artifact Sets:</b>\n<b>Maiden Beloved (4): </b>This set is best acquired through the strongbox instead of trying to farm it in its domain.\n<b>Instructor (4): </b>The Hydro application from Elemental Skill can be used to trigger an elemental reaction and provide a teamwide Elemental Mastery buff.',
      },
      'BLOOM DPS': {
        recommended: false,
        weapons: [
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [['flower_of_paradise_lost'], ['gilded_dreams'], ['+80_em', '+80_em'], ['ocean-hued_clam']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "This build is specifically for Bloom teams where Barbara is the character intended to trigger the majority of Blooms.\n\n<b>Regarding Aritfact Sets:</b>\n<b>Ocean-Hued Clam (4):</b> This set can do more damage than other options in certain situations, while also increasing Barbara's healing to deal with Bloom self-damage. However, this set is <b>very resin inefficient</b> and is thus <b>not recommended to farm specifically for this set.</b>",
      },
    },
  },
  candace: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_lance',
          },
          {
            id: 'black_tassel',
          },
        ],
        artifacts: [['noblesse_oblige'], ['emblem_of_severed_fate']],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%', 'Hydro DMG'],
          circlet: ['HP%', 'Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate', 'HP%', 'Flat HP'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: 'Candace has generally poor personal damage, and as such performs best as a low investment support.\n\nCrit Rate only if running Favonius Lance',
      },
    },
  },
  tartaglia: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'polar_star',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'hunters_path',
          },
          {
            id: 'aqua_simulacra',
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
            id: 'kings_squire',
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
          sands: ['ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: "Optimal skill duration for [C0]: 7s, 9s or 12s.\nOptimal skill duration for [C1]: 9s, 11s or 14s.\n\nMelee Burst: Only to be used in situations where you need only 1 rotation to clear as the ER requirement to maintain burst uptime is quite high (170-190%), you'll always want to start your rotations with Ranged Burst since it refunds energy to maintain your rotation well.\n\nSkill Combo:\n- 2 NA + 1 CA (Optimal)\n- 3 NA + 1 CA (Recommended)\n- 5 NA + 1 CA (Recommended combo if using Rust or Thundering Pulse)\n\n*NA = Normal Attack, CA = Charged Attack\n\nThe Optimal combo provides more damage but consumes more stamina. Recommended combo provides slightly less damage but is stamina neutral and what most weapons should use.",
        note: "The Weapon Rankings here are under the assumption that Childe is used with Bennett and Vaporizes his Burst, aswell as using the optimal attack combos listed in the Ability Tips section.<b>\n</b>\n<b>Regarding Weapon Choices:</b>\n<b>Polar Star:</b> Has varied performance depending on <b>how many passive stacks you get.</b> Getting<b> 2-3 stacks at the start of your rotation can perform better than Thundering Pulse</b> while getting <b>no stacks can perform worse than Skyward Harp.</b>  This only applies if you are Vaporizing Childe Burst together with Bennett.<b> In teams without Bennett, Polar Star will always perform better than the other options. </b>3 stacks can be achieved by doing <b>Skill + 1 Normal + 1 Charged Attack</b> before setting up your Vaporize Burst. If your Skill is still on cooldown, <b>a fully Charged Aimed shot against a riptide affected target</b>, OR a<b> Ranged Normal + quick Aimed shot </b>gives 2 stacks (which can be followed by Skill for the 3rd stack).\n<b>Thundering Pulse:</b> Slightly better than <b>Skyward Harp</b> depending on rotations - the more time you spend doing Normal Attacks, the more it pulls ahead over <b>Skyward Harp, </b>but it's not recommended to extend your Childe's melee rotation for this.\n<b>The Viridescent Hunt:</b> Offers a valuable passive that helps a lot in <b>grouping enemies</b>, which can offer a ton of damage from Riptide.\n<b>Blackcliff Warbow:</b> Due to inconsistency of gaining stacks,<b> falls off compared to other weapons at higher refinements.</b>\n<b>Prototype Crescent:</b> Requires you to trigger its passive by hitting the enemy's weak points, <b>falls off if compared with other options without the passive triggered.</b>\n<b>The Stringless: Main DPS Childe should only use this weapon in</b> <b>teams where you are Vaporizing your Burst</b>, as the Elemental Mastery substat loses a lot of value in other teams. If Childe is being used as a <b>Nuke Support only for his Vaporized Burst damage, R5 Stringless will rank just below Thundering Pulse. </b>Note that the Stringless Elemental Skill passive does not affect Childe's melee stance auto attacks.\n\n<b>Regarding Artifact Sets:\nHeart of Depth (2) +18% ATK set (2): </b>This set is <b>only about 1-2 substats behind Heart of Depth (4)</b>, you can opt out for this set instead if you already have decent pieces.\n<b>Shimenawa's Reminiscence (4):</b> Due to this set requiring Childe to have around 150% Energy Recharge to reliably burst every rotation, it falls behind the other options. However, it outperforms <b>Heart of Depth (4) </b>if used in a single rotation setting <b>(ignoring ER)</b>.",
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
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', '+80_em'],
          ['wanderers_troupe'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: '',
        note: 'This build is best utilised at <b>[C2], </b>but can work without it. Do note that several 4 stars will out-dps Mona, as <b>Mona is better off as a Sub-DPS/Support</b>.',
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
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', '+80_em', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['instructor'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge', 'Elemental Mastery'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'ATK%', 'Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: "To make Mona's burst damage trigger the Vaporize 2.0x multiplier:\n1. Apply Pyro on enemy\n2. Cast Burst (should react and remove Pyro status on the enemy after using Burst)\n3. Wait 2.5 seconds for Mona's burst ICD (Mona should stay on field if you have Bennett, to keep the buff)\n4. Swap to Pyro character and apply Pyro on enemy\n5. Burst will pop after enemy gets hit, applying Hydro and Vaporizing her damage.",
        note: "Mona's <b>Elemental Skill provides taunt </b>and procs wet status on enemies, her <b>Elemental Burst is also capable of rendering smaller enemies immobile</b> (Mona needs to be at least 20 levels within the enemy's level) and <b>providing a huge damage burst</b> (and additional omen debuff after proc).\n\n<b>Regarding Artifact Sets:\nInstructor (4):</b> A <b>niche</b> set only really used for certain <b>Hu Tao</b> teams nuke setups.\n\n<b>Look to the Nuke Mona's Ability Tip section for Vaporize Nuke set up instructions.\n\n</b>",
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
        artifacts: [
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith'],
          ['+20%_energy_recharge', '+20%_energy_recharge'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Hydro DMG', 'ATK%'],
          circlet: ['Crit Rate'],
        },
        subStats: ['Energy Recharge', 'Crit Rate', 'ATK%'],
        talent: ['Burst', 'Skill'],
        tip: "Mona's Burst applies bubble and Omen debuff upon cast, the count down timer only begins when the bubble is broken.\n\nFrozen enemies can have their bubbles preserved as long as enemies stay in a frozen state. This technique makes Mona a priority Support for Freeze DPS teams.",
        note: "Mona's main role on a freeze team is to <b>provide Omen debuff</b> from her burst as <b>it is extendable via Freeze mechanics.</b> Note that you must <b>apply Cryo before casting Mona's Elemental Burst </b>for the extension to happen. Omen Freeze extension can be done by <b>reapplying Cryo and Hydro aura consistently </b>(this can be done with Cryo / Hydro infused Venti Elemental Burst + on-field Cryo / Hydro aura).\n\n<b>Regarding Weapon Choices:</b>\n<b>Thrilling Tales of Dragon Slayers:</b> Generally the best option on Freeze Support Mona<b> because she can furthermore buff the ATK of your Main DPS. This however comes with an assumption that with Thrilling Tales of Dragon Slayers, you still have 100% Elemental Burst uptime</b>. If you do not, pick the other Energy Recharge weapon options for more Elemental Burst uptime.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4):</b> Run this set if there's already another character with <b>Noblesse Oblige (4)</b> on the team.\n\nOffensive stats aren't actually needed on a Freeze Support Mona, focus on Artifact Set Bonus\nOffensive stats aren't needed, just stack ER for comfortable Elemental Burst uptime",
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
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus', 'HP%'],
        },
        subStats: ['Energy Recharge', 'HP%', 'ATK%', 'Flat HP', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: "Kokomi's Elemental Burst dynamically alters her skill's damage, this means that you cannot use her Burst to snapshot the buff onto the Skill and swap out.",
        note: "Support Kokomi focuses on just using her Elemental Burst before her Elemental Skill's duration ends to refresh her skill duration. This allows 100% uptime on Hydro application from her Elemental Skill for Freeze / Electro-charge teams.\n\n<b>Regarding Weapon Choices:\nHakushin Ring: </b>This weapon can provide Elemental DMG% for the team in <b>Electro-charged teams</b> and will outperform <b>Prototype Amber</b> if you value damage more than healing.\n<b>Sacrificial Fragments: </b>Can be useful as Kokomi won't need to use her Elemental Burst to reset her skill duration. This <b>allows for smoother rotations</b> as she will not face the problem of missing out on the reset for her Elemental Skill due to not casting Burst in time.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4): </b>With proper extension of Kokomi's Elemental Skill, she can maintain near <b>100% uptime on this artifact set's 4 piece effect.</b>\n<b>Ocean Hued Clam (4):</b> This ranking assumes Kokomi is being used <b>only for her Elemental Skill.</b> If she is being used to attack onfield during Elemental Burst, this set may <b>overtake Tenacity of the Millelith (4). </b>\n\n<b>Regarding Main Stats and Sub Stats: \nEnergy Recharge:</b> Prioritise Energy Recharge first to ensure you can always use Elemental Burst before the Elemental Skill expires in order to maintain Hydro application. \n<b>\n</b>\n\nMainstats are not important for Tenacity of the Millelith (4) if you do not need the extra healing. Focus on Energy Recharge substats instead.",
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
          sands: ['HP%', 'Energy Recharge'],
          goblet: ['Hydro DMG'],
          circlet: ['Healing Bonus'],
        },
        subStats: ['HP%', 'Energy Recharge', 'ATK% ~= Flat HP', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "Due to Kokomi's high stamina cost on her Charged Attacks, her best attack strings are: \n\nAt [C0]: N2D \nAt [C1]: N3D*\n\n*N3D might result in a loss of Beidou Stormbreaker hits (DPS loss), and as such is only recommended in a Vaporize comp where the added Hydro application is favoured.\n\n*NA = Normal Attack, D = Dash",
        note: "DPS Kokomi aims to maximise her onfield damage during her Elemental Burst's duration. Outside of her Elemental Burst, her damage is lackluster and not worth building for.\n\n<b>Regarding Weapon Choices:\nThrilling Tales of Dragon Slayers: </b>Although this weapon doesn't provide as much personal damage for Kokomi, the 48% ATK buff is usually more worth in most cases. <b>This can be her best weapon in for overall team DPS if you don't already have another Thrilling Tales of Dragon Slayers user in your team.</b>\n<b>Hakushin Ring:</b> This weapon can provide Elemental DMG% for the team in Electro-charged teams, and is the best choice in those situations.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4): </b>Although this set offers the lowest personal damage for Kokomi, the 20% ATK team buff can sometimes be better for overall team DPS.",
      },
      'BLOOM DPS': {
        recommended: false,
        weapons: [
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'fruit_of_fulfillment',
          },
        ],
        artifacts: [['flower_of_paradise_lost'], ['gilded_dreams'], ['+80_em', '+80_em'], ['ocean-hued_clam']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'HP%', 'Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "This build is specifically for Bloom teams where Kokomi is the character intended to trigger the majority of Blooms.\n\n<b>Regarding Aritfact Sets:\nOcean-Hued Clam (4): </b>This set can do more damage than other options in certain situations, while also increasing Kokomi's healing to deal with Bloom self-damage. However, this set is <b>very resin inefficient</b> and is thus <b>not recommended to farm specifically for this set.</b>",
      },
    },
  },
  kamisato_ayato: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'kagotsurube_isshin',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'amenoma_kageuchi',
            refine: [3],
          },
          {
            id: 'skyward_blade',
          },
        ],
        artifacts: [
          ['heart_of_depth'],
          ['gladiators_finale'],
          ['heart_of_depth', '+18%_atk_set'],
          ['blizzard_strayer'],
          ['thundering_fury'],
          ['echoes_of_an_offering'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'HP%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: "Try to activate Ayato's Elemental Burst before using his skill to maximize his Normal Attack DMG. Getting enough Energy Recharge for this is important, and varies based on team. Since the casting time is so long, it may not be worth snapshotting into buffs.\n\nThe amount of slashes Ayato can do during an Elemental Skill window is sometimes influenced by the player's set FPS.",
        note: "<b></b>DPS Ayato focuses on doing large amounts of on-field damage with his Elemental Skill and Elemental Burst. \n\n<b>Regarding Weapon Choices:</b>\n<b>Skyward Blade and Amenoma Kageuchi:</b> If you are running Ayato in<b> teams where he needs more than 140% ER to burst</b>, these weapons can be quite valuable.\n<b>Summit Shaper: </b>In teams where <b>ATK buffs are scarce</b>, this weapon has the <b>potential to rival The Black Sword</b>.\n<b>Lions Roar: </b>In <b>Electro-Charged teams</b>, this weapon <b>performs about equal to The Black Sword</b>.\n\n<b>Regarding Artifact Sets:</b>\n<b>Echoes of an Offering (4): </b>The performance of this artifact set is <b>inconsistent</b>, and is based on user ping and other factors. <b>It is not recommended to run this set unless your ping is consistently below 100</b>. If you can achieve this, <b>Echoes of an Offering (4)</b> is only preferred on weapons with <b>high amounts of DMG% </b>such as <b>Mistsplitter Reforged</b> and <b>Haran Geppaku Futsu.</b> Otherwise,<b> Heart of Depth (4)</b> is preferred.\n<b>Blizzard Strayer (4): When run in a Freeze Team</b>, this is Ayato's best set. <b>Note that it is not recommended to farm specifically for this set.</b>\n<b>Thundering Fury (4): When run in an Electro-Charged team</b>, this is Ayato's best set due to the Cooldown Reduction on Elemental Skill allowing for shorter rotations. <b>Note that it is not recommended to farm specifically for this set.</b>",
      },
    },
  },
  yelan: {
    roles: {
      'HIGH ENERGY REQUIREMENTS\n(OFF-FIELD DPS)': {
        recommended: true,
        weapons: [
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'sacrificial_bow',
            refine: [3],
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['emblem_of_severed_fate', 'tenacity_of_the_millelith', 'heart_of_depth', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['Hydro DMG', 'HP%'],
          circlet: ['Crit Rate', 'Crit DMG', 'HP%'],
        },
        subStats: ['Energy Recharge', 'HP% ~= Crit Rate / DMG', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Yelan is an off-field DPS who is able to <b>apply Hydro via her Elemental Burst</b>, this part of her kit acts similarly to Xingqiu's Elemental Burst. <b>Yelan mainly scales off HP%</b>, so don't build her with ATK%. <b>Yelan also wants a lot of Energy Recharge to be able to maintain her Elemental Burst uptime</b>, this can decrease depending on the number of Hydro units or energy providers in the team.\n\n<b>Regarding Weapon Choices:</b>\n<b>Elegy for the End: </b>This weapon is to be used <b>only in reaction based comps such as Vape Hu Tao,</b> Yelan's personal damage is lower than other options on this list, but is more beneficial for the team's damage per rotation.\n<b>Mouun's Moon: </b>This weapon <b>works best at [R3+] </b>and <b>makes HP% Goblet potentially a stronger option instead of Hydro Bonus especially in comps with strong DMG% buffs</b>.\n<b>Sacrificial Bow</b>: This ideally needs to be at refinement<b> [R3-R5] </b>to <b>function properly in most Yelan teams rotations</b> without <b>desyncing the rotation and extending her field time</b>.\n<b>Aqua Simulacra:</b> Can still perform well at high Energy Recharge as long as your minimum Energy Recharge requirements are met.\n<b>Hunter's Path / Polar Star / Thundering Pulse:</b> These weapons are <b>very potent on Yelan being some of her best DPS weapons</b>, but she doesn't take full advantage of them. It is recommended to use them on characters who benefit more from their passives.\n\n<b>Regarding Artifact Main Stats:</b>\n<b>Goblet: </b>HP% Goblet is to be used <b>only if the Hydro DMG% option has terrible substats and HP% option has great substats</b>, or <b>if Yelan has strong DMG% buffs</b> such as<b> Emblem of Severed Fate (4)</b> +<b> Mouun's Moon</b> (especially with refinements) or Raiden + Kazuha and so on.\nOn top of that it's never recommended to run more than 2 HP% mainstat artifacts at a time.\n\n<b>Regarding Talent Priority:\nNormal Attacks: </b>Level this up only if you want to constantly use her Breakthrough Barbs.\n\nBig thanks to Vladone ツ#9281 and jstern25#1399 from Yelan Mains for helping us with the <a href=\"https://docs.google.com/spreadsheets/d/1ULEvZVo1Er1N-1_f729qiheMZusEC6qpJ5Yn8vyrqr8/edit?usp=sharing\">calculations</a>.\n\n",
      },
      'LOW ENERGY REQUIREMENTS\n(OFF-FIELD DPS)': {
        recommended: true,
        weapons: [
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'mouuns_moon',
            refine: [3],
          },
          {
            id: 'the_stringless',
            refine: [3],
          },
          {
            id: 'slingshot',
          },
          {
            id: 'hunters_path',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'fading_twilight',
            refine: [5],
          },
          {
            id: 'recurve_bow',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['emblem_of_severed_fate', 'tenacity_of_the_millelith', 'heart_of_depth', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['Hydro DMG', 'HP%'],
          circlet: ['Crit Rate', 'Crit DMG', 'HP%'],
        },
        subStats: ['Energy Recharge', 'HP% ~= Crit Rate / DMG', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Yelan is an off-field DPS who is able to <b>apply Hydro via her Elemental Burst</b>, this part of her kit acts similarly to Xingqiu's Elemental Burst. <b>Yelan mainly scales off HP%</b>, so don't build her with ATK%. <b>Yelan also wants a lot of Energy Recharge to be able to maintain her Elemental Burst uptime</b>, this can decrease depending on the number of Hydro units or energy providers in the team.\n\n<b>Regarding Weapon Choices:</b>\n<b>Elegy for the End: </b>This weapon is to be used <b>only in reaction based comps such as Vape Hu Tao,</b> Yelan's personal damage is lower than other options on this list, but is more beneficial for the team's damage per rotation.\n<b>Mouun's Moon: </b>This weapon <b>works best at [R3+] </b>and <b>makes HP% Goblet potentially a stronger option instead of Hydro Bonus especially in comps with strong DMG% buffs</b>.\n<b>Sacrificial Bow</b>: This ideally needs to be at refinement<b> [R3-R5] </b>to <b>function properly in most Yelan teams rotations</b> without <b>desyncing the rotation and extending her field time</b>.\n<b>Aqua Simulacra:</b> Can still perform well at high Energy Recharge as long as your minimum Energy Recharge requirements are met.\n<b>Hunter's Path / Polar Star / Thundering Pulse:</b> These weapons are <b>very potent on Yelan being some of her best DPS weapons</b>, but she doesn't take full advantage of them. It is recommended to use them on characters who benefit more from their passives.\n\n<b>Regarding Artifact Main Stats:</b>\n<b>Goblet: </b>HP% Goblet is to be used <b>only if the Hydro DMG% option has terrible substats and HP% option has great substats</b>, or <b>if Yelan has strong DMG% buffs</b> such as<b> Emblem of Severed Fate (4)</b> +<b> Mouun's Moon</b> (especially with refinements) or Raiden + Kazuha and so on.\nOn top of that it's never recommended to run more than 2 HP% mainstat artifacts at a time.\n\n<b>Regarding Talent Priority:\nNormal Attacks: </b>Level this up only if you want to constantly use her Breakthrough Barbs.\n\nBig thanks to Vladone ツ#9281 and jstern25#1399 from Yelan Mains for helping us with the <a href=\"https://docs.google.com/spreadsheets/d/1ULEvZVo1Er1N-1_f729qiheMZusEC6qpJ5Yn8vyrqr8/edit?usp=sharing\">calculations</a>.\n\n",
      },
    },
  },
  nilou: {
    roles: {
      'BLOOM SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'key_of_khaj-nisut',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'xiphos_moonlight',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'toukabou_shigure',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'sapwood_blade',
          },
          {
            id: 'primordial_jade_cutter',
          },
        ],
        artifacts: [
          ['+20%_hp_set', '+20%_hp_set'],
          ['+20%_hp_set', '+15%_hydro_dmg_set'],
          ['+20%_hp_set', 'noblesse_oblige'],
          ['+20%_hp_set', '+80_em'],
          ['deepwood_memories'],
        ],
        mainStats: {
          sands: ['HP%', 'Energy Recharge'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: [
          'HP%',
          'Flat HP',
          'Energy Recharge (if bursting every rotation)',
          'Elemental Mastery',
          'Crit Rate / DMG',
        ],
        talent: ['Skill', 'Burst'],
        tip: 'Off Field Combo\n(Q) E N3 (Sword Dance) - Minimizes her own Bloom ownership\n\n(Q) E E E E (Whirling Steps) - Primarily used when Nilou is wielding Key of Khaj-Nisut',
        note: "As a Bloom Support, Nilou's role is to maximize a team's Bloom Damage in teams of strictly Hydro and Dendro characters. Level 90 is highly recommended to maximize Nilou's HP and Bloom Damage\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Sword, Festering Desire and Sacrificial Sword:</b> Strong options if opting to Burst every rotation. Favonius can potentially help other team members' energy needs. Do bear in mind though that Nilou <b>strongly prefers Elemental Mastery weapons over Energy Recharge</b> <b>weapons</b> in almost all circumstances.\n\n<b>Regarding Artifact Sets:</b>\n<b>+80 Elemental Mastery set (2):</b> These sets provide no benefit if Nilou isn't triggering Blooms.\n<b>+15% Hydro DMG set (2): </b>This is only really a viable option if Nilou is played mostly on-field instead of off-field.\n<b>Deepwood Memories (4):</b> Can be an option if other teammates are not <b>Deepwood Memories</b> holders.\n\nPrefers HP substats above all else until you reach the limit of your  A4 passive which is at 74444 HP\nTalent levels do not affect Nilou's buff to Bloom damage, so heavy investment in Talents is not necessary",
      },
    },
  },
  diona: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_warbow',
          },
          {
            id: 'sacrificial_bow',
            refine: [3],
          },
          {
            id: 'sacrificial_bow',
            refine: [1, 2],
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
          ['maiden_beloved', '+20%_energy_recharge'],
          ['the_exile'],
          ['instructor'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['HP%', 'Healing Bonus'],
        },
        subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
        talent: ['Burst = Skill'],
        tip: "Diona's Elemental Skill grants you a Cryo shield which allows cleansing. Every time you swap characters with the shield up, it applies Cryo. This acts as a cleanse.",
        note: "The shielding Diona puts out should offset the need for healing from her burst. The damage boost from <b>Noblesse Oblige (4)</b> has more practical use. Additionally, her first constellation greatly increases her ultimate uptime, further lowering the healing needed.\n\nAs a support, Diona's typically used for three things; Shielding, Healing, and Cryo particle generation. Pairing Diona with Cryo carries such as Ganyu and Eula allows you to funnel energy into your DPS characters while providing them with quick shields for stagger resistance. Weapons such as <b>Sacrificial Bow</b> and <b>Favonius Warbow</b> greatly increase her potential as a battery.\n\n<b>Regarding Weapon Choices:</b>\n<b>Sacrificial Bow: </b>Prefered over <b>Favonius Warbow</b> at higher refinements for consistency and when batterying another Cryo unit.\n<b>Favonius Warbow:</b> It is <b>recommended to</b> build some Crit Rate coverage to have a higher chance of triggering bow passive for energy.\n<b>Recurve Bow: </b>This bow will be your best choice for stronger shields, but it reduces Diona's burst uptime significantly due to having no Energy Recharge on her weapon.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige (4): </b>This set provides an ATK buff while also increasing burst damage - this set is usually used with healers because you want to use damage sets on other support units such as Xingqiu or Beidou.\n<b>Emblem of Severed Fate (2) Tenacity of the Millellith (2): </b>Provides both ER and HP which are both valuable for a support diona, increasing ult uptime and healing strength respectively.\n\n<b>Regarding Main Stats Priority:</b> \nFull Stack HP% is recommended if you want stronger shields but a weaker heal. You can use Healing Bonus Circlet if you want a nice balance between the two. \n\n<b>Regarding Talent Priority:</b> \nPrioritise whichever your Diona is geared for (shielder or healer), if built for a balance between the two, level both equally.\n\n",
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
          ['noblesse_oblige', 'blizzard_strayer', '+80_em', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge', 'Elemental Mastery'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst = Skill'],
        tip: "Chongyun's Elemental Burst is calculated as Claymore damage, which means it breaks Geo Structures / Shields at a much easier rate and can proc Shatter.",
        note: "<b></b>It is preferred to use Chongyun as a Sub DPS / Nuke over Main DPS as <b>his Normal Attack scalings are very low</b>, even when including Constellation 1. His <b>Elemental Burst on the other hand hits extremely hard </b>on later constellations and takes a much higher total damage portion over his Normal Attack. On top of that, you can Reverse Melt all 3 hits of his Elemental Burst on enemies applied with strong Pyro, such as Bennett's Elemental Skill and Elemental Burst.\n\nChongyun is <b>very niche</b> as he only performs well in certain teams and can completely destroy the other. He is mainly used on a team as an <b>enabler</b>, be it for <b>Reverse Melt teams</b> (e.g. Melt DPS Bennett) or <b>Freeze teams</b> (e.g. Freeze DPS Kaeya). He also <b>does not function well with Physical teams</b> (e.g. Razor, Eula) as it renders his Elemental Skill useless because it converts their <b>Normal Attack damage from Physical to Cryo</b>. They're usually using a Physical Goblet, so if they got their Normal Attack converted from Physical to Cryo, <b>they won't benefit from Physical DMG Bonus</b> from the goblet, thus it's a DPS loss.\n<b>\n</b>At<b> [C2]</b>, his Elemental Skill <b>reduces ability cooldown that is casted within the zone by 15%</b>. This is one of the few abilities in the game that can reduce cooldown.\n\n<b>Regarding Weapon Choices:\nSerpent Spine:</b> This weapon outperforms <b>Wolf's Gravestone</b> if we only look at Chongyun's damage contribution <b>[5 Stacks Assumed]</b>. <b>Wolf's Gravestone</b> is ranked higher as it provides more teamwide DPS and does not come with the need to acquire stacks before engaging in combat.\n<b>Redhorn Stonethresher: </b>Depending on the amount of ATK% buffs you're getting, this weapon can overtake <b>Wolf's Gravestone</b> in personal damage.<b>\nAkuoumaru</b>: At <b>[R1]</b>, <b>Akuoumaru</b> beats <b>Luxurious Sea-Lord</b> if Chongyun is used in a team with <b>260 or greater</b> total team energy. <b>Akuoumaru</b> only beats <b>Luxurious Sea-Lord</b> if <b>[R2]</b> and above otherwise.\n<b>Sacrificial Greatsword: </b>This weapon is your best choice if faced in a situation where you heavily rely on Chongyun's Cryo infusion uptime.\n<b>\nRegarding Artifact Sets:\nNoblesse Oblige (4):</b> Chongyun is one of the best <b>Noblesse Oblige (4)</b> holders since he has low energy requirements for his Elemental Burst.\n\n<b>Regarding Talent Priority: \n</b>Prioritize Elemental Burst on a Melt team as it scales better than his Elemental Skill.\nPrioritize Elemental Skill on a Freeze team to furthermore extend the duration of the Cryo infusion.\n\n",
      },
    },
  },
  kaeya: {
    roles: {
      FREEZE: {
        recommended: true,
        weapons: [
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'light_of_foliar_incision',
          },
          {
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'kagotsurube_isshin',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'harbinger_of_dawn',
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
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit DMG'],
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Crit Rate', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: 'As a Freeze DPS, he gains over 55%+ Crit Rate with the right team set up:\n- 15% from Cryo Resonance against Cryo affected enemies\n- 40% from Blizzard Strayer against Frozen enemies\n- 15% from [C1] against Cryo affected enemies',
        note: 'Kaeya Freeze is mostly used in a team with Chongyun and Xingqiu/Barbara while having <b>Blizzard Strayer (4)</b> equipped. In this team, Kaeya has 55% crit rate against Frozen enemies without any additional Crit stats, which means Crit Rate substats are generally prioritized less than ATK% or Crit DMG.\n\nCrit Rate Generally has less value than the other offensive stats due to Blizzard Strayer and Cryo Resonance\nIf not paired with Chongyun, Skill takes priority over Normal Attacks',
      },
      'REVERSE MELT': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'light_of_foliar_incision',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'haran_geppaku_futsu',
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
            id: 'kagotsurube_isshin',
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
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['noblesse_oblige', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['instructor'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "Kaeya's Elemental Burst makes him an excellent source of Cryo application for characters that often stay in melee range, although his burst can't be fully utilized with Reverse Melt teams due to how his Cryo damage is split into a barrage of attacks.\n\n<b>Regarding Weapon Choices:</b>\n<b>Skyward Blade:</b> In teams with a <b>2nd Cryo unit generating energy</b>, this weapon would have a lower priority as the Energy Recharge stat would mostly be wasted.\n<b>Lion's Roar / The Alley Flash / Iron Sting:</b> At<b> [R5]</b>, these weapons would <b>outperform Summit Shaper.\n\nRegarding Artifact Sets:\nInstructor (4): </b>Due to his ability to easily trigger <b>Instructor's (4)</b> passive, Kaeya is a good holder of <b>Instructor (4)</b> for Reverse Melt teams. Aside from ER%, most of his other main stats don't matter as much, making this one of his budget support builds. \n<b>Noblesse Oblige (4): </b>This set is only recommended if there is no other member of the team running <b>Noblesse Oblige (4).</b>",
      },
    },
  },
  rosaria: {
    roles: {
      'REVERSE\nMELT': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'calamity_queller',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'wavebreakers_fin',
          },
          {
            id: 'missive_windspear',
            refine: [5],
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'kitain_cross_spear',
            refine: [5],
          },
        ],
        artifacts: [
          ['lavawalker'],
          ['gilded_dreams'],
          ['emblem_of_severed_fate'],
          ['blizzard_strayer', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate', 'Crit DMG', 'Elemental Mastery / ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "T\nThis build capitalizes on the fact <b>Rosaria's skill and burst dont have an ICD</b>, allowing her to Melt all Skill and Burst procs. Which in combination with <b>snapshotting buffs onto her burst</b> makes it one of her <b>highest personal damage builds</b>.\n\n<b>Regarding Weapon Choices:\n</b>For more details see the sheet <a href=\"https://docs.google.com/spreadsheets/d/1F8kvHkdRidPgQAFfxoX3iW6nr6WNIJI1F_5l3TJTkdE/edit\">here</a>\n<b>Vortex Vanquisher:</b> The ranking assumes you are unshielded. If you use a shield, it can surpass <b>Calamity Queller</b>.\n<b>Dragon's Bane:</b> At high refinement <b>[R4-R5] </b>this performs a tad better than <b>Primordial Jade Winged-Spear</b>.\n<b>Wavebreaker's Fin:</b> At high refinement <b>[R4-R5]</b> with a 260 energy cost team<b> </b>this performs just <b>below Staff of Homa</b>.\n<b>Deathmatch:</b> This weapon can outperform all <b>(4✩) </b>options and even <b>Primordial Jade Winged-Spear </b>when used with <b>Gilded Dreams (4) </b>in<b> single target situations.</b>\n\n<b>Regarding Artifact Choices:\nEmblem of Severed Fate (4):</b> In teams where her energy requirements are higher <b>(130%+)</b> it can surpass <b>Lavawalker (4)</b>.   \n<b>Gilded Dreams (4):</b> In teams where her energy requirements are at <b>120% or Lower</b> it performs slightly better than <b>Emblem of Severed Fate (4).\n</b>",
      },
      FREEZE: {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'wavebreakers_fin',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'deathmatch',
          },
        ],
        artifacts: [['blizzard_strayer'], ['noblesse_oblige'], ['blizzard_strayer', 'noblesse_oblige']],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit DMG'],
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Crit Rate', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'If Rosaria is being used with Chongyun to infuse her normal attacks with Cryo, her Normal Attack talent will have higher priority than Skill.',
        note: "This build can be used on <b>both a quickswap/sub-dps</b> and <b>perma-freeze dps</b> Rosaria. If played as a <b>perma-freeze dps</b>, Rosaria has the same team comp as Freeze Kaeya. Check Kaeya's ability tips section for teamcomp setup.\n\n<b>Regarding Substats: </b>\nRosaria does not need much Energy Recharge if paired with Kaeya. If paired with another Cryo unit such as Chongyun or Ayaka, she will need more Energy Recharge.\nCompared to Kaeya, Rosaria has even less desire for Crit Rate, as her Ascension 1 Talent includes an extra 12% Crit Rate once skill hits the back of an enemy.\n\n<b>Regarding Weapon Choices:</b>\n<b>Wavebreaker's Fin:</b> At high refinement <b>[R5]</b>, this weapon can perform similarly to <b>Staff of Homa, </b>and even outperform it with a high energy cost team <b>(260 cost).</b>\n<b>Deathmatch:</b> Rosaria gets a lot of Crit Rate from <b>Blizzard Strayer (4) and Cryo Resonance</b>. As a result, this weapon falls off in value as you will tend to overcap above 100% Crit Rate. If Rosaria is being used without the <b>Blizzard Strayer (4)</b> set, then this weapon can perform better compared to other options.\n\n<b>Regarding Artifact Choices:</b>\n<b>Noblesse Oblige (4): </b>This set is <b>only used in her sub-dps/quickswap roles not her perma-freeze dps role</b>. Also it should only be considered when you have no decent <b>Blizzard Strayer (4)</b> pieces and no one else on the team is holding <b>Noblesse Oblige (4)</b>.",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'favonius_lance',
          },
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'the_catch',
          },
          {
            id: 'prototype_starglitter',
          },
        ],
        artifacts: [['noblesse_oblige'], ['instructor']],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate'],
        },
        subStats: ['Crit Rate', 'Energy Recharge', 'Crit DMG', 'ATK%', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Be sure to cast skill before burst as Crit Rate granted by the Ascension 1 Talent will be included with Ascension 4 Talent Bonus as well.\n\nRosaria's Elemental Skill and Elemental Burst can be Reverse Melted (1.5x) with another Pyro applier for some quick and powerful damage.",
        note: "This Build focuses on her <b>Buffing/Energy generation/Cryo application capabilities</b>. Though it <b>does not mean that you dont invest in her personal damage</b>, only that it's a lower priority overall.\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Lance:</b> The best option in situations where you havent met your teams energy requirements. Outside of that scenario you would be better of using a Crit Rate weapon that benefits her A4 buff.\n\n<b>Regarding Artifact Sets:</b>\n<b>Instructor (4):</b> Can be the better option in teams that <b>prefer the Elemental Mastery buff over ATK</b>, such as <b>Hu Tao VapeMelt</b>.",
      },
    },
  },
  layla: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'key_of_khaj-nisut',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith', 'blizzard_strayer', 'emblem_of_severed_fate'],
          ['blizzard_strayer'],
          ['emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: ['HP%', 'Energy Recharge'],
          goblet: ['HP%', 'Cryo DMG'],
          circlet: ['HP%', 'Crit Rate', 'DMG'],
        },
        subStats: ['HP%', 'Energy Recharge', 'Crit Rate / DMG'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "The goal of this build is to prioritize Layla's shield, and increase her damage where possible.\n\n<b>Regarding Weapon Choices:\nFreedom-Sworn: </b>This weapon can be a good option in teams where Layla can consistently trigger reactions.\n\n<b>Regarding Artifact Choices:\nBlizzard Strayer (4) </b>and <b>Emblem of Severed Fate (4): </b>These sets are primarily for increasing Layla's personal damage.",
      },
    },
  },
  mika: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_lance',
          },
          {
            id: 'black_tassel',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'the_catch',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['ocean-hued_clam'],
          ['maiden_beloved'],
          ['+15%_healing_bonus_set', 'emblem_of_severed_fate'],
          ['the_exile'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus', 'Crit Rate%'],
        },
        subStats: ['Energy Recharge', 'HP%', 'Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "is a placeholder section, finalized information will be added soon**\n\nPrioritize Mika's Burst if you value healing",
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
            id: 'kagotsurube_isshin',
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
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['ocean-hued_clam'],
          ['maiden_beloved'],
          ['+15%_healing_bonus_set', '+18%_atk_set'],
          ['noblesse_oblige'],
          ['+20%_energy_recharge', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['ATK%'],
          circlet: ['Healing Bonus', 'ATK%'],
        },
        subStats: ['ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "Qiqi's Burst has an 80 energy cost with her skill not generating any energy until <b>[C1]</b>. Energy Recharge will greatly benefit Qiqi, while her Burst should be kept as a last resort.\nQiqi's Burst allows other characters to maximize DPS field time while offering healing from being off-field. At Ascension 4, her Normal Attack applies the healing talisman onto an enemy with a cooldown of 30 seconds.\n\n<b>Regarding Weapon and Artifact Choices:</b>\n<b>Sacrificial Sword and Tenacity of the Millelith (4): </b>Using <b>Tenacity of the Millelith (4)</b> allows Qiqi to give the team a <b>decent ATK boost</b> while staying in enemy melee reach with Skill active. <b>Sacrificial Sword</b> increases the uptime of her Skill, which in turn increases the uptime of the team's ATK boost. If you find that your Qiqi's heals are often more than enough, you may consider switching her to this artifact set. <b>Do note that other characters might utilize Sacrificial Sword more than Qiqi, such as Xingqiu, Kazuha, etc.\n</b><b>Ocean Hued Clam (4):</b> This ranking assumes <b>Qiqi does not get her Elemental Burst up often</b> and is instead relying mainly on her Elemental Skill for healing. If she is in a team which <b>funds her enough energy particles</b>, or if she acts as the <b>on-field DPS</b>, this set can <b>overtake Tenacity of the Millelith (4).</b>",
      },
    },
  },
  ganyu: {
    roles: {
      'MELT DPS': {
        recommended: true,
        weapons: [
          {
            id: 'hunters_path',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'thundering_pulse',
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
        ],
        artifacts: [['shimenawas_reminiscence'], ['wanderers_troupe'], ['blizzard_strayer', '+18%_atk_set', '+80_em']],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "In some teams and situations, using Ganyu's Elemental Burst can be detrimental to overall damage due to stealing Pyro aura, thus reducing the amount of CAs melting.",
        note: "Ganyu's Level 2 Charged Shot applies two instances Cryo as they do not share the same ICD, which allows you to trigger Melt reaction twice for both damage instances. Charged Attack will be the majority of her damage output while neglecting her Skill/Burst damage contribution for most scenarios.\n\n<b>Regarding Weapon Choices:\nAmos' Bow: </b>This is an excellent weapon for Ganyu since her Level 2 Charge Shot Bloom extends arrow flight duration and you can get 3 stacks of <b>Amos' Bow</b> passive even on point blank range.\n<b>Hamayumi: </b>Due to its passive, this weapon prefers <b>Wanderer's Troupe (4)</b> instead.\n<b>Prototype Crescent: </b>At higher refinement levels with good uptime on its passive, it can potentially be on par with <b>Skyward Harp.</b> However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly. \n\n<b>Regarding Artifact Sets:\nShimenawa's Reminiscence (4)</b> and <b>Wanderer's Troupe (4)</b>:<b> </b>If you are able to squeeze 5 Charged Attacks during the 10 second buff duration,<b> Shimenawa's Reminiscence (4)</b> pulls ahead of <b>Wanderer's Troupe (4).</b> Due to it being very difficult to do, <b>Wanderer's Troupe (4)</b> will usually end up dealing more damage for most players. Note that unless you intend to <b>artifact strongbox</b> <b>Wanderer's Troupe pieces</b>, <b>Shimenawa's Riminiscence (4)</b> remains the better set to farm as the domain is greatly resin efficient.\n\n<b>Regarding Talent Priority:\n</b>Ganyu's Elemental Burst is low priority on a Melt Build since most of the times, you don't cast her burst at all so that it doesn't steal your Melt reaction.\n\n",
      },
      'FREEZE DPS': {
        recommended: true,
        weapons: [
          {
            id: 'polar_star',
          },
          {
            id: 'aqua_simulacra',
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
            id: 'prototype_crescent',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'hamayumi',
          },
        ],
        artifacts: [['blizzard_strayer'], ['blizzard_strayer', '+18%_atk_set']],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "Try to not overcap on Crit Rate (within the range of 25%-45% Crit Rate) since Ganyu's A1 passive only affects her Charged Shot and subsequent Blooms.",
        note: "<b></b>Freeze Ganyu gives a lot of i-frames since you would be spamming Elemental Burst from all of your party members off cooldown. Ganyu's Elemental Burst can deal a ton of damage based on how grouped the enemies are, due to the quadratic scaling on her Elemental Burst.<b>\n\nRegarding Weapon Choices: \nPolar Star: </b>This weapon is much harder to optimize with, due to having a very high Crit Rate stat resulting in your Crit Rate going well above 100%. However, if optimised properly <b>(i.e. very little Crit Rate substats)</b>, it pulls quite far ahead of all the other options.<b>\nAqua Simulacra: </b>Due to the sheer amount of Crit stats you can get from <b>Blizzard Strayer (4)</b>, Ganyu's ascension passive and this weapon itself, you can consider running an ATK% circlet, especially if it has better substats than your Crit DMG one.\n<b>Amos' Bow:</b> In quickswap heavy rotations (Ganyu Mona Venti Diona) where you usually don't do a lot of Charged Shots, this weapon performs worse than the other 5 star options listed.\n<b>Prototype Crescent: </b>Similar to the Melt Build, this weapon at higher refinement levels and good passive uptime can pull ahead of some of the 5 star options such as <b>Thundering Pulse</b> and <b>Skyward Harp.</b> However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly. \n\n<b>Regarding Artifact Sets:\nBlizzard Strayer (4): </b>This set is the go to set for a Freeze team comp due to the huge stats it provides.<b>\n</b>",
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
          ['blizzard_strayer'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'blizzard_strayer', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: [
          'Energy Recharge (until needed)',
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery (on a non Freeze comp)',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "When using her Elemental Burst, place her Elemental Skill in the AoE to taunt and keep enemies inside the zone for constant damage.\n\nMake sure to hit enemies with her skill's initial damage and her explosion damage as they both regen energy for her ult.",
        note: "An Off-field DPS Ganyu shines brightly on a Freeze comp as she has 100% Elemental Burst uptime and her Elemental Burst buffs party members' Cryo Damage. \n\n<b>Regarding Weapon Choices:\nPrototype Crescent: </b>This weapon might pull ahead of some of the other options if you activate the buff before casting Elemental Burst.<b>\nElegy for the End: </b>Offers party-wide Elemental Mastery and ATK buff which is quite nice on reaction heavy team comps.\n\n<b>Regarding Artifact Sets:\nBlizzard Strayer (4): </b>This set offers a huge amount of stats, use this set only if your Ganyu is used on a Freeze team.\n<b>Noblesse Oblige (4):</b> This set provides Ganyu with more utility so that she can buff your whole party's ATK by 20%.",
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
            id: 'redhorn_stonethresher',
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
          },
          {
            id: 'lithic_blade',
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
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'ATK%', 'Flat ATK'],
        talent: ['Normal Attack = Burst', 'Skill'],
        tip: 'Normal combo while no Burst:\nNA Spam > Tap Skill > NA Spam > Tap Skill\n\nBurst combo:\nTap Skill > Burst > 4 NA > Hold Skill > 4 NA\n\nBurst combo that generates more energy at the cost of slightly less DPS:\nTap Skill > Burst > Tap Skill > 4 NA > Dash Cancel > 2 NA > Hold Skill > 2 NA\n\n*NA = Normal Attack',
        note: "Eula's weapon rankings assume that you're running her with a Cryo battery (i.e. Diona) instead of Bennett. She would usually need Energy Recharge from substats depending on what team and Cryo batteries you use.\n\nEula's Elemental Burst does not snapshot. This means that any buffs Eula has upon casting Burst will not be taken into effect if the buff duration expires before the Lightfall Sword hits. \n\n<b>Regarding Weapon Choice:\nRedhorn Stonethresher: </b>This weapon can overtake <b>Wolf's Gravestone</b> in terms of Eula's own damage if team provides enough ATK% buffs, but <b>Wolf's Gravestone</b> can make up the damage difference by buffing team damage.<b>\nSkyward Pride: </b>This weapon is more forgiving towards ER substats. If there is a Cryo battery unit in your team (Diona with <b>Sacrificial Bow </b>or Kaeya with <b>Favonius Sword</b>) or if your team generates enough particles on their own, <b>Skyward Pride</b> loses effectiveness compared to the above options. \n<b>Akuoumaru:</b> This weapon will outperform <b>Luxurious Sea-Lord</b> at higher refinements.\n\n<b>Regarding Artifact Sets:</b>\n<b>Pale Flame (4): </b>This is Eula's optimal artifact set and it relies on having a condition fulfilled in order to outperform <b>Pale Flame (2) Bloodstained Chivalry (2).</b> If you are able to sustain the conditional buff, you will be able to achieve a 50% Physical DMG Bonus + 18% ATK. Without using your Elemental Burst, you can sustain the<b> Pale Flame's 4 piece</b> set bonus because each stack lasts 7s and it refreshes per stack, and Eula's Elemental Skill cooldown is only 4 seconds when doing 1-taps, therefore you can keep the condition up. When using this set, it is recommended to not use Hold Skill cast until your Lightfall Sword is nearly about to end. This restriction is only for players who don't have Eula <b>[C2+]</b>. Please visit the Ability Tips for her combo.\n<b>Pale Flame (2) Bloodstained Chivalry (2): </b>This is a non-conditional, consistent artifact set that provides you a constant 50% Physical DMG bonus. While that by itself is amazing, <b>Pale Flame (4)</b> can outperform this set because it also has another 18% ATK buff and is easily maintained through her low tap skill cooldown.",
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
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'light_of_foliar_incision',
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
            id: 'skyward_blade',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'kagotsurube_isshin',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['blizzard_strayer', '+18%_atk_set'],
          ['+18%_atk_set', '+18%_atk_set'],
          ['blizzard_strayer', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit DMG', 'ATK%'],
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Crit Rate', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "Ayaka's Charged Attack, Elemental Skill and Elemental Burst is able to hit enemies inside sucked inside Venti's Elemental Burst.\n\nHer Elemental Burst also stays in place on frozen enemies and slightly knocks enemies away when they're not frozen.",
        note: "Kamisato Ayaka is a pretty straightforward DPS that <b>deals most of her damage from her Elemental Burst</b>. She has very high scalings on her burst at the cost of it being 80 energy. You will likely need<b> another Cryo battery on the team </b>to provide energy for her (Diona, Kaeya, Rosaria, etc). She has a <b>special dash</b> (like Mona) and after she dashes, she will get a Cryo infusion on her Normal Attacks. Ensure you always have this bonus active to maximise your rotation damage.\n\n<b>Regarding Main Stats Priority:\n</b>Circlet main stat will be dependant on your overall stats, depending on your overall stats, one can be better than the other. Since Ayaka is able to get a lot of Crit Value from <b>Blizzard Strayer (4)</b> set, ascension passive, and also possibly weapons, ATK% circlets can be competitive to Crit ones, it also has a better drop rate, so don't throw away your good ATK% circlets.\n\n<b>Regarding Weapon Choices:</b>\n<b>Primordial Jade Cutter:</b> With <b>Blizzard Strayer (4)</b> and Cryo Resonance, this weapon overcrits, so try to avoid getting Crit Rate substats.\n<b>Aquila Favonia:</b> While <b>Aquila Favonia</b> has Physical Damage% as a main stat, which is basically useless on Ayaka, it is still a good statstick as it has a high base ATK and ATK% buff from the passive, however, it's not a huge upgrade over the other 4 star options and there might be a character which can utilize this weapon better (such as Bennett).\n<b>Skyward Blade: </b>The Energy Recharge main stat provided from this sword makes Ayaka comfortable in terms of having a good burst uptime, try to avoid getting Energy Recharge substats since the weapon already provides you with enough Energy Recharge.\n<b>Amenoma Kageuchi: </b>Lowers Ayaka's Energy Recharge requirement which allows her to allocate some of her Energy Recharge substats to other offensive substats. This weapon is also free and craftable while being competitive with other 4 star and even some 5 star weapons as well on the list.\n<b>Blackcliff Longsword: </b>Due to Ayaka's burst snapshotting, her burst is unable to benefit from the ATK buff from this weapon's passive on the first rotation (since you cast it immediately before defeating an opponent).\n<b>Harbinger of Dawn: </b>A good Crit statstick if you can keep the requirements up (having >90% HP).\n\nCrit Rate loses value here assuming you're running Blizzard Strayer (4), if you're not using that artifact set, then it has the same priority as Crit DMG (You still want to aim for 1:2 ratio in the end)",
      },
    },
  },
  aloy: {
    roles: {
      'BURST SUPPORT': {
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
          ['noblesse_oblige', 'blizzard_strayer', '+80_em', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "<b></b>Aloy is much preferred as a Burst Support over Main DPS as getting coil stacks for her Cryo infusion can be quite unreliable.<b> Aloy needs 4 coil stacks to get the Cryo infusion and you can only get 1 stack every 0.1 seconds</b> which is quite hard to do considering the Bomblets are scattered all over the place. One thing to note regarding Aloy's coil stacks is that <b>she can still get coil stacks even when she's off-field.</b>\n\nAloy is very niche as she only performs well in certain comps and even then, she's still completely replaceable by other characters.<b> She can be utilized on a Freeze team </b>where she can be a battery and nuke at the same time since she provides 5 Cryo particles on her Elemental Skill. <b>She can also be utilized on a Melt team</b> where you can melt her Elemental Burst for quite a decent amount of damage.\n\n<b>Regarding Weapon Choice:</b>\n<b>Polar Star: </b>Forcing to get <b>Polar Star</b> stacks isn't worth due to consuming extra time to get those stacks.\n<b>The Stringless: </b>Placement was considering Aloy is used on a Reverse Melt team. On Reverse Melt Aloy <b>Stringless</b>, especially at higher refinement levels, can pull ahead of <b>Thundering Pulse.</b>\n<b>Prototype Crescent: </b>Assumes the passive is active by proccing a weak point shot. This weapon especially at higher refinement levels can be as good as <b>Skyward Harp.</b>\n<b>Sacrificial Bow: </b>A pretty decent option to make Aloy a Cryo battery as her Elemental Skill provides 5 Cryo particles.\n\n<b>Regarding Artifact Sets:</b>\n<b>Blizzard Strayer (4): </b>This artifact set is best used on a Freeze-focused Aloy as it provides a ton of Crit Value.\n<b>+80 EM set (2): </b>This artifact set bonus only benefits a Melt-focused Aloy, Elemental Mastery provides nothing on a Freeze Aloy.\n<b>Noblesse Oblige (4): </b>Aloy is one of the best <b>Noblesse Oblige (4)</b> holders since she has low energy requirements and cooldown for her Elemental Burst.\n\n<b>Regarding Artifact Main Stat and Substats Priority: </b>\n<b>Elemental Mastery </b>is only an option if your Aloy is played on a <b>Reverse Melt team</b> as it provides nothing to a Freeze Aloy.",
      },
    },
  },
  shenhe: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'calamity_queller',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'wavebreakers_fin',
          },
          {
            id: 'missive_windspear',
          },
          {
            id: 'prototype_starglitter',
          },
        ],
        artifacts: [['noblesse_oblige'], ['+18%_atk_set', '+18%_atk_set', 'emblem_of_severed_fate']],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['ATK%'],
          circlet: ['ATK%'],
        },
        subStats: ['ATK%', 'Energy Recharge', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "Shenhe is a Support for Cryo characters, capable of providing damage buffs from her Elemental Skill and dealing damage while providing Cryo and Physical resistance shred from her Elemental Burst. Her <b>Elemental Skill gives a few stacks of additional flat damage bonus to all nearby party members (5 stacks on Tap and 7 stacks on Hold)</b>. This additional flat damage bonus <b>only works on Cryo attacks</b>, so characters who don't use Cryo attacks don't benefit from Shenhe's Elemental Skill, do note that <b>Cryo infusion from Anemo characters does act as a Cryo attack, so it benefits from Shenhe's Elemental Skill</b>. Another thing to note is that <b>the additional flat damage bonus Shenhe provides uses Shenhe's current ATK, so it doesn't snapshot</b>.\n\n<b>Regarding Weapon Choices:\nCalamity Queller:</b> The passive of this weapon works perfectly with Shenhe's Elemental Skill because it's dynamic. This weapon also has high Base ATK which makes ATK% substats really effective.\n<b>Engulfing Lightning:</b> This weapon provides Energy Recharge and converts Energy Recharge to ATK, which benefits Shenhe a lot.\n<b>Vortex Vanquisher:</b> This weapon's passive can't be stacked off-field, but it's still an ATK stat stick which provides Shenhe with a lot of ATK.\n<b>Favonius Lance: </b>With this weapon, it is better to have some Crit Rate on Shenhe for the weapon passive to proc. (Do note that Cryo Resonance provides 15% Crit Rate on Cryo-imbued enemies, so the need for Crit Rate on Shenhe is lowered)\n\n<b>Regarding Main Stats Priority:\n</b>If you're equipping an ATK% weapon, try to aim for an Energy Recharge sands and vice versa.",
      },
    },
  },
  sucrose: {
    roles: {
      'EM BUILD': {
        recommended: true,
        weapons: [
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'hakushin_ring',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'favonius_codex',
          },
        ],
        artifacts: [['viridescent_venerer'], ['instructor'], ['+80_em', '+80_em']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG'],
        talent: ['Skill', 'Burst'],
        tip: "When utilized as a Viridescent Venerer (4) artifact set holder, make sure you don't immediately swap away after casting Skill/Burst, you need to be on-field when the swirl reaction happens for you to trigger the 4-set effect.",
        note: "Sucrose's Ascension 4 Talent boosts the entire team's EM by 20% of Sucrose's total EM, this is why you want to stack as much Elemental Mastery as possible in her artifacts. As a support, most of Sucrose's value lies on her Ascension 1 and 4 talents, hence leveling her other talents (Normal Attack, Skill, Burst) is not required.\n\n<b>Regarding Weapon Choices: </b>\n<b>Thrilling Tales of Dragon Slayers: </b>This weapon does not provide any EM, however it overtakes the other weapons on the list when it comes to buffing your team.<b> It offers 48% ATK boost to the character you swap to </b>which is equivalent to 1 main stat. This buffs your DPS more compared to <b>Sacrificial Fragments</b> which gives ~44EM, equivalent to only 2 substats.<b>\nHakushin Ring: </b>This weapon is a good option for teams where Sucrose can <b>swirl Electro</b> to trigger its damage-boosting passive. In Electro-Charged teams, she can buff Hydro DMG% as well.\n<b>Favonius Codex</b>: This weapon can be useful if you<b> value the extra energy generation from the passive.</b> You may need to get a few Crit Rate substats to trigger the passive reliably.\n\nThere are some team compositions in which Sucrose's Elemental Mastery is not a priority, such as Freeze teams or an Anemo battery for Xiao. In such situations it's better for Sucrose to use <b>Thrilling Tales of the Dragon Slayers.</b>\n\nSucrose's Talent Levels are not a necessity.",
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
            id: 'favonius_greatsword',
          },
          {
            id: 'katsuragikiri_nagamasa',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'forest_regalia',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'bloodtainted_greatsword',
          },
        ],
        artifacts: [['viridescent_venerer'], ['noblesse_oblige'], ['emblem_of_severed_fate', '+15%_healing_bonus_set']],
        mainStats: {
          sands: ['Energy Recharge', 'Elemental Mastery'],
          goblet: ['Elemental Mastery', 'ATK%'],
          circlet: ['Healing Bonus', 'Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Elemental Mastery', 'ATK%'],
        talent: ['Burst', 'Skill'],
        tip: 'Use hold Skill then immediately press it to generate more particles.',
        note: "Sayu does more damage with EM builds and heals more with ATK hybrid builds, Healing Bonus circlet's can be used for better heals while maintaining respectable damage. Note that Sayu wants a large amount of Energy Recharge when used as the only Anemo slot on the team.\n\n<b>Regarding Weapon Choices:</b>\n<b>Wolf's Gravestone:</b> This is a universal claymore that is capable of buffing your teammates along with providing more healing in Sayu's case. It is best used once you achieve your ER threshold.\n<b>Forest Regalia</b>: When used in its niche with aggravate teams it can outpeform <b>Katsuragikiri Nagamasa.</b> Outside of that its just a Energy Recharge% stat stick.\n\n<b>Regarding Artifact Sets:\nViridescent Venerer (4):</b> The bread and butter artifact set for Anemo units, this set provides the ability to shred the enemy's elemental resistance while also buffing Sayu's Swirl damage output.",
      },
    },
  },
  shikanoin_heizou: {
    roles: {
      'ANEMO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'kaguras_verity',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'solar_pearl',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['desert_pavilion_chronicle'],
          ['+15%_anemo_dmg_set', '+18%_atk_set', '+80_em'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Anemo DMG'],
          circlet: ['Crit Rate', 'Crit DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: '',
        note: "Shikanoin Heizou's Anemo DPS build is roughly equal to his Elemental Mastery build assuming he <b>isn't being used in an Electro-Charged team</b>, He has very <b>low Energy Recharge needs.</b> At <b>[C4] </b>he can run <b>100%</b> Energy Recharge.\n\n<b>Regarding Weapon Choices:</b>\n<b>Lost Prayer to the Sacred Winds:</b> In teams where Shikanoin Heizou and <b>Bennett are used in the same team</b>, this weapon is better than <b>Skyward Atlas</b>.\n\n<b>Regarding Artifact Sets:\nViridescent Venerer (4):</b> This is both Shikanoin Heizou's best personal damage set, and his best set for supporting the team.",
      },
      'EM DPS': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'kaguras_verity',
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
        ],
        artifacts: [['viridescent_venerer'], ['noblesse_oblige']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'ATK%', 'Energy Recharge', 'Crit Rate'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: '',
        note: 'Shikanoin Heizou does not get the same benefits from an EM build as other anemo users do. He still has to level his talents, and allocate <b>substats into offensive substats </b>such as attack and crit to equal Anemo DPS. However it is notiably better than Anemo DPS build if used in Electro-Charged teams.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige (4): </b>Only use this set if you already have a <b>Viridescent Venerer (4)</b> user on your team',
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'hakushin_ring',
          },
          {
            id: 'prototype_amber',
          },
        ],
        artifacts: [['viridescent_venerer'], ['instructor'], ['noblesse_oblige']],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Anemo DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'ATK%', 'Energy Recharge', 'Crit Rate'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: '',
        note: "Support Shikanoin Heizou forgoes his personal damage for support capabilites. However, <b>none of Heizou's support abilities are dependant on his stats </b>and instead comes in the form of a flat 80 Elemental Mastery to all party members. He can run <b>any artifacts </b>to help his DPS.\n\n<b>Regarding Weapon Choices:\nHakushin Ring: </b>In Electro-Charged teams, this can be used to buff both Anemo and Electro damage, and scales well with refines. It is recommended to run Anemo DMG based artifacts on this build.\n<b>Prototype Amber: </b>In teams where there is no healer, Shikanoin Heizou can use this weapon to help the team's survivability.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige/Instructor (4):</b> Only use this set if you already have a <b>Viridescent Venerer (4)</b> user on your team",
      },
    },
  },
  faruzan: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_warbow',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'end_of_the_line',
          },
          {
            id: 'fading_twilight',
          },
          {
            id: 'sacrificial_bow',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['noblesse_oblige'],
          ['emblem_of_severed_fate'],
          ['tenacity_of_the_millelith'],
          ['emblem_of_severed_fate', '+20%_energy_recharge'],
        ],
        mainStats: {
          sands: ['Energy Recharge'],
          goblet: ['Anemo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate', 'Crit DMG', 'ATK%', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'Regarding Optimal Rotations\n\nFor funneling particles to Faruzan:\nSkill --> Charged Shot --> Burst\n\nFor funneling particles to other units:\nSkill --> Burst --> Charged Shot\n\nAt C6 bear in mind the Charged shot portion of the rotation no longer becomes necessary since your burst will start activating the Pressurized Collapses instead.',
        note: "As the <b>premier Anemo support </b>unit for Anemo dps based teams, <b>Faruzan combines both high Anemo damage buffing with Anemo resistance shredding</b> to become a cornerstone of any team that wants to focus on Anemo damage. Though building her means <b>primarly focusing </b>on dealing with her <b>high energy requirements</b>.\n\n<b>Regarding Weapon Choices:</b>\n<b>Elegy for the End:</b> Usually only a better option at <b>higher constellation levels such as [C6]</b> where her energy needs can be met without <b>Favonius passive particles</b>.\n<b>Sacrificial Bow:</b> It's worth mentioning that the <b>extra Pressurized Collapse from a second E</b> wont give you any extra particles if it's within her <b>5.5 second particle generation cooldown</b>.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige (4):</b> This is her best option in teams that either won't benefit significantly from <b>Viridescent Venerer (4)</b> shred, or teams that already have another unit holding the aforementioned set.\n<b>Tenacity of the Millelith (4):</b> This has similar usage cases to <b>Noblesse Oblige (4)</b>, except in that it requires <b>Faruzan C6 for improved uptime through extra Pressurized Collapse activations</b>.\n<b>Emblem of Severed Fate (4):</b> This set will give <b>Faruzan</b> her best personal damage output, assuming the team is already running <b>Viridescent Venerer (4)</b>. Also if you're willing to invest more time farming substats it can potentially give you more <b>Energy Recharge</b> than running <b>The</b> <b>Exile (2)</b>.\n\nCrit Rate Only assumes higher priority than Crit DMG when using Favonius Warbow",
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
        artifacts: [['viridescent_venerer'], ['+15%_anemo_dmg_set', '+80_em', 'noblesse_oblige', '+18%_atk_set']],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%', 'Energy Recharge'],
          goblet: ['Elemental Mastery', 'Anemo DMG'],
          circlet: ['Elemental Mastery', 'Crit Rate', 'DMG'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "This section is dedicated to utilising the Anemo Traveler's Elemental Skill / Burst. Due to how little field time this playstyle takes, the Traveler can also fulfill the role of a quickswap style Sub-DPS.\nAnemo Traveler can require <b>a significant amount of Energy Recharge.</b>\n\n<b>Regarding Weapon Choices:</b>\nAnemo Traveler can either go for a <b>full Elemental Mastery </b>build or a <b>full ATK/Crit</b> build without much difference in damage. The weapon rankings listed here will not change much between the two builds.\n<b>Sacrificial Sword:</b> This weapon's ranking assumes you make use of the passive Elemental Skill reset, however doing so will require you to <b>stay onfield for a much longer period of time which may not be ideal sometimes.</b>\n<b>Amenoma Kageuchi:</b> This weapon <b>reduces your ER% requirements to depending on refinement.</b> At <b>[R5]</b>, this weapon will be <b>better than Sacrificial Sword.</b>\n<b>Favonius Sword:</b> Although this weapon does not provide much damage, <b>the Energy generated by the passive can sometimes be more beneficial to your team.</b> Make sure to build some amount of Crit Rate to reliably trigger the passive.\n\nCrit Rate / DMG will have higher priority for a full Crit build\nFor an EM-focused build, upgrading Traveler's talent levels isn't a necessity.",
      },
    },
  },
  jean: {
    roles: {
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
            stack: 5,
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
          ['+15%_anemo_dmg_set', '+18%_atk_set'],
          ['+15%_anemo_dmg_set', 'emblem_of_severed_fate'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', '+15%_anemo_dmg_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge', 'Elemental Mastery'],
          goblet: ['Anemo Damage', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst = Skill'],
        tip: '',
        note: "Jean's Elemental Skill can be used to fling smaller mobs into the air to deal fall damage, and to stagger bigger ones. <b>Her healing scales with ATK.\n</b>\n<b>Regarding Weapon Choices:\nAmenoma Kageuchi: </b>This weapon can lower your ER% requirements, depending on the number of stacks on the passive and the refinement of this weapon. As such, at higher refines / more stacks on the passive, this weapon can perform better than <b>Skyward Blade,</b> while at lower refines / less stacks, it can perform worse.<b>\nFreedom-Sworn: </b>The ranking here only assumes Jean's personal damage and not the utility it gives. If you want to furthermore buff your main DPS, you can give this sword to Jean as she can trigger <b>Freedom-Sworn's</b> skill relatively easily since Anemo is always the trigger for a Swirl reaction. \n<b>Lion's Roar: </b>Depending on passive uptime, it can be ranked over <b>Favonius</b> <b>Sword</b> (at 50% uptime) and even <b>Aquila</b> <b>Favonia </b>(at 100% uptime).\n\n<b>Regarding Artifact Sets:\nViridescent Venerer (4): </b>The bread and butter for Anemo characters in general, as it is <b>commonly used for the 40% elemental resistance shred.\nNoblesse Oblige (4):</b> Another option for providing utilities to the team. This set gives a 20% partywide ATK boost after Jean casts her Elemental Burst.\n<b>Ocean-Hued Clam (4): </b>The best set for Jean's personal damage, as the damage it deals scales with Jean's burst healing. However, because Jean's total damage output is on the low end, it is generally recommended to prioritize utility options such as <b>Noblesse Oblige (4)</b> or <b>Viridescent Venerer (4)</b> over this set.\n\n<b>Regarding Main Stats Priority:</b>\nElemental Mastery should only be used <b>when Jean is paired with Bennett</b>, as her burst ticks will swirl the self applied Pyro from Bennett's burst, acting as a damage source and Pyro application. Because of this, high burst uptime is required and so weapons with EM and ER passives are preferred. <b>(Freedom-Sworn, Skyward Blade,  Favonius Sword, Sacrificial Sword, Iron Sting, Amenoma Kageuchi)\n</b>\n<b>Regarding Talent Priorities: \n</b>If you prefer more damage than healing, prioritize Elemental Skill over Elemental Burst since it scales better.\nFor Support Jean, you can either go for more ATK for stronger heals, but relatively lower Burst uptime, or more ER for lower heals, but higher Burst uptime. Choosing between these two is up to personal preference, although if another Anemo character is on the team, Jean has very little energy problem and can potentially go full Sub DPS build.\n\n",
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
            id: 'favonius_warbow',
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
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on Swirl first.(E > Q to avoid this issue)\n\nYou can infuse elements onto Venti's Burst if you walk up with an element status on you. (e.g. Bennett Burst > Venti Burst > Walk up to infuse Pyro)\n\nCheck out  this link  to see which characters can hit the enemies sucked and ragdolled in Venti's burst.",
        note: "This build focuses on damage over ER because of his ER ascension stat. This weapon order is in the assumption of <b>EM</b> <b>Venti</b>, as Crit Venti's damage potential is limited to either extremely high investment or single target situations. <b>Consider reading the In-depth Guide from KQM if you're interested in a Crit-focused build.</b>\n\n<b>Regarding Weapon Choices:\nFavonius Warbow: </b>While terrible for personal damage, this weapon allows Venti to provide more energy for his teammates, while also covering his ER needs. Finding Crit Rate in substats is recommended for consistent passive procs.\n<b>Skyward Harp:</b> Due to EM build assumptions, the stats offered aren't very valuable. \n<b>Elegy for the End:</b> The ATK buff of<b> Elegy for the End</b> <b>DOES NOT</b> buff Venti's burst if Venti is the one equipping the bow, but the EM buff affects Venti's Swirl reaction. This is due to Venti's burst snapshotting his stats (excluding EM toward transformative reactions such as Swirl) at the time of cast. While an <b>[R1]</b> <b>Elegy for the End</b> yields slightly lower Venti damage compared to an <b>[R5]</b> <b>Stringless</b> (~7% assuming 50% Elegy buff uptime), it provides a party-wide ATK and EM buff which can be better in terms of total team damage and comfortable ER.\n\nFor an EM-focused build, upgrading Venti's talent levels isn't a necessity.",
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
            id: 'calamity_queller',
          },
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'missive_windspear',
            refine: [5],
          },
          {
            id: 'blackcliff_pole',
            stack: 1,
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
        ],
        artifacts: [
          ['vermillion_hereafter'],
          ['desert_pavilion_chronicle'],
          ['+15%_anemo_dmg_set', '+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Anemo DMG', 'ATK%'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Regarding Xiao's Optimal Skill Rotation:\nSkill -> Skill -> Burst -> Plunge Combo\n\nRegarding Xiao's Plunge Combo:\nBest combo for Xiao when fighting a single target:\nPlunge -> Normal Attack -> Charged Attack -> Plunge\n\nBest combo for Xiao when fighting multiple enemies:\nPlunge -> Normal Attack -> Plunge",
        note: "<b></b>Xiao has issues with Energy regeneration because <b>he cannot generate any particles with his Elemental Skill while his Burst is active</b>, so it is not suggested to use his Elemental Skill during Elemental Burst.\nStart off a fight by casting the skill of your Anemo Battery and then casting his skill twice then cast your burst immediately. You will want to be half way through your burst animation before the particles reach you, so this way you can start off your burst with a portion of the energy gauge already filled.\n<b>You'll want to pair Xiao with another Anemo character </b>(Venti, Sucrose, Jean or Anemo Traveler) to help him gain energy while his Elemental Burst is on cooldown. Xiao's Elemental Burst ends when you swap to another character. Although he has two charges of his Elemental Skill, only ONE charge comes back per cooldown.\n\n<b>Regarding Weapon Choices:</b> With a proper Anemo battery (e.g. Sucrose), Xiao needs a small amount of Energy Recharge to maintain a high burst uptime. In these scenarios, unless there are no ER from substats, you should always go for a non-ER weapon as it will result in more damage.\n<b>Calamity Queller: </b>This weapon has a really high Base ATK, which means you benefit more from ATK% buffs (e.g. <b>Thrilling Tales of the Dragon Slayers</b>) if compared with other weapons. \n\n<b>Regarding Artifact Sets: \nDesert Pavilion Chronicle (4): </b>If Xiao has a weapon with <b>low base attack </b>in a team with a lot of external ATK buffs like <b>Bennett or Thrilling Tales of the Dragons Slayers </b>this artifact set can be equal to or better than <b>Vermillion Hereafter (4)\n</b>Prioritize <b>+15% Anemo DMG set</b> <b>(2)</b> over the other<b> +18% ATK set (2)</b> sets if there are external ATK% buff sources on your team. \n\n<b>Regarding Artifact Main Stats: </b>Anemo DMG% goblets are recommended for Xiao. ATK% goblets serve as a good alternative for him.",
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
            id: 'favonius_sword',
          },
          {
            id: 'xiphos_moonlight',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'toukabou_shigure',
            refine: [5],
          },
          {
            id: 'amenoma_kageuchi',
            refine: [5],
          },
          {
            id: 'sapwood_blade',
          },
          {
            id: 'amenoma_kageuchi',
            refine: [1, 4],
          },
          {
            id: 'dark_iron_sword',
          },
          {
            id: 'skyrider_sword',
          },
        ],
        artifacts: [['viridescent_venerer'], ['instructor'], ['thundering_fury']],
        mainStats: {
          sands: ['Elemental Mastery', 'Energy Recharge'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "The element which is absorbed by Kazuha's elemental burst follows the priority of Pyro > Hydro > Electro > Cryo, and can be absorbed from both the active character and enemies. (i.e. Standing in Bennett 's Elemental Burst will result in Kazuha's Elemental Burst infusing Pyro as Bennett's Elemental Burst applies Pyro to the active character)",
        note: "<b></b>Kazuha's 4th Ascension Passive encourages players to maximise Elemental Mastery in order to maximise his utility. \n\n<b>Similar to Venti, due to the EM buffs, a triple EM build will out-damage a regular ATK-EM/Anemo/Crit build as long as there are 2+ enemies due to the amount of Swirls involved. Because of this, an ADC (Attack/Damage/Crit) build isn't recommended unless he is in a team whereby he cannot make use of his A4 passive or Swirls. (i.e. mono Anemo/Geo teams)\n</b>\n<b>Regarding Weapon Choices: \n</b>The ultimate goal is to try<b> stack as much EM while getting enough ER for a consistent Burst uptime</b>. Having <b>Sacrificial Sword</b> or a second Anemo character in the team will also help reduce the needs for ER and prioritize EM substats more.\n<b>Favonius Sword: </b>With this weapon, try to aim for some Crit Rate stats to trigger the weapon passive reliably.\n<b>Xiphos' Moonlight:</b> In teams where you can meet energy requirements without needing the extra particles from <b>Favonius Sword</b> this is a better choice with stronger personal damage and buffing. Also at high refinements <b>[R4-R5]</b> it starts beating <b>Favonius Sword</b> in team energy generation too.\n<b>Iron Sting: </b>This weapon will yield the joint highest upfront EM and teamwide buff if compared to the other 4 star options,<b> if you manage to meet his energy needs or simply don't need more than one rotation, this would be the better option if compared to the Energy Recharge weapons.\nToukabou Shigure: </b>This weapon performs very similarly to<b> Iron Sting </b>in a <b>Swirl</b> focused build even at higher refinements since its passive does not effect <b>Swirl</b> damage.<b>\nAmenoma Kageuchi: </b>At <b>[R5]</b>, <b>Amenoma Kageuchi</b> needs no extra ER, and can focus building entirely EM. This makes it roughly equal to <b>Iron Sting.\nSapwood Blade: </b>Only really viable at high refinement in specific Dendro teams where you can trigger Dendro reactions usually through swirling Electro/Hydro on enemies with Dendro applied to them (most consistently done in Aggravate reaction comps).\n<b>\nRegarding Artifact Sets:\nThundering Fury (4): </b>This is a niche build that excels <b>only in AoE situations and with specific teams.</b> Those teams include an <b>off-field</b> <b>Hydro and Electro support to allow Kazuha to constantly trigger the 4pc effect and spam his Elemental Skill, aswell as another Anemo support to hold the Viridiscent Venerer (4) set.</b> Such teams can be <b>Kazuha + Kokomi + Fischl + Venti</b>, with <b>Barbara and Sucrose</b> being weaker replacements for Kokomi and Venti. This team triggers <b>multiple fall damage instances against enemies that can be Crowd Controlled by Kazuha.</b> Fischl can use <b>The Viridiscent Hunt</b> bow to allow for more fall damage instances. <b>**NOTE: This team performs very poorly in pure single target situations.</b>\n\nPrioritize Energy Recharge if his Energy Requirements are not met yet.\nFor an EM-focused build, upgrading Kazuha's talent levels isn't a necessity. Note that upgrading Kazuha's NA talent increases the damage of his plunge attacks.",
      },
    },
  },
  wanderer: {
    roles: {
      'DPS (WITHOUT BENNETT)': {
        recommended: true,
        weapons: [
          {
            id: 'tulaytullahs_remembrance',
          },
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
            id: 'kaguras_verity',
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
            id: 'mappa_mare',
          },
        ],
        artifacts: [
          ['desert_pavilion_chronicle'],
          ['shimenawas_reminiscence'],
          ['echoes_of_an_offering'],
          ['+15%_anemo_dmg_set', '+15%_anemo_dmg_set', '+18%_atk_set', '+18%_atk_set'],
          ['blizzard_strayer'],
          ['lavawalker'],
          ['viridescent_venerer'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Anemo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Elemental Mastery', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "Desert Pavilion and Signature Weapon Rotation: (Q) E CA (N3 repeat)\nSignature Weapon Rotation (non Desert Pavillion): (Q) E (N3 repeat) \nDesert Pavillion Rotation: (Q) E CA (N2C repeat)\nOther Artifact Sets Rotation: (Q) E (N2C repeat)\nShimenawa's Reminiscence Rotation: E (N2C repeat) (Q)\nSwirl Driver Rotation: E (N3C repeat)",
        note: "Wanderer focuses on doing damage by activating his elemental skill and performing boosted normal attacks. It should be noted that in this state, he does not have knockback resistance so a <b>shielder</b> or other form of knockback immunity is recommended. <b>It is not worth building ER to burst every rotation unless Wanderer is C2.</b> Instead, bursting every other rotation is preferred.\n\n<b>Regarding Weapon Choices:\nMemory of Dust: </b>This weapon can pull farther ahead than other options if Wanderer is shielded. If shielded, it maintains its ranking without Bennett, and performs better than <b>The Widsith </b>with Bennett.\n<b>Dodoco Tales [R5]:</b> This weapon uses a different rotation of <b>E N1 CAx6 N1 CAx6</b> to maximize its passive. \n<b>The Widsith:</b> Because Wanderer doesn't focus on Swirl damage, this weapon can be inconsistent if you get the EM buff. \n\n<b>Regarding Artifact Sets:\nShimenawa's Reminiscence (4): </b>If Wanderer is <b>C2 or higher </b>it is <b>not reccomended to run this set</b>.\n<b>Echoes of an Offering (4):</b> If your ping is above 100, it is not recommended to run this set specifically\n<b>Blizzard Strayer (4):</b> This set synergizes well with the 20% Crit Rate that Wanderer gets from swirling Cryo. It is only recommended if you have close to 100% uptime on Freeze, which requires very specific teams. Despite this, with 100% Freeze uptime, this set is still <b>worse than Desert Pavilion Chronicle (4).\nLavawalker (4):</b> In teams with consistent Pyro application, this set is about equal to <b>Echoes of an Offering (4).\nViridescent Venerer (4): </b>In teams where the majority of the damage share is <b>not linked to Wanderer, and there is no other viable holder of the set, </b>he may use <b>Viridescent Venerer (4)</b>.\n\nIF WANDERER IS C2, PRIORITIZE BURST OVER SKILL",
      },
      'DPS (WITH BENNETT)': {
        recommended: true,
        weapons: [
          {
            id: 'tulaytullahs_remembrance',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'kaguras_verity',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'dodoco_tales',
            refine: [5],
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'mappa_mare',
          },
        ],
        artifacts: [
          ['desert_pavilion_chronicle'],
          ['shimenawas_reminiscence'],
          ['echoes_of_an_offering'],
          ['+15%_anemo_dmg_set', '+15%_anemo_dmg_set', '+18%_atk_set', '+18%_atk_set'],
          ['blizzard_strayer'],
          ['lavawalker'],
          ['viridescent_venerer'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Anemo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Elemental Mastery', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "Desert Pavilion and Signature Weapon Rotation: (Q) E CA (N3 repeat)\nSignature Weapon Rotation (non Desert Pavillion): (Q) E (N3 repeat) \nDesert Pavillion Rotation: (Q) E CA (N2C repeat)\nOther Artifact Sets Rotation: (Q) E (N2C repeat)\nShimenawa's Reminiscence Rotation: E (N2C repeat) (Q)\nSwirl Driver Rotation: E (N3C repeat)",
        note: "Wanderer focuses on doing damage by activating his elemental skill and performing boosted normal attacks. It should be noted that in this state, he does not have knockback resistance so a <b>shielder</b> or other form of knockback immunity is recommended. <b>It is not worth building ER to burst every rotation unless Wanderer is C2.</b> Instead, bursting every other rotation is preferred.\n\n<b>Regarding Weapon Choices:\nMemory of Dust: </b>This weapon can pull farther ahead than other options if Wanderer is shielded. If shielded, it maintains its ranking without Bennett, and performs better than <b>The Widsith </b>with Bennett.\n<b>Dodoco Tales [R5]:</b> This weapon uses a different rotation of <b>E N1 CAx6 N1 CAx6</b> to maximize its passive. \n<b>The Widsith:</b> Because Wanderer doesn't focus on Swirl damage, this weapon can be inconsistent if you get the EM buff. \n\n<b>Regarding Artifact Sets:\nShimenawa's Reminiscence (4): </b>If Wanderer is <b>C2 or higher </b>it is <b>not reccomended to run this set</b>.\n<b>Echoes of an Offering (4):</b> If your ping is above 100, it is not recommended to run this set specifically\n<b>Blizzard Strayer (4):</b> This set synergizes well with the 20% Crit Rate that Wanderer gets from swirling Cryo. It is only recommended if you have close to 100% uptime on Freeze, which requires very specific teams. Despite this, with 100% Freeze uptime, this set is still <b>worse than Desert Pavilion Chronicle (4).\nLavawalker (4):</b> In teams with consistent Pyro application, this set is about equal to <b>Echoes of an Offering (4).\nViridescent Venerer (4): </b>In teams where the majority of the damage share is <b>not linked to Wanderer, and there is no other viable holder of the set, </b>he may use <b>Viridescent Venerer (4)</b>.\n\nIF WANDERER IS C2, PRIORITIZE BURST OVER SKILL",
      },
    },
  },
  ningguang: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'kaguras_verity',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'dodoco_tales',
          },
          {
            id: 'wine_and_song',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'hakushin_ring',
          },
        ],
        artifacts: [
          ['archaic_petra', 'noblesse_oblige'],
          ['archaic_petra', '+18%_atk_set'],
          ['archaic_petra', 'emblem_of_severed_fate'],
          ['thundersoother'],
          ['lavawalker'],
          ['archaic_petra'],
          ['emblem_of_severed_fate'],
          ['husk_of_opulent_dreams'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "Ningguang's Elemental Skill has a 6 second internal cooldown on generating energy, so for the sake of maintaining Elemental Burst uptime, wait 6 seconds to cast again if you need energy. It also breaks when casted on top of another Geo Structure, you can intentionally use a structure to break your first screen.",
        note: "Due to Ningguang having a really low Base ATK and no ATK conversion mechanics, external ATK buffers such as Bennett is recommended as a support for Ningguang to bump up her ATK stat.\n\n<b>Regarding Weapon Choices:</b>\n<b>Skyward Atlas:</b> Without Bennett, this weapon performs better than <b>Lost Prayer to the Sacred Winds.</b>\n<b>Memory of Dust:</b> Without Bennett, this weapon performs better than <b>Lost Prayer to the Sacred Winds</b> and <b>Skyward Atlas.</b>\n<b>The Widsith:</b> At <b>[R5]</b> this weapon performs better than <b>Kagura's Verity</b> on average.\n<b>Solar Pearl:</b> At <b>[R5]</b> this weapon performs better than <b>The Widsith [R5]</b> and <b>Kagura's Verity.</b> It is recommended to add a Normal Attack before casing Ningguang's other abilities.\n<b>Hakushin Ring:</b> This weapon performs better than <b>Mappa Mare</b> when an Electro character is in the party.\n\n<b>Regarding Artifact Sets:\nEmblem of Severed Fate (2):</b> This set performs worse than other options when Ningguang does not need to build Energy Recharge%.\n<b>Thundersoother (4):</b> This set performs better than <b>Archaic Petra (2) Emblem of Severed Fate (2)</b> if an Electro aura is always present on the enemy.\n<b>Lavawalker (4): </b>This set performs better than <b>Archaic Petra (2) Emblem of Severed Fate (2)</b> if a Pyro aura is always present on the enemy.\n<b>Archaic Petra (4):</b> This set tends to be the best set for overall team damage in many cases. However, <b>Archaic Petra</b> is <b>extremely resin-inefficient</b> to farm and is therefore only recommended to be farmed over time from the <b>artifact strongbox.</b>\n<b>Emblem of Severed Fate (4): </b>This set will perform better than <b>Archaic Petra (2) +18% ATK set (2) </b>if you need the Energy Recharge and you do not use Charge Attacks more than normal.\n<b>Husk of Opulent Dreams (4): </b>This set performs on par with <b>Archaic Petra (2) +18% ATK set (2) </b>so is only recommended <b>if you already own a good set.</b>",
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
            id: 'skyward_pride',
          },
          {
            id: 'whiteblind',
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
          sands: ['DEF%', 'ATK%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'DEF%'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Optimal attack rotation is N1>N2>N3>N4>dash/hop, where N refers to each normal attack in her 4 hit combo. This isn't always feasible due to cast time and N4 covers a lesser AoE than N1-3 (as well as knockback issues), so the recommended rotation is N1>N2>N3>dash/hop.",
        note: "<b>It's recommended to avoid building a DPS Noelle if she's not [C5+].\n</b>Noelle DPS is best optimized at <b>[C6]</b> where she converts an additional 50% DEF into ATK. Her ability to sustain her team with shields, heals and AoE damage makes for a reliable DPS when your team is built around her.\n\n<b>Regarding Weapon Choices:\n[C6] is assumed for this ranking.\nSerpent Spine: </b>When using <b>Husk of Opulent Dreams,</b> <b>Serpent Spine</b> stacks are prioritized over <b>Husk of Opulent Dreams</b> stacks due to their conflicting nature in gaining stacks (Off-field and on-field).\n<b>Skyward Pride: </b>Useful if you are unable to get ER from your substats. Does really well while its passive is active, but falls off in sustained fights. Comfort option that can lose to a high refined <b>Whiteblind</b> with stacks.\n<b>Favonius Greatsword: </b>Only recommended with high refines, as its usefulness scales with its particle generation capabilities. <b>[R5]</b> allows her to self-battery assuming some additional particles from enemies, but a second Geo is always recommended regardless for resonance. \n\n<b>Regarding Artifact Sets:\nHusk of Opulent Dreams (4): </b>Noelle snapshots her DEF on burst cast. To get the full 4 stacks' DEF% boost during your first burst, you need to wait 12 seconds off field before swapping in. In abyss, time spent before the chamber starts still generates stacks.<b>\nRetracing Bolide (4): </b>Optimally offers slightly less damage than <b>Gladiator's Finale (4),</b> but is much easier to farm per resin and can have 100% uptime with crystallise shields. Consider <b>Gladiator's Finale</b> if you don't want to farm for <b>Archaic Petra</b> as Artifact Strongbox is much more effective than elite bosses in terms of artifacts per resin.\n\nATK% sands when below C6 and below Talent Level 9 Burst.",
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
        artifacts: [['the_exile'], ['noblesse_oblige'], ['emblem_of_severed_fate', '+20%_energy_recharge']],
        mainStats: {
          sands: ['Energy Recharge'],
          goblet: ['Geo DMG', 'DEF%'],
          circlet: ['Crit Rate', 'DEF%', 'Healing Bonus*'],
        },
        subStats: ['Energy Recharge', 'DEF%', 'Crit Rate'],
        talent: ['Skill'],
        tip: "[C2] extends the duration of Gorou's Elemental Burst from 9 seconds to 12 seconds if you can obtain the required Crystallize shields. This allows his teammates to gain the 3 Geo 15% Geo DMG% bonus for a longer duration, so it's preferable to use Burst as your last ability before swapping into your DPS.",
        note: "Gorou is a Support character that can give increasing buffs to your party members from his Elemental Skill and Elemental Burst based on the number of Geo characters in your team (capped at 3). Casting his Elemental Skill sets up a banner which gives flat DEF (1 Geo), Interruption Resistance (2 Geo) and Geo DMG% Bonus (3 Geo) for your active character standing inside the banner radius. Casting his Elemental Burst creates a field following the active character which deals periodic damage and offers the same bonuses given by the Skill, destroying any placed banners in the process, it also pulls in nearby Elemental Shards created by Crystallize reactions. Due to his kit focusing on buffing DEF and Geo DMG, he's a specialised support geared towards Geo DPS that scales with DEF, such as Noelle or Itto. He can see niche use at <b>[C6]</b> with other Geo characters as well.\n\n<b>Regarding Weapon Choices:</b>\n<b>Elegy for the End:</b> Elegy offers a helpful ER substat alongside an EM and ATK% buff for your teammates. While not directly useful in teams centered around Noelle or Itto, this could possibly be a good choice for future Geo DPS characters, or in a team which utilizes Geo Resonance.\n\n<b>Regarding Artifact Sets:</b>\n<b>The Exile (4): </b>Casting Elemental Burst regenerates a total of 6 Energy for each of your party member. This set reduces your Energy Requirements by a bit for all of your party members, which can be quite beneficial. Do note that this is a 4 star set so you're potentially missing out on 5 star stat scaling, which is a 34% difference in mainstat value and 25% difference in individual substat value.\n<b>Noblesse Oblige (4): </b>The effectiveness of this set increases if you've already met the ER requirement for Gorou. At that point, you'd no longer need to run the recommended ER% sets, which means you can opt for this instead. \n\n<b>Regarding Artifact Mainstats and Substats Priority:</b>\n<b>DEF% mainstats and substats</b> (and potentially a <b>Healing Bonus</b> mainstat on Circlet) can be considered at<b> [C4]</b> due to being able to heal the active character based on his DEF during burst. This is useful if you plan to use him as a solo healer.\n<b>Crit Rate circlet and substats</b> can be considered when Gorou is using <b>Favonius Warbow</b> to trigger the passive comfortably.\n<b>ER% substats can usually be more important than getting the right mainstat</b>, as Gorou's damage contribution to a team is negligible, while being able to get Energy for his Burst is a lot more important.",
      },
    },
  },
  yun_jin: {
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
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'kitain_cross_spear',
          },
        ],
        artifacts: [
          ['husk_of_opulent_dreams'],
          ['husk_of_opulent_dreams', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['DEF%', 'Energy Recharge'],
          goblet: ['DEF%'],
          circlet: ['DEF%', 'Crit Rate'],
        },
        subStats: ['DEF%', 'Energy Recharge', 'Flat DEF', 'Crit Rate'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "Yun Jin is a Support character for Normal Attack focused characters who can deal off-field damage via her Elemental Burst. Yun Jin's <b>Elemental Burst grants nearby party members 30 stacks of additional flat damage bonus on Normal Attacks which scales with Yun Jin's current DEF</b>. This means that external DEF buffs like from Gorou's Elemental Skill and/or Burst doesn't provide much to Yun Jin since it only buffs active characters and not off-field ones.\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Lance: </b>With this weapon, try to aim for some Crit Rate stats to trigger the weapon passive reliably.\n<b>Kitain Cross Spear:</b> Although the EM mainstat isn't useful for Yun Jin, the <b>passive decreases her Energy Recharge requirements</b> by a lot, especially at higher refinements. <b>It can reduce her ER% reqs depending on refinement. </b>Note that<b> she must cast Elemental Burst first before Skill, as the passive drains 3 energy initially when Skill is cast. </b>This weapon can be left at level 1 while still getting full effect from the passive.\n\n<b>Regarding Artifact Main Stats and Substats Priority:</b>\nCrit Rate should only be considered when Yun Jin is equpping <b>Favonius Lance</b> to reliably proc the passive.",
      },
    },
  },
  traveler_geo: {
    roles: {
      'GEO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'haran_geppaku_futsu',
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
            id: 'skyward_blade',
          },
          {
            id: 'festering_desire',
            refine: [5],
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'archaic_petra'],
          ['archaic_petra', '+18%_atk_set'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', '+18%_atk_set'],
          ['+18%_atk_set', '+18%_atk_set'],
          ['emblem_of_severed_fate', '+18%_atk_set'],
          ['thundersoother', 'lavawalker'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill = Burst'],
        tip: '',
        note: "<b></b>This section is dedicated to utilising the Geo Traveler's Geo Burst damage capabilities. As their Elemental Skill and Burst have high multipliers, short cooldowns, and require very little field time, the Traveler is recommended to be played as a quickswap style Sub-DPS.\nThe weapon ranking is considering KQM standard with Geo Resonance and <b>Noblesse Oblige (4)</b> buff. Read the In-depth Guide for more insight on different scenarios.\n<b>Regarding Weapon Choices:</b> \n<b>Summit Shaper: </b>As this weapon gives so much attack, it suffers greatly from opportunity cost when many <b>ATK buffs </b>are present (i.e. Bennett).\n<b>Lion's Roar: </b>Its placement on this list assume a <b>100% passive uptime</b>. This weapon is only recommended if run with teammates that can maintain a Pyro/Electro aura consistently (i.e. Xiangling, Raiden, Fischl).\n<b>Festering Desire </b>and<b> Skyward Blade</b>: These weapons help in bursting off cooldown, but if you're not having issues with energy, then these weapons falls behind in terms of damage.\n<b>Favonius/Sacrificial Sword: </b>While this weapon is subpar in terms of damage, it can be a good choice for the Traveler to provide more energy to the team. For a <b>Geo only team</b>, <b>Sacrificial Sword</b> would provide slightly more energy, at the cost of a slightly longer rotation.<b>\n\n</b><b>Regarding Artifact Sets:\nEmblem of Severed Fate (4): </b>While this set slightly falls behind the first two in terms of personal damage, it is still recommended to run this set due to how Resin efficient the domain is.<b>\nThundersoother (4) </b>and<b> Lavawalker (4): </b>These sets will provide the highest personal damage<b> only if their 4 piece set effects can be kept active consistently</b> (i.e. with a consistent Pyro/Electro aura from Xiangling/Raiden/Fischl). It is <b>not recommended</b> to farm this set purely for the Traveler as the resin efficiency is poor. <b>\nNoblesse Oblige (4): </b>This set focuses more on providing an ATK buff to the team than the Traveler's personal damage. It can be paired with a <b>Favonius/Sacrificial Sword</b> for the Traveler to provide more utility to the team.",
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
          ['+25%_physical_dmg', '+18%_atk_set'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: ['ATK%', 'HP%'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'HP%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: 'Optimal Physical Rotation:\n<b>Normal Attack until Spear Kick -> Dodge/Jump Cancel -> Repeat\n\n</b>',
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
        artifacts: [['tenacity_of_the_millelith'], ['archaic_petra'], ['deepwood_memories'], ['instructor']],
        mainStats: {
          sands: ['HP%'],
          goblet: ['HP%'],
          circlet: ['HP%', 'Crit Rate'],
        },
        subStats: ['HP%', 'Flat HP', 'Energy Recharge'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "<b>This kind of playstyle is very straightforward; stack as much HP as possible. Prioritize HP scaling polearms such as Black Tassel and artifact sets such as Tenacity of the Millelith (4) to capitalize on Zhongli's Shield. </b>Most of the time, especially on a HP-focused Zhongli, casting Elemental Burst is a DPS loss due to the cast time, which is why you'd only want to cast Elemental Burst for the Crowd Control it offers, and not for damage.\n\nNote that if paired with Xingqiu and/or Beidou, the damage reduction from orbitals from Xingqiu's Elemental Skill and Elemental Burst and/or Beidou's Elemental Burst can be utilized on Zhongli's shield, making it basically unbreakable.\n\n<b>Regarding Artifact Main Stats and Substats Priority:</b>\nCrit Rate should only be considered when Zhongli is equpping <b>Favonius Lance</b> to reliably proc the passive.\n\n<b>Regarding Weapon Choices:\nFavonius Lance: </b>Use this weapon over <b>Black Tassel</b> if you value the team energy (Note that you need to build some amount of Crit Rate if you are running <b>Favonius Lance</b> to trigger the passive)\n\n<b>Regarding Artifact sets:\nArchaic Petra (4):</b> Can be more useful than <b>Tenacity of the Millelith (4)</b> in teams that <b>dont scale as well with ATK buffs or already have another Tenacity of the Millelith holder</b>. Though it can be an awkard set to utlize well without extending rotation times, since the Holder of the set (<b>Zhongli</b> in this case) has to pickup the shard for the buff to take effect.\n<b>Deepwood Memories (4): </b>This set works best in <b>Dendro reaction focused</b> teams <b>(Bloom/Burgeon/Hyperbloom/Spread)</b> that <b>prefer having Deepwood Memories on Zhongli</b> so that they can run more <b>damage focused sets such as Gilded Dreams / Flower of Paradise Lost</b> instead for the <b>highest overall damage gain</b>. That said it means <b>keeping the enemies near your pillar's </b>to have<b> good uptime on the Dendro resistance shred effect</b>, which can be <b>difficult with no grouping abilities</b> in a team.\n<b>Instructor (4): </b>This set is usually only used in a few <b>heavily reaction focused teams,</b> such as <b>Ganyu Melt or Hu Tao Vape,</b> where you're <b>maximising your damage in exchange for a stronger shield</b>. Though Zhongli's shield is still usually <b>more than strong enough even with fewer substat rolls</b> to strengthen it.<b>\n</b>",
      },
      'BURST SUPPORT': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'calamity_queller',
          },
          {
            id: 'the_catch',
            refine: [5],
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'engulfing_lightning',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'missive_windspear',
          },
          {
            id: 'favonius_lance',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'archaic_petra'],
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith'],
        ],
        mainStats: {
          sands: ['ATK%', 'HP%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'HP%', 'Energy Recharge', 'Flat ATK', 'Flat HP'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "Zhongli can be utilized as a Geo Burst damage dealer due to his short Elemental Burst cooldown (12s) and low energy cost (40 Energy). His Elemental Skill Hold Cast (Shield) scales with HP and at Ascension 4, you would unlock a talent that allows your Elemental Burst to scale with 33% of Zhongli's Max HP, making him a great source of Shield and damage. Though in certain teams without either <b>very high investment into his damage </b>or<b> enough time in the rotation to burst without extending rotation times</b> his burst can be a <b>DPS loss</b>.\n\n<b>Regarding Artifact Main Stats:\n</b>ATK sands provides more damage than HP sands, but it does have lesser Shield HP. If you want more Shield HP, you can consider running a HP sands.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige (2) Archaic Petra (2): </b>On lower ER requirements where Zhongli doesn't need to worry about his energy needs, this set pulls ahead of <b>Emblem of Severed Fate (4).</b>\n<b>Noblesse Oblige (4):</b> This set provides Zhongli more utility when casting his Elemental Burst, you can use this set on Zhongli if there is nobody else on the team who's equipping this set.\n<b>Tenacity of the Millelith (4): </b>Just like <b>Noblesse Oblige (4),</b> this set provides Zhongli with more utility if his Elemental Skill hits an enemy. This set also provides Zhongli with stronger shields.",
      },
    },
  },
  albedo: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'cinnabar_spindle',
            refine: [5],
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'primordial_jade_cutter',
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
          sands: ['DEF%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG', 'DEF%'],
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'ATK%', 'Energy Recharge', 'Flat DEF', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: "Albedo's Elemental Skill particle generation is completely RNG like Zhongli, but with better odds.",
        note: "Albedo is a character that can summon a Geo Construct from his Elemental Skill which deals damage on a 2 second interval whenever enemies in the field are damaged. His Elemental Burst provides 125 EM to the party, which is good on teams that rely on amplification reactions, such as Vaporize. It is worth noting that since his stat priority is focused on DEF (Elemental Skill scaling), you might want to skip casting Elemental Burst if your team doesn't benefit from the 125 EM buff. Another option is to build him with ATK-DEF Hybrid, which ends up with lower Skill damage but higher Burst damage.\n\n<b>Regarding Weapon Choices:</b>\n<b>Harbinger of Dawn:</b> Albedo's Elemental Skill scales with Defense, which is why the Base ATK from the weapon doesn't matter that much. <b>Harbinger of Dawn</b> offers a lot of Crit stats which is why it is one of the strongest weapons for him despite being a 3 star weapon. The downside of this weapon is that you'd need to keep Albedo's HP at 90% or higher to benefit from the passive, so it might be annoying to use against certain enemies which has a HP lowering debuff, even when off-field, such as Corrosion.\n<b>Mistsplitter Reforged</b>: Realistically you are only able to get 2 stacks of this weapon's passive and this requires setup. Generally just use <b>Harbinger of Dawn </b>instead and give your <b>Mistsplitter Reforged</b> to another sword DPS character.\n<b>Freedom-Sworn:</b> Equipping this weapon will decrease Albedo's own damage significantly but he is one of the better <b>Freedom-Sworn</b> holders since he can trigger the passive quite easily to buff your other party members.\n\n<b>Regarding Artifact Sets:</b>\n<b>Husk of Opulent Dreams (4):</b> Due to Albedo's skill snapshotting upon cast, you need to either wait ~12 seconds before starting a domain/fight to reach max stacks or recast his skill to benefit from the DEF and Geo DMG bonus provided by the 4 piece set effect.\n<b>Tenacity of the Millelith (4):</b> This set is used for the 4 piece set effect which has good uptime on Albedo. Worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\n<b>Noblesse Oblige (4):</b> If you don't have another character in your party that has this set, you can use this set on Albedo. You might want to get some Energy Recharge substats to maintain your Elemental Burst uptime for this. It is also worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\n\n<b>Regarding Artifact Substats Priority:</b>\nATK% and Energy Recharge substats are only valuable on a Hybrid Albedo that casts his Elemental Burst.",
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
          ['desert_pavilion_chronicle'],
          ['retracing_bolide'],
          ['husk_of_opulent_dreams', 'archaic_petra', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: ['DEF%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'Energy Recharge', 'ATK%', 'Flat DEF', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Arataki Itto is a Geo DPS Character who takes advantage of his Elemental Burst's ATK boost and Geo infusion to deal significant damage during its uptime. His combos involve stacking and unleashing his Charged Attacks, named Arataki Kesagiri. Arataki Kesagiri consumes no stamina and can be casted continuously as long as he has Superlative Superstrength stacks. Superlative Superstrength is capped at 5 stacks at any given time, and Itto gets those stacks when his 2nd and 4th Normal Attack string hits an enemy. Activating his Elemental Burst allows his 1st and 3rd Normal Attack to also generate stacks. Itto's Elemental Skill deals damage to enemies on cast and summons a taunt, Ushi, which is considered a Geo Construct. This initial cast damage grants Itto 1 Superlative Superstrength stack, and upon Ushi leaving the field, Itto is granted another stack. When Ushi takes damage, Itto gains a stack (capped at 1 stack per 2 seconds). Itto's Elemental Burst converts his Normal and Charged Attacks into Geo DMG, increases Itto's Normal Attack Speed and converts a portion of Itto's current DEF to ATK.\n\n<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine:</b> When using <b>Husk of Opulent Dreams, Serpent Spine</b> stacks are prioritized over <b>Husk of Opulent Dreams</b> stacks due to their conflicting nature in gaining stacks (Off-field and on-field).\n<b>Skyward Pride: </b>Can be a great or bad weapon for Itto depending on your ER needs. The less Energy Recharge you need (due to particle generation from your party members or ER from subs), the less useful this weapon becomes.\n<b>Whiteblind</b>: Your rotations often start with 1 stack of this weapon, and due to Itto's Burst snapshotting DEF on cast, you're unable to take advantage of further DEF% from the stacks.\n\n<b>Regarding Artifact Sets: </b>\n<b>Retracting Bolide (4):</b> This set grants you an additional 40% Normal and Charged Attack DMG when shielded. Crystallize can be unreliable so a consistent shielder is preferred, such as Zhongli.",
      },
    },
  },
  collei: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'sacrificial_bow',
            refine: [4],
          },
          {
            id: 'favonius_warbow',
          },
        ],
        artifacts: [
          ['deepwood_memories'],
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith'],
          ['instructor'],
          ['gilded_dreams'],
          ['the_exile'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%', 'Elemental Mastery'],
          goblet: ['Dendro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK% / Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: 'Typical Collei Rotation: \nSkill > Burst > Swap\nRotation with Polar Star:\nN1 > tap Charged Attack > Skill > Burst > Swap',
        note: "Collei is a Bow User who provides off-field support in Dendro application and damage.\n<b>\nRegarding Weapon Choices:</b>\n<b>Polar Star: </b>While this weapon provides the highest personal damage, it is generally not recommended as team buffs provide more teamwide damage over a small increase in personal damage. \n<b>Sacrificial Bow:</b> Not recommended below <b>[R4]</b> due to it delaying rotation, possibly resulting in damage loss.\n\n<b>Regarding Artifact Sets: \nTenacity of the Millelith (4): </b>Collei's Sprout damage counts as Skill damage, which allows her to be able to keep <b>Tenacity of the Millelith (4) </b>up during important damage windows. Generally an alternative to <b>Noblesse Oblige (4)</b> or <b>Deepwood Memories (4)</b> (or if you are already running both in a team).<b>\nGilded Dreams (4):</b> This set is only used in a team where Collei is used to <b>trigger</b> reactions (i.e. Bloom/Burning teams), and does not benefit Collei if she is used as an <b>aura</b>. \n<b>The Exile (4):</b> An alternative option if they are placed in the same team as Cyno to help his Energy Recharge needs.\n\nShout out to Emiliabyss#1641 for providing an in-depth reference.\n\nPrioritize Energy Recharge if her Energy Requirements are not met.",
      },
    },
  },
  yaoyao: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'favonius_lance',
          },
          {
            id: 'black_tassel',
          },
          {
            id: 'moonpiercer',
          },
          {
            id: 'kitain_cross_spear',
          },
        ],
        artifacts: [['deepwood_memories'], ['tenacity_of_the_millelith'], ['instructor']],
        mainStats: {
          sands: ['HP%', 'Energy Recharge%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus%'],
        },
        subStats: ['HP%', 'Energy Recharge%', 'Flat HP'],
        talent: ['Burst', 'Skill'],
        tip: 'The additional Yueguis summoned by the Burst are removed when Yaoyao leaves the field.',
        note: ':<b>\n</b>Yaoyao focuses on healing and applying Dendro with her Elemental Skill and Burst.\n\n<b>Regarding Weapon Choices:\nKitain Cross Spear: </b>This weapon is better than <b>Favonius Lance</b> in teams where she actively procs the Bloom reaction.\n\n<b>Regarding Mainstat Choices:\n</b>In a Bloom team where Yaoyao procs Bloom, <b>Elemental Mastery is preferred as a mainstat on all pieces.</b>\n\nPrioritize her Elemental Skill if you do not use Yaoyao onfield during her Burst',
      },
    },
  },
  kaveh: {
    roles: {
      'BLOOM DRIVER': {
        recommended: true,
        weapons: [
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'mailed_flower',
            refine: [5],
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'makhaira_aquamarine',
          },
          {
            id: 'katsuragikiri_nagamasa',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'forest_regalia',
          },
          {
            id: 'rainslasher',
          },
        ],
        artifacts: [
          ['deepwood_memories'],
          ['ocean-hued_clam'],
          ['flower_of_paradise_lost'],
          ['instructor'],
          ['gilded_dreams'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery', 'Crit Rate'],
        },
        subStats: ['Energy Recharge', 'Elemental Mastery', 'Crit Rate'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "Kaveh's best combo is N3D, which is 3 Normal Attacks canceled at the end with a Dash.",
        note: "Kaveh section is filled with placeholder content, it is not a finalized section.*\n\n</b>SUPPORT:<b>\n</b>Kaveh focuses on being the onfield unit for Bloom teams, boosting their damage with his Elemental Burst, and applying Dendro to create Bloom Cores.<b>\n\nRegarding Weapon Choices:\nWolf's Gravestone and Song of Broken Pines: </b>In teams where the teamwide ATK% from the passive is not significant for team damage, it is advised <b>not to use these weapons</b>.<b>\n\nRegarding Artifacts:\nDeepwood Memories (4): </b>Do not use this set on Kaveh if another character is already using it.<b>\nOcean Hued Clam (4): </b>This set has the potential to outclass <b>Deepwood Memories (4) </b>as long as another user can hold Deepwood Memories. It gets notably better at C1.\n<b>Flower of Paradise Lost (4): </b>This set can be better than <b>Ocean Hued Clam (4) </b>if Kaveh <b>triggers the majority of Blooms </b>in your team.<b>\n\nRegarding Main Stats:\nCirclet: </b>Crit Rate is only for<b> Favonius Greatsword.</b>",
      },
    },
  },
  traveler_dendro: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'freedom-sworn',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'sapwood_blade',
          },
        ],
        artifacts: [['deepwood_memories'], ['noblesse_oblige'], ['instructor'], ['gilded_dreams'], ['the_exile']],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%', 'Elemental Mastery'],
          goblet: ['Dendro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'Crit DMG', 'Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK% ~= Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "<b>Regarding Main Stats:\n</b>Prioritize maintaining their burst uptime, the ER needs for Dendro Traveler would be a lot greater if they are the only Dendro unit in the team.\n\n<b>Regarding Weapons:</b>\n<b>Sacrificial Sword:</b> Prioritized due to Dendro Traveler's exceedingly high Energy Recharge requirements for burst uptime consistency.\n\n<b>Regarding Artifacts:\nNoblesse Oblige (4): </b>This option would generally be better than <b>Deepwood Memories (4)</b> if Dendro Traveler is used in an <b>Aggravate</b> focused team.<b>\nThe Exile (4): </b>An alternative option if they are placed in the same team as Cyno to help his Energy Recharge needs.\n\nPrioritize Energy Recharge if their Energy Requirements are not met yet.\nNot priority investment",
      },
    },
  },
  tighnari: {
    roles: {
      'QUICK SWAP DPS': {
        recommended: true,
        weapons: [
          {
            id: 'hunters_path',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'slingshot',
            refine: [5],
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'windblume_ode',
            refine: [5],
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'the_stringless',
          },
        ],
        artifacts: [
          ['wanderers_troupe'],
          ['gilded_dreams'],
          ['deepwood_memories', '+80_em', '+18%_atk_set'],
          ['deepwood_memories'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Dendro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "There are three recommended combos that Tighnari can perform:\n1. Skill -> Charged Attack -> Burst -> Charged Attack (x2) - This is the most mechanically difficult combo. However, this combo allows Tighnari to have both his Burst effected by A1 and funnel particles from his Skill to his next Burst.\n2. Skill -> Charged Attack (x3) -> Burst - Allows Tighnari's Burst to benefit from A1. However, this combo doesn't allow Tighnari to funnel particles from his Skill into his next Burst.\n3. Skill -> Burst -> Charged Attack (x3) - Simplest combo to use, and generally weakest combo. His Burst does not benefit from A1 in this combo.",
        note: "Tighnari's standard build revolves around him doing his Elemental Skill, Three Clusterbloom Arrows, an Elemental Burst, and promptly swapping out to another character. \n\n<b>Regarding Weapon Choices:\nElegy for the End: </b>If Tighnari does not need the Energy Recharge that <b>Elegy for the End</b> provides, this weapon will perform worse than <b>Amos' Bow</b> for his personal damage.\n<b>Amos' Bow: </b>This option ranks lower due to Tighnari not needing as much ATK%, as well as not stacking the passive well\n<b>Slingshot: </b>Significantly worse when fighting from a long range.\n<b>Prototype Crescent: </b>At <b>[R5]</b>, this weapon is better than <b>Slingshot. </b>Notably, this weapon is heavily<b> reliant on enemies having weakspots</b>.\n<b>The Stringless: </b>At <b>[R5]</b>, this weapon is equal to <b>Slingshot. </b>\n\n<b>Regarding Artifact Sets:\nDeepwood Memories (4): </b>This is by far Tighnari's best set if no one else on the team is using it.",
      },
    },
  },
  nahida: {
    roles: {
      BLOOM: {
        recommended: true,
        weapons: [
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'kaguras_verity',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'wandering_evenstar',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'mappa_mare',
          },
        ],
        artifacts: [['deepwood_memories'], ['gilded_dreams'], ['+80_em', '+80_em']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery', 'Dendro DMG'],
          circlet: ['Elemental Mastery', 'Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge (Until Requirement)', 'Crit Rate / Crit DMG ~= Elemental Mastery', 'ATK%'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "<b>Regarding Weapon Choices:\nThe Widsith: </b>At <b>[R5],</b> this weapon performs similarly to <b>Kagura's Verity [R1].</b>\n<b>Wandering Evenstar: </b>At <b>[R5], </b>this weapon performs similarly to <b>The Widsith [R1].</b>\n\n<b>Regarding Artifact Sets:\nDeepwood Memories (4): </b>This is her best set if no one else is wearing this set.",
      },
      'QUICKEN / HYPERBLOOM / BURGEON': {
        recommended: true,
        weapons: [
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'kaguras_verity',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'wandering_evenstar',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'hakushin_ring',
          },
        ],
        artifacts: [['deepwood_memories'], ['gilded_dreams'], ['+80_em', '+80_em']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Dendro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Energy Recharge (Until Requirement)', 'Crit Rate / Crit DMG', 'Elemental Mastery', 'ATK%'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "<b>Regarding Weapon Choices:\nThe Widsith: </b>At<b> [R5], </b>this weapon performs similarly to<b> Kagura's Verity [R1].\nMagic Guide: </b>At <b>100% uptime, </b>this weapon performs better than <b>The Widsith [R1]. </b>This, however, is not realistic in many cases.\n<b>Wandering Evenstar: </b>This weapon provides buffs to the entire team, potentially allowing it to outperform higher ranking weapons.\n<b>Mappa Mare: </b>At <b>[R5], </b>this weapon performs similarly to <b>The Widsith [R1].\nHakushin Ring:</b> This weapon is not as strong as other options for Nahida's personal damage, but the support value it provides can be better for overall team damage.\n<b>\nRegarding Artifact Sets:</b>\n<b>Deepwood Memories (4):</b> This is her best set if no one else is wearing this set.",
      },
    },
  },
  alhaitham: {
    roles: {
      'SPREAD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'light_of_foliar_incision',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'mistsplitter_reforged',
          },
          {
            id: 'haran_geppaku_futsu',
          },
          {
            id: 'freedom-sworn',
          },
          {
            id: 'toukabou_shigure',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'xiphos_moonlight',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'sapwood_blade',
          },
        ],
        artifacts: [
          ['gilded_dreams'],
          ['deepwood_memories', 'emblem_of_severed_fate', '+80_em'],
          ['deepwood_memories'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Dendro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge (Until Requirement)', 'Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Flat ATK'],
        talent: ['Skill', 'Normal Attack', '= Burst'],
        tip: 'Basic Rotations:\n\nBurst up = Q > E > N2D + 2N3D + N1C + 2N2C\n\nBurst down = E > N1C + 5N2C + N1',
        note: "<b></b>This playstyle makes the best use of Alhaitham's kit. Since both <b>Spread reactions</b>, his <b>skill (the primary source of his damage) and burst scale heavily off Elemental Mastery</b>. Further enhanced by his <b>high rate of on-field Dendro application</b>. All of this combined with his <b>flexible teams and rotations</b> makes him one of the best <b>Spread DPS</b> currently released. Lastly bear in mind that a large part of his damage comes from<b> Dendro reactions (especially in Quicken/Quickbloom teams), </b>which scale heavily off his levels, so you should <b>prioritise levelling him to 90/90</b>.\n\n<b>Regarding Weapon Choices:</b><b>\n</b><b>Light of Foliar Incision: </b>This weapon<b> prefers EM sands </b>even in situations with<b> fewer or no Spread procs </b>such as in<b> Bloom/Burgeon/Hyperbloom teams.\nToukabou Shigure: </b>This ranking assumes <b>single-target situations</b>, in <b>AoE situations</b> it starts <b>falling behind</b> weapons such as <b>Iron Sting</b> and <b>Blackcliff Longsword.\nHarbinger of Dawn: </b>If you can maintain <b>near perfect uptime</b> on its passive this weapon will perform similarly to weapons like <b>Haran Geppaku Futsu.\nXiphos' Moonlight / Festering Desire: </b>These weapons can perform <b>similarly to The Black Sword</b> in teams where you have <b>higher Energy Recharge requirements</b> or want to <b>burst every rotation</b>.\n\n<b>Regarding Artifact Sets:\nGilded Dreams (4): </b>This ranking assumes that you already have<b> another Deepwood Memories holder </b>on the team, if not then <b>Deepwood Memories</b> becomes his <b>best set</b>.\n<b>Deepwood Memories (2) / Emblem of Severed Fate (2) / +80 EM set (2):</b> These split set options can actually perform similarly to <b>Gilded Dreams (4)</b> or even surpass it in situations where you have <b>higher Energy Recharge</b> requirements or want to <b>burst every rotation</b>. Or even if they just have <b>better substat rolls</b> on them.\n\n<b>Regarding Mainstat Priorities</b>: Usually in <b>Quicken/Quickbloom</b> teams Alhaitham <b>leans towards</b> <b>Elemental Mastery sands (roughly 5% or so difference usually).</b> But in <b>Bloom/Burgeon/Hyperbloom </b>teams with, <b>fewer to no Spread reactions,</b> he <b>skews more towards ATK%</b> sands (unless you're using <b>Light of Foliar Incision</b>). Or even Energy Recharge sands if you're trying to burst every rotation for <b>increased Dendro seed generation</b> in<b> </b>those teams<b>.</b><b>\n\n</b>\n\nCertain quicken teams can run little to no Energy Recharge and simply burst every other rotation without a dps loss.\nIf you're running under 200 Elemental Mastery this substat has priority over Crit",
      },
    },
  },
  baizhu: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'jadefalls_splendor',
          },
          {
            id: 'prototype_amber',
            refine: [5],
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'hakushin_ring',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['deepwood_memories'],
          ['ocean-hued_clam'],
          ['instructor'],
          ['noblesse_oblige'],
          ['tenacity_of_the_millelith', 'vourukashas_glow', 'emblem_of_severed_fate'],
        ],
        mainStats: {
          sands: ['HP%', 'Energy Recharge'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: ['Energy Recharge (Until Requirement)', 'HP%', 'Flat HP'],
        talent: ['Burst', 'Skill'],
        tip: "His Elemental Skill has a 2-3 second delay between cast time and heal received, keep this in mind when swapping to low HP allies after Baizhu's rotation.",
        note: '<b></b>Baizhu provides teamwide healing through the use of his Elementall Skill and Burst; the shield applied from his Burst should be considered as interrupt resistance as opposed to a reliable form of damage mitigation for non Bloom reaction related damage sources.\n\n<b>Regarding Weapon Choices:</b><b>\n</b><b>Hakushin Ring: </b>This weapon<b> </b>is best used in Quicken teams with enough time in the rotation to swap to Baizhu to maintain uptime, or when Baizhu is the driver.\n\n<b>Regarding Artifact Sets:\nDeepwood Memories (4): </b>Under AoE situations, it may be better for another party member to hold this set as Baizhu has lackluster AoE.\n<b>Instructor (4):</b> The Elemental Mastery gained from this set outweighs the reduction in A4 passive bonus from lower main stat values.\n<b>Noblesse Oblige (4):</b> In teams that benefit from <b>ATK%</b>, this set can be run over <b>Instructors (4)</b> if the additional sustain from higher hp values is preferred.\n<b>\n</b>',
      },
    },
  },
  lyney: {
    roles: {
      TBD: {
        recommended: false,
        weapons: [],
        artifacts: [],
        mainStats: {
          sands: ['TBD'],
          goblet: ['TBD'],
          circlet: ['TBD'],
        },
        subStats: ['TBD'],
        talent: ['TBD'],
        note: 'TBD',
      },
    },
  },
  lynette: {
    roles: {
      TBD: {
        recommended: false,
        weapons: [],
        artifacts: [],
        mainStats: {
          sands: ['TBD'],
          goblet: ['TBD'],
          circlet: ['TBD'],
        },
        subStats: ['TBD'],
        talent: ['TBD'],
        note: 'TBD',
      },
    },
  },
};
