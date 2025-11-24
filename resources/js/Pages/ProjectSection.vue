<script setup lang="ts">
import InteractiveGridPattern from "@/Components/ui/interactive-grid-pattern/InteractiveGridPattern.vue";
import ProjectCard from "@/Components/ProjectCard.vue";

// Define the Project type
interface Project {
    thumbnail: string;
    title: string;
    category: string;
    linkText: string;
}

// Fake data for projects
const projects: Project[] = [
    {
        thumbnail:
            "https://placehold.co/300x200/4f46e5/white?text=Digital+Agency",
        title: "Digital Agency",
        category: "Web Design",
        linkText: "Read Case Study",
    },
    {
        thumbnail:
            "https://placehold.co/300x200/ef4444/white?text=E-commerce+Platform",
        title: "E-commerce Platform",
        category: "UI/UX",
        linkText: "View Project",
    },
    {
        thumbnail:
            "https://placehold.co/300x200/10b981/white?text=Mobile+Banking+App",
        title: "Mobile Banking App",
        category: "Mobile Design",
        linkText: "Read Case Study",
    },
    {
        thumbnail:
            "https://placehold.co/300x200/f97316/white?text=Restaurant+Booking",
        title: "Restaurant Booking",
        category: "Web App",
        linkText: "Read Case Study",
    },
];
</script>

<template>
    <div
        id="projectSection"
        class="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 my-12"
    >
        <div class="text-center mb-12">
            <h2 class="text-3xl font-semibold mb-4">My work</h2>
            <p class="desc max-w-2xl mx-auto">
                A selection of projects that showcase my design process and
                problem solving approach
            </p>
        </div>

        <div class="relative w-full h-fit lg:h-[30rem]  place-content-center">
            <InteractiveGridPattern
                :class="'[mask-image:radial-gradient(1300px_circle_at_center,black,transparent)] absolute inset-0 opacity-80 '"
                :width="25"
                :height="25"
                :squares="[80, 60]"
                :squares-class-name="'fill-gray-600/20 hover:fill-blue-600/40 '"
            />
            <div
                class="h-full flex flex-col md:flex-row justify-between px-4 py-8 items-center gap-y-4"
            >
                <ProjectCard
                    v-for="(project, index) in projects"
                    :key="index"
                    class="z-100"
                    :class="index % 2 === 0 ? 'self-start' : 'self-end'"
                    :project="project"
                />
            </div>
        </div>
    </div>
</template>
