import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getCaseStudyBySlug, getCaseStudySlugs } from "@/utils/caseStudies";
import { InfoSection, Header, CaseStudyBody } from "@/components/ProjectDetails";

type Params = Promise<{ slug: string }>;

// Prebuild every case study at build time
export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
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
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

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
          laptopUrl={project.laptopImg}
          mobileUrl={project.mobileImg}
          demoLink={project.demo}
          repo={project.github}
          repoPrivate={project.githubPrivate}
        />
      </section>

      {/* Role & Tech Stack Section */}
      <section className="px-6 py-10 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200 w-full">
        <InfoSection
          role={project.role}
          startDate={project.startDate}
          endDate={project.endDate}
          frontEndtags={project.frontEndtags}
          backEndtags={project.backEndtags}
        />
      </section>

      {/* Case study body */}
      {project.content && (
        <section className="px-6 py-12 bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300 w-full">
          <article className="flex flex-col gap-6 lg:justify-between lg:w-full lg:max-w-[880px] lg:mx-auto">
            <CaseStudyBody content={project.content} />
          </article>
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
