<script setup lang="ts">
import type { TPokeMove } from "~/types/apiTypes";
import appUtils from "~/utils/AppUtils";

const props = defineProps({
  move_list: {
    type: Array,
    default: [],
  },
});
const moveList = computed(() => {
  if (props.move_list) {
    return AppUtils.deepCloneData(props.move_list) as TPokeMove[];
  } else {
    return [] as TPokeMove[];
  }
});

const moveTypeZh = moveList.value[0].type as string;
const { color, enName } = appUtils.transactionNameToColor(moveTypeZh);

const pokeStore = PokeStore();

const openMoveDetail = (move: TPokeMove) => {
  pokeStore.openMoveDetailDialog(move.nameZh, move.id);
};
const router = useRouter();
const goMoveListToType = () => {
  router.push("/pokemon/MoveBook");
};
</script>

<template>
  <el-card class="type-card" :style="{ background: color }" shadow="hover">
    <div class="move-list">
      <p
        class="move-name"
        v-for="(move, index) in moveList.slice(0, 7)"
        :key="index"
        @click="openMoveDetail(move)"
      >
        {{ move.nameZh }}
      </p>
    </div>
    <TagComponent
      @click="goMoveListToType"
      class="type-tag-prop"
      :en_name="enName"
      :zh_name="moveTypeZh"
    />
  </el-card>
</template>

<style scoped lang="scss">
.type-card {
  @apply h-full w-full;
  max-width: 128px;
  max-height: 310px;
  @apply rounded-xl;

  ::v-deep() {
    .el-card__body {
      @apply h-full;
      @apply flex flex-col items-center justify-between;
    }
  }
  .move-list {
    @apply flex-1;
    max-height: 80%;

    .move-name + .move-name {
      @apply mt-2;
    }
    .move-name {
      @apply text-xl leading-6 cursor-pointer;
      @apply text-white cursor-pointer font-bold;
    }
  }
}
.type-tag-prop {
  @apply mt-4;
  @apply bg-transparent;
}
</style>
