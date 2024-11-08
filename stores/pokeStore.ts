import { defineStore } from "pinia";
import { getPokeApi } from "~/servies/pokeApi";
import type { TPokeMove, TResponse } from "~/types/apiTypes";
import { typeList } from "~/consts/appConst";
import type { TPokeItem } from "~/types/apiTypes";
import { AppUtils } from "#build/imports";

export const PokeStore = defineStore("pokeStore", {
  state: () => ({
    fullMoveList: [] as TPokeMove[],
    typeMoveList: [] as TPokeMove[][],
    fullPokeList: [] as TPokeItem[],

    detailVisible: false,
    pokeId: -1,
    dataType: "",
  }),
  actions: {
    async getPokemonList() {
      const res = (await getPokeApi("pokemon/list", {})) as TResponse<
        TPokeItem[]
      >;
      this.fullPokeList = res.data;
    },
    async getPokeMoveList() {
      const resMove = (await getPokeApi("move/list", {
        size: 99999,
      })) as TResponse<TPokeMove[]>;
      const cloneData = AppUtils.deepCloneData(resMove.data) as TPokeMove[];

      this.fullMoveList = cloneData;
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
  },
});
