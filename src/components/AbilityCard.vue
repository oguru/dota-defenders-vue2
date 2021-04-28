<template>
    <v-card>
        <h2>{name}</h2>
        <p>{type}</p>
        <img :src="img" :alt="name" />
        <p>{desc}</p>
        <p>{stats}</p>
    </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'AbilityCard',
    props: {
        name,
        type,
        imgSrc,
        desc,
        stats
    }
    setup() {
        return {}
    }
})
</script>

<style lang="scss" scoped></style>
