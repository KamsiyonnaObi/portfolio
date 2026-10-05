"use client";

import React from "react";
import Image from "next/image";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactSchema, contactSchema } from "@/utils/validations";

import linkedIn from "../public/linkedIn.svg";
import github from "../public/github.svg";

import { EmailIcon, PhoneIcon } from "./svg";

const fieldClass =
  "flex rounded-[10px] bg-white-800 border border-[#CCE1FF] focus-within:ring-2 focus-within:ring-inset focus-within:ring-Accent-light dark:bg-black-300 dark:border-[#2C3C56]";
const inputClass =
  "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white-900";
const labelClass = "block body-reg text-black-300 dark:text-white-900";
const errorClass = "text-[#C81E1E] dark:text-[#FF8A8A]";

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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactData,
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error(
          "Your message could not be sent. Please try again, or email me directly."
        );
        return;
      }
      toast.success("Message sent. Thanks for reaching out!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        "Your message could not be sent. Please check your connection and try again."
      );
    }
  };
  return (
    <>
      <Toaster richColors />
      {/* Container */}
      <section className="max-w-[1270px] mx-auto 2xl:flex 2xl:gap-[143px]">
        <article>
          <form
            className="max-w-[763px] lg:mx-auto 2xl:w-[763px] 2xl:mx-0"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="space-y-12 lg:flex lg:space-y-0">
              <div className="pb-12 lg:w-full">
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 ">
                  <div className="sm:col-span-4 lg:col-span-full">
                    <label htmlFor="firstName" className={labelClass}>
                      What&apos;s your name?
                    </label>
                    <div className="mt-2">
                      {errors.firstName && (
                        <p
                          id="firstName-error"
                          role="alert"
                          className={errorClass}
                        >
                          {errors.firstName.message}
                        </p>
                      )}
                      <div className={`${fieldClass} min-h-[60px]`}>
                        <input
                          required
                          {...register("firstName")}
                          maxLength={20}
                          type="text"
                          id="firstName"
                          autoComplete="name"
                          aria-invalid={errors.firstName ? true : undefined}
                          aria-describedby={
                            errors.firstName ? "firstName-error" : undefined
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4 lg:col-span-full">
                    <label htmlFor="email" className={labelClass}>
                      What&apos;s your email?
                    </label>
                    {errors.email && (
                      <p id="email-error" role="alert" className={errorClass}>
                        {errors.email.message}
                      </p>
                    )}
                    <div className={`${fieldClass} min-h-[60px] mt-2`}>
                      <input
                        required
                        {...register("email")}
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4 lg:col-span-full">
                    <label htmlFor="message" className={labelClass}>
                      What would you like to talk about?
                    </label>
                    {errors.message && (
                      <p id="message-error" role="alert" className={errorClass}>
                        {errors.message.message}
                      </p>
                    )}
                    <div className={`${fieldClass} mt-2 min-h-[190px]`}>
                      <textarea
                        required
                        {...register("message")}
                        maxLength={300}
                        id="message"
                        rows={3}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className="resize-none block w-full bg-white-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Accent-light sm:text-sm sm:leading-6 dark:bg-black-300 dark:border-[#2C3C56] dark:text-white-900"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4 lg:col-span-full">
                    <label htmlFor="bestContact" className={labelClass}>
                      Best way to contact you?
                    </label>
                    <span className="block text-black-400 body-reg lg:inline-block dark:text-white-700">
                      {" "}
                      e.g phone number or email{" "}
                    </span>
                    <div className="mt-2">
                      {errors.bestContact && (
                        <p
                          id="bestContact-error"
                          role="alert"
                          className={errorClass}
                        >
                          {errors.bestContact.message}
                        </p>
                      )}
                      <div className={`${fieldClass} min-h-[60px]`}>
                        <input
                          {...register("bestContact")}
                          type="text"
                          id="bestContact"
                          aria-invalid={errors.bestContact ? true : undefined}
                          aria-describedby={
                            errors.bestContact ? "bestContact-error" : undefined
                          }
                          className={inputClass}
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
                disabled={isSubmitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 xl:w-auto xl:px-[69.5px]"
              >
                {isSubmitting ? "Sending…" : "Send"}
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
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="focus-ring w-6 h-6 lg:w-[30px] lg:h-[30px]"
              >
                <Image src={linkedIn} alt="" />
              </a>
              <a
                href={"https://github.com/KamsiyonnaObi"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="focus-ring w-6 h-6 lg:w-[30px] lg:h-[30px]"
              >
                <Image src={github} alt="" />
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
              <a
                href="tel:+12043965056"
                className="focus-ring paragraph-bold text-black-400 hover:underline dark:text-white-800 lg:base-bold"
              >
                +1(204)396-5056
              </a>
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
              <a
                href="mailto:obikamsi@gmail.com"
                className="focus-ring paragraph-bold text-black-400 hover:underline dark:text-white-800 lg:base-bold"
              >
                obikamsi@gmail.com
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Contact;
