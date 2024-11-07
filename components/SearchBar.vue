<script setup lang="ts">
import { Search, Operation } from "@element-plus/icons-vue";

const state = reactive({
  keyword: "",
});
</script>

<template>
  <div class="search-bar">
    <el-dropdown placement="bottom-start">
      <el-icon class="menu-icon"><Operation /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(color, inx) in [
              'header/red_item',
              'header/orange_item',
              'header/blue_item',
              'header/green_item',
            ]"
          >
            <ImageComponent :key="inx" :url-path="color" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

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
  @apply flex items-center justify-between;
  @apply lg:justify-end;

  .menu-icon {
    @apply text-xl cursor-pointer;
    @apply lg:hidden;
  }

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
