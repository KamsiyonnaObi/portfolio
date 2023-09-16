import React from 'react';
import ServiceCards from './ServiceCards';

type Props = {}

const Services = (props: Props) => {
  return (
    <article className="flex flex-col px-[28.82px] mx-auto gap-10">
        {/* Heading */}
        <div className="flex">
            <h1 
                className="text-black-200 text-[36px] font-bold text-center sm:header2 dark:text-white-900"
            >
                What <span className="highlight">service</span> do I provide
            </h1>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row">
            <ServiceCards />
            
        </div>
    </article>
  )
}

export default Services