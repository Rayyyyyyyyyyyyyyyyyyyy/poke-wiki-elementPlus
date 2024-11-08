<script setup lang="ts">
const props = defineProps({
  item_title: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["arrowClickEmit"]);
</script>

<template>
  <div class="container-item">
    <div class="title-arrow" @click="emits('arrowClickEmit')">
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
  @apply mb-8;
  .title {
    @apply mr-1;
  }
}
</style>
