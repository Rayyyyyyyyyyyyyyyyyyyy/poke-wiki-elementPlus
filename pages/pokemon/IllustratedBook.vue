<script setup lang="ts">
import { AppUtils } from "#imports";
import type { TPokeItem } from "~/types/apiTypes";

const pokeStore = PokeStore();
const singleCount = 20;

const state = reactive({
  pokeList: [] as TPokeItem[],
});
if (process.client) {
  onMounted(async () => {
    await pokeStore.getPokemonList();
    setTimeout(() => {
      loadMorePoke();
    });
  });
}

const loadMorePoke = () => {
  const fullList = AppUtils.deepCloneData(
    pokeStore.fullPokeList,
  ) as TPokeItem[];
  if (pokeStore.checkTypeList.length > 0) {
    state.pokeList = [];
    const filterList = fullList.filter(
      (item) =>
        pokeStore.checkTypeList.includes(item.type1) ||
        pokeStore.checkTypeList.includes(item.type2),
    );

    const loadList = filterList.slice(
      state.pokeList.length,
      state.pokeList.length + singleCount,
    );
    state.pokeList.push(...loadList);
  } else {
    if (pokeStore.resetTypeCheck) {
      state.pokeList = [];
    }

    const loadList = fullList.slice(
      state.pokeList.length,
      state.pokeList.length + singleCount,
    );
    state.pokeList.push(...loadList);
  }
};

watch(
  () => pokeStore.checkTypeList,
  () => {
    loadMorePoke();
  },
);
</script>

<template>
  <TypeTagList />

  <div
    class="poke-list"
    v-infinite-scroll="loadMorePoke"
    :infinite-scroll-immediate="false"
  >
    <Card
      v-for="(item, inde) in state.pokeList"
      :key="inde"
      :poke_file="item"
      @click="pokeStore.openDetailDialog(item.index)"
    />
  </div>
</template>

<style scoped lang="scss">
.poke-list {
  @apply grid auto-rows-auto grid-cols-4 gap-14;
  @apply mt-8;
}
</style>
