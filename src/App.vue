<template>
    <v-app>
        <v-app-bar app color="primary">
            <v-container>
                <v-btn class="mx-1"
                    ><router-link to="/">Main</router-link></v-btn
                >
                <template v-if="hero.data.name">
                    <v-btn class="mx-1"
                        ><router-link to="/hero">Hero</router-link></v-btn
                    >
                    <v-btn class="mx-1"
                        ><router-link to="/battle">Battle</router-link></v-btn
                    >
                </template>
                <v-btn class="mx-1" v-else
                    ><router-link to="/create-hero"
                        >Create Hero</router-link
                    ></v-btn
                >
            </v-container>
        </v-app-bar>
        <v-main class="fill-height">
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import {
    defineComponent,
    getCurrentInstance,
    reactive,
    watch,
    computed,
    ref,
    watchEffect,
    onMounted,
    onBeforeMount
} from '@vue/composition-api'
import Vue from 'vue'
import { saveHeroToDb, fetchHero } from '@/composables/heroCRUD'
import { IHero } from '@/interfaces/hero.interface'

export default defineComponent({
    name: 'App',
    setup() {
        const store = getCurrentInstance().proxy.$store
        const isLoading = ref(true)

        //bool to ref or obj to ref - vue wraps inside another obj
        //generic says expect bool inside this obj

        const hero = reactive<{ data: IHero | Record<string, never> }>({
            data: {}
        })

        onBeforeMount(() => {
            loadHero()
        })

        //get hero from backend
        const loadHero = async (): Promise<void> => {
            await fetchHero().then(val => {
                console.log(val)

                if (val) {
                    hero.data = val
                    isLoading.value = false
                }
                return
            })
        }

        watch(hero.data, newHero => {
            console.log('watch hero.data')
            store.commit('updateHero', newHero)
        })

        return {
            hero
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
.transition-speed {
    transition-duration: 0.5s;
}
</style>
