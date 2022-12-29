<template>
    <Header
        title="Edit Meal"
        rightActionIcon="PhCheck"
        @rightActionClick="updateMeal"
        back>
        <div class="px-6">
            <TextInput
                :value="form.name"
                name="name"
                label="Name"
                @input="setFormField('name', $event.target.value)"/>

            <div class="header">
                <h2 class="font-medium">Ingredients</h2>
                <button
                    class="action"
                    @click="addIngredient">
                    Add
                </button>
            </div>

            <ul>
                <li
                    v-for="(ingredient, offset) in form.ingredients"
                    :key="offset">
                    <input
                        :value="ingredient"
                        placeholder="New Ingredient"
                        @input="updateIngredient(offset, $event.target.value)"/>

                    <button @click="removeIngredient(offset)">
                        Remove
                    </button>
                </li>
            </ul>

            <button
                class="btn error"
                @click="deleteMeal">
                Delete
            </button>
        </div>
    </Header>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import { useMealsStore } from '../store/meals'
import Header from './Header.vue'
import TextInput from './TextInput.vue'

export default {
    components: {
        Header,
        TextInput
    },
    computed: {
        ...mapState(useMealsStore, ['form'])
    },
    methods: {
        ...mapActions(useNavStore, ['pop']),
        ...mapActions(useMealsStore, ['updateMeal', 'deleteMeal', 'addIngredient', 'updateIngredient', 'removeIngredient', 'setFormField'])
    }
}
</script>
