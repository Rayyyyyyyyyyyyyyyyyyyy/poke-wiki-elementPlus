<script setup lang="ts">
import AppUtils from "~/utils/AppUtils";

const pokeStore = PokeStore();
</script>

<template>
  <div class="page-wrapper">
    <TheHeader />
    <div class="main">
      <SearchBar />
      <div class="slot-wrapper">
        <slot />
      </div>
    </div>
    <el-backtop
      :right="40"
      :bottom="40"
      target=".page-wrapper"
      :style="{
        background: 'transparent',
        boxShadow: '0 0 #0000',
      }"
    >
      <img class="poke-gif" :src="AppUtils.getPokeAvatarGif(681)" alt="" />
    </el-backtop>
  </div>

  <DetailDialog
    :dialog_visible="pokeStore.detailVisible"
    @dialogCloseEmit="pokeStore.updateDetailDialogVisible(false)"
  />
</template>

<style scoped lang="scss">
.page-wrapper {
  @apply w-screen h-screen;
  max-width: 100vw;
  max-height: 100vh;
  @apply overflow-x-auto overflow-y-auto;

  .main {
    max-width: 1840px;
    height: calc(100% - 9rem);
    @apply w-10/12 mx-auto pt-6;

    .slot-wrapper {
      @apply w-full h-full;
      @apply py-4;
    }
  }
}
</style>
