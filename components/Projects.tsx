import React from "react";
import Link from "next/link";

import { getFeaturedCaseStudies } from "@/utils/caseStudies";

import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const featuredProjects = getFeaturedCaseStudies();

  if (featuredProjects.length == 0) {
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
        <h2 className="section-title">
          {featuredProjects.length === 1
            ? "Featured case study"
            : "Featured case studies"}
        </h2>
      </div>
      {/* Project Cards */}
      <div className="flex gap-9 flex-wrap sm:justify-center lg:gap-12">
        {featuredProjects.map((project, idx) => {
          return (
            <ProjectCard
              desc={project.desc}
              key={project.slug}
              title={project.title}
              slug={project.slug}
              frontEnd={project.frontEndtags}
              backEnd={project.backEndtags}
              laptopImg={project.cardImg ?? project.laptopImg}
              mobileImg={project.mobileImg}
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
