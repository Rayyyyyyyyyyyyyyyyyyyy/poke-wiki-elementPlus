<script setup lang="ts">
const props = defineProps({
  en_name: { type: String, default: "" },
  zh_name: { type: String, default: "" },
  is_round: { type: Boolean, default: false },
});
</script>

<template>
  <el-tag class="type-tag" :round="is_round">
    <ImageComponent :url-path="`type/Icon_${en_name}`" />
    {{ zh_name }}
  </el-tag>
</template>

<style scoped></style>
