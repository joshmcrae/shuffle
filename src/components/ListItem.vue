<template>
    <li class="m-2 bg-white rounded drop-shadow p-6 cursor-pointer">
        <h3 class="font-bold mb-2">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
    </li>
</template>

<script>
export default {
    props: {
        title: String,
        description: String
    }
}
</script>
