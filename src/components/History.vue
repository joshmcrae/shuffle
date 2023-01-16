<template>
    <Header title="History">
        <ul>
            <ListItem
                v-for="(menu, offset) in menuHistory"
                :key="offset"
                :title="weekOf(menu.id)"
                :description="numberOfMeals(menu.items)"
                @click="viewMenu(menu.id)"/>
        </ul>
    </Header>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useMealsStore } from '../store/meals';
import Header from './Header.vue'
import ListItem from './ListItem.vue'

export default {
    name: 'History',
    components: {
        Header,
        ListItem
    },
    computed: mapState(useMealsStore, ['menuHistory']),
    methods: {
        ...mapActions(useMealsStore, ['viewMenu']),
        weekOf(timestamp) {
            const date = (new Date(timestamp)).toLocaleDateString()

            return `Week of ${date}`
        },
        numberOfMeals(items) {
            if (items.length === 1) {
                return `1 meal`
            }

            return `${items.length} meals`
        }
    }
}
</script>
