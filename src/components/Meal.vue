<template>
    <h1>Edit Meal</h1>

    <input
        :value="form.name"
        placeholder="Name"
        @input="setFormField('name', $event.target.value)"/>

    <div class="header">
        <h2>Ingredients</h2>
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
        class="btn action"
        @click="updateMeal">
        Save
    </button>

    <button
        class="btn error"
        @click="deleteMeal">
        Delete
    </button>

    <button
        class="btn cancel"
        @click="pop">
        Cancel
    </button>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import { useMealsStore } from '../store/meals'

export default {
    computed: {
        ...mapState(useMealsStore, ['form'])
    },
    methods: {
        ...mapActions(useNavStore, ['pop']),
        ...mapActions(useMealsStore, ['updateMeal', 'deleteMeal', 'addIngredient', 'updateIngredient', 'removeIngredient', 'setFormField'])
    }
}
</script>

<style lang="scss" scoped>
li {
    display: flex;

    input {
        flex-grow: 1;
    }

    button {
        padding: 16px;
        background: transparent;
        color: red;
        font-size: 16px;
    }
}

.header {
    display: flex;

    h2 {
        flex-grow: 1;
    }

    button {
        padding: 16px;
        background: transparent;
        color: blue;
        font-size: 16px;
    }
}
</style>