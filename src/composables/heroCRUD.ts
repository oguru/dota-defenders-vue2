import { IHero } from '../interfaces/hero.interface'

const heroCRUD = (): any => {
    const fetchHero = async (): Promise<IHero> => {
        const res = await fetch('api/hero')
        const data = await res.json()

        return data
    }

    const saveHero = async (hero: IHero): Promise<void> => {
        await fetch('api/hero', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(hero)
        })

        return
    }

    return { fetchHero, saveHero }
}

export default heroCRUD
