<template>
    <v-hover v-slot="{ hover }">
        <v-card
            @click="$emit('handleClick', item)"
            class="base-card transition-speed"
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
                <slot></slot>
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
    name: 'Card',
    props: {
        isSelected: Boolean,
        item: Object
    }
})
</script>

<style scoped lang="scss">
.base-card {
    position: relative;
    cursor: pointer;

    .raise-card {
        transform: translateY(-2px);
    }
}
</style>
