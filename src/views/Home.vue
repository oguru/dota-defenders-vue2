<template>
    <div class="home">
        <Hero></Hero>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// @ is an alias to /src
import Hero from '@/components/BaseHero.vue'

export default defineComponent({
    name: 'Home',
    components: {
        Hero
    },
    setup() {
        console.log('sete')

        return {}
    }
})
</script>
