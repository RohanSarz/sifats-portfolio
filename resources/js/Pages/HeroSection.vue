<script setup lang="ts">
import { Button } from "@/Components/ui/button";
import { ChevronDown } from "lucide-vue-next";
import { motion } from "motion-v";
</script>

<template>
    <div
        class="w-screen h-[80vh] flex flex-col justify-center items-center space-y-4"
    >
        <h1 class="text-5xl text-white">UI/UX Designer</h1>
        <p class="text-lg text-white/50 wrap-break-word text-center">
            Crafting intuitive digital experiences that bridge the gap <br />
            between user needs and buisness goals.
        </p>
        <div class="space-x-4">
            <Button
                class="bg-white/20 text-white border-white/20"
                variant="outline"
                >View My Work</Button
            >
            <Button
                class="bg-white/20 text-white border-white/20"
                variant="outline"
                >About Me</Button
            >
        </div>
        <motion.div 
        class="mt-8"
            :animate="{
                y: [0, -4, 0], // move up 4px and back down
            }"
            :transition="{
                duration: 0.9,
                repeat: Infinity,
                ease: 'easeInOut',
            }"
        >
            <ChevronDown
                class="text-white/60 hover:text-white size-8 transition-colors duration-200"
            />
        </motion.div>
    </div>
</template>
