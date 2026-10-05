import React from "react";
import Image from "next/image";

import type { SolutionSection as SolutionSectionData } from "@/utils/caseStudies";

import { SectionHeading } from "./SectionHeading";

export const SolutionShowcase = (section: SolutionSectionData) => {
  const { eyebrow, heading, subheading, surfaces } = section;

  return (
    <div className="flex flex-col gap-16 lg:w-full lg:max-w-[1100px] lg:mx-auto">
      <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} />
      {surfaces.map((surface, idx) => (
        <div key={idx} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="flex flex-col gap-1">
              <h3 className="paragraph-bold text-black-200 dark:text-white-900 lg:header3">
                {surface.title}
              </h3>
              {surface.caption && (
                <p className="sm-bold text-Accent-light dark:text-Accent-dark">
                  {surface.caption}
                </p>
              )}
            </div>
            <p className="sm-reg text-white-500 dark:text-white-800 lg:body-reg lg:max-w-[520px]">
              {surface.body}
            </p>
          </div>
          {surface.image && (
            <div className="relative h-[320px] w-full overflow-hidden rounded-[10px] bg-white-800 dark:bg-black-300 lg:h-[440px]">
              <Image
                src={surface.image}
                alt={surface.title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
