<script setup>
import Logo from "@/Partials/Logo.vue";
import { motion } from "motion-v";
import { ref } from "vue";

const isMenuOpen = ref(false);
const navlinks = ref([
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/about",
        label: "About",
    },
    {
        path: "#footerSection",
        label: "Projects",
    },
    {
        path: "/resume",
        label: "Resume",
    },
]);
</script>

<template>
    <div class="mx-auto py-2">
        <nav
            class="text-white flex items-center justify-between z-50 py-4 px-4 sm:px-6 lg:px-8 backdrop-blur-sm  fixed top-0 w-full bg-black/30"
        >
            <!-- Left: Logo -->
            <motion.div
                :animate="{ opacity: [0.6, 1, 0.6] }"
                :transition="{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }"
                class="relative flex-shrink-0"
            >
                <Logo
                    class="max-w-[100px] sm:max-w-[120px]"
                    data-aos="zoom-in-down"
                />
            </motion.div>

            <!-- Center: Nav Links -->
            <div
                class="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6 lg:space-x-10"
            >
                <Link
                    v-for="{ path, label } in navlinks"
                    :key="path"
                    :href="path"
                    class="nav-link"
                    data-aos="zoom-in-down"
                    >{{ label }}</Link
                >
            </div>

            <!-- Right: Button -->
            <div class="hidden md:block flex-shrink-0">
                <button
                    data-aos="zoom-in-down"
                    class="border border-white/20 rounded py-2 px-3 lg:px-4 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
                >
                    Get in Touch
                </button>
            </div>

            <!-- Mobile Toggle -->
            <button
                @click="isMenuOpen = !isMenuOpen"
                class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 flex-shrink-0"
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

        <!-- Mobile Menu -->

        <div
            v-if="isMenuOpen"
            class="md:hidden fixed inset-0 top-[64px] bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-start pt-8 space-y-8 text-lg sm:text-xl"
        >
            <Link
                v-for="{ path, label } in navlinks"
                :key="path"
                :href="path"
                class="nav-link"
                data-aos="zoom-in-down"
                >{{ label }}</Link
            >
            <button
                @click="isMenuOpen = false"
                class="border border-white/50 rounded py-2 px-3 lg:px-4 bg-white/60 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:text-white/80 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
                Get in Touch
            </button>
        </div>

        <hr class="hidden max-w-[90vw] blur-[0.9px] mt-[72px] mx-auto" />
        <main class="text-white mt-8 px-4">
            <slot />
        </main>
    </div>
</template>
