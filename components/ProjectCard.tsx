import Link from 'next/link';
import React from 'react'

type Props = {
    projects: { 
        data: 
        { 
            img: string; 
            title: string; 
            desc: string; 
            frontEnd: string[] | null;
            backEnd: string[] | null;
            color: string;
        }[];
    };
}

const ProjectCard = (props: Props) => {
  return (
    <>
        {props.projects.data.map((project, idx) => (
            <div key={idx} className={`flex flex-col w-fit h-fit mx-auto justify-center rounded-[20px] border ${project.color} gap-6 py-[46px] sm:flex-row sm:gap-[30.89px]`}>
                <div className="flex flex-col self-center content-center gap-[30px] px-6 sm:gap-6">
                    <div>
                        <h1 className="text-white-900 text-[32px] leading-[36.8px] tracking-[-0.36px] font-bold sm:header2">
                            {`${project.title} - `}<br/>{` ${project.desc} `}
                        </h1>
                    </div>
                    <div className="flex gap-5">
                        <div className="p-2.5 bg-white-900 bg-opacity-20 rounded-md">
                            <p className="inline sm-reg">{project.frontEnd?.join(', ')}</p>
                        </div>
                        <div className="p-2.5 bg-white-900 bg-opacity-20 rounded-md">
                            <p className="inline sm-reg">{project.backEnd?.join(', ')}</p>
                        </div>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <p className="body-bold mt-[26px]">See Project Details</p>
                        </Link>
                    </div>
                </div>
                <div className="w-[320px] pl-6 sm:w-[585px]">
                    <div className="h-[155px] border sm:h-[331px]"></div>
                </div>
            </div>
        ))}
    </>
  )
}

export default ProjectCard