// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['motion-v/nuxt', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Poppins: {
        wght: [400],
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})