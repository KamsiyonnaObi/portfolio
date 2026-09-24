import React from "react";
import Link from "next/link";

const facts = [
  {
    label: "Now",
    value:
      "Software Developer at Assiniboine Credit Union, building tools for financial advisors",
  },
  {
    label: "Leading",
    value: "Software Lead at Graceland eCommerce: +14% online sales revenue",
  },
  {
    label: "Mentoring",
    value: "Early-career developers through Itoju Mentoring",
  },
  { label: "Stack", value: "C#/.NET, TypeScript, Angular, React, Next.js" },
];

const Hero = () => {
  return (
    <div className="flex flex-col w-full gap-12 xl:flex-row xl:items-center xl:justify-between xl:gap-16 xl:mx-auto xl:max-w-[1270px]">
      <div className="flex flex-col gap-8 max-w-[660px] xl:flex-1">
        <div className="flex flex-col gap-5">
          <p className="eyebrow">
            Full-stack software developer · Winnipeg, Canada
          </p>
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-[-0.02em] text-black-200 sm:text-[44px] lg:text-[52px] dark:text-white-900">
            I build{" "}
            <span className="highlight">financial technology</span>{" "}
            that gives people clarity, confidence, and control.
          </h1>
          <p className="body-reg max-w-[580px] text-white-500 dark:text-white-800">
            I translate complex problems into intuitive, reliable software, and
            I&apos;m committed to making sound financial planning accessible
            to everyone.
          </p>
        </div>
        <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-[18px]">
          <Link href="/#work" className="btn-primary">
            See selected work
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>
      </div>
      <dl className="flex w-full max-w-[520px] flex-col divide-y divide-[#CCE1FF] rounded-[20px] bg-white-900 px-7 py-3 shadow-serv sm:px-9 xl:w-[420px] dark:divide-[#2C3C56] dark:bg-black-200 dark:shadow-serv-dark">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1.5 py-5">
            <dt className="caption-bold uppercase tracking-[1.5px] text-Accent-light dark:text-Accent-dark">
              {fact.label}
            </dt>
            <dd className="text-base font-semibold leading-6 text-black-200 dark:text-white-900">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Hero;
