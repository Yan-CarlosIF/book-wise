"use client";

import { Prisma } from "@prisma/client";
import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react";

type UserWithRating = Prisma.UserGetPayload<{
  include: {
    ratings: {
      include: {
        book: true;
      };
    };
  };
}>;

interface ProfileFooterProps {
  user: UserWithRating;
  mostReadedCategory: string;
}

export default function ProfileFooter({
  user,
  mostReadedCategory,
}: ProfileFooterProps) {
  const readedPages = user.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0,
  );

  const readedAuthors: string[] = [];

  user.ratings.map((rating) => {
    if (!readedAuthors.includes(rating.book.author)) {
      readedAuthors.push(rating.book.author);
    }
  });

  return (
    <footer className="flex flex-col gap-10 text-[32px]">
      <div className="flex gap-5">
        <BookOpen className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">{readedPages}</h1>
          <p className="text-sm leading-16 text-gray-300">Páginas lidas</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Books className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">{user.ratings.length}</h1>
          <p className="text-sm leading-16 text-gray-300">Livros avaliados</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <UserList className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">{readedAuthors.length}</h1>
          <p className="text-sm leading-16 text-gray-300">Autores lidos</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <BookmarkSimple className="text-green-100" />
        <div className="flex flex-col">
          <h1 className="text-[16px] text-gray-200">{mostReadedCategory}</h1>
          <p className="text-sm leading-16 text-gray-300">
            Categoria mais lida
          </p>
        </div>
      </div>
    </footer>
  );
}
