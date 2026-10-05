import React from "react";
import type { Metadata } from "next";

import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hiring, or building something in fintech? Get in touch with Kamsiyonna Obi.",
  alternates: { canonical: "/contact" },
};

const ContactPage = () => {
  return (
    <>
      <section className="px-6 py-12 bg-white-800 sm:py-[72px] lg:px-12 xl:px-[85px] dark:bg-black-300">
        <article className="flex min-h-[186px] flex-col justify-center gap-10">
          {/* Header */}
          <section className="flex flex-col mx-auto items-center gap-y-5">
            <div className="flex mx-auto ">
              <h1 className="text-black-200 text-[42px] leading-[48.3px] font-bold sm:text-[64px] sm:leading-[83.2px] dark:text-white-900 ">
                Get in touch
              </h1>
            </div>

            <div className="flex justify-center sm:w-fit sm:h-fit">
              <p className="text-white-500 sm-reg text-center sm:body-reg dark:text-white-800">
                Hiring, or building something in fintech? I&apos;d like to hear
                about it.
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* Contact Form */}
      <section className="px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200">
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
