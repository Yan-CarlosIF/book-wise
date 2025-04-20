"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { twMerge } from "tailwind-merge";

const filters = [
  { label: "Tudo" },
  { label: "Programação" },
  { label: "Romance" },
  { label: "Educação" },
  { label: "Aventura" },
  { label: "Fábula" },
  { label: "Ficção" },
  { label: "Terror" },
  { label: "Geek" },
  { label: "Arquitetura" },
  { label: "Alegoria" },
  { label: "Autoajuda" },
  { label: "Suspense" },
];

export default function TypeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Lê os filtros que estão como "true" na URL
  const selectedValues = filters
    .map((filter) => filter.label)
    .filter((key) => searchParams.get(key) === "true");

  function handleToggle(value: string[]) {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    filters.forEach((f) => {
      newSearchParams.delete(f.label);
    });

    value.forEach((val) => {
      newSearchParams.set(val, "true");
    });

    router.push(`?${newSearchParams.toString()}`);
  }

  return (
    <ToggleGroup
      type="multiple"
      className="mt-10 flex w-19/20 gap-3"
      value={selectedValues}
      onValueChange={handleToggle}
    >
      {filters.map((filter, index) => (
        <ToggleGroupItem
          key={filter.label}
          value={filter.label}
          className={twMerge(
            "w-fit cursor-pointer rounded-full border border-purple-100 text-purple-100 transition-colors duration-200 ease-in-out hover:bg-purple-200 hover:text-gray-100 data-[state=on]:border-purple-200 data-[state=on]:bg-purple-200 data-[state=on]:text-gray-100",
            index === 0 && "first:rounded-full",
            index === filters.length - 1 && "last:rounded-full",
          )}
        >
          {filter.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
