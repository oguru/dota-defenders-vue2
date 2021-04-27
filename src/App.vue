<template>
    <v-app>
        <v-app-bar app color="primary">
            <v-container>
                <v-btn class="mx-1"
                    ><router-link to="/">Main</router-link></v-btn
                >
                <!-- <v-btn class="mx-1" v-if="storeHero"
                    ><router-link to="/hero">Hero</router-link></v-btn
                >
                <v-btn class="mx-1" v-else
                    ><router-link to="/create-hero"
                        >Create Hero</router-link
                    ></v-btn
                > -->
            </v-container>
        </v-app-bar>
        <v-container>
            <p>teststst</p>
            <router-view />
        </v-container>
    </v-app>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    watch,
    computed,
    setup,
    ref,
    watchEffect,
    onMounted
} from '@vue/composition-api'
import Vue from 'vue'
import heroCRUD from './composables/heroCRUD'
import { IHero } from './interfaces/hero.interface'

const { saveHero, fetchHero } = heroCRUD()

export default Vue.extend({
    name: 'App',
    setup() {
        // const store = root.$store
        // const hero = computed(() => {})

        //bool to ref or obj to ref - vue wraps inside another obj
        //generic says expect bool inside this obj

        //init
        const hero = reactive<{ data: IHero | Record<string, never> }>({
            data: {}
        })
        // debugger
        console.log('gsgsg')

        onMounted(() => {
            console.log('gfgsdg')
        })
        //get hero from backend
        const loadHero = async (): Promise<void> => {
            await fetchHero().then(val => {
                if (val) {
                    hero.data = val
                }
            })
            // if (!hero.data.name) {
            // hero.data = value
            // }
        }

        Promise.resolve(loadHero()).then(() =>
            console.log('promise', hero.data.name)
        )

        // watch(hero, newHero => {
        //     store.commit('updateHero', newHero)
        // })

        hero.data.name = 'riki'

        // const storeHero = computed(store.state.hero.name)

        return {
            hero
            // storeHero
        }
    }
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
