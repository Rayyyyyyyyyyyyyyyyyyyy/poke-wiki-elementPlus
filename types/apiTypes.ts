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

export type TResponse<T> = {
  code: number;
  data: T;
  message: string;
  status: boolean;
};
