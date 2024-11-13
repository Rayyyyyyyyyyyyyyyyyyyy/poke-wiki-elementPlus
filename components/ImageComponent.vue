<script setup lang="ts">
const props = defineProps({
  urlPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtImg :src="`/images/${urlPath}.png`" />
</template>

<style scoped></style>
