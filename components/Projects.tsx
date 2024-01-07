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
        <Link
          href={"/projects"}
          className="body-bold py-5 px-[45.5px] w-fit rounded-full self-center bg-Accent-light dark:bg-Accent-dark sm:flex"
        >
          View case studies
        </Link>
      </div>
    );
  }
  return (
    <article className="flex flex-col justify-center gap-9 lg:gap-12">
      {/* Heading */}
      <div className="flex mx-auto">
        <h1 className="text-black-200 text-[36px] font-bold sm:header2 dark:text-white-900">
          Featured <span className="highlight">Projects</span>
        </h1>
      </div>
      {/* Project Cards */}
      <div className="flex gap-9 flex-wrap sm:justify-center lg:gap-12">
        {featuredProjects.data.map((project, idx) => {
          const swap = idx % 2;
          const pcolor = {
            backgroundColor: project.color,
          };

          return (
            <ProjectCard
              desc={project.desc}
              key={project.title}
              title={project.title}
              slug={project.slug.current}
              frontEnd={project.frontEndtags}
              backEnd={project.backEndtags}
              laptopImg={urlFor(project.laptopImg.asset._ref).url()}
              mobileImg={urlFor(project.mobileImg.asset._ref).url()}
              caption={project.laptopImg?.caption || "project-image"}
              swap={swap}
              pcolor={pcolor}
            />
          );
        })}
      </div>
      {/* See More */}
      <Link
        href={"/projects"}
        className="hidden body-bold py-5 px-[45.5px] rounded-full self-center bg-Accent-light dark:bg-Accent-dark sm:flex"
      >
        See more case studies
      </Link>
    </article>
  );
};

export default Projects;
