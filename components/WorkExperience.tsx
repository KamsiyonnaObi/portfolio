import Image from 'next/image';

import ExperienceCard from './ExperienceCard';
import data from '../constants/experiences.json';
import lineIcon from '../public/line.svg';

const WorkExperience = () => {
  return (
    <article className="flex flex-col items-center px-[28.82px] gap-4">
        {/* Heading */}
        <div className="flex flex-col rounded-[10px] pt-[58.91px] pb-[38.27px] px-[38px] gap-[13.82px] bg-black-200 dark:bg-white-900">
            <div>
                <h1 
                    className="text-white-900 text-[36px] mb-[23.82px] font-bold leading-[41.4px] tracking-[-0.36px] sm:header2 dark:text-black-200"
                    >
                    Work <span className="">Experien</span>ce
                </h1>
                <p className="sm-reg text-white-800 dark:text-white-500">
                    Progress and milestones: A simple walkthrough of roles, projects, and achievements in my career.
                </p>
            </div>
            <div className="h-[58px]">
                <Image className="object-fit" src={lineIcon} alt="line"/>
            </div>
        </div>
        {/* Service Cards */}
        <div className="flex flex-col gap-4 sm:flex-row">
            <ExperienceCard 
            experiences = {data}
            />    
        </div>
    </article>
  )
}

export default WorkExperience