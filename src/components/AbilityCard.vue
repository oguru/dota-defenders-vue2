<template>
    <v-card>
        <h2>{{ dname }}</h2>
        <p>{{ type }}</p>
        <img :src="`http://cdn.dota2.com${img}`" :alt="name" />
        <p>{{ desc }}</p>
        <p>{{ stats }}</p>
    </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'AbilityCard',
    props: {
        ability: Object
    },
    setup(props) {
        const { dname, type, img, desc, stats } = props.ability

        return { dname, type, img, desc, stats }
    }
})
</script>

<style lang="scss" scoped></style>
