import React from "react";
import Image from "next/image";

export const ProblemStatement = ({
  problemDesc,
  imgUrl,
}: {
  problemDesc: string;
  imgUrl?: string;
}) => {
  return (
    <>
      <article className="flex flex-col gap-6 lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
        <div className="flex flex-col gap-[9px]">
          <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
            Problem
          </p>
          <h1 className="heading3 text-black-200 dark:text-white-900 lg:header3">
            Problem Statement
          </h1>
        </div>
        <p className="sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out">
          {problemDesc}
        </p>
        {imgUrl && (
          <div className="w-fill h-[240px] relative">
            <Image src={imgUrl} alt="" fill />
          </div>
        )}
      </article>
    </>
  );
};
