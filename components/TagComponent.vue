<script setup lang="ts">
const props = defineProps({
  en_name: { type: String, default: "" },
  zh_name: { type: String, default: "" },
  is_round: { type: Boolean, default: false },
  show_icon: { type: Boolean, default: true },
});
</script>

<template>
  <el-tag class="type-tag" :round="is_round">
    <ImageComponent v-if="show_icon" :url-path="`type/Icon_${en_name}`" />
    {{ zh_name }}
  </el-tag>
</template>

<style scoped></style>
