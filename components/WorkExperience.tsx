import data from "../constants/experiences.json";

import ExperienceCard from "./ExperienceCard";
import Slider from "./WorkExperience/Slider";
import WorkExpDesc from "./WorkExperience/WorkExpDesc";

const WorkExperience = () => {
  return (
    <article className="flex flex-col items-center gap-4 xl:gap-[26px] xl:flex-row xl:justify-center">
      {/* Heading */}
      <div className="flex flex-col justify-between w-[345px] min-h-[340px] sm:min-h-[590px] rounded-[10px] pt-[58.91px] pb-[38.27px] px-[38px] gap-[13.82px] dark:bg-black-300 sm:w-[607px] sm:pl-14 sm:pt-20 sm:pb-9 bg-white-800">
        <WorkExpDesc data={data.data} />
        <div className="flex flex-col gap-4">
          <p className="hidden sm-reg dark:text-white-800 sm:block text-white-500">
            👉🏽 Slide bar to reveal details of my web experience.
          </p>
          <div className="h-[47px] sm:h-[70px]">
            <Slider />
          </div>
        </div>
      </div>
      {/* Service Cards */}
      <div className="flex flex-col justify-start gap-4">
        <ExperienceCard experiences={data} />
      </div>
    </article>
  );
};

export default WorkExperience;
