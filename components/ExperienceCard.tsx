"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

import { urlFor } from "@/utils/utils";
import { useSliderState } from "@/store/sliderStore";

interface workData {
  logo: string;
  caption: string;
  employer: string;
  role: string;
  years: number;
  desc: string;
  descCont: string;
}
type Props = workData[];

const ExperienceCard: React.FC<{ data: Props }> = ({ data }) => {
  const { sliderValue, setSliderValue } = useSliderState();
  // divide into five stages
  const stage = Math.floor(sliderValue / 20);

  const handleClick = (index: number) => {
    setSliderValue(Math.floor((index + 1) * 20));
  };

  return (
    <>
      {data.map((exp, idx) => {
        return (
          <Card
            key={idx}
            className={`Card group w-[345px] py-[36px] pl-[36px] rounded-[10px] gap-[18px] sm:w-[607px] dark:bg-transparent hover:dark:bg-black-300 ${
              stage === idx + 1 ? "selected" : ""
            }`}
            isPressable={true}
            onPress={() => {
              handleClick(idx);
            }}
          >
            <div className="sm:flex sm:gap-9">
              <CardHeader className="flex p-0 w-auto">
                <div className="flex relative h-[58px] w-[58px] rounded-[10px]">
                  <Image src={urlFor(exp.logo).url()} alt={exp.caption} fill />
                </div>
              </CardHeader>

              <CardBody className="p-0">
                <div className="flex flex-col gap-[9px]">
                  <h3 className="base-bold text-black-200 dark:text-white-900">
                    {exp.employer}
                  </h3>
                  <p className="sm-reg text-white-500 dark:text-white-800">
                    {`${exp.role} - ${exp.years} Years Experience`}
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
