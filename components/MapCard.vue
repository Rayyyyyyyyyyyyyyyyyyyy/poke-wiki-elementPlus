<script setup lang="ts">
import { EAreaName } from "~/consts/appConst";
import { AppUtils } from "#imports";

const props = defineProps({
  area_name: {
    type: String,
    default: "",
  },
});
const areaZhName = AppUtils.deepCloneData(props.area_name) as string;
const areaEnName = EAreaName[areaZhName as keyof typeof EAreaName];
</script>

<template>
  <el-card class="area-card" shadow="hover">
    <img
      class="area-map"
      :src="`/_nuxt/assets/images/map/${areaEnName}.webp`"
      alt=""
    />
    <p class="map-name">{{ area_name }}</p>
  </el-card>
</template>

<style scoped lang="scss">
.area-card {
  @apply h-full w-full;
  max-width: 240px;
  max-height: 240px;
  @apply rounded-lg bg-bg-map cursor-pointer;
  @apply flex flex-col items-center justify-between;

  ::v-deep() {
    .el-card__body {
      @apply p-2;
    }
  }

  .area-map {
    @apply h-40;
    @apply object-contain;
    @apply border border-black rounded-xl;
    @apply bg-white;
  }
  .map-name {
    @apply text-center font-bold;
    font-size: 28px;
  }
}
</style>
