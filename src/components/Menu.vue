<template>
    <Header
        :title="title"
        back>
        <ul>
            <ListItem
                v-for="meal in selectedMenu.meals"
                :key="meal.id"
                :title="meal.name"
                :description="`${meal.ingredients.length} ingredients`"/>
        </ul>
    </Header>
</template>

<script>
import { mapState } from 'pinia';
import { useMealsStore } from '../store/meals';
import Header from './Header.vue'
import ListItem from './ListItem.vue'

export default {
    name: 'Menu',
    components: {
        Header,
        ListItem
    },
    computed: {
        ...mapState(useMealsStore, ['selectedMenu']),
        title() {
            return (new Date(this.selectedMenu.id)).toLocaleDateString()
        }
    }
}
</script>
