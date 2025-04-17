"use client";

import Image from "next/image";

import Book from "/public/assets/books/Book_1.png";

import StarRating from "../../components/star-rating";

export default function RatingCard() {
  return (
    <div className="flex flex-col rounded-lg bg-gray-700 p-6">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <div className="from-gradient1 to-gradient2 h-10 w-10 rounded-full bg-gradient-to-b p-[1px]">
            <Image
              src="https://github.com/yan-carlosif.png"
              alt="foto de perfil"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col self-center">
            <h1 className="leading-16 text-gray-100">Yan Carlos</h1>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>
        <StarRating />
      </header>
      <main className="mt-8 flex w-full gap-5">
        <Image src={Book} alt="Capa do Livro" />
        <div className="flex flex-col gap-5">
          <header className="flex flex-col">
            <h1 className="font-semibold text-gray-100">
              Entendendo Algoritmos
            </h1>
            <span className="text-sm leading-16 text-gray-400">
              Aditya Bhargava
            </span>
          </header>
          <p className="line-clamp-4 text-justify text-sm leading-16 text-ellipsis text-gray-300">
            Integer at tincidunt sed mi. Venenatis nunc justo porta viverra
            lacus scelerisque ut orci ultricies. Massa ultrices lacus non lectus
            pellentesque cras posuere neque. Nunc nisl curabitur et non. Tellus
            senectus elit porta lorem.
          </p>
        </div>
      </main>
    </div>
  );
}
