export enum ETypeContext {
  "一般" = "base",
  "火" = "fire",
  "水" = "water",
  "格斗" = "fighting",
  "飞行" = "flying",
  "毒" = "poison",
  "地面" = "ground",
  "岩石" = "rock",
  "虫" = "bug",
  "幽灵" = "ghost",
  "钢" = "steel",
  "草" = "grass",
  "电" = "electric",
  "超能力" = "psychic",
  "冰" = "ice",
  "龙" = "dragon",
  "恶" = "dark",
  "妖精" = "fairy",
  "物理" = "physics",
  "特殊" = "special",
  "变化" = "status",
  "極巨招式" = "max",
  "超極巨招式" = "G-max",
}
export enum ETypeColor {
  base = "#9FA19F",
  fire = "#D84816",
  water = "#2980EF",
  fighting = "#FF8000",
  flying = "#81B9EF",
  poison = "#9141CB",
  ground = "#915121",
  rock = "#AFA981",
  bug = "#91A119",
  ghost = "#704170",
  steel = "#60A1B8",
  grass = "#3FA129",
  electric = "#FAC000",
  psychic = "#EF4179",
  ice = "#3FD8FF",
  dragon = "#5060E1",
  dark = "#50413F",
  fairy = "#EF70EF",
  physics = "#3D7DCA",
  special = "#3D7DCA",
  status = "#3D7DCA",
  max = "#003A70",
  "G-max" = "#003A70",
}
export enum ETypeColorHover {
  base = "#888B88",
  fire = "#C24C19",
  water = "#2478D7",
  electric = "#E1A800",
  grass = "#358E25",
  ice = "#33B8D3",
  fighting = "#E67300",
  poison = "#7A33A4",
  ground = "#7A431D",
  flying = "#6CA9D7",
  psychic = "#D6366A",
  rock = "#8E8D6D",
  bug = "#7A8F16",
  ghost = "#5C3460",
  dragon = "#4552C4",
  dark = "#413533",
  steel = "#509094",
  fairy = "#D65BD6",
  physics = "#3567A3",
  special = "#3567A3",
  status = "#3567A3",
  max = "#002C5D",
  "G-max" = "#002C5D",
}
export enum ETypeColorActive {
  base = "#6B6F6C",
  fire = "#9C2A0E",
  water = "#1A537D",
  electric = "#B87800",
  grass = "#206B17",
  ice = "#1A8C99",
  fighting = "#C54B00",
  poison = "#4A1F6D",
  ground = "#4B2C14",
  flying = "#3E6D8D",
  psychic = "#9B1C45",
  bug = "#4A6210",
  rock = "#5F613B",
  ghost = "#3A1E39",
  dragon = "#2F3B89",
  dark = "#2A1F1D",
  steel = "#346060",
  fairy = "#B54BB4",
  physics = "#2A5C8A",
  special = "#2A5C8A",
  status = "#2A5C8A",
  max = "#001E47",
  "G-max" = "#001E47",
}

export const areaNameList = [
  "關都",
  "城都",
  "豐緣",
  "神奧",
  "合眾",
  "卡洛斯",
  "阿羅拉",
  "伽勒爾",
  "洗翠",
  "帕底亞",
];

export enum EAreaName {
  "關都" = "kanto",
  "城都" = "johto",
  "豐緣" = "hoenn",
  "神奧" = "sinnoh",
  "合眾" = "unova",
  "卡洛斯" = "kalos",
  "阿羅拉" = "alola",
  "伽勒爾" = "galar",
  "洗翠" = "hisui",
  "帕底亞" = "paldea",
}
export const typeList = [
  "一般",
  "火",
  "水",
  "格斗",
  "飞行",
  "毒",
  "地面",
  "岩石",
  "虫",
  "幽灵",
  "钢",
  "草",
  "电",
  "超能力",
  "冰",
  "龙",
  "恶",
  "妖精",
];
export const moveType = ["物理", "特殊", "变化", "極巨招式", "超極巨招式"];

export enum EPageName {
  "/pokemon/IllustratedBook" = "全國圖鑑",
  "/pokemon/MoveBook" = "招式列表",
  "/pokemon/AbilityList" = "特性列表",
  "/pokemon/AreaList" = "地點列表",
}
