<script setup lang="ts">
import { Search, Operation } from "@element-plus/icons-vue";
import { EPageName } from "~/consts/appConst";

const state = reactive({
  keyword: "",
});

const route = useRoute();
console.log("route", route);
const pageTitle = EPageName[route.path as keyof typeof EPageName];
const router = useRouter();
const onArrowClick = () => {
  router.push("/");
};
</script>

<template>
  <div class="search-bar">
    <div class="go-back">
      <div class="title-arrow" @click="onArrowClick" v-if="route.path !== '/'">
        <ImageComponent url-path="arrow_left" />
        <p class="title">
          {{ pageTitle }}
        </p>
      </div>
    </div>

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
  .title-arrow {
    .title {
      @apply ml-1;
    }
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
