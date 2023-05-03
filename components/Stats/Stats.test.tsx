import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Stats from "./Stats";
import { TemperatureRecord } from "../../utils/functions";

const records: TemperatureRecord[] = [
  {
    time: 1571263200000,
    temperature: 15,
    location: "Maribor",
  },
  {
    time: 1571349600000,
    temperature: 10,
    location: "Maribor",
  },
  {
    time: 1571436000000,
    temperature: 20,
    location: "Maribor",
  },
];

const defaultProps = {
  records,
  averageTemperature: 15,
  coldDays: 1,
  hotDays: 2,
  aboveAverageDays: 1,
  modeTemperature: 10,
};

describe("Stats component", () => {
  test("renders the component with the provided records", () => {
    const { getByText } = render(<Stats {...defaultProps} />);

    expect(getByText("Statictics")).toBeInTheDocument();
    expect(getByText("Average temperature")).toBeInTheDocument();
    expect(getByText("Cold days")).toBeInTheDocument();
    expect(getByText("Hot days")).toBeInTheDocument();
    expect(getByText("Above average days")).toBeInTheDocument();
    expect(getByText("Mode temperature")).toBeInTheDocument();
  });
});
