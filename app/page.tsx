"use client";

import React, { useState, useEffect } from "react";
import Stats from "../components/Stats/Stats";
import TemperatureRecorder from "../components/TempRecord/TempRecord";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import { storage } from "../data/mockApi";
import { motion } from "framer-motion";
import {
  TemperatureRecord,
  initialAboveAverageDays,
  initialAverageTemperature,
  initialColdDays,
  initialHotDays,
  calculateMode,
} from "../utils/functions";
import { Toaster } from "react-hot-toast";
import { useTheme } from "@/theme/Theme";
import ThemeButton from "@/components/ThemeButton/ThemeButton";

const data = storage.temperatureRecords;

export default function Home() {
  // Get the theme and toggleTheme function from ThemeProvider
  const { theme, toggleTheme } = useTheme();
  // Convert the initial data to Celsius and store it in the state
  const initialData = data.map((record) => ({
    ...record,
    temperature: record.temperature - 273.15,
  }));

  // Define states for various statistics
  const [records, setRecords] = useState<TemperatureRecord[]>(initialData);
  const [submittedRecords, setSubmittedRecords] = useState<TemperatureRecord[]>(
    []
  );
  const [averageTemperature, setAverageTemperature] = useState(
    initialAverageTemperature(data)
  );
  const [coldDays, setColdDays] = useState<number>(initialColdDays(data));
  const [hotDays, setHotDays] = useState<number>(initialHotDays(data));
  const [aboveAverageDays, setAboveAverageDays] = useState<number>(
    initialAboveAverageDays(data, averageTemperature)
  );
  const [modeTemperature, setModeTemperature] = useState<number | null>(
    calculateMode(initialData.map((record) => record.temperature))
  );

  useEffect(() => {
    // Calculate the number of cold days and hot days
    const coldDays = records.filter((record) => record.temperature < 15).length;
    const hotDays = records.filter((record) => record.temperature >= 15).length;

    // Update the state with new values
    setColdDays(coldDays);
    setHotDays(hotDays);
  }, [records]);

  const onUpdateStats = (newRecords: TemperatureRecord[]) => {
    // Calculate the new number of cold days, hot days, above average days, mode temperature and average temperature
    const newColdDays = newRecords.filter(
      (record) => record.temperature < 15
    ).length;
    const newHotDays = newRecords.filter(
      (record) => record.temperature >= 15
    ).length;
    const newAboveAverageDays = newRecords.filter(
      (record) => record.temperature > averageTemperature
    ).length;
    const newModeTemperature = calculateMode(
      [...records, ...newRecords].map((record) => record.temperature)
    );

    // Update the state with new values
    setColdDays((prev) => prev + newColdDays);
    setHotDays((prev) => prev + newHotDays);
    setAboveAverageDays((prev) => prev + newAboveAverageDays);
    setModeTemperature(newModeTemperature);
    setRecords((prev) => [...prev, ...newRecords]);
    setSubmittedRecords((prev) => [...prev, ...newRecords]);

    // Calculate the new average temperature
    setAverageTemperature((prev) => {
      const newAverageTemperature =
        (prev * records.length +
          newRecords.reduce((sum, record) => sum + record.temperature, 0)) /
        (records.length + newRecords.length);
      return newAverageTemperature;
    });
  };

  return (
    <div
      className={`flex flex-col min-h-screen w-full lg:flex-row flex-wrap ${
        theme === "light"
          ? "bg-gradient-to-br from-slate-50 to-slate-300"
          : "bg-gradient-to-br from-gray-400 to-gray-700"
      }`}
    >
      {/* Display toasts to give feedback to the user */}
      <Toaster />
      {/* Render the theme button to allow the user to toggle between themes */}
      <ThemeButton theme={theme} />
      <div
        className={`w-full lg:w-1/3 p-10 flex flex-col justify-start items-stretch md:items-start ${
          theme === "light"
            ? "bg-gradient-to-br from-[#394f68] to-[#183b7e]"
            : "bg-gradient-to-br from-gray-700 to-gray-900"
        }`}
      >
        {/* Render the left panel of the application */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -400 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full"
        >
          <Text
            className={`text-3xl lg:text-5xl font-bold text-center mb-10 ${
              theme === "light" ? "" : "text-white"
            }`}
          >
            Air Temperature Display
          </Text>
          <Subtitle className="text-xl text-center mb-10">
            Powered by Next.js, Tremor, Tailwind CSS and Framer Motion
          </Subtitle>
          <Divider className="my-10 w-full" />

          <Card
            className={`w-full ${
              theme === "light"
                ? "bg-gradient-to-br from-[#394f68] to-[#183b7e]"
                : "bg-gray-800"
            } `}
          >
            {/* Render the temperature recorder component to allow the user to record temperatures */}
            <TemperatureRecorder
              records={submittedRecords}
              onUpdateStats={onUpdateStats}
            />
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 400, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`w-full h-full lg:w-2/3 flex flex-col justify-center p-5 `}
      >
        {/* Render the statistics panel of the application */}
        <Stats
          records={records}
          averageTemperature={averageTemperature}
          coldDays={coldDays}
          hotDays={hotDays}
          aboveAverageDays={aboveAverageDays}
          modeTemperature={modeTemperature}
        />
      </motion.div>
    </div>
  );
}
