import React from "react";

import type { CardGridSection as CardGridSectionData } from "@/utils/caseStudies";

import { SectionHeading } from "./SectionHeading";

export const CardGrid = (section: CardGridSectionData) => {
  const { eyebrow, heading, subheading, items, note } = section;

  return (
    <div className="flex flex-col gap-9 lg:w-full lg:max-w-[1100px] lg:mx-auto">
      <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} />
      <div className="grid grid-cols-1 gap-x-9 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2.5">
            <h3 className="paragraph-bold text-black-200 dark:text-white-900">
              {item.title}
            </h3>
            <p className="sm-reg text-white-500 dark:text-white-800 lg:body-reg">
              {item.body}
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
