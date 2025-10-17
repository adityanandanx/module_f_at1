<script setup>
defineProps({
  srcLow: { type: String, required: true },
  srcHigh: { type: String, required: true },
  caption: { type: String, required: true },
})
</script>
<template>
  <div class="card relative bg-white rounded-sm p-4 h-fit hover:scale-105 transition-all">
    <picture>
      <source :srcset="srcLow" media="(max-width: 760px)" />
      <img :src="srcHigh" :alt="caption" class="w-full object-cover" />
    </picture>
    <span class="shine" aria-hidden></span>
    <caption class="w-full text-left">
      {{
        caption
      }}
    </caption>
  </div>
</template>

<style scoped>
/* 5px y-axis offset with 5px blur with color black at 30% opacity. */
.card {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  overflow: hidden;
}
.card:hover {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}

.card:hover .shine {
  left: 100%;
  transform: skewX(-15deg) translateX(300%);
}
.shine {
  position: absolute;
  background: linear-gradient(180deg, white, transparent);
  transform: skewX(-15deg) translateX(-100%);
  width: 30%;
  top: 0;
  left: 0;
  height: 100%;
  transform-origin: top right;
  transition:
    left 500ms ease-out,
    transform 500ms ease-out;
}
</style>
