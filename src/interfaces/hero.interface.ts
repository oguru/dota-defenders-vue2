import { IAbility } from './ability.interface'
import { IStats } from './stats.interface'

interface IHero {
    baseId: number
    name: string
    abilities: IAbility[]
    stats: IStats
    priStat: string
    exp: number
    hp: number
    mana: number
    atkDmg: number
    magicDmg: number
    img: string
    icon: string
}

interface HeroInit {
    baseId: number
    name: string
    abilities: IAbility[]
    stats: IStats
    priStat: string
    exp: number
    hp: number
    mana: number
    atkDmg: number
    magicDmg: number
    img: string
    icon: string
}

export { IHero, HeroInit }
