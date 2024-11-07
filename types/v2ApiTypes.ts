export type TNameUrl = {
  name: string;
  url: string;
};
export type TLangName = {
  language: TNameUrl;
  name: string;
};
export type TLearnPoke = {
  pokemon: TNameUrl;
  slot: number;
};
export type TNameIcon = {
  name_icon: string;
};
export type TGameIndice = {
  game_index: number;
  generation: TNameUrl;
};
export type TPokeV2MoveType = {
  damage_relations: {
    double_damage_from: TNameUrl[];
    double_damage_to: TNameUrl[];
    half_damage_from: TNameUrl[];
    half_damage_to: TNameUrl[];
    no_damage_from: TNameUrl[];
    no_damage_to: TNameUrl[];
  };
  game_indices: TGameIndice[];
  generation: TNameUrl;
  id: number;
  move_damage_class: TNameUrl;
  moves: TNameUrl[];
  name: string;
  names: TLangName[];
  past_damage_relations: [
    {
      damage_relations: {
        double_damage_from: TNameUrl[];
        double_damage_to: TNameUrl[];
        half_damage_from: TNameUrl[];
        half_damage_to: TNameUrl[];
        no_damage_from: TNameUrl[];
        no_damage_to: TNameUrl[];
      };
      generation: TNameUrl;
    },
  ];
  pokemon: TLearnPoke[];
  sprites: {
    "generation-iii": {
      colosseum: TNameIcon;
      emerald: TNameIcon;
      "firered-leafgreen": TNameIcon;
      "ruby-saphire": TNameIcon;
      xd: TNameIcon;
    };
    "generation-iv": {
      "diamond-pearl": TNameIcon;
      "heartgold-soulsilver": TNameIcon;
      platinum: TNameIcon;
    };
    "generation-ix": {
      "scarlet-violet": TNameIcon;
    };
    "generation-v": {
      "black-2-white-2": TNameIcon;
      "black-white": TNameIcon;
    };
    "generation-vi": {
      "omega-ruby-alpha-sapphire": TNameIcon;
      "x-y": TNameIcon;
    };
    "generation-vii": {
      "lets-go-pikachu-lets-go-eevee": TNameIcon;
      "sun-moon": TNameIcon;
      "ultra-sun-ultra-moon": TNameIcon;
    };
    "generation-viii": {
      "brilliant-diamond-and-shining-pearl": TNameIcon;
      "legends-arceus": TNameIcon;
      "sword-shield": TNameIcon;
    };
  };
};
