import React from "react";
import { SanityDocument } from "next-sanity";

import { urlFor } from "@/utils/utils";
import { loadQuery } from "@/.sanity/lib/store";
import { SKILLS_QUERY } from "@/.sanity/lib/queries";

import { TechIcon } from "./TechIcon";

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
              <TechIcon
                key={tech._key}
                src={urlFor(tech.asset._ref).url()}
                caption={tech.caption}
                imageClassName="grayscale group-hover:grayscale-0"
              />
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Skills;
