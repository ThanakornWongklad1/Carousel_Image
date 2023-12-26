<script setup>

defineProps({
    slide: String,
    currentSlide: Number,
    index: Number
})

</script>
 
<template>
    <Transition name="slide-in">
        <div class="absolute" v-if="currentSlide === index">
            <img :src="slide" class="mt-10" >
        </div>
    </Transition>
</template>
 
<style scoped>
.slide-in-leave-active,
.slide-in-enter-active {
    transition: all 1s ease-in-out;
}

.slide-in-enter-form {
    transform: translateX(100%);
    z-index: 2;
}

.slide-in-leave-to {
    transform: translateX(-100%);
    z-index: 2;
}
</style>