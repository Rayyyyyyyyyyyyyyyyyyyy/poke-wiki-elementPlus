<script setup lang="ts">
const props = defineProps({
  urlPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <img
    :srcset="`
              /_nuxt/assets/images/${urlPath}.png    1x,
              /_nuxt/assets/images/${urlPath}@2x.png 2x,
              /_nuxt/assets/images/${urlPath}@3x.png 3x
            `"
    alt=""
  />
</template>

<style scoped></style>
