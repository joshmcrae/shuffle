<template>
    <div class="w-full flex justify-between bg-gray-50">
        <div
            v-for="tab in tabs"
            class="p-6 cursor-pointer">
            <component :is="tab.icon"/>
        </div>
    </div>
</template>

<script>
import { PhGearSix, PhListPlus, PhShuffle, PhClockCounterClockwise } from 'phosphor-vue'

export default {
    name: 'TabBar',
    components: {
        PhGearSix
    },
    computed: {
        tabs() {
            return [
                {
                    icon: PhListPlus
                },
                {
                    icon: PhShuffle
                },
                {
                    icon: PhClockCounterClockwise
                },
                {
                    icon: PhGearSix
                }
            ]
        }
    }
}
</script>
