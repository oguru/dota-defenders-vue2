<template>
    <section>
        <div v-if="!hero.baseHero.name">
            <div class="d-flex">
                <BaseHero
                    v-for="randomHero in randomHeroes"
                    :key="randomHero.id"
                    class="flex-grow-1 ma-3"
                    :hero="randomHero"
                    :selectedHero="selectedHero"
                    @selectHero="selectHero"
                />
            </div>
            <v-btn
                @click="lockHero"
                large
                class="ma-2"
                v-if="selectedHero.hero"
            >
                <span>Abilities</span>
                <v-icon left size="25" class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
        </div>
        <div v-if="hero.baseHero.name && hero.abilities.length < 1">
            <v-row>
                <v-col v-for="ability in randomAbilities" :key="ability.id">
                    <AbilityCard
                        class="pa-4"
                        :ability="ability"
                        :selectedAbilities="selectedAbilities"
                        @selectAbility="selectAbility"
                    />
                </v-col>
            </v-row>
            <v-btn
                @click="lockHero"
                large
                class="ma-2"
                v-if="Object.keys(selectedAbilities).length === 4"
            >
                <span>Create!</span>
                <v-icon left size="25" class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api'
import createHero from '@/composables/createHero'
import { IHero } from '@/interfaces/hero.interface'
import BaseHero from '@/components/BaseHero'
import AbilityCard from '@/components/AbilityCard'

export default defineComponent({
    name: 'CreateHero',
    components: { AbilityCard, BaseHero },
    setup() {
        const { getRandomHero, getRandomAbility, buildHero } = createHero()

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

        const selectedAbilities = reactive({})

        const selectAbility = ability =>
            (selectedAbilities[ability.id] = ability)

        const selectedHero = reactive({ hero: null })

        const selectHero = value => {
            selectedHero.hero = value
        }

        const lockHero = () => {
            hero.baseHero = selectedHero.hero
        }

        const hero = reactive<{
            baseHero: IHero | Record<string, never>
            abilities: []
        }>({
            baseHero: {},
            abilities: []
        })

        return {
            hero,
            randomHeroes,
            selectedHero,
            selectHero,
            lockHero,
            selectedAbilities,
            randomAbilities
        }
    }
})
</script>

<style lang="ts"></style>
