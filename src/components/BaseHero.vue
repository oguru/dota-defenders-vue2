<template>
    <v-card>
        <template #header>
            <div>
                <h1>{{ $store.state.test.id }}</h1>
                <h4>{{ hero.localized_name }}</h4>
                <!-- <button @click="changeHero">Change Hero</button> -->
            </div>
        </template>
    </v-card>
</template>

<script>
import {
    computed,
    defineComponent,
    watch,
    reactive
} from '@vue/composition-api'
import { ref } from 'vue'
import store from '@/store'
import { IHero } from '../interfaces/hero.interface'

export default defineComponent({
    name: 'Hero',
    props: {
        npc: Boolean
    },
    setup() {
        // alert(store.state.test.id)

        const hero = reactive({
            // data: buildHero()
            data: {}
        })

        // let hero = computed(() => buildHero())

        watch(hero, newVal => {
            store.commit('updateHero', newVal)
        })

        // const changeHero = () => {
        //     hero.data = buildHero()
        // }

        // watch(store.state.hero, () => {
        //     console.log('from store', store.getters.getHero)
        // })

        return {
            hero
            // changeHero
        }
    }
})
</script>

<style lang=""></style>
