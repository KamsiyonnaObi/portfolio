import React from "react";
import Image from "next/image";

import { urlFor } from "@/utils/utils";

export const Process = ({ process }: { process: [] }) => {
  return (
    <>
      <section className="flex flex-col gap-6 mt-[42px] lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto lg:mt-[72px]">
        <div className="flex flex-col gap-[9px]">
          <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
            Way of Work
          </p>
          <h1 className="heading3 text-black-200 dark:text-white-900 lg:header3">
            My Process
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-[30px] lg:justify-between">
          {process.length > 0 &&
            process.map((tech: any) => {
              return (
                <div
                  key={tech.caption}
                  className="flex flex-col gap-2 items-center lg:gap-5"
                >
                  <div className="flex items-center justify-center group skills p-2 rounded-full bg-white-800 w-[50px] h-[50px] lg:w-[93px] lg:h-[93px] lg:p-4 dark:bg-black-300 sm:hover:shadow-lg ">
                    <div className="flex relative w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] items-center justify-center">
                      <Image
                        className=""
                        src={urlFor(tech.asset._ref).url()}
                        alt={tech.caption}
                        fill
                      />
                    </div>
                  </div>
                  <p className="sm-bold text-black-200 dark:text-white-900 lg:paragraph-bold">
                    {tech.caption}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};
