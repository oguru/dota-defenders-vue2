import { IDamage } from './damage.interface'

interface IAbility {
    id: string
    name: string
    desc: string
    cd: number
    dmgType: string
    dmg?: IDamage
    heal?: number
    healRounds?: number
    mana?: number
}

export { IAbility }
