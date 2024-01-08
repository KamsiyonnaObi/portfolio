"use client";
import React from "react";

import { useSliderState } from "@/store/sliderStore";

interface workData {
  logo: string;
  caption: string;
  employer: string;
  role: string;
  years: number;
  desc: string;
  descCont: string;
}
type Props = workData[];
const WorkExpDesc: React.FC<{ data: Props }> = ({ data }) => {
  const { sliderValue } = useSliderState();
  const stage = Math.floor(sliderValue / 20);

  const workStage = {
    employer: data[stage - 1]?.employer || "",
    jobDesc: data[stage - 1]?.desc || "",
    jobDescCont: data[stage - 1]?.descCont || "",
  };

  return (
    <>
      {stage === 0 ? (
        <>
          <h1 className="dark:text-white-900 text-[36px] mb-[23.82px] font-bold leading-[41.4px] tracking-[-0.36px] sm:header2 text-black-200">
            <span className="w-fit highlight"> Work </span> Experience
          </h1>
          <p className="sm-reg sm:hidden dark:text-white-800 sm:body-reg text-white-500">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <p className="hidden sm-reg dark:text-white-800 sm:body-reg sm:block text-white-500">
            Take a trip through my career, where I&apos;ve not only paved the
            way but also reached important goals, taken on different{" "}
            <span className="text-Accent-light dark:text-Accent-dark">
              roles
            </span>
            , worked on impressive{" "}
            <span className="text-Accent-light dark:text-Accent-dark">
              projects
            </span>
            , and accomplished notable things.
          </p>
          <p className="hidden sm-reg dark:text-white-800 sm:body-reg sm:block text-white-500">
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with{" "}
            <span className="text-Accent-light dark:text-Accent-dark">
              growth
            </span>{" "}
            and{" "}
            <span className="text-Accent-light dark:text-Accent-dark">
              innnovation
            </span>
            .
          </p>
        </>
      ) : (
        <>
          <h1 className="dark:text-white-900 text-[36px] sm:delay-150 sm:duration-300 font-bold leading-[41.4px] tracking-[-0.36px] sm:header2 text-black-200">
            {workStage?.employer}
          </h1>
          <p className="sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out">
            {workStage?.jobDesc}
          </p>
          <p className="sm-reg dark:text-white-800 sm:body-reg text-white-500">
            {workStage?.jobDescCont}
          </p>
        </>
      )}
    </>
  );
};

export default WorkExpDesc;
