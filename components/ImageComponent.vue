<script setup lang="ts">
const props = defineProps({
  urlPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtImg
    :src="`/images/${urlPath}.png`"
    :srcset="{
      '1x': `/images/${urlPath}.png`,
      '2x': `/images/${urlPath}@2x.png`,
      '3x': `/images/${urlPath}@3x.png`,
    }"
    alt=""
  />
</template>

<style scoped></style>
