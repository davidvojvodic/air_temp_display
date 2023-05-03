"use client";

import * as React from "react";
import { useState } from "react";
import Select from "react-select";
import Input from "../Input/Input";
import { mockApi } from "../../data/mockApi";
import { MdLocationCity } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { storage } from "../../data/mockApi";
import { TemperatureRecord } from "../../utils/functions";
import { Text } from "@tremor/react";

interface Props {
  records: TemperatureRecord[];
  onUpdateStats: (newRecords: TemperatureRecord[]) => void;
}
// Define type of select options
type OptionType = {
  value: {
    location: string;
  };
  label: string;
} | null;

// Temperature records from mock API storage
const data = storage.temperatureRecords;

// Extract unique locations from the records
const locations = data.map((record) => record.location);
const uniqueLocations = [...new Set(locations)];

// Create select options from unique locations
const locationOptions = uniqueLocations.map((city) => ({
  value: {
    location: city,
  },
  label: city,
}));

const TemperatureRecorder: React.FC<Props> = ({ records, onUpdateStats }) => {
  // State to keep track of form inputs
  const [location, setLocation] = useState<OptionType>(null);
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState("");

  const { saveTemperature } = mockApi();

  // Event handler for when user selects a location from dropdown
  const handleChange = (option: OptionType) => {
    setLocation(option);
  };

  // Event handler for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create new temperature record object from form inputs
    const newRecord: TemperatureRecord = {
      location: location?.value.location || "",
      time: Date.parse(time.toString()),
      temperature: parseFloat(temperature),
    };

    // Save new record to mock API storage
    await saveTemperature(
      newRecord.location,
      newRecord.time,
      newRecord.temperature
    );
    console.log("New entry", newRecord);

    // Reset form inputs
    setLocation(null);
    setTime("");
    setTemperature("");

    // Update state of parent component with new record
    onUpdateStats([newRecord]);
  };

  return (
    <div className="text-white p-2 space-y-5">
      <h1 className="text-center text-xl">Temperature Recorder</h1>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {/* Location input */}
          <div className="flex flex-row items-center w-full p-2 gap-2">
            <label
              className="text-md text-zinc-400"
              htmlFor="location"
              id="locationLabel"
            >
              Location
            </label>
            <MdLocationCity size={25} color="white" />
          </div>
          <Select
            placeholder="Enter location"
            className="text-black w-full  font-light bg-white border-2 rounded-md outline-none"
            options={locationOptions}
            onChange={handleChange}
            isSearchable
            value={location}
            aria-labelledby="locationLabel"
            id="location"
          />
          {/* Date input */}
          <Input
            label="Date"
            onChange={(e: any) => setTime(e.target.value)}
            id="date"
            type="date"
            value={time}
            placeholder="Enter date"
            icon={BsCalendarDate}
          />
          {/* Temperature input */}
          <Input
            label="Temperature (°C)"
            onChange={(e: any) => setTemperature(e.target.value)}
            id="temperature"
            type="number"
            value={temperature}
            placeholder="Enter temperature"
            icon={FaTemperatureHigh}
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-indigo-600 py-3 text-white rounded-md w-full mt-10 hover:bg-indigo-500 transition"
        >
          Submit
        </button>
      </form>
      {/* Latest records */}

      <Text className="text-lg font-semibold">Latest Records:</Text>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.location}, {new Date(record.time).toLocaleDateString()},{" "}
            {record.temperature.toFixed(1)} °C
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemperatureRecorder;
