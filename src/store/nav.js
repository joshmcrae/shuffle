import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
    state: () => ({
        stack: ['Meals']
    }),
    getters: {
        screen() {
            return this.stack[this.stack.length - 1]
        }
    },
    actions: {
        navigate(screen) {
            this.stack.push(screen)
        },
        pop() {
            this.stack.pop()
        }
    }
})