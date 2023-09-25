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
            <div key={idx} className={`flex bg-[${project.color}]`}>
                <div>
                    <h1 className="text-white-900 text-[32px] leading-[36.8px] tracking-[-0.36px] font-bold sm:header2">
                        {`${project.title} - ${project.desc}`}
                    </h1>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        ))}
    </>
  )
}

export default ProjectCard