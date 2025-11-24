<script setup lang="ts">
import ProjectCards from "@/Components/ProjectCards.vue";
import { motion } from "motion-v";
</script>

<template>
    <div
        id="projectSection"
        class="min-h-screen mt-8 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12"
    >
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">My work</h2>
            <p class="desc max-w-2xl mx-auto">
                A selection of projects that showcase my design process and
                problem solving approach
            </p>
        </div>

        <div class="w-full max-w-6xl">
            <ProjectCards />
        </div>
    </div>
</template>
