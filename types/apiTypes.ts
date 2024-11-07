export type TResponse<T> = {
  code: number;
  data: T;
  message: string;
  status: boolean;
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
