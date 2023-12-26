<script setup>
import CarouselItem from './Carousel-item.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    slides: Array,
    currentSlide: Number
})

const currentSlide = ref(0)

onMounted(() => {
    setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % props.slides.length
    }, 3000)
})
onBeforeUnmount(() => {
    clearInterval()
})

</script>
 
<template>
    <div class="flex justify-center z-0">
        <div class="relative overflow-hidden z-0" style="width: 1000px;height: 500px;">
            <CarouselItem :slide="slide" :current-slide="currentSlide" :index="index" v-for="(slide, index) in slides" />
        </div>
    </div>
</template>
 
<style scoped></style>