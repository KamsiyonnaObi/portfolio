import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import heroBanner from '../public/heroImages/heroBanner.svg';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-[27px] items-center sm:flex-row">
        <div className="flex flex-col mx-6 mt-12 gap-5">
            <p className="text-Accent-light text-sm leading-[18.2px] tracking-[4.2px] font-semibold sm:tracking-[6px] sm:leading-[26px] sm:text-[20px]">
                HI, I AM KAMSIYONNA
            </p>
            <div className="flex flex-col gap-3.5 font-bold text-[30px] text-black-200">
                <h1 className="lg:header1 lg:text-[48px] xl:header1">Professional 
                    <span className="highlight line-clamp-1"> Software Engineer </span> 
                    based in Canada
                </h1>
                <p className="text-white-500 text-xs font-normal md:body-reg">
                    Transforming the web one line of code at a time: Crafting cutting-edge digital 
                    experiences with precision, passion, and a profound commitment to excellence
                </p>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row md:gap-[18px]">
                <Link 
                href={"#"}
                className="flex w-full bg-Accent-light py-[12.5px] font-semibold text-sm text-white-900 justify-center rounded-full md:body-bold md:py-5 md:px-3"
                >
                    My Work 
                </Link>
                <Link 
                href={"#"}
                className="flex w-full bg-white-900 py-[12.5px] font-semibold text-sm text-white-500 justify-center rounded-full md:body-bold md:py-5"
                > 
                    Contact Me 
                </Link>
            </div>
        </div>
        <div className="sm:flex w-full h-[262px] mb-6 sm:h-[335px] md:h-full">
            <Image className="object-contain" src={heroBanner} alt="hero-banner"/>
        </div>
    </div>
  )
}

export default Hero