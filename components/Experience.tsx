import React from "react";

import {
  education,
  experience,
  formatDate,
  mentoring,
  type Entry,
} from "@/content/experience";

const DateRange = ({ start, end }: { start: string; end?: string }) => (
  <p className="caption-bold uppercase tracking-[1.5px] text-black-400 dark:text-white-700">
    <time dateTime={start}>{formatDate(start)}</time>
    {" – "}
    {end ? <time dateTime={end}>{formatDate(end)}</time> : "Present"}
  </p>
);

const Bullets = ({
  items,
  muted = false,
}: {
  items: string[];
  muted?: boolean;
}) => (
  <ul
    className={`flex flex-col gap-3 ${
      muted
        ? "text-sm leading-6 text-white-500 dark:text-white-800"
        : "text-base leading-7 text-black-200 dark:text-white-900"
    }`}
  >
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span
          aria-hidden="true"
          className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${
            muted
              ? "bg-white-500 dark:bg-white-700"
              : "bg-Accent-light dark:bg-Accent-dark"
          }`}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const EntryCard = ({ entry }: { entry: Entry }) => (
  <li className="flex flex-col gap-2 rounded-[10px] bg-white-900 p-6 dark:bg-black-200">
    <DateRange start={entry.start} end={entry.end} />
    <p className="body-bold text-black-200 dark:text-white-900">{entry.org}</p>
    <p className="sm-bold text-Accent-light dark:text-Accent-dark">
      {entry.title}
    </p>
    {entry.note && (
      <p className="sm-reg text-white-500 dark:text-white-800">{entry.note}</p>
    )}
    <div className="mt-2">
      <Bullets items={entry.bullets} muted />
    </div>
  </li>
);

const Experience = () => {
  return (
    <article className="flex flex-col gap-14 xl:mx-auto xl:max-w-[1270px]">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Career</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <ol className="flex flex-col gap-12">
        {experience.map((role) => (
          <li
            key={`${role.org}-${role.start}`}
            className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[220px_1fr]"
          >
            <div className="md:pt-2">
              <DateRange start={role.start} end={role.end} />
            </div>
            <div className="relative flex max-w-[820px] flex-col gap-5 border-l-2 border-[#CCE1FF] pl-6 md:pl-10 dark:border-[#2C3C56]">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-Accent-light dark:bg-Accent-dark"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="text-2xl font-bold leading-8 tracking-[-0.01em] text-black-200 dark:text-white-900">
                    {role.org}
                  </h3>
                  {role.metric && (
                    <span className="rounded-full bg-Accent-secondary px-3 py-1 text-sm font-semibold text-black-200">
                      {role.metric}
                    </span>
                  )}
                </div>
                <p className="paragraph-bold text-Accent-light dark:text-Accent-dark">
                  {role.title}
                </p>
              </div>
              <p className="text-base leading-7 text-white-500 dark:text-white-800">
                {role.summary}
              </p>
              <Bullets items={role.highlights} />
              {role.details && (
                <div className="flex flex-col gap-3">
                  <p className="caption-bold uppercase tracking-[1.5px] text-black-400 dark:text-white-700">
                    Day to day
                  </p>
                  <Bullets items={role.details} muted />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-12 lg:grid-cols-2">
        <section
          aria-labelledby="mentoring-heading"
          className="flex flex-col gap-6"
        >
          <h3
            id="mentoring-heading"
            className="text-2xl font-bold leading-8 tracking-[-0.01em] text-black-200 dark:text-white-900"
          >
            Mentoring &amp; community
          </h3>
          <ul className="flex flex-col gap-6">
            {mentoring.map((entry) => (
              <EntryCard key={entry.org} entry={entry} />
            ))}
          </ul>
        </section>
        <section
          aria-labelledby="education-heading"
          className="flex flex-col gap-6"
        >
          <h3
            id="education-heading"
            className="text-2xl font-bold leading-8 tracking-[-0.01em] text-black-200 dark:text-white-900"
          >
            Education
          </h3>
          <ul className="flex flex-col gap-6">
            {education.map((entry) => (
              <EntryCard key={entry.org} entry={entry} />
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default Experience;
