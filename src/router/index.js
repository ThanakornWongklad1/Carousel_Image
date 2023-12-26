import { createRouter, createWebHistory } from "vue-router";
import AppCarousel from '../components/AppCarousel.vue'
import SwiperComponent from '../components/SwiperComponent.vue'
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/carousel",
        },
        {
            path: "/carousel",
            name: "AppCarousel",
            component: AppCarousel,
        },
        {
            // SwiperComponent
            path: "/swiper",
            name: "SwiperComponent",
            component: SwiperComponent,
        }
    ]
})

router.beforeEach(() => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    swiper.init();
})

export default router;
