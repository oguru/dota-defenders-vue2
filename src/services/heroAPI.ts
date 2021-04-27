import { IHero } from '../interfaces/hero.interface'

export const fetchHero = async (): Promise<IHero> => {
    const res = await fetch('api/')

    const data = await res.json()

    return data
}
