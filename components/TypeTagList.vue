<script setup lang="ts">
import {
  ETypeColor,
  ETypeColorActive,
  ETypeColorHover,
  ETypeContext,
  moveType,
  typeList,
} from "~/consts/appConst";
import { AppUtils, PokeStore } from "#imports";
import type { TStateType } from "~/types/apiTypes";

const props = defineProps({
  show_move_only: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  stateTypeList: [] as TStateType[],
});

const mapTypeToState = (arr: string[]) => {
  return arr.map((name) => {
    const enName = ETypeContext[name as keyof typeof ETypeContext];
    return {
      enName: enName,
      cnName: name,
      color: ETypeColor[enName],
      checked: false,
      hoverColor: ETypeColorHover[enName],
      activeColor: ETypeColorActive[enName],
    };
  });
};

const showMax = computed(() => props.show_move_only);
const pokeStore = PokeStore();

if (showMax.value) {
  const fullList = [...typeList, ...moveType];
  const cloneList = AppUtils.deepCloneData(fullList) as string[];
  pokeStore.setTypeCheckList(mapTypeToState(cloneList));
} else {
  const cloneList = AppUtils.deepCloneData(typeList) as string[];
  pokeStore.setTypeCheckList(mapTypeToState(cloneList));
}

const setHover = (data: TStateType) => {
  const hoverId = `tag-${data.enName}`;
  const idDom = document.getElementById(hoverId);
  if (idDom) {
    if (moveType.includes(data.cnName)) {
      idDom.style.color = "white";
    }
    idDom.style.backgroundColor = data.hoverColor;
  }
};
const removerHover = (data: TStateType) => {
  const hoverId = `tag-${data.enName}`;
  const idDom = document.getElementById(hoverId);
  if (idDom && !data.checked) {
    if (moveType.includes(data.cnName)) {
      idDom.style.backgroundColor = "transparent";
      idDom.style.color = data.color;
    } else {
      idDom.style.backgroundColor = data.color;
    }
  }
};
const onResetClick = () => {
  const cloneList = AppUtils.deepCloneData(
    pokeStore.stateTypeList,
  ) as TStateType[];
  cloneList.forEach((item) => (item.checked = false));
  pokeStore.setTypeCheckList(cloneList);
  pokeStore.resetTypeClick(true);
};
</script>

<template>
  <div class="tag-box">
    <div class="tag-title">點擊標籤篩選</div>

    <div
      class="tag-btn"
      :class="{ 'items-end': show_move_only, 'items-center': !show_move_only }"
    >
      <div class="tag-list">
        <el-check-tag
          v-for="(item, idex) in pokeStore.stateTypeList"
          :id="`tag-${item.enName}`"
          :key="idex"
          class="type-check-tag"
          :style="{
            background: item.checked
              ? item.activeColor
              : idex < typeList.length
                ? item.color
                : 'transparent',
            color: item.checked
              ? 'white'
              : idex > typeList.length - 1
                ? item.color
                : '',
            border: idex > typeList.length - 1 ? '1px solid' : '',
            'border-color': idex > typeList.length - 1 ? item.color : '',
          }"
          v-model:checked="item.checked"
          @mouseover="setHover(item)"
          @mouseout="removerHover(item)"
        >
          <ImageComponent
            v-if="idex < typeList.length"
            :url-path="`type/Icon_${item.enName}`"
          />

          {{ item.cnName }}
        </el-check-tag>
      </div>
      <el-button class="reset-btn" @click="onResetClick">重置</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag-box {
  @apply mx-auto my-4 p-4 w-11/12;
  @apply border border-secondary rounded-2xl;

  .tag-title {
    @apply text-lg mb-2;
  }

  .tag-btn {
    @apply flex;

    .reset-btn {
      @apply bg-primary text-white rounded-lg;
      @apply h-10 w-[72px] text-xl;
    }

    .tag-list {
      @apply w-11/12 mr-4;
      @apply grid grid-rows-2 grid-cols-9 gap-3;

      .type-check-tag {
        @apply flex items-center justify-center;
        @apply w-[104px] px-4  h-7 text-white;
        @apply rounded-full;

        img {
          @apply w-5 mr-2 object-contain;
        }
      }
    }
  }
}
</style>
