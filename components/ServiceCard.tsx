"use client"
import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { ArrowIcon, WebIcon, SeoIcon, DevIcon } from './svg/serviceIcons';

import jsIcon from "../public/service-icons/pointer.svg";

type Props = {
    services: { data: { img: string; title: string; desc: string; }[];};
}

const ServiceCards = (props: Props) => {
    const svgComponents = [ArrowIcon, WebIcon, SeoIcon, DevIcon]; // Icon Component array

  return (
    <>
        {props.services.data.map((service, idx) => {

            const IconComponent = svgComponents[idx]; // Get the appropriate Icon
            return (
            <Card key={idx} className="group service-card w-[287.358px] py-[30px] pl-[25px] pr-[29.36px] rounded-[10px] gap-9 bg-white-800  dark:bg-black-300  dark:shadow-serv-dark ">
                <CardHeader className="flex p-0">
                    <div className="flex self-center h-[62px] w-[62px] rounded-[10px] bg-Accent-light shadow-serv-img group-hover:bg-white-900 dark:bg-Accent-dark">
                       <IconComponent /> 
                    </div>
                </CardHeader>
                
                <CardBody className="p-0">
                    <div className="flex flex-col gap-2.5">
                        <h3 className="base-bold text-black-200 group-hover:text-white-900 dark:text-white-900">{service.title}</h3>
                        <p className="sm-reg text-white-500 group-hover:text-white-800 dark:text-white-800">
                            {service.desc}
                        </p>
                    </div>
                </CardBody>
            </Card>
        )})}
    </>
  )
}

export default ServiceCards