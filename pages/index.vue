<script setup lang="ts">
import { getPokeApi } from "~/servies/pokeApi";
import { getPokeV2 } from "~/servies/pokeApi_V2";
import { Search } from "@element-plus/icons-vue";
import type { TPokeItem, TResponse } from "~/types/apiTypes";

const state = reactive({
  keyword: "",
  heroList: [] as TPokeItem[],
  colSpan: 4,
});

const getPokeList = async () => {
  const res = (await getPokeApi("list", {})) as TResponse<TPokeItem[]>;
  state.heroList = res.data.slice(0, state.colSpan);
};

const getScreenW = () => {
  if (window.innerWidth > 1600) {
    state.colSpan = 8;
  } else {
    if (window.innerWidth < 1440) {
      if (window.innerWidth < 976) {
        if (window.innerWidth < 768) {
          if (window.innerWidth < 480) {
            state.colSpan = 1;
          } else {
            state.colSpan = 2;
          }
        } else {
          state.colSpan = 3;
        }
      } else {
        state.colSpan = 4;
      }
    } else {
      state.colSpan = 6;
    }
  }
  getPokeList();
};
if (process.client) {
  onMounted(() => {
    getScreenW();
    setTimeout(() => {
      window.addEventListener("resize", getScreenW);
    }, 300);
  });
}

// const resV2 = await getPokeV2("pokemon/7", {});
// console.log("resV2", resV2);
</script>

<template>
  <div class="home-wrapper">
    <div class="search-bar">
      <el-input
        class="search-input"
        v-model="state.keyword"
        placeholder="搜尋寶可夢"
        :prefix-icon="Search"
      />
    </div>

    <div class="container-main">
      <el-row>
        <el-col :span="24">
          <ContainerItem item_title="全國圖鑑">
            <el-row :gutter="12" class="card-list">
              <el-col :span="24 / state.colSpan" v-for="item in state.heroList">
                <Card :poke_file="item"></Card>
              </el-col>
            </el-row>
          </ContainerItem>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <ContainerItem item_title="招式列表"> </ContainerItem>
        </el-col>
        <el-col :span="10">
          <ContainerItem item_title="地點列表"> </ContainerItem>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-wrapper {
  @apply py-6;
  @apply w-full;

  .container-main {
    @apply mt-4;
  }
}
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
