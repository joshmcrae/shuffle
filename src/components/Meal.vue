<template>
    <Header
        title="Edit Meal"
        rightActionIcon="fa-check"
        @rightActionClick="updateMeal"
        back>
        <div class="px-6">
            <TextInput
                :value="form.name"
                name="name"
                label="Name"
                @input="setFormField('name', $event.target.value)"/>

            <div class="w-full flex justify-between">
                <h2 class="font-medium">Ingredients</h2>
                <button
                    class="w-6"
                    @click="addIngredient">
                    <fa-icon icon="fa-plus"/>
                </button>
            </div>

            <ul>
                <li
                    v-for="(ingredient, offset) in form.ingredients"
                    :key="offset"
                    class="flex justify-between py-2 my-4 border-b border-gray-200">
                    <input
                        class="focus:outline-none"
                        :value="ingredient"
                        placeholder="New Ingredient"
                        @input="updateIngredient(offset, $event.target.value)"/>

                    <button
                        class="w-6"
                        @click="removeIngredient(offset)">
                        <fa-icon icon="fa-xmark"/>
                    </button>
                </li>
            </ul>

            <FormButton
                class="my-8"
                type="danger"
                outline
                @click="deleteMeal">
                Delete Meal
            </FormButton>
        </div>
    </Header>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNavStore } from '../store/nav'
import { useMealsStore } from '../store/meals'
import Header from './Header.vue'
import TextInput from './TextInput.vue'
import FormButton from './FormButton.vue'

export default {
    components: {
        Header,
        TextInput,
        FormButton
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
