<template>
    <div>
        <h1>Meals</h1>

        <ul>
            <ListItem
                v-for="meal in meals"
                :key="meal.id"
                :title="meal.name"
                :description="`${meal.ingredients.length} ingredients`"
                @click="editMeal(meal.id)"/>
        </ul>

        <button
            class="btn action"
            @click="createMeal">
            New Meal
        </button>

        <button
            v-if="meals.length"
            class="btn action"
            @click="navigate('Shuffle')">
            Build Menu
        </button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import { useMealsStore } from '../store/meals'
import ListItem from './ListItem.vue'

export default {
    components: {
        ListItem
    },
    computed: mapState(useMealsStore, ['meals']),
    methods: {
        ...mapActions(useNavStore, ['navigate']),
        ...mapActions(useMealsStore, ['createMeal', 'editMeal'])
    }
}
</script>