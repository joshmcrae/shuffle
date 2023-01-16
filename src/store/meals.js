import { defineStore } from 'pinia'
import { useNavStore } from './nav'
import { find } from '../utils'

export const useMealsStore = defineStore('meals', {
    state: () => {
        const menu = JSON.parse(localStorage.getItem('meals') ?? '[]')
        const history = JSON.parse(localStorage.getItem('history') ?? '[]')

        return {
            meals: [...menu],
            history: [...history],
            menu: [],
            form: null,
            selectedMenuId: null
        }
    },
    getters: {
        menuMeals() {
            return this.menu.map(o => this.meals[o])
        },
        menuHistory() {
            const history = [...this.history]

            return history.sort((a, b) => a.id > b.id ? -1 : 1)
        },
        selectedMenu() {
            const menu = find(this.history, m => m.id === this.selectedMenuId)

            if (!menu) {
                return null
            }

            return {
                id: menu.id,
                meals: menu.items.map(id => find(this.meals, m => m.id === id))
            }
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
            this.form.ingredients = this.form.ingredients.filter((_, i) => i !== offset)
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
        commitMenu() {
            const menu = {
                id: (new Date()).getTime(),
                items: this.menu.map(i => this.meals[i].id)
            }

            this.history.push(menu)
            this._persist()

            this.viewMenu(menu.id)
        },
        viewMenu(id) {
            const nav = useNavStore()
            this.selectedMenuId = id

            nav.navigate('Menu')
        },
        _persist() {
            localStorage.setItem('meals', JSON.stringify(this.meals))
            localStorage.setItem('history', JSON.stringify(this.history))
        }
    }
})
