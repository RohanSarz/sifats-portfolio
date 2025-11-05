<script setup>
import Logo from "@/Partials/Logo.vue";
</script>

<template>
    <div class="py-4 px-4 max-w-[80vw] mx-auto">
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
    <hr class="max-w-[90vw] blur-[0.5px] mt-4 mx-auto" />
    <main>
        <slot />
    </main>
</template>
