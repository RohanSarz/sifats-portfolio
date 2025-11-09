<template>
    <div
        id="skillsSection"
        class="relative w-full h-[40vh] flex flex-col justify-center items-center space-y-4"
    >
        <NeuralBg :hue="800" class="absolute" />
        <h1 class="text-3xl font-semibold" data-aos="fade-right">
            Skills & Expertise
        </h1>
        <section class="z-10 px-4 py-4 w-full flex justify-evenly">
            <div>
                <Label>Design Process</Label>
            </div>
            <div>
                <Label>Visual & Interaction</Label>
            </div>
            <div><Label>Tools & Technology</Label></div>
        </section>
    </div>
</template>

<script setup lang="ts">
import NeuralBg from "@/Components/ui/bg-neural/NeuralBg.vue";
</script>
