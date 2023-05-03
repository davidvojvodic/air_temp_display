import React, { useState, useEffect } from "react";
import StatCard from "../StatCard/StatCard";
import { Text, Subtitle, Grid } from "@tremor/react";
import DateRangeFilter from "../DateRangeFilter/DateRangeFilter";
import { TemperatureRecord, calculateMode } from "../../utils/functions";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { BsFillSunFill, BsGraphUpArrow } from "react-icons/bs";
import { TbSnowflake } from "react-icons/tb";
import { GoFlame } from "react-icons/go";
import { MdQueryStats } from "react-icons/md";
import { useTheme } from "../../theme/Theme";

interface StatsProps {
  records: TemperatureRecord[];
  averageTemperature: number;
  coldDays: number;
  hotDays: number;
  aboveAverageDays: number;
  modeTemperature: number | null;
}

const Stats: React.FC<StatsProps> = ({
  records,
  averageTemperature,
  coldDays,
  hotDays,
  aboveAverageDays,
  modeTemperature,
}) => {
  // Get the theme from the context
  const { theme } = useTheme();

  // Declare and initialize state variables
  const [filteredRecords, setFilteredRecords] = useState(records);
  const [filteredAverageTemperature, setFilteredAverageTemperature] =
    useState(averageTemperature);
  const [filteredColdDays, setFilteredColdDays] = useState(coldDays);
  const [filteredHotDays, setFilteredHotDays] = useState(hotDays);
  const [filteredAboveAverageDays, setFilteredAboveAverageDays] =
    useState(aboveAverageDays);
  const [filteredModeTemperature, setFilteredModeTemperature] = useState<
    number | null
  >(modeTemperature);

  // Update filtered records when the records prop changes
  useEffect(() => {
    setFilteredRecords(records);
    toast.success("Statistics updated");
  }, [records]);

  // Filter records by date range
  const filterRecords = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const filtered = records.filter(
      (record) => new Date(record.time) >= start && new Date(record.time) <= end
    );
    setFilteredRecords(filtered);
  };

  // Update filtered statistics when filtered records change
  useEffect(() => {
    const updateFilteredStatistics = () => {
      // Get an array of temperatures from the filtered records
      const temperatures = filteredRecords.map((record) => record.temperature);
      // Calculate the average temperature in Celsius
      const celsiusAverageTemperature =
        temperatures.reduce((sum, temperature) => sum + temperature, 0) /
        temperatures.length;
      // Count the number of days with temperatures below 15 degrees Celsius
      const coldDays = filteredRecords.filter(
        (record) => record.temperature < 15
      ).length;
      // Count the number of days with temperatures at or above 15 degrees Celsius
      const hotDays = filteredRecords.filter(
        (record) => record.temperature >= 15
      ).length;
      // Count the number of days with temperatures above the filtered average temperature
      const aboveAverageDays = filteredRecords.filter(
        (record) => record.temperature > filteredAverageTemperature
      ).length;
      // Calculate the mode temperature
      const modeTemperature = calculateMode(temperatures);

      // Update the state variables with the filtered statistics
      setFilteredAverageTemperature(celsiusAverageTemperature);
      setFilteredColdDays(coldDays);
      setFilteredHotDays(hotDays);
      setFilteredAboveAverageDays(aboveAverageDays);
      setFilteredModeTemperature(modeTemperature);
    };

    updateFilteredStatistics();
  }, [filteredRecords, filteredAverageTemperature]);

  return (
    <div className="flex flex-col justify-center p-5 ">
      {/* Title */}
      <div className="flex justify-center">
        <Text
          className={`text-3xl lg:text-5xl font-bold mb-5 ${
            theme === "light" ? "" : "text-white"
          }`}
        >
          Statictics
        </Text>
      </div>
      {/* If no records found */}
      {records.length === 0 ? (
        <Text>No records found</Text>
      ) : (
        // If there are records
        <>
          <div className="flex flex-col justify-center items-center w-full mb-10">
            <Subtitle className="text-xl font-medium text-gray-700 mb-2">
              Temperature Records
            </Subtitle>
            <div
              className={`flex justify-center shadow-lg p-10 w-full border-1 rounded-lg ${
                theme === "light"
                  ? "bg-gradient-to-br from-[#394f68] to-[#183b7e]"
                  : "bg-gray-800"
              }`}
            >
              {/* Date range filter */}
              <DateRangeFilter onFilter={filterRecords} />
            </div>
          </div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 500, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="flex w-full lg:flex-row flex-col items-center gap-9 justify-center"
          >
            <Grid className="gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              <motion.div whileHover={{ scale: 1.25 }}>
                <StatCard
                  title="Average temperature"
                  value={
                    filteredAverageTemperature
                      ? `${filteredAverageTemperature.toFixed(1)}°C`
                      : "N/A"
                  }
                  color="yellow"
                  icon={BsFillSunFill}
                  iconColor="orange"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.25 }}>
                <StatCard
                  title="Cold days"
                  value={filteredColdDays.toString()}
                  color="blue"
                  icon={TbSnowflake}
                  iconColor="blue"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.25 }}>
                <StatCard
                  title="Hot days"
                  value={filteredHotDays.toString()}
                  color="red"
                  icon={GoFlame}
                  iconColor="red"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.25 }}>
                <StatCard
                  color="green"
                  title="Above average days"
                  value={filteredAboveAverageDays.toString()}
                  icon={BsGraphUpArrow}
                  iconColor="green"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.25 }}>
                <StatCard
                  color="purple"
                  title="Mode temperature"
                  value={
                    filteredModeTemperature
                      ? `${filteredModeTemperature}°C`
                      : "N/A"
                  }
                  icon={MdQueryStats}
                  iconColor="purple"
                />
              </motion.div>
            </Grid>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Stats;
