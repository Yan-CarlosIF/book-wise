"use client";

import { IconWeight, Star } from "phosphor-react";

interface StarRatingProps {
  rate: number;
}

export default function StarRating({ rate }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return { weight: i < rate ? "fill" : "regular" };
  });

  return (
    <div className="flex gap-1 text-purple-100">
      {stars.map((star, index) => (
        <Star key={index} size={16} weight={star.weight as IconWeight} />
      ))}
    </div>
  );
}
