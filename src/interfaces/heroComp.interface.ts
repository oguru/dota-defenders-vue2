import { IHero } from './hero.interface'

interface IheroCRUD {
    fetchHero: Promise<IHero>
}
