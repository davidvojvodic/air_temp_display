// Define the structure of a temperature record
export type TemperatureRecord = {
  location: string;
  time: number;
  temperature: number;
};

// Calculate the initial average temperature from a set of temperature records
const initialAverageTemperature = (data: TemperatureRecord[]) => {
  // Map the temperatures to Kelvin
  const temperatures = data.map((record) => record.temperature);
  const kelvinAverageTemperature =
    temperatures.reduce((sum, temperature) => sum + temperature, 0) /
    temperatures.length;
  // Calculate the average temperature in Celsius
  const celsiusAverageTemperature = kelvinAverageTemperature - 273.15;

  return celsiusAverageTemperature;
};

// Calculate the number of cold days from temperature records
const initialColdDays = (data: TemperatureRecord[]) => {
  return data.filter((record) => record.temperature < 15).length;
};

// Calculate the number of hot days from temperature records
const initialHotDays = (data: TemperatureRecord[]) => {
  return data.filter((record) => record.temperature >= 15).length;
};
// Calculate the number of days with temperatures above the average
const initialAboveAverageDays = (
  data: TemperatureRecord[],
  averageTemperature: number
) => {
  return data.filter(
    (record) => record.temperature - 273.15 > averageTemperature
  ).length;
};

// Calculate the mode (most common value) from an array of temperatures
const calculateMode = (temperatures: number[]) => {
  // Create a frequency map to count the occurrence of each temperature
  const frequencyMap: { [key: number]: number } = {};
  let maxCount = 0;
  let mode: number | null = null;

  for (const temperature of temperatures) {
    const roundedTemperature = Math.round(temperature);
    if (!frequencyMap[roundedTemperature]) {
      frequencyMap[roundedTemperature] = 1;
    } else {
      frequencyMap[roundedTemperature]++;
    }

    // Update the mode if a new most common temperature is found
    if (frequencyMap[roundedTemperature] > maxCount) {
      maxCount = frequencyMap[roundedTemperature];
      mode = roundedTemperature;
    }
  }

  return mode;
};

// A throttling function to limit the rate of function calls
function throttle(func: (...args: any[]) => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: any[]) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    }
  };
}

export {
  initialAverageTemperature,
  initialColdDays,
  initialHotDays,
  initialAboveAverageDays,
  calculateMode,
  throttle,
};
