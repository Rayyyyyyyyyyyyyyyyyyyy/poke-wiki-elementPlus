<script setup lang="ts">
const props = defineProps({
  urlPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtImg :src="`/images/${urlPath}.png`" alt="" />
</template>

<style scoped></style>
