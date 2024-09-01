<script setup>
import { ref, watch, onMounted, toRefs, computed } from 'vue';

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    }
});

const modal = ref(null);
const isOpen = toRefs(props).open;
watch(isOpen, (value) => value ? modal.value.showModal() : modal.value.close());
onMounted(() => {
    if(isOpen.value) modal.value.showModal();
})
</script>

<template>
    <dialog class="modal" ref="modal" @close="$emit('close-modal')">
        <form method="dialog" class="modal-box">
            <div>
                <slot></slot>
            </div>
        </form>
        <form method="dialog" class="modal-backdrop" :class="{open: isOpen}">
            <button formmethod="dialog">close</button>
        </form>
    </dialog>
</template>

<style lang="scss">
.modal {
    position: fixed;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    .modal-box {
        z-index: 20;
        position: absolute;
        width: 20rem;
        background-color: var(--accent-color);
    }
}
.modal-backdrop {
    position: absolute;
    background-color: black;
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: 10;

    transition: opacity .23s ease-in;
    &.open {
        opacity: .3;
    }

    button {
        opacity: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
        top: 0;
        left: 0;
    }
}
</style>