import React from "react";

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

            <div className="flex justify-center sm:w-fit sm:h-fit">
              <p className="text-white-500 sm-reg text-center sm:body-reg dark:text-white-800">
                Dive into my recent success stories and discover how I&apos;ve
                helped clients overcome challenges, innovate, and achieve their
                goals
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* Contact Form */}
      <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200"></section>
    </>
  );
};

export default CaseStudies;
