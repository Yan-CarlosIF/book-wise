import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

import HomeHeader from "../components/home-header";
import PopularBookCard from "../components/popular-book-card";
import Link from "./components/link";
import RatingCard from "./components/rating-card";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const ratings = await prisma.rating.findMany({
    orderBy: { created_at: "desc" },
    include: {
      book: true,
      user: true,
    },
  });

  const betterRatedBooks = await prisma.rating.findMany({
    orderBy: { rate: "desc" },
    take: 4,
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          ratings: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  const lastRatedBook = await prisma.rating.findFirst({
    where: {
      user_id: session?.user.id,
    },
    orderBy: { created_at: "desc" },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
      user: true,
    },
  });

  return (
    <>
      <HomeHeader />

      <div className="mt-10 flex w-full justify-between">
        <div className="flex w-[620px] flex-col">
          {lastRatedBook && session?.user && (
            <>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-gray-100">
                  Sua última leitura
                </span>
                <Link href="/home/perfil" />
              </div>
              <RatingCard
                rating={lastRatedBook}
                className="mb-10 border-2 border-transparent bg-gray-600 hover:border-gray-500"
              />
            </>
          )}
          <h3 className="mb-3 text-sm text-gray-100">
            Avaliações mais recentes
          </h3>
          <nav className="scrollbar-hide flex h-[calc(100vh-205px)] flex-col gap-3 rounded-xs">
            {ratings.map((rating) => (
              <RatingCard key={rating.id} rating={rating} />
            ))}
          </nav>
        </div>
        <div className="flex w-[324px] flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm leading-14 text-gray-100">
              Livros populares
            </h3>
            <Link href="/home/explorar" />
          </div>
          <nav className="scrollbar-hide flex h-[calc(100vh-200px)] flex-col gap-3">
            {betterRatedBooks.map((rating) => (
              <PopularBookCard
                key={rating.book_id}
                book={rating.book}
                className="hover:bg-gray-700 [&>img]:h-[94px] [&>img]:w-[64px]"
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
