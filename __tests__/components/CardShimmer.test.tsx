import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CardShimmer from "@/components/commons/CardShimmer";

describe("CardShimmer component test", () => {
  test("show nine shimmer component", () => {
    // arrange
    render(<CardShimmer />);

    // assert
    const shimmerElement = screen.queryAllByTestId("shimmer-div");
    expect(shimmerElement).toHaveLength(9);
  });
});
