import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TemperatureRecorder from "./TempRecord";
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

const onUpdateStats = jest.fn();

const Props = {
  records,
  onUpdateStats,
};

describe("TemperatureRecorder component", () => {
  test("Renders the component with records", () => {
    const { getByText } = render(<TemperatureRecorder {...Props} />);

    expect(getByText("Temperature Recorder")).toBeInTheDocument();
    expect(getByText("Location")).toBeInTheDocument();
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Temperature (°C)")).toBeInTheDocument();
  });
});
