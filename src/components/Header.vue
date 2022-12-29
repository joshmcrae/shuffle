<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center py-5 px-6 bg-gray-50 border-b border-gray-100">
            <div class="w-6 text-yellow-400">
                <PhCaretLeft
                    v-if="back"
                    class="cursor-pointer"
                    :size="24"
                    weight="light"
                    @click="pop"/>

                <component
                    v-if="leftActionIcon"
                    class="cursor-pointer"
                    :is="leftActionIcon"
                    :size="24"
                    weight="light"
                    @click="$emit('leftActionClick')"/>
            </div>
            <h1 class="font-medium text-xl">{{ title }}</h1>
            <div class="w-6 text-yellow-400">
                <component
                    v-if="rightActionIcon"
                    class="cursor-pointer"
                    :is="rightActionIcon"
                    :size="24"
                    weight="light"
                    @click="$emit('rightActionClick')"/>
            </div>
        </div>

        <div class="overflow-y-auto">
            <slot/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useNavStore } from '../store/nav'
import { PhCaretLeft, PhPlus, PhCheck, PhArrowsClockwise } from 'phosphor-vue'

export default {
    name: 'Header',
    components: {
        PhCaretLeft,
        PhPlus,
        PhCheck,
        PhArrowsClockwise
    },
    props: {
        title: String,
        back: Boolean,
        leftActionIcon: String,
        rightActionIcon: String
    },
    methods: mapActions(useNavStore, ['pop'])
}
</script>
