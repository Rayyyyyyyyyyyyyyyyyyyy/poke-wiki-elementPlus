<script setup lang="ts">
import {
  ETypeColor,
  ETypeColorActive,
  ETypeColorHover,
  ETypeContext,
  typeList,
} from "~/consts/appConst";
import { AppUtils, PokeStore } from "#imports";

type TStateType = {
  enName: string;
  color: string;
  checked: boolean;
  cnName: string;
  hoverColor: string;
  activeColor: string;
};
const state = reactive({
  stateTypeList: [] as TStateType[],
});

const cloneTypeList = AppUtils.deepCloneData(typeList) as string[];
state.stateTypeList = cloneTypeList.map((name) => {
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

const pokeStore = PokeStore();
const onTagClick = (val: boolean, data: TStateType) => {
  const hoverId = `tag-${data.enName}`;
  const idDom = document.getElementById(hoverId);

  const cloneNameList = AppUtils.deepCloneData(
    pokeStore.checkTypeList,
  ) as string[];

  if (idDom) {
    if (val) {
      pokeStore.typeCheckDoReset(false);
      idDom.style.backgroundColor = data.activeColor;
      cloneNameList.push(data.cnName);
      pokeStore.setTypeCheckToStore(cloneNameList);
    } else {
      idDom.style.backgroundColor = data.hoverColor;

      const afterSetList = cloneNameList.filter((name) => name !== data.cnName);
      pokeStore.setTypeCheckToStore(afterSetList);
    }
  }
};
const setHover = (data: TStateType) => {
  const hoverId = `tag-${data.enName}`;
  const idDom = document.getElementById(hoverId);
  if (idDom) {
    idDom.style.backgroundColor = data.hoverColor;
  }
};
const removerHover = (data: TStateType) => {
  const hoverId = `tag-${data.enName}`;
  const idDom = document.getElementById(hoverId);
  if (idDom) {
    idDom.style.backgroundColor = data.color;
  }
};
const onResetClick = () => {
  pokeStore.setTypeCheckToStore([]);
  pokeStore.typeCheckDoReset(true);
};
</script>

<template>
  <div class="tag-box">
    <div class="tag-title">點擊標籤篩選</div>

    <div class="tag-btn">
      <div class="tag-list">
        <el-check-tag
          v-for="(item, idex) in state.stateTypeList"
          :id="`tag-${item.enName}`"
          :key="idex"
          class="type-check-tag"
          :style="{ background: item.color }"
          v-model:checked="item.checked"
          @change="(status) => onTagClick(status, item)"
          @mouseover="setHover(item)"
          @mouseout="removerHover(item)"
        >
          <ImageComponent :url-path="`type/Icon_${item.enName}`" />

          {{ item.cnName }}
        </el-check-tag>
      </div>
      <el-button class="reset-btn" @click="onResetClick">重置</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag-box {
  @apply mx-auto my-4 p-4;
  @apply border border-secondary rounded-2xl;

  .tag-title {
    @apply text-lg mb-2;
  }

  .tag-btn {
    @apply flex items-center;

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
