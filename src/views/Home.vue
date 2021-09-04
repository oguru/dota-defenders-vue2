<template>
    <div class="home">
        <!-- <Hero></Hero> -->
        <v-hover><p>fff</p></v-hover>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/BaseHero.vue'
import Card from '@/components/Card.vue'

export default defineComponent({
    name: 'Home',
    components: {
        Hero,
        Card
    },
    setup() {
        return {}
    }
})
</script>
