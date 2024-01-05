import React from "react";
import Image from "next/image";
import moment from "moment";
import { Tooltip } from "@nextui-org/react";

import { urlFor } from "@/utils/utils";

type Props = {
  role: string;
  startDate: string;
  endDate: string;
  techStack: [];
};
export const InfoSection = ({ role, startDate, endDate, techStack }: Props) => {
  return (
    <>
      <section className="flex flex-col gap-9 mb-10 w-fit lg:flex-row lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
        <div className="flex flex-col gap-2.5">
          <h1 className="sm-bold text-black-400 dark:text-white-500 lg:body-bold">
            My Role
          </h1>
          <p className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
            {role}
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="sm-bold text-black-400 dark:text-white-500 lg:body-bold">
            Start Date
          </h1>
          <p className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
            {moment(startDate).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="sm-bold text-black-400 dark:text-white-500 lg:body-bold">
            End Date
          </h1>
          <p className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
            {moment(endDate).format("DD/MM/YYYY")}
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-[42px] lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto lg:mt-[72px]">
        <div className="flex flex-col gap-[9px]">
          <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
            Technologies Used
          </p>
          <h1 className="heading3 text-black-200 dark:text-white-900 lg:header3">
            Tech Stack
          </h1>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-[33px] lg:gap-x-9">
          {techStack.length > 0 &&
            techStack.map((tech: any, idx) => {
              return (
                <Tooltip
                  key={`${tech.caption}-${idx}`}
                  placement="bottom"
                  content={tech.caption}
                  classNames={{
                    content: [
                      "py-2 px-4 shadow-xl",
                      "text-black-200 dark:text-white-900",
                    ],
                  }}
                >
                  <div className="flex items-center justify-center group skills p-2 rounded-full bg-white-800 w-[50px] h-[50px] cursor-pointer lg:w-[93px] lg:h-[93px] lg:p-4 dark:bg-black-300 sm:hover:shadow-lg ">
                    <div className="flex relative w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] items-center justify-center">
                      <Image
                        className=""
                        src={urlFor(tech.asset._ref).url()}
                        alt={tech.caption}
                        fill
                      />
                    </div>
                  </div>
                </Tooltip>
              );
            })}
        </div>
      </section>
    </>
  );
};
