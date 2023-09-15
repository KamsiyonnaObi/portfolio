"use client"
import React from 'react'

type Props = {}

const Skills = (props: Props) => {
  return (
   <div className="flex flex-col gap-10">
    <div className="flex mx-auto">
      <h1 className="text-black-200 text-[36px] font-bold">My Skills</h1>
    </div>
    <div className="flex justify-between">
      <div className="rounded-full bg-white-800 w-[52.77px] h-[52.77px]"></div>
      <div className="rounded-full bg-white-800 w-[52.77px] h-[52.77px]"></div>
      <div className="rounded-full bg-white-800 w-[52.77px] h-[52.77px]"></div>
      <div className="rounded-full bg-white-800 w-[52.77px] h-[52.77px]"></div>
    </div>
   </div>
  )
}

export default Skills