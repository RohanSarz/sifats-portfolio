<script setup lang="ts">
import AboutSection from "./AboutSection.vue";
import HeroSection from "./HeroSection.vue";

import SkillsSection from "./SkillsSection.vue";
</script>
<template>
    <div class=" ">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AboutSection class="opacity-0" />
    </div>
</template>
