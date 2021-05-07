<template>
    <v-hover v-slot="{ hover }">
        <v-card
            @click="$emit('selectHero', hero)"
            class="hero-card transition-speed"
            :elevation="hover || isSelected ? 8 : 2"
        >
            <v-overlay
                :opacity="hover ? 0.2 : 0.46"
                absolute
                :value="!isSelected"
            >
            </v-overlay>
            <div
                class="d-flex flex-column transition-speed"
                :class="{ 'raise-card': hover || isSelected }"
            >
                <img
                    :src="`http://cdn.dota2.com${hero.img}`"
                    alt=""
                    srcset=""
                />
                <h3 class="my-4">{{ hero.localized_name }}</h3>
                <!-- {{ checkAbilities }} -->
                <p>{{ primaryAttr }} hero</p>
                <p>{{ hero.attack_type }}</p>
                <p>Base HP: {{ hero.base_health }}</p>
                <p>Base Mana: {{ hero.base_mana }}</p>
                <p>Strength Gain: {{ hero.str_gain }}</p>
                <p>Agility Gain: {{ hero.agi_gain }}</p>
                <p>Intelligence Gain: {{ hero.int_gain }}</p>
                <!--<button @click="changeHero">Change Hero</button> -->
            </div>
        </v-card>
    </v-hover>
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

export default defineComponent({
    name: 'BaseHero',
    props: {
        npc: Boolean,
        hero: Object,
        selectedHero: Object
    },
    setup(props, { emit }) {
        const { npc, hero, selectedHero } = props

        const isSelected = ref(false)

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
            if (selectedHero.hero.id === hero.id) isSelected.value = true
            else isSelected.value = false
        })

        return { primaryAttr, isSelected }
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
