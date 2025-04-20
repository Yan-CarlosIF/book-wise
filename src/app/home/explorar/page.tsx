import { prisma } from "@/lib/prisma";
import HomeHeader from "../components/home-header";
import PopularBookCard from "../components/popular-book-card";
import TypeFilter from "./components/type-filter";
import Input from "@/app/components/input";

export default async function Explorer() {
  const books = await prisma.book.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: true,
    },
  });

  return (
    <>
      <header className="flex justify-between">
        <HomeHeader />
        <Input placeholder="Buscar livro ou autor" />
      </header>
      <TypeFilter />
      <main className="scrollbar-hide mt-12 grid w-full grid-cols-3 gap-5 overflow-scroll scroll-smooth">
        {books.map((book) => (
          <PopularBookCard
            key={book.id}
            book={book}
            className="h-fit max-h-[184px]"
          />
        ))}
      </main>
    </>
  );
}
