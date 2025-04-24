"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlass } from "phosphor-react";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  placeholder,
  name,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("Search") || "");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(name || "Search", value);
    } else {
      params.delete(name || "Search");
    }
    router.replace(`?${params.toString()}`);
  }, [value, name, router]);

  return (
    <div
      className={twMerge(
        "group relative flex w-[413px] items-center",
        className,
      )}
    >
      <input
        {...props}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
