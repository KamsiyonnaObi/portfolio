import React from 'react'
import Image from 'next/image'

import linkedIn from '../public/linkedIn.svg'
import github from '../public/github.svg'
import Link from 'next/link'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="py-12 px-[47.5px] bg-white-900 sm:py-[52px] md:px-[85px] dark:bg-black-200">
        {/* Contact Me */}
        <section className="">
          <article className="flex flex-col mx-auto max-w-[1270px] gap-4 px-[17px] py-[77px] rounded-[20px] bg-Accent-secondary bg-footer-pattern bg-cover sm:flex-row sm:justify-between sm:px-[70px] sm:py-[83px] sm:bg-footer-pattern-lg">
            <div className="sm:w-[520px]">
              <h1 className="text-black-200 font-bold text-[30px] leading-[31.5px] tracking-[-0.15px] sm:header2">Have a project in mind that requires technical expertise?</h1>
            </div>
            <div className="sm:flex sm:items-end">
              <Link 
              href={"/"}
              className="flex justify-center text-sm font-semibold leading-[22.4px] rounded-full py-[12.5px] bg-Accent-light dark:bg-Accent-dark sm:body-bold sm:px-[54px] sm:py-5"
              >
                Get in Touch with Me 
              </Link>
            </div>
          </article>
        </section>
        {/* socials */}
        <section className="flex flex-col items-center w-full gap-4 sm:flex-row sm:justify-between">
            <div className="flex">
                <p className="text-black-400 items-center body-reg dark:text-white-800">&copy; 2023 Kamsiyonna. All rights reserved.</p>
            </div>
            <div className="flex gap-6 justify-center">
                <a 
                  href={"https://www.linkedin.com/in/kamsiyonna-obi-50a020167/"} 
                  target="_blank" 
                  rel="noopener"
                  className="w-6 h-6"
                >
                  <Image src={linkedIn} alt="linkedIn"/>
                </a>
                <a 
                  href={"https://github.com/KamsiyonnaObi"} 
                  target="_blank" 
                  rel="noopener"
                  className="w-6 h-6"
                >
                  <Image src={github} alt="github"/>
                </a>
            </div>
        </section>
    </footer>
  )
}

export default Footer