import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  caption: string;
  imageClassName?: string;
};

// A server component: the caption tooltip is pure CSS, so no client JS ships
export const TechIcon = ({ src, caption, imageClassName = "" }: Props) => {
  return (
    <div className="group relative">
      <div className="flex items-center justify-center group skills p-2 rounded-full bg-white-800 w-[50px] h-[50px] lg:w-[93px] lg:h-[93px] lg:p-4 dark:bg-black-300 sm:hover:shadow-lg ">
        <div className="flex relative w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] items-center justify-center">
          <Image
            className={imageClassName}
            src={src}
            alt={caption}
            sizes="(min-width: 1024px) 50px, 25px"
            fill
          />
        </div>
      </div>
      {caption && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white-900 px-4 py-2 text-sm text-black-200 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 dark:bg-black-200 dark:text-white-900"
        >
          {caption}
        </span>
      )}
    </div>
  );
};
