// LIST RESPONSE
interface PokemonListData {
  id: number;
  name: string;
  url: string;
  image: string;
}

interface PokemonListResponse {
  count: number;
  next: string;
  results: PokemonListData[];
}

interface PokemonDetailResponseStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

// DETAIL RESPONSE
interface PokemonDetailResponseAbility {
  ability: { name: string };
}

interface PokemonDetailResponseType {
  type: { name: string };
}

interface PokemonDetailResponse {
  id: number;
  name: string;
  image: string;
  abilities: PokemonDetailResponseAbility[];
  types: PokemonDetailResponseType[];
  stats: PokemonDetailResponseStat[];
  weight: number;
}

// API DESCRIPTION
interface FlavorTextEntry {
  flavor_text: string;
}

interface PokemonDescriptionResponse {
  flavor_text_entries: FlavorTextEntry[];
}

export {
  type PokemonListResponse,
  type PokemonListData,
  type PokemonDetailResponse,
  type PokemonDetailResponseType,
  type PokemonDetailResponseAbility,
  type PokemonDescriptionResponse,
  type FlavorTextEntry,
};
