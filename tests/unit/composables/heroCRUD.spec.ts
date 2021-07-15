import { saveHeroToDb, fetchHero, loadHeroFromDb } from '@/composables/heroCRUD'
import { testHero } from '../../support/testHero'
import store from '@/store'

describe('CRUD tests', () => {
    test('loadHeroFromDb calls fetchHero and if a hero exists, saves it to the store', async () => {
        const flushPromises = () => new Promise(r => setTimeout(r))
        const makeFetchResponse = value => ({ json: async () => value })
        const mockFetch = jest
            .fn()
            .mockReturnValueOnce(makeFetchResponse(testHero))

        global.fetch = mockFetch

        loadHeroFromDb(store)
        await flushPromises()

        expect(mockFetch).toHaveBeenCalledTimes(1)
        expect(store.getters.getHero.hero.id).toBe(22)
    })
})
