import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { Tooltip } from "@nextui-org/react";

import { urlFor } from "@/utils/utils";
import { loadQuery } from "@/.sanity/lib/store";
import { SKILLS_QUERY } from "@/.sanity/lib/queries";

interface skillData {
  _key: string;
  asset: { _ref: string; _type: string };
  _type: string;
  caption: string;
}
const Skills = async () => {
  const skills = await loadQuery<SanityDocument[]>(SKILLS_QUERY);

  return (
    <article className="flex min-h-[250px] flex-col justify-center gap-10 lg:mx-auto lg:max-w-[964px] xl:max-w-[1270px]">
      {/* Heading */}
      <section className="flex flex-col mx-auto justify-start gap-y-10">
        <div className="flex mx-auto ">
          <h1 className="text-black-200 text-[36px] font-bold highlight sm:header2 dark:text-white-900">
            My Skills
          </h1>
        </div>
        {/* Skill Icons */}
        <div className="flex flex-wrap w-[348px] min-h-[120px] gap-10 justify-center sm:gap-[43.74px] sm:w-fit sm:h-fit ">
          {skills.data[0].stack.map((tech: skillData) => {
            return (
              <Tooltip
                key={tech._key}
                placement="bottom"
                content={tech.caption}
                classNames={{
                  content: [
                    "py-2 px-4 shadow-xl",
                    "text-black-200 dark:text-white-900",
                  ],
                }}
              >
                <div className="flex items-center justify-center group skills p-2 rounded-full bg-white-800 w-[50px] h-[50px] cursor-pointer lg:w-[93px] lg:h-[93px] lg:p-4 dark:bg-black-300 sm:hover:shadow-lg ">
                  <div className="flex relative w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] items-center justify-center">
                    <Image
                      className="grayscale group-hover:grayscale-0"
                      src={urlFor(tech.asset._ref).url()}
                      alt={tech.caption}
                      fill
                    />
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Skills;
