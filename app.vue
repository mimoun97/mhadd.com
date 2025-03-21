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

<script setup lang="ts">
useSeoMeta({
  title: 'mhadd.com - Desarrollador Web (App) Fullstack',
  ogTitle: 'mhadd.com - Desarrollador Web (App) Fullstack',
  description: 'Soy un desarrollador web especializado en crear aplicaciones personalizadas con tecnologías como Nuxt, Laravel y Tailwind. Ofrezco soluciones modernas y escalables para tu negocio.',
  ogDescription: 'Soy un desarrollador web especializado en crear aplicaciones personalizadas con tecnologías como Nuxt, Laravel y Tailwind. Ofrezco soluciones modernas y escalables para tu negocio.',
  ogImage: 'https://mhadd.com/images/ogImage.jpg',
  twitterCard: 'summary_large_image',
})
</script>
