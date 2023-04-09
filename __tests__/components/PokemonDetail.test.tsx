import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  PokemonDetailResponse,
  PokemonDescriptionResponse,
} from "@/models/pokemon";

import PokemonDetail from "@/components/pokemon/PokemonDetail";

describe("PokemonDetail component test", () => {
  test("show detail data pokemon", () => {
    const mockingData: PokemonDetailResponse = {
      id: 1,
      name: "bulbasaur",
      image: "https://image.url",
      abilities: [{ ability: { name: "overgrow" } }],
      types: [{ type: { name: "grass" } }, { type: { name: "posion" } }],
      stats: [{ base_stat: 26, stat: { name: "attack" } }],
      weight: 90,
    };

    const mockingDesc: PokemonDescriptionResponse = {
      flavor_text_entries: [
        {
          flavor_text:
            "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
        },
      ],
    };

    render(<PokemonDetail data={mockingData} description={mockingDesc} />);

    const nameElement = screen.queryByTestId("pokemon-detail-name");
    expect(nameElement).toHaveTextContent(mockingData.name);

    const typeElement = screen.queryAllByTestId("pokemon-detail-type");
    expect(typeElement).toHaveLength(mockingData.types.length);

    const statElement = screen.queryAllByTestId("pokemon-detail-stat");
    expect(statElement).toHaveLength(mockingData.stats.length);
  });

  test("show description pokemon", () => {
    const mockingData: PokemonDetailResponse = {
      id: 1,
      name: "bulbasaur",
      image: "https://image.url",
      abilities: [{ ability: { name: "overgrow" } }],
      types: [{ type: { name: "grass" } }, { type: { name: "posion" } }],
      stats: [{ base_stat: 26, stat: { name: "attack" } }],
      weight: 90,
    };

    const mockingDesc: PokemonDescriptionResponse = {
      flavor_text_entries: [
        {
          flavor_text:
            "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
        },
      ],
    };

    render(<PokemonDetail data={mockingData} description={mockingDesc} />);

    const nameElement = screen.queryByTestId("pokemon-detail-description");
    expect(nameElement).toHaveTextContent(
      mockingDesc.flavor_text_entries[0].flavor_text
    );
  });
});
