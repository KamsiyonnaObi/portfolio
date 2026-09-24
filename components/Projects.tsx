import React from "react";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { urlFor } from "@/utils/utils";
import { loadQuery } from "@/.sanity/lib/store";
import { FEATURED_QUERY } from "@/.sanity/lib/queries";

import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const featuredProjects = await loadQuery<SanityDocument[]>(FEATURED_QUERY);

  if (featuredProjects.data.length == 0) {
    return (
      <div className="flex justify-center items-center">
        <Link href={"/projects"} className="btn-primary">
          View case studies
        </Link>
      </div>
    );
  }
  return (
    <article className="flex flex-col justify-center gap-9 lg:gap-12">
      {/* Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Case studies</h2>
      </div>
      {/* Project Cards */}
      <div className="flex gap-9 flex-wrap sm:justify-center lg:gap-12">
        {featuredProjects.data.map((project, idx) => {
          const laptopRef = project.laptopImg?.asset?._ref;
          const mobileRef = project.mobileImg?.asset?._ref;

          return (
            <ProjectCard
              desc={project.desc}
              key={project.slug.current}
              title={project.title}
              slug={project.slug.current}
              frontEnd={project.frontEndtags}
              backEnd={project.backEndtags}
              laptopImg={laptopRef ? urlFor(laptopRef).url() : undefined}
              mobileImg={mobileRef ? urlFor(mobileRef).url() : undefined}
              swap={idx % 2}
              color={project.color}
            />
          );
        })}
      </div>
      {/* See More */}
      <Link href={"/projects"} className="btn-primary self-center">
        All case studies
      </Link>
    </article>
  );
};

export default Projects;
