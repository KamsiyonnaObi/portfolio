import React from "react";
import Link from "next/link";

import projects from "../constants/projects.json";

import ProjectCard from "./ProjectCard";

const Projects = () => {
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
        {projects.data.map((project, idx) => {
          const swap = idx % 2;
          const pcolor = {
            backgroundColor: project.color,
          };
          return (
            <ProjectCard
              project={project}
              key={project.title}
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
