// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // alias help me to catch some elements directly from the source
  alias: {

    // "@": resolve(__dirname, "src"),
    assets: "/<rootDir>/assets", 
    
  },

  css: [
    '~/assets/main.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})