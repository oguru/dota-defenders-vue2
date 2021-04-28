<template>
    <div>
        <p class="nowrap"></p>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import createHero from '../composables/createHero'

export default defineComponent({
    name: 'CreateHero',
    setup() {
        const { getRandomHero, getRandomAbility, buildHero } = createHero()
        return {}
    }
})
</script>

<style lang="ts"></style>
