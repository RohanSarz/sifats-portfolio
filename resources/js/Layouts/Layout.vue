<script setup>
import Button from "@/components/ui/button/Button.vue";
import Logo from "@/Pertials/Logo.vue";
</script>

<template>
    <div class="my-4 max-w-7xl mx-auto">
        <nav class="text-white flex justify-between items-center">
            <div>
                <Logo class="relative max-w-8" />
            </div>
            <div class="gap-6 flex">
                <Link class="nav-link" href="/about">About </Link>
                <Link class="nav-link">Skills </Link>
                <Link class="nav-link">Work </Link>
                <Link class="nav-link">Contact </Link>
            </div>
            <div>
                <button
                    class="border border-white/20 rounded py-2 px-3 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                    <span>Get in Touch</span>
                </button>
            </div>
        </nav>
    </div>
    <hr class="bg-gray-500 h-0.5" />
</template>
