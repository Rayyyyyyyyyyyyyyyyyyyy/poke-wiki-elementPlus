<script setup lang="ts">
const props = defineProps({
  urlPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtImg :src="`/images/${urlPath}.png`" densities="x1 x2 x3" />
</template>

<style scoped></style>
