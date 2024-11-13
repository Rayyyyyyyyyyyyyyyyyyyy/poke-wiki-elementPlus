<script setup lang="ts">
import { tableList } from "~/consts/areaList";
import AppUtils from "~/utils/AppUtils";

const state = reactive({
  activeName: "kanto",
});
const pokeStore = PokeStore();
const openPokeDetail = (pokeId: number) => {
  pokeStore.openDetailDialog(pokeId);
};
</script>

<template>
  <el-tabs v-model="state.activeName" class="area-tabs">
    <el-tab-pane
      v-for="(tab, index) in tableList"
      :key="index"
      :label="tab.areaCn"
      :name="tab.areaEn"
    >
      <div class="table-contain" v-if="tab.cityList.length > 0">
        <div class="title">城鎮</div>
        <el-table
          :data="tab.cityList"
          border
          class="move-table area-table"
          header-cell-class-name="move-table-header"
          row-class-name="move-table-row"
          cell-class-name="move-table-cell"
        >
          <el-table-column
            label="中文名"
            align="center"
            width="180"
            prop="cityName"
          />
          <el-table-column label="寶可夢" align="center">
            <template #default="{ row, column, $index }">
              <div class="table-poke-list">
                <div
                  class="poke-bg"
                  v-for="pokeId in row.pokemons"
                  :key="pokeId"
                >
                  <img
                    @click="openPokeDetail(pokeId)"
                    class="poke-img"
                    :src="AppUtils.getPokeAvatarGif(pokeId)"
                    alt=""
                  />
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="table-contain" v-if="tab.places.length > 0">
        <div class="title">重要地點</div>
        <el-table
          :data="tab.places"
          border
          class="move-table area-table"
          header-cell-class-name="move-table-header"
          row-class-name="move-table-row"
          cell-class-name="move-table-cell"
        >
          <el-table-column
            label="中文名"
            align="center"
            width="180"
            prop="placeName"
          />
          <el-table-column label="寶可夢" align="center">
            <template #default="{ row, column, $index }">
              <div class="table-poke-list">
                <div
                  class="poke-bg"
                  v-for="pokeId in row.pokemons"
                  :key="pokeId"
                >
                  <img
                    @click="openPokeDetail(pokeId)"
                    class="poke-img"
                    :src="AppUtils.getPokeAvatarGif(pokeId)"
                    alt=""
                  />
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.table-contain {
  @apply p-4;

  .title {
    @apply font-bold text-xl mb-4;
  }
}
.table-poke-list {
  @apply flex items-center flex-wrap justify-center;
  min-height: 40px;

  .poke-bg {
    @apply mr-2 mb-2;
    @apply w-14 h-14 rounded-full bg-bg-light;
    @apply flex items-center justify-center;
  }
  .poke-img {
    @apply w-10 cursor-pointer h-10 object-contain;
  }
}
</style>
