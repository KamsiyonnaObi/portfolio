"use client";
import React from "react";
import Image from "next/image";

import gitIcon from "../public/skill-icons/git.png";
import jsIcon from "../public/skill-icons/javascript.png";
import tsIcon from "../public/skill-icons/typescript.png";
import reduxIcon from "../public/skill-icons/redux.png";

type Props = {};

const Skills = (props: Props) => {
  return (
    <article className="flex min-h-[250px] flex-col justify-center gap-10">
      {/* Heading */}
      <section className="flex flex-col mx-auto justify-start gap-y-10">
        <div className="flex mx-auto ">
          <h1 className="text-black-200 text-[36px] font-bold highlight sm:header2 dark:text-white-900">
            My Skills
          </h1>
        </div>
        {/* Skill Icons */}
        <div className="flex flex-wrap w-[348px] min-h-[120px] gap-10 justify-center sm:gap-[43.74px] sm:w-fit sm:h-fit">
          <div className="flex group skills p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 dark:bg-black-300 sm:hover:shadow-lg ">
            <div className=" self-center">
              <Image
                className="grayscale group-hover:grayscale-0"
                src={jsIcon}
                alt="javascript"
              />
            </div>
          </div>
          <div className="flex group skills p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 dark:bg-black-300 sm:hover:shadow-lg">
            <div className=" self-center">
              <Image
                className="grayscale group-hover:grayscale-0"
                src={reduxIcon}
                alt="redux"
              />
            </div>
          </div>
          <div className="flex group skills p-2 rounded-full justify-center bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 dark:bg-black-300 sm:hover:shadow-lg">
            <div className=" self-center">
              <Image
                className="grayscale group-hover:grayscale-0"
                src={tsIcon}
                alt="typescript"
              />
            </div>
          </div>

          <div className="flex group skills p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 dark:bg-black-300 sm:hover:shadow-lg">
            <div className=" self-center">
              <Image
                className="grayscale group-hover:grayscale-0"
                src={gitIcon}
                alt="git"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Skills;
