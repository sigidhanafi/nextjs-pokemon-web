import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonCard from "@/components/pokemon/PokemonCard";

describe("PokemonCard component test", () => {
  test("show pokemon data", () => {
    render(<PokemonCard name="bulbasaur" id={1} image="https://image.url" />);

    const nameElement = screen.queryByTestId("pokemon-card-name");
    expect(nameElement).toHaveTextContent("bulbasaur");

    const imageElement = screen.queryByTestId("pokemon-card-image");
    expect(imageElement).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fimage.url&w=640&q=75"
    );
  });
});
