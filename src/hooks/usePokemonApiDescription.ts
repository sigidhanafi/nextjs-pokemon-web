import request from "@/services/request";
import { useQuery } from "@tanstack/react-query";

interface FlavorTextEntry {
  flavor_text: string;
}

interface PokemonDescriptionResponse {
  flavor_text_entries: FlavorTextEntry[];
}

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
