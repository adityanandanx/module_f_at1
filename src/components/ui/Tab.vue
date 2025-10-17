<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(0)
defineProps<{ data: { label: string; content: string }[] }>()
</script>

<template>
  <div role="tablist" class="border-b border-gray-300">
    <button
      class="px-5 py-2 bg-gray-300 cursor-pointer"
      role="tab"
      @click="selected = i"
      :style="{
        borderBottom: selected === i ? '2px solid #3293f4' : '2px solid #d1d5dc',
        backgroundColor: selected === i ? 'white' : '#d1d5dc',
      }"
      v-for="(tab, i) in data"
      :aria-selected="selected === i"
      :aria-controls="tab.label + ' panel'"
      :id="tab.label"
    >
      {{ tab.label }}
    </button>
  </div>
  <div
    v-for="(tab, i) in data"
    role="tabpanel"
    :id="tab.label + ' panel'"
    class="px-10 py-5"
    :style="{ display: selected !== i ? 'none' : 'block' }"
    :aria-hidden="selected !== i"
    :aria-labelledby="tab.label"
  >
    {{ tab.content }}
  </div>
</template>
