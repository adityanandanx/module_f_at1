<script setup lang="ts">
import { ref } from 'vue'

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
      <div class="border-b border-gray-300">
        <button
          class="px-5 py-2 bg-gray-300 cursor-pointer"
          @click="selected = i"
          :class="{ 'bg-white border-b-2 border-blue-500': selected === i }"
          v-for="(tab, i) in data"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="px-10 py-5">
        {{ data[selected].content }}
      </div>
    </div>
  </section>
</template>
