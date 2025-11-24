<template>
    <div
        class="border w-[15em] h-[20em] flex flex-col rounded-2xl px-4 py-4 gap-2 bg-black"
    >
        <!-- Project Thumbnail -->
        <img src="" alt="ProjectImage" class="h-[70%] border border-red-500" />
        <Badge class="text-secondary font-semibold" variant="outline"
            >UI/UX</Badge
        >
        <!-- Title -->
        <span class="text-lg"> Digital Agency </span>
        <span class="underline underline-offset-4 text-sm">
            Read Case Study
        </span>
    </div>
</template>

<script setup lang="ts">
// Badge component import might need to be adjusted based on your project
import { Badge } from "@/Components/ui/badge";
</script>
