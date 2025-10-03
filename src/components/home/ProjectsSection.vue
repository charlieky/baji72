<template>
  <section class="flex-center">
    <div class="px-4 flex-center flex-col">
      <div class="flex-between w-full">
        <h2 class="text-3xl font-bold text-light section-title-start">
          {{ $t('projects.heading') }}
        </h2>
        <RouterLink
          :to="
            $localePath({
              name: 'projects',
            })
          "
        >

        </RouterLink>
      </div>

      <Carousel v-bind="config" class="mt-16 effect-slider-1">
        <Slide v-for="item in projectsJson" :key="item.id">
          <div class="w-full relative rounded-xl overflow-hidden group" style="aspect-ratio: 4/4">
            <img :src="`/projects/${item.image}`" class="w-full h-full " />
          </div>
        </Slide>

        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import projectsJson from '@/assets/data/projects.json'
import arrowTopIcon from '@/assets/icons/arrow-top.svg'
const config = {
  itemsToShow: 1,
  transition: 500,
  itemsToScroll: 1,
  snapAlign: 'center',
  autoplay: 2000,
  wrapAround: true,

  breakpoints: {
    768: {
      itemsToShow: 3,
    },
    1280: {
      itemsToShow: 3,
    },
  },
}
</script>
