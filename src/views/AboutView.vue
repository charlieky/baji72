<template>
  <section class="py-14 w-full bg-slate-50">
    <div class="container">
      <div class="fs gap-4 sm:flex-col-reverse">
        <div class="flex-3">
          <h2 class="text-4xl sm:text-xl font-bold text-darker section-title-start">
            {{ $t('about_page.company_intro') }}
          </h2>
          <p class="mt-4 text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description') }}
          </p>
           <p class="mt-1 text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description1') }}
          </p>
           <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description2') }}
          </p>
          <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description3') }}
          </p>
           <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description4') }}
          </p>

            <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description6') }}
          </p>
           <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description7') }}
          </p>
            <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description8') }}
          </p>
            <p class="mt text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.company_description9') }}
          </p>

          <h2 class="text-4xl sm:text-xl font-bold text-darker section-title-start !mt-1">
            {{ $t('about_page.mission_title') }}
          </h2>
          <p class="mt-3 text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.mission_description') }}
          </p>
              <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.mission_description1') }}
          </p>
               <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.mission_description2') }}
          </p>
               <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.mission_description3') }}
          </p>
               <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.mission_description4') }}
          </p>
          <h2 class="text-4xl sm:text-xl font-bold text-darker section-title-start !mt-1">
            {{ $t('about_page.vision_title') }}
          </h2>
          <p class="mt-3 text-dark text-justify text-lg">
            {{ $t('about_page.vision_description') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description1') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description2') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description3') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description4') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description5') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description6') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description7') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description8') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description9') }}
          </p>
            <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description10') }}
          </p>
            <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description11') }}
          </p>
            <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description12') }}
          </p>
            <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description13') }}
          </p>
            <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description14') }}
          </p>
          <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description15') }}
          </p>
           <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description16') }}
          </p>
             <p class=" text-dark text-justify text-lg sm:text-sm">
            {{ $t('about_page.vision_description17') }}
          </p>
        </div>
        <div class="flex-2 sm:mb-2">
          <div
            v-motion-pop-bottom
            class="w-full rounded-3xl overflow-hidden aspect-square"
          >
            <video autoplay loop muted playsinline class="w-full h-full object-contain">
              <source src="/videos/Video.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-14 w-full bg-darker text-light">
    <div class="container">
      <h2 class="font-bold text-3xl w-fit mx-auto section-title mb-2">
        {{ $t('about_page.services.heading') }}
      </h2>
      <p class="mt-4 text-center text-light/70">
        {{ $t('about_page.services.description') }}
      </p>


      <ul class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 w-full">
        <li
          v-for="(item, idx) in services"
          :key="idx"
          v-motion-pop-bottom
          class="p-5 overflow-hidden trans group hover:bg-primary main-border relative flex-center flex-col rounded-xl"
        >
          <span class="bg-blur"></span>

          <component :is="item.icon" class="w-12 text-light lg:w-10 font-bold" />

          <h4
            class="text-xl section-title group-hover:before:bg-light group-hover:before:w-full mb-6 text-center"
          >
            {{ item.heading }}
          </h4>
          <span class="text-center text-sm text-light/80 leading-relaxed">
            {{ item.description }}
          </span>

        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, markRaw, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const servicesList = markRaw([
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/building-up.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/leaf.svg')),
    heading: '',
    description: '',
  },
  {
    icon: defineAsyncComponent(() => import('@/assets/icons/services/puzzle.svg')),
    heading: '',
    description: '',
  },

])

const services = computed(() =>
  servicesList.map((item, idx) => {
    return {
      ...item,
      heading: t(`about_page.services.list.${idx}.heading`),
      description: t(`about_page.services.list.${idx}.description`),

    }
  }),
)
</script>

<style>
body {
  @apply bg-slate-50;
}
</style>
