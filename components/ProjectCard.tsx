import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  caption: string;
  laptopImg: string;
  mobileImg: string;
  title: string;
  desc: string;
  frontEnd: string[];
  backEnd: string[];
  slug: string;
  swap: number;
  pcolor: { backgroundColor: string };
};

const ProjectCard = ({
  title,
  desc,
  frontEnd,
  backEnd,
  laptopImg,
  mobileImg,
  caption,
  pcolor,
  slug,
  swap,
}: Props) => {
  return (
    <div
      style={pcolor}
      className={`flex flex-col ${
        swap ? "lg:flex-row-reverse" : ""
      } w-[345px] h-fit mx-auto justify-center rounded-[20px] gap-6 py-[46px] lg:w-fit lg:flex-row lg:gap-[30.89px] xl:w-[1270px] overflow-hidden`}
    >
      <div
        className={`flex flex-col self-center content-center gap-[30px] px-6 ${
          swap ? "" : "lg:pl-[107.5px]"
        } lg:gap-6`}
      >
        <div>
          <h1 className="text-white-900 text-[32px] leading-[36.8px] tracking-[-0.36px] max-w-[500px] font-bold lg:header2">
            {`${title} - `}
            <span className="block lg:inline">{` ${desc} `}</span>
          </h1>
        </div>
        <div className="flex gap-5">
          <span className="sm-reg p-2.5 bg-white-900 bg-opacity-20 rounded-md">
            {frontEnd?.join(", ")}
          </span>
          <span className="sm-reg p-2.5 bg-white-900 bg-opacity-20 rounded-md">
            {backEnd?.join(", ")}
          </span>
        </div>
        <div>
          <Link href={`/projects/${slug}`}>
            <p className="body-bold mt-[26px]">See Project Details</p>
          </Link>
        </div>
      </div>
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
            alt={caption}
          />
        </div>
        <div className="relative w-[66.74px] lg:w-[142.4px]">
          <Image
            src={mobileImg}
            className="object-contain"
            fill
            alt={caption}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
