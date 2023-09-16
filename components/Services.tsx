import React from 'react';
import ServiceCards from './ServiceCards';

type Props = {}

const Services = (props: Props) => {
  return (
    <article className="flex flex-col items-center px-[28.82px] gap-10">
        {/* Heading */}
        <div className="flex">
            <h1 
                className="text-black-200 text-[36px] font-bold text-center sm:header2 dark:text-white-900"
            >
                What <span className="highlight">service</span> do I provide
            </h1>
        </div>
        {/* Service Cards */}
        <div className="flex flex-col gap-10 sm:flex-row">
            <ServiceCards />
            
        </div>
    </article>
  )
}

export default Services