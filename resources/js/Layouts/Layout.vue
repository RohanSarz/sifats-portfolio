<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Logo from '@/Partials/Logo.vue' // Fixed typo: "Pertials" → "Partials"
import { Link } from '@inertiajs/vue3'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="my-4 max-w-7xl mx-auto px-4 sm:px-6">
    <nav class="text-white flex justify-between items-center">
      <!-- Logo -->
      <div>
        <Logo class="relative max-w-8" />
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-6">
        <Link class="nav-link" href="/about">About</Link>
        <Link class="nav-link">Skills</Link>
        <Link class="nav-link">Work</Link>
        <Link class="nav-link">Contact</Link>
      </div>

      <!-- Desktop CTA Button -->
      <div class="hidden md:block">
        <button
          class="border border-white/20 rounded py-2 px-3 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
        >
          <span>Get in Touch</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white focus:outline-none"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-700 pt-4"
    >
      <Link class="nav-link block" href="/about" @click="isMenuOpen = false">About</Link>
      <Link class="nav-link block" @click="isMenuOpen = false">Skills</Link>
      <Link class="nav-link block" @click="isMenuOpen = false">Work</Link>
      <Link class="nav-link block" @click="isMenuOpen = false">Contact</Link>
      <button
        class="mt-2 w-full border border-white/20 rounded py-2 px-3 bg-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
        @click="isMenuOpen = false"
      >
        Get in Touch
      </button>
    </div>
  </div>

  <hr class="bg-gray-500 h-0.5 mx-4 sm:mx-6" />
</template>

<style scoped>
.nav-link {
  @apply text-white/90 hover:text-white transition-colors duration-200;
}
</style>