import React from 'react'
import ProjectCard from './ProjectCard';
import data from '../constants/projects.json';

const Projects = () => {
  return (
    <article className="flex flex-col justify-center gap-10">
    {/* Heading */}
        <div className="flex mx-auto">
            <h1 className="text-black-200 text-[36px] font-bold sm:header2 dark:text-white-900">
                Featured <span className="highlight">Projects</span>
            </h1>
        </div>
        {/* Project Cards */}
        <div className="flex flex-col gap-9 sm:flex-wrap sm:justify-center sm:gap-[43.74px]">
            <ProjectCard 
            projects={data}
            />
        </div>
   </article>
  )
}

export default Projects