<script setup>
import Card from './Card.vue'

const tts = () => {
  let utterance = new SpeechSynthesisUtterance('Address: Mairie de Lyon, 69205 Lyon cedex 01')
  utterance.lang = 'fr-FR'
  speechSynthesis.speak(utterance)
}
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-30 container mx-auto max-w-screen-xl"
  >
    <div class="px-10 space-y-3">
      <h2 class="font-bold text-5xl text-center mb-10">Essential Information</h2>
      <div>
        <span>Contact: 04 72 10 30 30</span>
      </div>
      <div>
        <span>Address: Mairie de Lyon, 69205 Lyon cedex 01</span>
      </div>
      <button
        @click="tts"
        class="bg-[#023399] text-white font-medium text-lg rounded-md px-10 py-4 cursor-pointer hover:bg-blue-500"
      >
        Read it Loud
      </button>
    </div>
    <div class="">
      <h2 class="font-bold text-5xl text-center mb-10">Latest Events</h2>
      <div class="border overflow-x-scroll border-gray-500 rounded-md w-full">
        <div class="flex w-fit p-5 gap-5">
          <Card
            class="w-64"
            caption="Lyon accueille la finale mondiale des Worldskills 2024"
            src-high="/latest-events-images/worldskills-2024-p.jpg"
            src-low="/latest-events-images/worldskills-2024-p-low-res.png"
          />
          <Card
            class="w-64"
            caption="Forum des associations 2024"
            src-high="/latest-events-images/fda-p.jpg"
            src-low="/latest-events-images/fda-p-low-res.jpg"
          />
          <Card
            class="w-64"
            caption="Lyon Kayak"
            src-high="/latest-events-images/lyon-kayak-p-0.jpg"
            src-low="/latest-events-images/lyon-kayak-p-0-low-res.jpg"
          />
          <Card
            class="w-64"
            caption="La semaine bleue 2024"
            src-high="/latest-events-images/semaine-bleue-2024-p.jpg"
            src-low="/latest-events-images/semaine-bleue-2024-p-low-res.jpg"
          />
          <Card
            class="w-64"
            caption="Le Village des Métiers"
            src-high="/latest-events-images/village-des-metiers-p.jpg"
            src-low="/latest-events-images/village-des-metiers-p-low-res.jpg"
          />
          <Card
            class="w-64"
            caption="Les Journées Portes Ouvertes des Entreprises"
            src-high="/latest-events-images/journees_portes_ouvertes_entreprises_2023_p.jpg"
            src-low="/latest-events-images/journees_portes_ouvertes_entreprises_2023_p-low-res.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
