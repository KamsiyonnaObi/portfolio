import React from "react";

const stack = [
  {
    label: "Backend & data",
    items: ["C#", ".NET REST APIs", "SQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Frontend",
    items: ["TypeScript", "Angular", "React", "Next.js"],
  },
  {
    label: "Quality & tooling",
    items: [
      "Unit testing",
      "Automated end-to-end testing",
      "Git",
      "Visual Studio",
      "VS Code",
    ],
  },
  {
    label: "How I work",
    items: [
      "Requirements analysis",
      "Stakeholder collaboration",
      "Agile",
      "Code review and mentoring",
      "Legacy modernization",
    ],
  },
];

const About = () => {
  return (
    <article className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20 xl:mx-auto xl:max-w-[1270px]">
      <div className="flex flex-col gap-6 lg:max-w-[600px] lg:flex-1">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">About</p>
          <h2 className="section-title">How I work</h2>
        </div>
        <div className="body-reg flex flex-col gap-5 text-white-500 dark:text-white-800">
          <p>
            I take pride in translating complex problems into intuitive,
            reliable software, and in working closely with the people who use
            it.
          </p>
          <p>
            I also mentor early-career developers through Itoju Mentoring, and
            I am committed to building tools that make sound financial
            planning accessible to everyone, not just the privileged few.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-[420px] xl:w-[460px]">
        <h3 className="paragraph-bold text-black-200 dark:text-white-900">
          What I work with
        </h3>
        <dl className="flex flex-col divide-y divide-[#CCE1FF] dark:divide-[#2C3C56]">
          {stack.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 py-4">
              <dt className="caption-bold uppercase tracking-[1.5px] text-Accent-light dark:text-Accent-dark">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-1.5 gap-y-1 text-base font-semibold leading-6 text-black-200 dark:text-white-900 [&>li:not(:last-child)]:after:content-[',']">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
};

export default About;
