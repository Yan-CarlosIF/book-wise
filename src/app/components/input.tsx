"use client";

import { MagnifyingGlass } from "phosphor-react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  className?: string;
  placeholder: string;
}

export default function Input({ className, placeholder }: InputProps) {
  return (
    <div
      className={twMerge(
        "group relative flex w-[413px] items-center",
        className,
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="flex w-full rounded-sm border border-gray-500 px-5 py-3 text-gray-200 transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-green-200 focus:caret-green-100 focus:outline-none"
      />
      <MagnifyingGlass
        size={24}
        className="absolute right-5 text-gray-500 transition-colors duration-200 ease-in-out group-focus-within:text-green-200"
      />
    </div>
  );
}
