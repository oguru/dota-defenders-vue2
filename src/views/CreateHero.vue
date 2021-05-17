<template>
    <section>
        <div v-if="!hero.baseHero.name">
            <h1 class="my-3">Choose a Hero</h1>
            <v-btn
                :disabled="!selectedHero.hero"
                @click="lockHero"
                large
                class="ma-2"
            >
                <span>Abilities</span>
                <v-icon left size="25" class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
            <div class="d-flex justify-center">
                <BaseHero
                    v-for="randomHero in randomHeroes"
                    :key="randomHero.id"
                    class="flex-grow-1 ma-3"
                    :hero="randomHero"
                    :selectedHero="selectedHero"
                    @selectHero="selectHero"
                />
            </div>
        </div>
        <div v-if="hero.baseHero.name">
            <h1 class="mt-3 mb-1">Choose Abilities</h1>
            <h3 class="mb-3">{{ `${numAbilities}/4` }}</h3>
            <v-btn
                @click="storeHero"
                large
                class="ma-2"
                :disabled="numAbilities < 4"
            >
                <span>Create!</span>
                <v-icon left size="25" class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
            <v-row class="justify-center ma-3">
                <v-col
                    cols="12"
                    xs="10"
                    sm="8"
                    md="6"
                    lg="4"
                    xl="3"
                    :key="ability.id"
                    v-for="ability in randomAbilities"
                >
                    <AbilityCard
                        class="fill-height pa-4"
                        :ability="ability"
                        :selectedAbilities="hero.abilities"
                        @changeAbility="changeAbility"
                        :numAbilities="numAbilities"
                    />
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    reactive,
    ref,
    getCurrentInstance
} from '@vue/composition-api'
import createHero from '@/composables/createHero'
import { IHero } from '@/interfaces/hero.interface'
import BaseHero from '@/components/BaseHero'
import AbilityCard from '@/components/AbilityCard'

export default defineComponent({
    name: 'CreateHero',
    components: { AbilityCard, BaseHero },
    setup() {
        const { getRandomHero, getRandomAbility } = createHero()
        const store = getCurrentInstance().proxy.$store

        const randomHeroes = computed(() => {
            const heroSet = new Set()
            while (heroSet.size < 3) {
                heroSet.add(getRandomHero())
            }

            return [...heroSet]
        })

        const randomAbilities = computed(() => {
            const abilitySet = new Set()

            while (abilitySet.size < 8) {
                abilitySet.add(getRandomAbility())
            }

            return [...abilitySet]
        })

        // const hero.abilities = reactive({})

        // const numAbilities = computed(() => {
        //     return Object.keys(hero.abilities).length
        // })

        const numAbilities = ref(0)

        const changeAbility = ability => {
            if (hero.abilities[ability.id]) {
                delete hero.abilities[ability.id]
                numAbilities.value--
            } else {
                hero.abilities[ability.id] = ability
                numAbilities.value++
            }
        }

        const selectedHero = reactive({ hero: null })

        const selectHero = value => {
            selectedHero.hero = value
        }

        const hero = reactive<{
            baseHero: IHero | Record<string, never>
            abilities: any
        }>({
            baseHero: {},
            abilities: {}
        })

        const lockHero = () => {
            hero.baseHero = selectedHero.hero
            // hero.abilities = hero.abilities
        }

        const storeHero = () => {
            store.commit('updateHero', {
                hero: {
                    ...hero.baseHero,
                    abilities: Object.values(hero.abilities)
                }
            })
        }

        return {
            hero,
            randomHeroes,
            selectedHero,
            selectHero,
            lockHero,
            selectedAbilities: hero.abilities,
            randomAbilities,
            numAbilities,
            changeAbility,
            storeHero
        }
    }
})
</script>

<style lang="ts"></style>
