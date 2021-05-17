<template>
    <Card
        @handleClick="changeAbility"
        :overlay="!isSelected"
        :isSelected="isSelected"
        :disabled="!isSelected && numAbilities === 4"
    >
        <!-- <div> -->
        <h2>{{ dname }}</h2>
        <p>{{ type }}</p>
        <!-- </div> -->
        <v-img
            class="flex-grow-0 mx-auto"
            max-height="150"
            max-width="150"
            :src="`http://cdn.dota2.com${img}`"
        ></v-img>
        <p class="mt-5">{{ desc }}</p>
    </Card>
</template>

<script>
import { defineComponent, ref, watch } from '@vue/composition-api'
import Card from '@/components/Card'
import abilities from '@/data/abilities'

export default defineComponent({
    name: 'AbilityCard',
    components: { Card },
    props: {
        ability: Object,
        selectedAbilities: Object,
        numAbilities: Number
    },
    emits: ['changeAbility'],
    setup(props, { emit }) {
        const { dname, type, img, desc, stats, id } = props.ability
        const { ability, selectedAbilities, numAbilities } = props

        const isSelected = ref(false)

        const changeAbility = () => {
            if (isSelected.value) {
                isSelected.value = false
                emit('changeAbility', ability)
            } else if (!isSelected.value && numAbilities < 4) {
                isSelected.value = true
                emit('changeAbility', ability)
            }
        }

        // watch(selectedAbilities, () => {
        //     if (selectedAbilities[id]) {
        //         isSelected.value = true
        //     } else {
        //         isSelected.value = false
        //     }
        // })

        return { dname, type, img, desc, stats, changeAbility, isSelected }
    }
})
</script>

<style lang="scss" scoped></style>
