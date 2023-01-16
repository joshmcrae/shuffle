<template>
    <div class="w-full h-14 flex justify-between items-center bg-gray-50 border-t border-gray-100">
        <div
            v-for="tab in tabs"
            :class="tabClasses(tab)"
            @click="navigateTo(tab)">
            <fa-icon :icon="tab.icon"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useNavStore } from '../store/nav'

export default {
    name: 'TabBar',
    computed: {
        ...mapState(useNavStore, ['screen']),
        tabs() {
            return [
                {
                    icon: 'fa-map',
                    screens: ['Meals', 'Meal']
                },
                {
                    icon: 'fa-shuffle',
                    screens: ['Shuffle']
                },
                {
                    icon: 'fa-clock-rotate-left',
                    screens: ['History', 'Menu']
                },
                {
                    icon: 'fa-gear',
                    screens: ['Settings']
                }
            ]
        }
    },
    methods: {
        ...mapActions(useNavStore, ['navigate']),
        tabClasses(tab) {
            return [
                'px-6',
                'cursor-pointer',
                'text-2xl',
                tab.screens.includes(this.screen) ? 'text-yellow-500' : 'text-normal'
            ]
        },
        navigateTo(tab) {
            if (tab.screens.includes(this.screen)) {
                return
            }

            this.navigate(tab.screens[0])
        }
    }
}
</script>
