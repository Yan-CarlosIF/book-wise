"use client";

import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react";

export default function ProfileFooter() {
  return (
    <footer className="flex flex-col gap-10 text-[32px]">
      <div className="flex gap-5">
        <BookOpen className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">3856</h1>
          <p className="text-sm leading-16 text-gray-300">Páginas lidas</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Books className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">10</h1>
          <p className="text-sm leading-16 text-gray-300">Livros avaliados</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <UserList className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">8</h1>
          <p className="text-sm leading-16 text-gray-300">Autores lidos</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <BookmarkSimple className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">Computação</h1>
          <p className="text-sm leading-16 text-gray-300">
            Categoria mais lida
          </p>
        </div>
      </div>
    </footer>
  );
}
