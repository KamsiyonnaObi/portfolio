import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";

import { loadQuery } from "@/.sanity/lib/store";
import { POST_QUERY } from "@/.sanity/lib/queries";
import { Earth, GitHub, Arrow } from "@/components/svg";
import { urlFor } from "@/utils/utils";

import Error from "../error";

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const projectData = await loadQuery<SanityDocument[]>(POST_QUERY, params);

  if (!projectData.data[0]) {
    return <Error />;
  }
  return (
    <main className="flex flex-col w-full min-h-screen p-0 m-0 items-center justify-between">
      {/* Title Section */}
      <section className="px-6 bg-white-800 sm:py-[72px] lg:px-12 xl:px-[85px] dark:bg-black-300 w-full">
        <p className="sm-reg mb-2.5 text-center text-Accent-light dark:text-Accent-dark lg:paragraph-bold lg:mb-[30px]">
          WEB DEV PROJECT
        </p>
        <div className="flex flex-col mx-auto gap-6 w-fit items-center justify-center lg:gap-12">
          <h1 className="text-black-200 dark:text-white-900 text-center text-[36px] leading-[36.8px] tracking-[-0.42px] font-bold max-w-[345px] lg:max-w-[695px] lg:heading1 xl:max-w-[999px]">
            <span className="highlight">{projectData.data[0].title}</span> -
            <span className="inline">{projectData.data[0].desc}</span>
          </h1>
          {/* Image */}
          <div className="flex relative w-[320px] lg:w-[742px]">
            <div className="relative w-[270px] h-[155px] lg:w-[587.3px] lg:h-[347px] overflow-hidden">
              <Image
                src={urlFor(projectData.data[0].laptopImg.asset._ref).url()}
                fill
                alt={projectData.data[0].laptopImg.caption}
              />
            </div>
            <div className="relative w-[66.74px] lg:w-[142.4px]">
              <Image
                src={urlFor(projectData.data[0].mobileImg.asset._ref).url()}
                fill
                alt={projectData.data[0].mobileImg.caption}
              />
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <a href={projectData.data[0].demo} target="_blank" rel="noopener">
              <div className="flex gap-[3px] h-6 items-center">
                {/* earth icon */}
                <div className="flex justify-center items-center w-6 h-6">
                  <Earth />
                </div>
                <p className="sm-bold text-Accent-light dark:text-Accent-dark lg:paragraph-bold">
                  Demo Site
                </p>
                {/* arrow Icon */}
                <div className=" flex items-center w-6 h-6">
                  <Arrow />
                </div>
              </div>
            </a>
            <a href={projectData.data[0].github} target="_blank" rel="noopener">
              <div className="flex gap-[3px] h-6 items-center">
                {/* GitHub icon */}
                <div className="flex justify-center items-center w-6 h-6">
                  <GitHub />
                </div>
                <p className="sm-bold text-Accent-light dark:text-Accent-dark lg:paragraph-bold">
                  Source Code
                </p>
                {/* arrow Icon */}
                <div className="flex justify-center items-center w-6 h-6">
                  <Arrow />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200"></section>
      {/* Services Section */}
      <section className="px-6 py-12 bg-white-900 sm:bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300"></section>
      {/* Work Experience */}
      <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200"></section>
      {/* Projects */}
      <section className="px-6 py-12 bg-white-900 sm:px-[85px] sm:py-[72px] dark:bg-black-200"></section>

      {/* Testimonials */}
      <section className="hidden bg-white-800 sm:pb-12 dark:bg-black-300">
        <div>What they say about me</div>
      </section>
    </main>
  );
};

export default ProjectDetails;
