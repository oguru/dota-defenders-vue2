import { IHero } from '../interfaces/hero.interface'
import { Store } from 'vuex'

export const loadHeroFromDb = async (store: Store<IHero>): Promise<void> => {
    await fetchHero()
        .then((val: IHero | Record<string, never>) => {
            if (val) {
                store.commit('updateHero', val)
            }
            throw new Error('test')
            return
        })
        .catch(val => {
            console.log(val)
        })
}

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
