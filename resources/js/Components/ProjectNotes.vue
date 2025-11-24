<script setup lang="ts">
import { computed } from "vue";
import { motion } from "motion-v";
import { Sparkles } from "lucide-vue-next";
import { cn } from "@/lib/utils";

interface DisplayCardProps {
    className?: string;
    icon?: any;
    title?: string;
    description?: string;
    date?: string;
    iconClassName?: string;
    titleClassName?: string;
}

interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}

const props = withDefaults(defineProps<DisplayCardsProps>(), {
    cards: () => [],
});

const defaultCards = [
    {
        className:
            "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        date: "Jan 2024",
    },
    {
        className:
            "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
        title: "Task Management App",
        description: "Productivity app with real-time collaboration",
        date: "Mar 2024",
    },
    {
        className:
            "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
        title: "Weather Dashboard",
        description: "Real-time weather forecasting with map integration",
        date: "May 2024",
    },
];

const displayCards = computed(() => {
    // Return cards if they exist and are not empty, otherwise return defaultCards
    if (props.cards && Array.isArray(props.cards) && props.cards.length > 0) {
        return props.cards;
    }
    return defaultCards;
});

// Base card class
const baseCardClass = `relative flex h-48 w-[24rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-5 transition-all duration-700 after:absolute after:-right-1 after:top-[-10%] after:h-[110%] after:w-[3rem] after:bg-gradient-to-l after:from-black/0 after:via-black/10 after:to-black/80 after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2`;
</script>

<template>
    <div
        class="relative grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 min-h-[500px]"
    >
        <div
            v-for="(card, index) in displayCards"
            :key="index"
            :class="cn(baseCardClass, card.className)"
        >
            <div>
                <span
                    class="relative inline-block rounded-full bg-blue-800 p-1"
                >
                    <component
                        :is="card.icon || Sparkles"
                        :class="cn('size-4 text-blue-300', card.iconClassName)"
                    />
                </span>
                <p
                    :class="
                        cn(
                            'text-lg font-medium',
                            card?.titleClassName || 'text-blue-500',
                        )
                    "
                >
                    {{ card.title || "Featured" }}
                </p>
            </div>
            <p class="whitespace-nowrap text-lg">
                {{ card.description || "Discover amazing content" }}
            </p>
            <p class="text-muted-foreground">{{ card.date || "Just now" }}</p>
        </div>
    </div>
</template>
