import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import i18n from './i18n'
import i18nPlugin from './plugins/i18n'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'

declare module 'vue' {
  interface ComponentCustomProperties {
    $localePath: (route: RouteLocationAsRelativeGeneric) => RouteLocationAsRelativeGeneric
    $switchLang: (lang: string) => void
  }
}

import '@/assets/css/master.css'

app
  .use(router)
  .use(i18n)
  .use(i18nPlugin)
  .use(MotionPlugin, {
    directives: {
      'pop-bottom': {
        initial: {
          opacity: 0,
          y: 100,
        },
        visibleOnce: {
          opacity: 1,
          y: 0,
        },
      },
    },
  })
  .mount('#app')
