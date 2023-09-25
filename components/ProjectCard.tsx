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
            <div key={idx} className={`flex flex-col mx-auto justify-center bg-[${project.color}] gap-6 py-[46px]`}>
                <div className="flex flex-col gap-[30px] px-6">
                    <div>
                        <h1 className="text-white-900 text-[32px] leading-[36.8px] tracking-[-0.36px] font-bold sm:header2">
                            {`${project.title} - ${project.desc} `}
                        </h1>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            {project.frontEnd?.map((item, idx) => (
                                <div key={idx} className="flex bg-white-900 bg-opacity-20">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div>
                            {project.backEnd?.map((item, idx) => (
                                <div key={idx} className="flex bg-white-900 bg-opacity-20">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <p>See Project Details</p>
                        </Link>
                    </div>
                </div>
                <div className="w-[320px] pl-6">
                    <div className="h-[155px] border"></div>
                </div>
            </div>
        ))}
    </>
  )
}

export default ProjectCard