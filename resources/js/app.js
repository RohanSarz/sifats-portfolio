import "./bootstrap";
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";

import Layout from "./Layouts/Layout.vue";
import { ZiggyVue, route } from "../../vendor/tightenco/ziggy/src/js";

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

createInertiaApp({
    title: (title) => `Teachlabs > ${title} `,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("Head", Head)
            .component("Link", Link)

            .mount(el);

        // Initialize AOS after the Vue app is mounted
        const items = document.querySelectorAll("[data-aos]");

        items.forEach((el, index) => {
            //el.setAttribute("data-aos-delay", index * 150); // 100ms stagger
            // el.setAttribute("data-aos-duration", 300);  optional: control speed
            el.setAttribute("data-aos-anchor-placement", "bottom-bottom");
        });

        AOS.init({
            duration: 400,
            anchorplacement: "top-center",
            once: true, // run the animation only once
            easing: "ease-out-cubic", // looks smoother
        });
        AOS.refresh();
    },
    progress: true,
});
