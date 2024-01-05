import React from "react";
import Image from "next/image";

const MilestoneCard = ({
  point,
  isLearning,
}: {
  point: string;
  isLearning?: boolean;
}) => {
  return (
    <>
      <div className="flex gap-2.5">
        <div className="flex w-5 h-5 relative">
          <Image
            className="mt-[3px] lg:mt-1.5"
            src={`${isLearning ? "/tick.png" : "/challenge.png"}`}
            alt="bullet-list"
            fill
          />
        </div>
        <div className="flex items-start w-fit">
          <p className="sm-reg text-white-500 dark:text-white-800 lg:body-reg">
            {point}
          </p>
        </div>
      </div>
    </>
  );
};

export default MilestoneCard;
