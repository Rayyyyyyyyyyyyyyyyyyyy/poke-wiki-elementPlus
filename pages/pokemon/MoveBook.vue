<script setup lang="ts">
const pokeStore = PokeStore();

if (process.client) {
  onMounted(async () => {
    await pokeStore.getPokeMoveList();
    console.log("fullMoveList", pokeStore.fullMoveList);
    console.log("moveGenerationList", pokeStore.moveGenerationList);
  });
}
</script>

<template>
  <TypeTagList :show_move_only="true" />
</template>

<style scoped></style>
