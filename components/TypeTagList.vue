<script setup lang="ts">
import { ETypeColor, ETypeContext, typeList } from "~/consts/appConst";
</script>

<template>
  <div class="tag-box">
    <div class="tag-title">點擊標籤篩選</div>

    <div class="tag-btn">
      <div class="tag-list">
        <TagComponent
          :is_round="true"
          v-for="(tagName, ind) in typeList"
          :key="ind"
          :en_name="ETypeContext[tagName as keyof typeof ETypeContext]"
          :zh_name="tagName"
          :style="{
            background:
              ETypeColor[ETypeContext[tagName as keyof typeof ETypeContext]],
          }"
        />
      </div>
      <el-button class="reset-btn">重置</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag-box {
  @apply h-32 mx-auto my-4 p-4;
  @apply border border-secondary rounded-2xl;

  .tag-title {
    @apply text-lg mb-2;
  }

  .tag-btn {
    @apply flex items-center;

    .reset-btn {
      @apply bg-primary text-white rounded-lg;
      @apply h-10 w-[72px] text-xl;
    }

    .tag-list {
      @apply w-11/12 mr-4;
      @apply grid grid-rows-2 grid-cols-9 gap-3;
    }
  }
}
</style>
