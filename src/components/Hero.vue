<script setup lang="ts">
import CTA from './CTA.vue'
</script>

<template>
  <section class="min-h-screen relative">
    <picture>
      <source srcset="/images/cover-low-res.jpg" media="(max-width: 760px)" />
      <img
        src="/images/cover.jpg"
        alt="Street of lyon"
        class="absolute left-0 top-0 w-full h-full object-cover"
      />
    </picture>
    <CTA />
  </section>
</template>
