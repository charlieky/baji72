<template>
  <header class="h-20 flex-center">
    <div class="container">
      <nav class="flex-between md:flex-row-reverse ltr:flex-row-reverse">
        <div class="fc gap-2 md:hidden ltr:flex-row-reverse ltr:sm:flex-row">
          <Transition name="slide-up" mode="out-in">
            <button class="lang-btn text-left" v-if="$i18n.locale === 'ar'" @click="$switchLang('en')">
              <span>English</span>
            </button>
            <button class="lang-btn text-left" v-else-if="$i18n.locale === 'en'" @click="$switchLang('ar')">
              <span class="font-bold font-ubuntu text-base">नेपाली</span>
            </button>
          </Transition>
        </div>
        <ul class="fc gap-4 sm:hidden">
          <li v-for="(item, idx) in links" :key="idx">
            <RouterLink :to="$localePath(item.route)" class="primary-link">{{
              item.label
            }}</RouterLink>
          </li>
        </ul>

        <RouterLink
          :to="
            $localePath({
              name: 'home',
            })
          "
        >
          <img src="/logo.png" alt="logo" loading="lazy" class="w-36 h-auto" />
        </RouterLink>

        <AppMenuBtn
          class="hidden sm:flex !w-11 !h-11 z-12"
          :class="{ active: show_menu }"
          @click="show_menu = !show_menu"
        />
        <div
          class="fixed right-0 top-0 h-full w-full z-10 hidden sm:block translate-x-full t-trans"
          :class="{ '!translate-x-0': show_menu }"
        >
          <span class="bg-blur bg-blur-light"></span>
          <ul class="abs-center flex-center flex-col gap-6">
            <li v-for="(item, idx) in links" :key="idx">
              <RouterLink
                class="text-xl trans hover:text-primary text-slate-200 font-bold flex-center"
                @click="show_menu = false"
                :to="$localePath(item.route)"
                >{{ item.label }}</RouterLink
              >
            </li>
            <li class="w-full">
              <Transition name="slide-up" mode="out-in">
                <button
                  class="lang-btn w-full text-left"
                  @click="
                    () => {
                      show_menu = false
                      $switchLang('en')
                    }
                  "
                  v-if="$i18n.locale === 'ar'"
                >
                  <span>English</span>
                </button>
                <button
                  class="lang-btn w-full text-left"
                  @click="
                    () => {
                      show_menu = false
                      $switchLang('ar')
                    }
                  "
                  v-else-if="$i18n.locale === 'en'"
                >
                  <span class="font-bold font-ubuntu text-base">नेपाली</span>
                </button>
              </Transition>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'
const { t } = useI18n()

const AppMenuBtn = defineAsyncComponent(() => import('@/components/global/AppMenuBtn.vue'))
const links = computed<
  {
    label: string
    route: RouteLocationAsRelativeGeneric
  }[]
>(() => [
  {
    label: t('header.home'),
    route: {
      name: 'home',
    },
  },
  {
    label: t('header.about_us'),
    route: {
      name: 'home',
      hash: '#about',
    },
  },
  {
    label: t('header.projects'),
    route: {
      name: 'home',
      hash: '#projects',
    },
  },
  {
    label: t('header.whyus'),
    route: {
      name: 'home',
      hash: '#whyus',
    },
  },
])
const show_menu = ref<boolean>(false)
</script>
<style scoped>
.lang-btn {
  text-align: left; /* Ensure text is always aligned to the left */
}
</style>
