import Image from 'next/image';

import ExperienceCard from './ExperienceCard';
import data from '../constants/experiences.json';
import lineIcon from '../public/line.svg';

const WorkExperience = () => {
  return (
    <article className="flex flex-col items-center gap-4 xl:gap-[26px] xl:flex-row xl:justify-center">
        {/* Heading */}
        <div className="flex flex-col max-w-[345px] rounded-[10px] pt-[58.91px] pb-[38.27px] px-[38px] gap-[13.82px] bg-black-200 sm:max-w-[607px] sm:pl-[105px] sm:pt-[152px] sm:pr-[143px] sm:pb-[105px] dark:bg-white-900">
            <div>
                <h1 
                    className="text-white-900 text-[36px] mb-[23.82px] font-bold leading-[41.4px] tracking-[-0.36px] sm:header2 dark:text-black-200"
                    >
                    Work <span className="w-fit">Experien</span>ce
                </h1>
                <p className="sm-reg text-white-800 sm:body-reg dark:text-white-500">
                    Progress and milestones: A simple walkthrough of roles, projects, and achievements in my career.
                </p>
            </div>
            <div className="h-[58px]">
                <Image className="object-fit dark:fill-black-200" src={lineIcon} alt="line"/>
            </div>
        </div>
        {/* Service Cards */}
        <div className="flex flex-col gap-4">
            <ExperienceCard 
            experiences = {data}
            />    
        </div>
    </article>
  )
}

export default WorkExperience