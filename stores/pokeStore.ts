import { defineStore } from "pinia";
import { getPokeApi } from "~/servies/pokeApi";
import type { TPokeMove, TResponse } from "~/types/apiTypes";
import { ETypeContext, typeList } from "~/consts/appConst";

export const PokeStore = defineStore("pokeStore", {
  state: () => ({
    fullMoveList: [] as TPokeMove[],
    typeMoveList: [] as TPokeMove[][],
  }),
  actions: {
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
  },
});
