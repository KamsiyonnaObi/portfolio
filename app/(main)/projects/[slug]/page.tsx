import React from "react";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { loadQuery } from "@/.sanity/lib/store";
import { POST_QUERY } from "@/.sanity/lib/queries";
import { urlFor } from "@/utils/utils";
import {
  InfoSection,
  Header,
  Process,
  ChallengeAndLearnings,
} from "@/components/ProjectDetails";

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
        <InfoSection
          role={projectData.data[0].role}
          startDate={projectData.data[0].startDate}
          endDate={projectData.data[0].endDate}
          techStack={projectData.data[0]?.stack}
        />
      </section>
      {/* Project complete Description */}
      {projectData.data[0].projectDescription && (
        <section className="px-6 py-12 bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300 w-full">
          <article className="flex flex-col gap-6 lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
            <div className="sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out">
              <PortableText value={projectData.data[0].projectDescription} />
            </div>
          </article>
        </section>
      )}
      {/* Problem Statement */}
      {projectData.data[0].problemStatement && (
        <section className="px-6 py-12 bg-white-800 sm:bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
          <article className="flex flex-col gap-6 lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
            <div className="flex flex-col gap-[9px]">
              <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
                Problem
              </p>
              <h1 className="heading3 text-black-200 dark:text-white-900 lg:header3">
                Problem Statement
              </h1>
            </div>

            <div className="sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out">
              <PortableText
                value={projectData.data[0].problemStatement.content}
              />
            </div>
          </article>
        </section>
      )}
      {/* Way Of Work */}
      <section className="px-6 py-12 bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300 w-full">
        <Process process={projectData.data[0]?.process} />
        <ChallengeAndLearnings
          JSONChallengeObj={JSON.stringify(
            projectData.data[0]?.challengesAndLearnings
          )}
        />
      </section>
      {/* Projects */}
      <section className="px-6 py-12 bg-white-900 sm:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
        <div className="flex items-center justify-center ">
          <Link
            href={"/projects"}
            className="body-bold py-5 px-[45.5px] rounded-full self-center bg-Accent-light dark:bg-Accent-dark"
          >
            See more case studies
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="hidden bg-white-800 sm:pb-12 dark:bg-black-300">
        <div>What they say about me</div>
      </section>
    </main>
  );
};

export default ProjectDetails;
