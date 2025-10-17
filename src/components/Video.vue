<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const v = ref<HTMLVideoElement>(null)
let visible = true
let intersected = false

const handleVisibilityChange = (e) => {
  if (document.hidden) {
    visible = false
    v.value.pause()
  } else {
    visible = true
    if (intersected) v.value.play()
  }
}

onMounted(() => {
  if (!v) return
  document.addEventListener('visibilitychange', handleVisibilityChange)
  const int = new IntersectionObserver(
    (ent) => {
      if (ent[0].isIntersecting) {
        intersected = true
        if (visible) v.value.play()
      } else {
        intersected = false
        v.value.pause()
      }
    },
    { threshold: 0.5 },
  )
  int.observe(v.value)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>
<template>
  <section>
    <video class="w-full max-h-[1920px]" autoplay muted ref="v">
      <source src="/videos/lyon.mp4" />
    </video>
  </section>
</template>
