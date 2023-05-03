"use client";

import React, { useState, useCallback } from "react";
import { throttle } from "../../utils/functions";
import toast from "react-hot-toast";
import { Text } from "@tremor/react";

interface DateRangeFilterProps {
  onFilter: (startDate: string, endDate: string) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ onFilter }) => {
  // Set initial state for the start and end dates
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Function to handle filter click event
  const handleFilterClick = useCallback(() => {
    // If start and end date values are available, call onFilter function and show success message
    if (startDate && endDate) {
      onFilter(startDate, endDate);
      toast.success("Filter applied");
    } else {
      // Else show error message
      toast.error("Please select a start and end date");
    }
  }, [startDate, endDate, onFilter]);

  // Throttle the filter click event to prevent multiple clicks
  const throttledFilterClick = throttle(handleFilterClick, 700);

  return (
    <div className="flex flex-col w-4/6 space-y-3">
      <Text className="text-center font-semibold text-zinc-100 text-2xl">
        Filter by date range
      </Text>
      <input
        type="date"
        aria-label="Start date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="bg-white p-2 rounded-md"
      />
      <input
        type="date"
        aria-label="End date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="bg-white p-2 rounded-md"
      />
      <button
        type="button"
        onClick={throttledFilterClick}
        className="bg-indigo-600 py-2 text-white rounded-md w-full mt-2 hover:bg-indigo-500 transition"
      >
        Filter
      </button>
    </div>
  );
};

export default DateRangeFilter;
