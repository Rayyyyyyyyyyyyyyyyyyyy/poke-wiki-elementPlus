<script setup lang="ts">
import AppUtils from "~/utils/AppUtils";
import appUtils from "~/utils/AppUtils";
import { getPokeApi } from "~/servies/pokeApi";
import type { TBaseStat, TOption, TPokeDetail } from "~/types/apiTypes";
import type { TResponse } from "~/types/apiTypes";

type TDetail = {
  weight: string;
  height: string;
  abilityList: string[];
  abilityHide: string;
};
const props = defineProps({
  dialog_visible: {
    type: Boolean,
    default: false,
  },
});

const pokeStore = PokeStore();

const emits = defineEmits(["dialogCloseEmit"]);

const dataTypeIsPoke = computed(() => pokeStore.dataType == "poke");

const state = reactive({
  moveColor: "",
  titleName: "",
  tagNameList: [
    {
      zhName: "",
      enName: "",
      color: "",
    },
  ] as { zhName: string; enName: string; color: string }[],
  pokeData: {} as TPokeDetail,
  contentDetail: {} as TDetail,
  baseStat: [] as TOption[],
  type1Color: "",
});
const getPokeDetail = async () => {
  return (await getPokeApi("pokemon/detail", {
    index: pokeStore.pokeId,
  })) as TResponse<TPokeDetail[]>;
};

const setColorName = () => {
  const { color, enName } = appUtils.transactionNameToColor(
    state.pokeData.type1,
  );
  const type1Color = color;
  state.type1Color = color;

  state.titleName = `${state.pokeData.nameZh}  ${appUtils.toFixedWidth(state.pokeData.index)}`;
  state.tagNameList = [
    {
      zhName: state.pokeData.type1,
      enName: enName,
      color: color,
    },
  ];
  if (state.pokeData.type2) {
    const { color, enName } = appUtils.transactionNameToColor(
      state.pokeData.type2,
    );
    const type2Color = color;
    state.tagNameList.push({
      zhName: state.pokeData.type2,
      enName: enName,
      color: color,
    });
    state.moveColor = `linear-gradient(to top right, ${type1Color} 0%, ${type1Color} 45%, ${type2Color} 55%, ${type2Color} 100%)`;
  } else {
    state.moveColor = color;
  }
};
const setDetailContext = () => {
  state.contentDetail = {
    weight: state.pokeData.detail.weight,
    height: state.pokeData.detail.height,
    abilityList:
      state.pokeData.ability2 !== ""
        ? [state.pokeData.ability1, state.pokeData.ability2]
        : [state.pokeData.ability1],
    abilityHide: state.pokeData.abilityHide,
  };
};
const setBaseStat = () => {
  const cloneStat = AppUtils.deepCloneData(
    state.pokeData.baseStat,
  ) as TBaseStat;
  state.baseStat = [
    {
      label: "HP",
      value: cloneStat.hp,
    },
    {
      label: "攻擊",
      value: cloneStat.attack,
    },
    {
      label: "防禦",
      value: cloneStat.defense,
    },
    {
      label: "特攻",
      value: cloneStat.spAttack,
    },
    {
      label: "特防",
      value: cloneStat.spDefense,
    },
    {
      label: "速度",
      value: cloneStat.speed,
    },
  ];
};
watch(
  () => props.dialog_visible,
  async () => {
    if (props.dialog_visible) {
      if (dataTypeIsPoke.value) {
        if (pokeStore.pokeId > -1) {
          getPokeDetail().then((res) => {
            state.pokeData = res.data[0];
            setColorName();
            setDetailContext();
            setBaseStat();
          });
        }
      }
    } else {
      pokeStore.updateDetailDialogVisible(false);
      pokeStore.setWantShowPokeId(-1);
      pokeStore.setDetailType("");
      state.pokeData = {} as TPokeDetail;
      state.moveColor = "";
      state.contentDetail = {} as TDetail;
      state.baseStat = [];
    }
  },
);
</script>

