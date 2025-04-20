import { prisma } from "@/lib/prisma";
import HomeHeader from "../components/home-header";
import PopularBookCard from "../components/popular-book-card";
import TypeFilter from "./components/type-filter";
import Input from "@/app/components/input";

type Filters =
  | "Tudo"
  | "Programação"
  | "Romance"
  | "Educação"
  | "Aventura"
  | "Fábula"
  | "Ficção"
  | "Terror"
  | "Geek"
  | "Arquitetura"
  | "Alegoria"
  | "Autoajuda"
  | "Suspense"
  | "Search";

interface ExplorerProps {
  searchParams: Promise<{ [key in Filters]: string | undefined }>;
}

export default async function Explorer({ searchParams }: ExplorerProps) {
  const books = await prisma.book.findMany({
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
  });

  const searchParamsValues = await searchParams;
  const search = searchParamsValues.Search || "";

  const activeFilters = Object.entries(searchParamsValues)
    .filter(([_, value]) => value === "true")
    .map(([key]) => key) as Filters[];

  const hasFilters =
    activeFilters.length > 0 && !activeFilters.includes("Tudo");
  const hasSearch = !!search;

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.name.toLowerCase().startsWith(search.toLowerCase()) ||
      book.author.toLowerCase().startsWith(search.toLowerCase());

    // Caso 1: nem filtro, nem busca → mostra todos
    if (!hasFilters && !hasSearch) return true;

    // Caso 2: só busca ativa
    if (!hasFilters && hasSearch) return matchesSearch;

    // Caso 3: só filtros (ou filtros + busca)
    const matchesCategory = book.categories.some((cat) =>
      activeFilters.includes(cat.category.name as Filters),
    );

    return matchesCategory && (!hasSearch || matchesSearch);
  });

  return (
    <>
      <header className="flex justify-between">
        <HomeHeader />
        <Input placeholder="Buscar livro ou autor" name="Search" />
      </header>
      <TypeFilter />
      <main className="scrollbar-hide mt-12 grid w-full grid-cols-3 gap-5 overflow-scroll scroll-smooth">
        {filteredBooks.map((book) => (
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
