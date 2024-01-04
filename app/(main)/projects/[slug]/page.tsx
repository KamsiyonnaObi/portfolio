import React from "react";
import Image from "next/image";
import moment from "moment";
import { SanityDocument } from "next-sanity";

import { loadQuery } from "@/.sanity/lib/store";
import { POST_QUERY } from "@/.sanity/lib/queries";
import { Earth, GitHub, Arrow } from "@/components/svg";
import { urlFor } from "@/utils/utils";
import Header from "@/components/ProjectDetails/Header";

import Error from "../error";

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const projectData = await loadQuery<SanityDocument[]>(POST_QUERY, params);

  if (!projectData.data[0]) {
    return <Error />;
  }
  return (
    <main className="flex flex-col w-full min-h-screen p-0 m-0 items-center justify-between">
      {/* Title Section */}
      <section className="px-6 py-12 bg-white-800 lg:py-[60px] lg:px-12 xl:px-[85px] dark:bg-black-300 w-full">
        <p className="sm-reg mb-2.5 text-center text-Accent-light dark:text-Accent-dark lg:paragraph-bold lg:mb-[30px]">
          WEB DEV PROJECT
        </p>
        <Header
          title={projectData.data[0].title}
          desc={projectData.data[0].desc}
          laptopUrl={urlFor(projectData.data[0].laptopImg.asset._ref).url()}
          mobileUrl={urlFor(projectData.data[0].mobileImg.asset._ref).url()}
          laptopCaption={projectData.data[0].laptopImg.caption}
          mobileCaption={projectData.data[0].mobileImg.caption}
          demoLink={projectData.data[0].demo}
          repo={projectData.data[0].github}
        />
      </section>
      {/* Role & Tech Stack Section */}
      <section className="px-6 py-10 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
        <section className="flex flex-col gap-9 mb-10 w-fit lg:flex-row lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
          <div className="flex flex-col gap-2.5">
            <h1 className="sm-bold text-black-400 dark:text-white-500 lg:body-bold">
              {" "}
              My Role
            </h1>
            <p className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
              {projectData.data[0].role}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="sm-bold text-black-400 dark:text-white-500 lg:body-bold">
              Start Date
            </h1>
            <p className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
              {moment(projectData.data[0].startDate).format("DD/MM/YYYY")}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="sm-bold text-black-400 dark:text-white-500 lg:body-bold">
              End Date
            </h1>
            <p className="paragraph-bold text-black-200 dark:text-white-900 lg:base-bold">
              {moment(projectData.data[0].endDate).format("DD/MM/YYYY")}
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6 mt-[42px] lg:w-full lg:gap-11 lg:max-w-[880px] lg:mx-auto lg:mt-[72px]">
          <div className="flex flex-col gap-[9px]">
            <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
              Technologies Used
            </p>
            <h1 className="heading3 text-black-200 dark:text-white-900 lg:header3">
              Tech Stack
            </h1>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-[33px] lg:gap-x-9">
            {projectData.data[0]?.stack?.length > 0 &&
              projectData.data[0].stack.map((tech: any) => {
                return (
                  <div
                    key={tech}
                    className="flex items-center justify-center group skills p-2 rounded-full bg-white-800 w-[50px] h-[50px] lg:w-[93px] lg:h-[93px] lg:p-4 dark:bg-black-300 sm:hover:shadow-lg "
                  >
                    <div className="flex relative w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] items-center justify-center">
                      <Image
                        className=""
                        src={urlFor(tech.asset._ref).url()}
                        alt={tech.caption}
                        fill
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </section>
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
