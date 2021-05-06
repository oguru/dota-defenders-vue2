<template>
    <v-hover v-slot="{ hover }">
        <v-card
            @click="$emit('selectHero', hero)"
            class="hero-card transition-speed"
            :elevation="hover ? 8 : 2"
        >
            <div
                class="d-flex flex-column transition-speed"
                :class="{ 'raise-card': hover }"
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
    setup(props) {
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
        return { primaryAttr }
    }
})
</script>

<style scoped lang="scss">
.hero-card {
    cursor: pointer;

    .raise-card {
        transform: translateY(-2px);
    }
}
</style>
