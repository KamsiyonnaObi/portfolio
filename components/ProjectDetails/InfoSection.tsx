import React from "react";
import moment from "moment";

import { urlFor } from "@/utils/utils";
import { TechIcon } from "@/components/TechIcon";

type Props = {
  role?: string;
  startDate?: string;
  endDate?: string;
  techStack: { asset: { _ref: string }; caption?: string }[];
};

const details = (props: Props) =>
  [
    { label: "My Role", value: props.role },
    {
      label: "Start Date",
      value: props.startDate && moment(props.startDate).format("DD/MM/YYYY"),
    },
    {
      label: "End Date",
      value: props.endDate && moment(props.endDate).format("DD/MM/YYYY"),
    },
  ].filter((item) => item.value);

export const InfoSection = (props: Props) => {
  const items = details(props);
  const { techStack } = props;

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
      {techStack.length > 0 && (
        <section className="flex flex-col gap-6 mt-[42px] lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto lg:mt-[72px]">
          <div className="flex flex-col gap-[9px]">
            <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
              Technologies Used
            </p>
            <h2 className="heading3 text-black-200 dark:text-white-900 lg:header3">
              Tech Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-[33px] lg:gap-x-9">
            {techStack.map((tech, idx) => (
              <TechIcon
                key={`${tech.caption}-${idx}`}
                src={urlFor(tech.asset._ref).url()}
                caption={tech.caption ?? ""}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
