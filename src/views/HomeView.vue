<template>
  <section>
    <div class="container flex flex-col gap-20">
      <LandingSection />
      <AboutSection id="about" v-motion-pop-bottom />
      <ProjectsSection id="projects" v-motion-pop-bottom />
      <AnalyzeSection id="analyze" v-motion-pop-bottom />
      <WhyusSection id="whyus" v-motion-pop-bottom />
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const LandingSection = defineAsyncComponent(() => import('@/components/home/LandingSection.vue'))
const AboutSection = defineAsyncComponent(() => import('@/components/home/AboutSection.vue'))
const ProjectsSection = defineAsyncComponent(() => import('@/components/home/ProjectsSection.vue'))
const AnalyzeSection = defineAsyncComponent(() => import('@/components/home/AnalyzeSection.vue'))
const WhyusSection = defineAsyncComponent(() => import('@/components/home/WhyusSection.vue'))
</script>
