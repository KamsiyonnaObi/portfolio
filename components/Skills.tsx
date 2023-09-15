"use client"
import React from 'react'
import Image from 'next/image';
import jsIcon from "../public/skill-icons/javascript.png";
import gitIcon from "../public/skill-icons/git.png";
import tsIcon from "../public/skill-icons/typescript.png";
import reduxIcon from "../public/skill-icons/redux.png";

type Props = {}

const Skills = (props: Props) => {
  return (
   <article className="flex flex-col justify-center gap-10">
    {/* Heading */}
    <div className="flex mx-auto">
      <h1 className="text-black-200 text-[36px] font-bold sm:header2">My Skills</h1>
    </div>
    {/* Skill Icons */}
    <div className="flex justify-between sm:flex-wrap sm:justify-center sm:gap-[43.74px]">
      <div className="flex p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 hover:shadow-lg hover:w-[116px] hover:h-[116px]">
        <div className=" self-center">
          <Image className="grayscale hover:grayscale-0" src={jsIcon} alt="javascript"/>
        </div>
      </div>
      <div className="flex p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 hover:shadow-lg hover:w-[116px] hover:h-[116px]">
        <div className=" self-center">
          <Image className="grayscale hover:grayscale-0" src={reduxIcon} alt="redux"/>
        </div>
      </div>
      <div className="flex p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 hover:shadow-lg hover:w-[116px] hover:h-[116px]">
        <div className=" self-center">
          <Image className="grayscale hover:grayscale-0" src={tsIcon} alt="typescript"/>
        </div>
      </div>
      <div className="flex p-2 rounded-full bg-white-800 w-[52.77px] h-[52.77px] sm:w-[100px] sm:h-[100px] sm:p-4 hover:shadow-lg hover:w-[116px] hover:h-[116px]">
        <div className=" self-center">
          <Image className="grayscale hover:grayscale-0" src={gitIcon} alt="git"/>
        </div>
      </div>
    </div>
   </article>
  )
}

export default Skills