<script setup lang="ts">
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
      loadMorePoke(false);
    });
  });
}

const loadMorePoke = (fromScroll: boolean = true) => {
  const fullList = AppUtils.deepCloneData(
    pokeStore.fullPokeList,
  ) as TPokeItem[];
  if (pokeStore.checkTypeList.length > 0) {
    if (!fromScroll) {
      state.pokeList = [];
    }
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
    loadMorePoke(false);
  },
);
watch(
  () => pokeStore.resetTypeCheck,
  () => {
    state.pokeList = [];

    loadMorePoke(false);
    setTimeout(() => {
      pokeStore.resetTypeClick(false);
    }, 3000);
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
  @apply grid auto-rows-auto grid-cols-1 gap-14;
  @apply mt-10;

  @apply sm:grid-cols-2;
  @apply md:grid-cols-3;
  @apply base:grid-cols-4;
  @apply lg:grid-cols-5;
  @apply xl:grid-cols-6;
}
</style>
