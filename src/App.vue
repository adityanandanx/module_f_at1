<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  navigator.serviceWorker.register('./service-worker.js')
})
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style scoped></style>
