import Image from "next/image";
import StarRating from "./star-rating";

export default function Comment() {
  return (
    <div className="flex flex-col rounded-[8px] bg-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="from-gradient1 to-gradient2 size-10 rounded-full bg-gradient-to-b p-[2px]">
            <Image
              src="https://github.com/yan-carlosif.png"
              alt="foto de perfil"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-100">Yan Carlos</h1>
            <span className="text-sm text-gray-200">Há 2 dias</span>
          </div>
        </div>
        <StarRating />
      </div>
      <p className="mt-5 text-justify text-sm text-gray-300">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </div>
  );
}
