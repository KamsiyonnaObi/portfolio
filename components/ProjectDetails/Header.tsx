import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Earth, GitHub, Arrow } from "@/components/svg";

import { StatusPill } from "./StatusPill";

type Props = {
  title: string;
  desc: string;
  status?: string;
  laptopUrl?: string;
  mobileUrl?: string;
  demoLink?: string;
  repo?: string;
  repoPrivate?: boolean;
};
export const Header = ({
  title,
  desc,
  status,
  laptopUrl,
  mobileUrl,
  demoLink,
  repo,
  repoPrivate,
}: Props) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1100px] mx-auto gap-8 items-start justify-center lg:gap-12">
        <Link
          href="/projects"
          className="focus-ring sm-bold flex items-center gap-1.5 rounded-sm text-black-400 hover:text-black-200 dark:text-white-700 dark:hover:text-white-900 lg:body-bold"
        >
          &larr; All case studies
        </Link>
        <div className="flex flex-col items-start gap-5 text-left">
          {status && <StatusPill status={status} />}
          <h1 className="text-black-200 dark:text-white-900 text-[32px] leading-[1.15] tracking-[-0.02em] font-bold max-w-[700px] lg:text-[48px] lg:leading-[1.1] lg:max-w-[900px]">
            {desc}
          </h1>
        </div>
        {(demoLink || repo || repoPrivate) && (
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
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
            {repoPrivate ? (
              <div
                className="flex gap-[3px] h-6 items-center cursor-not-allowed"
                aria-disabled="true"
                title="Source code is private client work"
              >
                <div className="flex justify-center items-center w-6 h-6 opacity-50">
                  <GitHub />
                </div>
                <p className="sm-bold text-black-400 dark:text-white-700 lg:paragraph-bold">
                  Private &mdash; client project
                </p>
              </div>
            ) : (
              repo && (
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
              )
            )}
          </div>
        )}
        {/* Image */}
        {laptopUrl && (
          <div className="flex relative w-full justify-center self-center lg:w-[742px]">
            <div className="relative w-[320px] h-[184px] lg:w-[587.3px] lg:h-[347px] overflow-hidden">
              <Image
                src={laptopUrl}
                fill
                sizes="(min-width: 1024px) 588px, 320px"
                className="object-contain"
                loading="eager"
                fetchPriority="high"
                alt={`${title} desktop screenshot`}
              />
            </div>
            {mobileUrl && (
              <div className="relative w-[79.2px] lg:w-[142.4px]">
                <Image
                  src={mobileUrl}
                  fill
                  sizes="(min-width: 1024px) 143px, 79px"
                  className="object-contain"
                  alt={`${title} mobile screenshot`}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
