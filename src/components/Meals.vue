<template>
    <Header
        title="Meals"
        rightActionIcon="PhPlus"
        @rightActionClick="createMeal">
        <ul>
            <ListItem
                v-for="meal in meals"
                :key="meal.id"
                :title="meal.name"
                :description="`${meal.ingredients.length} ingredients`"
                @click="editMeal(meal.id)"/>
        </ul>
    </Header>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import { useMealsStore } from '../store/meals'
import Header from './Header.vue'
import ListItem from './ListItem.vue'

export default {
    name: 'Meals',
    tabGroup: 'meals',
    components: {
        Header,
        ListItem
    },
    computed: mapState(useMealsStore, ['meals']),
    methods: {
        ...mapActions(useNavStore, ['navigate']),
        ...mapActions(useMealsStore, ['createMeal', 'editMeal'])
    }
}
</script>
