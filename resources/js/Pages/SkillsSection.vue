<template>
    <div
        id="skillsSection"
        class="relative w-full h-[40vh] flex flex-col justify-center items-center space-y-4"
    >
        <NeuralBg :hue="600" :saturation="2.5" :chroma="0.9" class="absolute" />
        <h1 class="text-3xl font-semibold" data-aos="fade-right">
            Skills & Expertise
        </h1>
        <section class="z-10 px-4 py-4 w-full flex justify-evenly">
            <div>
                <Label class="skillLabel">Design Process</Label>
                <div class="px-4 py-4 flex flex-col gap-y-2">
                    <Badge>User Research</Badge>

                    <Badge>Information Architechture</Badge>

                    <Badge>Wireframing</Badge>

                    <Badge>Prototyping</Badge>

                    <Badge>Redesign</Badge>
                </div>
            </div>
            <div>
                <Label>Visual & Interaction</Label>
                <ul class="border p-4">
                    <li class="skillset">
                        <Badge>User Research</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Information Architechture</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Wireframing</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Prototyping</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Redesign</Badge>
                    </li>
                </ul>
            </div>
            <div>
                <Label>Tools & Technology</Label>
                <ul>
                    <li class="skillset">
                        <Badge>User Research</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Information Architechture</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Wireframing</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Prototyping</Badge>
                    </li>
                    <li class="skillset">
                        <Badge>Redesign</Badge>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import NeuralBg from "@/Components/ui/bg-neural/NeuralBg.vue";
</script>
