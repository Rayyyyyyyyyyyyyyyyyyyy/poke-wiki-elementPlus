<script setup lang="ts">
const props = defineProps({
  item_title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="container-item">
    <div class="title-arrow">
      <p class="title">
        {{ item_title }}
      </p>
      <ImageComponent url-path="arrow" />
    </div>

    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container-item {
  @apply flex flex-col;
  @apply my-4;
}
.title-arrow {
  @apply flex items-center;
  @apply cursor-pointer mb-8;

  .title {
    font-size: 28px;
    @apply mr-1 text-primary;
  }
}
</style>
