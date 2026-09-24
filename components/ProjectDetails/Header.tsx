import React from "react";
import Image from "next/image";

import { Earth, GitHub, Arrow } from "@/components/svg";

type Props = {
  title: string;
  desc: string;
  laptopUrl?: string;
  mobileUrl?: string;
  demoLink?: string;
  repo?: string;
};
export const Header = ({
  title,
  desc,
  laptopUrl,
  mobileUrl,
  demoLink,
  repo,
}: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto gap-6 w-fit items-center justify-center lg:gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-black-200 dark:text-white-900 text-[36px] leading-[1.1] tracking-[-0.02em] font-bold max-w-[345px] lg:max-w-[695px] lg:heading1 xl:max-w-[999px]">
            <span className="highlight">{title}</span>
          </h1>
          <p className="paragraph max-w-[600px] text-white-500 dark:text-white-800">
            {desc}
          </p>
        </div>
        {/* Image */}
        {laptopUrl && (
          <div className="flex relative w-[320px] lg:w-[742px]">
            <div className="relative w-[270px] h-[155px] lg:w-[587.3px] lg:h-[347px] overflow-hidden">
              <Image
                src={laptopUrl}
                fill
                sizes="(min-width: 1024px) 588px, 270px"
                className="object-contain"
                loading="eager"
                fetchPriority="high"
                alt={`${title} desktop screenshot`}
              />
            </div>
            {mobileUrl && (
              <div className="relative w-[66.74px] lg:w-[142.4px]">
                <Image
                  src={mobileUrl}
                  fill
                  sizes="(min-width: 1024px) 143px, 67px"
                  className="object-contain"
                  alt={`${title} mobile screenshot`}
                />
              </div>
            )}
          </div>
        )}
        {(demoLink || repo) && (
          <div className="flex justify-between gap-10">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm"
                aria-label="Demo site (opens in a new tab)"
              >
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
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm"
                aria-label="Source code (opens in a new tab)"
              >
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
            )}
          </div>
        )}
      </div>
    </>
  );
};
