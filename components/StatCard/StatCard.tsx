"use client";

import React from "react";
import { Card, Color } from "@tremor/react";
import { useTheme } from "../../theme/Theme";
import { IconType } from "react-icons";

// Defining the prop types for the StatCard component
type StatCardProps = {
  value?: string;
  title?: string;
  color: Color;
  icon?: IconType;
  iconColor?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  value,
  title,
  color,
  icon: Icon,
  iconColor,
}) => {
  const { theme } = useTheme();

  return (
    <Card
      decoration="top"
      decorationColor={color}
      className={`relative max-w-4xl w-44 h-44 flex items-center flex-col justify-center shadow-lg ${
        theme === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className="absolute top-3 left-3">
        {/* Rendering the icon if provided */}
        {Icon && <Icon size={30} color={iconColor} />}
      </div>
      <p
        className={`text-2xl font-bold ${
          theme === "light" ? "text-zinc-400" : "text-gray-200"
        }`}
      >
        {/* Rendering the value if provided */}
        {value}
      </p>
      <p
        className={`text-sm text-center font-light ${
          theme === "light" ? "text-zinc-400" : "text-gray-200"
        }`}
      >
        {/* Rendering the title if provided */}
        {title}
      </p>
    </Card>
  );
};

export default StatCard;
