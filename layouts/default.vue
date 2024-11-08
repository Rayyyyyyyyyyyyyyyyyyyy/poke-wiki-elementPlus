<script setup lang="ts"></script>

<template>
  <div class="page-wrapper">
    <TheHeader />
    <div class="main">
      <SearchBar />
      <div class="slot-wrapper">
        <slot />
      </div>
    </div>
  </div>
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
