<template>
    <div class="w-full h-full flex flex-col">
        <component
            class="flex-grow"
            :is="screen"/>
        <TabBar class="basis-14 grow-0 shrink-0"/>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import TabBar from './TabBar.vue'
import Meals from './Meals.vue'
import Meal from './Meal.vue'
import Shuffle from './Shuffle.vue'

export default {
    components: {
        TabBar,
        Meals,
        Meal,
        Shuffle
    },
    computed: mapState(useNavStore, ['screen'])
}
</script>
