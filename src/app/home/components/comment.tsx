import Image from "next/image";
import StarRating from "./star-rating";
import { Rating, User } from "@prisma/client";
import { differenceInDays } from "date-fns";

interface CommentProps {
  rating: Rating & { user: User };
}

export default function Comment({ rating }: CommentProps) {
  const dateInDays = differenceInDays(new Date(), new Date(rating.created_at));

  return (
    <div className="flex flex-col rounded-[8px] bg-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="from-gradient1 to-gradient2 size-10 rounded-full bg-gradient-to-b p-[2px]">
            <Image
              src={rating.user.avatar_url!}
              alt="foto de perfil"
              width={36}
              height={36}
              style={{ height: "36px" }}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-100">{rating.user.name}</h1>
            <span className="text-sm text-gray-200">
              {dateInDays === 0
                ? "Hoje"
                : `Há ${dateInDays} ${dateInDays > 1 ? "dias" : "dia"}`}
            </span>
          </div>
        </div>
        <StarRating rate={rating.rate} />
      </div>
      <p className="mt-5 text-justify text-sm text-gray-300">
        {rating.description}
      </p>
    </div>
  );
}
