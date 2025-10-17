<script setup lang="ts">
import { ref } from 'vue'
import Tab from './ui/Tab.vue'

const selected = ref(0)

const data = [
  {
    label: 'Tab 1',
    content: 'This is the content for Tab 1.',
  },
  {
    label: 'Tab 2',
    content: 'This is the content for Tab 2.',
  },
  {
    label: 'Tab 3',
    content: 'This is the content for Tab 3.',
  },
]
</script>

<template>
  <section class="container max-w-screen-xl mx-auto my-10">
    <div class="px-10 space-y-3">
      <h2 class="font-bold text-5xl text-center mb-10">Other Information</h2>
      <Tab :data />
    </div>
  </section>
</template>
