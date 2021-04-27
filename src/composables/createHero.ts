import heroes from '../data/heroes.js'
import abilities from '../data/abilities.js'

const createHero = (): any => {
    const getRandomHero = (): Record<string, unknown> => {
        return heroes[Math.floor(Math.random() * heroes.length)]
    }

    const getRandomAbility = (): Record<string, unknown> => {
        return abilities[Math.floor(Math.random() * abilities.length)]
    }

    const buildHero = (): Record<string, unknown> => {
        const hero = getRandomHero()

        // console.log('hero: ', hero)

        const abilitySet = new Set()

        while (abilitySet.size < 4) {
            abilitySet.add(getRandomAbility())
        }

        hero.abilities = [...abilitySet]

        return hero
    }
    return { getRandomHero, getRandomAbility, buildHero }
}

export default createHero
