<script setup>
import { Button } from "@/Components/ui/button";
import { ChevronDown } from "lucide-vue-next";
import { motion } from "motion-v";
import ScrollToButton from "@/Components/ScrollToButton.vue";
</script>

<template>
    <div
        class="w-screen h-[80vh] flex flex-col justify-center items-center space-y-4"
    >
        <h1 class="text-5xl text-white" data-aos="fade-up">UI/UX Designer</h1>
        <p
            class="text-lg text-white/50 wrap-break-word text-center"
            data-aos="fade-up"
        >
            Crafting intuitive digital experiences that bridge the gap <br />
            between user needs and buisness goals.
        </p>
        <div class="space-x-4">
            <ScrollToButton targetId="skillsSection" label="View My Work" />
            <ScrollToButton targetId="aboutSection" label="About Me" />
        </div>

        <motion.div
            class="absolute bottom-16"
            :animate="{
                y: [0, -12, 0], // move up 4px and back down
            }"
            :transition="{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
            }"
            drag
            dragDirectionLock
            @directionLock="(direction) => (activeDirection = direction)"
            @dragEnd="() => (activeDirection = null)"
            :dragConstraints="{ top: 0, right: 0, bottom: 0, left: 0 }"
            :dragTransition="{ bounceStiffness: 500, bounceDamping: 15 }"
            :dragElastic="0.2"
            :whileDrag="{ cursor: 'grabbing' }"
        >
            <ChevronDown
                class="text-white/60 hover:text-white size-8 transition-colors duration-200"
            />
        </motion.div>
    </div>
</template>
