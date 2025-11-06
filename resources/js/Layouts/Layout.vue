<script setup>
import Logo from "@/Partials/Logo.vue";
import { motion } from "motion-v";
</script>

<template>
    <div class="py-4 px-4 max-w-[80vw] mx-auto">
        <nav class="text-white flex justify-between items-center">
            <motion.div
                :animate="{
                    opacity: [0.6, 1, 0.6],
                }"
                :transition="{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }"
                class="relative"
            >
                <Logo data-aos="zoom-in-down" />
            </motion.div>
            <div class="gap-6 flex">
                <Link href="/about" class="nav-link" data-aos="zoom-in-down"
                    >About
                </Link>
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Skills
                </Link>
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Work
                </Link>
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Contact
                </Link>
            </div>
            <div>
                <button
                    data-aos="zoom-in-down"
                    class="border border-white/20 rounded py-2 px-3 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                    <span>Get in Touch</span>
                </button>
            </div>
        </nav>
    </div>
    <hr class="max-w-[90vw] blur-[0.9px] mt-4 mx-auto" />
    <main class="text-white max-w-[100vw] overflow-hidden">
        <slot />
    </main>
</template>
