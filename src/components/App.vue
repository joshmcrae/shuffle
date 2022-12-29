<template>
    <div class="w-full h-full relative">
        <component
            class="absolute inset-0 bottom-14"
            :is="screen"/>
        <TabBar class="absolute bottom-0"/>
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
