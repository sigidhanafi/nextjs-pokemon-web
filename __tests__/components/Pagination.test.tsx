import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pagination from "@/components/commons/Pagination";

describe("Pagination component test", () => {
  test("should disable prev button if page == 1, next button should be enabled", () => {
    render(<Pagination page={1} onNext={() => {}} onPrev={() => {}} />);

    const prevButtonElement = screen.queryByTestId("prev-button");
    expect(prevButtonElement).toBeDisabled();

    const nextButtonElement = screen.queryByTestId("next-button");
    expect(nextButtonElement).toBeEnabled();
  });

  test("should show page number", () => {
    render(<Pagination page={100} onNext={() => {}} onPrev={() => {}} />);

    const pageElement = screen.queryByTestId("page-number");
    expect(pageElement).toHaveTextContent("100");
  });

  test("onPrev called once when user click the prev button", () => {
    const onPrevMock = jest.fn();
    const onNextMock = jest.fn();
    render(<Pagination page={10} onNext={onNextMock} onPrev={onPrevMock} />);

    const prevButtonElement = screen.getByTestId("prev-button");
    fireEvent.click(prevButtonElement);

    expect(onPrevMock).toHaveBeenCalledTimes(1);
  });

  test("onNext called once when user click the next button", () => {
    const onPrevMock = jest.fn();
    const onNextMock = jest.fn();
    render(<Pagination page={10} onNext={onNextMock} onPrev={onPrevMock} />);

    const nextButtonElement = screen.getByTestId("next-button");
    fireEvent.click(nextButtonElement);

    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
});
