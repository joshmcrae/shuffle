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

            <div class="flex justify-between">
                <h2 class="font-medium">Ingredients</h2>
                <button
                    class="action"
                    @click="addIngredient">
                    <PhPlus
                        :size="16"
                        weight="thin"/>
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

                    <button @click="removeIngredient(offset)">
                        <PhX
                            :size="16"
                            weight="thin"/>
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
import { PhPlus, PhX } from 'phosphor-vue'
import Header from './Header.vue'
import TextInput from './TextInput.vue'
import FormButton from './FormButton.vue'

export default {
    components: {
        Header,
        TextInput,
        PhPlus,
        PhX,
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
