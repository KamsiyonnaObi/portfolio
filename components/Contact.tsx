"use client";

import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block body-reg text-black-300 dark:text-white-900"
              >
                What&apos;s your name?
              </label>
              <div className="mt-2">
                <div className="flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[60px] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block body-reg text-black-300 dark:text-white-900"
              >
                What&apos;s your email?
              </label>
              <div className="flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[60px] mt-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light sm:max-w-md">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block body-reg text-black-300 dark:text-white-900"
              >
                Write something about your project goals and timeframe
              </label>
              <div className="mt-2 flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[190px] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light sm:max-w-md">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full bg-white-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="contact"
                className="block body-reg text-black-300 dark:text-white-900"
              >
                How to reach out to you back?
              </label>
              <span className="text-black-400 body-reg">
                {" "}
                e.g phone number or email{" "}
              </span>
              <div className="mt-2">
                <div className="flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[60px] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light sm:max-w-md">
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full md:justify-end">
        <button
          type="submit"
          className="w-full rounded-full bg-Accent-light px-[69.5px] py-5 sm-bold font-semibold text-white dark:bg-Accent-dark hover:bg-Accent-dark dark:hover:bg-Accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:body-bold"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
