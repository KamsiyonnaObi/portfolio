"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { useSliderState } from "@/store/sliderStore";

import {
  DigitalIcon,
  SlackIcon,
  FirefoxIcon,
  MailchimpIcon,
} from "./svg/workIcons";

type Props = {
  experiences: {
    data: {
      img: string;
      employer: string;
      job_title: string;
      years_worked: string;
    }[];
  };
};

const ExperienceCard = (props: Props) => {
  const { sliderValue } = useSliderState();
  // divide into five stages
  const quarter = Math.floor(sliderValue / 20);
  const svgComponent = [SlackIcon, FirefoxIcon, DigitalIcon, MailchimpIcon];
  return (
    <>
      {props.experiences.data.map((exp, idx) => {
        const IconComponent = svgComponent[idx];
        return (
          <Card
            key={idx}
            className={`Card group w-[345px] py-[36px] pl-[36px] rounded-[10px] gap-[18px] sm:w-[607px] dark:bg-transparent hover:dark:bg-black-300 ${
              quarter === idx + 1 ? "selected" : ""
            }`}
          >
            <div className="sm:flex sm:gap-9">
              <CardHeader className="flex p-0 w-auto">
                <div className="flex h-[58px] w-[58px] rounded-[10px]">
                  <IconComponent />
                </div>
              </CardHeader>

              <CardBody className="p-0">
                <div className="flex flex-col gap-[9px]">
                  <h3 className="base-bold text-black-200 dark:text-white-900">
                    {exp.employer}
                  </h3>
                  <p className="sm-reg text-white-500 dark:text-white-800">
                    {`${exp.job_title} - ${exp.years_worked} Years Experience`}
                  </p>
                </div>
              </CardBody>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ExperienceCard;
