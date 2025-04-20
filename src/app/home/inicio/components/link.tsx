"use client";

import { redirect } from "next/navigation";
import { CaretRight } from "phosphor-react";

export default function Link() {
  return (
    <button
      onClick={() => redirect("/home/explorar")}
      className="flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold text-purple-100"
    >
      Ver todos <CaretRight size={16} weight="bold" />
    </button>
  );
}
