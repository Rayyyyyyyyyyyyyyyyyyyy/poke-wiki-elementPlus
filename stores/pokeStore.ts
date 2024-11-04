import { defineStore } from "pinia";

export const PokeStore = defineStore("pokeStore", {
  state: () => ({}),
  actions: {
    getPokeAvatarUrl(id: number) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    },
  },
});
