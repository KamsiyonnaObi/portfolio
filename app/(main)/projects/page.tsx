import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

import { urlFor } from "@/utils/utils";
import { loadQuery } from "@/.sanity/lib/store";
import { POSTS_QUERY } from "@/.sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected projects by Kamsiyonna Obi, from the problem to solve to what was built and learned.",
  alternates: { canonical: "/projects" },
};

const CaseStudies = async () => {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return (
    <>
      <section className="px-6 py-12 bg-white-800 sm:py-[72px] lg:px-12 xl:px-[85px] dark:bg-black-300">
        <article className="flex min-h-[186px] flex-col justify-center gap-10">
          {/* Header */}
          <section className="flex flex-col mx-auto items-center gap-y-5">
            <div className="flex mx-auto ">
              <h1 className="text-black-200 text-[42px] text-center leading-[48.3px] font-bold sm:text-[64px] sm:leading-[83.2px] dark:text-white-900 ">
                Case studies
              </h1>
            </div>

            <div className="flex justify-center sm:w-fit sm:h-fit max-w-[704px]">
              <p className="text-white-500 sm-reg px-[3.5px] text-center sm:paragraph dark:text-white-800">
                Selected projects, from the problem I set out to solve to what I
                built and what I learned.
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* Case Studies */}
      <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200">
        <ul className="flex flex-col mx-auto gap-5 items-center max-w-[1136px] md:flex-row md:justify-center md:flex-wrap lg:gap-9">
          {initial.data.map((project: SanityDocument) => {
            const laptopRef = project.laptopImg?.asset?._ref;

            return (
              <li key={project.slug.current}>
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="focus-ring block rounded-[10px]"
                >
                  <div className="flex flex-col gap-6 max-w-[345px] lg:max-w-[550px]">
                    <div
                      className="rounded-[10px] pt-[43.66px] px-[30.74px]"
                      style={{ backgroundColor: project.color }}
                    >
                      <div className="relative w-[270px] h-[155px] lg:w-[460px] lg:h-[264px] overflow-hidden">
                        {laptopRef && (
                          <Image
                            src={urlFor(laptopRef).url()}
                            className="object-contain"
                            fill
                            sizes="(min-width: 1024px) 460px, 270px"
                            alt={`${project.title} screenshot`}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6.27px] px-[30.74px]">
                      <h2 className="paragraph-bold text-black-200 dark:text-white-900 lg:header3">
                        {project.title}
                      </h2>
                      <p className="sm-reg text-white-500 dark:text-white-800 lg:paragraph">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default CaseStudies;
