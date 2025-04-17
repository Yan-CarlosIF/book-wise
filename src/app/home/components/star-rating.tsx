"use client";

import { Star, StarHalf } from "phosphor-react";

export default function StarRating() {
  return (
    <div className="flex gap-1 text-purple-100">
      <Star size={16} weight="fill" />
      <Star size={16} weight="fill" />
      <Star size={16} weight="fill" />
      <Star size={16} weight="fill" />
      <StarHalf size={16} weight="fill" />
    </div>
  );
}
