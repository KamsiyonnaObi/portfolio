import React from "react";

import type { StatGridSection as StatGridSectionData } from "@/utils/caseStudies";

import { SectionHeading } from "./SectionHeading";

export const StatGrid = (section: StatGridSectionData) => {
  const { eyebrow, heading, subheading, stats, note } = section;

  return (
    <div className="flex flex-col gap-9 lg:w-full lg:max-w-[1100px] lg:mx-auto">
      <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-[10px] bg-white-900 p-6 dark:bg-black-300"
          >
            <p className="heading2 text-black-200 dark:text-white-900">
              {stat.value}
            </p>
            <p className="sm-reg text-white-500 dark:text-white-800">
              {stat.body}
            </p>
          </div>
        ))}
      </div>
      {note && (
        <p className="sm-reg italic text-white-500 dark:text-white-800">
          {note}
        </p>
      )}
    </div>
  );
};
