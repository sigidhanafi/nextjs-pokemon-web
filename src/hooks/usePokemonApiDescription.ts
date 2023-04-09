import request from "@/services/request";
import { useQuery } from "@tanstack/react-query";

import { PokemonDescriptionResponse } from "@/models/pokemon";

export default function usePokemonApiDescription(name: string) {
  const fetchDescription = async (
    name: string
  ): Promise<PokemonDescriptionResponse> => {
    const response = request<PokemonDescriptionResponse>(
      "https://pokeapi.co/api/v2/pokemon-species/" + name,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  };

  const { isLoading, error, data, isSuccess } = useQuery({
    queryKey: ["fetchDescription", name],
    queryFn: () => fetchDescription(name),
  });

  return { isLoading, error, data, isSuccess };
}
