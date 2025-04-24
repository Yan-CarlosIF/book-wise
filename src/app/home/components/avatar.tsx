import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  bgSize?: number;
}

export default function Avatar({
  src,
  alt,
  bgSize,
  height,
  width,
}: AvatarProps) {
  return (
    <div
      className={twMerge(
        "from-gradient1 to-gradient2 flex size-10 items-center justify-center rounded-full bg-gradient-to-b p-[2px]",
        bgSize && `size-${bgSize}`,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ height: `${height ?? width}px` }}
        className="rounded-full"
      />
    </div>
  );
}
