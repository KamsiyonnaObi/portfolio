import React from "react";

type Props = {
  product?: string;
  skills?: string[];
  role?: string;
  timeline?: string;
};

export const MetaRow = ({ product, skills, role, timeline }: Props) => {
  const items = [
    { label: "Product", value: product },
    { label: "Skills", value: skills?.join(", ") },
    { label: "My role", value: role },
    { label: "Timeline", value: timeline },
  ].filter((item) => item.value);

  if (items.length === 0) return null;

  return (
    <dl className="flex flex-col gap-9 w-fit lg:grid lg:w-full lg:max-w-[1100px] lg:mx-auto lg:gap-x-12 lg:gap-y-9 lg:grid-cols-2 xl:grid-cols-4">
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
  );
};
