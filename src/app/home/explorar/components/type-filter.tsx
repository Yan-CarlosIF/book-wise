import { twMerge } from "tailwind-merge";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const filters = [
  { value: "tudo", label: "Tudo" },
  { value: "computacao", label: "Computação" },
  { value: "educacao", label: "Educação" },
  { value: "fantasia", label: "Fantasia" },
  { value: "sci-fi", label: "Ficção científica" },
  { value: "horror", label: "Horror" },
  { value: "hqs", label: "HQs" },
  { value: "suspense", label: "Suspense" },
];

export default function TypeFilter() {
  return (
    <ToggleGroup type="multiple" className="mt-10 flex w-10/12 gap-3">
      {filters.map((filter, index) => (
        <ToggleGroupItem
          key={filter.value}
          value={filter.value}
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
