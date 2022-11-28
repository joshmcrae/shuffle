<template>
    <li>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
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

<style lang="scss" scoped>
li {
    padding: 16px;
    border-bottom: 1px solid #eee;

    &:last-of-type {
        border-bottom: none;
    }
}
</style>