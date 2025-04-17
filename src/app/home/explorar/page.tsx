"use client";

import { MagnifyingGlass } from "phosphor-react";

import HomeHeader from "../components/home-header";
import PopularBookCard from "../components/popular-book-card";
import TypeFilter from "./components/type-filter";
import Input from "@/app/components/input";

export default function Explorer() {
  return (
    <>
      <header className="flex justify-between">
        <HomeHeader />
        <Input placeholder="Buscar livro ou autor" />
      </header>
      <TypeFilter />
      <main className="scrollbar-hide mt-12 grid w-full grid-cols-3 gap-5 overflow-scroll scroll-smooth">
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
        <PopularBookCard className="h-fit max-h-[184px]" />
      </main>
    </>
  );
}
