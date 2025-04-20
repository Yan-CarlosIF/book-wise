import Image from "next/image";

import BookImg from "@/../public/images/books/arquitetura-limpa.png";
import StarRating from "../../components/star-rating";
import { Rating, Book, User } from "@prisma/client";

import { differenceInDays } from "date-fns";

type RatingProp = Rating & { book: Book; user: User };

interface RatingCardProps {
  rating: RatingProp;
}

export default function RatingCard({ rating }: RatingCardProps) {
  const dateInDays = differenceInDays(new Date(), new Date(rating.created_at));

  return (
    <div className="flex flex-col rounded-lg bg-gray-700 p-6">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <div className="from-gradient1 to-gradient2 h-10 w-10 rounded-full bg-gradient-to-b p-[2px]">
            <Image
              src={rating.user.avatar_url!}
              alt="foto de perfil"
              width={36}
              height={36}
              style={{ height: "36px" }}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col self-center">
            <h1 className="leading-16 text-gray-100">{rating.user.name}</h1>
            <span className="text-sm text-gray-400">
              {dateInDays === 0
                ? "Hoje"
                : `Há ${dateInDays} ${dateInDays > 1 ? "dias" : "dia"}`}
            </span>
          </div>
        </div>
        <StarRating rate={rating.rate} />
      </header>
      <main className="mt-8 flex w-full gap-5">
        <Image
          src={rating.book.cover_url}
          width={108}
          height={152}
          alt="Capa do Livro"
        />
        <div className="flex flex-col gap-5">
          <header className="flex flex-col">
            <h1 className="font-semibold text-gray-100">{rating.book.name}</h1>
            <span className="text-sm leading-16 text-gray-400">
              {rating.book.author}
            </span>
          </header>
          <p className="line-clamp-4 text-justify text-sm leading-16 text-ellipsis text-gray-300">
            {rating.description}
          </p>
        </div>
      </main>
    </div>
  );
}
