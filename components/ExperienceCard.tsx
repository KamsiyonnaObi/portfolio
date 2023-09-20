"use client"
import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

type Props = {
    experiences: { 
        data: 
        { 
            img: string; 
            employer: string; 
            job_title: string; 
            years_worked: string;
        }[];
    };
}

const ExperienceCard = (props: Props) => {
  return (
    <>
        {props.experiences.data.map((exp, idx) => (
            <Card key={idx} className="w-[345px] py-[36px] pl-[36px] rounded-[10px] gap-[18px] bg-white-900 shadow-work cursor-pointer sm:w-[607px] sm:border sm:border-white-800 sm:dark:border-none sm:shadow-none sm:hover:shadow-work sm:hover:ml-[30px] dark:bg-transparent hover:dark:bg-black-300">
                <div className="sm:flex sm:gap-9">
                    <CardHeader className="flex p-0 w-auto">
                        <div className="h-[58px] w-[58px] rounded-[10px] border">
                            
                        </div>
                    </CardHeader>
                    
                    <CardBody className="p-0">
                        <div className="flex flex-col gap-[9px]">
                            <h3 className="base-bold text-black-200 dark:text-white-900">{exp.employer}</h3>
                            <p className="sm-reg text-white-500 dark:text-white-800">
                                {`${exp.job_title} - ${exp.years_worked} Years Experience`}
                            </p>
                        </div>
                    </CardBody>
                </div>
            </Card>
        ))}
    </>
  )
}

export default ExperienceCard