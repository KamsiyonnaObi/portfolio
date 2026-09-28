import React from "react";
import Image from "next/image";

import { Prose } from "@/components/ProjectDetails/Prose";
import type { TextSection as TextSectionData } from "@/utils/caseStudies";

import { SectionHeading } from "./SectionHeading";

export const TextSection = (section: TextSectionData) => {
  const { eyebrow, heading, body, callouts, image } = section;

  return (
    <div className="flex flex-col gap-10 lg:w-full lg:max-w-[1100px] lg:mx-auto">
      <div className="flex flex-col gap-9 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-6 lg:max-w-[680px]">
          <SectionHeading eyebrow={eyebrow} heading={heading} />
          {body && <Prose content={body} />}
        </div>
        {callouts && callouts.length > 0 && (
          <div className="flex flex-col gap-8 lg:flex-1 lg:pt-1">
            {callouts.map((callout, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                {callout.icon && <span className="text-xl">{callout.icon}</span>}
                <p className="sm-bold text-black-200 dark:text-white-900 lg:body-bold">
                  {callout.title}
                </p>
                <p className="sm-reg text-white-500 dark:text-white-800">
                  {callout.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="relative h-[280px] w-full overflow-hidden rounded-[10px] lg:h-[420px]">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      )}
    </div>
  );
};
