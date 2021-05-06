<template>
    <div class="d-flex" v-if="!hero.data.name">
        <BaseHero
            class="flex-grow-1 ma-3"
            :key="randHero.id"
            v-for="randHero in randomHeroes"
            :hero="randHero"
            :selectedHero="selectedHero.value"
            @selectHero="selectHero"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api'
import createHero from '@/composables/createHero'
import { IHero } from '@/interfaces/hero.interface'
import BaseHero from '@/components/BaseHero'

export default defineComponent({
    name: 'CreateHero',
    components: { BaseHero },
    setup() {
        const { getRandomHero, getRandomAbility, buildHero } = createHero()

        const randomHeroes = computed(() => {
            const heroSet = new Set()
            while (heroSet.size < 3) {
                heroSet.add(getRandomHero())
            }

            return [...heroSet]
        })

        const selectedHero = reactive({ hero: null })

        const selectHero = value => {
            selectedHero.hero = value
        }

        const hero = reactive<{ data: IHero | Record<string, never> }>({
            data: {}
        })

        return { hero, randomHeroes, selectedHero, selectHero }
    }
})
</script>

<style lang="ts"></style>
