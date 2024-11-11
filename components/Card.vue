<script setup lang="ts">
import type { TPokeItem } from "~/types/apiTypes";
import AppUtils from "~/utils/AppUtils";
import { ETypeColor, ETypeContext } from "~/consts/appConst";
import appUtils from "~/utils/AppUtils";

const props = defineProps({
  poke_file: {
    type: Object,
    default: {},
  },
});
const pokeFile = computed(() => {
  if (props.poke_file) {
    return AppUtils.deepCloneData(props.poke_file) as TPokeItem;
  } else {
    return {} as TPokeItem;
  }
});

const transformTypeToColor = (type: string) => {
  const enType = ETypeContext[type as keyof typeof ETypeContext];
  return ETypeColor[enType];
};
</script>

<template>
  <el-card class="poke-card" shadow="hover">
    <div class="card-body">
      <img
        class="poke-img"
        :src="AppUtils.getPokeAvatarUrl(pokeFile.index)"
        alt=""
      />
      <div class="poke-type">
        <el-tag round :color="transformTypeToColor(pokeFile.type1)">
          {{ pokeFile.type1 }}
        </el-tag>
        <el-tag
          round
          v-if="pokeFile.type2 !== ''"
          :color="transformTypeToColor(pokeFile.type2)"
        >
          {{ pokeFile.type2 }}
        </el-tag>
      </div>
    </div>
    <template #footer>
      <div class="footer">
        <p class="name">{{ pokeFile.nameZh }}</p>
        <p class="id">{{ appUtils.toFixedWidth(pokeFile.index) }}</p>
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.poke-card {
  @apply rounded-3xl overflow-visible;
  @apply h-60;

  max-width: 280px;
  ::v-deep() {
    .el-card__body {
      @apply bg-bg-card p-0;
      @apply rounded-t-3xl;
    }
    .el-card__footer {
      @apply p-2;
    }
  }
}
.card-body {
  @apply flex flex-col justify-end items-center;
  @apply w-full  h-40 relative;

  .poke-img {
    @apply absolute;
    @apply w-40 h-40 object-cover;
    left: calc(50% - 80px);
    @apply bottom-10;
  }
  .poke-type {
    @apply flex items-center mb-1;
    .el-tag + .el-tag {
      @apply ml-2;
    }
    .el-tag {
      @apply text-lg;
      @apply text-white border-none;
    }
  }
}
.footer {
  @apply flex flex-col;
  @apply items-center justify-center;

  .name {
    @apply text-2xl;
  }
  .id {
    @apply text-lg;
    @apply text-text-light;
  }
}
</style>
