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

export type TTextEntries = {
  flavor_text: string;
  language: TNameUrl;
  version: TNameUrl;
};

export type TPokeSpacies = {
  base_happiness: number;
  capture_rate: number;
  color: TNameUrl;
  egg_groups: TNameUrl[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: TNameUrl;
  flavor_text_entries: TTextEntries[];

  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: TNameUrl;
  }[];

  generation: TNameUrl;
  growth_rate: TNameUrl;
  habitat: TNameUrl;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: TNameUrl;
    name: string;
  }[];

  order: number;
  pal_park_encounters: {
    area: TNameUrl;
    base_score: number;
    rate: number;
  }[];

  pokedex_numbers: {
    entry_number: number;
    pokedex: TNameUrl;
  }[];

  shape: TNameUrl;
  varieties: {
    is_default: boolean;
    pokemon: TNameUrl;
  }[];
};
