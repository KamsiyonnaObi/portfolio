import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import heroBanner from '../public/heroImages/heroBanner.svg';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-[27px] justify-center lg:flex-row xl:mx-auto xl:max-w-[1270px]">
        <div className="flex flex-col max-w-[345px] mt-12 gap-5 mx-auto sm:max-w-[511px]">
            <div className="">
                <p className="text-Accent-light text-sm pb-5 leading-[18.2px] tracking-[4.2px] font-semibold sm:tracking-[6px] sm:leading-[26px] sm:text-[20px] dark:text-Accent-dark">
                    HI, I AM KAMSIYONNA
                </p>
                <div className="flex flex-col gap-3.5 font-bold text-[30px] text-black-200 dark:text-white-900">
                    <h1 className="sm:text-5xl sm:leading-[64px] lg:header1 lg:text-[48px] xl:header1">Professional 
                        <span className="highlight line-clamp-1 w-fit"> Software Engineer </span> 
                        based in Canada
                    </h1>
                    <p className="text-white-500 text-xs font-normal pr-[7px] sm:body-reg lg:pr-0 dark:text-white-800">
                        Transforming the web one line of code at a time: Crafting cutting-edge digital 
                        experiences with precision, passion, and a profound commitment to excellence
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row md:gap-[18px]">
                <Link 
                href={"#"}
                className="flex w-full bg-Accent-light py-[12.5px] font-semibold text-sm text-white-900 justify-center rounded-full sm:body-bold sm:py-5 sm:px-3 dark:bg-Accent-dark"
                >
                    My Work 
                </Link>
                <Link 
                href={"#"}
                className="flex w-full bg-white-900 py-[12.5px] font-semibold text-sm text-white-500 justify-center rounded-full sm:body-bold sm:py-5 dark:text-white-900 dark:bg-black-200"
                > 
                    Contact Me 
                </Link>
            </div>
        </div>
        <div className="sm:flex sm:mx-auto w-full h-[262px] mb-6 sm:h-[335px] md:h-[518.85px] md:w-[628.07px]">
            <Image className="object-contain" src={heroBanner} alt="hero-banner"/>
        </div>
    </div>
  )
}

export default Hero