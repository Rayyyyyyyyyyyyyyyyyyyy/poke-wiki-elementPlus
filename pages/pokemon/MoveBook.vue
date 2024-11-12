<script setup lang="ts">
import type { TMoveTableList, TPokeMove } from "~/types/apiTypes";
import {
  ETypeColor,
  ETypeContext,
  moveType,
  typeList,
} from "~/consts/appConst";

const pokeStore = PokeStore();

if (process.client) {
  onMounted(async () => {
    await pokeStore.getPokeMoveList();
    setTimeout(() => {
      loadMoreMove();
    });
  });
}
const state = reactive({
  typeMoveTableList: [] as TMoveTableList[],
});
const mapToTableList = (arr: TPokeMove[][], keyList: string[]) => {
  return arr.map((list, ind) => {
    return {
      label: keyList[ind],
      tableData: list,
    };
  });
};
const loadMoreMove = () => {
  const gotCategoryFilter = pokeStore.checkTypeList.filter((name) =>
    moveType.includes(name),
  ) as string[];
  const gotTypeFilter = pokeStore.checkTypeList.filter(
    (name) => !moveType.includes(name),
  ) as string[];
  if (gotCategoryFilter.length > 0) {
    const cloneList = AppUtils.deepCloneData(
      pokeStore.categoryMoveList,
    ) as TPokeMove[][];
    const fullTypeList = mapToTableList(cloneList, moveType);
    if (pokeStore.checkTypeList.length > 0) {
      const filterCategoryList = fullTypeList.filter((item) =>
        pokeStore.checkTypeList.includes(item.label),
      ) as TMoveTableList[];
      if (gotTypeFilter.length > 0) {
        filterCategoryList.forEach((list) => {
          let cloneTableList = AppUtils.deepCloneData(
            list.tableData,
          ) as TPokeMove[];
          list.tableData = cloneTableList.filter((item) =>
            gotTypeFilter.includes(item.type),
          );
        });
        state.typeMoveTableList = filterCategoryList;
      } else {
        state.typeMoveTableList = filterCategoryList;
      }
    } else {
      state.typeMoveTableList = fullTypeList;
    }
  } else {
    const cloneList = AppUtils.deepCloneData(
      pokeStore.typeMoveList,
    ) as TPokeMove[][];
    const fullTypeList = mapToTableList(cloneList, typeList);
    if (pokeStore.checkTypeList.length > 0) {
      state.typeMoveTableList = fullTypeList.filter((item) =>
        pokeStore.checkTypeList.includes(item.label),
      );
    } else {
      state.typeMoveTableList = fullTypeList;
    }
  }
};
watch(
  () => pokeStore.checkTypeList,
  () => {
    loadMoreMove();
  },
);

const setTagColor = (cnType: string) => {
  const enType = ETypeContext[cnType as keyof typeof ETypeContext];
  return ETypeColor[enType];
};
const openMoveDetail = async (rowData: TPokeMove) => {
  pokeStore.openMoveDetailDialog(rowData.nameZh, rowData.id);
};
</script>

<template>
  <div class="move-wrapper">
    <TypeTagList :show_move_only="true" />

    <div class="table-list">
      <div
        class="table-item"
        v-for="table in state.typeMoveTableList"
        :key="table.label"
      >
        <div class="title" :id="`table-${table.label}`">{{ table.label }}</div>
        <el-table
          :data="table.tableData"
          class="move-table"
          header-cell-class-name="move-table-header"
          row-class-name="move-table-row"
          cell-class-name="move-table-cell"
          border
        >
          <el-table-column label="編號" prop="id" align="center" width="60" />
          <el-table-column label="中文名" align="center">
            <template #default="{ row, column, $index }">
              <p class="dialog-link" @click="openMoveDetail(row)">
                {{ row.nameZh }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="英文名" align="center">
            <template #default="{ row, column, $index }">
              <p class="dialog-link" @click="openMoveDetail(row)">
                {{ row.nameEn }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="日文名" align="center">
            <template #default="{ row, column, $index }">
              <p class="dialog-link" @click="openMoveDetail(row)">
                {{ row.nameJa }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="屬性" align="center" width="100">
            <template #default="{ row, column, $index }">
              <el-tag class="table-type-tag" :color="setTagColor(row.type)">
                {{ row.type }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="分類"
            prop="category"
            align="center"
            width="100"
          >
            <template #default="{ row, column, $index }">
              <el-tag
                class="table-type-tag"
                round
                :color="setTagColor(row.category)"
              >
                <p>{{ row.category }}</p>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="威力" align="center" width="80">
            <template #default="{ row, column, $index }">
              <p>{{ row.power || "-" }}</p>
            </template>
          </el-table-column>
          <el-table-column label="命中" align="center" width="100">
            <template #default="{ row, column, $index }">
              <p>{{ row.accuracy || "-" }}</p>
            </template>
          </el-table-column>
          <el-table-column label="PP" prop="pp" align="center" width="80" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.move-wrapper {
  max-width: 1440px;
  @apply mx-auto;
}
.table-list {
  .table-item {
    @apply mb-4;
    .title {
      @apply text-2xl text-primary font-bold;
      @apply ml-8 mb-2;
    }

    .table-type-tag {
      @apply w-14  border-none;
      @apply text-base text-white;
    }
    .dialog-link {
      @apply text-text-link cursor-pointer;
    }
  }
}
</style>
