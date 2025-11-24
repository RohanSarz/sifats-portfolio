<script setup lang="ts">
import Button from "@/Components/ui/button/Button.vue";
import { LucideFacebook, LucideLinkedin } from "lucide-vue-next";
import { motion } from "motion-v";
</script>

<template>
    <div
        id="footerSection"
        class="min-h-[20rem] flex flex-col items-center justify-around gap-8"
    >
        <h2
            class="pb-2 text-3xl font-semibold tracking-tight first:mt-0"
            data-aos
        >
            Let's Work together
        </h2>
        <p
            class="leading-8 text-white/60 text-center"
            data-aos
            data-aos-anchor-placement="bottom-bottom"
        >
            I'm always open to discussing new opportunities and interesting
            projects.
            <br />
            Let's create something amazing together.
        </p>
        <div
            class="flex space-x-8 items-center"
            data-aos
            data-aos-anchor-placement="center-bottom"
        >
            <Button class="px-4 sm:px-6" variant="secondary">Mail me</Button>
            <LucideFacebook
                class="size-8 border-2 rounded-lg p-0.5 hover:text-accent-foreground hover:bg-accent transition-all duration-300"
            />
            <LucideLinkedin
                class="size-8 border-2 rounded-lg p-0.5 hover:text-accent-foreground hover:bg-accent transition-all duration-300"
            />
        </div>
        <p
            class="text-md text-gray-300"
            data-aos
            data-aos-anchor-placement="bottom-bottom"
        >
            mdshifatali07@gmail.com
        </p>
    </div>
</template>
