import React from "react";
import { queryByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DetailShimmer from "@/components/commons/DetailShimmer";

describe("DetailShimmer component test", () => {
  test("show image and stat shimmer", () => {
    render(<DetailShimmer />);

    const imageShimmerElement = screen.queryByTestId("image-shimmer");
    expect(imageShimmerElement).toBeInTheDocument();

    const statShimmerElement = screen.queryByTestId("stat-shimmer");
    expect(statShimmerElement).toBeInTheDocument();
  });
});
