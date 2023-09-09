import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import linkedIn from '../public/linkedIn.svg'
import github from '../public/github.svg'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="py-12 px-[47.5px] bg-white-800 sm:py-[52px] md:px-[85px]">
        <div className="flex flex-col items-center w-full gap-4 sm:flex-row sm:justify-between">
            <div className="flex">
                <p className="text-black-400 items-center body-reg">&copy; 2023 Kamsiyonna. All rights reserved.</p>
            </div>
            <div className="flex gap-6 justify-center">
                <Link href={"https://www.linkedin.com/in/kamsiyonna-obi-50a020167/"} className="w-6 h-6"><Image src={linkedIn} alt="linkedIn"/></Link>
                <Link href={"https://github.com/KamsiyonnaObi"} className="w-6 h-6"><Image src={github} alt="github"/></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer