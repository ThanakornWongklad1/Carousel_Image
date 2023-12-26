<script setup>
import Carousel from './Carousel.vue';

const slides = [
  'https://fastly.picsum.photos/id/11/1000/500.jpg?hmac=nghX31Dgv8rwueqzoYV1QyxZQBv_YGY_WiW42MWvG1M',
  'https://fastly.picsum.photos/id/22/1000/500.jpg?hmac=W5aIAQ0xP9yyKZT6RDZPh8nROZWepewpklZmmHZES18',
  'https://fastly.picsum.photos/id/33/1000/500.jpg?hmac=JunyJ02IDxKkBjl8fLQJBUZR7Zg7RBtBEWco0mcsw6g',
  'https://fastly.picsum.photos/id/44/1000/500.jpg?hmac=-EVHiyu5iZ0bG8a2jgPvOpyuS0jdOKu-ocvau3ywO78',
  'https://fastly.picsum.photos/id/55/1000/500.jpg?hmac=048-RmU0EQ5OBqHbmQlXYehLmi6nLW6qudfecjW8_x8',
]

</script>
 
<template>
  <RouterView />

  <div class="w-full">
    <!-- header -->
    <header>
      <div class="flex justify-end m-4">
        <button @click="$router.push('/swiper')"
          class="py-2 px-5 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition-all">
          or use Swiperjs</button>
      </div>
      <h1 class="text-3xl text-center">Carousel By Me</h1>
    </header>

    <!-- image -->
    <div>
      <Carousel :slides="slides" />
    </div>
  </div>
</template>
 
<style scoped></style>