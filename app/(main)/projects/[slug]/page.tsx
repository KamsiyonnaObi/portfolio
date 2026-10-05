import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getCaseStudyBySlug, getCaseStudySlugs } from "@/utils/caseStudies";
import {
  Header,
  MetaRow,
  TechStackTags,
  CaseStudySection,
} from "@/components/ProjectDetails";

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
      {/* Hero */}
      <section className="px-6 py-12 bg-white-800 lg:py-[60px] lg:px-12 xl:px-[85px] dark:bg-black-300 w-full">
        <Header
          title={project.title}
          desc={project.desc}
          status={project.status}
          laptopUrl={project.laptopImg}
          mobileUrl={project.mobileImg}
          demoLink={project.demo}
          repo={project.github}
          repoPrivate={project.githubPrivate}
        />
      </section>

      {/* Meta + Tech Stack */}
      <section className="px-6 py-10 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200 w-full flex flex-col">
        <MetaRow
          product={project.product}
          skills={project.skills}
          role={project.role}
          timeline={project.timeline}
        />
        <TechStackTags
          frontEndtags={project.frontEndtags}
          backEndtags={project.backEndtags}
        />
      </section>

      {/* Case study sections */}
      {project.sections.map((section, idx) => (
        <section
          key={idx}
          className="px-6 py-12 bg-white-800 border-t border-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300 dark:border-black-200 w-full"
        >
          <CaseStudySection {...section} />
        </section>
      ))}

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
