"use client";

import { MagnifyingGlass } from "phosphor-react";

import HomeHeader from "../components/home-header";
import PopularBookCard from "../components/popular-book-card";
import TypeFilter from "./components/type-filter";

export default function Explorer() {
  return (
    <>
      <header className="flex justify-between">
        <HomeHeader />
        <div className="group relative flex w-[413px] items-center">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="flex w-full rounded-sm border border-gray-500 px-5 py-3 text-gray-200 transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-green-200 focus:caret-green-100 focus:outline-none"
          />
          <MagnifyingGlass
            size={24}
            className="absolute right-5 text-gray-500 transition-colors duration-200 ease-in-out group-focus-within:text-green-200"
          />
        </div>
      </header>
      <TypeFilter />
      <main className="scrollbar-hide mt-12 grid w-full grid-cols-3 gap-5 overflow-scroll scroll-smooth 2xl:grid-cols-4">
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
