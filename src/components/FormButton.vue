<template>
    <button :class="classes">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'FormButton',
    props: {
        type: String,
        outline: Boolean
    },
    computed: {
        classes() {
            const classes = [
                'w-full',
                'p-2',
                'text-sm',
                'rounded'
            ]

            
            if (this.outline) {
                classes.push('border')

                switch (this.type) {
                    case 'danger':
                        classes.push('text-red-500', 'border-red-500')
                        break
                }
            } else {
                switch (this.type) {
                    case 'danger':
                        classes.push('text-white', 'bg-red-500')
                        break
                }
            }

            return classes
        }
    }
}
</script>
