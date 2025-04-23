import { Book, Rating } from "@prisma/client";
import { differenceInDays } from "date-fns";
import Image from "next/image";

import StarRating from "../../components/star-rating";

interface LastReadCardProps {
  rate: Rating & { book: Book };
}

export default function LastReadCard({ rate }: LastReadCardProps) {
  const dateInDays = differenceInDays(new Date(), new Date(rate.created_at));

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-300">
        {dateInDays === 0
          ? "Hoje"
          : `Há ${dateInDays} ${dateInDays > 1 ? "dias" : "dia"}`}
      </span>
      <div className="rounded-lg bg-gray-700 p-6">
        <div className="flex gap-6">
          <Image
            src={rate.book.cover_url}
            width={98}
            height={134}
            alt="Capa do livro"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-100">
                {rate.book.name}
              </h1>
              <span className="text-gray-400">{rate.book.author}</span>
            </div>

            <StarRating rate={rate.rate} />
          </div>
        </div>
        <p className="mt-6 text-justify text-sm text-gray-300">
          {rate.description}
        </p>
      </div>
    </div>
  );
}
