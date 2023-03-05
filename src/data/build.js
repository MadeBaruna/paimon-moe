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
        note: "Amber DPS will be focused on maximizing Charged Shot damage on enemy weak spots as Amber's Ascension 4 Talent increases ATK by 15% for 10s after hitting a weak spot. Crit is also guaranteed when you land your shot on a weak spot so we aim to maximize Crit DMG with little to no dependance on Crit Rate, this could change after <b>[C4]</b>.\nAfter <b>[C4]</b>, the playstyle catering towards her Skill damage becomes available, with this build you will want to run Crimson Witch of Flames (4) while trying to maintain the 1:2 Crit Ratio for more frequent nukes. This playstyle is safer, more consistent and has more AoE damage to play compared to Charge Shot Amber.\n\n<b>Regarding Artifact Sets:</b>\n<b>Shimenawa's Reminiscence:</b> At <b>[C4]</b> this set will beat out Wanderer's Troupe for Amber Charged Shot Main DPS.\n\n<b>Regarding Weapon Choices:</b>\n<b>Prototype Crescent: </b>This bow will beat <b>Skyward Harp</b> if it's <b>[R2+]</b>.\n<b>Hamayumi:</b> This bow will beat <b>Sharpshooter's Oath</b> <b>[R5]</b> if it's <b>[R2+]</b>.",
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
        note: 'Due to her poor scalings, this section is dedicated to a low-investment build that provides utility and shieldbreaking capabilities by abusing her quick Pyro application on her Elemental Burst. Due to her energy generation being extremely poor, her Energy Recharge options are prioritized.\n\n<b>Regarding Instructors (4): </b>This set is preferred over <b>Noblesse Oblige (4)</b> when Amber is used as support in a Hu Tao vaporize team.',
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
        tip: 'A few commonly used teams for pyro Xiangling are:\nNational Team: Xiangling, Xingqiu, Bennett and a Flex unit (Sucrose/Zhongli/Kazuha/Raiden/Chongyun/etc)\nChilde Team: Childe, Xiangling, Bennett and a Flex unit (Sucrose/Zhongli/Venti/Kazuha/etc)\n\nRecommended ER thresholds: \nNational/Childe Teams: 160-200 ER%\nEnabler for Reverse Melt teams: 200-250 ER%',
        note: "<b>Regarding Weapon Choices: THIS LIST ASSUMES THAT XIANGLING IS RUN WITH BOTH BENNETT AND A SECONDARY BUFFER (i.e. Kazuha/Sucrose)\nWavebreaker's Fin: </b>At <b>[R5], </b>this weapon is equal to or outperforms <b>Staff of Homa,</b> depending on your total team burst cost.<b>\nDragon's Bane: </b>At <b>[R5], </b>this weapon outperforms<b> Primordial Jade-Winged Spear.</b>\n<b>Kitain Cross Spear: </b>This weapon's passive reduces the ER threshold of Xiangling greatly, down to <b>~140 ER% at [R1]</b> and <b>~110 ER% at [R5].</b> This allows you to distribute ER rolls into otherwise offensive substats and due to this, an <b>[R5] Kitain Cross Spear</b> can outperform <b>Primordial Jade-Winged Spear.</b> Due to lowering ER thresholds so much, the <b>Crimson Witch of Flames (4)</b> artifact set will outperform <b>Emblem of Severed Fate (4).</b>\n<b>Lithic Spear: </b>At<b> [R5], </b>and with <b>2 stacks</b>, this weapon performs equal to <b>Primordial Jade-Winged Spear.</b>\n<b>Favonius Lance:</b> The utility provided from a <b>highly refined Favonius Lance</b> can make it a weapon of choice in a team comp where Xiangling is not triggering the reaction and is instead used as an aura. <b>(i.e. Reverse Melt teams)</b>\n\n<b>Regarding Weapons and Artifacts with EM stat:\nDragon's Bane / Kitain Cross Spear / EM substats:</b> In team comps where you can trigger<b> </b>both <b>Vaporize and Overload at the same time</b> (i.e. Raiden National), <b>Elemental Mastery</b> gets more value, pushing these weapons and artifacts ahead in damage.<b>\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4):</b> This set pulls ahead over <b>Emblem of Severed Fate (4)</b> on team comps where Xiangling triggers Overloads in addition to Vaporize (i.e. Raiden National).\n<b>The Exile (2) Scholar (2): </b>This set can be used as a <b>very low investment support build to enable Reverse Melt team comps</b> where Xiangling is not triggering the reaction and is instead used as an aura and needs a lot of Energy Recharge. Note that it is <b>not recommended to stay on this build as Xiangling can still contribute respectable damage with offensive stats.\n\n</b>",
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
          ['+25%_physical_dmg', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: '<b>It is not recommended to run Physical DPS Xiangling since Xiangling excels more as an Off-field Pyro DPS. Physical Xiangling is only good for early game.</b>\n\n<b>Regarding Weapon Choices:</b>\n<b>Crescent Pike: </b>This weapon is extremely strong on Xiangling due to the nature of her attack combo, <b>Crescent Pike</b> continues to surpass <b>Primordial Jade Winged-Spear</b> in terms of Normal/Charge Attack Damage.\n\n<b>Regarding Artifact Sets:</b>\n<b>Pale Flame (4): </b>The passive from this set can have 100% uptime through using Guoba off cooldown.',
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
        note: "<b>Regarding Weapon Choices:\nThe Alley Flash: The Alley Flash</b> has the potential to beat <b>Iron Sting</b> <b>[R5]</b>, but this requires the passive to be up, whenever damaged, your passive is disabled for 5 seconds and you could be losing out a lot of damage, especially if you are constantly being damaged.\n\n<b>Regarding Artifact Sets:\nCrimson Witch of Flames (4):</b> Assuming a Melt/Vaporize team, this set is your best set for damage and works best with Chongyun on the same team for consistent Melt.\n<b>Thundering Fury (4)</b>: This set works best if paired with Electro supports such as Beidou and Fischl/Lisa, as it allows Bennett to accomplish 2 things: \n>1) Rapidly spam E for raw pyro damage and application, allowing frequent Overload reaction triggers and breaking Electro shields rapidly.\n>2) Generate tons of energy for the entire team. \nThe setup is generally only recommended for those with Beidou <b>[C2/C6].</b>\nThe main-stat artifacts you want to farm for <b>Thundering Fury (4)</b> Bennett varies from the main-stat artifacts you'd normally go for the other builds. Instead of <b>ATK%/EM, Pyro and Crit</b>, you'd instead want to go for <b>EM, Pyro and EM</b> on a <b>Thundering Fury (4)</b> Bennett. As such, this also means weapons that have EM substats such as <b>Iron Sting</b> take priority over other swords. \n\n<b>Regarding Weapon Choices:</b>\n<b>The Black Sword</b>: With the EM sand, this combo has the highest Melt/Vaporize damage. \n<b>Iron Sting: </b>This weapon at <b>[R1]</b> with EM sand turns out to have diminishing returns and isn't as good, but <b>[R2+]</b> <b>Iron Sting</b> is a different question because better buffs.\n<b>Aquila Favonia: </b>Assuming you have a whale build's CR/CD stats, this weapon with EM sands will be better than the two above.\n<b>Primordial Jade Cutter: </b>With <b>Thundering Fury (4)</b>, this weapon is able to out-perform <b>Mistsplitter Reforged</b> due to massive Crit Rate% substat, which allows consistent vaporize damage despite the lack of Crit Rate/DMG substats, assuming that your EM Sands/Circlet lacks crit rate substats. However, in the rare occasion that your EM pieces manage to roll plenty of Crit subs, Mistsplitter easily overtakes the <b>Jade Cutter</b>.\n\nRecommended amount of ER%: 130-150%. \nWith <b>Thundering Fury (4), </b>you have a lot more leeway when it comes to ER.\n\nEM sands is generally > ATK%, but substat quality and weapon choice can potentially favour ATK% sands.\nElemental Mastery has lower priority than ATK% when using Iron Sting\nNormal Attack is only a priority if you have C6 Bennett",
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
        tip: 'Recommended amount of ER%: 180-200',
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
        tip: 'Recommended amount of ER%: 200+',
        note: "<b>Heals from his Elemental Burst scale off of HP</b>, while his <b>damage buff from Burst only scales with your base ATK (Character Base ATK stat and Weapon Base ATK stat)</b>\n<b>DO NOT increase Bennett's constellation from 5 to 6 unless he is in a Pyro team and you know what you're doing. This is because Bennett turns all of your melee on-field character's Auto Attacks into Pyro, which means that Bennett will lose a lot of his team comp potential.</b>\nAlthough Bennett is usually considered a healer, he already heals a lot even without necessarily building for HP%, <b>if you find it unnecessary to build for HP%, you can consider building him as a Sub DPS.\n</b>\n<b>Regarding Weapon Choices:\nMistsplitter Reforged, Aquila Favonia:</b> These weapons have the highest Base ATK in the game which is why it is ranked quite high. It is assuming you have enough Energy Recharge so you still can burst off cooldown for the maximum ATK buff.\n<b>Freedom-Sworn:</b> In comps where Bennett can reliably trigger reactions (and thus trigger this sword's passive), the buffs provided by this weapon will be stronger than <b>Aquila Favonia.</b>\n<b>The Alley Flash: </b>This weapon currently has the highest Base ATK for a 4 Star weapon (even more Base ATK than some 5 stars like <b>Skyward Blade</b>).\n<b>Prototype Rancour: </b>This weapon has one of the highest Base ATK for a 4 Star weapon (and this is also a weapon you could craft from the Blacksmith)\n\nMain stats aren't as important. Stack Energy Recharge for comfortable Elemental Burst uptime instead.",
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
        note: 'It is <b>required</b> to run this build with<b> [C6]</b> Bennett. However, it is not recommended to <b>[C6]</b> Bennett solely for Xinyan.\n\n<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine:</b> It is worth noting that an <b>[R5]</b> <b>Serpent Spine</b> can outperform<b> Redhorn Stonethresher [R1]</b> with good <b>Serpent Spine</b> stack management.\n<b>Lithic Blade:</b> This ranking assumes 2 stacks.\n\n<b>Regarding Artifact Sets:</b>\n<b>Lavawalker (4):</b> Xinyan can maintain a high pyro aura uptime on an enemy, making this her best set.',
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
        tip: "Xinyan's skill grants you a pyro status upon contact with shield. No matter how many times you switch your characters, it'll still apply pyro every instance you switch with shield. This allows you to cleanse most elemental statuses that has been applied to you.\n\nIf the status doesn't get cleansed, switch on that character one more time with the shield. Some elements, such as Hydro, are not cleansed very efficiently.",
        note: "This section is dedicated to using Xinyan as a shielder for her team.\n\n<b>Regarding Artifact Sets:</b>\n<b>Tenacity of the Millelith: </b> If you can maximize the uptime of Xinyan's Level 3 shield, she can provide a constant 30% Shield Strength and 20% Atk boost to the team (as long as the pulses hit an enemy). This means that <b>Sacrificial Greatsword</b> and Xinyan's <b>[C2]</b> are crucial to making this set shine on her. This set <b>isn't as recommended</b> for her if you have neither of the two.\n\nShield uptime is also crucial to maximizing her Physical/Shield Support capabilities. If you have neither <b>Sacrificial Greatsword</b> nor at least<b> [C2]</b> (but ideally <b>[C4]</b>) on Xinyan, you may want to build her as a DPS instead of Physical/Shield Support.\n\n<b>Generally not recommended for Pyro Applications, as the pulses only happen at Shield Level 3, and are not very efficient at breaking Cryo shields.\n</b>\n<b>Credit to the In-progress KQM Guide draft</b>",
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
        tip: "Yanfei's Ascension 4 Talent does a second hit after a Crit Charge Attack. This scales 80% of your ATK and can trigger reactions as well due to having a separate internal cooldown on its pyro application.",
        note: "Yanfei can have trouble trying to set up for her reaction DPS. Vaporize is generally the more consistent option and you need Xingqiu to make this work best. When running a Vaporize team with Xingqiu, 3 normal attacks into a charged attack (N1>N2>N3>C) is the safest and most reliable way to vaporize your charged attacks. Make sure you're applying hydro first before starting combos.\n\n<b>Regarding Weapon Choices:\nLost Prayer to the Sacred Winds: </b>Bennett buff / <b>Thrilling Tales of Dragon Slayer's</b> buff + <b>Noblesse Oblige (4)</b> will push <b>Lost Prayer to the Sacred Winds</b> ahead of <b>Skyward Atlas </b>and <b>Memory of Dust.</b>\n<b>Kagura's Verity: </b>Do note that with Bennett's Buff / <b>Thrilling Tales of Dragon Slayer's</b> buff + <b>Noblesse Oblige (4)</b>, <b>Kagura's Verity</b> will push ahead of <b>Skyward Atlas</b> and <b>Memory of Dust.</b> \n<b>The Widsith: </b>Note that with strong attack buffs like Bennett's Burst, an <b>[R5] Widsith</b> can outperform most <b>[R1] </b>5-star weapons, with the exception of <b>Lost Prayer to the Sacred Winds.\nDodoco Tales: </b>On equal refinements, <b>The Widsith</b> is better than <b>Dodoco Tales</b>, but assuming it's <b>[R5]</b> <b>Dodoco Tales</b> vs <b>[R1]</b>-<b>[R3]</b> <b>The Widsith</b>, <b>[R5]</b> <b>Dodoco Tales</b> is better. <b>Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff may push Widsith and Solar Pearl above Dodoco Tales, even at low refinements.\n</b>\n<b>Regarding Artifact Set:\nShimenawa's Reminiscence (4): </b>Yanfei will rarely have her burst up due to the 15 energy cost on the 4-piece effect, however she can instead <b>maintain the 4-piece DMG buff over a longer duration, making this set a good alternative to the other options.</b> Note that this set loses out on some value at higher constellations, as she can't get her <b>[C4]</b> effects without casting Burst.\n<b>Gilded Dreams (4): </b>Actually her<b> BIS </b>if used in a <b>full Elemental Mastery build </b>with a<b> overload team.</b>\n<b>Retracing Bolide (4): </b>Running Yanfei with a shield character also allows you to make use of a full <b>Retracing Bolide (4)</b> as a placeholder until you're able to find a good <b>Crimson Witch of Flames (4). </b>\n\n<b>Regarding Artifact Substats Priority: \n</b>Energy Recharge is prioritized over Elemental Mastery here since she has an 80 energy burst cost while her skill is also not very efficient at generating particles for getting it back. A major source of your energy will be coming from enemies as well as potential pyro batteries like Bennett, so be sure to have her pick the particles up as off-field characters only get 0.6x the value of the particles.",
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
        tip: 'Energy Recharge Guidelines\nPrototype Amber [R5]: 210 ER\nPrototype Amber [R1] /Favonius Codex: 240 ER\nThrilling Tales of Dragon Slayers: 250+ ER',
        note: "<b>C4+ REQUIRED\n</b>This section is dedicated to a playstyle where Yanfei is utilised as a primary shielder through her 4th Constellation. Due to the requirement of having to burst off cooldown, this build has <b>high energy requirements.</b>\n\nYanfei's talent levels provide nothing for this role and it is not recommended to level them.",
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
          ['gilded_dreams'],
          ['gilded_dreams', 'wanderers_troupe'],
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
        note: "This build focuses on using Thoma as a <b>trigger unit for Burgeon reactions</b>. A role he excels at because of his <b>slow pyro application reducing the likelihood of creating Burning reactions</b> and his <b>shield reducing the self-damage</b> from the aforementioned burgeon reactions.\n\n<b>Regarding Weapon Choices:</b>\n<b>Kitain Cross Spear:</b> <b>High refinement is recommended</b> to further reduce Thoma's Energy Recharge requirements\n<b>Dragon's Bane:</b> Becomes a more reasonable option when you have Thoma's <b>C4</b>.\n\nFor an EM-focused build, upgrading Thoma's talent levels isn't a necessity",
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
          ['emblem_of_severed_fate'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'HP%'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: ['Energy Recharge', 'HP%', 'Crit Rate', 'Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: '<b></b>Thoma ideally wants to focus on shield over damage, and his burst uptime is required to achieve better shields, which is why he needs ER% on top of HP%.\n<b>\nRegarding Weapon Choices:\nBlack Tassel: </b>At<b> [C4]</b>, Thoma gains 15 energy when he fires his Elemental Burst. This effectively reduces his energy cost to 65 and makes it possible to use <b>Black Tassel</b> with ER sands instead of ER weapon with ER sands to further strengthen his shield.\n\nCrit Rate is an option when using Favonius Lance.',
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
          sands: ['EM', 'ATK%'],
          goblet: ['Pyro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "Diluc has a number of combos he can do during his uptime. \n N = Normal Attack, E = Elemental Skill, Q = Elemental Burst  (N2 would equal 2 Normal Attacks)\nHis most common combo is  Q N2 E N2 E N2 E.  This fits perfectly into the buff window of his teams.\n\nFor high upfront damage, use  Q E N1 E N1 E N1 . This falls off significantly if the enemy isn't killed within this window.\n\nA full rotation combo can look similar to  Q N2 E N2 E N2 E N4 N3 E N1 E E . An example video can be found  here.",
        note: "<b>Regarding Weapon Choices:\nThese placements assume strong ATK buffs such as Bennett, as Diluc is commonly played with them present in his party.\nRedhorn Stonethresher: </b>This weapon falls off considerably when strong ATK buffs are not present, still being a top tier option but similar in power to the weapons ranked directly below.\n<b>Serpent Spine: </b>This placement assumes you can <b>maintain high stacks of the weapon effect</b>. If you find yourself being hit often, a low-stacked <b>Serpent Spine</b> will find itself falling significantly in potential. This weapon scales well with refinements, having the potential to be Diluc's best weapon.\n<b>The Unforged: </b>This weapon matches <b>Wolf's Gravestone </b>while shielded. While unshielded, it loses some potency but is still a strong weapon tied with a low refined <b>Rainslasher</b>.\n<b>Rainslasher: </b>This weapon should only be used in teams where Diluc is consistently Vaporising his attacks. This weapon scales well with refinements, potentially surpassing <b>Wolf's Gravestone </b>at <b>[R5]</b>.<b>\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): </b>Generally the best go to set for Diluc due to how easily Diluc can stack the Pyro Damage effect, while his burst imbues his Normal/Charged Attacks with Pyro.\n<b>Gladiator's Finale (4): </b> For those who are still reluctant on farming for <b>Crimson Witch of Flames (4)</b> (Pre-AR 45), this will still provide a fairly decent increase in DPS as a large portion of his damage is tied into his Normal Attack talent.\n\n<b>Regarding Main Stats Priority:\n</b>If Diluc is run alongside Xingqiu where he can trigger Vaporize very often, he can run EM sands as an alternative to ATK sands as EM boosts Diluc's reaction damage significantly.\n\nEM higher prio in Vaporize/Melt comps)\nWorth noting that Diluc's constellations boost his Elemental Skill's damage, so talent prioritization can vary from player to player",
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
        note: "Being extremely squishy and prone to interruptions, Klee requires great positioning. Check out the in-depth guide to learn in-depth about animation cancelling which may help with this issue.\n\n<b>Regarding Weapon Choice:\nMemory of Dust: </b>This weapon's rankings assume that Klee is played without a shielder, as forcing a shielder for the additional 20 ATK% leads to a damage loss compared to her best teams, even if said shielder is Zhongli. If in a situation where Klee is played with a shielder anyway, this weapon would be on par with <b>Skyward Atlas</b>.\n<b>Solar Pearl: </b>When using <b>Solar Pearl</b>, it is recommended to animation cancel a Normal Attack into an Elemental Skill and cancel that into her Elemental Burst at the start of her field time.\n\n<b>Regarding Artifact Sets:</b>\n<b>Lavawalker (4): </b>Klee's kit makes it harder to utilize Vaporize and Melt the same way another pyro carry would, but her constant pyro application makes <b>Lavawalker (4)</b> a viable set. See KleefulFrame's great number breakdown <a href=\"https://docs.google.com/spreadsheets/d/1JJZPMoNOqXhX8Ez1cl63fNXESJZXx7kQaJEeQ-WLOEY/edit\">here.</a>\n<b>Crimson Witch of Flames (4): </b>This set is only recommended in a team where Klee is able to trigger Vaporize consistently.\n<b>Wanderer's Troupe (4): </b>Wanderer's Troupe increases the Charged Attack by another 35% Damage Bonus. It can serve as a decent DPS choice but due to how clunky Klee's attack animations are, it's hard to put this in actual practice as it requires you to dodge more and consume more stamina, not to mention how the DPS gets caught up by the other builds mentioned above.",
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
        note: "Hu Tao is most effective when used with Xingqiu to proc Vaporize/Freeze Melt reactions which utilizes her BiS Set, <b>Crimson Witch of Flames (4)</b>. Freeze Melt refers to freezing enemies for Melt set up, since unlike Diluc or Klee, Hu Tao doesn't shatter frozen enemies.<b>\n\nRegarding Weapon Choices:\nPrimordial Jade Winged-Spear: </b>Is better than the <b>[R1] </b>variants of <b>Dragon's Bane</b> and <b>Deathmatch </b>with ideal stacking. While this<b> </b>is a very strong weapon when fully stacked, maintaining the stacks on Hu Tao isn't ideal in realistic situations making the weapon less consistent than other options.\n<b>Deathmatch: </b>This weapon is better than <b>Dragon's Bane</b> when you're not doing Vaporize.\n<b>Blackcliff Pole:</b> Despite seeming quite good due to the Crit DMG substat, <b>Blackcliff Pole </b>at 1 stack performs only slightly better than an <b>[R5]</b> <b>White Tassel</b> in practice as it is difficult to maintain stacks consistently. It is not recommended to buy this weapon specifically for Hu Tao and should only be used if you already have one.\n<b>Vortex Vanquisher: </b>Provides little to nothing to Hu Tao since she scales better with HP% than ATK% with every spear in the game. <b>Base ATK makes little difference on Hu Tao because she has a very high HP to ATK conversion cap.\nWhite Tassel: </b>This weapon requires your combos to be more focused on Normal Attacks (N2C over N1C) to make use of it's passive.<b>\n\nRegarding Artifact Sets: \nShimenawa's Reminiscence (4): </b>Provides higher AA damage than <b>Crimson Witch of Flames (4)</b> but lowers your Elemental Burst damage which hurts your AoE damage, also if you're unable to burst, it might cause survivability issues if you're not running a healer.\n<b>Retracing Bolide (4)</b> and <b>Wanderer's Troupe / Tenacity of the Millelith (2) + Crimson's Witch of Flame (2):</b> All these options are almost on equal footing because both of the sets have an equal overall damage output assuming you have 100% shield uptime when using <b>Retracing Bolide (4).</b> The difference is, you want to use<b> Wanderer's Troupe / Tenacity of the Millelith (2) + Crimson's Witch of Flame (2)</b> when focusing on Nuking and better consistency, while <b>Retracing Bolide (4)</b> is for overall higher AA damage at the expense of lower burst damage, although inconsistent if you cannot keep your shield permanently.\n\n<b>Regarding Artifact Substats Priority: \n</b>Since Hu Tao is able to trigger Vaporize on most of her damage output, Elemental Mastery is quite valuable on her. If you have less than 100EM total (including from Sucrose EM share, <b>Instructor (4)</b>, etc) EM substat take priority over Crit Rate / DMG.",
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
        tip: '',
        note: 'TBD',
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
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['thundersoother'],
          ['+25%_physical_dmg', '+18%_atk_set'],
          ['thundering_fury', '+25%_physical_dmg'],
          ['thundering_fury', '+18%_atk_set'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Physical DMG', 'Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: 'Courtesy of paraszcazk#0148\n\nDue to how Polar Star works, your optimal rotation would be different from other weapons:\n\nSkill (Burst) > NA > CA > Resummon Oz (To snapshot Polar Star stacks)',
        note: "<b>[C1] </b>is recommended to even start Fischl's DPS build, with Oz still contributing to Physical DPS even when he's off-field.\n\nThere is an animation cancelling technique with Fischl DPS. After 3 or 5 basic attacks, shoot an Aim Shot to reset your attack combo. The faster you can do this, the better it is. Only use this for animation cancelling when you're out of stamina since it can be pretty hard to replicate consistently.\n\n<b>Regarding [C6] Fischl Build:</b> At <b>[C6]</b>, Oz will be dealing about 60% of the DPS and it'd be better to invest on <b>Gladiator's Finale (2) Thundering Fury (2)</b> until you can obtain <b>Pale Flame (4)</b> with an Electro Goblet.\n\n<b>Regarding Weapon Choices:\nSkyward Harp and Polar Star: </b>Due to the aforementioned Electro/Phys split at <b>[C6]</b>, <b>Polar Star</b> will surpass <b>Skyward Harp</b>.<b>\nViridescent Hunt: </b>This weapon is a really good investment that even surpasses <b>Amos' Bow</b> in a situation where there are crowds of enemies, although it's not as efficient towards massive single targets or really agile targets. It offers crowd DPS that is severely lacking due to Fischl's single target attacks.<b>\nMitternachts Waltz:</b> This weapon would be prioritized over <b>Amos' Bow</b> if you manage to get <b>[R5]</b> for pure Physical build Fischl.\n<b>Prototype Crescent:</b> If you manage to weave in a Charged Shot on enemy weak spots once every 9-10 seconds, <b>Prototype Crescent</b> could potentially offer more DPS, this weapon can be an option for those interested in a more challenging playstyle.",
      },
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
        note: "Elemental Burst and Skill both summon Oz, so make sure you're only using one at a time. Start with your Skill, use Burst for second Oz rotation and alternate. Hopefully, by the time your second/third round of Oz summoning is over, you'll have gained enough energy to repeat the loop.\n\n<b>Regarding Weapon Choices: \n</b>In general, Fischl's rankings depend significantly on the refinements of her weapons. For more detailed numbers, see the Google Sheet <a href=\"https://docs.google.com/spreadsheets/d/1YONq2v20Gn7immi87akhcJyAT74aUo96941zWTwSup0/edit\">here</a>.<b>\nAlley Hunter:</b> At<b> [R5]</b> this weapon can be similar in performance to<b> Skyward Harp</b> and <b>Thundering Pulse</b>.\n<b>The Stringless:</b> At <b>[R5]</b> this weapon can be stronger than <b>Amos' Bow</b> / <b>Alley Hunter [R1]</b> / <b>The Viridescent Hunt</b>. This difference is enlarged in teams where Fischl can find herself triggering reactions.\n\n<b>Regarding Artifact Sets:</b>\n<b>Thundersoother (4):</b> This artifact set will outperform <b>Gladiator's Finale(2) Thundering Fury(2)</b> if used in a team comp where an electro aura is always present (e.g. Electro/Electro-charged comps) therefore it is <b>highly recommended within this niche.</b>\n<b>Tenacity of the Millelith (4): </b>This set trades off a portion of Fischl's damage in return for a party wide 20% ATK buff. If you have good pieces as a result of farming <b>Pale Flame</b> (for Eula or otherwise) this can be a good option for her in specific teams. Fischl can benefit from the 20% ATK buff herself if she summons Oz within 3 seconds of his previous attack. <b>Not recommended to specifically farm this set for Fischl. \n\n</b>",
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
            id: 'alley_hunter',
          },
          {
            id: 'windblume_ode',
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
        subStats: ['Crit Rate / DMG', 'ATK%', '~= Elemental Mastery', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: '<b>Regarding Weapon Choices:</b> \nFor more detailed numbers, see the Google Sheet <a href="https://docs.google.com/spreadsheets/d/1YONq2v20Gn7immi87akhcJyAT74aUo96941zWTwSup0/edit">here</a>.\n<b>Alley Hunter:</b> At <b>[R5]</b> this weapon can be similar in performance to <b>Skyward Harp.</b>\n<b>The Stringless:</b> At <b>[R5]</b> this weapon can be stronger than <b>Skyward Harp / Alley Hunter [R5].</b>\n\n<b>Regarding Artifact Sets:</b>\n<b>Thundersoother (4):</b> This artifact set will outperform the other listed sets if used in a team comp where an electro aura is always present.',
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
        note: "<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine: </b>This weapon is a fine choice for sub-DPS Beidou and can outperform<b> Wolf's Gravestone</b> by a significant margin when Bennett/Sara ATK buffs are applied.<b> Be sure to use Beidou in slot 1 to pre-stack Serpent Spine before starting a abyss floor.\nRedhorn Stonethresher: </b>Depending on the amount of ATK% buffs you're getting, this weapon can overtake <b>Wolf's Gravestone</b> in personal damage.<b>\nAkuoumaru: Assuming 260 team energy, </b>this weapon outperforms <b>Skyward Pride</b> on a <b>low ER requirement Beidou</b> (where she is paired with other Electro characters to battery her energy needs). At <b>[R3+]</b>, it becomes exponentially better and comes very close to <b>Serpent Spine</b> and <b>Wolf's Gravestone.</b>\n\n<b>Regarding Artifact Sets:</b>\n<b>Emblem of Severed Fate (4): </b>Even after considering the 4-piece set effect, you should refrain from investing into <b>Energy Recharge</b> beyond what is needed to burst off cooldown as it will result in a <b>damage loss</b> as compared to prioritising offensive stats such as <b>ATK/Crit</b>. In team comps where Beidou has <b>low ER requirements</b> (i.e. when paired with electro batteries), a <b>Noblesse Oblige (2) / Thundering Fury (2) / +18% ATK set (2) [Choose Two]</b> will outperform<b> Emblem of Severed Fate (4).</b>\n<b>Thundersoother (4):</b> This set works best in an <b>Electro-Charged or mono Electro comps.</b>\n<b>Noblesse Oblige (4): </b>This set could be considered<b> if the team doesn't have a Noblesse Oblige (4) user</b>, do note that sometimes Beidou doesn't benefit from the ATK buff from the 4 piece set if she's the set holder, so Beidou as a <b>Noblesse Oblige (4)</b> holder isn't really recommended.\n<b>Scholar (2) The Exile (2): </b>This set acts as a cheap beginner's option to provide Beidou with 40% Energy Recharge to help maintain her Elemental Burst uptime.\n\nPrioritize Energy Recharge first if you can't burst off cooldown",
      },
    },
  },
  lisa: {
    roles: {
      'ELECTRO DPS': {
        recommended: false,
        weapons: [
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
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: 'Optimal Lisa String: \nES (Tap) > NA x2 [until 3 stacks] > Fully-charged ES (Hold) > N2C. Repeat N2C until E is off-cooldown, then repeat the string.\n\n*N/NA = Normal attack, C = Charged attack, ES = Elemental Skill',
        note: '<b></b><b>Regarding Artifact Sets:\nThundersoother (4):</b> For teams that focus on Electro-Charge reactions, <b>Thundersoother (4)</b> can out dps <b>Thundering Fury (2) +18% ATK set (2)</b>, said set is only recommended below <b>Thundering Fury (2) +18% ATK set (2)</b> due to the potential inconsistency.\n<b>\n</b>ElectroDPS Lisa plays around Electro-Charge reaction teams ideally, for Overload Lisa teams, you would be building for EM Lisa DPS since you can be the consistent trigger with supports that apply constant Pyro off-field. You can still have an Overload team with an Electro DPS Lisa, however, if the situation prefers it.\n\n<b>Regarding Weapons:</b>\n<b>Kagura\'s Verity: </b>This weapon\'s ranking at the top is based on executing the specific rotation of Tap E > N2 > Tap E > N2 > Tap E > Q > N1 > Hold E > N1 > CA > N3 > N2 > CA for max stacks. For more details please see the weapon calculations <a href="https://docs.google.com/spreadsheets/d/1kBaIxbNUUkShl-OwbOxMK4wyPQvL-WWeOko7yfWRIxw/edit">here</a>.',
      },
      'EM DPS': {
        recommended: false,
        weapons: [
          {
            id: 'fruit_of_fulfillment',
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
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['gilded_dreams'],
          ['gilded_dreams', 'wanderers_troupe'],
          ['thundering_fury'],
          ['instructor'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: ['Elemental Mastery', 'Energy Recharge'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "EM Lisa DPS aims to be the consistent trigger for reactions, Overload and Hyperbloom are generally the best reactions for this set up. Avoid having a second Electro in the Overload team for this build since this could mess up the Pyro aura Lisa wants for this playstyle. \n\nElectro-Charge teams will have a hard time trying to utilize EM DPS Lisa, in these situations, build Electro DPS or Off-Field DPS Lisa instead.\n<b>\nRegarding Stats Priority:</b> Try to invest both into EM and ER. The goal is to try stack as much EM while getting enough ER (170-190%) for a comfortable Burst uptime depending on your teams.\n\nEM DPS Lisa's Talent Levels are not a necessity",
      },
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
          sands: ['ATK%', 'Energy Recharge'],
          goblet: ['Electro Damage'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Lisa's Hold cast does not require 4 full seconds of charging to reach maximum damage threshold, as long as the indicator aligns with ring, you can release your cast at max damage.",
        note: "Can be built to set up for either Burst damage or Quickswap Skill Nuke damage.\nLisa works well with anemo characters which can keep enemies in her ultimate radius.\n\n<b>Regarding Weapon Choice:\nKagura's Verity:</b> Similar to the above mentioning, this weapon's ranking is based on executing a specific rotation, but the rotation is different for Off-Field DPS. The rotation is Tap E > N2 > Tap E > Q > Hold E (3 Stack).<b>\nThrilling Tales Of Dragon Slayers:</b> This option is <b>only recommended on a low investment Lisa </b>whereby she is focused around buffing her teammates and contributing team DPS over outputting high damage on her own.\n\n<b>Regarding Stats Priority: </b>These options prioritize Lisa's Elemental Burst uptime as a defense shredding tool.",
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
            id: 'fading_twilight',
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
        note: "<b></b>Sara is a quickswap support who is able to buff your active characters via its Crowfeather mechanics. When Sara uses her Elemental Skill, her next Charged Shot will leave a Crowfeather on the target location and after a short while, the Crowfeather explodes and <b>the active character in its AoE will benefit from Sara's ATK buff, which scales with her Base ATK</b>. \n\nAt <b>[C2]</b>, you can skip the Charged Shot as it immediately drops a Crowfeather, and save it for later on if you wanna swap back to her to extend her buffs. You can also use Elemental Skill followed by Elemental Burst so that she benefits from the Crowfeather dropped by her Elemental Skill, then swap to other character so that character can benefit from Sara's ATK buff. It's worth mentioning that Sara's Crit DMG buff at <b>[C6] </b>doesn't snapshot and it also doesn't show on the stats page, so don't freak out when you don't see it there.\n\n<b>Regarding Weapon Choices: </b>Weapons here are <b>ranked based on their Base ATK</b> to maximize Sara's ATK buff.\n<b>Elegy for the End: </b>The cooldown on this weapon's passive aligns perfectly with Sara's Elemental Burst cooldown. This weapon has lower base ATK if compared with <b>Skyward Harp</b>, but this weapon can be considered over <b>Skyward Harp </b>since Sara is able to trigger the weapon passive quite easily with her Elemental Burst to provide your party members with another 100 EM and 20% ATK buff for 12 seconds, it also has Energy Recharge substat which is very valuable on a Burst Support Sara.\n<b>Sacrificial Bow:</b> The combination of high base atk and a energy recharge substat makes this one of her best (4✩) weapon options in teams where she needs a energy recharge weapon to meet energy requirements and battery another electro unit at the same time.\n\n\n<b>Regarding Artifact Sets:\nNoblesse Oblige (4): </b>Universal support set that is able to buff your party member's ATK by 20%, use this set on Sara if there's nobody else in the party who's equipping one.\n\nPrioritize Energy Recharge first until you can burst off cooldown",
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
            id: 'dark_iron_sword',
          },
          {
            id: 'sapwood_blade',
          },
        ],
        artifacts: [['gilded_dreams'], ['gilded_dreams', 'wanderers_troupe'], ['thundering_fury']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'HP%', 'Flat HP', 'Energy Recharge'],
        talent: ['Skill', 'Burst'],
        tip: 'Aim for around 850-950+ Elemental Mastery. Depending on whether you use a Elemental Mastery weapon or not.',
        note: 'This is a dendro team that requires a <b>reliable electro trigger unit</b> to work,for which Kuki is <b>one of the best electro units</b> to perform this role.\n\nElemental Mastery is essentially your only priority',
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
          ['thundering_fury', '+80_em', '+18%_atk_set'],
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
        note: 'This <b>adds flat damage to the triggering electro attack</b> that scales of <b>elemental mastery and levels</b>, which essentially allows Kuki\'s personal damage to become relevant while also filling the role of a healer in the team.\n\n<b>Regarding Weapon Choices:</b>\nFor more details see the sheet <a href="https://docs.google.com/spreadsheets/d/1x5UJIlR8Kx1IC_8a_SRTaLjR_mzi0j1o2Ive0MpLfQU/edit">here</a>\n<b>Freedom-Sworn:</b> While not having the highest personal damage it makes up for it in <b>overall team damage</b> through its <b>competitive buffs</b>.\n<b>Primordial Jade Cutter:</b> Has the <b>highest personal damage</b> of any weapon on Kuki but <b>little to no utility</b>, which means it usually <b>falls behind in overall team damage</b>.\n<b>Key of Khaj-Nisut: </b>On paper combines <b>a mixture of high personal damage with team buffs</b> to potentially be her best weapon if you manage to get it fully stacked. This is usually a <b>unrealistic scenario</b> though with it taking up to<b> 2-3\nrotations</b> to fully stack or forcing you to stay on-field to let it stack which is usually a <b>net dps loss</b>.\n\n<b>Regarding Artifact choices:</b>\nFor more details see the sheet <a href="https://docs.google.com/spreadsheets/d/1x5UJIlR8Kx1IC_8a_SRTaLjR_mzi0j1o2Ive0MpLfQU/edit">here</a>\n<b>Thundersoother (4):</b> It\'s potentially your BIS set if you can maintain <b>constant electro aura</b> or near that, to be this consistent usually takes <b>up to 3 electro units</b> (or possibly 2 electro units and a anemo unit like Kazuha or Venti swirling electro)\n<b>Thundering Fury (2) +80 EM set (2) +18% ATK set (2): </b>Usually performs so close to <b>Gilded Dreams (4)</b> that you can simply pick the set or combination of sets with the<b> highest possible substats</b>.',
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
          ['ocean-hued_clam'],
          ['instructor', 'the_exile'],
        ],
        mainStats: {
          sands: ['HP%'],
          goblet: ['HP%'],
          circlet: ['Healing Bonus', 'HP%', 'Crit rate'],
        },
        subStats: ['HP%', 'Crit Rate', 'Elemental Mastery / Flat HP'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "Outside of reaction teams where she can be a <b>reliable trigger unit</b> Kuki's damage contribution is usually insignificant. Hence her best usage case in those scenarios is building purely for utility.\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Sword:</b> The passive lets her provide energy to the rest of the team.<b> A crit rate circlet or substats should be considered to reliably trigger the passive.</b>\n<b>Freedom-Sworn:</b> In teams where Kuki can <b>reliably trigger reactions</b>, the teamwide buff from this weapon can make it preferable over <b>Favonius Sword</b>.\n<b>Key of Khaj-Nisut: Highest possible healing</b> in exchange for<b> weaker utility</b>. Worth considering in teams that <b>can't reliably trigger reactions</b> for<b> Freedom-Sworn</b> or <b>don't need extra energy particles</b> from <b>Favonius Sword.\n</b>\n<b>Regarding Artifact Choices:</b>\n<b>Noblesse Oblige (4):</b> When using this set, make sure to build enough Energy Recharge to cast Burst off cooldown and keep good uptime on this set's passive.\n<b>Ocean-Hued Clam (4):</b> Provides a decent amount of extra damage on a full healing build.\n<b>Instructors (4) / The Exile (4):</b> Can be a cheap alternative on teams where the extra ATK% buff from <b>Tenacity of the Millelith (4)</b> or <b>Noblesse Oblige (4)</b> is not as useful.\n\nCrit Rate is useful only when using Favonius Sword",
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
        note: "Dori is mainly a support character that provides Healing and Energy to a teammate through her burst.\n\n<b>Regarding Weapon Choices: \nSacrificial Greatsword:</b> This weapon's passive allows Dori to cast her elemental skill twice while only swapping to her once per rotation. \n\n<b>Regarding Artifact Choices: \nDeepwood Memories (4):</b> This set should only be used when Dori is in a dendro based team composition.\n\nA Crit Rate Circlet can be considered if running Favonius Greatsword\nCrit Rate is useful only when using Favonius Greatsword",
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
        note: "<b></b>Traveler can provide a lot of energy and Energy Recharge to the on-field character through their Elemental Skill pick up or Elemental Burst procs. This is especially useful with a damage dealer that doesn't conflict with traveler's element and can benefit from the abundance of energy. Due to the low damage scaling on Electro Traveler's Elemental Skill and Burst, its recommended to build Electro Traveler by just stacking Energy Recharge to amplify the batterying power.\n\nMain stats aren't as important. Stack Energy Recharge for comfortable Elemental Burst uptime instead.",
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
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'blackcliff_longsword',
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
        note: 'This section is dedicated to a playstyle where Keqing does not infuse her attacks with electro, and instead focuses on physical damage (white numbers). For this reason, you should be charged attacking after casting Stellar Restoration (E) instead of recasting it.\n\n<b>Regarding Weapon Choices:\nHarbinger of Dawn:</b> The performance of this weapon is heavily reliant on being able to maintain its passive. It is <b>not recommended</b> otherwise.\n\n<b>Regarding Artifact Sets:</b>\n<b>Pale Flame (4): </b>This set is the best by far as Keqing can proc its 4 piece set bonus instantly by charge attacking after casting E.\n<b>Pale Flame (2) Bloodstained Chivalry (2): </b> This set should only be used until getting <b>Pale Flame (4)</b>.\n<b>+25% Physical DMG set (2) +18% ATK set (2): </b>The generalist Physical DPS set.\n<b>Retracing Bolide (4): </b>This set should only be used with a consistent shielder (i.e. Zhongli/Diona) for obvious reasons.\n<b>Bloodstained Chivalry (4): </b>This set is for general solo and Abyss content where there are multiple mobs that can be killed with charged attacks within 10 seconds, this is for dealing with a crowd, in other words, AoE. I<b>t is not recommended because of the kill condition.</b>',
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
            id: 'amenoma_kageuchi',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [
          ['thundering_fury'],
          ['thundering_fury', '+18%_atk_set'],
          ['thundersoother'],
          ['+18%_atk_set', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Electro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Preferred Skill Combo: ES (Place stiletto, don't reactivate yet) -> EB -> ES (Reactivation) -> Spam AA -> Repeat\n\nRegarding Roles:\nBoth physical and electro keqing are good and viable. You'd usually want to decide which build to go for depending on your weapon gacha luck. For example, Lion's Roar = Electro, Flute will be equally good on Electro/Phys, etc.",
        note: "<b>Regarding Weapon Choices: \nLion's Roar: </b>This weapon is only recommended on Aggravate / Pure Electro / Electro-charged teams. In teams where the Electro Aura can be easily removed OR when facing enemies with innate elements, this weapon <b>will severely underperform.</b> \n<b>The Black Sword:</b> On a quickswap Keqing, this weapon will be shifted below <b>Harbinger of Dawn</b> <b>[R5]</b>.\n\n<b>Regarding Artifact Sets: \nThundering Fury (4): </b>This set provides the highest damage output if you are running Keqing in an <b>Aggravate</b>-based team composition. <b>\nThundering Fury (2) +18% ATK set (2): </b>This set is a generalist set, which means it can be used generally anywhere, whether it be Co-op or Abyss, or other singleplayer content. This has a lot of consistency due to its independence from electro aura, and it is more viable in abyss.\n<b>+18% ATK set (2) / +18% ATK set (2): </b>While it is slightly behind <b>Thundering Fury (2) +18% ATK set (2)</b>, this set is preferred to farm for due to the resin efficiency of <b>Shimenawa's Reminiscence's</b> Domain.\n<b>Thundersoother (4): </b>This set should be used with <b>Electro-charged</b> team compositions (Keqing + Xingqiu), and can also be a good alternative for Keqing in <b>Aggravate</b> team compositions if you don't have <b>Thundering Fury (4)</b>. This set has a 35% DMG modifier which increases all damage from all sources, although that modifier is a bit unstable due to its dependency to the sustainability of Electro aura on enemies.\n\nNote: Since Keqing uses burst to get an extra 15% crit, it's much better in leveling it.  Best course of action is to level NA and Burst together. Don't forget to level skill to a decent level.",
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
        artifacts: [['gilded_dreams'], ['gilded_dreams', 'wanderers_troupe'], ['thundering_fury']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Elemental Mastery'],
          circlet: ['Elemental Mastery'],
        },
        subStats: ['Elemental Mastery', 'ATK%', 'Energy Recharge', 'Crit Rate/ DMG'],
        talent: ['Skill', 'Burst'],
        tip: 'You are aiming for between 850-1000+ Elemental mastery depending on weapon/artifact choice.',
        note: "<b></b>In this build Raiden is used as a <b>Hyperbloom trigger unit</b> in a dendro team. She is <b>one of the best units in the game for this role</b>. Bringing <b>greater energy particle generation, a faster rate of seed triggering and a team ult buff</b> in exchange for reduced team flexibility compared to another top hyperbloom triggering unit like Kuki.\n\n<b>Regarding Artifact Choices:\nGilded Dreams (2) / Wanderer's Troupe (2): </b>In a team with one other electro unit it's only <b>1 substat roll behind Gilded Dreams (4)</b> (3-4 substat rolls behind in a team with no other electro units) therefore you can usually just <b>use the set with the most Elemental Mastery substat rolls </b>on it.<b>\nThundering Fury (4): </b>Only really a consideration if you have a completed set of it already, with a <b>higher number of Elemental Mastery substat rolls</b>, or as a placeholder set while you farm other sets.\n<b>\n</b>\n\nEM is essentially your only priority",
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
            id: 'calamity_queller',
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
        note: "Raiden's Elemental Burst damage depends on her <b>team's energy consumption prior to her Burst</b>, and her Burst <b>restores a comfortable amount of energy for her team</b> (which is further amplified by her passive). This is especially convenient on teams that doesn't conflict with her element and wants the energy provision. (i.e. Eula, Electro, National teams, etc.). Raiden has no issues with firing her ult off cooldown after reaching about 200% Energy Recharge, but it is possible to raise it higher for better energy restoration for her team.\n\n<b>Regarding Weapon Choices: This list assumes the average across a variety of buffs. \nSkyward Spine: </b>Assumes that you are utilizing the ATK SPD buff to access higher damage combos. \n<b>Wavebreaker's Fin: </b>At <b>[R5], </b>this weapon is relatively equal to <b>Staff of Homa,</b> depending on your total team burst cost.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4): </b>This set acts as a low investment support oriented set. Raiden is an excellent <b>Tenacity of the Millelith (4)</b> holder since her Elemental Skill has 100% uptime and procs very easily. Do note that if your Raiden is equipping this set, then she will sacrifice her personal damage.\n<b>\nRegarding Main Stats Priority: \n</b>Raiden's main stat priority for Sands and Goblet entirely depends on the substats, whether she has external buffs, and which weapon she is running. You can find a more detailed list of suggestions from <a href=\"https://docs.google.com/spreadsheets/d/1VdRUAKFUoKkceIghV5tCfr3kfoiH59mcFOMorI9jYrw/edit\">ZΛNTO#4984's mastersheet here</a><a href=\"https://docs.google.com/spreadsheets/d/1VdRUAKFUoKkceIghV5tCfr3kfoiH59mcFOMorI9jYrw/edit\"> </a>or run it on a calculator/optimizer",
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
            id: 'solar_pearl',
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
        tip: "Start your rotations with Yae's Elemental Skill to amplify her Elemental Burst damage. \n\nBurst combo:\n- Skill > Skill > Skill > Burst > Skill > Skill > Skill\n\nTake note that none of Yae Miko's abilities snapshot.",
        note: "<b>Regarding Weapon Choices:</b>\n<b>Solar Pearl: </b>This weapon benefits a lot from refines and attack buffs like Bennett. <b>[R5] Solar Pearl without buffs, </b>or<b> </b>a<b> low refine Solar Pearl with Bennett buff</b> can perform similar to<b> Skyward Atlas</b>. Note that you should do a Normal Attack when you swap in and before you swap out of Yae Miko to keep good uptime on the passive.\n<b>The Widsith: In Aggravate teams specifically,</b> <b>this weapon ranks much higher</b> and can outperform the 5 stars. Otherwise, it is recommended to use the other options above Widsith for more consistent damage.\n<b>Hakushin Ring: </b>This weapon's passive can buff your other team members, which <b>may be more beneficial than Yae Miko's personal damage</b> depending on the team and rotation used. Note that the passive cannot be triggered when off-field. <b>\nRegarding Artifact Choices:</b>\n<b>Emblem of Severed Fate (4): </b>This set works best for Yae in <b>multi-target scenarios where her Elemental Burst hits multiple enemies.</b> This set also<b> provides more value</b> if she's<b> </b>used WITHOUT Raiden<b> (due to the higher ER requirements).\nGilded Dreams (4):</b> If Yae is used in an <b>aggravate/quicken focused team</b>, this set will outperform <b>Emblem of Severed Fate (4)</b>.\n<b>+18% ATK set (2) / Thundering Fury (2) / Emblem of Severed Fate (2): </b>Using a combination of these artifact sets works best for Yae in <b>single-target scenarios.</b> These also<b> provide more value</b> if she's paired WITH Raiden<b> (due to lower ER requirements). </b>\n<b>Thundersoother (4): </b>Assuming you are able to maintain 100% uptime on its passive, this is Yae's BiS set. This set works best for Yae in Electro-charged teams.\n<b>Tenacity of the Milelith (4): </b>This set trades off a portion of Yae's damage in return for a party wide 20 ATK% buff. If you have good pieces as a result of farming Pale Flame (for Eula or otherwise) this can be a good option for her.<b> Not recommended to specifically farm this set for Yae.</b>\n\n<b>Regarding Talent Priority: </b> Do note that Yae's Elemental Burst does more damage than her Elemental Skill when it hits multiple enemies, and in some setups requiring high ER its more efficient to simply ult every second rotation rather than try to stack enough ER substats.\n\nBig thanks to <b>Fob#6835</b> for helping us with the weapon/artifact rankings.\n\n",
      },
    },
  },
  cyno: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_the_scarlet_sands',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'calamity_queller',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'white_tassel',
            refine: [5],
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
          sands: ['Sands: EM', 'ATK%'],
          goblet: ['Goblet: Electro DMG Bonus'],
          circlet: ['Circlet: Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: 'Rotations:\n\nNon-TF: EQ N3E N5E N5 N2E N5 N2E - 3 Endseer\nEQ N3E N5E N5 N2E N5 N2E N5 N2E - 4 Endseer\n\n4pc TF: EQ N2E N4E N4E N5E N4E N4E - 3 Endseer\nEQ N2E N4E N4E N5E N4E N4E N5E - 4 Endseer Option 1\nEQ N2E N4E N4E N5E N4E N4E N4E N4E - 4 Endseer Option 2',
        note: "<b></b>Cyno is a DPS character that uses his burst to change stance and deal electro damage. The damage dealt during this stance is <b>normal attack damage </b>so burst damage buffs will not affect him. On most teams with an electro battery, he will want <b>120-150% </b>energy recharge.\n\n<b>Regarding Weapon Choices:\nKitain Cross Spear: </b>This weapon is especailly competitive with the options higher on the list if Cyno is <b>not</b> being run with an electro battery.\n\n<b>Regarding Artifact Sets:\nThundering Fury (4): In optimal conditions, this is Cyno's best artifact set</b>. This set is an especially competitive option when Cyno is the only Electro character in the team, as the extra Elemental Skill casts help alleviate his energy issues. Do note that casting his skill off cooldown with this set might lead to <b>missing Endseer stance windows and losing overall damage. </b>It is <b>highly recommended to use a shielder with Cyno with this set.\nGilded Dreams (4): </b>This artifact set is better than Gladiator's Finale on <b>Staff of the Scarlet Sands and White Tassel</b>.\n<b>Thundersoother (4): </b>If you can <b>guarantee 100% uptime on this set</b>, it performs better than <b>Gladiator's Finale</b>. However, satifying this condition is infeasible on most teams.\n\n<b>Regarding Main Stat Choices:\nSands: </b>Elemental Mastery versus Attack is heavily dependant on the weapon and team Cyno is in. It is recommended to test each and/or consult an optimizer.\n<b>Circlet: </b>with <b>Staff of the Scarlet Sands</b>, Elemental Mastery may be used as the circlet mainstat",
      },
    },
  },
  xingqiu: {
    roles: {
      'OFF-FIELD DPS (C6)': {
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
            id: 'skyward_blade',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
            refine: [3],
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'harbinger_of_dawn',
            refine: [5],
          },
          {
            id: 'sacrificial_sword',
            refine: [1, 2],
          },
          {
            id: 'sapwood_blade',
          },
        ],
        artifacts: [
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth', '+18%_atk_set', 'emblem_of_severed_fate'],
          ['noblesse_oblige'],
          ['blizzard_strayer'],
          ['+20%_energy_recharge', '+20%_energy_recharge'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Activating XQ's Elemental Skill or Elemental Burst applies Hydro to the on-field character with his shield. (Pyro in specific)\n\nCleansing Electro may take an additional switch for your character with the rain swords active, while Cryo would freeze you in place.",
        note: '<b>[C6]</b> stands for "Constellation 6" and <b>[C0-C5]</b>  refers to a Xingqiu that is not yet C6.\n\n<b>Regarding Weapon Choices:\nThe weapon rankings assume you are running enough Energy Recharge to get Xingqiu\'s burst up off cooldown. </b>\n<b>Favonius Sword: </b>This weapon is better than <b>Sacrifical Sword [R3+]</b> if you intend on using Xingqiu in teams where there is not a second hydro unit.\n<b>Sacrificial Sword [R3+]: </b>This weapon is better than <b>Favonius Sword</b> when running Xingqiu in a team with more than one hydro unit. \n<b>Harbinger of Dawn [R5]</b>: At <b>[C6], </b>if you can consistently keep the passive active, this has the potential <b>to equal Favonius Sword/Sacrificial Sword [R3+]\nSapwood Blade: </b>This weapon can be useful as a support weapon in<b> dendro based teams</b>. Outside of such teams, it is recommended to use the above options for higher damage.\n\nBig thanks to Quincy#6965 for helping us with the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">weapon calculations</a>.\n\n<b>Regarding Artifact Sets:\nEmblem of Severed Fate (4):</b> If you already have an invested <b>[C6]</b> Xingqiu with <b>Sacrificial Sword [R3+]</b>  then you don\'t need to farm for this set.\n<b>Noblesse Oblige (4): </b>Offers party-wide ATK boost, you can use this set on Xingqiu<b> if nobody else on the party is able to use it better</b>.\n<b>Blizzard Strayer (4): </b>This set is <b>only recommended on a freeze team</b> to optimize Xingqiu\'s stats since he can mildly disregard Crit Rate and build Crit Damage instead for more damage output. Despite it outperforming <b>Emblem of Severed Fate (4)</b> within this niche,<b> it is generally not recommended to specifically farm for this set.</b>\n<b>+20% Energy Recharge set (2) +20% Energy Recharge set (2)*: </b>This set is a cheap beginner option to maintain burst uptime well since it gives 40% Energy Recharge. Note that <b>it is not recommended to stay on this set</b> as Xingqiu contributes a lot of damage in his teams.\n\n<b>Regarding Main Stats Priority:</b>\nIdeally you would be running ATK% Sands when your ER needs are fulfilled. ER needs can be found in the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">Xingqiu Mastersheet</a>.\n\nPrioritize Energy Recharge first if you can\'t burst off cooldown',
      },
      'OFF-FIELD DPS (C0-C5)': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
            refine: [3],
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
            id: 'summit_shaper',
          },
          {
            id: 'amenoma_kageuchi',
          },
          {
            id: 'sacrificial_sword',
            refine: [1, 2],
          },
          {
            id: 'sapwood_blade',
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
          ['blizzard_strayer'],
          ['+20%_energy_recharge', '+20%_energy_recharge'],
        ],
        mainStats: {
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: "Activating XQ's Elemental Skill or Elemental Burst applies Hydro to the on-field character with his shield. (Pyro in specific)\n\nCleansing Electro may take an additional switch for your character with the rain swords active, while Cryo would freeze you in place.",
        note: '<b>[C6]</b> stands for "Constellation 6" and <b>[C0-C5]</b>  refers to a Xingqiu that is not yet C6.\n\n<b>Regarding Weapon Choices:\nThe weapon rankings assume you are running enough Energy Recharge to get Xingqiu\'s burst up off cooldown. </b>\n<b>Favonius Sword: </b>This weapon is better than <b>Sacrifical Sword [R3+]</b> if you intend on using Xingqiu in teams where there is not a second hydro unit.\n<b>Sacrificial Sword [R3+]: </b>This weapon is better than <b>Favonius Sword</b> when running Xingqiu in a team with more than one hydro unit. \n<b>Harbinger of Dawn [R5]</b>: At <b>[C6], </b>if you can consistently keep the passive active, this has the potential <b>to equal Favonius Sword/Sacrificial Sword [R3+]\nSapwood Blade: </b>This weapon can be useful as a support weapon in<b> dendro based teams</b>. Outside of such teams, it is recommended to use the above options for higher damage.\n\nBig thanks to Quincy#6965 for helping us with the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">weapon calculations</a>.\n\n<b>Regarding Artifact Sets:\nEmblem of Severed Fate (4):</b> If you already have an invested <b>[C6]</b> Xingqiu with <b>Sacrificial Sword [R3+]</b>  then you don\'t need to farm for this set.\n<b>Noblesse Oblige (4): </b>Offers party-wide ATK boost, you can use this set on Xingqiu<b> if nobody else on the party is able to use it better</b>.\n<b>Blizzard Strayer (4): </b>This set is <b>only recommended on a freeze team</b> to optimize Xingqiu\'s stats since he can mildly disregard Crit Rate and build Crit Damage instead for more damage output. Despite it outperforming <b>Emblem of Severed Fate (4)</b> within this niche,<b> it is generally not recommended to specifically farm for this set.</b>\n<b>+20% Energy Recharge set (2) +20% Energy Recharge set (2)*: </b>This set is a cheap beginner option to maintain burst uptime well since it gives 40% Energy Recharge. Note that <b>it is not recommended to stay on this set</b> as Xingqiu contributes a lot of damage in his teams.\n\n<b>Regarding Main Stats Priority:</b>\nIdeally you would be running ATK% Sands when your ER needs are fulfilled. ER needs can be found in the <a href="https://docs.google.com/spreadsheets/d/1wv1WXpkFkTX8SLCWLoQXlyxwnB2ZXZqQ6c9tSSVCAvQ/edit?usp=sharing">Xingqiu Mastersheet</a>.\n\nPrioritize Energy Recharge first if you can\'t burst off cooldown',
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
            id: 'memory_of_dust',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'dodoco_tales',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'frostbearer',
          },
        ],
        artifacts: [
          ['wanderers_troupe'],
          ['heart_of_depth'],
          ['heart_of_depth', '+18%_atk_set', '+80_em'],
          ['ocean-hued_clam'],
        ],
        mainStats: {
          sands: ['ATK%', 'Elemental Mastery'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: 'Due to her high stamina cost on charged attacks, her recommended attack strings for Vaporize playstyle is a mix of Charged attack spam and N2CJ (2 normal attacks followed by a charged attack cancelled with a jump animation). \n\nIn Electro-Charged teams, Barbara is expected to weave in attacks in between character swaps.',
        note: "This section is dedicated to the playstyle where Barbara is triggering the vaporize reaction with her charged attack, <b>for an Electro-Charged focused team, follow the weapon choices in the Support section instead. \n</b>For this playstyle, Barbara is heavily recommended to be run with Xiangling, as she is the only character that can keep up with Barbara's hydro application.\nAlways activate your skill first, as it reduces stamina consumption and if you have <b>[C2]</b>, it will give 15% Hydro Damage Bonus.\n\n<b>Regarding Weapon Choices:</b>\n<b>Memory of Dust: </b>This weapon performs poorly due to the need for stacks to be accrued over time.\n\n<b>Regarding Artifact sets:\nOcean-Hued Clam (4): </b>This is the best set to run in an Electro-Charged focused team, and in this scenario her mainstat choices should be optimised for healing instead of personal damage <b>(HP%/HP%/Healing Bonus).</b>",
      },
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
        note: 'Use Elemental Skill and/or Elemental Burst and immediately switch. Building ER is <b>not recommended</b> on Support Barbara as her burst should be used as a last resort and should not be expected to be cast every rotation. This is further compounded by the fact that Barbara has no particle generation. For this reason, Ocean-Hued Clam is also <b>not recommended</b> for Support Barbara.\n\n<b>Regarding Weapon Choices: \nEverlasting Moonglow:</b> For Electro-Charged teams, this weapon will provide the highest personal damage for Barbara. However, <b>Thrilling Tales of Dragon Slayers</b> will still provide the highest team damage due to its 48 ATK% buff. \n\n<b>Regarding Artifact Sets:</b>\n<b>Maiden Beloved (4): </b>This is a very resin inefficient set and should not be intentionally farmed for.\n<b>Instructor (4): </b>The hydro application from Elemental Skill can be used to trigger an elemental reaction and provide a teamwide Elemental Mastery buff.',
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
        note: '[WIP]\nCandace has generally poor personal damage, and as such performs best as a low investment support.\n\nCrit Rate only if running Favonius Lance',
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
        tip: "Optimal skill duration for [C0]: 7s, 9s or 12s.\nOptimal skill duration for [C1]: 9s, 11s or 14s.\n\nMelee Burst: Only to be used in situations where you need only 1 rotation to clear as the ER requirement to maintain burst uptime is quite high (170-190%), you'll always want to start your rotations with Ranged Burst since it refunds energy to maintain your rotation well.\n\nSkill Combo:\n- 2 NA + 1 CA (Optimal)\n- 3 NA + 1 CA (Recommended)\n- 5 NA + 1 CA (Recommended combo if using Rust or Thundering Pulse)\n\n*NA = Normal Attack, CA = Charged Attack\n\nThe Optimal combo provides more damage but consumes more stamina. Recommended combo provides slightly less damage but is more stamina efficient.",
        note: "The Weapon Rankings here are under the assumption that Childe is used with Bennett and Vaporizes his Burst, aswell as using the optimal attack combos listed in the Ability Tips section.<b>\n</b>\n<b>Regarding Weapon Choices:</b>\n<b>Polar Star:</b> Has varied performance depending on <b>how many passive stacks you get.</b> Getting<b> 2-3 stacks at the start of your rotation can perform better than Thundering Pulse</b> while getting <b>no stacks can perform worse than Skyward Harp.</b>  This only applies if you are Vaporizing Childe Burst together with Bennett.<b> In teams without Bennett, Polar Star will always perform better than the other options. </b>3 stacks can be achieved by doing <b>Skill + 1 Normal + 1 Charged Attack</b> before setting up your Vaporize Burst. If your Skill is still on cooldown, <b>a fully Charged Aimed shot against a riptide affected target</b>, OR a<b> Ranged Normal + quick Aimed shot </b>gives 2 stacks (which can be followed by Skill for the 3rd stack).\n<b>Thundering Pulse:</b> Slightly better than <b>Skyward Harp</b> depending on rotations - the more time you spend doing Normal Attacks, the more it pulls ahead over <b>Skyward Harp, </b>but it's not recommended to extend your Childe's melee rotation for this.\n<b>The Viridescent Hunt:</b> Offers a valuable passive that helps a lot in <b>grouping enemies</b>, which can offer a ton of damage from Riptide.\n<b>Blackcliff Warbow:</b> Due to inconsistency of gaining stacks,<b> falls off compared to other weapons at higher refinements.</b>\n<b>Prototype Crescent:</b> Requires you to trigger its passive by hitting the enemy's weak points, <b>falls off if compared with other options without the passive triggered.</b>\n<b>The Stringless: Main DPS Childe should only use this weapon in</b> <b>teams where you are Vaporizing your Burst</b>, as the Elemental Mastery substat loses a lot of value in other teams. If Childe is being used as a <b>Nuke Support only for his Vaporized Burst damage, R5 Stringless will rank just below Thundering Pulse. </b>Note that the stringless elemental skill passive does not affect Childe's melee stance auto attacks.\n\n<b>Regarding Artifact Sets:\nHeart of Depth (2) +18% ATK set (2): </b>This set is <b>only about 1-2 substats behind Heart of Depth (4)</b>, you can opt out for this set instead if you already have decent pieces.\n<b>Shimenawa's Reminiscence (4):</b> Due to this set requiring Childe to have around 140% Energy Recharge to reliably burst every rotation, it falls behind the other options. However, it outperforms <b>Heart of Depth (4) </b>if used in a single rotation setting <b>(ignoring ER)</b>.",
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
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge', 'Elemental Mastery'],
          goblet: ['Hydro DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'ATK%', 'Elemental Mastery'],
        talent: ['Burst', 'Skill'],
        tip: "To make Mona's burst damage trigger the Vaporize 2.0x multiplier:\n1. Apply Pyro on enemy\n2. Cast Burst (should react and remove Pyro status on the enemy after using Burst)\n3. Wait 2.5 seconds for Mona's burst ICD (Mona should stay on field if you have Bennett, to keep the buff)\n4. Swap to Pyro character and apply Pyro on enemy\n5. Burst will pop after enemy gets hit, applying Hydro and vaporising her damage.",
        note: "Mona's <b>Elemental Skill provides taunt </b>and procs wet status on enemies, her <b>Elemental Burst is also capable of rendering smaller enemies immobile</b> (Mona needs to be at least 20 levels within the enemy's level) and <b>providing a huge damage burst</b> (and additional omen debuff after proc). \n\n<b>Look to the Nuke Mona's Ability Tip section for Vaporize Nuke set up instructions.\n\n</b>",
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
        talent: ['Burst'],
        tip: "Mona's Burst applies bubble and Omen debuff upon cast, the count down timer only begins when the bubble is broken.\n\nFrozen enemies can have their bubbles preserved as long as enemies stay in a frozen state. This technique makes Mona a priority Support for Freeze DPS teams.",
        note: "Mona's main role on a freeze team is to <b>provide Omen debuff</b> from her burst as <b>it is extendable via Freeze mechanics.</b> Note that you must <b>apply Cryo before casting Mona's Elemental Burst </b>for the extension to happen. Omen Freeze extension can be done by <b>reapplying Cryo and Hydro aura consistently </b>(this can be done with Cryo/ Hydro infused Venti Elemental Burst + on-field Cryo/ Hydro aura).\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4):</b> Run this set if there's already another character with <b>Noblesse Oblige (4)</b> on the team.\n\n<b>Regarding Weapon Choices:\nThrilling Tales of Dragon Slayers:</b> Generally the best option on Freeze Support Mona<b> because she can furthermore buff the ATK of your Main DPS</b>. <b>This however comes with an assumption that with Thrilling Tales of Dragon Slayers, you still have 100% Elemental Burst uptime.</b> If you do not, pick the other Energy Recharge weapon options for more Elemental Burst uptime.\n\nOffensive stats aren't actually needed on a Freeze Support Mona, focus on Artifact Set Bonus\nOffensive stats aren't needed, just stack ER for comfortable Elemental Burst uptime",
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
        note: "Support Kokomi focuses on just using her Elemental Burst before her Elemental Skill's duration ends to refresh her skill duration. This allows 100% uptime on Hydro application from her Elemental Skill for Freeze / Electro-charge teams.\n\n<b>Regarding Weapon Choices:\nHakushin Ring: </b>This weapon can provide Elemental DMG% for the team in <b>Electro-charged teams</b> and will outperform Prototype Amber if you value damage more than healing.\n<b>Sacrificial Fragments: </b>Can be useful as Kokomi won't need to use her Elemental Burst to reset her skill duration. This <b>allows for smoother rotations</b> as she will not face the problem of missing out on the reset for her Elemental Skill due to not casting Burst in time.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4): </b>With proper extension of Kokomi's Elemental Skill, she can maintain near <b>100% uptime on this artifact set's 4 piece effect.</b>\n<b>Ocean Hued Clam (4):</b> This ranking assumes Kokomi is being used <b>only for her Elemental Skill.</b> If she is being used to attack onfield during Elemental Burst, this set may <b>overtake Tenacity of the Millelith (4). </b>\n\n<b>Regarding Main Stats and Sub Stats: \nEnergy Recharge:</b> Prioritise Energy Recharge first to ensure you can always use Elemental Burst before the Elemental Skill expires in order to maintain Hydro application. <b>Without Prototype Amber, Kokomi will need ~200-220%+ Energy Recharge (170-190% with Prototype Amber at [R1] and 150-170% at [R5])\n\n</b>\n\nMainstats are not important for Tenacity of the Millelith (4) if you do not need the extra healing. Focus on Energy Recharge substats instead.",
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
        subStats: ['HP%', 'Energy Recharge', 'ATK%', 'Flat HP', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: "Due to Kokomi's high stamina cost on her Charged Attacks, her best attack strings are: \n\nAt [C0]: N2D \nAt [C1]: N3D*\n\n*N3D might result in a loss of Beidou Stormbreaker hits (DPS loss), and as such is only recommended in a Vaporize comp where the added Hydro application is favoured.\n\n*NA = Normal Attack, D = Dash",
        note: "DPS Kokomi aims to maximise her onfield damage during her Elemental Burst's duration. Outside of her Elemental Burst, her damage is lackluster and not worth building for.\n\n<b>Regarding Weapon Choices:\nThrilling Tales of Dragon Slayers: </b>Although this weapon doesn't provide as much personal damage for Kokomi, the 48% ATK buff is usually more worth in most cases. <b>This can be her best weapon in for overall team DPS if you don't already have another Thrilling Tales of Dragon Slayers user in your team.</b>\n<b>Hakushin Ring:</b> This weapon can provide Elemental DMG% for the team in Electro-charged teams, and will usually be the best choice in those situations.\n\n<b>Regarding Artifact Sets:\nTenacity of the Millelith (4): </b>Although this set offers the lowest personal dmg for Kokomi, the 20% ATK team buff can sometimes be better for overall team DPS.",
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
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'HP%', 'Elemental Mastery', 'Flat Attack'],
        talent: ['Skill', 'Burst'],
        tip: "Try to activate Ayato's Elemental Burst before using his skill to maximize his Normal Attack DMG. Getting enough Energy Recharge for this is important, and varies based on team. Since the casting time is so long, it may not be worth snapshotting into buffs.\n\nThe amount of slashes Ayato can do during an Elemental Skill window is sometimes influenced by the player's set FPS.",
        note: "<b></b>DPS Ayato focuses on doing large amounts of on-field damage with his Elemental Skill and Elemental Burst. \n\n<b>Regarding Weapon Choices:</b>\n<b>Skyward Blade and Amenoma Kageuchi:</b> If you are running Ayato in<b> teams where he needs more than 140% ER to burst</b>, these weapons can be quite valuable.\n<b>Summit Shaper: </b>In teams where <b>ATK buffs are scarce</b>, this weapon has the <b>potential to rival Skyward Blade</b>.\n<b>Lions Roar: </b>In <b>Electro-Charged teams</b>, this weapon <b>performs about equal to The Black Sword</b>.\n\n<b>Regarding Artifact Sets:</b>\n<b>Echoes of an Offering (4): </b>The performance of this artifact set is <b>inconsistent</b>, and is based on user ping and other factors. <b>It is not recommended to run this set unless your ping is consistently below 100</b>. If you can achieve this, <b>Echoes of an Offering (4)</b> is only preferred on weapons with <b>high amounts of DMG% </b>such as <b>Mistsplitter Reforged</b> and <b>Haran Geppaku Futsu.</b> Otherwise,<b> Heart of Depth (4)</b> is preferred.\n<b>Blizzard Strayer (4): When run in a Freeze Team</b>, this is Ayato's best set. <b>Note that it is not recommended to farm specifically for this set.</b>\n<b>Thundering Fury (4): When run in an Electro-Charged team</b>, this is Ayato's best set due to the Cooldown Reduction on Elemental Skill allowing for shorter rotations. <b>Note that it is not recommended to farm specifically for this set.</b>",
      },
    },
  },
  yelan: {
    roles: {
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'aqua_simulacra',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'polar_star',
          },
          {
            id: 'mouuns_moon',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'thundering_pulse',
          },
          {
            id: 'sacrificial_bow',
            refine: [3],
          },
          {
            id: 'slingshot',
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
          sands: ['Sands: Energy Recharge', 'HP%'],
          goblet: ['Goblet: Hydro DMG', 'HP%'],
          circlet: ['Circlet: Crit Rate', 'Crit DMG', 'HP%'],
        },
        subStats: ['Energy Recharge', 'HP / Crit Rate / Crit DMG', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attacks'],
        tip: '',
        note: "Yelan is an off-field DPS who is able to <b>apply Hydro off-field via her Elemental Burst</b>, this part of her kit acts similarly like Xingqiu's Elemental Burst. <b>Yelan mainly scales off HP%</b>, so don't build her with ATK%. <b>Yelan also wants a lot of Energy Recharge to be able to maintain her Elemental Burst uptime (up to ~250 ER)</b>, this can decrease depending on the number of Hydro units or energy providers in the team.\n\n<b>Regarding Weapon Choices:</b>\n<b>Elegy for the End: </b>This weapon is to be used <b>only in reaction based comps such as Vape Hu Tao,</b> Yelan's personal damage is lower than other options on this list, but is more beneficial for the team's damage per rotation.\n<b>Mouun's Moon: </b>This weapon <b>works best at [R3+] </b>and <b>makes HP% Goblet potentially a stronger option instead of Hydro Bonus especially in comps with strong DMG% buffs</b>.\n\n<b>Regarding Artifact Main Stats:</b>\n<b>Goblet: </b>HP% Goblet is to be used <b>only if Hydro DMG% option is very bad and HP% option is very good</b>, or <b>if Yelan has strong DMG% buffs</b> such as<b> Emblem of Severed Fate (4)</b> +<b> Mouun's Moon</b> (especially with refinements) or Raiden + Kazuha and so on.\n\n<b>Regarding Talent Priority:\nNormal Attacks: </b>Level this up only if you want to constantly use her Breakthrough Barbs.\n\nBig thanks to Vladone ツ#9281 and jstern25#1399 from Yelan Mains for helping us with the <a href=\"https://docs.google.com/spreadsheets/d/1ULEvZVo1Er1N-1_f729qiheMZusEC6qpJ5Yn8vyrqr8/edit?usp=sharing\">calculations</a>.\n\n",
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
            id: 'favonius_sword',
          },
          {
            id: 'xiphos_moonlight',
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
            id: 'freedom-sworn',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'primordial_jade_cutter',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith', 'heart_of_depth'],
          ['tenacity_of_the_millelith', 'noblesse_oblige'],
          ['tenacity_of_the_millelith', '+80_em'],
          ['deepwood_memories'],
        ],
        mainStats: {
          sands: ['HP%', 'Energy Recharge'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: ['HP%', 'Flat HP', 'ER', 'EM', 'Crit Rate / Crit Damage'],
        talent: ['Skill', 'Burst'],
        tip: 'Off Field Combo\n(Q) E N3 (Sword Dance) - Minimizes her own Bloom ownership\n\n(Q) E E E E (Whirling Steps) - Primarily used when Nilou is wielding Key of Khaj-Nisut',
        note: "Work in Progress and therefore information is Subject to Change</b>\nBloom Support\nAs a Bloom Support, Nilou's role is to maximize a team's Bloom Damage in teams of strictly Hydro and Dendro characters. Level 90 is highly recommended to maximize Nilou's HP and Bloom Damage\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Sword and Festering Desire and Sacrificial Sword:</b> Strong options if opting to Burst every rotation.\n\n<b>Regarding Artifact Sets:</b>\n<b>+80 Elemental Mastery set (2):</b> These sets provide no benefit if Nilou isn't triggering Blooms.\n<b>Deepwood Memories (4):</b> Can be an option if other teammates are not Deepwood Memories holders.\n\nER if bursting every rotation\nTalent levels do not affect Nilou's buff to Bloom damage, so heavy investment in Talents is not necessary",
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
        tip: "Diona's Elemental Skill grants you a cryo shield which allows cleansing. Every time you swap characters with the shield up, it applies cryo. This acts as a cleanse.",
        note: "The shielding Diona puts out should offset the need for healing from her burst. The damage boost from <b>Noblesse Oblige (4)</b> has more practical use. Additionally, her first constellation greatly increases her ultimate uptime, further lowering the healing needed.\n\nAs a support, Diona's typically used for three things; Shielding, Healing, and Cryo particle generation. Pairing Diona with Cryo carries such as Ganyu and Eula allows you to funnel energy into your DPS characters while providing them with quick shields for stagger resistance. Weapons such as Sacrificial Bow and Favonius Warbow greatly increase her potential as a battery.\n\n<b>Regarding Weapon Choices:</b>\n<b>Sacrificial Bow: </b>Prefered over <b>Favonius Warbow</b> at higher refinements for consistency and when batterying another cryo unit.\n<b>Favonius Warbow:</b> It is <b>recommended to</b> build some Crit Rate coverage to have a higher chance of triggering bow passive for energy.\n<b>Recurve Bow: </b>This bow will be your best choice for stronger shields, but it reduces Diona's burst uptime significantly due to having no Energy Recharge on her weapon.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige (4): </b>This set provides an atk buff while also increasing burst damage - this set is usually used with healers because you want to use damage sets on other support units such as Xingqiu or Beidou.\n<b>Emblem of Severed Fate (2) Tenacity of the Milellith (2): </b>Provides both ER and HP which are both valuable for a support diona, increasing ult uptime and healing strength respectively.\n\n<b>Regarding Main Stats Priority:</b> \nFull Stack HP% is recommended if you want stronger shields but a weaker heal. You can use Healing Bonus Circlet if you want a nice balance between the two. \n\n<b>Regarding Talent Priority:</b> \nPrioritise whichever your Diona is geared for (shielder or healer), if built for a balance between the two, level both equally.\n\n",
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
        tip: "Chongyun's Elemental Burst is calculated as Claymore damage, which means it breaks Geo Structures/ Shields at a much easier rate and can proc shatter.",
        note: "<b></b>It is preferred to use Chongyun as a Sub DPS/ Nuke over Main DPS as <b>his Normal Attack scalings are very low</b>, even when including Constellation 1. His <b>Elemental Burst on the other hand hits extremely hard </b>on later constellations and takes a much higher total damage portion over his Normal Attack. On top of that, you can Reverse Melt all 3 hits of his Elemental Burst on enemies applied with strong Pyro, such as Bennett's Elemental Skill and Elemental Burst.\n\nChongyun is <b>very niche</b> as he only performs well in certain teams and can completely destroy the other. He is mainly used on a team as an <b>enabler</b>, be it for <b>Reverse Melt teams</b> (e.g. Melt DPS Bennett) or <b>Freeze teams</b> (e.g. Freeze DPS Kaeya). He also <b>does not function well with Physical teams</b> (e.g. Razor, Eula) as it renders his Elemental Skill useless because it converts their <b>Normal Attack damage from Physical to Cryo</b>. They're usually using a Physical Goblet, so if they got their Normal Attack converted from Physical to Cryo, <b>they won't benefit from Physical DMG Bonus</b> from the goblet, thus it's a DPS loss.\n<b>\n</b>At<b> [C2]</b>, his Elemental Skill <b>reduces ability cooldown that is casted within the zone by 15%</b>. This is one of the few abilities in the game that can reduce cooldown.\n\n<b>Regarding Weapon Choices:\nSerpent Spine:</b> This weapon outperforms <b>Wolf's Gravestone</b> if we only look at Chongyun's damage contribution <b>[5 Stack Assumed]</b>. <b>Wolf's Gravestone</b> is ranked higher as it provides more teamwide DPS and does not come with the need to acquire stacks before engaging in combat.\n<b>Redhorn Stonethresher: </b>Depending on the amount of ATK% buffs you're getting, this weapon can overtake <b>Wolf's Gravestone</b> in personal damage.<b>\nAkuoumaru</b>: At <b>[R1]</b>, <b>Akuoumaru</b> beats <b>Luxurious Sea-Lord</b> if Chongyun is used in a team with <b>260 or greater</b> total team energy. <b>Akuoumaru</b> only beats <b>Luxurious Sea-Lord</b> if <b>[R2]</b> and above otherwise.\n<b>Sacrificial Greatsword: </b>This weapon is your best choice if faced in a situation where you heavily rely on Chongyun's Cryo infusion uptime.\n<b>\nRegarding Artifact Sets:\nNoblesse Oblige (4):</b> Chongyun is one of the best <b>Noblesse Oblige (4)</b> holders since he has low energy requirements for his Elemental Burst.\n\n<b>Regarding Talent Priority: \n</b>Prioritize Elemental Burst on a Melt team as it scales better than his Elemental Skill.\nPrioritize Elemental Skill on a Freeze team to furthermore extend the duration of the Cryo infusion.\n\n",
      },
    },
  },
  kaeya: {
    roles: {
      'CRYO DPS': {
        recommended: false,
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
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit DMG'],
        },
        subStats: ['Crit DMG', 'ATK%', 'Energy Recharge', 'Crit Rate', 'Flat ATK'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: 'As a Freeze DPS, he gains over 55%+ Crit Rate with the right team set up:\n- 15% from Cryo Resonance against Cryo affected enemies\n- 40% from Blizzard Strayer against Frozen enemies\n- 15% from [C1] against Cryo affected enemies',
        note: 'Kaeya Cryo DPS is mostly used in a team with Chongyun and Xingqiu/Barbara while having <b>Blizzard Strayer (4)</b> equipped. In this team, Kaeya has 55% crit rate against Frozen enemies without any additional Crit stats, which means Crit Rate substats are generally prioritized less than ATK% or Crit DMG.\n\nCrit Rate Generally has less value than the other offensive stats due to Blizzard Strayer and Cryo Resonance\nIf not paired with Chongyun, Skill takes priority over Normal Attacks',
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
          sands: ['Energy Recharge', 'ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "Kaeya's Elemental Burst makes him an excellent source of Cryo application for characters that often stay in melee range, although his burst can't be fully utilized with Reverse Melt teams due to how his Cryo damage is split into a barrage of attacks.\n\nIn most teams, investment for damage is not a necessity, most notable examples are Razor teams and Hutao Xingqiu teams where his general purpose is to apply Cryo, instead of being the damage dealer. This does not mean that he should not be invested, but is still useful even without proper investments.\n\n<b>Regarding Weapon Choices:</b>\n<b>Freedom Sworn:</b> This weapon's ranking is assumed with <b>Reverse Melt teams</b> where the EM stat would be useful.\n<b>Skyward Blade:</b> In teams with a <b>2nd Cryo unit generating energy</b>, this weapon would have a lower priority as the Energy Recharge stat would mostly be wasted.\n<b>Lion's Roar / The Alley Flash / Iron Sting:</b> These weapons' rankings are assumed with <b>Reverse Melt teams</b> where the passive and EM stat would be useful. At<b> [R5]</b>, these weapons would <b>outperform Summit Shaper.\n\nRegarding Artifact Sets:\nInstructor (4): </b>Due to his ability to easily trigger <b>Instructor's (4)</b> passive, Kaeya is a good holder of <b>Instructor (4)</b> for Reverse Melt teams. Aside from ER%, most of his other main stats don't matter as much, making this one of his budget support builds. \n<b>Noblesse Oblige (4): </b>This set is only recommended if there is no other member of the team running <b>Noblesse Oblige (4).</b>",
      },
    },
  },
  rosaria: {
    roles: {
      'REVERSE MELT': {
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
          ['emblem_of_severed_fate'],
          ['gilded_dreams'],
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
        note: "This build capitalizes on the fact <b>Rosaria's skill and burst dont have an ICD</b>, allowing her to melt all skill and burst procs. Which in combination with <b>snapshotting buffs onto her burst</b> makes it one of her <b>highest personal damage builds</b>.\n\n<b>Regarding Weapon Choices:</b>\n<b>Vortex Vanquisher:</b> The ranking assumes you are unshielded, If you do use a shield it can surpass <b>Calamity Queller</b>.\n<b>Dragon's Bane:</b> At High refinement <b>[R4-R5] </b>this performs a tad better than <b>Primordial Jade Winged-Spear</b>.\n<b>Wavebreaker's Fin:</b> At High refinement <b>[R4-R5]</b> with a 260 energy cost team<b> </b>this performs just <b>below Staff of Homa</b>.\n\n<b>Regarding Artifact Choices:\nEmblem of Severed Fate:</b> in teams where her energy requirements are higher <b>(130%+)</b> it can surpass <b>Lavawalker (4)</b>.",
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
        note: "This build can be used on <b>both a quickswap/sub-dps</b> and <b>perma-freeze dps</b> Rosaria. If played as a <b>perma-freeze dps</b>, Rosaria has the same team comp as Freeze Kaeya. Check Kaeya's ability tips section for teamcomp setup.\n\n<b>Regarding Substats: </b>\nRosaria does not need much Energy Recharge if paired with Kaeya. If paired with another Cryo unit such as Chongyun or Ayaka, she will need ~130-150% Energy Recharge\nCompared to Kaeya, Rosaria has even less desire for Crit Rate, as her Ascension 1 Talent includes an extra 12% Crit Rate once skill hits the back of an enemy.\n\n<b>Regarding Weapon Choices:</b>\n<b>Wavebreaker's Fin:</b> At high refinement <b>[R5]</b>, this weapon can perform similarly to <b>Staff of Homa, </b>and even outperform it with a high energy cost team <b>(260 ER).</b>\n<b>Deathmatch:</b> Rosaria gets a lot of Crit Rate from <b>Blizzard Strayer (4) and Cryo Resonance</b>. As a result, this weapon falls off in value as you will tend to overcap above 100% Crit rate. If Rosaria is being used without the <b>Blizzard Strayer (4)</b> set, then this weapon can perform better compared to other options.\n\n<b>Regarding Artifact Choices:</b>\n<b>Noblesse Oblige: </b>This set is <b>only used in her sub-dps/quickswap roles not her perma-freeze dps role</b>. Also it should only be considered when you have no decent <b>Blizzard Strayer (4)</b> pieces and no one else on the team is holding <b>Noblesse Oblige (4)</b>.",
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
        note: "This Build focuses on her <b>Buffing/Energy generation/Cryo application capabilities</b>. Though it <b>does not mean that you dont invest in her personal damage</b>, only that it's a lower priority overall.\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Lance:</b> Her best option in situations where you havent met your teams energy requirements and need the extra particles, outside of that though you would be better of using a Crit Rate weapon that improves her A4 buff if you dont need the extra particles.\n\n<b>Regarding Artifact Sets:</b>\n<b>Instructor (4):</b> Can be the better option in teams that <b>prefer the Elemental Mastery buff over ATK</b>, such as <b>Hu Tao VapeMelt</b>.",
      },
    },
  },
  layla: {
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
        tip: '',
        note: 'TBD',
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
          ['+15%_healing_bonus_set', '+18%_atk_set'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar', 'emblem_of_severed_fate'],
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
          sands: ['EM', 'ATK%'],
          goblet: ['Cryo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'Elemental Mastery', 'ATK%', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "In some teams and situations, using Ganyu's Elemental Burst can be detrimental to overall damage due to stealing Pyro aura, thus reducing the amount of CAs melting.",
        note: "Ganyu's Level 2 Charged Shot applies two instances Cryo as they do not share the same ICD, which allows you to trigger Melt reaction twice for both damage instances. Charged Attack will be the majority of her damage output while neglecting her Skill/Burst damage contribution for most scenarios.\n\n<b>Regarding Weapon Choices:\nAmos' Bow: </b>This is an excellent weapon for Ganyu since her Level 2 Charge Shot Bloom extends arrow flight duration and you can get 3 stacks of Amos' passive even on point blank range.\n<b>Hamayumi: </b>Due to its passive, this weapon prefers <b>Wanderer's Troupe (4)</b> instead.\n<b>Prototype Crescent: </b>At higher refinement levels with good uptime on its passive, it can potentially be on par with <b>Skyward Harp.</b> However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly. \n\n<b>Regarding Artifact Sets:\nShimenawa's Reminiscence (4)</b> and <b>Wanderer's Troupe (4)</b>:<b> </b>If you are able to squeeze 5 Charged Attacks during the 10 second buff duration,<b> Shimenawa's Reminiscence (4)</b> pulls ahead of <b>Wanderer's Troupe (4).</b> Due to it being very difficult to do, <b>Wanderer's Troupe (4)</b> will usually end up dealing more damage for most players. Note that unless you intend to <b>artifact strongbox</b> <b>Wanderer's Troupe pieces</b>, <b>Shimenawa's Riminiscence (4)</b> remains the better set to farm as the domain is greatly resin efficient.\n\n<b>Regarding Talent Priority:\n</b>Ganyu's Elemental Burst is low priority on a Melt Build since most of the times, you don't cast her burst at all so that it doesn't steal your Melt reaction.\n\n",
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
        note: "<b></b>Freeze Ganyu gives a lot of i-frames since you would be spamming Elemental Burst from all of your party members off cooldown. Ganyu's Elemental Burst can deal a ton of damage based on how grouped the enemies are, due to the quadratic scaling on her Elemental Burst.<b>\n\nRegarding Weapon Choices: \nPolar Star: </b>This weapon is much harder to optimize with, due to having a very high Crit Rate stat resulting in your Crit Rate going well above 100%. However, if optimised properly <b>(i.e. very little Crit Rate substats)</b>, it pulls quite far ahead of all the other options.<b>\nAqua Simulacra: </b>Due to the sheer amount of Crit stats you can get from <b>Blizzard Strayer (4)</b>, Ganyu's ascension passive and this weapon itself, you can consider running an ATK% circlet, especially if it has better substats than your Crit DMG one.\n<b>Amos' Bow:</b> In quickswap heavy rotations (Ganyu Mona Venti Diona) where you usually don't do a lot of Charged Shots, this weapon performs worse than the other 5 star options listed.\n<b>Prototype Crescent: </b>Similar to the Melt Build, this weapon at higher refinement levels and good passive uptime can pull ahead of some of the 5 star options such as <b>Thundering Pulse</b> and <b>Skyward Harp.</b> However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly. \n\n<b>Regarding Artifact Sets:\nBlizzard Strayer (4): </b>This set is the go to set for a Frozen team comp due to the huge stats it provides.<b>\n</b>",
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
        subStats: ['Energy Recharge', 'Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
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
        note: "Eula's weapon rankings assume that you're running her with a Cryo battery (i.e. Diona) instead of Bennett. She would usually need 30%-60%+ Energy Recharge from substats depending on what team and Cryo batteries you use.\n\nEula's Elemental Burst does not snapshot. This means that any buffs Eula has upon casting Burst will not be taken into effect if the buff duration expires before the Lightfall Sword hits. \n\n<b>Regarding Weapon Choice:\nRedhorn Stonethresher: </b>This weapon can overtake <b>Wolf's Gravestone</b> in terms of Eula's own damage if team provides enough ATK% buffs, but <b>Wolf's Gravestone</b> can make up the damage difference by buffing team damage.<b>\nSkyward Pride: </b>This weapon is more forgiving towards ER substats. If there is a Cryo battery unit in your team (Diona with <b>Sacrificial Bow </b>or Kaeya with <b>Favonius Sword</b>) or if your team generates enough particles on their own, <b>Skyward Pride</b> loses effectiveness compared to the above options. \n<b>Akuoumaru:</b> This weapon will outperform <b>Luxurious Sea Lord</b> at higher refinements.\n\n<b>Regarding Artifact Sets:</b>\n<b>Pale Flame (4): </b>This is Eula's optimal artifact set and it relies on having a condition fulfilled in order to outperform <b>Pale Flame (2) Bloodstained Chivalry (2).</b> If you are able to sustain the conditional buff, you will be able to achieve a 50% Physical DMG Bonus + 18% ATK. Without using your Elemental Burst, you can sustain the<b> Pale Flame's 4 piece</b> set bonus because each stack lasts 7s and it refreshes per stack, and Eula's Elemental Skill cooldown is only 4 seconds when doing 1-taps, therefore you can keep the condition up. When using this set, it is recommended to not use Hold Skill cast until your Lightfall Sword is nearly about to end. This restriction is only for players who don't have Eula <b>[C2+]</b>. Please visit the Ability Tips for her combo.\n<b>Pale Flame (2) Bloodstained Chivalry (2): </b>This is a non-conditional, consistent artifact set that provides you a constant 50% Physical DMG bonus. While that by itself is amazing, <b>Pale Flame (4)</b> can outperform this set because it also has another 18% ATK buff and is easily maintained through her low tap skill cooldown.",
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
        note: "Kamisato Ayaka is a pretty straightforward DPS that <b>deals most of her damage from her Elemental Burst</b>. She has very high scalings on her burst at the cost of it being 80 energy. You will likely need<b> another Cryo battery on the team </b>to provide energy for her (Diona, Kaeya, Rosaria, etc). She has a <b>special dash</b> (like Mona) and after she dashes, she will get a Cryo infusion on her Normal Attacks. Ensure you always have this bonus active to maximise your rotation damage.\n\n<b>Regarding Main Stats Priority:\n</b>Circlet main stat will be dependant on your overall stats, depending on your overall stats, one can be better than the other. Since Ayaka is able to get a lot of Crit Value from <b>Blizzard Strayer (4)</b> set, ascension passive, and also possibly weapons, ATK circlets can be competitive to Crit ones, it also has a better drop rate, so don't throw away your good ATK circlets.\n\n<b>Regarding Weapon Choices:</b>\n<b>Primordial Jade Cutter:</b> With <b>Blizzard Strayer (4)</b> and Cryo Resonance, this weapon overcrits, so try to avoid getting Crit Rate substats.\n<b>Aquila Favonia:</b> While <b>Aquila Favonia</b> has Physical Damage% as a main stat, which is basically useless on Ayaka, it is still a good statstick as it has a high base ATK and ATK% buff from the passive, however, it's not a huge upgrade over the other 4 star options and there might be a character which can utilize this weapon better (such as Bennett).\n<b>Skyward Blade: </b>The Energy Recharge main stat provided from this sword makes Ayaka comfortable in terms of having a good burst uptime, try to avoid getting Energy Recharge substats since the weapon already provides you with enough Energy Recharge.\n<b>Amenoma Kageuchi: </b>Lowers Ayaka's Energy Recharge requirement which allows her to allocate some of her Energy Recharge substats to other offensive substats. This weapon is also free and craftable while being competitive with other 4 star and even some 5 star weapons as well on the list.\n<b>Blackcliff Longsword: </b>Due to Ayaka's burst snapshotting, her burst is unable to benefit from the ATK buff from this weapon's passive on the first rotation (since you cast it immediately before defeating an opponent).\n<b>Harbinger of Dawn: </b>A good Crit statstick if you can keep the requirements up (having >90% HP).\n\nCrit Rate loses value here assuming you're running Blizzard Strayer (4), if you're not using that artifact set, then it has the same priority as Crit DMG (You still want to aim for 1:2 ratio in the end)",
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
        note: "<b></b>Aloy is much preferred as a Burst Support over Main DPS as getting coil stacks for her Cryo infusion can be quite unreliable.<b> Aloy needs 4 coil stacks to get the Cryo infusion and you can only get 1 stack every 0.1 seconds</b> which is quite hard to do considering the Bomblets are scattered all over the place. One thing to note regarding Aloy's coil stacks is that <b>she can still get coil stacks even when she's off-field.</b>\n\nAloy is very niche as she only performs well in certain comps and even then, she's still completely replaceable by other characters.<b> She can be utilized on a Freeze team </b>where she can be a battery and nuke at the same time since she provides 5 Cryo particles on her Elemental Skill. <b>She can also be utilized on a Melt team</b> where you can melt her Elemental Burst for quite a decent amount of damage.\n\n<b>Regarding Weapon Choice:</b>\n<b>Polar Star: </b>Forcing to get <b>Polar Star</b> stacks isn't worth due to consuming extra time to get those stacks.\n<b>The Stringless: </b>Placement was considering Aloy is used on a Reverse Melt team. On Reverse Melt Aloy, Stringless especially at higher refinement levels can pull ahead of <b>Thundering Pulse.</b>\n<b>Prototype Crescent: </b>Assumes the passive is active by proccing a weak point shot. This weapon especially at higher refinement levels can be as good as <b>Skyward Harp.</b>\n<b>Sacrificial Bow: </b>A pretty decent option to make Aloy a Cryo battery as her Elemental Skill provides 5 Cryo particles.\n\n<b>Regarding Artifact Sets:</b>\n<b>Blizzard Strayer (4): </b>This artifact set is best used on a Freeze-focused Aloy as it provides a ton of Crit Value.\n<b>Wanderer's Troupe (2): </b>This artifact set bonus only benefits a Melt-focused Aloy, Elemental Mastery provides nothing on a Freeze Aloy.\n<b>Noblesse Oblige (4): </b>Aloy is one of the best <b>Noblesse Oblige (4)</b> holders since she has low energy requirements and cooldown for her Elemental Burst.\n\n<b>Regarding Artifact Main Stat and Substats Priority: </b>\n<b>Elemental Mastery </b>is only an option if your Aloy is played on a <b>Reverse Melt team</b> as it provides nothing to a Freeze Aloy.",
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
      EM: {
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
        note: "Sucrose's Ascension 4 Talent boosts the entire team's EM by 20% of Sucrose's total EM, this is why you want to stack as much Elemental Mastery as possible in her artifacts. As a support, most of Sucrose's value lies on her Ascension 1 and 4 talents, hence leveling her other talents (Normal Attack, Skill, Burst) is not required.\n\n<b>Regarding Weapon Choices: </b>\n<b>Thrilling Tales of Dragon Slayers: </b>This weapon does not provide any EM, however it overtakes the other weapons on the list when it comes to buffing your team.<b> It offers 48% ATK boost to the character you swap to </b>which is equivalent to 1 main stat. This buffs your DPS more compared to <b>Sacrificial Fragments</b> which gives ~44EM, equivalent to only 2 substats.<b>\nHakushin Ring: </b>This weapon is a good option for teams where Sucrose can <b>swirl Electro</b> to trigger its damage-boosting passive. In Electro-Charged teams, she can buff Hydro DMG% as well.\n<b>Favonius Codex</b>: This weapon can be useful if you<b> value the extra energy generation from the passive.</b> You may need to get a few crit rate substats to trigger the passive reliably.\n\nThere are some team compositions in which Sucrose's Elemental Mastery is not a priority, such as Freeze teams or an Anemo battery for Xiao. In such situations it's better for Sucrose to use <b>Thrilling Tales of the Dragon Slayers.</b>\n\nSucrose's Talent Levels are not a necessity.",
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
        note: "Sayu does more damage with EM builds and heals more with ATK hybrid builds, Healing Bonus hat can be used for better heals while maintaining respectable damage. Note that Sayu wants a large amount of energy recharge when used as the only anemo slot on the team (200%ish).\n\n<b>Regarding Weapon Choices:</b>\n<b>Wolf's Gravestone:</b> This is a universal claymore that is capable of buffing your teammates along with providing more healing in Sayu's case. It is best used once you achieve your ER threshold.\n<b>Forest Regalia</b>: When used in its niche with aggravate teams it can outpeform <b>Katsuragikiri Nagamasa.</b> Outside of that its just a Energy Recharge% stat stick.\n\n<b>Regarding Artifact Sets:\nViridescent Venerer:</b> The bread and butter artifact set for Anemo units, this set provides the ability to shred the enemy's elemental resistance while also buffing Sayu's swirl damage output.",
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
        artifacts: [['viridescent_venerer'], ['viridescent_venerer', '+18%_atk_set', '+80_em']],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Anemo DMG'],
          circlet: ['Crit Rate', 'Crit DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery'],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: '',
        note: "Shikanoin Heizou's Anemo DPS build is roughly equal to his EM build assuming he <b>isn't being used in an electro-charged team</b>, He has very <b>low energy recharge needs</b>, ranging from <b>110% to 130%</b>. At <b>[C4] </b>he can run <b>100%</b> energy recharge.\n\n<b>Regarding Weapon Choices:</b>\n<b>Lost Prayer to the Sacred Winds:</b> In teams where Shikanoin Heizou and <b>Bennett are used in the same team</b>, this weapon is better than <b>Skyward Atlas</b>.\n\n<b>Regarding Artifact Sets:\nViridescent Venerer:</b> This is both Shikanoin Heizou's best personal damage set, and his best set for supporting the team.",
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
        note: 'Shikanoin Heizou does not get the same benefits from an EM build as other anemo users do. He still has to level his talents, and allocate <b>substats into offensive substats </b>such as attack and crit to equal Anemo DPS. However it is notiably better than Anemo DPS build if used in Electro-Charged teams.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige: </b>Only use this set if you already have a <b>Viridescent Venerer (4)</b> user on your team',
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
        note: "Support Shikanoin Heizou forgoes his personal damage for support capabilites. However, <b>none of Heizou's support abilities are dependant on his stats </b>and instead comes in the form of a flat 80 elemental mastery to all party members. He can run <b>any artifacts </b>to help his DPS.\n\n<b>Regarding Weapon Choices:\nHakushin Ring: </b>In electro-charged teams, this can be used to buff both anemo and electro damage, and scales well with refines. It is recommended to run Anemo DMG based artifacts on this build.\n<b>Prototype Amber: </b>In teams where there is no healer, Shikanoin Heizou can use this weapon to help the team's survivability.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige/Instructors:</b> Only use this set if you already have a <b>Viridescent Venerer (4)</b> user on your team",
      },
    },
  },
  faruzan: {
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
        tip: '',
        note: 'TBD',
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
        artifacts: [['viridescent_venerer'], ['viridescent_venerer', '+80_em', 'noblesse_oblige', '+18%_atk_set']],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%', 'Energy Recharge'],
          goblet: ['Elemental Mastery', 'Anemo DMG'],
          circlet: ['Elemental Mastery', 'Crit Rate', 'DMG'],
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "This section is dedicated to utilising the Anemo Traveler's Elemental Skill / Burst. Due to how little field time this playstyle takes, the Traveler can also fulfill the role of a quickswap style Sub-DPS.\nAnemo Traveler can require <b>up to 160% Energy Recharge.</b>\n\n<b>Regarding Weapon Choices:</b>\nAnemo Traveler can either go for a <b>full Elemental Mastery </b>build or a <b>full ATK/Crit</b> build without much difference in damage. The weapon rankings listed here will not change much between the two builds.\n<b>Sacrificial Sword:</b> This weapon's ranking assumes you make use of the passive Elemental Skill reset, however doing so will require you to <b>stay onfield for a much longer period of time which may not be ideal sometimes.</b>\n<b>Amenoma Kageuchi:</b> This weapon <b>reduces your ER% requirements to ~135% at [R1] and ~110% at [R5].</b> At [<b>R5]</b>, this weapon will be <b>better than Sacrificial Sword.</b>\n<b>Favonius Sword:</b> Although this weapon does not provide much damage, <b>the Energy generated by the passive can sometimes be more beneficial to your team.</b> Make sure to build some amount of Crit rate to reliably trigger the passive.\n\nCrit Rate / DMG will have higher priority for a full Crit build\nFor an EM-focused build, upgrading Traveler's talent levels isn't a necessity.",
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
          ['+18%_atk_set', 'pale_flame', 'bloodstained_chivalry'],
        ],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Physical DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note: '<b>Not Recommended for End Game Content.</b>\n\n<b>Regarding Artifact Sets: \nPale Flame (4): </b>When running this set, make sure you do Press Cast and not Hold Cast, as the Hold Cast Skill Cooldown would be too long for you to refresh your stacks.',
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
          ['viridescent_venerer', '+18%_atk_set'],
          ['viridescent_venerer', 'emblem_of_severed_fate'],
          ['emblem_of_severed_fate'],
          ['noblesse_oblige', 'viridescent_venerer', '+18%_atk_set'],
        ],
        mainStats: {
          sands: ['ATK%', 'Energy Recharge', 'Elemental Mastery'],
          goblet: ['Anemo Damage', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Burst = Skill'],
        tip: '',
        note: "Jean's Elemental Skill can be used to fling smaller mobs into the air to deal fall damage, and to stagger bigger ones. <b>Her healing scales with ATK.\n</b>\n<b>Regarding Weapon Choices:\nAmenoma Kageuchi: </b>This weapon can lower your ER% requirements from anywhere between ~150% to no additional ER% needed, depending on the number of stacks on the passive and the refinement of this weapon. As such, at higher refines / more stacks on the passive, this weapon can perform better than <b>Skyward Blade,</b> while at lower refines / less stacks, it can perform worse.<b>\nFreedom-Sworn: </b>The ranking here only assumes Jean's personal damage and not the utility it gives. If you want to furthermore buff your main DPS, you can give this sword to Jean as she can trigger <b>Freedom-Sworn's</b> skill relatively easily since Anemo is always trigger. \n<b>Lion's Roar: </b>Depending on passive uptime, it can be ranked over <b>Favonius</b> <b>Sword</b> (at 50% uptime) and even <b>Aquila</b> <b>Favonia </b>(at 100% uptime).\n\n<b>Regarding Artifact Sets:\nViridescent Venerer (4): </b>The bread and butter for Anemo characters in general, as it is <b>commonly used for the 40% elemental resistance shred.\nNoblesse Oblige (4):</b> Another option for providing utilities to the team. This set gives a 20% partywide ATK boost after Jean casts her Elemental Burst.\n<b>Ocean-Hued Clam (4): </b>The best set for Jean's personal damage, as the damage it deals scales with Jean's burst healing. However, because Jean's total damage output is on the low end, it is generally recommended to prioritize utility options such as <b>Noblesse Oblige (4)</b> or <b>Viridescent Venerer (4)</b> over this set.\n\n<b>Regarding Main Stats Priority:</b>\nElemental Mastery should only be used <b>when Jean is paired with Bennett</b>, as her burst ticks will swirl the self applied Pyro from Bennett's burst, acting as a damage source and Pyro application. Because of this, high burst uptime is required and so weapons with EM and ER passives are preferred. <b>(Freedom Sworn, Skyward Blade,  Favonius Sword, Sacrificial Sword, Iron Sting, Amenoma Kageuchi)\n</b>\n<b>Regarding Talent Priorities: \n</b>If you prefer more damage than healing, prioritize Elemental Skill over Elemental Burst since it scales better.\nFor Support Jean, you can either go for more ATK for stronger heals, but relatively lower Burst uptime, or more ER for lower heals, but higher Burst uptime. Choosing between these two is up to personal preference, although if another Anemo character is on the team, Jean has very little energy problem and can potentially go full Sub DPS build.\n\n",
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
        tip: "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on swirl first.(E > Q to avoid this issue)\n\nYou can infuse elements onto Venti's Burst if you walk up with an element status on you. (e.g. Bennett Burst > Venti Burst > Walk up to infuse Pyro)\n\nCheck out  this link  to see which characters can hit the enemies sucked and ragdolled in Venti's burst.",
        note: "This build focuses on damage over ER because of his ER ascension stat. This weapon order is in the assumption of <b>EM</b> <b>Venti</b>, as Crit Venti's damage potential is limited to either extremely high investment or single target situations. <b>Consider reading the In-depth Guide from KQM if you're interested in a Crit-focused build.</b>\n\n<b>Regarding Weapon Choices:\nFavonius Warbow: </b>While terrible for personal damage, this weapon allows Venti to provide more energy for his teammates, while also covering his ER needs. Finding Crit Rate in substats is recommended for consistent passive procs.\n<b>Skyward Harp:</b> Due to EM build assumptions, the stats offered aren't very valuable. \n<b>Elegy for the End:</b> The ATK buff of<b> Elegy for the End's</b> <b>DOES NOT</b> buff Venti's burst if Venti is the one equipping the bow, but the EM buff affects Venti's Swirl reaction. This is due to Venti's burst snapshotting his stats (excluding EM toward transformative reactions such as Swirl) at the time of cast. While an <b>[R1]</b> <b>Elegy for the End</b> yields slightly lower Venti damage compared to an <b>[R5]</b> <b>Stringless</b> (~7% assuming 50% Elegy buff uptime), it provides a party-wide ATK and EM buff which can be better in terms of total team damage and comfortable ER.\n\nFor an EM-focused build, upgrading Venti's talent levels isn't a necessity.",
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
        artifacts: [['vermillion_hereafter'], ['viridescent_venerer', '+18%_atk_set', '+18%_atk_set']],
        mainStats: {
          sands: ['ATK%'],
          goblet: ['Anemo DMG', 'ATK%'],
          circlet: ['Crit DMG', 'Crit Rate'],
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Regarding Xiao's Optimal Skill Rotation:\nSkill -> Skill -> Burst -> Plunge Combo\n\nRegarding Xiao's Plunge Combo:\nBest combo for Xiao when fighting a single target:\nPlunge -> Normal Attack -> Charged Attack -> Plunge\n\nBest combo for Xiao when fighting multiple enemies:\nPlunge -> Normal Attack -> Plunge",
        note: "<b></b>Xiao has issues with Energy regeneration because <b>he cannot generate any particles with his Elemental Skill while his Burst is active</b>, so it is not suggested to use his Elemental Skill during Elemental Burst.\nStart off a fight by casting the skill of your Anemo Battery and then casting his skill twice then cast your burst immediately. You will want to be half way through your burst animation before the particles reach you, so this way you can start off your burst with a portion of the energy gauge already filled.\n<b>You'll want to pair Xiao with another Anemo character </b>(Venti, Sucrose, Jean or Anemo Traveler) to help him gain energy while his Elemental Burst is on cooldown. Xiao's Elemental Burst ends when you swap to another character. Although he has two charges of his Elemental Skill, only ONE charge comes back per cooldown.\n\n<b>Regarding Weapon Choices:</b> With a proper anemo battery (e.g. Sucrose), Xiao needs as little as 120-130% ER to maintain a high burst uptime. In these scenarios, unless there are no ER from substats, you should always go for a non-ER weapon as it will result in more damage.\n<b>Calamity Queller: </b>This weapon has a really high Base ATK, which means you benefit more from ATK% buffs (e.g. <b>Thrilling Tales of the Dragon Slayers</b>) if compared with other weapons. \n\n<b>Regarding Artifact Sets: </b>Prioritize <b>Viridescent Venerer</b> <b>(2)</b> over the other<b> +18% ATK set (2)</b> sets if there are external ATK% buff sources on your team. \n\n<b>Regarding Artifact Main Stats: </b>Anemo DMG% goblets are recommended for Xiao. ATK% goblets serve as a good alternative for him.",
      },
    },
  },
  kaedehara_kazuha: {
    roles: {
      EM: {
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
        tip: "The element which is absorbed by Kazuha's elemental burst follows the priority of Pyro > Hydro > Electro > Cryo, and can be absorbed from both the active character and enemies. (i.e. Standing in Bennett 's Elemental Burst will result in Kazuha's Elemental Burst infusing Pyro as Bennett's Elemental Burst applies Pyro to the active character)\n\nRecommended ER Thresholds: \nWith Raiden: ~160 ER%\nGeneral Teams: ~180 ER%\nMelt Ganyu: ~200 ER%",
        note: "<b></b>Kazuha's 4th Ascension Passive encourages players to maximise Elemental Mastery in order to maximise his utility. \n\n<b>Similar to Venti, due to the EM buffs, a triple EM build will out-damage a regular ATK-EM/Anemo/Crit build as long as there are 2+ enemies due to the amount of swirls involved. Because of this, an ADC (Attack/Damage/Crit) build isn't recommended unless he is in a team whereby he cannot make use of his A4 passive or swirls. (i.e. mono Anemo/Geo teams)\n</b>\n<b>Regarding Weapon Choices: \n</b>The ultimate goal is to try<b> stack as much EM while getting enough ER for a consistent Burst uptime</b>. Having <b>Sacrificial Sword</b> or a second Anemo character in the team will also help reduce the needs for ER and prioritize EM substats more.\n<b>Favonius Sword: </b>With this weapon, try to aim for some Crit Rate stats to trigger the weapon passive reliably.\n<b>Xiphos' Moonlight:</b> In teams where you can meet energy requirements without needing the extra particles from <b>Favonius Sword</b> this is a better choice with stronger personal damage and buffing. Also at high refinements <b>[R4-R5]</b> it starts beating <b>Favonius Sword</b> in team energy generation too.\n<b>Iron Sting: </b>This weapon will yield the joint highest upfront EM and teamwide buff if compared to the other 4 star options,<b> if you manage to meet his energy needs or simply don't need more than one rotation, this would be the better option if compared to the Energy Recharge weapons.\nAmenoma Kageuchi: </b>At <b>[R5]</b>, <b>Amenoma Kageuchi</b> needs no extra ER, and can focus building entirely EM. This makes it roughly equal to <b>Iron Sting.</b> At <b>[R1]</b>, <b>Amenoma Kageuchi</b> needs <b>138% Energy Recharge </b>to burst consistently.<b>\nSapwood Blade: </b>Only really viable at high refinement in specific dendro teams where you can trigger dendro reactions usually through swirling Electro/Hydro on enemies with dendro applied to them (most consistently done in aggravate reaction comps).\n<b>\nRegarding Artifact Sets:\nThundering Fury (4): </b>This is a niche build that excels <b>only in AOE situations and with specific teams.</b> This teams includes an <b>off-field</b> <b>Hydro and Electro support to allow Kazuha to constantly trigger the 4p effect and spam his Elemental Skill, aswell as another Anemo support to hold the Viridiscent Venerer (4) set.</b> Such teams can be <b>Kazuha + Kokomi + Fischl + Venti</b>, with <b>Barbara and Sucrose</b> being weaker replacements for Kokomi and Venti. This team triggers <b>multiple fall damage instances against enemies that can be Crowd Controlled by Kazuha.</b> Fischl can use <b>The Viridiscent Hunt</b> bow to allow for more fall damage instances. <b>**NOTE: This team performs very poorly in pure single target situations.</b>\n\nPrioritize Energy Recharge if his Energy Requirements are not met yet.\nFor an EM-focused build, upgrading Kazuha's talent levels isn't a necessity. Note that upgrading Kazuha's NA talent increases the damage of his plunge attacks.",
      },
    },
  },
  wanderer: {
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
        tip: '',
        note: 'TBD',
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
          ['archaic_petra', 'noblesse_oblige', '+18%_atk_set', 'emblem_of_severed_fate'],
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
        note: "Due to Ningguang having a really low Base ATK and no ATK conversion mechanics, external ATK buffers such as Bennett is recommended as a support for Ningguang to bump up her ATK stat.\n\n<b>Regarding Weapon Choices:</b>\n<b>Skyward Atlas:</b> Without Bennett, this weapon performs better than <b>Lost Prayer to the Sacred Winds.</b>\n<b>Memory of Dust:</b> Without Bennett, this weapon performs better than <b>Lost Prayer to the Sacred Winds</b> and <b>Skyward Atlas.</b>\n<b>The Widsith:</b> At <b>[R5]</b> this weapon performs better than <b>Kagura's Verity</b> on average.\n<b>Solar Pearl:</b> At <b>[R5]</b> this weapon performs better than <b>The Widsith [R5]</b> and <b>Kagura's Verity.</b> It is recommended to add a Normal Attack before casing Ningguang's other abilities.\n<b>Hakushin Ring:</b> This weapon performs better than <b>Mappa Mare</b> when an electro character is in the party.\n\n<b>Regarding Artifact Sets:\nEmblem of Severed Fate (2):</b> This set performs worse than other options when Ningguang does not need to build Energy Recharge%.\n<b>Thundersoother (4):</b> This set performs better than <b>Archaic Petra (2) Emblem of Severed Fate (2)</b> if an electro aura is always present on the enemy.\n<b>Lavawalker (4): </b>This set performs better than <b>Archaic Petra (2) Emblem of Severed Fate (2)</b> if a pyro aura is always present on the enemy.\n<b>Archaic Petra (4):</b> This set tends to be the best set for overall team damage in many cases. However, Archaic Petra is <b>extremely resin-inefficient</b> to farm and is therefore only recommended to be farmed over time from the <b>artifact strongbox.</b>\n<b>Emblem of Severed Fate (4): </b>This set will perform better than <b>Archaic Petra (2) +18% ATK set (2) </b>if you need the Energy Recharge and you do not use Charge Attacks more than normal.\n<b>Husk of Opulent Dreams (4): </b>This set performs on par with <b>Archaic Petra (2) +18% ATK set (2) </b>so is only recommended <b>if you already own a good set.</b>",
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
        subStats: ['Crit Rate / DMG', 'Energy Recharge (~20-30%)', 'DEF%'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Optimal attack rotation is N1>N2>N3>N4>dash/hop, where N refers to each normal attack in her 4 hit combo. This isn't always feasible due to cast time and N4 covers a lesser AoE than N1-3 (as well as knockback issues), so the recommended rotation is N1>N2>N3>dash/hop.",
        note: "<b>It's recommended to avoid building a DPS Noelle if she's not [C5+].\n</b>Noelle DPS is best optimized at <b>[C6]</b> where she converts an additional 50% DEF into ATK. Her ability to sustain her team with shields, heals and AOE damage makes for a reliable DPS when your team is built around her.\n\n<b>Regarding Weapon Choices:\n[C6] is assumed for weapon ranking.\nSerpent Spine: </b>When using <b>Husk of Opulent Dreams,</b> <b>Serpent Spine</b> stacks are prioritized over <b>Husk of the Opulent Dreams</b> stacks due to their conflicting nature in gaining stacks (Off-field and on-field).\n<b>Skyward Pride: </b>Useful if you are unable to get ER from your substats. Does really well while its passive is active, but falls off in sustained fights. Comfort option that can lose to a high refined <b>Whiteblind</b> with stacks.\n<b>Favonius Greatsword: </b>Only recommended with high refines, as its usefulness scales with its particle generation capabilities. <b>[R5]</b> allows her to self-battery assuming some additional particles from enemies, but a second Geo is always recommended regardless for resonance. \n\n<b>Regarding Artifact Sets:\nHusk of Opulent Dreams (4): </b>Noelle snapshots her DEF on burst cast. To get the full 4 stacks' DEF% boost during your first burst, you need to wait 12 seconds off field before swapping in. In abyss, time spent before the chamber starts still generates stacks.<b>\nRetracing Bolide (4): </b>Optimally offers slightly less damage than <b>Gladiator's Finale (4),</b> but is much easier to farm per resin and can have 100% uptime with crystallise shields. Consider <b>Gladiator's Finale</b> if you don't want to farm for <b>Archaic Petra</b> as Artifact Strongbox is much more effective than elite bosses in terms of artifacts per resin.\n\nATK% sands when below C6 and below Talent Level 9 Burst.",
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
        artifacts: [['husk_of_opulent_dreams'], ['husk_of_opulent_dreams', '+15%_healing_bonus_set']],
        mainStats: {
          sands: ['DEF%'],
          goblet: ['DEF%'],
          circlet: ['DEF%'],
        },
        subStats: ['DEF%', 'Flat DEF', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: 'Use her charged attacks for healing as they are much faster than normal attacks.',
        note: "Support Noelle is not currently recommended in any content due to her extremely lackluster healing and poor shield uptime.\n\n<b>Regarding Weapon Choices:\nSacrificial Greatsword: </b>Does not proc on Noelle's <b>[C4]</b> if she's off field, so a high refine is needed for the initial cast to reliably reset cooldown. Even with <b>[R5]</b>, the cooldown is 16 seconds while Noelle's shield duration is 12, so forced downtime is an issue.\n<b>Favonius Greatsword: </b>Relies on hitting crits to generate energy. The 12 second cooldown at <b>[R1]</b> matches with her shield cooldown. Generally not recommended unless you have an abundance of crit substats or wish to build her pseudo-DPS.\n\n<b>Artifact:</b>\nIdeally just run with whatever DEF% main stats you have. Set bonuses are not important, focus on stacking DEF.",
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
          circlet: ['Crit Rate', 'DEF%', 'Healing Bonus'],
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
        note: "Yun Jin is a Support character for Normal Attack focused characters who can deal off-field damage via her Elemental Burst. Yun Jin's <b>Elemental Burst grants nearby party members 30 stacks of additional flat damage bonus on Normal Attacks which scales with Yun Jin's current DEF</b>. This means that external DEF buffs like from Gorou's Elemental Skill and/or Burst doesn't provide much to Yun Jin since it only buffs active characters and not off-field ones.\n\n<b>Regarding Weapon Choices:</b>\n<b>Favonius Lance: </b>With this weapon, try to aim for some Crit Rate stats to trigger the weapon passive reliably.\n<b>Kitain Cross Spear:</b> Although the EM mainstat isn't useful for Yun Jin, the <b>passive decreases her Energy Recharge requirements</b> by a lot, especially at higher refinements. <b>It can reduce her ER% reqs by around ~20% at [R1] to ~70% at [R5]. </b>Note that<b> she must cast Elemental Burst first before Skill, as the passive drains 3 energy initially when Skill is cast. </b>This weapon can be left at level 1 while still getting full effect from the passive.\n\n<b>Regarding Artifact Main Stats and Substats Priority:</b>\nCrit Rate should only be considered when Yun Jin is equpping <b>Favonius Lance</b> to reliably proc the passive.",
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
        note: "<b></b>This section is dedicated to utilising the Geo Traveler's Geo Burst damage capabilities. As their Elemental Skill and Burst have high multipliers, short cooldowns, and require very little field time, the Traveler is recommended to be played as a quickswap style Sub-DPS.\nThe weapon ranking is considering KQM standard with Geo resonance and <b>Noblesse Oblige (4)</b> buff. Read the In-depth Guide for more insight on different scenarios.\n<b>Regarding Weapon Choices:</b> \n<b>Summit Shaper: </b>As this weapon gives so much attack, it suffers greatly from opportunity cost when many <b>ATK buffs </b>are present (i.e. Bennett).\n<b>Lion's Roar: </b>Its placement on this list assume a <b>100% passive uptime</b>. This weapon is only recommended if run with teammates that can maintain a pyro/electro aura consistently (i.e. Xiangling, Raiden, Fischl).\n<b>Festering Desire </b>and<b> Skyward Blade</b>: These weapons help in bursting off cooldown, but if you're not having issues with energy, then these weapons falls behind in terms of damage.\n<b>Favonius/Sacrificial Sword: </b>While this weapon is subpar in terms of damage, it can be a good choice for the Traveler to provide more energy to the team. For a <b>Geo only team</b>, <b>Sacrificial Sword</b> would provide slightly more energy, at the cost of a slightly longer rotation.<b>\n\n</b><b>Regarding Artifact Sets:\nEmblem of Severed Fate (4): </b>While this set slightly falls behind the first two in terms of personal damage, it is still recommended to run this set due to how Resin efficient the domain is.<b>\nThundersoother (4) </b>and<b> Lavawalker (4): </b>These sets will provide the highest personal damage<b> only if their 4 piece set effects can be kept active consistently</b> (i.e. with a consistent pyro/electro aura from Xiangling/Raiden/Fischl). It is <b>not recommended</b> to farm this set purely for the traveller as the resin efficiency is poor. <b>\nNoblesse Oblige (4): </b>This set focuses more on providing an ATK buff to the team than the Traveler's personal damage. It can be paired with a <b>Favonius/Sacrificial Sword</b> for the Traveler to provide more utility to the team.",
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
        artifacts: [['tenacity_of_the_millelith']],
        mainStats: {
          sands: ['HP%'],
          goblet: ['HP%'],
          circlet: ['HP%'],
        },
        subStats: ['HP%', 'Flat HP', 'Energy Recharge'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "<b>This kind of playstyle is very straightforward; stack as much HP as possible. Prioritize HP scaling polearms such as Black Tassel and artifact sets such as Tenacity of the Millelith (4) to capitalize on Zhongli's Shield. </b>Most of the time, especially on a HP-focused Zhongli, casting Elemental Burst is a DPS loss due to the cast time, which is why you'd only want to cast Elemental Burst for the Crowd Control it offers, and not for damage.\n\nNote that if paired with Xingqiu and/or Beidou, the damage reduction from orbitals from Xingqiu's Elemental Skill and Elemental Burst and/or Beidou's Elemental Burst can be utilized on Zhongli's shield, making it basically unbreakable.\n\n<b>Regarding Weapon Choices:\nFavonius Lance: </b>Use this weapon over <b>Black Tassel</b> if you value the team energy (Note that you need to build some amount of Crit Rate if you are running <b>Favonius Lance</b> to trigger the passive).",
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
        note: "Zhongli can be utilized as a Geo Burst damage dealer due to his short Elemental Burst cooldown (12s) and low energy cost (40 Energy). His Elemental Skill Hold Cast (Shield) scales with HP and at Ascension 4, you would unlock a talent that allows your Elemental Burst to scale with 33% of Zhongli's Max HP, making him a great source of Shield and damage.\n\n<b>Regarding Artifact Main Stats:\n</b>ATK sands provides more damage than HP sands, but it does have lesser Shield HP. If you want more Shield HP, you can consider running a HP sands.\n\n<b>Regarding Artifact Sets:</b>\n<b>Noblesse Oblige (2) Archaic Petra (2): </b>On lower ER requirements where Zhongli doesn't need to worry about his energy needs, this set pulls ahead of <b>Emblem of Severed Fate (4).</b>\n<b>Noblesse Oblige (4):</b> This set provides Zhongli more utility when casting his Elemental Burst, you can use this set on Zhongli if there is nobody else on the team who's equipping this set.\n<b>Tenacity of the Millelith (4): </b>Just like <b>Noblesse Oblige (4),</b> this set provides Zhongli with more utility if his Elemental Skill hits an enemy. This set also provides Zhongli with stronger shields.",
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
        note: "Albedo is a character that can summon a Geo Construct from his Elemental Skill which deals damage on a 2 second interval whenever enemies in the field are damaged. His Elemental Burst provides 125 EM to the party, which is good on teams that rely on amplification reactions, such as Vaporize. It is worth noting that since his stat priority is focused on DEF (Elemental Skill scaling), you might want to skip casting Elemental Burst if your team doesn't benefit from the 125 EM buff. Another option is to build him with ATK-DEF Hybrid, which ends up with lower Skill damage but higher Burst damage.\n\n<b>Regarding Weapon Choices:</b>\n<b>Harbinger of Dawn:</b> Albedo's Elemental Skill scales with Defense, which is why the Base ATK from the weapon doesn't matter that much. <b>Harbinger of Dawn</b> offers a lot of Crit stats which is why it is one of the strongest weapons for him despite being a 3 star weapon. The downside of this weapon is that you'd need to keep Albedo's HP at 90% or higher to benefit from the passive, so it might be annoying to use against certain enemies which has a HP lowering debuff, even when off-field, such as Corrosion.\n<b>Mistsplitter Reforged</b>: Realistically you are only able to get 2 stacks of this weapon's passive and this requires setup. Generally just use <b>Harbinger of Dawn </b>instead and give your <b>Mistsplitter Reforged</b> to another sword DPS character.\n<b>Freedom-Sworn:</b> Equipping this weapon will decrease Albedo's own damage significantly but he is one of the better <b>Freedom-Sworn</b> holders since he can trigger the passive quite easily to buff your other party members.\n\n<b>Regarding Artifact Sets:</b>\n<b>Husk of Opulent Dreams (4):</b> Due to Albedo's skill snapshotting upon cast, you need to either wait ~12 seconds before starting a domain/fight to reach max stacks or recast his skill to benefit from the DEF and Geo DMG bonus provided by the 4 piece set effect.\n<b>Tenacity of the Milelith (4):</b> This set is used for the 4 piece set effect which has good uptime on Albedo. Worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\n<b>Noblesse Oblige (4):</b> If you don't have another character in your party that has this set, you can use this set on Albedo. You might want to get some Energy Recharge substats to maintain your Elemental Burst uptime for this. It is also worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\n\n<b>Regarding Artifact Substats Priority:</b>\nATK and Energy Recharge substats are only valuable on a Hybrid Albedo that casts his Elemental Burst.",
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
          sands: ['DEF%'],
          goblet: ['Geo DMG'],
          circlet: ['Crit Rate', 'DMG'],
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'Energy Recharge', 'ATK%', 'Flat DEF', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Arataki Itto is a Geo DPS Character who takes advantage of his Elemental Burst's ATK boost and Geo infusion to deal significant damage during its uptime. His combos involve stacking and unleashing his Charged Attacks, named Arataki Kesagiri. Arataki Kesagiri consumes no stamina and can be casted continuously as long as he has Superlative Superstrength stacks. Superlative Superstrength is capped at 5 stacks at any given time, and Itto gets those stacks when his 2nd and 4th Normal Attack string hits an enemy. Activating his Elemental Burst allows his 1st and 3rd Normal Attack to also generate stacks. Itto's Elemental Skill deals damage to enemies on cast and summons a taunt, Ushi, which is considered a Geo Construct. This initial cast damage grants Itto 1 Superlative Superstrength stack, and upon Ushi leaving the field, Itto is granted another stack. When Ushi takes damage, Itto gains a stack (capped at 1 stack per 2 seconds). Itto's Elemental Burst converts his Normal and Charged Attacks into Geo DMG, increases Itto's Normal Attack Speed and converts a portion of Itto's current DEF to ATK.\n\n<b>Regarding Weapon Choices:</b>\n<b>Serpent Spine:</b> When using <b>Husk of Opulent Dreams, Serpent Spine</b> stacks are prioritized over <b>Husk of the Opulent Dreams</b> stacks due to their conflicting nature in gaining stacks (Off-field and on-field).\n<b>Skyward Pride: </b>Can be a great or bad weapon for Itto depending on your ER needs. The less Energy Recharge you need (due to particle generation from your party members or ER from subs), the less useful this weapon becomes.\n<b>Whiteblind</b>: Your rotations often start with 1 stack of this weapon, and due to Itto's Burst snapshotting DEF on cast, you're unable to take advantage of further DEF% from the stacks.\n\n<b>Regarding Artifact Sets: </b>\n<b>Retracting Bolide (4):</b> This set grants you an additional 40% Normal and Charged Attack DMG when shielded. Crystallize can be unreliable so a consistent shielder is preferred, such as Zhongli.",
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
          sands: ['Energy Recharge', 'ATK', 'Elemental Mastery'],
          goblet: ['Dendro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['Energy Recharge', 'Crit Rate/DMG', 'ATK%/EM'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'Typical Collei Rotation: \nSkill > Burst > Swap\nRotation with Polar Star:\nN1 > tap Charged Attack > Skill > Burst > Swap\n\nEnergy Recharge Guidelines: \n200% - 160% (Depending on Team and weapon)',
        note: "Collei is a Bow User who provides off-field support in Dendro application and damage.\n<b>\nRegarding Weapon Choices:</b>\n<b>Polar Star: </b>While this weapon provides the highest personal damage, it is generally not recommended as team buffs provide more teamwide damage over a small increase in personal damage. \n<b>Sacrificial Bow:</b> Not recommended below <b>[R4]</b> due to it delaying rotation, possibly resulting in damage loss.\n\n<b>Regarding Artifact Sets: \nTenacity of the Millelith (4): </b>Collei's Sprout damage counts as Skill damage, which allows her to be able to keep <b>Tenacity of the Millelith (4) </b>up during important damage windows. Generally an alternative to <b>Noblesse Oblige (4)</b> or <b>Deepwood Memories (4)</b> (or if you are already running both in a team).<b>\nGilded Dreams (4):</b> This set is only used in a team where Collei is used to <b>trigger</b> reactions (i.e. Bloom/Burning teams), and does not benefit Collei if she is used as an <b>aura</b>. \n<b>The Exile (4):</b> An alternative option if they are placed in the same team as Cyno to help his Energy Recharge needs.\n\nShout out to Emiliabyss#1641 for providing an in-depth reference.\n\nPrioritize Energy Recharge if her Energy Requirements are not met.",
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
        subStats: ['Energy Recharge', 'Crit Rate/DMG', 'ATK%/EM'],
        talent: ['Burst', 'Skill'],
        tip: '',
        note: "nt Dendro Traveler section is filled with placeholder content, it is not a finalized section.*\n<b>Regarding Main Stats:\n</b>Prioritize maintaining their burst uptime, the ER needs for Dendro Traveler would be a lot greater if they are the only Dendro unit in the team.\n\n<b>Regarding Artifacts:\nNoblesse Oblige (4): </b>This option would generally be better than <b>Deepwood Memories (4)</b> if Dendro Traveler is used in an <b>Aggravate</b> focused team.<b>\nThe Exile (4): </b>An alternative option if they are placed in the same team as Cyno to help his Energy Recharge needs.\n\n<b>Regarding Weapons:\nSacrificial Sword:</b> Prioritized due to Dendro Traveler's exceedingly high Energy Recharge requirements for burst uptime consistency.\n\nPrioritize Energy Recharge if their Energy Requirements are not met yet.\nNot priority investment",
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
        subStats: ['Crit Rate/DMG', 'Elemental Mastery', 'ATK%', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'One recommended rotation is E 3CA Q or an alternative variation while on field, as it is impractical to do charged shots that are not boosted by his E',
        note: "Tighnari's standard build revolves around him doing his Elemental Skill, Three Clusterbloom Arrows, an Elemental Burst, and promptly swapping out to another character. \n\n<b>Regarding Weapon Choices:\nElegy for the End: </b>If Tighnari does not need the Energy Recharge that Elegy provides, this weapon will perform worse than <b>Amos' Bow</b> for his personal damage.\n<b>Amos Bow: </b>This option ranks lower due to Tighnari not needing as much ATK%, as well as not stacking the passive well\n<b>Slingshot: </b>Significantly worse when fighting from a long range.\n<b>Prototype Crescent: </b>At <b>[R5]</b>, this weapon is better than <b>Slingshot. </b>Notably, this weapon is heavily reliant on enemies having weakspots.\n<b>Stringless: </b>At <b>[R5]</b>, this weapon is equal to <b>Slingshot. </b>\n\n<b>Regarding Artifact Sets:\nDeepwood Memories (4): </b>This is by far Tighnari's best set if no one else on the team is using it",
      },
    },
  },
  nahida: {
    roles: {
      'ON-FIELD DPS': {
        recommended: false,
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
            id: 'sacrificial_fragments',
          },
          {
            id: 'wandering_evenstar',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'hakushin_ring',
          },
        ],
        artifacts: [['deepwood_memories'], ['gilded_dreams'], ['+80_em', '+80_em']],
        mainStats: {
          sands: ['Elemental Mastery', 'ATK%'],
          goblet: ['Dendro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['ER (Until Requirement)', 'Crit Rate / Crit DMG', 'Elemental Mastery', 'ATK%'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "<b>[WIP]\nRegarding Weapon Choices:\nMagic Guide: </b>With 100% uptime on the passive, this weapon can perform better than <b>Wandering Evenstar.\nMappa Mare: </b>This weapon will perform better<b> </b>if you cannot maintain high uptime on <b>Magic Guide's </b>passive.<b>\nFavonius Codex </b>and <b>Hakushin Ring: </b>These weapons are not as strong as other options for Nahida's personal damage, but the support value they provide can be better for overall team damage.\n\n<b>Regarding Artifact Sets:\nDeepwood Memories (4): </b>This is her best set if no one else is wearing this set.",
      },
      'OFF-FIELD DPS': {
        recommended: true,
        weapons: [
          {
            id: 'a_thousand_floating_dreams',
          },
          {
            id: 'kaguras_verity',
          },
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'wandering_evenstar',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'magic_guide',
          },
          {
            id: 'mappa_mare',
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
        artifacts: [['deepwood_memories'], ['gilded_dreams'], ['+80_em', '+80_em']],
        mainStats: {
          sands: ['Elemental Mastery'],
          goblet: ['Dendro DMG', 'Elemental Mastery'],
          circlet: ['Crit Rate', 'DMG', 'Elemental Mastery'],
        },
        subStats: ['ER (Until Requirement)', 'Crit Rate / Crit DMG', 'Elemental Mastery', 'ATK%'],
        talent: ['Skill', 'Burst'],
        tip: '',
        note: "<b>[WIP]\nRegarding Weapon Choices:\nMappa Mare:</b> This weapon will perform better if you cannot maintain high uptime on <b>Magic Guide's</b> passive.\n<b>Favonius Codex,</b> <b>Hakushin Ring</b> and <b>Thrilling Tales of Dragon Slayers:</b> These weapons are not as strong as other options for Nahida's personal damage, but the support value they provide can be better for overall team damage.\n<b>\nRegarding Artifact Sets:</b>\n<b>Deepwood Memories (4):</b> This is her best set if no one else is wearing this set.",
      },
    },
  },
  alhaitham: {
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
        tip: '',
        note: 'TBD',
      },
    },
  },
  yaoyao: {
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
        tip: '',
        note: 'TBD',
      },
    },
  },
};
