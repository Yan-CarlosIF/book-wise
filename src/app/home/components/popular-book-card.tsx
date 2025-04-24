import { Prisma } from "@prisma/client";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { prisma } from "@/lib/prisma";

import BookDetails from "./book-details";
import StarRating from "./star-rating";

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

interface PopularBookCardProps {
  className?: string;
  book: BookWithCategoriesAndRatings;
}

export default async function PopularBookCard({
  className,
  book,
}: PopularBookCardProps) {
  const session = await getServerSession(authOptions);

  const rates = await prisma.rating.findMany({
    where: {
      book_id: book.id,
    },
  });

  const rate = Math.floor(
    rates.reduce((total, rate) => total + rate.rate, 0) / rates.length,
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={twMerge(
            "flex w-full cursor-pointer gap-5 rounded-lg border-2 border-transparent bg-gray-700 px-5 py-[18px] transition-all duration-300 ease-in-out outline-none hover:border-gray-500 hover:bg-gray-600",
            className,
          )}
        >
          <Image
            src={book.cover_url}
            width={90}
            height={90}
            alt="Capa do Livro"
          />
          <div className="flex flex-col justify-between">
            <div className="text-start">
              <h3 className="leading-14 font-semibold text-gray-100">
                {book.name}
              </h3>
              <span className="text-sm leading-16 text-gray-400">
                {book.author}
              </span>
            </div>
            <StarRating rate={rate} />
          </div>
        </button>
      </SheetTrigger>
      <BookDetails book={book} rate={rate} session={session} />
    </Sheet>
  );
}
