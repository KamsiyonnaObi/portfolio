import React from "react";

import MilestoneCard from "./MilestoneCard";
export const ChallengeAndLearnings = ({
  JSONChallengeObj,
}: {
  JSONChallengeObj: string;
}) => {
  const { challenges, learnings } = JSON.parse(JSONChallengeObj);

  return (
    <>
      <section className="flex flex-col gap-6 mt-[42px] lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto lg:mt-[72px]">
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          <div className="flex flex-col gap-[9px]">
            <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
              Problem
            </p>
            <h1 className="heading3 text-black-200 dark:text-white-900 lg:header3">
              Challenges & Learnings
            </h1>
          </div>
          <article className="flex flex-col gap-6 lg:gap-11 py-6 px-[14px] rounded-[10px] bg-white-800 dark:bg-black-300 lg:py-9 lg:px-10">
            <h1 className="text-[#E15A46] body-bold lg:paragraph-bold">
              CHALLENGES
            </h1>
            <article className="flex flex-col gap-5 items-start ">
              {challenges.map((challenge: string, idx: any) => {
                return <MilestoneCard key={idx} point={challenge} />;
              })}
            </article>
          </article>
          <article className="flex flex-col gap-6 lg:gap-11 py-6 px-[14px] rounded-[10px] bg-white-800 dark:bg-black-300 lg:py-9 lg:px-10">
            <h1 className="text-[#02BC7D] body-bold lg:paragraph-bold">
              LEARNINGS
            </h1>
            <article className="flex flex-col gap-5 items-start ">
              {learnings.map((point: string, idx: any) => {
                return <MilestoneCard key={idx} point={point} isLearning />;
              })}
            </article>
          </article>
        </div>
      </section>
    </>
  );
};
