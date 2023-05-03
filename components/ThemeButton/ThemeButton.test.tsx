import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeButton from "./ThemeButton";

describe("ThemeButton component", () => {
  test("Render the component with the sun if theme is lisght", () => {
    const { getByTestId } = render(<ThemeButton theme="light" />);
    const button = getByTestId("theme-button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-indigo-600");
  });

  test("Render the component with the sun if theme is dark", () => {
    const { getByTestId } = render(<ThemeButton theme="dark" />);
    const button = getByTestId("theme-button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-indigo-600");
  });
});