<template>
  <el-dialog
    :model-value="props.dialog_visible"
    width="860"
    title=""
    :append-to-bodyt="true"
    :destroy-on-close="true"
    class="detail-dialog"
    @close="emits('dialogCloseEmit')"
  >
    <template #header>
      <div class="detail-header" :style="{ background: state.moveColor }">
        <div class="poke-name">
          <p>{{ state.titleName }}</p>
        </div>

        <ImageComponent class="header-ball" url-path="detail/pokeball" />

        <div class="poke-avatar" v-if="dataTypeIsPoke">
          <img
            class="poke-img"
            :src="AppUtils.getPokeAvatarShinyUrl(state.pokeData.index)"
            alt=""
          />
          <img
            class="poke-img"
            :src="AppUtils.getPokeAvatarUrl(state.pokeData.index)"
            alt=""
          />
          <div class="gif-box">
            <img
              class="poke-gif"
              :src="AppUtils.getPokeAvatarGif(state.pokeData.index)"
              alt=""
            />
          </div>
        </div>
      </div>
    </template>

    <div class="detail-body">
      <div class="tag-row">
        <TagComponent
          v-for="(item, ind) in state.tagNameList"
          :style="{ background: item.color }"
          :key="ind"
          :is_round="true"
          class="type-tag-prop"
          :en_name="item.enName"
          :zh_name="item.zhName"
        ></TagComponent>
      </div>

      <div class="detail-contain" v-if="dataTypeIsPoke">
        <el-row>
          <el-col>
            <p
              class="block-title big-title"
              :style="{ background: state.moveColor }"
            >
              基本資料
            </p>
          </el-col>
        </el-row>
        <div class="detail-contain-row">
          <div class="information">
            <div class="information-item">
              <ImageComponent url-path="detail/weight" />

              {{ state.contentDetail.weight }}
            </div>
            <div class="sub-title">體重</div>
          </div>
          <div class="information">
            <div class="information-item">
              <ImageComponent url-path="detail/rule" />

              {{ state.contentDetail.height }}
            </div>
            <div class="sub-title">身高</div>
          </div>
          <div class="information">
            <div class="information-item">
              <p v-for="abi in state.contentDetail.abilityList">
                {{ abi }}
              </p>
            </div>

            <div class="sub-title">特性</div>
          </div>
          <div class="information">
            <div class="information-item">
              {{ state.contentDetail.abilityHide }}
            </div>
            <div class="sub-title">隱藏特性</div>
          </div>
        </div>
      </div>

      <p class="block-title big-title" :style="{ background: state.moveColor }">
        Base Stats
      </p>

      <div class="progress-list">
        <el-row
          align="middle"
          class="progress-row"
          v-for="(item, ind) in state.baseStat"
          :key="ind"
        >
          <el-col :span="3">
            <div class="label" :style="{ color: state.type1Color }">
              {{ item.label }}
            </div>
          </el-col>
          <el-col :span="2">
            <div class="value">
              {{ item.value }}
            </div>
          </el-col>
          <el-col :span="19">
            <ProgressComponent
              :prop_value="item.value"
              :bg_color="state.moveColor"
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
.detail-dialog {
  .detail-header {
    @apply h-80;
    @apply pt-4 pl-6;
    @apply relative;
    .header-ball {
      @apply absolute right-32 top-0;
    }
    .poke-name {
      @apply flex;
      @apply text-white flex-1;
      @apply absolute left-6 text-[32px];
    }
    .poke-avatar {
      @apply flex justify-center items-start;
      @apply w-full h-full;
      .poke-img {
        @apply w-[280px] h-[280px];
      }
      .gif-box {
        @apply w-10 h-full;
        @apply relative;

        .poke-gif {
          @apply absolute bottom-1/4 left-6;
          @apply scale-[2.5];
        }
      }
    }
  }

  .detail-body {
    @apply flex flex-col p-6;
    @apply justify-center items-center;

    .type-tag-prop + .type-tag-prop {
      @apply ml-4;
    }
    .block-title {
      @apply bg-clip-text #{!important};
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    .big-title {
      @apply text-2xl mt-8;
      @apply font-medium;
    }

    .detail-contain {
      @apply w-full text-center;

      .detail-contain-row {
        @apply grid grid-rows-1 grid-cols-4;
        @apply h-16 mt-6;

        .information + .information {
          @apply border-l-2;
        }
        .information {
          @apply text-center;
          .information-item {
            @apply text-xl mb-2 text-text-dark;
            @apply flex justify-center items-center;

            img {
              @apply w-5 mr-2;
            }
          }
          .sub-title {
            @apply text-bg text-lg;
          }
        }
      }
    }
    .introduce {
      @apply my-6 text-xl;
    }
    .progress-list {
      @apply w-full text-center;
      .progress-row {
        @apply w-full;
      }

      .label {
        @apply border-r-2 text-lg;
      }
      .value {
        @apply text-lg;
      }
    }
  }
}
</style>
