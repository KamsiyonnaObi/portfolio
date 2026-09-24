import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { client } from "@/.sanity/lib/client";
import { loadQuery } from "@/.sanity/lib/store";
import { POST_QUERY, PROJECT_SLUGS_QUERY } from "@/.sanity/lib/queries";
import { urlFor } from "@/utils/utils";
import {
  InfoSection,
  Header,
  ChallengeAndLearnings,
} from "@/components/ProjectDetails";

export const revalidate = 60;

type Params = Promise<{ slug: string }>;

// Prebuild the known case studies; new ones are rendered on first request
export async function generateStaticParams() {
  const projects = await client.fetch<{ slug: string }[]>(PROJECT_SLUGS_QUERY);
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: project } = await loadQuery<SanityDocument | null>(
    POST_QUERY,
    { slug }
  );
  if (!project) return {};

  return {
    title: project.title,
    description: project.desc,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.desc },
  };
}

const ProjectDetails = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const { data: project } = await loadQuery<SanityDocument | null>(
    POST_QUERY,
    { slug }
  );

  if (!project) {
    notFound();
  }

  const laptopRef = project.laptopImg?.asset?._ref;
  const mobileRef = project.mobileImg?.asset?._ref;
  const challenges = project.challengesAndLearnings?.challenges ?? [];
  const learnings = project.challengesAndLearnings?.learnings ?? [];

  return (
    <div className="flex flex-col w-full min-h-screen p-0 m-0 items-center justify-between">
      {/* Title Section */}
      <section className="px-6 py-12 bg-white-800 lg:py-[60px] lg:px-12 xl:px-[85px] dark:bg-black-300 w-full">
        <p className="sm-reg mb-2.5 text-center text-Accent-light dark:text-Accent-dark lg:paragraph-bold lg:mb-[30px]">
          CASE STUDY
        </p>
        <Header
          title={project.title}
          desc={project.desc}
          laptopUrl={laptopRef ? urlFor(laptopRef).url() : undefined}
          mobileUrl={mobileRef ? urlFor(mobileRef).url() : undefined}
          demoLink={project.demo}
          repo={project.github}
        />
      </section>

      {/* Role & Tech Stack Section */}
      <section className="px-6 py-10 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
        <InfoSection
          role={project.role}
          startDate={project.startDate}
          endDate={project.endDate}
          techStack={project.stack ?? []}
        />
      </section>
      {/* Project complete Description */}
      {project.projectDescription && (
        <section className="px-6 py-12 bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300 w-full">
          <article className="flex flex-col gap-6 lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
            <div className="sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out">
              <PortableText value={project.projectDescription} />
            </div>
          </article>
        </section>
      )}
      {/* Problem Statement */}
      {project.problemStatement?.content && (
        <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
          <article className="flex flex-col gap-6 lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
            <div className="flex flex-col gap-[9px]">
              <p className="caption-bold text-Accent-light dark:text-Accent-dark lg:sm-bold">
                Problem
              </p>
              <h2 className="heading3 text-black-200 dark:text-white-900 lg:header3">
                Problem Statement
              </h2>
            </div>

            <div className="sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out">
              <PortableText value={project.problemStatement.content} />
            </div>
          </article>
        </section>
      )}
      {/* Challenges & learnings */}
      {(challenges.length > 0 || learnings.length > 0) && (
        <section className="px-6 py-12 bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300 w-full">
          <ChallengeAndLearnings
            challenges={challenges}
            learnings={learnings}
          />
        </section>
      )}
      {/* Projects */}
      <section className="px-6 py-12 bg-white-900 sm:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
        <div className="flex items-center justify-center ">
          <Link href={"/projects"} className="btn-primary">
            See more case studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
