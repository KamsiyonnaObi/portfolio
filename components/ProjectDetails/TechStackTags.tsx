import React from "react";

type Props = { frontEndtags?: string[]; backEndtags?: string[] };

export const TechStackTags = ({ frontEndtags, backEndtags }: Props) => {
  const tags = [...(frontEndtags ?? []), ...(backEndtags ?? [])];

  if (tags.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 mt-[42px] lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto lg:mt-[72px]">
      <div className="flex flex-col gap-[9px]">
        <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
          Technologies Used
        </p>
        <h2 className="heading3 text-black-200 dark:text-white-900 lg:header3">
          Tech Stack
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="sm-bold rounded-md bg-white-800 px-3.5 py-2 text-black-200 dark:bg-black-300 dark:text-white-900 lg:body-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};
