import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";

describe("Input component", () => {
  const Props = {
    id: "input",
    onChange: jest.fn(),
    value: "",
    label: "Label",
    type: "text",
    placeholder: "Enter text",
    icon: FaUser as IconType,
  };

  test("Renders the component with the props", () => {
    const { getByLabelText } = render(<Input {...Props} />);

    const input = getByLabelText(Props.label) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe(Props.type);
    expect(input.placeholder).toBe(Props.placeholder);
  });
});
