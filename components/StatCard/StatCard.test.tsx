import React from "react";
import { render } from "@testing-library/react";
import { FaUser } from "react-icons/fa";
import StatCard from "./StatCard";

describe("StatCard component", () => {
  const Props = {
    value: "123",
    title: "Title",
    color: "blue" as const,
    icon: FaUser,
    iconColor: "red",
  };

  test("Renders the icon", () => {
    const { container } = render(<StatCard {...Props} />);
    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  test("Renders the component with props", () => {
    const { getByText } = render(<StatCard {...Props} />);
    const value = getByText(Props.value);
    const title = getByText(Props.title);
    expect(value).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
