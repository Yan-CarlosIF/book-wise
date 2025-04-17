import HomeHeader from "../components/home-header";
import PopularBookCard from "../components/popular-book-card";
import Link from "./components/link";
import RatingCard from "./components/rating-card";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="mt-10 flex w-full justify-between">
        <div className="flex w-[620px] flex-col">
          <h3 className="mb-3 text-sm text-gray-100">
            Avaliações mais recentes
          </h3>
          <nav className="scrollbar-hide flex h-[calc(100vh-182px)] flex-col gap-3 overflow-scroll scroll-smooth">
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </nav>
        </div>
        <div className="flex w-[324px] flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm leading-14 text-gray-100">
              Livros populares
            </h3>
            <Link />
          </div>
          <nav className="scrollbar-hide flex h-[calc(100vh-182px)] flex-col gap-3 overflow-scroll scroll-smooth">
            <PopularBookCard className="[&>img]:h-[94px] [&>img]:w-[64px]" />
            <PopularBookCard className="[&>img]:h-[94px] [&>img]:w-[64px]" />
            <PopularBookCard className="[&>img]:h-[94px] [&>img]:w-[64px]" />
          </nav>
        </div>
      </div>
    </>
  );
}
