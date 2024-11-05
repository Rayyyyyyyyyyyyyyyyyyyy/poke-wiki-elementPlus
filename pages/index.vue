<script setup lang="ts">
import { getPokeApi } from "~/servies/pokeApi";
import { getPokeV2 } from "~/servies/pokeApi_V2";
import type { TPokeItem, TResponse } from "~/types/apiTypes";

const state = reactive({
  heroList: [] as TPokeItem[],
});

const res = (await getPokeApi("list", {})) as TResponse<TPokeItem[]>;
state.heroList = res.data.slice(0, 9);

// const resMove = await getPokeApi("move", "list", {});
// console.log("resMove", resMove);
// const resV2 = await getPokeV2("move/5", {});
// console.log("resV2", resV2);
</script>

<template>
  <div class="home-wrapper">
    <SearchBar />

    <div class="container-main">
      <el-row>
        <el-col :span="24">
          <ContainerItem item_title="全國圖鑑">
            <div class="card-list">
              <Card
                class="poke-card-prop"
                v-for="(item, inde) in state.heroList"
                :key="inde"
                :poke_file="item"
              />
            </div>
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

    .card-list {
      @apply grid grid-rows-1 col-span-1 gap-6;
      @apply sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-9;

      .poke-card-prop {
        @apply hidden;

        &:nth-child(1) {
          @apply block;
        }
        &:nth-child(2) {
          @apply sm:block;
        }
        &:nth-child(3) {
          @apply md:block;
        }
        &:nth-child(4) {
          @apply lg:block;
        }
        &:nth-child(5) {
          @apply xl:block;
        }
        &:nth-child(6) {
          @apply xl:block;
        }
        &:nth-child(7) {
          @apply 2xl:block;
        }
        &:nth-child(8) {
          @apply 2xl:block;
        }
        &:nth-child(9) {
          @apply 3xl:block;
        }
      }
    }
  }
}
</style>
