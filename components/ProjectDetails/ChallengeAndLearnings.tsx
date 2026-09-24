import React from "react";

import MilestoneCard from "./MilestoneCard";

export const ChallengeAndLearnings = ({
  challenges,
  learnings,
}: {
  challenges: string[];
  learnings: string[];
}) => {
  return (
    <>
      <section className="flex flex-col gap-6 lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto">
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          <div className="flex flex-col gap-[9px]">
            <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
              Problem
            </p>
            <h2 className="heading3 text-black-200 dark:text-white-900 lg:header3">
              Challenges & Learnings
            </h2>
          </div>
          {challenges.length > 0 && (
            <article className="flex flex-col gap-6 lg:gap-11 py-6 px-[14px] rounded-[10px] bg-white-900 dark:bg-black-200 lg:py-9 lg:px-10">
              <h3 className="text-[#B4382A] dark:text-[#FF8A7A] body-bold lg:paragraph-bold">
                CHALLENGES
              </h3>
              <ul className="flex flex-col gap-5 items-start ">
                {challenges.map((challenge, idx) => {
                  return <MilestoneCard key={idx} point={challenge} />;
                })}
              </ul>
            </article>
          )}
          {learnings.length > 0 && (
            <article className="flex flex-col gap-6 lg:gap-11 py-6 px-[14px] rounded-[10px] bg-white-900 dark:bg-black-200 lg:py-9 lg:px-10">
              <h3 className="text-[#046C4E] dark:text-[#4ADE9F] body-bold lg:paragraph-bold">
                LEARNINGS
              </h3>
              <ul className="flex flex-col gap-5 items-start ">
                {learnings.map((point, idx) => {
                  return <MilestoneCard key={idx} point={point} isLearning />;
                })}
              </ul>
            </article>
          )}
        </div>
      </section>
    </>
  );
};
