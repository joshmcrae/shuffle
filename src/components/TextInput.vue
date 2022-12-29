<template>
    <div class="py-6">
        <label
            class="block font-medium"
            :for="name">
            {{ label }}
        </label>
        <input
            :id="name"
            :value="value"
            class="w-full mt-2 py-2 border-b border-gray-200 focus:outline-none"
            type="text"
            @input="$emit('input', $event)"/>
    </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        name: String,
        label: String,
        value: String
    }
}
</script>
