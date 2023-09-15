import React from 'react'
import Image from 'next/image'

import linkedIn from '../public/linkedIn.svg'
import github from '../public/github.svg'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="py-12 px-[47.5px] bg-white-800 sm:py-[52px] md:px-[85px] dark:bg-black-200">
        <div className="flex flex-col items-center w-full gap-4 sm:flex-row sm:justify-between">
            <div className="flex">
                <p className="text-black-400 items-center body-reg">&copy; 2023 Kamsiyonna. All rights reserved.</p>
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
        </div>
    </footer>
  )
}

export default Footer