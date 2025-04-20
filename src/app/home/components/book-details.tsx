"use client";

import { SheetContent, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import StarRating from "./star-rating";
import { BookmarkSimple, BookOpen } from "phosphor-react";
import Comment from "./comment";
import { Prisma } from "@prisma/client";

type BookWithCategoriesAndRatings = Prisma.BookGetPayload<{
  include: {
    categories: {
      include: {
        category: true;
      };
    };
    ratings: {
      include: {
        user: true;
      };
    };
  };
}>;

interface BookDetailsProps {
  book: BookWithCategoriesAndRatings;
  rate: number;
}

export default function BookDetails({ book, rate }: BookDetailsProps) {
  const categories = book.categories
    .map((category) => category.category.name)
    .join(", ");

  return (
    <SheetContent className="flex !w-[660px] !max-w-[660px] flex-col overflow-y-scroll border-none bg-gray-800 px-12 py-16 outline-none [&>button]:cursor-pointer [&>button]:p-1 [&>button]:text-gray-400 [&>button]:transition-all [&>button]:duration-300 [&>button]:ease-in-out [&>button]:hover:bg-gray-600 [&>button]:hover:text-gray-100">
      <SheetTitle className="sr-only">Detalhes do Livro</SheetTitle>
      <div className="flex flex-col rounded-[10px] bg-gray-700 p-6">
        <div className="flex gap-8">
          <Image
            src={book.cover_url}
            width={172}
            height={242}
            alt="Capa do livro"
          />

          <div className="flex flex-col">
            <h1 className="font-bold text-gray-100">{book.name}</h1>
            <p className="text-gray-300">{book.author}</p>

            <div className="mt-auto">
              <StarRating rate={rate} />
              <span className="text-sm leading-16 text-gray-400">
                {`${book.ratings.length} ${book.ratings.length === 1 ? "avaliação" : "avaliações"}`}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full items-center gap-14 border-t border-gray-600 py-6">
          <div className="flex items-center gap-4">
            <BookmarkSimple className="text-green-100" size={24} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Categoria</span>
              <span className="font-bold text-gray-200">{categories}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BookOpen className="text-green-100" size={24} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Páginas</span>
              <span className="font-bold text-gray-200">
                {book.total_pages}
              </span>
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
        {book.ratings.map((rating) => (
          <Comment key={rating.id} rating={rating} />
        ))}
      </div>
    </SheetContent>
  );
}
