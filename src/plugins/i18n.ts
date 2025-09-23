import { localPath, switchLanguage } from '@/i18n/translation'
import type { App } from 'vue'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'
import i18n from '@/i18n'
export default {
    install: (app: App) => {
        app.config.globalProperties.$localePath = (route: RouteLocationAsRelativeGeneric) =>
            localPath(route)

        app.config.globalProperties.$switchLang = async (lang: string) => {
            switchLanguage(lang)
            app.config.globalProperties.$router.replace({
                params: { locale: lang },
            })
            document.title = i18n.global.t('header.name')
        }
    },
}
