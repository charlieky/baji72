<template>
  <footer class="py-4 text-dark main-border-t flex-center mt-4">
    <div class="container">
      <div class="fs gap-4 sm:flex-col">
        <div class="flex-2 sm:w-full">
          <h3 class="text-3xl font-bold section-title-start mb-6 text-darker">
            {{ $t('footer.contact_us') }}
          </h3>
          <p class="mb-6 ">
            {{ $t('footer.description') }}
          </p>


 <div class="flex flex-row gap-8 "> <!-- Main row container -->
  <!-- Facebook -->
  <div class="flex flex-col items-center gap-1">
    <facebookIcon class="w-10" />
    <a :href="appsettings.facebook" class="social-link mt-1">
      {{ $t('Telegram') }}
    </a>
  </div>

  <!-- Telegram -->
  <div class="flex flex-col items-center gap-1">
    <telegramIcon class="w-10" />
    <a :href="appsettings.telegram" class="social-link mt-1">
      {{ $t('Facebook') }}
    </a>
  </div>

  <!-- WhatsApp -->
  <div class="flex flex-col items-center gap-1">
    <whatsapp-icon class="w-10 text-green-500" />
    <a :href="`https://wa.me/${appsettings.whatsappNumber}`"
       class="whatsapp-link mt-1"
       target="_blank"
       rel="noopener noreferrer"
       :aria-label="$t('accessibility.whatsapp_contact')">
      {{ $t('Whatsapp') }}
    </a>
  </div>
</div>



        </div>
        <div class="flex-3 fs gap-4 sm:flex-col">
          <div class="flex-1 sm:w-full">
            <h3 class="text-2xl font-bold text-darker section-title-start mb-6">
              {{ $t('footer.address.heading') }}
            </h3>
            <a href="https://maps.app.goo.gl/UEzZQTtequNeQsJz9" target="_blank">
              <p class="text-sm leading-6 fs gap-1 primary-link mt-6">

                {{ $t('footer.address.text') }}
              </p>
            </a>
          </div>
          <ul class="flex-1 fl-2 sm:w-full">
            <li class="mb-6">
              <h3 class="text-2xl font-bold text-darker section-title-start">
                {{ $t('footer.useful_links.heading') }}
              </h3>
            </li>
            <li v-for="(item, idx) in links" :key="idx">
          <RouterLink
      :to="$localePath(item.route)"
      class="primary-link"
    >
                {{ $t(`footer.useful_links.${item.label}`) }}
                 </RouterLink>

            </li>
          </ul>
        </div>
      </div>
      <hr class="main-border my-4" />
      <div class="flex-between">
        <p>
          <span class="uppercase sm:text-sm">{{
            $t('footer.copyright', {
              year: new Date().getFullYear(),
            })
          }}</span>
        </p>

        <ul class="fc gap-2.5 ">
          <li>
            <a target="" :href="appsettings.facebook" class="">
              <facebookIcon class="w-10 " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import appsettings from '@/assets/data/app.json'
import { markRaw } from 'vue'
import { RouterLink } from 'vue-router'

const links = markRaw([
  {
    label: 'sitemap',
    route: {
      name: 'about', // Must match route name in router config

    }
  },

])

// icons

import phoneIcon from '@/assets/icons/phone.svg'
import whatsappIcon from '@/assets/icons/whatsapp.svg'
import facebookIcon from '@/assets/icons/facebook.svg'
import telegramIcon from '@/assets/icons/telegram.svg'
import buttonIcon from '@/assets/icons/button.svg'
import placeIcon from '@/assets/icons/place.svg'
</script>
