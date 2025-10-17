<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const wrap = ref<HTMLDivElement>(null)
const light = ref<HTMLSpanElement>(null)
const inlight = ref<HTMLSpanElement>(null)

// const parent = computed(() => (wrap.value ? wrap.value.parentNode : null))

const handleMouse = (e: MouseEvent) => {
  if (!wrap.value) return
  const rect = wrap.value.getBoundingClientRect()
  light.value.style.left = `${e.clientX - rect.x}px`
  light.value.style.top = `${e.clientY - rect.y}px`
  inlight.value.style.left = `${e.clientX - rect.x}px`
  inlight.value.style.top = `${e.clientY - rect.y}px`
}

onMounted(() => {
  if (!wrap.value) return
  const parent = wrap.value.parentElement
  parent.addEventListener('mousemove', handleMouse)
})
onUnmounted(() => {
  if (!wrap.value) return
  const parent = wrap.value.parentElement
  parent.removeEventListener('mousemove', handleMouse)
})
</script>

<template>
  <div
    ref="wrap"
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden p-2 rounded-lg"
  >
    <span ref="light" class="light -z-10" aria-hidden></span>
    <button class="cta px-20 py-10 overflow-hidden bg-gray-300 rounded-md">
      <span ref="inlight" class="inlight" aria-hidden></span>
      Call to Action
    </button>
  </div>
</template>

<style scoped>
.light,
.inlight {
  width: 20rem;
  height: 20rem;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 0;
  top: 0;
}

.light {
  background: radial-gradient(circle 10rem at center, orange, transparent);
}
.inlight {
  background: radial-gradient(circle 10rem at center, rgba(255, 255, 255, 0.7), transparent);
  mix-blend-mode: overlay;
}
</style>
