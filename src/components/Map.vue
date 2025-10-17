<script setup lang="ts">
import Card from './Card.vue'
</script>

<template>
  <section class="container mx-auto my-10">
    <h2 class="text-6xl font-bold text-center mb-10">Map Attractions</h2>
    <div class="relative">
      <picture>
        <source srcset="/images/lyon-map-low-res.jpg" media="(max-width: 760px)" />
        <img
          src="/images/lyon-map.jpg"
          alt="Map of lyon"
          class="w-full h-screen xl:h-auto object-cover"
        />
      </picture>
      <span
        class="bg-red-300 w-12 h-12 absolute rounded-full text-center flex items-center justify-center"
        :style="{ right: '10%', top: '10%' }"
        >A
      </span>
      <span
        class="bg-red-300 w-12 h-12 absolute rounded-full text-center flex items-center justify-center"
        :style="{ right: '20%', top: '50%' }"
      >
        B
      </span>
      <span
        class="bg-red-300 w-12 h-12 absolute rounded-full text-center flex items-center justify-center"
        :style="{ right: '40%', top: '8%' }"
      >
        C
      </span>
      <div class="grid grid-cols-2 max-w-[720px] absolute left-0 top-0 p-5 gap-5">
        <Card
          src-low="/images/attraction-a-low-res.jpg"
          src-high="/images/attraction-a.jpg"
          caption="Parc de la Tete d'Or"
        />
        <Card
          src-low="/images/attraction-b-low-res.jpg"
          src-high="/images/attraction-b.jpg"
          caption="Street"
        />
        <Card
          src-low="/images/attraction-c-low-res.jpg"
          src-high="/images/attraction-c.jpg"
          caption="River"
        />
        <Card
          src-low="/images/all-attractions-low-res.jpg"
          src-high="/images/all-attractions.jpg"
          caption="All Attractions"
        />
      </div>
    </div>
  </section>
</template>
