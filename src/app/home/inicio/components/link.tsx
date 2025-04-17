"use client";

import { CaretRight } from "phosphor-react";

export default function Link() {
  return (
    <button className="flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold text-purple-100">
      Ver todos <CaretRight size={16} weight="bold" />
    </button>
  );
}
