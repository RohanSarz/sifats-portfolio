<script setup lang="ts">
import InteractiveGridPattern from "@/Components/ui/interactive-grid-pattern/InteractiveGridPattern.vue";
import ProjectCards from "@/Components/ProjectCards.vue";
import { motion } from "motion-v";
import Badge from "@/Components/ui/badge/Badge.vue";
import ProjectCard from "@/Components/ProjectCard.vue";
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

        <div class="relative w-full h-fit place-content-center px-2">
            <InteractiveGridPattern
                :class="'[mask-image:radial-gradient(1300px_circle_at_center,white,transparent)] absolute inset-0 '"
                :width="50"
                :height="50"
                :squares="[60, 60]"
                :squares-class-name="'fill-gray-600/20 hover:fill-blue-600/40 '"
            />
            <div class="flex flex-col items-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    </div>
</template>
