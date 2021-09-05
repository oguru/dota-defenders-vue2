<template>
    <!-- <v-card
        :disabled="disabled"
        @click="disabled ? null : $emit('handleClick', item)"
        class="base-card transition-speed"
        :elevation="isSelected ? 8 : 2"
    >
        <v-overlay opacity="0.46" absolute :value="overlay"> </v-overlay>
        <div
            class="fill-height d-flex flex-column transition-speed"
            :class="{ 'raise-card': isSelected }"
        >
            <slot></slot>
        </div>
    </v-card> -->

    <!-- //original -->
    <v-hover :disabled="disabled" v-slot="{ hover }">
        <v-card
            :disabled="disabled"
            @click="disabled ? null : $emit('handleClick', item)"
            class="base-card transition-speed"
            :elevation="hover || isSelected ? 8 : 2"
        >
            <v-overlay :opacity="hover ? 0.2 : 0.46" absolute :value="overlay">
            </v-overlay>
            <div
                class="fill-height d-flex flex-column transition-speed"
                :class="{ 'raise-card': hover || isSelected }"
            >
                <slot></slot>
            </div>
        </v-card>
    </v-hover>

    <!-- <v-hover :disabled="disabled" value="true">
        <v-card
            :disabled="disabled"
            @click="disabled ? null : $emit('handleClick', item)"
            class="base-card transition-speed"
            :elevation="hover || isSelected ? 8 : 2"
        >
            <v-overlay :opacity="0.46" absolute :value="overlay"> </v-overlay>
            <div
                class="fill-height d-flex flex-column transition-speed"
                :class="{ 'raise-card': hover || isSelected }"
            >
                <slot></slot>
            </div>
        </v-card>
    </v-hover> -->
</template>

<script lang="ts">
import { computed, defineComponent, watch, reactive, ref } from 'vue'
import store from '@/store'
// import { IHero } from '../interfaces/hero.interface'

export default defineComponent({
    name: 'Card',
    props: {
        isSelected: Boolean,
        item: Object,
        overlay: Boolean,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped lang="scss">
.base-card {
    position: relative;
    cursor: pointer;
    max-width: 400px;

    .raise-card {
        transform: translateY(-2px);
    }
}
</style>
