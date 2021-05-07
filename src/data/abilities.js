const abilities = [
    {
        id: 1,
        dname: 'Counterspell',
        type: 'Protection',
        behavior: ['No Target', 'Instant Cast'],
        desc:
            'Passively grants you magic resistance. Can be activated to create an anti-magic shell around you that sends any targeted spells back towards enemies instead of affecting you.',
        attrib: [
            {
                key: 'magic_resistance',
                header: 'MAGIC RESISTANCE:',
                value: ['15%', '25%', '35%', '45%']
            },
            {
                key: 'duration',
                header: 'DURATION:',
                value: '1'
            }
        ],
        mc: ['45', '50', '55', '60'],
        cd: ['15', '11', '7', '3'],
        img: '/apps/dota2/images/abilities/antimage_counterspell_hp2.png'
    },
    {
        id: 2,
        dname: 'Culling Blade',
        type: 'Attack',
        behavior: 'Unit Target',
        dmg_type: 'Magical',
        bkbpierce: 'Yes',
        desc:
            'Axe spots a weakness and strikes, instantly killing an enemy unit with low health, or dealing moderate damage otherwise. When an enemy hero is killed with Culling Blade, its cooldown is reset, and Axe and nearby allied units gain bonus movement speed.',
        attrib: [
            {
                key: 'kill_threshold',
                header: 'KILL THRESHOLD:',
                value: ['250', '325', '400']
            },
            {
                key: 'damage',
                header: 'DAMAGE:',
                value: ['150', '250', '300']
            },
            {
                key: 'speed_bonus',
                header: 'KILL MOVE SPEED BONUS:',
                value: '30%'
            },
            {
                key: 'atk_speed_bonus',
                header: 'KILL ATTACK SPEED BONUS:',
                value: '30'
            },
            {
                key: 'speed_duration',
                header: 'KILL SPEED DURATION:',
                value: '6'
            },
            {
                key: 'speed_aoe',
                header: 'KILL SPEED RADIUS:',
                value: '900'
            }
        ],
        mc: ['60', '120', '180'],
        cd: ['75', '65', '55'],
        img: '/apps/dota2/images/abilities/axe_culling_blade_hp2.png'
    },

    {
        id: 3,
        dname: 'Lightning Bolt',
        type: 'Attack',
        behavior: ['Unit Target', 'Point Target'],
        dmg_type: 'Magical',
        bkbpierce: 'No',
        desc:
            'Calls down a bolt of lightning to strike an enemy unit, causing damage and a mini-stun. When cast, Lightning Bolt briefly provides unobstructed vision and True Sight around the target in a 750 radius. Can be cast on the ground, affecting the closest enemy hero in 325 range.',
        dmg: ['125', '200', '275', '350'],
        attrib: [
            {
                key: 'true_sight_radius',
                header: 'TRUE SIGHT RADIUS:',
                value: '750',
                generated: true
            },
            {
                key: 'sight_radius_day',
                header: 'SIGHT RADIUS:',
                value: '750'
            },
            {
                key: 'sight_radius_night',
                header: 'SIGHT RADIUS NIGHT:',
                value: '750',
                generated: true
            },
            {
                key: 'sight_duration',
                header: 'SIGHT DURATION:',
                value: '4.5'
            },
            {
                key: 'spread_aoe',
                header: 'SPREAD AOE:',
                value: '325',
                generated: true
            }
        ],
        mc: ['90', '105', '120', '135'],
        cd: '6',
        img: '/apps/dota2/images/abilities/zuus_lightning_bolt_hp2.png'
    },

    {
        id: 4,
        dname: 'Nimbus',
        type: 'Attack',
        behavior: ['Point Target', 'AOE', 'Hidden', null],
        dmg_type: 'Magical',
        bkbpierce: 'No',
        desc:
            'Creates a storm cloud anywhere on the map that automatically casts Lightning Bolt on nearby enemies.',
        attrib: [
            {
                key: 'cloud_duration',
                header: 'DURATION:',
                value: '35'
            },
            {
                key: 'cloud_bolt_interval',
                header: 'LIGHTNING BOLT BASE COOLDOWN:',
                value: '2.25'
            },
            {
                key: 'cloud_radius',
                header: 'CLOUD RADIUS:',
                value: '450',
                generated: true
            },
            {
                key: 'hits_to_kill_tooltip',
                header: 'HITS TO DESTROY:',
                value: '8'
            },
            {
                key: 'creep_hits_to_kill_tooltip',
                header: 'CREEP HITS TO DESTROY:',
                value: '16'
            },
            {
                key: 'cloud_bounty_tooltip',
                header: 'CLOUD BOUNTY TOOLTIP:',
                value: '100',
                generated: true
            }
        ],
        mc: '325',
        cd: '35',
        img: '/apps/dota2/images/abilities/zuus_cloud_hp2.png'
    },
    {
        id: 5,
        dname: 'Eclipse',
        type: 'Attack',
        behavior: 'No Target',
        dmg_type: 'Magical',
        bkbpierce: 'No',
        desc:
            "Showers random nearby enemies with strikes from Luna's current level of Lucent Beam. These beams do not stun their targets, and there is a maximum number of times that a single target can be struck. Also turns day into night for 10 seconds.",
        attrib: [
            {
                key: 'beams',
                header: 'TOTAL BEAMS:',
                value: ['6', '9', '12']
            },
            {
                key: 'hit_count',
                header: 'MAX BEAMS PER UNIT:',
                value: '5'
            },
            {
                key: 'beam_interval',
                header: 'BEAM INTERVAL:',
                value: '0.6',
                generated: true
            },
            {
                key: 'beam_interval_scepter',
                header: 'BEAM INTERVAL SCEPTER:',
                value: '0.3',
                generated: true
            },
            {
                key: 'radius',
                header: 'RADIUS:',
                value: '675'
            },
            {
                key: 'beams_scepter',
                header: 'SCEPTER TOTAL BEAMS:',
                value: ['6', '12', '18']
            },
            {
                key: 'hit_count_scepter',
                header: 'HIT COUNT SCEPTER:',
                value: ['6', '12', '18'],
                generated: true
            },
            {
                key: 'duration_tooltip_scepter',
                header: 'SCEPTER DURATION:',
                value: ['1.8', '3.6', '5.4']
            },
            {
                key: 'cast_range_tooltip_scepter',
                header: 'SCEPTER CAST RANGE:',
                value: '2500'
            },

            {
                key: 'night_duration',
                header: 'NIGHT DURATION:',
                value: '10',
                generated: true
            }
        ],
        mc: ['150', '200', '250'],
        cd: '140',
        img: '/apps/dota2/images/abilities/luna_eclipse_hp2.png'
    },
    {
        id: 6,
        dname: 'Breathe Fire',
        type: 'Attack',
        behavior: [null, 'Point Target', 'Unit Target'],
        dmg_type: 'Magical',
        bkbpierce: 'No',
        desc:
            'Unleashes a breath of fire in front of Dragon Knight that burns enemies and reduces the damage their attacks deal.',
        dmg: ['90', '170', '240', '300'],
        attrib: [
            {
                key: 'start_radius',
                header: 'START RADIUS:',
                value: '150',
                generated: true
            },
            {
                key: 'end_radius',
                header: 'END RADIUS:',
                value: '250',
                generated: true
            },
            {
                key: 'range',
                header: 'RANGE:',
                value: '750',
                generated: true
            },
            {
                key: 'speed',
                header: 'SPEED:',
                value: '1050',
                generated: true
            },
            {
                key: 'reduction',
                header: 'DAMAGE REDUCTION:',
                value: '-25%'
            },
            {
                key: 'duration',
                header: 'REDUCTION DURATION:',
                value: '11'
            }
        ],
        mc: ['100', '110', '120', '130'],
        cd: ['14', '13', '12', '11'],
        img: '/apps/dota2/images/abilities/dragon_knight_breathe_fire_hp2.png'
    },
    {
        id: 7,
        dname: "Greevil's Greed",
        type: 'Buff',
        behavior: 'Passive',
        desc:
            'Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 40 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield more gold.',
        attrib: [
            {
                key: 'duration',
                header: 'RECENT KILL WINDOW:',
                value: '40'
            },
            {
                key: 'bonus_gold',
                header: 'BASE BONUS GOLD:',
                value: '4'
            },
            {
                key: 'bonus_bonus_gold',
                header: 'EXTRA BONUS GOLD:',
                value: '3'
            },
            {
                key: 'bonus_gold_cap',
                header: 'MAX BONUS GOLD PER KILL:',
                value: ['20', '24', '28', '32']
            },
            {
                key: 'bounty_multiplier',
                header: 'BOUNTY RUNE MULTIPLIER:',
                value: ['2', '2.5', '3', '3.5']
            }
        ],
        img: '/apps/dota2/images/abilities/alchemist_goblins_greed_hp2.png'
    },
    {
        id: 8,
        dname: 'Chemical Rage',
        type: 'Buff',
        behavior: 'No Target',
        desc:
            'Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and health regeneration.\n\nDISPEL TYPE: Basic Dispel',
        attrib: [
            {
                key: 'duration',
                header: 'DURATION:',
                value: '25'
            },
            {
                key: 'transformation_time',
                header: 'TRANSFORMATION TIME:',
                value: '0.35',
                generated: true
            },
            {
                key: 'base_attack_time',
                header: 'BASE ATTACK TIME:',
                value: ['1.2', '1.1', '1']
            },
            {
                key: 'bonus_health',
                header: 'BONUS HEALTH:',
                value: '0',
                generated: true
            },
            {
                key: 'bonus_health_regen',
                header: 'BONUS HEALTH REGEN:',
                value: ['50', '75', '100']
            },
            {
                key: 'bonus_mana_regen',
                header: 'BONUS MANA REGEN:',
                value: '0',
                generated: true
            },
            {
                key: 'bonus_movespeed',
                header: 'BONUS MOVE SPEED:',
                value: ['40', '50', '60']
            },
            {
                key: 'scepter_gold_damage',
                header: 'SCEPTER GOLD DAMAGE:',
                value: '2',
                generated: true
            },
            {
                key: 'scepter_bonus_damage',
                header: 'SCEPTER BONUS DAMAGE:',
                value: '30'
            },
            {
                key: 'scepter_spell_amp',
                header: 'SCEPTER SPELL AMP:',
                value: '6%'
            }
        ],
        mc: ['50', '100', '150'],
        cd: '55',
        img: '/apps/dota2/images/abilities/alchemist_chemical_rage_hp2.png'
    }
]

export default abilities
