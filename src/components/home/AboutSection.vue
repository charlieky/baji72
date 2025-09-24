<template>
  <section>
    <div class="fc gap-4 bg-darker h-96 text-slate-50 rounded-lg overflow-hidden sm:h-auto sm:p-4">
      <div class="flex-1 pr-10 ltr:pl-10 ltr:pr-0 sm:w-full sm:!px-2">
        <h2 class="font-bold text-4xl section-title-start">
          {{ $t('about.heading') }}
        </h2>
        <p class="my-4">
          {{ $t('about.description') }}
        </p>
          <p class="my-1">
          {{ $t('about.description1') }}
        </p>
            <p class="my-1">
          {{ $t('about.description2') }}
        </p>
            <p class="my-1">
          {{ $t('about.description3') }}
        </p>

        <RouterLink
          :to="
            $localePath({
              name: 'about',
            })
          "
        >
          <button class="whitespace-nowrap fc shadow-sm btn-primary btn-with-icon">
            <span>{{ $t('about.read_more') }}</span>
            <span class="">
              <arrowRightIcon class="w-4 !text-light" />
            </span>
          </button>
        </RouterLink>
      </div>
      <div class="flex-1 h-full sm:hidden">
        <div class="w-full h-full">
          <img
            src="/images/workers.webp"
            class="h-full custom-image-clip-right ltr:-scale-x-110  w-full object-cover object-top mr-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import arrowRightIcon from '@/assets/icons/arrow-right.svg'

</script>
