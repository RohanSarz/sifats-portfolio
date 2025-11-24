<template>
    <div
        class="border w-[15em] h-[20em] flex flex-col rounded-2xl px-4 py-4 gap-2 bg-black/70"
    >
        <!-- Project Thumbnail -->
        <img
            :src="project.thumbnail"
            :alt="project.title"
            class="h-[70%] object-cover"
        />
        <Badge class="text-secondary font-semibold" variant="outline">
            {{ project.category }}
        </Badge>
        <!-- Title -->
        <span class="text-lg"> {{ project.title }} </span>
        <span class="underline underline-offset-4 text-sm">
            {{ project.linkText }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { Badge } from "@/Components/ui/badge";

interface Project {
    thumbnail: string;
    title: string;
    category: string;
    linkText: string;
}

const props = withDefaults(
    defineProps<{
        project: Project;
    }>(),
    {
        project: () => ({
            thumbnail: "",
            title: "Project Title",
            category: "Category",
            linkText: "Read Case Study",
        }),
    },
);
</script>
