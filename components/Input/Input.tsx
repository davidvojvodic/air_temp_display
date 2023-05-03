"use client";

import { IconType } from "react-icons";
import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: IconType;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
  placeholder,
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center p-2 gap-2 mb-2">
        <label htmlFor={id} className="text-md text-zinc-400">
          {label}
        </label>
        {Icon && <Icon size={25} color="white" />}
      </div>
      <input
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        className=" text-black w-full p-2 font-light bg-white border-2 rounded-md outline-none "
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
