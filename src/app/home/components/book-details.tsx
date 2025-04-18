"use client";

import { SheetContent, SheetTitle } from "@/components/ui/sheet";
import Book from "/public/assets/books/Book_1.png";
import Image from "next/image";
import StarRating from "./star-rating";
import { BookmarkSimple, BookOpen } from "phosphor-react";
import Comment from "./comment";

export default function BookDetails() {
  return (
    <SheetContent className="flex !w-[660px] !max-w-[660px] flex-col overflow-y-scroll border-none bg-gray-800 px-12 py-16 outline-none [&>button]:cursor-pointer [&>button]:text-gray-400">
      <SheetTitle className="sr-only">Detalhes do Livro</SheetTitle>
      <div className="flex flex-col rounded-[10px] bg-gray-700 p-6">
        <div className="flex gap-8">
          <Image src={Book} alt="Capa do livro" />

          <div className="flex flex-col">
            <h1 className="font-bold text-gray-100">Entendendo Algoritmos</h1>
            <p className="text-gray-300">Aditya Bhargava</p>

            <div className="mt-auto">
              <StarRating />
              <span className="text-sm leading-16 text-gray-400">
                3 avaliações
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full items-center gap-14 border-t border-gray-600 py-6">
          <div className="flex items-center gap-4">
            <BookmarkSimple className="text-green-100" size={24} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Categoria</span>
              <span className="font-bold text-gray-200">
                Computação, educação
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BookOpen className="text-green-100" size={24} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Páginas</span>
              <span className="font-bold text-gray-200">160</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-between">
        <span className="text-sm text-gray-300">Avaliações</span>
        <button className="cursor-pointer text-sm font-bold text-purple-100 opacity-85 transition-colors duration-300 ease-in-out hover:opacity-100">
          Avaliar
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </SheetContent>
  );
}
