<template>
    <div>
        <h1>Next Week</h1>

        <ul>
            <ListItem
                v-for="(meal, offset) in menuMeals"
                :key="offset"
                :title="meal.name"/>
        </ul>

        <button
            class="btn action"
            @click="shuffle">
            Shuffle
        </button>

        <button
            class="btn"
            @click="pop">
            Back
        </button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import { useMealsStore } from '../store/meals'
import ListItem from './ListItem.vue'

export default {
    components: { ListItem },
    computed: mapState(useMealsStore, ['menuMeals']),
    beforeMount() {
        this.shuffle()
    },
    methods: {
        ...mapActions(useNavStore, ['pop']),
        ...mapActions(useMealsStore, ['shuffle'])
    }
}
</script>