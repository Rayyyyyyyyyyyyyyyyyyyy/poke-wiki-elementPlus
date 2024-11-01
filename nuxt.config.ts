// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  tailwindcss: {
    // Options
  },
  typescript: {
    typeCheck: true,
  },
  elementPlus: {
    /** Options */
  },
  runtimeConfig: {
    public: {
      baseURL:
        process.env.BASE_URL || "https://pokemon.fantasticmao.cn/pokemon/",
      baseURL_V2: process.env.BASE_URL_V2 || "https://pokeapi.co/api/v2/",
    },
  },
});
