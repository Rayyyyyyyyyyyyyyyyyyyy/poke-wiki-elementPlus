<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { EPageName } from "~/consts/appConst";
import type { TOptionStrValue, TPokeItem } from "~/types/apiTypes";
import AppUtils from "~/utils/AppUtils";

const state = reactive({
  keyword: "",
  loading: false,
  options: [] as TOptionStrValue[],
});

const route = useRoute();
const pageTitle = computed(() => {
  return EPageName[route.path as keyof typeof EPageName];
});

const router = useRouter();
const onArrowClick = () => {
  router.push("/");
};

const pokeStore = PokeStore();
await pokeStore.getPokemonList();

const remoteMethod = (query: string) => {
  if (query !== "") {
    state.loading = true;
    setTimeout(() => {
      const list = AppUtils.deepCloneData(
        pokeStore.fullPokeList,
      ) as TPokeItem[];
      const optionTypeList = list.map((item) => {
        return {
          label: item.nameZh,
          value: item.index.toString(),
        };
      });

      state.loading = false;
      state.options = optionTypeList.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    state.options = [] as TOptionStrValue[];
  }
};
const gotSelectPoke = (strId: string) => {
  pokeStore.openDetailDialog(Number(strId));
  state.keyword = "";
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
    <el-select-v2
      v-model="state.keyword"
      class="search-input"
      filterable
      remote
      :remote-method="remoteMethod"
      clearable
      :options="state.options"
      :loading="state.loading"
      popper-class="search-input-popper"
      placeholder="搜尋寶可夢"
      @change="gotSelectPoke"
    >
      <template #default="{ item }">
        <div class="option">
          <div class="poke-img-bg">
            <img
              class="poke-img"
              :src="AppUtils.getPokeAvatarUrl(item.value)"
              alt=""
            />
          </div>

          <p>{{ item.label }}</p>
        </div>
      </template>
      <template #prefix>
        <el-icon><Search /></el-icon
      ></template>
    </el-select-v2>
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
}

.search-input {
  @apply w-5/12 h-12;

  ::v-deep() {
    .el-select__wrapper {
      @apply rounded-full px-6 h-full;

      .el-input__prefix {
        @apply text-2xl;
      }
      .el-input__inner {
        @apply text-base;
      }
    }
  }
}

.option {
  @apply flex items-center;
  .poke-img-bg {
    @apply w-8 h-8;
    @apply flex justify-center items-center;
    @apply bg-bg-light rounded-full mr-4;

    .poke-img {
      @apply w-7 h-7;
    }
  }
}
</style>
