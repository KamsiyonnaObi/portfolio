import React from "react";
import Image from "next/image";

import projects from "../../constants/projects.json";

type Project = {
  title: string;
  mobileImg: string;
  laptopImg: string;
  imgAlt: string;
  desc: string;
  frontEnd: string[];
  backEnd: string[];
  color: string;
};

type Projects = {
  data: Project[];
};
const CaseStudies = () => {
  return (
    <>
      <section className="px-6 bg-white-800 sm:py-[72px] lg:px-12 xl:px-[85px] dark:bg-black-300">
        <article className="flex min-h-[186px] py-12 flex-col justify-center gap-10">
          {/* Header */}
          <section className="flex flex-col mx-auto items-center gap-y-5">
            <div className="flex mx-auto ">
              <h1 className="text-black-200 text-[42px] text-center leading-[48.3px] font-bold sm:text-[64px] sm:leading-[83.2px] dark:text-white-900 ">
                Recent <span className="w-fit highlight">Case Studies</span>
              </h1>
            </div>

            <div className="flex justify-center sm:w-fit sm:h-fit max-w-[704px]">
              <p className="text-white-500 sm-reg px-[3.5px] text-center sm:paragraph dark:text-white-800">
                Dive into my recent success stories and discover how I&apos;ve
                helped clients overcome challenges, innovate, and achieve their
                goals
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* Contact Form */}
      <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200">
        <div className="flex flex-col gap-5 items-center md:flex-row md:justify-center md:flex-wrap lg:gap-9">
          {projects.data.map((project: Project) => {
            const pcolor = {
              backgroundColor: project.color,
            };
            return (
              <div
                className="flex flex-col gap-6 max-w-[345px] lg:max-w-[550px]"
                key={project.title}
              >
                <div
                  className="rounded-[10px] pt-[43.66px] px-[30.74px]"
                  style={pcolor}
                >
                  <div className="relative w-[270px] h-[155px] lg:w-[460px] lg:h-[264px] overflow-hidden">
                    <Image
                      src={project.laptopImg}
                      className="object-contain"
                      fill
                      alt={project.imgAlt}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[6.27px] px-[30.74px]">
                  <h2 className="paragraph-bold text-black-200 dark:text-white-900 lg:header3">
                    {project.title}
                  </h2>
                  <p className="sm-reg text-white-500 lg:paragraph">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
