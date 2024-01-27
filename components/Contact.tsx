"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactSchema, contactSchema } from "@/utils/validations";

import linkedIn from "../public/linkedIn.svg";
import github from "../public/github.svg";

import { EmailIcon, PhoneIcon } from "./svg";

const Contact = () => {
  const contactData = {
    firstName: "",
    email: "",
    message: "",
    bestContact: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactData,
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      const res = await fetch("api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("Error sending contact. Please check inputs");
        throw new Error(`Request failed with status: ${res.status}`);
      }
      toast.success("Contact sent successfully!");
    } catch (error: any) {
      console.error("Error sending data:", error.message);
      // Handle the error, e.g., show an error message to the user
    }
  };
  return (
    <>
      {/* Container */}
      <section className="max-w-[1270px] mx-auto 2xl:flex 2xl:gap-[143px]">
        <article>
          <form
            className="max-w-[763px] lg:mx-auto 2xl:w-[763px] 2xl:mx-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-12 lg:flex lg:space-y-0">
              <div className="pb-12 lg:w-full">
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 ">
                  <div className="sm:col-span-4 lg:col-span-full">
                    <label
                      htmlFor="name"
                      className="block body-reg text-black-300 dark:text-white-900"
                    >
                      What&apos;s your name?
                    </label>
                    <div className="mt-2">
                      <p className="text-[red]">{errors.firstName?.message}</p>
                      <div className="flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[60px] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light dark:bg-black-300 dark:border-[#2C3C56]">
                        <input
                          required
                          {...register("firstName")}
                          minLength={2}
                          maxLength={20}
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="name"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4 lg:col-span-full">
                    <label
                      htmlFor="email"
                      className="block body-reg text-black-300 dark:text-white-900"
                    >
                      What&apos;s your email?
                    </label>
                    <p className="text-[red]">{errors.email?.message}</p>
                    <div className="flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[60px] mt-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light dark:bg-black-300 dark:border-[#2C3C56]">
                      <input
                        required
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white-900"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4 lg:col-span-full">
                    <label
                      htmlFor="message"
                      className="block body-reg text-black-300 dark:text-white-900"
                    >
                      Write something about your project goals and timeframe
                    </label>
                    <p className="text-[red]">{errors.message?.message}</p>
                    <div className="mt-2 flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[190px] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light dark:bg-black-300 dark:border-[#2C3C56]">
                      <textarea
                        required
                        {...register("message")}
                        minLength={15}
                        maxLength={300}
                        id="message"
                        name="message"
                        rows={3}
                        className="resize-none block w-full bg-white-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Accent-light sm:text-sm sm:leading-6 dark:bg-black-300 dark:border-[#2C3C56] dark:text-white-900"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4 lg:col-span-full">
                    <label
                      htmlFor="contact"
                      className="block body-reg text-black-300 dark:text-white-900"
                    >
                      Best way to contact you?
                    </label>
                    <span className="block text-black-400 body-reg lg:inline-block">
                      {" "}
                      e.g phone number or email{" "}
                    </span>
                    <div className="mt-2">
                      <p className="text-[red]">
                        {errors.bestContact?.message}
                      </p>
                      <div className="flex rounded-[10px] bg-white-800 border border-[#CCE1FF] min-h-[60px] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light dark:bg-black-300 dark:border-[#2C3C56]">
                        <input
                          {...register("bestContact")}
                          type="text"
                          name="bestContact"
                          id="bestContact"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full xl:justify-end">
              <button
                type="submit"
                className="w-full rounded-full bg-Accent-light px-[69.5px] py-5 sm-bold font-semibold text-white dark:bg-Accent-dark hover:bg-Accent-dark dark:hover:bg-Accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:body-bold xl:w-fit"
              >
                Send
              </button>
            </div>
          </form>
        </article>
        {/* socials */}

        <article className="flex flex-col py-12 gap-9 max-w-[763px] lg:mx-auto lg:order-first lg:gap-20 lg:justify-start 2xl:mx-0">
          <div className="flex flex-col gap-3.5">
            <p className="paragraph text-black-300 dark:text-white-900 lg:base1">
              My Socials
            </p>
            <div className="flex gap-6 justify-start">
              <a
                href={"https://www.linkedin.com/in/kamsiyonna-obi-50a020167/"}
                target="_blank"
                rel="noopener"
                className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
              >
                <Image src={linkedIn} alt="linkedIn" />
              </a>
              <a
                href={"https://github.com/KamsiyonnaObi"}
                target="_blank"
                rel="noopener"
                className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
              >
                <Image src={github} alt="github" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <p className="paragraph text-black-300 dark:text-white-900 lg:base1">
              Phone Number
            </p>
            <div className="flex gap-[13px]">
              <div>
                <PhoneIcon />
              </div>
              <p className="paragraph-bold text-black-400 dark:text-white-800 lg:base-bold">
                +1(204)396-5056
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <p className="paragraph text-black-300 dark:text-white-900 lg:base1">
              Email Address
            </p>
            <div className="flex gap-[13px]">
              <div>
                <EmailIcon />
              </div>
              <p className="paragraph-bold text-black-400 dark:text-white-800 lg:base-bold">
                obikamsi@gmail.com
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Contact;
