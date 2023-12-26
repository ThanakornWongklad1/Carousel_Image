
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
<template>
    <!-- header -->
    <header>
        <div class="flex justify-end m-4">
            <button @click="$router.push('/carousel')"
                class="py-2 px-5 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition-all">
                Carousel by me</button>
        </div>
        <h1 class="text-3xl text-center mb-10">Swiper Library</h1>
    </header>

    <swiper :centeredSlides="true" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <img src="https://fastly.picsum.photos/id/11/1000/500.jpg?hmac=nghX31Dgv8rwueqzoYV1QyxZQBv_YGY_WiW42MWvG1M">
        </swiper-slide>
        <swiper-slide>
            <img src="https://fastly.picsum.photos/id/22/1000/500.jpg?hmac=W5aIAQ0xP9yyKZT6RDZPh8nROZWepewpklZmmHZES18">
        </swiper-slide>
        <swiper-slide>
            <img src="https://fastly.picsum.photos/id/33/1000/500.jpg?hmac=JunyJ02IDxKkBjl8fLQJBUZR7Zg7RBtBEWco0mcsw6g">
        </swiper-slide>
        <swiper-slide>
            <img src="https://fastly.picsum.photos/id/44/1000/500.jpg?hmac=-EVHiyu5iZ0bG8a2jgPvOpyuS0jdOKu-ocvau3ywO78">
        </swiper-slide>
        <swiper-slide>
            <img src="https://fastly.picsum.photos/id/55/1000/500.jpg?hmac=048-RmU0EQ5OBqHbmQlXYehLmi6nLW6qudfecjW8_x8">
        </swiper-slide>
    </swiper>
</template> 

  