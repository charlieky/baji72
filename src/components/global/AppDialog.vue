<template>
  <Teleport to="body">
    <Transition :name="`dialog-animate-${animateFrom}`">
      <div
        v-if="show"
        class="fixed inset-0 z-[1000] trans-all bg-black/40 backdrop-blur-sm w-full h-full flex-center fade-in"
      >
        <div :class="[contentClass]" class="dialog-content">
          <slot>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae nemo numquam illum
              culpa iste. Nobis reiciendis minima officia aliquid eaque!
            </p>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const emit = defineEmits(['ClickOutside'])

const { contentClass = 'box sm:w-nine', animateFrom = 'top' } = defineProps<{
  contentClass?: string
  animateFrom?: 'top' | 'bottom' | 'left' | 'right'
}>()

const show = defineModel<boolean>({
  default: false,
})
</script>

<style>
@import '@/assets/css/dialogAnimate.css';
</style>
