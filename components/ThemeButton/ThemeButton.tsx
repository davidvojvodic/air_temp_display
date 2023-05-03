import React from "react";
import { useTheme } from "../../theme/Theme";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface Props {
  theme: string;
}

const ThemeButton: React.FC<Props> = ({ theme }) => {
  // Access the toggleTheme function from the context
  const { toggleTheme } = useTheme();

  return (
    // Apply Framer Motion animation to the button
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      className="absolute top-4 right-6"
    >
      {/* Use data-testid for testing purposes */}
      <div
        data-testid="theme-button"
        className="w-12 h-12 cursor-pointer rounded-full bg-indigo-600 flex items-center justify-center transition ease-in-out hover:bg-indigo-500"
      >
        <button onClick={toggleTheme}>
          {/* Change icon depending on theme */}
          {theme === "light" ? (
            <BsFillSunFill size={30} color="white" />
          ) : (
            <BsMoonFill size={28} color="white" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ThemeButton;
