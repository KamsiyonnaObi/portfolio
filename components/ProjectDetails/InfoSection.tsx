import React from "react";

type Props = {
  role?: string;
  startDate?: string;
  endDate?: string;
  frontEndtags?: string[];
  backEndtags?: string[];
};

const details = (props: Props) =>
  [
    { label: "My Role", value: props.role },
    { label: "Start Date", value: props.startDate },
    { label: "End Date", value: props.endDate },
  ].filter((item) => item.value);

export const InfoSection = (props: Props) => {
  const items = details(props);
  const tags = [...(props.frontEndtags ?? []), ...(props.backEndtags ?? [])];

  return (
    <>
      {items.length > 0 && (
        <dl className="flex flex-col gap-9 mb-10 w-fit lg:flex-row lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2.5">
              <dt className="sm-bold text-black-400 dark:text-white-700 lg:body-bold">
                {item.label}
              </dt>
              <dd className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {tags.length > 0 && (
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
      )}
    </>
  );
};
