import Image from "next/image";

import Book from "/public/assets/books/Book_1.png";

import StarRating from "../../components/star-rating";

export default function PopularBookCard() {
  return (
    <div className="flex w-full gap-5 rounded-lg bg-gray-700 px-5 py-[18px]">
      <Image src={Book} height={92} alt="Capa do Livro" />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="leading-14 font-semibold text-gray-100">
            Entendendo Algoritmos
          </h3>
          <span className="text-sm leading-16 text-gray-400">
            Aditya Bhargava
          </span>
        </div>
        <StarRating />
      </div>
    </div>
  );
}
