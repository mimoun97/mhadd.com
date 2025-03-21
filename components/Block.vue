<template>
  <motion.div :variants="{
    initial: {
      scale: 0.5,
      y: 50,
      opacity: 0,
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
    },
  }" :transition="{
    type: 'spring', mass: 3, stiffness: 400, damping: 50,
  }" class="Block">
    <slot />
  </motion.div>
</template>

<script setup>

import { motion } from 'motion-v'
</script>

<style>
@reference "tailwindcss";

.Block {
  @apply rounded-2xl border border-2 border-zinc-700 p-6 outline-offset-1 outline-zinc-100/10 hover:outline-2;
}
</style>