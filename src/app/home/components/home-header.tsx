"use client";

import { usePathname } from "next/navigation";
import { Binoculars, ChartLineUp, User } from "phosphor-react";

export default function HomeHeader() {
  const pathname = usePathname();

  const isHomePage = pathname === "/home/inicio";
  const isExplorerPage = pathname === "/home/explorar";
  const isProfilePage = pathname === "/home/perfil";

  return (
    <div className="flex gap-3">
      {isHomePage ? (
        <ChartLineUp size={32} className="text-green-100" />
      ) : isExplorerPage ? (
        <Binoculars size={32} className="text-green-100" />
      ) : isProfilePage ? (
        <User size={32} className="text-green-100" />
      ) : null}
      <h1 className="text-2xl leading-14 font-bold text-gray-100">
        {isHomePage
          ? "Início"
          : isExplorerPage
            ? "Explorar"
            : isProfilePage
              ? "Perfil"
              : null}
      </h1>
    </div>
  );
}
