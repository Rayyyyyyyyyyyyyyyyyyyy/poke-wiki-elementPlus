<script setup lang="ts">
import { getPokeApi } from "~/servies/pokeApi";
import { getPokeV2 } from "~/servies/pokeApi_V2";
import type { TPokeItem, TResponse } from "~/types/apiTypes";
import { areaNameList } from "~/consts/appConst";

const state = reactive({
  heroList: [] as TPokeItem[],
});
const pokeStore = PokeStore();
const res = (await getPokeApi("pokemon/list", {})) as TResponse<TPokeItem[]>;
state.heroList = res.data.slice(0, 9);

pokeStore.getPokeMoveList();

// const resV2 = await getPokeV2("region", {});
// console.log("resV2", resV2);

// const resDetail = await getPokeApi("move/detail", { nameZh: "火" });
// console.log("resDetail", resDetail);
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

      <div class="container-row">
        <div class="container-col">
          <ContainerItem item_title="招式列表">
            <div class="type-card-list">
              <TypeCard
                class="poke-move-prop"
                v-for="(moveList, inde) in pokeStore.typeMoveList"
                :key="inde"
                :move_list="moveList"
              />
            </div>
          </ContainerItem>
        </div>
        <div class="container-col">
          <ContainerItem item_title="地點列表">
            <div class="map-card-list">
              <MapCard
                class="poke-map-prop"
                v-for="(name, ind) in areaNameList"
                :key="ind"
                :area_name="name"
              />
            </div>
          </ContainerItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-wrapper {
  @apply py-6;
  @apply w-full h-full;

  .container-main {
    @apply mt-4;

    .card-list {
      @apply grid grid-rows-1 grid-cols-1 gap-6;
      @apply sm:grid-cols-2 md:grid-cols-3 base:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-9;

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
          @apply base:block;
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

    .container-row {
      @apply grid grid-rows-2 grid-cols-1 gap-6;
      @apply lg:grid-rows-1;
      @apply lg:grid-cols-2;
    }

    .type-card-list {
      @apply grid grid-rows-1 grid-cols-1 gap-6;
      @apply xxs:grid-cols-2  md:grid-cols-4 base:grid-cols-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5;

      .poke-move-prop {
        @apply hidden;

        &:nth-child(-n + 2) {
          @apply xxs:block;
        }

        &:nth-child(-n + 4) {
          @apply md:block;
        }
        &:nth-child(-n + 5) {
          @apply base:block;
        }
        &:nth-child(-n + 3) {
          @apply lg:block;
        }
        &:nth-child(-n + 3) {
          @apply xl:block;
        }
        &:nth-child(-n + 4) {
          @apply 2xl:block;
        }
        &:nth-child(-n + 5) {
          @apply 3xl:block;
        }
      }
    }

    .map-card-list {
      @apply grid grid-rows-1 grid-cols-3 gap-6;
      @apply xxs:grid-cols-2  md:grid-cols-4 base:grid-cols-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5;

      .poke-map-prop {
        @apply hidden;

        &:nth-child(-n + 2) {
          @apply xxs:block;
        }

        &:nth-child(-n + 4) {
          @apply md:block;
        }
        &:nth-child(-n + 5) {
          @apply base:block;
        }
        &:nth-child(-n + 3) {
          @apply lg:block;
        }
        &:nth-child(-n + 3) {
          @apply xl:block;
        }
        &:nth-child(-n + 4) {
          @apply 2xl:block;
        }
        &:nth-child(-n + 5) {
          @apply 3xl:block;
        }
      }
    }
  }
}
</style>
