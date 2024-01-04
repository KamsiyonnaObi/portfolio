import React from "react";
import Image from "next/image";

import { Earth, GitHub, Arrow } from "@/components/svg";

type Props = {
  title: string;
  desc: string;
  laptopUrl: string;
  laptopCaption: string;
  mobileUrl: string;
  mobileCaption: string;
  demoLink: string;
  repo: string;
};
const Header = ({
  title,
  desc,
  laptopUrl,
  laptopCaption,
  mobileUrl,
  mobileCaption,
  demoLink,
  repo,
}: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto gap-6 w-fit items-center justify-center lg:gap-12">
        <h1 className="text-black-200 dark:text-white-900 text-center text-[36px] leading-[36.8px] tracking-[-0.42px] font-bold max-w-[345px] lg:max-w-[695px] lg:heading1 xl:max-w-[999px]">
          <span className="highlight">{title}</span> -
          <span className="inline">{desc}</span>
        </h1>
        {/* Image */}
        <div className="flex relative w-[320px] lg:w-[742px]">
          <div className="relative w-[270px] h-[155px] lg:w-[587.3px] lg:h-[347px] overflow-hidden">
            <Image src={laptopUrl} fill alt={laptopCaption} />
          </div>
          <div className="relative w-[66.74px] lg:w-[142.4px]">
            <Image src={mobileUrl} fill alt={mobileCaption} />
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <a href={demoLink} target="_blank" rel="noopener">
            <div className="flex gap-[3px] h-6 items-center">
              {/* earth icon */}
              <div className="flex justify-center items-center w-6 h-6">
                <Earth />
              </div>
              <p className="sm-bold text-Accent-light dark:text-Accent-dark lg:paragraph-bold">
                Demo Site
              </p>
              {/* arrow Icon */}
              <div className=" flex items-center w-6 h-6">
                <Arrow />
              </div>
            </div>
          </a>
          <a href={repo} target="_blank" rel="noopener">
            <div className="flex gap-[3px] h-6 items-center">
              {/* GitHub icon */}
              <div className="flex justify-center items-center w-6 h-6">
                <GitHub />
              </div>
              <p className="sm-bold text-Accent-light dark:text-Accent-dark lg:paragraph-bold">
                Source Code
              </p>
              {/* arrow Icon */}
              <div className="flex justify-center items-center w-6 h-6">
                <Arrow />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
