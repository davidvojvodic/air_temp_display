"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the possible theme options
type Theme = "light" | "dark";
// Define the shape of the context object
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context object
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Custom hook to use the theme context in functional components
export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

// ThemeProvider component which provides the theme context
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle the current theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return (
    // Render the context provider and pass in the current theme and toggle function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
