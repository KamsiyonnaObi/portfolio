import React from "react";
import Link from "next/link";
import Image from "next/image";

import { readableTextColor } from "@/utils/color";

type Props = {
  laptopImg?: string;
  mobileImg?: string;
  title: string;
  desc: string;
  frontEnd?: string[];
  backEnd?: string[];
  slug: string;
  swap: number;
  color: string;
};

const ProjectCard = ({
  title,
  desc,
  frontEnd,
  backEnd,
  laptopImg,
  mobileImg,
  color,
  slug,
  swap,
}: Props) => {
  return (
    <div
      style={{ backgroundColor: color, color: readableTextColor(color) }}
      className={`flex flex-col ${
        swap ? "lg:flex-row-reverse" : ""
      } w-[345px] h-fit mx-auto justify-center rounded-[20px] gap-6 py-[46px] lg:w-fit lg:flex-row lg:gap-[30.89px] xl:w-[1270px] overflow-hidden`}
    >
      <div
        className={`flex flex-col self-center content-center gap-[30px] px-6 ${
          swap ? "" : "lg:pl-[107.5px]"
        } lg:gap-6`}
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-[32px] font-bold leading-[1.15] tracking-[-0.01em] lg:text-[48px]">
            {title}
          </h3>
          <p className="max-w-[500px] text-lg font-semibold leading-7 lg:text-2xl lg:leading-8">
            {desc}
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {frontEnd?.length ? (
            <span className="sm-reg p-2.5 bg-white-900 bg-opacity-20 rounded-md">
              {frontEnd.join(", ")}
            </span>
          ) : null}
          {backEnd?.length ? (
            <span className="sm-reg p-2.5 bg-white-900 bg-opacity-20 rounded-md">
              {backEnd.join(", ")}
            </span>
          ) : null}
        </div>
        <div>
          <Link
            href={`/projects/${slug}`}
            className="focus-ring body-bold mt-[26px] inline-block underline underline-offset-4"
          >
            See project details
          </Link>
        </div>
      </div>
      {laptopImg && (
        <div
          className={`flex relative w-[320px] lg:w-[585px] ${
            swap ? "lg:right-[120px]" : "lg:left-[20px]"
          } lg:max-w-[50%]`}
        >
          <div className="relative w-[270px] h-[155px] lg:w-[575.3px] lg:h-[331px] overflow-hidden">
            <Image
              src={laptopImg}
              className="object-contain"
              fill
              sizes="(min-width: 1024px) 576px, 270px"
              alt={`${title} desktop screenshot`}
            />
          </div>
          {mobileImg && (
            <div className="relative w-[66.74px] lg:w-[142.4px]">
              <Image
                src={mobileImg}
                className="object-contain"
                fill
                sizes="(min-width: 1024px) 143px, 67px"
                alt={`${title} mobile screenshot`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
