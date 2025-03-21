<script setup lang="ts">
import BentoGrid from './components/BentoGrid.vue';

</script>

<template>
  <main class="font-display min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
  
    <Header />

    <BentoGrid />

    <Footer />
  </main>

<svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <defs>
    <filter id="noise" x="0" y="0">
      <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="3" stitchTiles="stitch" />
      <feBlend mode="screen" />
    </filter>
  </defs>
</svg>

</template>
