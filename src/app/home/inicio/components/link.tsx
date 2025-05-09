"use client";

import { redirect } from "next/navigation";
import { CaretRight } from "phosphor-react";

interface LinkProps {
  href: string;
}

export default function Link({ href }: LinkProps) {
  return (
    <button
      onClick={() => redirect(href)}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg p-2 text-sm font-semibold text-purple-100/95 transition-all duration-100 ease-in-out hover:bg-purple-100/5 hover:text-purple-100"
    >
      Ver todos <CaretRight size={16} weight="bold" />
    </button>
  );
}
