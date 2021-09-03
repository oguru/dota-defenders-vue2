<template>
    <v-app>
        <v-app-bar app color="primary">
            <v-container>
                <v-btn class="mx-1"
                    ><router-link to="/">Main</router-link></v-btn
                >
                <template v-if="hasHero">
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
} from 'vue'
import Vue from 'vue'
import { saveHeroToDb, fetchHero, loadHeroFromDb } from '@/composables/heroCRUD'
import { IHero } from '@/interfaces/hero.interface'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'App',
    setup() {
        // const store = getCurrentInstance().proxy.$store
        const store = useStore()
        const isLoading = ref(true)
        const hasHero = ref(false)

        onBeforeMount(() => {
            loadHeroFromDb(store)
        })

        watch(
            () => store.getters.getHero.id,
            () => {
                if (store.getters.getHero.id) hasHero.value = true
            }
        )

        return {
            hasHero
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
