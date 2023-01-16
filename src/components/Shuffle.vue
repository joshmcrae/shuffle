<template>
    <Header
        title="Plan"
        leftActionIcon="fa-arrows-rotate"
        rightActionIcon="fa-check"
        @leftActionClick="shuffle"
        @rightActionClick="commitMenu">
        <ul>
            <ListItem
                v-for="(meal, offset) in menuMeals"
                :key="offset"
                :title="meal.name"
                :description="`Meal #${offset + 1}`"/>
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
    components: {
        Header,
        ListItem
    },
    computed: mapState(useMealsStore, ['menuMeals']),
    beforeMount() {
        this.shuffle()
    },
    methods: {
        ...mapActions(useNavStore, ['pop']),
        ...mapActions(useMealsStore, ['shuffle', 'commitMenu'])
    }
}
</script>
