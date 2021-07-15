export const testHero = {
    hero: {
        id: 22,
        name: 'npc_dota_hero_zuus',
        localized_name: 'Zeus',
        primary_attr: 'int',
        attack_type: 'Ranged',
        roles: ['Nuker'],
        img: '/apps/dota2/images/heroes/zuus_vert.jpg?',
        icon: '/apps/dota2/images/heroes/zuus_icon.png',
        base_health: 200,
        base_health_regen: null,
        base_mana: 75,
        base_mana_regen: 0.25,
        base_armor: 1,
        base_mr: 25,
        base_attack_min: 33,
        base_attack_max: 41,
        base_str: 21,
        base_agi: 11,
        base_int: 22,
        str_gain: 2.1,
        agi_gain: 1.2,
        int_gain: 3.3,
        attack_range: 380,
        projectile_speed: 1100,
        attack_rate: 1.7,
        move_speed: 295,
        turn_rate: 0.6,
        cm_enabled: true,
        legs: 2,
        abilities: [
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
                img:
                    '/apps/dota2/images/abilities/alchemist_chemical_rage_hp2.png'
            }
        ]
    }
}
