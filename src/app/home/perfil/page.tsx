import Input from "@/app/components/input";
import HomeHeader from "../components/home-header";
import LastReadCard from "./components/last-read";
import Image from "next/image";
import ProfileFooter from "./footer";

export default function Page() {
  return (
    <>
      <HomeHeader />
      <div className="mt-10 flex gap-16">
        <div className="flex w-3/5 flex-col">
          <Input className="w-full" placeholder="Buscar livro avaliado" />

          <div className="scrollbar-hide mt-8 h-[calc(100vh-250px)] space-y-6 overflow-y-scroll rounded-xs">
            <LastReadCard />
            <LastReadCard />
            <LastReadCard />
          </div>
        </div>

        <aside className="flex h-[555px] w-[308px] flex-col items-center border-l border-gray-700">
          <div className="from-gradient1 to-gradient2 h-18 w-18 rounded-full bg-gradient-to-b p-[2px]">
            <Image
              src="https://github.com/yan-carlosif.png"
              alt="foto de perfil"
              width={72}
              height={72}
              className="rounded-full"
            />
          </div>

          <div className="mt-5 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-100">Yan Carlos</h1>
            <span className="text-sm text-gray-400">membro desde 2025</span>
          </div>

          <div className="bg-gradient-horizontal my-8 h-1 w-8 rounded-full"></div>

          <ProfileFooter />
        </aside>
      </div>
    </>
  );
}
