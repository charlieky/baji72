<template>
  <main>
    <AppHeader />
    <RouterView />
    <AppFooter />
  </main>
</template>
<script setup lang="ts">
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from '@/components/global/AppFooter.vue'
</script>
