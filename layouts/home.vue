<template>
    <div class="home-container">
        <slot></slot>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

onMounted(() => {
    // Mouse hover effect
    // const contrain = 20;
    // const container = document.querySelector('.home-container');
    const card = document.querySelector('.card-container');

    // container.addEventListener('onmousemove')
})

</script>

<style lang="scss">

</style>