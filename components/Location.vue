<template>
    <!-- Location -->
    <Block class="relative bg-[url(/images/Amposta.svg)] bg-cover bg-center min-h-54 col-span-12 flex flex-col items-center gap-4 md:col-span-3 bg-zinc-800">
        <motion.a :href="MAP_LOCATION" target="_blank" :initial="{ opacity: 0, scale: 0 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{
      duration: 0.4,
      scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
    }" class="block cursor-pointer rounded-xl absolute left-2 bottom-2 p-2 bg-zinc-800 outline-offset-1 outline-zinc-100/10 hover:outline-2">
            <span class="block text-center text-sm text-zinc-400">Amposta, España</span>
        </motion.a>
    </Block>
</template>

<script setup>

import { motion } from 'motion-v'

const MAP_LOCATION = ref("https://www.google.com/maps/@40.7083287,0.5678079,15z")
</script>