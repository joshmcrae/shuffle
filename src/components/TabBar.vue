<template>
    <div class="w-full h-14 flex justify-between items-center bg-gray-50 border-t border-gray-100">
        <div
            v-for="tab in tabs"
            :class="tabClasses(tab)"
            @click="navigateTo(tab)">
            <component
                :is="tab.icon"
                :size="32"
                weight="thin"/>
        </div>
    </div>
</template>

<script>
import { PhGearSix, PhListPlus, PhShuffle, PhClockCounterClockwise } from 'phosphor-vue'
import { mapActions, mapState } from 'pinia';
import { useNavStore } from '../store/nav'

export default {
    name: 'TabBar',
    components: {
        PhGearSix
    },
    computed: {
        ...mapState(useNavStore, ['screen']),
        tabs() {
            return [
                {
                    icon: PhListPlus,
                    screens: ['Meals', 'Meal']
                },
                {
                    icon: PhShuffle,
                    screens: ['Shuffle']
                },
                {
                    icon: PhClockCounterClockwise,
                    screens: ['History']
                },
                {
                    icon: PhGearSix,
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
