import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        tailwindcss(),
        vue(),
        Components({
            dirs: [
                "resources/js/Components",
                "resources/js/Layouts",
                "resources/js/Pages",
            ],
            extensions: ["vue"],
            deep: true,
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
            "~": resolve(__dirname, "resources/js"),
        },
    },
});
