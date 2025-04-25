"use client";

import { Rating } from "@prisma/client";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { Check, X } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

import Avatar from "./avatar";

interface CommentSectionProps {
  session: Session | null;
  setIsTextAreaOpen: Dispatch<SetStateAction<boolean>>;
  bookId: string;
}

export default function CommentSection({
  session,
  setIsTextAreaOpen,
  bookId,
}: CommentSectionProps) {
  const firstName = session?.user.name!.split(" ")[0];
  const [textValue, setTextValue] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const router = useRouter();

  const handleCommentSectionClose = () => {
    setIsTextAreaOpen(false);
    setTextValue("");
    setRating(0);
  };

  const handleCommentSubmit = async () => {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: session?.user.id,
        book_id: bookId,
        text: textValue,
        rate: rating,
        description: textValue,
      } as Omit<Rating, "id" | "created_at">),
    });
    console.log(response);
    setIsTextAreaOpen(false);
    router.refresh();
  };

  return (
    <div className="flex h-[328px] flex-col rounded-[8px] bg-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          {session?.user.image && (
            <Avatar
              src={session?.user.image}
              alt="foto de perfil"
              width={36}
              height={36}
              bgSize={10}
            />
          )}
          <h1 className="leading-14 font-bold text-gray-100">{firstName}</h1>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <button key={i} className="group cursor-pointer text-purple-100">
              <Star
                size={26}
                className={twMerge(
                  "transition-transform hover:scale-110",
                  i < (hoverRating || rating) && "fill-purple-100",
                )}
                onMouseEnter={() => setHoverRating(i + 1)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(i + 1)}
              />
            </button>
          ))}
        </div>
      </div>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Escreva sua avaliação"
        className="mt-6 flex h-full w-full resize-none rounded-sm border border-gray-500 bg-gray-800 px-5 py-[14px] text-gray-200 transition-colors duration-200 ease-in-out placeholder:text-gray-400 focus:border-green-200 focus:caret-green-100 focus:outline-none"
      />
      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={handleCommentSectionClose}
          type="button"
          className="cursor-pointer rounded-sm bg-gray-600 p-2 text-purple-100 transition-colors duration-300 ease-in-out hover:bg-gray-500"
        >
          <X size={24} />
        </button>
        <button
          onClick={handleCommentSubmit}
          disabled={!textValue || !rating}
          type="button"
          className="cursor-pointer rounded-sm bg-gray-600 p-2 text-green-100 transition-colors duration-300 ease-in-out not-disabled:hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Check size={24} />
        </button>
      </div>
    </div>
  );
}
