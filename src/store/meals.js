import { defineStore } from 'pinia'
import { useNavStore } from './nav'

export const useMealsStore = defineStore('meals', {
    state: () => {
        const persisted = JSON.parse(localStorage.getItem('meals') ?? '[]')

        return {
            meals: [...persisted],
            menu: [],
            form: null
        }
    },
    getters: {
        menuMeals() {
            return this.menu.map(o => this.meals[o])
        }
    },
    actions: {
        createMeal() {
            const nav = useNavStore()

            this.form = {
                id: (new Date()).getTime(),
                name: '',
                ingredients: []
            }

            nav.navigate('Meal')
        },
        editMeal(id) {
            const nav = useNavStore()

            for (let i = 0; i < this.meals.length; i++) {
                if (this.meals[i].id === id) {
                    this.form = { ...this.meals[i] }
                    nav.navigate('Meal')

                    return
                }
            }            
        },
        updateMeal() {
            const nav = useNavStore()

            for (let i = 0; i < this.meals.length; i++) {
                if (this.meals[i].id === this.form.id) {
                    this.meals[i] = { ...this.form }
                    this._persist()
                    nav.pop()

                    return
                }
            }

            this.meals.push({ ...this.form })
            this._persist()
            nav.pop()
        },
        deleteMeal() {
            const nav = useNavStore()

            if (!confirm('Are you sure?')) {
                return
            }
            
            this.meals = this.meals.filter(meal => meal.id !== this.form.id)
            this._persist()
            nav.pop()
        },
        addIngredient() {
            this.form.ingredients.push('')
        },
        updateIngredient(offset, ingredient) {
            this.form.ingredients[offset] = ingredient
        },
        removeIngredient(offset) {
            this.form.ingredients = this.form.ingredients.filter((ingredient, i) => i !== offset)
        },
        setFormField(field, value) {
            this.form[field] = value
        },
        shuffle() {
            const menu = []

            for (let i = 0; i < 7; i++) {
                const o = Math.floor(Math.random() * this.meals.length)
                menu.push(o)
            }

            this.menu = menu
        },
        _persist() {
            localStorage.setItem('meals', JSON.stringify(this.meals))
        }
    }
})