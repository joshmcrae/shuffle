<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center shrink-0 h-20 px-6 bg-gray-50 border-b border-gray-100">
            <div class="w-6 text-yellow-400 text-2xl">
                <button 
                    v-if="back"
                    @click="pop">
                    <fa-icon icon="fa-angle-left"/>
                </button>

                <button
                    v-if="leftActionIcon"
                    @click="$emit('leftActionClick')">
                    <fa-icon :icon="leftActionIcon"/>
                </button>
            </div>
            <h1 class="font-medium text-xl">{{ title }}</h1>
            <div
                class="w-6 text-yellow-400 text-2xl">
                <button
                    v-if="rightActionIcon"
                    @click="$emit('rightActionClick')">
                    <fa-icon :icon="rightActionIcon"/>
                </button>
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

export default {
    name: 'Header',
    props: {
        title: String,
        back: Boolean,
        leftActionIcon: String,
        rightActionIcon: String
    },
    methods: mapActions(useNavStore, ['pop'])
}
</script>
