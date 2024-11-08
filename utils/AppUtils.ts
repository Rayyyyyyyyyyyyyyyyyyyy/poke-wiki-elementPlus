import { ETypeColor, ETypeContext } from "~/consts/appConst";

const AppUtils = {
  deepCloneData(data: any) {
    return JSON.parse(JSON.stringify(data));
  },

  transactionNameToColor(zhName: string) {
    const moveTypeEn = ETypeContext[zhName as keyof typeof ETypeContext];
    return {
      enName: moveTypeEn,
      color: ETypeColor[moveTypeEn as keyof typeof ETypeColor],
    };
  },

  toFixedWidth(index: number) {
    return `#${index.toString().padStart(4, "0")}`;
  },
  getPokeAvatarUrl(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  },
};
export default AppUtils;
