<template>
    <Card
        @handleClick="$emit('selectHero', hero)"
        :overlay="overlay"
        :isSelected="isSelected"
    >
        <img :src="`http://cdn.dota2.com${hero.img}`" :alt="hero.name" />
        <h3 class="my-4">{{ hero.localized_name }}</h3>
        <p>{{ primaryAttr }} hero</p>
        <p>{{ hero.attack_type }}</p>
        <p>Base HP: {{ hero.base_health }}</p>
        <p>Base Mana: {{ hero.base_mana }}</p>
        <p>Strength Gain: {{ hero.str_gain }}</p>
        <p>Agility Gain: {{ hero.agi_gain }}</p>
        <p>Intelligence Gain: {{ hero.int_gain }}</p>
    </Card>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    watch,
    reactive,
    ref
} from '@vue/composition-api'
import store from '@/store'
// import { IHero } from '../interfaces/hero.interface'
import Card from '@/components/Card'

export default defineComponent({
    name: 'BaseHero',
    components: { Card },
    props: {
        npc: Boolean,
        hero: Object,
        selectedHero: Object
    },
    setup(props, { emit }) {
        const { npc, hero, selectedHero } = props

        const isSelected = ref(false)

        const init = ref(true)

        const overlay = computed(() => {
            if (init.value) return false
            if (!isSelected.value) return true
            return false
        })

        const primaryAttr = computed(() => {
            switch (props.hero.primary_attr) {
                case 'str':
                    return 'Strength'
                case 'agi':
                    return 'Agility'
                default:
                    return 'Intelligence'
            }
        })

        watch(selectedHero, () => {
            if (selectedHero.hero) {
                init.value = false
            }
            if (selectedHero.hero.id === hero.id) {
                isSelected.value = true
            } else {
                isSelected.value = false
            }
        })

        return { primaryAttr, isSelected, overlay }
    }
})
</script>

<style scoped lang="scss">
.hero-card {
    position: relative;
    cursor: pointer;

    .raise-card {
        transform: translateY(-2px);
    }
}
</style>
