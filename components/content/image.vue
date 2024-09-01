<template>
    <NuxtImg :src="src" :alt="alt" />
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
})
</script>