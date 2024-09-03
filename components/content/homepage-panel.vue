<script setup>
defineProps({
    primary: Boolean,
    invert: Boolean,
    secondary: Boolean,
    main: Boolean,
})
</script>
<template>
    <div class="homepage-panel" :class="{'primary-bg': primary, 'invert-bg': invert, 'secondary-bg': secondary}">
        <div class="homepage-content" v-if="!main">
            <slot></slot>
        </div>
        <div v-else>
            <slot></slot>
        </div>
        <a v-if="main" class="scroll" href="#hi">
            scroll down
            <span class="scroll-arrow"></span>
        </a>
    </div>
</template>

<style lang="scss">
.homepage-panel {
    height: 100vh;
    padding-left: min(50vw, 60vh);
    padding-right: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: clamp(0.92rem, 2vw, 1.4rem);

    @include lt-md {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        justify-content: end;
    }

    h2 {
        font-size: clamp(2rem, 4vw, 3em);
    }
}

.scroll {
    position: absolute;
    left: 50%;
    bottom: 5rem;
    transform: translateX(-50%);
    color: var(--fg-color);
    text-decoration: unset;
    display: block;

    .scroll-arrow {
        position: absolute;
        top: 2.4rem;
        left: 50%;
        transform: translateX(-50%);
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;

        border-top: 10px solid var(--fg-color);
    }
}
</style>