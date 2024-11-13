<script setup lang="ts">
import { areaNameList } from "~/consts/appConst";
import { useRouter } from "#app";

const pokeStore = PokeStore();

if (process.client) {
  onMounted(() => {
    pokeStore.getPokeMoveList();
    pokeStore.getPokemonList();
  });
}

const router = useRouter();
const goIllustratedList = () => {
  router.push("/pokemon/IllustratedBook");
};
const goMoveBook = () => {
  router.push("/pokemon/MoveBook");
};
const goAreaList = () => {
  router.push("/pokemon/AreaList");
};
</script>

<template>
  <div class="container-main">
    <el-row>
      <el-col :span="24">
        <ContainerItem
          item_title="全國圖鑑"
          @arrowClickEmit="goIllustratedList"
        >
          <div class="card-list">
            <Card
              class="poke-card-prop"
              v-for="(item, inde) in pokeStore.fullPokeList.slice(0, 9)"
              :key="inde"
              :poke_file="item"
              @click="pokeStore.openDetailDialog(item.index)"
            />
          </div>
        </ContainerItem>
      </el-col>
    </el-row>

    <div class="container-row">
      <div class="container-col">
        <ContainerItem item_title="招式列表" @arrowClickEmit="goMoveBook">
          <div class="type-card-list" v-if="pokeStore.typeMoveList.length > 0">
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
        <ContainerItem item_title="地點列表" @arrowClickEmit="goAreaList">
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
</template>

<style scoped lang="scss">
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
</style>
