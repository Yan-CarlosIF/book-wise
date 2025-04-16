import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface LoginLabelProps extends Omit<React.HTMLProps<HTMLDivElement>, "src"> {
  src: StaticImageData;
  content: string;
}

export default function LoginLabel({
  src,
  content,
  className,
}: LoginLabelProps) {
  return (
    <button
      className={twMerge(
        "flex cursor-pointer items-center gap-5 rounded-lg bg-gray-600 px-6 py-4 text-sm leading-16 font-semibold text-gray-100 transition-colors duration-300 ease-in-out hover:bg-gray-500",
        className,
      )}
    >
      <Image src={src} alt="Brand Logo" width={32} height={32} />
      {content}
    </button>
  );
}
