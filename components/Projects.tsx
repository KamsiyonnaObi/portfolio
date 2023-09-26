import React from 'react'
import ProjectCard from './ProjectCard';
import data from '../constants/projects.json';
import Link from 'next/link';

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
            <ProjectCard 
            projects={data}
            />
        </div>
        {/* See More */}
        <Link
            href={"/"}
            className="hidden body-bold py-5 px-[45.5px] rounded-full self-center bg-Accent-light dark:bg-Accent-dark sm:flex"
        >
            See more case studies
        </Link>
   </article>
  )
}

export default Projects