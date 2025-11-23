<script setup lang="ts">
import Button from "./ui/button/Button.vue";

const props = defineProps<{
    targetId: string;
    label: string;
}>();

const scrollToSection = () => {
    const el = document.getElementById(props.targetId);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>

<template>
    <Button
        @click="scrollToSection"
        class="bg-white/20 w-[8rem] text-white px-4 py-2 rounded border border-white/20 hover:bg-black/30 transition-all duration-800 ease-in-out"
    >
        {{ label }}
    </Button>
</template>
