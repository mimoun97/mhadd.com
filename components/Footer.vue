<template>
    <footer class="mt-12 flex items-center justify-center text-zinc-400">
        <p>&copy; {{ currentYear }} <a href="https://mhadd.com" target="_blank" rel="noopener noreferrer" class="hover:text-zinc-100 hover:underline">mhadd.com</a>. Todos los derechos reservados.</p>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear(); // Obtener el año actual
</script>