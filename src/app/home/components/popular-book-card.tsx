import Image from "next/image";
import { twMerge } from "tailwind-merge";

import Book from "/public/assets/books/Book_1.png";

import StarRating from "./star-rating";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "./login-modal";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import BookDetails from "./book-details";

interface PopularBookCardProps {
  className?: string;
}

export default function PopularBookCard({ className }: PopularBookCardProps) {
  const logado = true; // Simulando o estado de login do usuário

  return logado ? (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={twMerge(
            "flex w-full cursor-pointer gap-5 rounded-lg bg-gray-700 px-5 py-[18px] outline-none",
            className,
          )}
        >
          <Image src={Book} alt="Capa do Livro" />
          <div className="flex flex-col justify-between">
            <div className="text-start">
              <h3 className="leading-14 font-semibold text-gray-100">
                Entendendo Algoritmos
              </h3>
              <span className="text-sm leading-16 text-gray-400">
                Aditya Bhargava
              </span>
            </div>
            <StarRating />
          </div>
        </button>
      </SheetTrigger>
      <BookDetails />
    </Sheet>
  ) : (
    <Dialog>
      <DialogTrigger asChild disabled={logado}>
        <button
          className={twMerge(
            "flex w-full cursor-pointer gap-5 rounded-lg bg-gray-700 px-5 py-[18px] outline-none",
            className,
          )}
        >
          <Image src={Book} alt="Capa do Livro" />
          <div className="flex flex-col justify-between">
            <div className="text-start">
              <h3 className="leading-14 font-semibold text-gray-100">
                Entendendo Algoritmos
              </h3>
              <span className="text-sm leading-16 text-gray-400">
                Aditya Bhargava
              </span>
            </div>
            <StarRating />
          </div>
        </button>
      </DialogTrigger>
      <LoginModal />
    </Dialog>
  );
}
