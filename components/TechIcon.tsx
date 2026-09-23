"use client";
import React from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

type Props = {
  src: string;
  caption: string;
  imageClassName?: string;
};

// Built in a client component so the Tooltip's child is a real element during
// SSR (elements passed down from a Server Component can arrive as lazy
// references, which NextUI wraps in a <p> and breaks hydration).
export const TechIcon = ({ src, caption, imageClassName = "" }: Props) => {
  return (
    <Tooltip
      placement="bottom"
      content={caption}
      classNames={{
        content: ["py-2 px-4 shadow-xl", "text-black-200 dark:text-white-900"],
      }}
    >
      <div className="flex items-center justify-center group skills p-2 rounded-full bg-white-800 w-[50px] h-[50px] cursor-pointer lg:w-[93px] lg:h-[93px] lg:p-4 dark:bg-black-300 sm:hover:shadow-lg ">
        <div className="flex relative w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] items-center justify-center">
          <Image className={imageClassName} src={src} alt={caption} fill />
        </div>
      </div>
    </Tooltip>
  );
};
