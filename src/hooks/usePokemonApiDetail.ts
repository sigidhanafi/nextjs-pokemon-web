import { useQuery } from "@tanstack/react-query";
import request from "@/services/request";

import { PokemonDetailResponse } from "@/models/pokemon";

export default function usePokemonApiDetail(name: string) {
  const fetchDetail = async (name: string): Promise<PokemonDetailResponse> => {
    const response = await request<PokemonDetailResponse>(
      "https://pokeapi.co/api/v2/pokemon/" + name,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );

    const data: PokemonDetailResponse = {
      id: response.id,
      name: response.name,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        response.id +
        ".png",
      abilities: response.abilities,
      types: response.types,
      stats: response.stats,
      weight: response.weight,
    };

    return data;
  };

  const { isLoading, error, data, isSuccess } = useQuery({
    queryKey: ["fetchPokemonDetail", name],
    queryFn: () => fetchDetail(name),
  });

  return { isLoading, error, data, isSuccess };
}
