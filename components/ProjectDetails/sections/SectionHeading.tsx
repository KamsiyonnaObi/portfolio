import React from "react";

type Props = { eyebrow?: string; heading?: string; subheading?: string };

export const SectionHeading = ({ eyebrow, heading, subheading }: Props) => {
  if (!eyebrow && !heading && !subheading) return null;

  return (
    <div className="flex flex-col gap-[9px]">
      {eyebrow && (
        <p className="caption-bold uppercase tracking-[2px] text-Accent-light dark:text-Accent-dark lg:sm-bold">
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2 className="heading3 text-black-200 dark:text-white-900 lg:header3">
          {heading}
        </h2>
      )}
      {subheading && (
        <p className="paragraph text-white-500 dark:text-white-800">
          {subheading}
        </p>
      )}
    </div>
  );
};
