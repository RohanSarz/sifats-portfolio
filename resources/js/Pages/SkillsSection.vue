<template>
    <div
        id="skillsSection"
        class="relative w-full py-12 md:py-16 lg:py-20 flex flex-col justify-center items-center space-y-6 md:space-y-8"
    >
        <NeuralBg
            :hue="250"
            :saturation="2.5"
            :chroma="1"
            class="absolute -z-10 opacity-50"
        />
        <h1
            class="text-2xl sm:text-3xl font-semibold lg:text-4xl text-white/80 px-4 text-center"
            data-aos="fade-up"
            data-aos-delay="0"
        >
            Skills & Expertise
        </h1>
        <section
            class="z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8"
        >
            <div
                v-for="category in categories"
                :key="category.title"
                class="flex-1 flex flex-col gap-3 md:gap-4 min-w-0 md:min-w-[200px]"
                data-aos="fade-up"
            >
                <label class="text-lg lg:text-lg font-light text-white/80">
                    {{ category.title }}
                </label>
                <div class="max-w-[215px] flex flex-wrap gap-2">
                    <Badge
                        v-for="(skill, index) in category.skills"
                        :key="index"
                        class="relative text-xs lg:text-xs hover:border-blue-300/20 bg-white/10 opacity-100 cursor-none backdrop-blur-3xl overflow-hidden"
                        data-aos="zoom-in"
                    >
                        {{ skill }}
                    </Badge>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import NeuralBg from "@/Components/ui/bg-neural/NeuralBg.vue";

import Badge from "@/Components/ui/badge/Badge.vue";

const categories: { title: string; skills: Array<string> }[] = [
    {
        title: "Design Process",
        skills: [
            "User Research",
            "Information Architecture",
            "Wireframing",
            "Prototyping",
            "Redesign",
        ],
    },
    {
        title: "Visual & Interaction",
        skills: [
            "Design System",
            "Illustration",
            "App Design",
            "Visual Design",
            "App Layout",
            "Usability Testing",
            "Dashboard Design",
            "CMS Panel Design",
        ],
    },
    {
        title: "Tools & Technology",
        skills: ["Figma", "Photoshop", "Illustrator"],
    },
];
</script>
