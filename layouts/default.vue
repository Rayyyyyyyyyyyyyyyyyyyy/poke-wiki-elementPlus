<script setup lang="ts"></script>

<template>
  <div class="page-wrapper">
    <TheHeader />
    <div class="main">
      <slot />
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
    @apply w-10/12 h-full mx-auto;
    @apply overflow-x-auto overflow-y-auto;
  }
}
</style>
