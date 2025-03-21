<template>
      <Block class="col-span-6 md:col-span-3">
        <a :href="to" rel="noopener noreferrer" target="_blank" class="grid h-full place-content-center text-3xl text-zinc-100">
            <slot />
        </a>
    </Block>
    
</template>

<script setup>
const { to } = defineProps(['to']);
</script>