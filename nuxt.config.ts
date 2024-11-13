// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["assets/scss/tailwind.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  nitro: {
    routeRules: {
      "/api/proxyImg/**": { cors: true }, // 啟用 CORS 支持
    },
  },
  tailwindcss: {
    // Options
  },
  image: {
    domains: ["http://localhost:3000"],
    densities: [1, 2, 3],
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
      gifUrl: process.env.GIF_URL || "https://s1.52poke.wiki/assets/animoves/",
    },
  },
});
