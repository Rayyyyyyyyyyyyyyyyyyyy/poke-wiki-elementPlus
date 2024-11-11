import { defineStore } from "pinia";
import { getPokeApi } from "~/servies/pokeApi";
import type { TPokeMove, TResponse, TStateType } from "~/types/apiTypes";
import { typeList } from "~/consts/appConst";
import type { TPokeItem } from "~/types/apiTypes";

export const PokeStore = defineStore("pokeStore", {
  state: () => ({
    fullMoveList: [] as TPokeMove[],
    moveGenerationList: [] as TPokeMove[][],
    typeMoveList: [] as TPokeMove[][],
    fullPokeList: [] as TPokeItem[],

    detailVisible: false,
    pokeId: -1,
    dataType: "",
    resetTypeCheck: false,
    stateTypeList: [] as TStateType[],
  }),
  getters: {
    checkTypeList(state) {
      const nameList = state.stateTypeList
        .filter((item) => item.checked)
        .map((item) => item.cnName);
      state.resetTypeCheck = nameList.length == 0;
      return nameList;
    },
  },
  actions: {
    async getPokemonList() {
      const res = (await getPokeApi("pokemon/list", {})) as TResponse<
        TPokeItem[]
      >;
      this.fullPokeList = res.data.filter((item) => item.form == "");
    },
    async getPokeMoveList() {
      const resMove = (await getPokeApi("move/list", {
        size: 99999,
      })) as TResponse<TPokeMove[]>;

      const cloneData = AppUtils.deepCloneData(resMove.data) as TPokeMove[];

      this.fullMoveList = cloneData;
      for (let i = 1; i < 10; i++) {
        this.moveGenerationList.push(
          cloneData.filter((item) => item.generation == i),
        );
      }
      typeList.forEach((typeStr) => {
        this.typeMoveList.push(
          cloneData.filter((item) => item.type == typeStr),
        );
      });
    },
    updateDetailDialogVisible(visible: boolean) {
      this.detailVisible = visible;
    },
    setWantShowPokeId(id: number) {
      this.pokeId = id;
    },
    setDetailType(dataType: string) {
      this.dataType = dataType;
    },
    openDetailDialog(id: number) {
      this.updateDetailDialogVisible(true);
      this.setWantShowPokeId(id);
      this.setDetailType("poke");
    },
    setTypeCheckList(typeList: TStateType[]) {
      this.stateTypeList = typeList;
    },
  },
});
