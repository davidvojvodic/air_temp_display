import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import DateRangeFilter from "./DateRangeFilter";

describe("DateRangeFilter", () => {
  it("Start date and end date need to be provided for the onFilter callback", async () => {
    const mockOnFilter = jest.fn();
    const { getByLabelText, getByText } = render(
      <DateRangeFilter onFilter={mockOnFilter} />
    );

    const startDateInput = getByLabelText("Start date");
    const endDateInput = getByLabelText("End date");
    const filterButton = getByText("Filter");

    fireEvent.change(startDateInput, { target: { value: "2022-01-01" } });
    fireEvent.change(endDateInput, { target: { value: "2022-01-10" } });

    fireEvent.click(filterButton);

    await waitFor(() => expect(mockOnFilter).toHaveBeenCalledTimes(1));
    expect(mockOnFilter).toHaveBeenCalledWith("2022-01-01", "2022-01-10");
  });
});
