<template>
  <section>
    <div class="flex-center md:flex-col-reverse gap-5">
      <div class="flex-1 fl-5 md:w-full">
        <h2
          class="font-bold leading-tight text-[40px] text-darker md:text-4xl md:leading-normal md:text-center"
        >
          {{ $t('landing.vision_heading') }}
        </h2>
        <p class="text-xl my-4 md:mt-2 text-dark">
          {{ $t('landing.vision_description') }}
        </p>
        <a :href="`https://www.baji724.com/m/home`" target="_blank">
          <button class="btn-primary w-fit">
            {{ $t('landing.contact_us') }}
          </button>
        </a>
      </div>
      <div class="flex-1 md:w-full">
    <div
        v-motion-pop-bottom
        class="w-full rounded-2xl flex-center overflow-hidden shadow-lg "
    >
        <img
            loading="lazy"
            src="/images/landing.webp"
            class="w-auto h-auto max-w-full max-h-full object-contain"
        />
    </div>
</div>
    </div>
    <div class="flex-center md:flex-col gap-5 mt-4">
      <div class="flex-1 md:w-full">
        <img
          loading="lazy"
          v-motion-pop-bottom
          src="/images/landing-small.webp"
          class="w-full h-36 object-cover rounded-2xl shadow-sm"
        />
      </div>
      <div class="flex-1">
        <h3 class="text-2xl text-darker font-bold">
          {{ $t('landing.materials_heading') }}
        </h3>
        <div class="flex-between gap-2 mt-2 sm:flex-col">
          <p class="text-xl text-dark">
            {{ $t('landing.materials_description') }}
          </p>

          <RouterLink
            class="sm:ml-auto"
            :to="
              $localePath({
                name: 'about',
              })
            "
          >
            <button class="whitespace-nowrap btn-primary btn-with-icon sm:mt-4">
              <span>{{ $t('landing.read_more') }}</span>
              <span class="rounded-full w-6 h-6 bg-white flex-center text-darker trans">
                <arrowTopIcon class="w-4" />
              </span>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import appSettings from '@/assets/data/app.json'
import arrowTopIcon from '@/assets/icons/arrow-top.svg'
</script>
