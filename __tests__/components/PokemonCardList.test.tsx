import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonList from "@/components/pokemon/PokemonList";
import { PokemonListData } from "@/models/pokemon";

describe("PokemonList component test", () => {
  test("show pokemon card if data >= 1", () => {
    const dummyPokemonData: PokemonListData[] = [
      {
        id: 1,
        name: "bulbasaur",
        image: "http://imageurl",
        url: "http://url-detail-api",
      },
      {
        id: 2,
        name: "charmander",
        image: "http://imageurl",
        url: "http://url-detail-api",
      },
    ];

    render(<PokemonList data={dummyPokemonData} />);

    const cardElement = screen.queryAllByTestId("pokemon-card");
    expect(cardElement).toHaveLength(2);
  });

  test("show empty message if data <= 0", () => {
    render(<PokemonList data={[]} />);

    const messageElement = screen.queryByText("Empty result", { exact: false });
    expect(messageElement).toBeInTheDocument();
  });
});
