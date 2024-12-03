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
    :srcset="`/images/${urlPath}.png 1x, /images/${urlPath}@2x.png 2x, /images/${urlPath}@3x.png 3x`"
    alt=""
  />
</template>

<style scoped></style>
