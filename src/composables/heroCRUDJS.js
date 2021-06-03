// import { IHero } from '../interfaces/hero.interface'

const heroCRUD = () => {
    const fetchHero = async () => {
        const res = await fetch('api/hero')
        const data = await res.json()

        return data
    }

    const saveHeroToDb = async hero => {
        await fetch('api/hero', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(hero)
        })

        return
    }

    return { fetchHero, saveHeroToDb }
}

export default heroCRUD
