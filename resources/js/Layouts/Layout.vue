<script setup>
import Logo from "@/Partials/Logo.vue";
import { motion } from "motion-v";
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
    <div class="mx-auto">
        <nav
            class="text-white flex justify-between items-center z-50 py-4 px-4 lg:px-8 border-2 border-red-200 backdrop-blur-md"
        >
            <!-- Logo (left) -->
            <motion.div
                :animate="{ opacity: [0.6, 1, 0.6] }"
                :transition="{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }"
                class="relative flex-shrink-0"
            >
                <Logo data-aos="zoom-in-down" class="max-w-[120px]" />
            </motion.div>

            <!-- Desktop Menu (hidden on mobile) -->
            <div
                class="hidden md:flex justify-center items-center space-x-6 lg:space-x-12 flex-grow max-w-2xl"
            >
                <Link href="/about" class="nav-link" data-aos="zoom-in-down"
                    >About</Link
                >
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Skills</Link
                >
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Work</Link
                >
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Contact</Link
                >
                <Link href="#" class="nav-link" data-aos="zoom-in-down"
                    >Resume</Link
                >
            </div>

            <!-- CTA Button (hidden on mobile) -->
            <div class="hidden md:block flex-shrink-0">
                <button
                    data-aos="zoom-in-down"
                    class="border border-white/20 rounded py-2 px-3 lg:px-4 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
                >
                    <span>Get in Touch</span>
                </button>
            </div>

            <!-- Mobile Menu Button -->
            <button
                @click="isMenuOpen = !isMenuOpen"
                class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 flex-shrink-0"
                aria-label="Toggle menu"
            >
                <span
                    class="block w-6 h-0.5 bg-white transition-all duration-300"
                    :class="{
                        'rotate-45 translate-y-1.5': isMenuOpen,
                        '-translate-y-0.5': !isMenuOpen,
                    }"
                ></span>
                <span
                    class="block w-6 h-0.5 bg-white transition-all duration-300"
                    :class="{ 'opacity-0': isMenuOpen }"
                ></span>
                <span
                    class="block w-6 h-0.5 bg-white transition-all duration-300"
                    :class="{
                        '-rotate-45 -translate-y-1.5': isMenuOpen,
                        'translate-y-0.5': !isMenuOpen,
                    }"
                ></span>
            </button>
        </nav>

        <!-- Mobile Menu (slide from top or appear below nav) -->
        <div
            v-if="isMenuOpen"
            class="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-start pt-8 space-y-8 text-xl"
        >
            <Link
                @click="isMenuOpen = false"
                href="/about"
                class="nav-link"
                data-aos="fade-up"
                data-aos-delay="100"
                >About</Link
            >
            <Link
                @click="isMenuOpen = false"
                href="#"
                class="nav-link"
                data-aos="fade-up"
                data-aos-delay="200"
                >Skills</Link
            >
            <Link
                @click="isMenuOpen = false"
                href="#"
                class="nav-link"
                data-aos="fade-up"
                data-aos-delay="300"
                >Work</Link
            >
            <Link
                @click="isMenuOpen = false"
                href="#"
                class="nav-link"
                data-aos="fade-up"
                data-aos-delay="400"
                >Contact</Link
            >
            <Link
                @click="isMenuOpen = false"
                href="#"
                class="nav-link"
                data-aos="fade-up"
                data-aos-delay="500"
                >Resume</Link
            >
            <button
                @click="isMenuOpen = false"
                class="border border-white/20 rounded py-2 px-4 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 mt-4"
            >
                Get in Touch
            </button>
        </div>
    </div>
    <hr class="max-w-[90vw] blur-[0.9px] mt-4 mx-auto" />
    <main class="text-white max-w-[100vw] overflow-hidden">
        <slot />
    </main>
</template>
