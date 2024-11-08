<script setup lang="ts">
const props = defineProps({
  prop_value: {
    type: Number,
    default: 0,
  },
  bg_color: {
    type: String,
    default: "",
  },
});
const maxLimit = 200;
const innerW = (props.prop_value / maxLimit) * 100;
</script>

<template>
  <div class="progress-outside">
    <div
      class="progress-inner"
      :style="{ background: bg_color, width: `${innerW}%` }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.progress-outside {
  @apply bg-bg-progress w-full;
  @apply h-[6px] rounded-full;
  @apply overflow-hidden;

  .progress-inner {
    @apply h-full rounded-full;
  }
}
</style>
