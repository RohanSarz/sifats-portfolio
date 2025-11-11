<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
    <div
        id="aboutSection"
        class="min-h-screen mt-8 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8"
    >
        <div
            class="w-full max-w-3xl flex flex-col items-start space-y-8 sm:space-y-10 md:space-y-12"
        >
            <h1
                class="text-2xl sm:text-3xl md:text-4xl font-semibold"
                data-aos="fade-right"
            >
                About Me
            </h1>

            <p
                class="aboutdesc text-base sm:text-lg leading-relaxed"
                data-aos="fade-up"
            >
                Crafting intuitive digital experiences that bridge the gap
                <br class="hidden sm:block" />
                between user needs and business goals.
            </p>

            <p
                data-aos="fade-up"
                class="aboutdesc text-base sm:text-lg leading-relaxed"
            >
                Hi, I’m Md Shifat Ali. I design digital experiences that feel
                like second nature — the kind you don’t have to “figure out.” My
                layouts are clean, my flows are smooooooth, and my goal? No
                confused clicks.
            </p>

            <p
                data-aos="fade-up"
                class="aboutdesc text-base sm:text-lg leading-relaxed"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur soluta id eveniet nihil? Voluptates, cum
                consequatur! Soluta dolorum nemo esse.
            </p>
        </div>
    </div>
</template>
