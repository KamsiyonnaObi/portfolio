import React from 'react';
import ServiceCard from './ServiceCard';
import data from '../constants/services.json'

const Services = () => {
  return (
    <article className="flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="flex">
            <h1 
                className="text-black-200 text-[36px] font-bold text-center sm:header2 dark:text-white-900"
            >
                What <span className="highlight">service</span> do I provide
            </h1>
        </div>
        {/* Service Cards */}
        <div className="flex flex-col flex-wrap justify-center gap-10 sm:flex-row">
            <ServiceCard 
            services = {data}
            />
            
        </div>
    </article>
  )
}

export default Services