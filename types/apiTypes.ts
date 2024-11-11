export type TResponse<T> = {
  code: number;
  data: T;
  message: string;
  status: boolean;
};

export type TOption = {
  label: string;
  value: number;
};
export type TOptionStrValue = {
  label: string;
  value: string;
};

export type TPokeItem = {
  index: number;
  nameZh: string;
  nameJa: string;
  nameEn: string;
  type1: string;
  type2: string;
  ability1: string;
  ability2: string;
  abilityHide: string;
  form: string;
  generation: number;
};

export type TPokeMove = {
  id: number;
  nameZh: string;
  nameJa: string;
  nameEn: string;
  type: string;
  category: string;
  power: string;
  accuracy: string;
  pp: string;
  generation: number;
};

export type TBaseStat = {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  total: number;
  average: number;
};
export type TPokeDetail = {
  index: number;
  nameZh: string;
  nameJa: string;
  nameEn: string;
  type1: string;
  type2: string;
  ability1: string;
  ability2: string;
  abilityHide: string;
  form: string;
  generation: number;
  detail: {
    imgUrl: string;
    category: string;
    height: string;
    weight: string;
    bodyStyle: string;
    catchRate: string;
    genderRatio: string;
    eggGroup1: string;
    eggGroup2: string;
    hatchTime: string;
    effortValue: string;
  };
  baseStat: TBaseStat;
  learnSetByLevelingUp: {
    level: string;
    level1: string;
    level2: string;
    move: string;
    type: string;
    category: string;
    power: string;
    accuracy: string;
    pp: string;
  }[];

  learnSetByTechnicalMachine: {
    imgUrl: string;
    technicalMachine: string;
    move: string;
    type: string;
    category: string;
    power: string;
    accuracy: string;
    pp: string;
  }[];

  learnSetByBreeding: {
    parent: string;
    move: string;
    type: string;
    category: string;
    power: string;
    accuracy: string;
    pp: string;
  }[];
};

export type TStateType = {
  enName: string;
  color: string;
  checked: boolean;
  cnName: string;
  hoverColor: string;
  activeColor: string;
};

export type TMoveTableList = {
  label: string;
  tableData: TPokeMove[];
};

export type TMoveDetailInner = {
  desc: string;
  imgUrl: string;
  notes: string;
  scope: string;
  effect: string;
};
export type TMoveDetail = {
  id: number;
  nameZh: string;
  nameJa: string;
  nameEn: string;
  type: string;
  category: string;
  power: string;
  accuracy: string;
  pp: string;
  generation: number;
  detail: TMoveDetailInner;
};
