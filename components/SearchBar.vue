<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";

const state = reactive({
  keyword: "",
});
</script>

<template>
  <div class="search-bar">
    <el-input
      class="search-input"
      v-model="state.keyword"
      placeholder="搜尋寶可夢"
      :prefix-icon="Search"
    />
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  @apply w-full h-16;
  @apply flex items-center justify-end;

  .search-input {
    @apply w-5/12 h-full;

    ::v-deep() {
      .el-input__wrapper {
        @apply rounded-full px-6;

        .el-input__prefix {
          @apply text-2xl;
        }
        .el-input__inner {
          @apply text-base;
        }
      }
    }
  }
}
</style>
