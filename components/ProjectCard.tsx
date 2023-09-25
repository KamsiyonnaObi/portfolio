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
            <div key={idx} className={`flex flex-col w-fit h-fit mx-auto justify-center !bg-[${project.color}] gap-6 py-[46px] sm:flex-row sm:gap-[30.89px]`}>
                <div className="flex flex-col gap-[30px] px-6">
                    <div>
                        <h1 className="text-white-900 text-[32px] leading-[36.8px] tracking-[-0.36px] font-bold sm:header2">
                            {`${project.title} - ${project.desc} `}
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
                            <p className="body-bold">See Project Details</p>
                        </Link>
                    </div>
                </div>
                <div className="w-[320px] pl-6">
                    <div className="h-[155px] border sm:h-[331px]"></div>
                </div>
            </div>
        ))}
    </>
  )
}

export default ProjectCard