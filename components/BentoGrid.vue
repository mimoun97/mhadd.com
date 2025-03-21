<template>
  <!-- BentoGrid -->
  <motion.div class="BentoGrid" initial="initial" animate="animate" transition={{ staggerChildren: 0.05, }}>
    <Intro />
    
    <SocialCards />

    <TechStack />

    <Bio />

    <Location />
    <Projects />
  </motion.div>
</template>

<script setup>

import { motion } from 'motion-v'
import SocialCards from './SocialCards.vue';
</script>

<style>
@reference "tailwindcss";

.BentoGrid {
  @apply mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4;
}
</style>