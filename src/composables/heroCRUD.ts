import { IHero } from '../interfaces/hero.interface'

export const fetchHero = async (): Promise<IHero> => {
    const res = await fetch('api/hero')
    const data = await res.json()

    return data
}

export const saveHeroToDb = async (hero: IHero): Promise<void> => {
    await fetch('api/hero', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(hero)
    })

    return
}

export const deleteHeroFromDb = async (): Promise<void> => {
    await fetch('api/hero', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: ''
    })

    return
}
