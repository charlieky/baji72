<template>
    <section>
        <div class="fl-5">
            <h2 class="text-3xl sm:text-xl section-title-start font-bold text-darker">
                {{ $t('whyus.heading') }}
            </h2>
            <div class="fc gap-2 sm:flex-col">
                <p class="text-dark text-pretty">
                    {{ $t('whyus.description') }}
                </p>
                <a href="https://www.baji724.com/m/login" class="sm:ml-auto">
                    <button class="btn-primary whitespace-nowrap">
                        {{ $t('whyus.contact_us') }}
                    </button>
                </a>
            </div>

            <div
                class="relative group w-full h-64 sm:h-40 overflow-hidden cursor-pointer"
                @click="showVideo = true"
            >
                <button
                    class="abs-center w-14 h-14 flex-center rounded-full bg-slate-50 shadow trans group-hover:bg-primary text-dark group-hover:text-white z-2"
                >
                    <playIcon class="w-6" />
                </button>
                <img
                    loading="lazy"
                    src="/images/landing-small.webp"
                    class="w-full h-full object-cover rounded-2xl shadow-sm transition-all duration-500 ease-in-out group-hover:brightness-75"
                />
            </div>
        </div>
        <AppDialog v-model="showVideo" animate-from="bottom">
            <div class="rounded-lg w-full p-5 max-w-6xl sm:p-2 bg-light shadow-xl">
                <button
                    @click="showVideo = false"
                    class="flex-center aspect-square rounded t-trans hover:scale-110"
                >
                    <closeIcon class="w-10" />
                </button>

                <div
                    class="w-[75vw] max-w-full aspect-video rounded-xl overflow-hidden mt-4 mx-auto sm:w-full sm:mt-2"
                >
                    <video controls controlsList="nodownload" class="w-full h-full">
                        <source src="/videos/new-metal.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </AppDialog>
    </section>
</template>

<script lang="ts" setup>
import closeIcon from '@/assets/icons/close.svg'
import playIcon from '@/assets/icons/play.svg'
import { ref, defineAsyncComponent } from 'vue'
const AppDialog = defineAsyncComponent(() => import('@/components/global/AppDialog.vue'))
const showVideo = ref<boolean>(false)
</script>
